'use client'

import { useRef, useEffect } from 'react'

// Two arc groups — top-right and bottom-left — each fanning off-screen like
// the main page's single corner, but subtler. Same spring-physics pipeline
// (spring → tension → damp → quadratic Bézier) and same synthBeat + film grain.

function synthBeat(t: number): number {
  return (
    Math.sin(t * Math.PI * 2 * 0.89) * 0.30 +
    Math.sin(t * Math.PI * 2 * 1.77) * 0.25 +
    Math.sin(t * Math.PI * 2 * 0.47) * 0.28 +
    Math.sin(t * Math.PI * 2 * 3.13) * 0.17
  )
}

interface ArcCfg {
  baseRadius: number   // fraction of diagonal
  amplitude: number    // fraction of diagonal
  waveFreq: number
  phase: number
  phaseSpeed: number
  beatMult: number
  r: number; g: number; b: number
  sw: number           // strokeWidth
  op: number           // baseOpacity
}

interface GroupCfg {
  cxFrac: number; cyFrac: number     // anchor as fraction of canvas size
  startAngle: number; endAngle: number
  arcs: ArcCfg[]
}

const GROUPS: GroupCfg[] = [
  // ── Top-right  (same anchor family as main page, but subtler)
  {
    cxFrac: 1.06, cyFrac: -0.08,
    startAngle: Math.PI * 0.50,
    endAngle:   Math.PI * 1.00,
    arcs: [
      { baseRadius: 0.18, amplitude: 0.005, waveFreq: 4, phase: 0.0, phaseSpeed: 0.88, beatMult: 0.6, r: 237, g: 233, b: 254, sw: 0.4, op: 0.18 },
      { baseRadius: 0.27, amplitude: 0.009, waveFreq: 6, phase: 1.4, phaseSpeed: 0.62, beatMult: 0.9, r: 192, g: 132, b: 252, sw: 0.9, op: 0.28 },
      { baseRadius: 0.37, amplitude: 0.013, waveFreq: 7, phase: 2.8, phaseSpeed: 0.40, beatMult: 1.1, r: 139, g:  92, b: 246, sw: 1.4, op: 0.34 },
      { baseRadius: 0.47, amplitude: 0.008, waveFreq: 5, phase: 0.7, phaseSpeed: 0.90, beatMult: 0.7, r: 167, g: 139, b: 250, sw: 0.6, op: 0.22 },
      { baseRadius: 0.57, amplitude: 0.016, waveFreq: 8, phase: 1.9, phaseSpeed: 0.30, beatMult: 1.2, r: 124, g:  58, b: 237, sw: 1.8, op: 0.26 },
    ],
  },
  // ── Bottom-left  (mirror anchor; pink-purple palette for contrast)
  {
    cxFrac: -0.06, cyFrac: 1.08,
    startAngle: -Math.PI * 0.50,
    endAngle:   -Math.PI * 0.02,
    arcs: [
      { baseRadius: 0.18, amplitude: 0.005, waveFreq: 5, phase: 1.1, phaseSpeed: 0.80, beatMult: 0.5, r: 221, g: 214, b: 254, sw: 0.4, op: 0.16 },
      { baseRadius: 0.27, amplitude: 0.008, waveFreq: 4, phase: 2.5, phaseSpeed: 0.55, beatMult: 0.8, r: 232, g: 121, b: 249, sw: 0.8, op: 0.26 },
      { baseRadius: 0.37, amplitude: 0.012, waveFreq: 6, phase: 0.3, phaseSpeed: 0.44, beatMult: 1.0, r: 244, g: 114, b: 182, sw: 1.2, op: 0.30 },
      { baseRadius: 0.47, amplitude: 0.007, waveFreq: 5, phase: 3.2, phaseSpeed: 0.82, beatMult: 0.7, r: 196, g: 181, b: 253, sw: 0.5, op: 0.20 },
      { baseRadius: 0.57, amplitude: 0.015, waveFreq: 9, phase: 1.5, phaseSpeed: 0.27, beatMult: 1.1, r: 192, g: 132, b: 252, sw: 1.6, op: 0.25 },
    ],
  },
]

