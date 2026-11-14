'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { brainRegions } from '@/data/brainRegions'
import BrainLegend from './BrainLegend'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { AlertCircle } from 'lucide-react'

// Camera default coordinates: Centered 3/4 Perspective with ample breathing room (matching Image 2)
const DEFAULT_CAM_POS = new THREE.Vector3(4.2, 2.0, 5.0)
const DEFAULT_LOOK_AT = new THREE.Vector3(0, 0.08, 0)

// Map region ID string to integer index (1..10)
const REGION_ID_TO_INDEX: Record<string, number> = {
  prefrontal: 1,
  acc: 2,
  striatum: 3,
  nac: 4,
  thalamus: 5,
  amygdala: 6,
  hippocampus: 7,
  visual: 8,
  vta: 9,
  cerebellum: 10,
}

// Custom GLSL Shaders for Particle Brain
const VERTEX_SHADER = `
  uniform float u_time;
  uniform int u_activeRegion;
  uniform int u_hoveredRegion;
  uniform float u_deepCutaway;
  uniform float u_pointScale;

  attribute float a_regionIndex;
  attribute float a_isDeep;

  varying vec3 v_color;
  varying float v_alpha;

  void main() {
    int regIdx = int(a_regionIndex + 0.1);
    bool isSelected = (u_activeRegion > 0 && regIdx == u_activeRegion);
    bool isHovered = (u_hoveredRegion > 0 && regIdx == u_hoveredRegion);
    bool isDeepStructure = (a_isDeep > 0.5);

    // Subtle gentle breathing movement
    float breath = sin(u_time * 1.5 + position.y * 3.0 + position.z * 2.0) * 0.005;
    vec3 animatedPos = position + normal * breath;

    // Subtle travelling neural spark wave
    float spark = sin(position.y * 5.0 - u_time * 2.0);

    // Color definitions
    vec3 deepGreen = vec3(0.12, 0.28, 0.15);     // Ambient base
    vec3 emerald = vec3(0.25, 0.60, 0.30);       // Surface highlight
    vec3 hoverLime = vec3(0.65, 0.95, 0.35);     // Hover state
    vec3 neonLime = vec3(0.725, 1.0, 0.263);     // #B9FF43 Selected state
    vec3 whiteHot = vec3(0.96, 1.0, 0.92);

    vec3 finalColor = mix(deepGreen, emerald, normal.y * 0.5 + 0.5);

    float alpha = 0.85;
    float pointSize = 2.4;

    if (isSelected) {
      finalColor = mix(neonLime, whiteHot, spark * 0.35 + 0.25);
      alpha = 1.0;
      pointSize = isDeepStructure ? 5.8 : 5.0;
    } else if (isHovered) {
      finalColor = hoverLime;
      alpha = 0.95;
      pointSize = isDeepStructure ? 4.6 : 4.0;
    } else {
      // If a deep structure is active, dim the outer cortical particles for an internal X-ray cutaway
      if (u_deepCutaway > 0.01) {
        if (!isDeepStructure) {
          alpha = mix(0.75, 0.18, u_deepCutaway);
          finalColor = mix(finalColor, vec3(0.06, 0.16, 0.09), u_deepCutaway * 0.5);
          pointSize = 2.0;
        } else {
          alpha = 0.40;
          pointSize = 2.8;
        }
      }
    }

    v_color = finalColor;
    v_alpha = alpha;

    vec4 mvPosition = modelViewMatrix * vec4(animatedPos, 1.0);
    gl_PointSize = pointSize * u_pointScale * (4.2 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const FRAGMENT_SHADER = `
  precision highp float;
  varying vec3 v_color;
  varying float v_alpha;

  void main() {
    // Circular particles with soft luminous bloom edges
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float glow = clamp(1.0 - dist * 2.0, 0.0, 1.0);
    float core = clamp(1.0 - dist * 3.5, 0.0, 1.0);

    vec3 col = v_color + vec3(0.35) * pow(core, 2.5);
    gl_FragColor = vec4(col, v_alpha * pow(glow, 1.2));
  }
