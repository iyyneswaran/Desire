'use client'

import { useEffect, useRef, useState } from 'react'
import { VERTEX_SHADER, FRAGMENT_SHADER } from './AuroraShader'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AuroraBackgroundProps {
  className?: string
  intensity?: number
  fixed?: boolean
}

export default function AuroraBackground({
  className = '',
  intensity = 1.0,
  fixed = true,
}: AuroraBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reducedMotion = useReducedMotion()
  const [webglSupported, setWebglSupported] = useState<boolean>(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Try WebGL first
    const gl =
      (canvas.getContext('webgl', {
        powerPreference: 'high-performance',
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
      }) as WebGLRenderingContext | null) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null)

    if (!gl) {
      setWebglSupported(false)
      return
    }

    // Helper to compile shader
    function createShader(glCtx: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = glCtx.createShader(type)
      if (!shader) return null
      glCtx.shaderSource(shader, source)
      glCtx.compileShader(shader)
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn('WebGL shader compile error:', glCtx.getShaderInfoLog(shader))
        glCtx.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)

    if (!vertShader || !fragShader) {
      setWebglSupported(false)
      return
    }

    const program = gl.createProgram()
    if (!program) {
      setWebglSupported(false)
      return
    }

    gl.attachShader(program, vertShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('WebGL link error:', gl.getProgramInfoLog(program))
      setWebglSupported(false)
      return
    }

    gl.useProgram(program)

    // Full screen quad buffer
    const positionLocation = gl.getAttribLocation(program, 'position')
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    )
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    // Uniform locations
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse')
    const intensityLocation = gl.getUniformLocation(program, 'u_intensity')

    // Mouse tracking with smooth damping
    const targetMouse = { x: 0.5, y: 0.5 }
    const currentMouse = { x: 0.5, y: 0.5 }

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth
      targetMouse.y = 1.0 - e.clientY / window.innerHeight // invert Y for GL
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Resize handling with clamped DPR for high efficiency
    let width = 0
    let height = 0
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      width = Math.floor(window.innerWidth * dpr)
      height = Math.floor(window.innerHeight * dpr)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })

    let animationFrameId: number
    const startTime = performance.now()
    let isPaused = false

    const handleVisibilityChange = () => {
      isPaused = document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const render = (now: number) => {
      if (!isPaused) {
        // Smoothly damp mouse position
        currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05
        currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05

        const elapsedSeconds = reducedMotion ? 1.5 : (now - startTime) * 0.001

        gl.uniform1f(timeLocation, elapsedSeconds)
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
        gl.uniform2f(mouseLocation, currentMouse.x, currentMouse.y)
        gl.uniform1f(intensityLocation, intensity)

        gl.drawArrays(gl.TRIANGLES, 0, 6)
      }

      // If reduced motion is preferred, render just once and stop loop
      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (program && gl) {
        gl.deleteProgram(program)
      }
    }
  }, [intensity, reducedMotion])

  // Canvas 2D graceful fallback if WebGL is disabled or unsupported
  useEffect(() => {
    if (webglSupported) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    const resize2D = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize2D()
    window.addEventListener('resize', resize2D, { passive: true })

    const draw2D = () => {
      t += 0.015
      ctx.fillStyle = '#050705'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw 3 flowing glowing bezier curves
      const ribbons = [
        { y: canvas.height * 0.35, color: '#B9FF43', amp: 70, freq: 0.003, speed: 1.0 },
        { y: canvas.height * 0.55, color: '#78D957', amp: 90, freq: 0.002, speed: -0.8 },
        { y: canvas.height * 0.75, color: '#244B2D', amp: 60, freq: 0.0025, speed: 0.6 },
      ]

      ribbons.forEach((ribbon) => {
        ctx.save()
        ctx.strokeStyle = ribbon.color
        ctx.shadowColor = ribbon.color
        ctx.shadowBlur = 35
        ctx.lineWidth = 4
        ctx.globalAlpha = 0.45 * intensity
        ctx.beginPath()

        for (let x = 0; x <= canvas.width; x += 20) {
          const y = ribbon.y + Math.sin(x * ribbon.freq + t * ribbon.speed) * ribbon.amp
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.restore()
      })

      if (!reducedMotion) {
        animId = requestAnimationFrame(draw2D)
      }
    }

    draw2D()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize2D)
    }
  }, [webglSupported, intensity, reducedMotion])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${
        fixed ? 'fixed inset-0 z-0' : 'absolute inset-0'
      } ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
        style={{
          width: '100%',
          height: '100%',
          opacity: 1,
        }}
      />
      {/* Subtle atmospheric noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />
      {/* Radial depth mask for text readability */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#050705]/40 to-[#050705]/90 pointer-events-none" />
    </div>
  )
}