const N       = 120   // segments per arc
const K       = 0.040 // spring stiffness
const TENSION = 0.15  // Laplacian tension (same as main page)
const DAMP    = 0.80  // velocity retention

type Pt   = { x: number; y: number; vx: number; vy: number }
type Rest = { x: number; y: number }

export default function FeaturesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const turbRef   = useRef<SVGFETurbulenceElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx    = canvas.getContext('2d')!
    const dpr    = window.devicePixelRatio || 1

    // pts[groupIdx][arcIdx][ptIdx], rest same shape
    let pts:  Pt[][][]   = []
    let rest: Rest[][][] = []
    let W = 0, H = 0, diag = 0
    let initialized = false
    let rafId = 0
    let tick  = 0
    const t0  = performance.now()

    function buildState() {
      pts  = GROUPS.map(g => g.arcs.map(() =>
        Array.from({ length: N + 1 }, () => ({ x: 0, y: 0, vx: 0, vy: 0 }))
      ))
      rest = GROUPS.map(g => g.arcs.map(() =>
        Array.from({ length: N + 1 }, () => ({ x: 0, y: 0 }))
      ))
      initialized = false
    }

    function resize() {
      const rect = canvas.getBoundingClientRect()
      W    = rect.width
      H    = rect.height
      diag = Math.hypot(W, H)
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
      buildState()
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    function frame(now: number) {
      const t    = (now - t0) / 1000
      const beat = synthBeat(t)
      tick++

      if (tick % 2 === 0 && turbRef.current) {
        turbRef.current.setAttribute('seed', String((tick * 7) % 9973))
      }

      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#08070E'
      ctx.fillRect(0, 0, W, H)

      // Bloom — top-right (purple, matching main page feel)
      const b1v = 0.11 + Math.sin(t * 0.28) * 0.03
      const b1  = ctx.createRadialGradient(W * 0.94, H * 0.04, 0, W * 0.94, H * 0.04, W * 0.48)
      b1.addColorStop(0,   `rgba(80,28,168,${b1v.toFixed(3)})`)
      b1.addColorStop(0.5, 'rgba(60,20,130,0.03)')
      b1.addColorStop(1,   'rgba(0,0,0,0)')
      ctx.fillStyle = b1
      ctx.fillRect(0, 0, W, H)

      // Bloom — bottom-left (pink tint, balancing the corner)
      const b2v = 0.06 + Math.sin(t * 0.21 + 1.4) * 0.02
      const b2  = ctx.createRadialGradient(W * 0.06, H * 0.96, 0, W * 0.06, H * 0.96, W * 0.36)
      b2.addColorStop(0,   `rgba(140,40,120,${b2v.toFixed(3)})`)
      b2.addColorStop(1,   'rgba(0,0,0,0)')
      ctx.fillStyle = b2
      ctx.fillRect(0, 0, W, H)

      for (let gi = 0; gi < GROUPS.length; gi++) {
        const group = GROUPS[gi]
        const cx    = group.cxFrac * W
        const cy    = group.cyFrac * H

        for (let ai = 0; ai < group.arcs.length; ai++) {
          const arc = group.arcs[ai]
          const wpt = pts[gi][ai]
          const rst = rest[gi][ai]

          const phase = arc.phase + t * arc.phaseSpeed * Math.PI * 2
          const amp   = arc.amplitude * diag * (0.65 + Math.abs(beat) * arc.beatMult * 0.35 + 0.35)
          const base  = arc.baseRadius * diag

          // ── Pass 1: compute rest (target) positions along the arc
          for (let i = 0; i <= N; i++) {
            const u     = i / N
            const angle = group.startAngle + (group.endAngle - group.startAngle) * u
            const r     = base + amp * Math.sin(arc.waveFreq * u * Math.PI * 2 + phase)
            rst[i].x    = cx + r * Math.cos(angle)
            rst[i].y    = cy + r * Math.sin(angle)
          }

          // Seed spring positions on first frame so there's no initial jump
          if (!initialized) {
            for (let i = 0; i <= N; i++) {
              wpt[i].x = rst[i].x; wpt[i].y = rst[i].y
              wpt[i].vx = 0;       wpt[i].vy = 0
            }
          }

          // ── Pass 2: spring toward rest
          for (let i = 0; i <= N; i++) {
            wpt[i].vx += K * (rst[i].x - wpt[i].x)
            wpt[i].vy += K * (rst[i].y - wpt[i].y)
          }

          // ── Pass 3: tension — Laplacian of displacement smooths the curve
          for (let i = 1; i < N; i++) {
            const dc = { x: wpt[i].x   - rst[i].x,   y: wpt[i].y   - rst[i].y   }
            const dp = { x: wpt[i-1].x - rst[i-1].x, y: wpt[i-1].y - rst[i-1].y }
            const dn = { x: wpt[i+1].x - rst[i+1].x, y: wpt[i+1].y - rst[i+1].y }
            wpt[i].vx += TENSION * (dp.x + dn.x - 2 * dc.x)
            wpt[i].vy += TENSION * (dp.y + dn.y - 2 * dc.y)
          }

          // ── Pass 4: damp + integrate
          for (let i = 0; i <= N; i++) {
            wpt[i].vx *= DAMP; wpt[i].x += wpt[i].vx
            wpt[i].vy *= DAMP; wpt[i].y += wpt[i].vy
          }

          // ── Render: quadratic Bézier through midpoints
          ctx.beginPath()
          ctx.moveTo(wpt[0].x, wpt[0].y)
          for (let i = 1; i < N; i++) {
            const c = wpt[i], n = wpt[i + 1]
            ctx.quadraticCurveTo(c.x, c.y, (c.x + n.x) * 0.5, (c.y + n.y) * 0.5)
          }
          ctx.lineTo(wpt[N].x, wpt[N].y)

          const { r, g, b } = arc
          const op = arc.op * (0.88 + Math.sin(t * 0.5 + ai * 0.9 + gi * 2.1) * 0.12)

          ctx.save()
          ctx.lineCap = 'round'

          // Diffuse halo
          ctx.shadowBlur  = 10
          ctx.shadowColor = `rgba(${r},${g},${b},0.3)`
          ctx.lineWidth   = arc.sw * 5
          ctx.strokeStyle = `rgba(${r},${g},${b},${(op * 0.05).toFixed(3)})`
          ctx.stroke()

          // Mid glow
          ctx.shadowBlur  = 3
          ctx.shadowColor = `rgba(${r},${g},${b},0.5)`
          ctx.lineWidth   = arc.sw * 2
          ctx.strokeStyle = `rgba(${r},${g},${b},${(op * 0.22).toFixed(3)})`
          ctx.stroke()

          // Sharp core
          ctx.shadowBlur  = 1
          ctx.lineWidth   = arc.sw
          ctx.strokeStyle = `rgba(${r},${g},${b},${(op * 0.75).toFixed(3)})`
          ctx.stroke()

          ctx.restore()
        }
      }

      initialized = true

      // Top vignette — keeps nav + hero readable
      const vigT = ctx.createLinearGradient(0, 0, 0, H * 0.28)
      vigT.addColorStop(0,    'rgba(8,7,14,0.88)')
      vigT.addColorStop(0.65, 'rgba(8,7,14,0.25)')
      vigT.addColorStop(1,    'rgba(8,7,14,0)')
      ctx.fillStyle = vigT
      ctx.fillRect(0, 0, W, H * 0.28)

      // Bottom vignette
      const vigB = ctx.createLinearGradient(0, H, 0, H * 0.84)
      vigB.addColorStop(0,   'rgba(8,7,14,0.60)')
      vigB.addColorStop(1,   'rgba(8,7,14,0)')
      ctx.fillStyle = vigB
      ctx.fillRect(0, H * 0.84, W, H * 0.16)

      rafId = requestAnimationFrame(frame)
    }

    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <filter id="fg-grain" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="1"
              seed="0"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              in="noise"
              values="1 0 0 0 0.05  0 0.8 0 0 0.01  0 0 0.5 0 0  0 0 0 0.23 0"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#fg-grain)" />
      </svg>
    </div>
  )
}
