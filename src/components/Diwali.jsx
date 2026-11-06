import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { festive, festiveOn } from '../data/festive.js'

const STORE_KEY = 'sbh-diwali-effects'
const COLORS = ['#ffd27a', '#e3b04b', '#ff9a3c', '#ff6a3d', '#ffe9b8', '#f07aa0', '#ffffff']

function readPref() {
  try { return localStorage.getItem(STORE_KEY) !== 'off' } catch { return true }
}
function writePref(on) {
  try { localStorage.setItem(STORE_KEY, on ? 'on' : 'off') } catch { /* storage unavailable */ }
}
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- fireworks + rising embers drawn on one canvas behind the glass ---------- */
function Fireworks() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = 0, h = 0, dpr = 1, raf = 0, last = performance.now(), nextLaunch = 600
    const rockets = [], sparks = [], embers = []

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const rand = (a, b) => a + Math.random() * (b - a)
    const pick = (arr) => arr[(Math.random() * arr.length) | 0]

    const launch = (tx, ty) => {
      const x = tx ?? rand(w * 0.1, w * 0.9)
      rockets.push({ x, y: h + 10, tx: x + rand(-40, 40), ty: ty ?? rand(h * 0.12, h * 0.45), color: pick(COLORS), trail: [] })
    }

    const burst = (x, y, color) => {
      const count = w < 700 ? 46 : 80
      const second = Math.random() < 0.5 ? pick(COLORS) : color
      const ring = Math.random() < 0.3
      for (let i = 0; i < count; i++) {
        const a = (Math.PI * 2 * i) / count + rand(-0.05, 0.05)
        const speed = ring ? 3.4 : rand(1, 4.2)
        sparks.push({ x, y, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed, life: 1, decay: rand(0.008, 0.016), color: i % 2 ? color : second, size: rand(1.2, 2.4) })
      }
    }

    const ember = () => embers.push({ x: rand(0, w), y: h + 10, vy: rand(0.25, 0.7), sway: rand(0, Math.PI * 2), size: rand(1, 2.6), life: 1, color: pick(COLORS.slice(0, 4)) })
    for (let i = 0; i < 18; i++) { ember(); embers[i].y = rand(0, h) }

    const onClick = (e) => {
      if (e.target.closest('a, button, input, textarea, select, label, summary')) return
      launch(e.clientX, e.clientY)
    }

    const frame = (now) => {
      const dt = Math.min((now - last) / 16.67, 3)
      last = now
      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      nextLaunch -= dt * 16.67
      if (nextLaunch <= 0) { launch(); if (Math.random() < 0.35) launch(); nextLaunch = rand(1400, 3200) }
      if (embers.length < (w < 700 ? 16 : 30) && Math.random() < 0.08) ember()

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i]
        r.trail.push([r.x, r.y]); if (r.trail.length > 10) r.trail.shift()
        r.x += (r.tx - r.x) * 0.02 * dt
        r.y += (r.ty - r.y) * 0.045 * dt - 1.2 * dt
        ctx.strokeStyle = r.color; ctx.lineWidth = 2; ctx.globalAlpha = 0.8
        ctx.beginPath(); r.trail.forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke()
        if (r.y <= r.ty + 4) { burst(r.x, r.y, r.color); rockets.splice(i, 1) }
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.vx *= 0.985; s.vy = s.vy * 0.985 + 0.035 * dt
        s.x += s.vx * dt; s.y += s.vy * dt; s.life -= s.decay * dt
        if (s.life <= 0) { sparks.splice(i, 1); continue }
        ctx.globalAlpha = s.life * (0.7 + Math.random() * 0.3)
        ctx.fillStyle = s.color
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill()
      }

      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i]
        e.sway += 0.02 * dt; e.y -= e.vy * dt; e.x += Math.sin(e.sway) * 0.3 * dt
        if (e.y < h * 0.15) e.life -= 0.006 * dt
        if (e.life <= 0 || e.y < -10) { embers.splice(i, 1); continue }
        ctx.globalAlpha = e.life * 0.75
        ctx.fillStyle = e.color
        ctx.shadowColor = e.color; ctx.shadowBlur = 8
        ctx.beginPath(); ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2); ctx.fill()
        ctx.shadowBlur = 0
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }

    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame) }
    }

    raf = requestAnimationFrame(frame)
    window.addEventListener('resize', resize)
    window.addEventListener('pointerdown', onClick)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointerdown', onClick)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className="fireworks" aria-hidden="true" />
}

/* ---------- string of fairy lights along the top of the page ---------- */
function Lights() {
  return (
    <div className="lights" aria-hidden="true">
      {Array.from({ length: 44 }, (_, i) => (
        <span key={i} className="light-seg" style={{ '--d': `${(i * 0.37) % 2.4}s`, '--c': COLORS[i % 5] }}>
          <i />
        </span>
      ))}
    </div>
  )
}

/* ---------- global layer: canvas, lights and the visitor on/off switch ---------- */
export function DiwaliEffects() {
  const [on, setOn] = useState(readPref)
  const [calm] = useState(reducedMotion)
  if (!festiveOn()) return null

  const toggle = () => { setOn(!on); writePref(!on) }
  return (
    <>
      <Lights />
      {on && !calm && <Fireworks />}
      {!calm && (
        <button className="fx-toggle glass" onClick={toggle} aria-pressed={on} aria-label={on ? 'Turn off Diwali fireworks' : 'Turn on Diwali fireworks'}>
          <Diya small /> <span>{on ? 'Fireworks on' : 'Fireworks off'}</span>
        </button>
      )}
    </>
  )
}

/* ---------- a little clay diya with a flickering flame ---------- */
export function Diya({ small, delay = 0 }) {
  return (
    <span className={`diya ${small ? 'diya-sm' : ''}`} style={{ '--fd': `${delay}s` }} aria-hidden="true">
      <span className="flame" />
      <svg viewBox="0 0 64 30" className="diya-bowl">
        <defs>
          <linearGradient id="clay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e07a3c" />
            <stop offset="1" stopColor="#8a3a14" />
          </linearGradient>
        </defs>
        <path d="M2 6 Q32 14 62 6 Q58 28 32 29 Q6 28 2 6Z" fill="url(#clay)" />
        <path d="M2 6 Q32 14 62 6" fill="none" stroke="#f1c86a" strokeWidth="1.5" />
        <path d="M14 18 l4 4 l4 -4 M28 20 l4 4 l4 -4 M42 18 l4 4 l4 -4" fill="none" stroke="#f1c86a" strokeWidth="1.2" opacity="0.8" />
      </svg>
    </span>
  )
}

/* ---------- homepage greeting card ---------- */
export function DiwaliGreeting() {
  if (!festiveOn()) return null
  return (
    <section style={{ paddingTop: 0, paddingBottom: 24 }}>
      <div className="wrap">
        <div className="glass diwali-card">
          <div className="rangoli" aria-hidden="true" />
          <div className="diya-row"><Diya delay={0} /><Diya delay={0.4} /><Diya delay={0.8} /></div>
          <span className="eyebrow">Happy Diwali · दीपावली की शुभकामनाएँ</span>
          <h2>{festive.greeting.split(' ')[0]} <span className="gold">{festive.greeting.split(' ').slice(1).join(' ')}</span></h2>
          <p className="lead" style={{ margin: '0 auto' }}>{festive.message}</p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-gold">Get your store festive-ready</Link>
          </div>
          <p className="muted tap-hint">Tip: tap anywhere on the page to light a firework</p>
        </div>
      </div>
    </section>
  )
}
