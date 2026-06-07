'use client'

import { useRef, useEffect } from 'react'

function synthBeat(t: number) {
  return (
    Math.sin(t * Math.PI * 2 * 0.89) * 0.30 +
    Math.sin(t * Math.PI * 2 * 1.77) * 0.25 +
    Math.sin(t * Math.PI * 2 * 0.47) * 0.28 +
    Math.sin(t * Math.PI * 2 * 3.13) * 0.17
  )
}

interface ArcCfg {
  baseRadius: number; amplitude: number; waveFreq: number
  phase: number; phaseSpeed: number; beatMult: number
  r: number; g: number; b: number
  strokeWidth: number; baseOpacity: number
}

// Radii and amplitudes are expressed as a fraction of the canvas diagonal
// so the layout is fully responsive to any screen size
const ARCS: ArcCfg[] = [
  { baseRadius: 0.14, amplitude: 0.007, waveFreq:  4, phase: 0.0, phaseSpeed: 0.62, beatMult: 0.7, r: 237, g: 233, b: 254, strokeWidth: 0.8, baseOpacity: 0.48 },
  { baseRadius: 0.21, amplitude: 0.016, waveFreq:  6, phase: 1.4, phaseSpeed: 0.46, beatMult: 1.1, r: 192, g: 132, b: 252, strokeWidth: 2.0, baseOpacity: 0.74 },
  { baseRadius: 0.27, amplitude: 0.011, waveFreq:  5, phase: 2.8, phaseSpeed: 0.72, beatMult: 0.6, r: 167, g: 139, b: 250, strokeWidth: 1.0, baseOpacity: 0.56 },
  { baseRadius: 0.35, amplitude: 0.028, waveFreq:  8, phase: 0.7, phaseSpeed: 0.31, beatMult: 1.5, r: 139, g:  92, b: 246, strokeWidth: 3.5, baseOpacity: 0.82 },
  { baseRadius: 0.43, amplitude: 0.018, waveFreq:  6, phase: 3.5, phaseSpeed: 0.52, beatMult: 0.8, r: 232, g: 121, b: 249, strokeWidth: 1.5, baseOpacity: 0.60 },
  { baseRadius: 0.51, amplitude: 0.038, waveFreq:  9, phase: 1.9, phaseSpeed: 0.22, beatMult: 1.6, r: 124, g:  58, b: 237, strokeWidth: 4.5, baseOpacity: 0.76 },
  { baseRadius: 0.59, amplitude: 0.013, waveFreq:  5, phase: 2.3, phaseSpeed: 0.60, beatMult: 0.5, r: 196, g: 181, b: 253, strokeWidth: 0.8, baseOpacity: 0.33 },
  { baseRadius: 0.67, amplitude: 0.047, waveFreq: 11, phase: 0.3, phaseSpeed: 0.18, beatMult: 1.5, r: 109, g:  40, b: 217, strokeWidth: 5.0, baseOpacity: 0.65 },
  { baseRadius: 0.75, amplitude: 0.020, waveFreq:  7, phase: 3.1, phaseSpeed: 0.40, beatMult: 0.7, r: 221, g: 214, b: 254, strokeWidth: 0.8, baseOpacity: 0.25 },
]

const N        = 120   // segments per arc — enough for smooth Bézier curves
const K        = 0.040 // spring stiffness (pull back to rest position)
const TENSION  = 0.15  // arc tension — propagates deformation to neighbours (string effect)
const DAMP     = 0.80  // velocity retention per frame
const R_CURSOR = 200   // cursor influence radius (px)
const F_CURSOR = 5.0   // peak push force at cursor centre

const START_ANGLE = Math.PI * 0.50
const END_ANGLE   = Math.PI * 1.03

type Pt   = { x: number; y: number; vx: number; vy: number }
type Rest = { x: number; y: number }