`

interface ParticleBrainProps {
  selectedRegionId: string | null
  onSelectRegion: (id: string | null) => void
  onHoverRegion?: (id: string | null) => void
}

export default function ParticleBrain({
  selectedRegionId,
  onSelectRegion,
  onHoverRegion,
}: ParticleBrainProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const isResettingCameraRef = useRef<boolean>(false)

  // Floating tooltip DOM references for direct 0-render updates
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const tooltipTitleRef = useRef<HTMLSpanElement | null>(null)
  const tooltipDescRef = useRef<HTMLSpanElement | null>(null)

  // Callbacks and state held in refs to prevent useEffect re-instantiations
  const onSelectRegionRef = useRef(onSelectRegion)
  const onHoverRegionRef = useRef(onHoverRegion)
  const targetCutawayRef = useRef<number>(0.0)

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [loadError, setLoadError] = useState<string | null>(null)

  const reducedMotion = useReducedMotion()
  const reducedMotionRef = useRef(reducedMotion)

  useEffect(() => {
    onSelectRegionRef.current = onSelectRegion
  }, [onSelectRegion])

  useEffect(() => {
    onHoverRegionRef.current = onHoverRegion
  }, [onHoverRegion])

  useEffect(() => {
    reducedMotionRef.current = reducedMotion
  }, [reducedMotion])

  // Reset Camera View Handler (smooth cubic-bezier interpolation)
  const handleResetCamera = useCallback(() => {
    if (!cameraRef.current || !controlsRef.current) return
    isResettingCameraRef.current = true
    const camera = cameraRef.current
    const controls = controlsRef.current

    const startPos = camera.position.clone()
    const targetPos = DEFAULT_CAM_POS.clone()
    const startTarget = controls.target.clone()
    const destTarget = DEFAULT_LOOK_AT.clone()
    const startTime = performance.now()
    const duration = 700 // ms

    const animateReset = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1.0)
      const ease = 1 - Math.pow(1 - progress, 3)

      camera.position.lerpVectors(startPos, targetPos, ease)
      controls.target.lerpVectors(startTarget, destTarget, ease)
      controls.update()

      if (progress < 1.0) {
        requestAnimationFrame(animateReset)
      } else {
        isResettingCameraRef.current = false
      }
    }

    requestAnimationFrame(animateReset)
  }, [])

  // Sync selected region with shader uniform and cutaway target without re-rendering Three.js
  useEffect(() => {
    if (!materialRef.current) return
    const mat = materialRef.current

    const activeIdx = selectedRegionId ? REGION_ID_TO_INDEX[selectedRegionId] || 0 : 0
    mat.uniforms.u_activeRegion.value = activeIdx

    const activeRegionObj = brainRegions.find((r) => r.id === selectedRegionId)
    targetCutawayRef.current = activeRegionObj && activeRegionObj.isDeep ? 1.0 : 0.0
  }, [selectedRegionId])

  // Single Mount: Initialize Three.js Scene, Camera, Controls, and Particles ONCE
  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()
    scene.background = null

    const width = container.clientWidth
    const height = container.clientHeight || 440

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100)
    camera.position.copy(DEFAULT_CAM_POS)
    camera.lookAt(DEFAULT_LOOK_AT)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(width, height)

    // 2. OrbitControls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.dampingFactor = 0.06
    controls.rotateSpeed = 0.8
    controls.zoomSpeed = 0.8
    controls.minDistance = 3.0
    controls.maxDistance = 9.5
    controls.minPolarAngle = Math.PI * 0.15
    controls.maxPolarAngle = Math.PI * 0.85
    controls.target.copy(DEFAULT_LOOK_AT)
    controlsRef.current = controls

    // 3. Custom Shader Material
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        u_time: { value: 0 },
        u_activeRegion: { value: 1 }, // default to prefrontal (1)
        u_hoveredRegion: { value: 0 },
        u_deepCutaway: { value: 0.0 },
        u_pointScale: { value: Math.min(window.devicePixelRatio, 1.5) },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    materialRef.current = material

    // 4. Raycast Interaction Hit Spheres for all 10 Regions
    const hitGroup = new THREE.Group()
    scene.add(hitGroup)

    const hitMeshMap = new Map<THREE.Mesh, string>()
    brainRegions.forEach((region) => {
      let radius = 0.30
      if (region.id === 'prefrontal') radius = 0.52
      else if (region.id === 'cerebellum') radius = 0.48
      else if (region.id === 'striatum') radius = 0.40
      else if (region.id === 'visual') radius = 0.38

      const hitGeo = new THREE.SphereGeometry(radius, 12, 12)
      const hitMat = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false,
      })
      const hitMesh = new THREE.Mesh(hitGeo, hitMat)
      hitMesh.position.set(region.center[0], region.center[1], region.center[2])
      hitGroup.add(hitMesh)
      hitMeshMap.set(hitMesh, region.id)
    })

    // 5. Binary Particle Loader
    let pointsMesh: THREE.Points | null = null

    fetch('/models/brain/brainParticles.bin')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        return res.arrayBuffer()
      })
      .then((arrayBuffer) => {
        const stride = 26
        const particleCount = Math.floor(arrayBuffer.byteLength / stride)

        const positions = new Float32Array(particleCount * 3)
        const normals = new Float32Array(particleCount * 3)
        const regionIndices = new Float32Array(particleCount)
        const isDeepFlags = new Float32Array(particleCount)

        const view = new DataView(arrayBuffer)
        for (let i = 0; i < particleCount; i++) {
          const offset = i * stride
          positions[i * 3 + 0] = view.getFloat32(offset + 0, true)
          positions[i * 3 + 1] = view.getFloat32(offset + 4, true)
          positions[i * 3 + 2] = view.getFloat32(offset + 8, true)

          normals[i * 3 + 0] = view.getFloat32(offset + 12, true)
          normals[i * 3 + 1] = view.getFloat32(offset + 16, true)
          normals[i * 3 + 2] = view.getFloat32(offset + 20, true)

          regionIndices[i] = view.getUint8(offset + 24)
          isDeepFlags[i] = view.getUint8(offset + 25)
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
        geometry.setAttribute('a_regionIndex', new THREE.BufferAttribute(regionIndices, 1))
        geometry.setAttribute('a_isDeep', new THREE.BufferAttribute(isDeepFlags, 1))

        pointsMesh = new THREE.Points(geometry, material)
        scene.add(pointsMesh)
        setIsLoading(false)
      })
      .catch((err) => {
        console.warn('Failed loading binary particle buffer:', err)
        setLoadError('Failed to load precomputed particle buffer.')
        setIsLoading(false)
      })

    // 6. Interaction & Pointer Handlers (Eliminates Flickering & Unintended Resets)
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const pointerStart = { x: 0, y: 0 }
    let isPointerDown = false
    let currentHoveredId: string | null = null

    const onPointerDown = (e: MouseEvent) => {
      isPointerDown = true
      pointerStart.x = e.clientX
      pointerStart.y = e.clientY

      // Hide hover effects while dragging camera
      if (currentHoveredId !== null) {
        currentHoveredId = null
        material.uniforms.u_hoveredRegion.value = 0
        onHoverRegionRef.current?.(null)
      }
      if (tooltipRef.current) {
        tooltipRef.current.style.opacity = '0'
      }
    }

    const onPointerMove = (e: MouseEvent) => {
      // While dragging or rotating the camera, skip raycasting completely
      if (isPointerDown) {
        return
      }

      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const hits = raycaster.intersectObjects(hitGroup.children)

      let hitRegionId: string | null = null
      if (hits.length > 0) {
        const hitMesh = hits[0].object as THREE.Mesh
        hitRegionId = hitMeshMap.get(hitMesh) || null
      }

      // Update hover state only when it changes
      if (hitRegionId !== currentHoveredId) {
        currentHoveredId = hitRegionId
        material.uniforms.u_hoveredRegion.value = hitRegionId
          ? REGION_ID_TO_INDEX[hitRegionId] || 0
          : 0
        onHoverRegionRef.current?.(hitRegionId)
        canvas.style.cursor = hitRegionId ? 'pointer' : 'grab'

        if (hitRegionId && tooltipRef.current && tooltipTitleRef.current && tooltipDescRef.current) {
          const regionObj = brainRegions.find((r) => r.id === hitRegionId)
          if (regionObj) {
            tooltipTitleRef.current.textContent = regionObj.name
            tooltipDescRef.current.textContent = regionObj.shortDescription.slice(0, 75) + '...'
            tooltipRef.current.style.opacity = '1'
            const tx = Math.min(e.clientX - rect.left + 14, rect.width - 210)
            const ty = Math.min(e.clientY - rect.top + 14, rect.height - 80)
            tooltipRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
          }
        } else if (tooltipRef.current) {
          tooltipRef.current.style.opacity = '0'
        }
      } else if (hitRegionId && tooltipRef.current) {
        const tx = Math.min(e.clientX - rect.left + 14, rect.width - 210)
        const ty = Math.min(e.clientY - rect.top + 14, rect.height - 80)
        tooltipRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      }
    }

    const onPointerUp = (e: MouseEvent) => {
      isPointerDown = false
      const dist = Math.hypot(e.clientX - pointerStart.x, e.clientY - pointerStart.y)

      // If user rotated or dragged camera, do not trigger selection click!
      if (dist > 6) {
        return
      }

      // Legitimate selection click
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const hits = raycaster.intersectObjects(hitGroup.children)

      if (hits.length > 0) {
        const hitMesh = hits[0].object as THREE.Mesh
        const regionId = hitMeshMap.get(hitMesh) || null
        if (regionId) {
          onSelectRegionRef.current?.(regionId)
        }
      }
    }

    const onPointerLeave = () => {
      isPointerDown = false
      if (currentHoveredId !== null) {
        currentHoveredId = null
        material.uniforms.u_hoveredRegion.value = 0
        onHoverRegionRef.current?.(null)
      }
      if (tooltipRef.current) {
        tooltipRef.current.style.opacity = '0'
      }
      canvas.style.cursor = 'grab'
    }

    canvas.addEventListener('mousedown', onPointerDown)
    canvas.addEventListener('mousemove', onPointerMove)
    canvas.addEventListener('mouseup', onPointerUp)
    canvas.addEventListener('mouseleave', onPointerLeave)

    // Touch device support
    const onTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length === 0) return
      const touch = e.changedTouches[0]
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const hits = raycaster.intersectObjects(hitGroup.children)
      if (hits.length > 0) {
        const hitMesh = hits[0].object as THREE.Mesh
        const regionId = hitMeshMap.get(hitMesh) || null
        if (regionId) onSelectRegionRef.current(regionId)
      }
    }
    canvas.addEventListener('touchend', onTouchEnd)

    // 7. Responsive Resize Handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return
      const w = container.clientWidth
      const h = container.clientHeight || 440
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      material.uniforms.u_pointScale.value = Math.min(window.devicePixelRatio, 1.5)
    }
    window.addEventListener('resize', handleResize)

    // 8. Animation Render Loop
    let animId: number
    const startTime = performance.now()

    const animate = (time: number) => {
      animId = requestAnimationFrame(animate)

      if (!reducedMotionRef.current) {
        material.uniforms.u_time.value = (time - startTime) * 0.001
      }

      // Smooth interpolation for deep structure cutaway transition (no jarring pops)
      const currentCutaway = material.uniforms.u_deepCutaway.value
      const targetCutaway = targetCutawayRef.current
      material.uniforms.u_deepCutaway.value += (targetCutaway - currentCutaway) * 0.08

      if (!isResettingCameraRef.current) {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    animId = requestAnimationFrame(animate)

    // Cleanup ONLY when component unmounts
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousedown', onPointerDown)
      canvas.removeEventListener('mousemove', onPointerMove)
      canvas.removeEventListener('mouseup', onPointerUp)
      canvas.removeEventListener('mouseleave', onPointerLeave)
      canvas.removeEventListener('touchend', onTouchEnd)
      controls.dispose()
      renderer.dispose()
      if (pointsMesh) {
        pointsMesh.geometry.dispose()
      }
      material.dispose()
    }
  }, []) // Empty dependency array: Three.js canvas remains stable and never resets during interaction

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0A100B] p-5 sm:p-7 flex flex-col items-center justify-between shadow-2xl overflow-hidden">
      
      {/* Visual Header */}
      <div className="w-full flex items-center justify-between pb-3.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#B9FF43] shadow-[0_0_8px_#B9FF43] animate-pulse" />
          <span className="font-mono text-xs text-[#F2F5EF] uppercase tracking-wider font-semibold">
            3D Particle Brain Exhibit
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#78D957] bg-[#172019] px-2.5 py-0.5 rounded border border-white/10">
          Three-Quarter View
        </span>
      </div>

      {/* Main 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[400px] sm:h-[450px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <canvas ref={canvasRef} className="block w-full h-full outline-none" />

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A100B]/90 backdrop-blur-md z-20 space-y-3">
            <div className="h-10 w-10 rounded-full border-2 border-[#B9FF43] border-t-transparent animate-spin" />
            <div className="space-y-1 text-center">
              <span className="font-mono text-xs text-[#F2F5EF] uppercase tracking-wider block">
                Preparing Neural Visualisation
              </span>
              <span className="font-mono text-[10px] text-[#A0AAA0]">
                Generating 48,284 anatomical particle coordinates...
              </span>
            </div>
          </div>
        )}

        {/* Fallback Display if WebGL/Buffer fails */}
        {loadError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A100B] p-6 text-center space-y-3 z-20">
            <AlertCircle size={28} className="text-[#E5C07B]" />
            <p className="font-sans text-xs text-[#A0AAA0]">
              Interactive 3D particle accelerator unavailable on this display. Please consult the region index below.
            </p>
          </div>
        )}

        {/* Floating Tooltip during Hover: updated via direct DOM ref for 0 re-render performance */}
        <div
          ref={tooltipRef}
          style={{ opacity: 0, transform: 'translate3d(0, 0, 0)' }}
          className="pointer-events-none absolute left-0 top-0 z-30 transition-opacity duration-150 rounded-lg border border-[#B9FF43]/40 bg-[#050705]/95 backdrop-blur-md px-3 py-2 shadow-xl max-w-[210px]"
        >
          <span ref={tooltipTitleRef} className="font-mono text-[11px] font-bold text-[#B9FF43] block" />
          <span ref={tooltipDescRef} className="font-sans text-[10px] text-[#A0AAA0] leading-tight block mt-0.5" />
        </div>
      </div>

      {/* Interactive Controls & 10 Region Legend */}
      <BrainLegend
        selectedRegionId={selectedRegionId}
        onSelectRegion={onSelectRegion}
        onResetCamera={handleResetCamera}
      />

    </div>
  )
}
