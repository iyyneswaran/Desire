'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { brainRegions } from '@/data/brainRegions'
import BrainLegend from './BrainLegend'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { AlertCircle } from 'lucide-react'

// Camera default coordinates: 3/4 Perspective
const DEFAULT_CAM_POS = new THREE.Vector3(2.7, 1.3, 3.2)
const DEFAULT_LOOK_AT = new THREE.Vector3(0, 0.05, 0)

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
    int rIdx = int(a_regionIndex);
    bool isSelected = (rIdx == u_activeRegion && u_activeRegion > 0);
    bool isHovered = (rIdx == u_hoveredRegion && u_hoveredRegion > 0);
    bool isDeepStructure = (a_isDeep > 0.5);

    // Subtle natural neural breathing oscillation
    float breath = sin(u_time * 1.5 + position.y * 3.0 + position.z * 2.0) * 0.006;
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
    float pointSize = 3.2;

    if (isSelected) {
      finalColor = mix(neonLime, whiteHot, spark * 0.35 + 0.25);
      alpha = 1.0;
      pointSize = isDeepStructure ? 6.2 : 5.2;
    } else if (isHovered) {
      finalColor = hoverLime;
      alpha = 0.95;
      pointSize = isDeepStructure ? 4.8 : 4.2;
    } else {
      // If a deep structure is active, dim the outer cortical particles for an internal X-ray cutaway
      if (u_deepCutaway > 0.01) {
        if (!isDeepStructure) {
          alpha = mix(0.75, 0.18, u_deepCutaway);
          finalColor = mix(finalColor, vec3(0.06, 0.16, 0.09), u_deepCutaway * 0.5);
          pointSize = 2.4;
        } else {
          alpha = 0.40;
          pointSize = 3.0;
        }
      }
    }

    v_color = finalColor;
    v_alpha = alpha;

    vec4 mvPosition = modelViewMatrix * vec4(animatedPos, 1.0);
    gl_PointSize = pointSize * u_pointScale * (2.8 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const FRAGMENT_SHADER = `
  precision highp float;
  varying vec3 v_color;
  varying float v_alpha;

  void main() {
    // Make particles circular with soft luminous bloom edges
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
  hoveredRegionId: string | null
  onSelectRegion: (id: string | null) => void
  onHoverRegion: (id: string | null) => void
}

export default function ParticleBrain({
  selectedRegionId,
  hoveredRegionId,
  onSelectRegion,
  onHoverRegion,
}: ParticleBrainProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const isResettingCameraRef = useRef<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [activeTooltip, setActiveTooltip] = useState<{ name: string; desc: string; x: number; y: number } | null>(null)

  const reducedMotion = useReducedMotion()

  // Reset Camera View Handler
  const handleResetCamera = useCallback(() => {
    if (!cameraRef.current || !controlsRef.current) return
    isResettingCameraRef.current = true
    const camera = cameraRef.current
    const controls = controlsRef.current

    const startPos = camera.position.clone()
    const targetPos = DEFAULT_CAM_POS.clone()
    const startTime = performance.now()
    const duration = 750 // ms

    const animateReset = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1.0)
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3)

      camera.position.lerpVectors(startPos, targetPos, ease)
      controls.target.lerp(DEFAULT_LOOK_AT, ease)
      controls.update()

      if (progress < 1.0) {
        requestAnimationFrame(animateReset)
      } else {
        isResettingCameraRef.current = false
      }
    }

    requestAnimationFrame(animateReset)
  }, [])

  // Sync selected and hovered regions with shader uniforms
  useEffect(() => {
    if (!materialRef.current) return
    const mat = materialRef.current

    const activeIdx = selectedRegionId ? REGION_ID_TO_INDEX[selectedRegionId] || 0 : 0
    const hoverIdx = hoveredRegionId ? REGION_ID_TO_INDEX[hoveredRegionId] || 0 : 0

    mat.uniforms.u_activeRegion.value = activeIdx
    mat.uniforms.u_hoveredRegion.value = hoverIdx

    const activeRegionObj = brainRegions.find((r) => r.id === selectedRegionId)
    // Deep cutaway transition target
    const targetCutaway = activeRegionObj && activeRegionObj.isDeep ? 1.0 : 0.0
    mat.uniforms.u_deepCutaway.value = targetCutaway
  }, [selectedRegionId, hoveredRegionId])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()
    scene.background = null // Transparent so dark CSS background `#0A100B` shows through

    const width = container.clientWidth
    const height = container.clientHeight || 460

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
    controls.minDistance = 2.2
    controls.maxDistance = 6.8
    controls.minPolarAngle = Math.PI * 0.2
    controls.maxPolarAngle = Math.PI * 0.8
    controls.target.copy(DEFAULT_LOOK_AT)
    controlsRef.current = controls

    // 3. Custom Shader Material
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        u_time: { value: 0 },
        u_activeRegion: { value: selectedRegionId ? REGION_ID_TO_INDEX[selectedRegionId] || 0 : 0 },
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
      // Sized appropriately based on anatomical extent
      let radius = 0.32
      if (region.id === 'prefrontal') radius = 0.58
      else if (region.id === 'cerebellum') radius = 0.55
      else if (region.id === 'striatum') radius = 0.45
      else if (region.id === 'visual') radius = 0.42

      const hitGeo = new THREE.SphereGeometry(radius, 12, 12)
      const hitMat = new THREE.MeshBasicMaterial({
        visible: false, // Invisible interaction collider
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
        const isDeeps = new Float32Array(particleCount)

        const dataView = new DataView(arrayBuffer)
        for (let i = 0; i < particleCount; i++) {
          const byteOffset = i * stride
          positions[i * 3 + 0] = dataView.getFloat32(byteOffset + 0, true)
          positions[i * 3 + 1] = dataView.getFloat32(byteOffset + 4, true)
          positions[i * 3 + 2] = dataView.getFloat32(byteOffset + 8, true)

          normals[i * 3 + 0] = dataView.getFloat32(byteOffset + 12, true)
          normals[i * 3 + 1] = dataView.getFloat32(byteOffset + 16, true)
          normals[i * 3 + 2] = dataView.getFloat32(byteOffset + 20, true)

          regionIndices[i] = dataView.getUint8(byteOffset + 24)
          isDeeps[i] = dataView.getUint8(byteOffset + 25)
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
        geometry.setAttribute('a_regionIndex', new THREE.BufferAttribute(regionIndices, 1))
        geometry.setAttribute('a_isDeep', new THREE.BufferAttribute(isDeeps, 1))

        pointsMesh = new THREE.Points(geometry, material)
        scene.add(pointsMesh)

        setIsLoading(false)
      })
      .catch((err) => {
        console.warn('Failed loading binary particle buffer, using procedural lattice fallback:', err)
        setLoadError('Failed to load precomputed particle buffer.')
        setIsLoading(false)
      })

    // 6. Raycasting Pointer Handlers (Distinguishing Drag vs Click)
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const pointerStart = { x: 0, y: 0 }

    const onPointerDown = (e: MouseEvent) => {
      pointerStart.x = e.clientX
      pointerStart.y = e.clientY
    }

    const onPointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const hits = raycaster.intersectObjects(hitGroup.children)

      if (hits.length > 0) {
        const hitMesh = hits[0].object as THREE.Mesh
        const regionId = hitMeshMap.get(hitMesh) || null
        if (regionId) {
          onHoverRegion(regionId)
          canvas.style.cursor = 'pointer'

          const regionObj = brainRegions.find((r) => r.id === regionId)
          if (regionObj) {
            setActiveTooltip({
              name: regionObj.name,
              desc: regionObj.shortDescription.slice(0, 75) + '...',
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            })
          }
        }
      } else {
        onHoverRegion(null)
        canvas.style.cursor = 'grab'
        setActiveTooltip(null)
      }
    }

    const onPointerUp = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - pointerStart.x, e.clientY - pointerStart.y)
      if (dist > 6) return // Dragged / rotated camera, do not trigger selection click!

      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const hits = raycaster.intersectObjects(hitGroup.children)

      if (hits.length > 0) {
        const hitMesh = hits[0].object as THREE.Mesh
        const regionId = hitMeshMap.get(hitMesh) || null
        if (regionId) {
          onSelectRegion(regionId)
        }
      }
    }

    const onPointerLeave = () => {
      onHoverRegion(null)
      setActiveTooltip(null)
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
        if (regionId) onSelectRegion(regionId)
      }
    }
    canvas.addEventListener('touchend', onTouchEnd)

    // 7. Responsive Resize Handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return
      const w = container.clientWidth
      const h = container.clientHeight || 460
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

      if (!reducedMotion) {
        material.uniforms.u_time.value = (time - startTime) * 0.001
      }

      if (!isResettingCameraRef.current) {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    animId = requestAnimationFrame(animate)

    // Cleanup on unmount
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
  }, [reducedMotion, onSelectRegion, onHoverRegion, selectedRegionId])

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
        className="relative w-full h-[400px] sm:h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing"
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

        {/* Floating Tooltip during Hover */}
        {activeTooltip && (
          <div
            className="pointer-events-none absolute z-30 transform -translate-x-1/2 -translate-y-full mb-3 rounded-lg border border-[#B9FF43]/40 bg-[#050705]/95 backdrop-blur-md px-3 py-2 shadow-xl max-w-[220px]"
            style={{
              left: `${activeTooltip.x}px`,
              top: `${activeTooltip.y}px`,
            }}
          >
            <span className="font-mono text-[11px] font-bold text-[#B9FF43] block">
              {activeTooltip.name}
            </span>
            <span className="font-sans text-[10px] text-[#A0AAA0] leading-tight block mt-0.5">
              {activeTooltip.desc}
            </span>
          </div>
        )}
      </div>

      {/* Interactive Controls & 10 Region Legend */}
      <BrainLegend
        selectedRegionId={selectedRegionId}
        hoveredRegionId={hoveredRegionId}
        onSelectRegion={onSelectRegion}
        onResetCamera={handleResetCamera}
      />

    </div>
  )
}