export default function TheConnectionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const turbRef   = useRef<SVGFETurbulenceElement>(null)
  const S = useRef({
    mouse: { x: -9999, y: -9999 },
    pts:  [] as Pt[][],
    rest: [] as Rest[][], // reusable buffer — no allocations in the hot loop
    W: 0, H: 0, diag: 0,
    cx: 0, cy: 0,
    t0: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx    = canvas.getContext('2d')!
    const s      = S.current
    const dpr    = window.devicePixelRatio || 1

    s.pts  = ARCS.map(() => Array.from({ length: N + 1 }, () => ({ x: 0, y: 0, vx: 0, vy: 0 })))
    s.rest = ARCS.map(() => Array.from({ length: N + 1 }, () => ({ x: 0, y: 0 })))

    function resize() {
      const { width, height } = canvas.getBoundingClientRect()
      s.W = width; s.H = height
      s.diag = Math.hypot(width, height)
      canvas.width  = width  * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      s.cx = width  * 1.05
      s.cy = height * -0.08
    }

    resize()

    // Initialise spring points to their t=0 rest positions so there's no jump on first frame
    for (let ai = 0; ai < ARCS.length; ai++) {
      const arc  = ARCS[ai]
      const base = arc.baseRadius * s.diag
      const amp  = arc.amplitude  * s.diag
      for (let i = 0; i <= N; i++) {
        const u   = i / N
        const ang = START_ANGLE + (END_ANGLE - START_ANGLE) * u
        const rad = base + amp * Math.sin(arc.waveFreq * u * Math.PI * 2 + arc.phase)
        s.pts[ai][i].x = s.cx + rad * Math.cos(ang)
        s.pts[ai][i].y = s.cy + rad * Math.sin(ang)
      }
    }

    s.t0 = performance.now()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let rafId   = 0
    let grainTk = 0

    function frame(now: number) {
      const t    = (now - s.t0) / 1000
      const beat = synthBeat(t)
      const mx   = s.mouse.x
      const my   = s.mouse.y
      const { W, H, diag, cx, cy } = s

      if (++grainTk % 2 === 0 && turbRef.current) {
        turbRef.current.setAttribute('seed', String((grainTk * 7) % 9973))
      }

      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#08070E'
      ctx.fillRect(0, 0, W, H)

      // Atmospheric purple bloom (upper-right)
      const bloom = ctx.createRadialGradient(W * 0.93, H * 0.04, 0, W * 0.93, H * 0.04, W * 0.55)
      bloom.addColorStop(0, `rgba(91,33,182,${(0.26 + Math.sin(t * 0.31) * 0.06).toFixed(3)})`)
      bloom.addColorStop(0.42, 'rgba(76,29,149,0.07)')
      bloom.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = bloom
      ctx.fillRect(0, 0, W, H)

      for (let ai = 0; ai < ARCS.length; ai++) {
        const arc  = ARCS[ai]
        const pts  = s.pts[ai]
        const rest = s.rest[ai]

        const phase = arc.phase + t * arc.phaseSpeed * Math.PI * 2
        const amp   = arc.amplitude * diag * (0.65 + Math.abs(beat) * arc.beatMult * 0.35 + 0.35)
        const base  = arc.baseRadius * diag
        const op    = arc.baseOpacity * (0.88 + Math.sin(t * 0.5 + ai * 0.9) * 0.12)

        // ── Pass 1: compute rest positions (the animated wave target each point springs toward)
        for (let i = 0; i <= N; i++) {
          const u   = i / N
          const ang = START_ANGLE + (END_ANGLE - START_ANGLE) * u
          const rad = base + amp * Math.sin(arc.waveFreq * u * Math.PI * 2 + phase)
          rest[i].x = cx + rad * Math.cos(ang)
          rest[i].y = cy + rad * Math.sin(ang)
        }

        // ── Pass 2: spring + cursor forces → accumulate into velocity
        for (let i = 0; i <= N; i++) {
          const pt = pts[i]
          const rx = rest[i].x, ry = rest[i].y

          // Spring: pull toward animated rest position
          let ax = K * (rx - pt.x)
          let ay = K * (ry - pt.y)

          // Cursor: quadratic-falloff repulsion
          const dx = pt.x - mx, dy = pt.y - my
          const d2 = dx * dx + dy * dy
          if (d2 < R_CURSOR * R_CURSOR && d2 > 0.1) {
            const d = Math.sqrt(d2)
            const q = 1 - d / R_CURSOR
            const f = F_CURSOR * q * q / d
            ax += dx * f
            ay += dy * f
          }

          pt.vx += ax
          pt.vy += ay
        }

        // ── Pass 3: tension — Laplacian of displacement propagates the cursor push
        //    smoothly along the arc, so the whole section bends like a plucked string
        for (let i = 1; i < N; i++) {
          const pt = pts[i], pp = pts[i - 1], pn = pts[i + 1]
          const rc = rest[i], rp = rest[i - 1], rn = rest[i + 1]
          // Displacement from rest for each point
          const dc  = { x: pt.x - rc.x, y: pt.y - rc.y }
          const dp  = { x: pp.x - rp.x, y: pp.y - rp.y }
          const dn  = { x: pn.x - rn.x, y: pn.y - rn.y }
          // Laplacian of displacement drives velocity — pulls toward smooth curve
          pt.vx += TENSION * (dp.x + dn.x - 2 * dc.x)
          pt.vy += TENSION * (dp.y + dn.y - 2 * dc.y)
        }

        // ── Pass 4: damp + integrate
        for (let i = 0; i <= N; i++) {
          const pt = pts[i]
          pt.vx *= DAMP
          pt.vy *= DAMP
          pt.x  += pt.vx
          pt.y  += pt.vy
        }

        // ── Render: quadratic Bézier through spring points — no sharp angles possible
        ctx.beginPath()
        ctx.moveTo(pts[0].x, pts[0].y)
        for (let i = 1; i < N; i++) {
          const c = pts[i], n = pts[i + 1]
          // Control point = pts[i], endpoint = midpoint between pts[i] and pts[i+1]
          ctx.quadraticCurveTo(c.x, c.y, (c.x + n.x) * 0.5, (c.y + n.y) * 0.5)
        }
        ctx.lineTo(pts[N].x, pts[N].y)
        ctx.lineCap  = 'round'
        ctx.lineJoin = 'round'

        const { r, g, b } = arc

        // Diffuse halo
        ctx.shadowBlur  = 20
        ctx.shadowColor = `rgba(${r},${g},${b},0.5)`
        ctx.lineWidth   = arc.strokeWidth * 8
        ctx.strokeStyle = `rgba(${r},${g},${b},${(op * 0.09).toFixed(3)})`
        ctx.stroke()

        // Sharp core with inner glow
        ctx.shadowBlur  = 5
        ctx.shadowColor = `rgba(${r},${g},${b},0.9)`
        ctx.lineWidth   = arc.strokeWidth
        ctx.strokeStyle = `rgba(${r},${g},${b},${(op * 0.92).toFixed(3)})`
        ctx.stroke()

        ctx.shadowBlur = 0
      }

      // Left vignette — keeps left half dark for text
      const vigL = ctx.createLinearGradient(0, 0, W, 0)
      vigL.addColorStop(0,    'rgba(8,7,14,0.93)')
      vigL.addColorStop(0.28, 'rgba(8,7,14,0.48)')
      vigL.addColorStop(0.56, 'rgba(8,7,14,0)')
      ctx.fillStyle = vigL
      ctx.fillRect(0, 0, W, H)

      // Bottom vignette
      const vigB = ctx.createLinearGradient(0, H, 0, 0)
      vigB.addColorStop(0,    'rgba(8,7,14,0.80)')
      vigB.addColorStop(0.22, 'rgba(8,7,14,0.22)')
      vigB.addColorStop(0.48, 'rgba(8,7,14,0)')
      ctx.fillStyle = vigB
      ctx.fillRect(0, 0, W, H)

      rafId = requestAnimationFrame(frame)
    }

    rafId = requestAnimationFrame(frame)

    const onMove  = (e: MouseEvent) => { s.mouse = { x: e.clientX, y: e.clientY } }
    const onLeave = ()               => { s.mouse = { x: -9999, y: -9999 } }
    window.addEventListener('mousemove',  onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
      {/* Animated film grain — seed ticks every 2 frames */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <defs>
          <filter id="c-grain" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
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
              values="1 0 0 0 0.05  0 0.8 0 0 0.01  0 0 0.5 0 0  0 0 0 0.27 0"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#c-grain)" />
      </svg>
    </div>
  )
}
