'use client'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

function MacbookSVG({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{ maxWidth: 540 }}>
      <svg
        viewBox="0 0 540 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="lidGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a3a3c" />
            <stop offset="100%" stopColor="#1c1c1e" />
          </linearGradient>
          <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3c3c3e" />
            <stop offset="100%" stopColor="#242426" />
          </linearGradient>
          <linearGradient id="hingeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#111113" />
            <stop offset="20%" stopColor="#2e2e30" />
            <stop offset="50%" stopColor="#3e3e40" />
            <stop offset="80%" stopColor="#2e2e30" />
            <stop offset="100%" stopColor="#111113" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#090912" />
            <stop offset="100%" stopColor="#0a0d18" />
          </linearGradient>
          <linearGradient id="trackpadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#404042" />
            <stop offset="100%" stopColor="#303032" />
          </linearGradient>
          <linearGradient id="edgeHighlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <clipPath id="screenClip">
            <rect x="36" y="16" width="468" height="264" rx="3" />
          </clipPath>
          <filter id="laptopShadow">
            <feDropShadow dx="0" dy="20" stdDeviation="28" floodColor="rgba(0,0,0,0.55)" />
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.3)" />
          </filter>
        </defs>

        {/* ── SHADOW ── */}
        <ellipse cx="270" cy="354" rx="200" ry="8" fill="rgba(0,0,0,0.25)" filter="url(#laptopShadow)" />

        {/* ── LID ── */}
        <g filter="url(#laptopShadow)">
          {/* Lid body */}
          <rect x="14" y="4" width="512" height="288" rx="10" fill="url(#lidGrad)" />
          {/* Top edge highlight */}
          <rect x="14" y="4" width="512" height="1.5" rx="1" fill="url(#edgeHighlight)" opacity="0.9" />
          {/* Side highlights */}
          <rect x="14" y="4" width="1.5" height="288" rx="1" fill="url(#edgeHighlight)" opacity="0.4" />
          <rect x="524.5" y="4" width="1.5" height="288" rx="1" fill="url(#edgeHighlight)" opacity="0.2" />
        </g>

        {/* Screen bezel */}
        <rect x="28" y="12" width="484" height="276" rx="6" fill="#0a0a0c" />

        {/* Notch */}
        <rect x="228" y="12" width="84" height="11" rx="0" fill="#1c1c1e" />
        <rect x="228" y="18" width="84" height="5" rx="0" fill="#0a0a0c" />
        <circle cx="270" cy="17" r="3.5" fill="#1e1e20" />
        <circle cx="270" cy="17" r="1.5" fill="#2a2a2c" />

        {/* Screen glass */}
        <rect x="36" y="20" width="468" height="260" rx="3" fill="url(#screenGrad)" />
        {/* Screen reflection */}
        <rect x="36" y="20" width="468" height="260" rx="3" fill="url(#lidGrad)" opacity="0.03" />
        <path d="M36 20 L504 20 L420 90 L36 90 Z" fill="white" opacity="0.018" />

        {/* Browser chrome bar */}
        <rect x="36" y="20" width="468" height="26" rx="0" fill="#1c1c1e" />
        <rect x="36" y="45" width="468" height="1" fill="rgba(255,255,255,0.06)" />
        {/* Traffic lights */}
        <circle cx="56" cy="33" r="5" fill="#ff5f57" />
        <circle cx="56" cy="33" r="5" fill="#ff5f57" filter="url(#laptopShadow)" opacity="0.3" />
        <circle cx="72" cy="33" r="5" fill="#febc2e" />
        <circle cx="88" cy="33" r="5" fill="#28c840" />
        {/* URL bar */}
        <rect x="170" y="27" width="200" height="12" rx="4" fill="rgba(255,255,255,0.07)" />
        <circle cx="183" cy="33" r="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
        <text x="192" y="36.5" fontSize="7.5" fill="rgba(255,255,255,0.32)" fontFamily="system-ui">nezor.hu</text>

        {/* ── HINGE ── */}
        <rect x="0" y="290" width="540" height="6" fill="url(#hingeGrad)" />
        <rect x="0" y="290" width="540" height="1" fill="rgba(255,255,255,0.07)" />

        {/* ── BASE ── */}
        <g filter="url(#laptopShadow)">
          <rect x="0" y="295" width="540" height="65" rx="0" fill="url(#baseGrad)" />
          <rect x="0" y="355" width="540" height="5" rx="0" fill="#141416" />
          {/* Bottom rounded edge */}
          <rect x="0" y="355" width="540" height="1" fill="rgba(255,255,255,0.04)" />
          {/* Base top highlight */}
          <rect x="0" y="295" width="540" height="1" fill="url(#edgeHighlight)" opacity="0.5" />
        </g>

        {/* Keyboard area (simplified but clean) */}
        <g opacity="0.9">
          {/* Fn row */}
          {Array.from({ length: 14 }).map((_, i) => (
            <rect key={i} x={22 + i * 35.8} y="303" width="32" height="9" rx="2"
              fill="#3c3c3e" stroke="rgba(0,0,0,0.5)" strokeWidth="0.5" />
          ))}
          {/* Row 1 */}
          {Array.from({ length: 13 }).map((_, i) => (
            <rect key={i} x={22 + i * 38.5} y="316" width="34" height="12" rx="2.5"
              fill="#3e3e40" stroke="rgba(0,0,0,0.6)" strokeWidth="0.5" />
          ))}
          {/* Row 2 */}
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={i} x={40 + i * 38.5} y="332" width="34" height="12" rx="2.5"
              fill="#3e3e40" stroke="rgba(0,0,0,0.6)" strokeWidth="0.5" />
          ))}
          {/* Row 3 */}
          {Array.from({ length: 11 }).map((_, i) => (
            <rect key={i} x={60 + i * 38.5} y="348" width="34" height="9" rx="2"
              fill="#3c3c3e" stroke="rgba(0,0,0,0.5)" strokeWidth="0.5" />
          ))}
        </g>

        {/* Trackpad */}
        <rect x="195" y="308" width="150" height="82" rx="8" fill="url(#trackpadGrad)"
          stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      </svg>

      {/* Video content — absolutely positioned over screen area */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: '5.6%',
          left: '6.7%',
          width: '86.7%',
          height: '72.2%',
          borderRadius: '3px',
          paddingTop: '7.2%', // browser chrome height
        }}
      >
        {/*
         * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         * VIDEÓ BEILLESZTÉSE:
         * 1. Tedd a videót: public/video/nezor-demo.mp4
         * 2. Töröld a PLACEHOLDER div-et lent
         * 3. Szedd ki a megjegyzésből az alábbi video taget
         *
         * <video className="w-full h-full object-cover block"
         *   autoPlay muted loop playsInline preload="metadata"
         *   poster="/video/nezor-demo-poster.jpg">
         *   <source src="/video/nezor-demo.webm" type="video/webm" />
         *   <source src="/video/nezor-demo.mp4" type="video/mp4" />
         * </video>
         * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         */}

        {/* PLACEHOLDER */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-3"
          style={{ background: 'linear-gradient(145deg, #080810, #0c1220, #080810)' }}>
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,207,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity }}
            className="relative w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,207,255,0.13)', border: '1px solid rgba(0,207,255,0.22)' }}>
            <Play className="w-5 h-5 text-cyan ml-0.5" />
          </motion.div>
          <div className="relative text-center">
            <div className="text-white/60 font-semibold text-xs mb-1">Bemutató videó</div>
            <div className="text-white/20 text-[10px]">Hamarosan elérhető</div>
          </div>
        </div>
        {/* /PLACEHOLDER */}
      </div>
    </div>
  )
}

export function VideoShowcase() {
  const sectionRef = useRef(null)
  const laptopRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 28 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 28 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!laptopRef.current) return
    const r = laptopRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - r.left) / r.width - 0.5)
    mouseY.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section className="py-20 bg-secondary overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          >
            <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-4">Bemutató</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4 leading-tight">
              Nézd meg hogyan<br /><span className="text-gradient">dolgozunk</span>
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              Egy valódi projekt elkészítésének folyamata — konzultációtól az éles weboldalig. Gyors, átlátható, profi.
            </p>
            <div className="space-y-3">
              {[
                { label: '1–2 hét',      desc: 'Átlagos átfutási idő' },
                { label: '100%',          desc: 'Mobilra optimalizált' },
                { label: '24 órán belül', desc: 'Válasz minden kérdésre' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
                  <span className="font-display font-bold text-cyan text-sm w-28 flex-shrink-0">{item.label}</span>
                  <span className="text-sm text-muted">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: laptop */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 220, damping: 28, delay: 0.15 }}
            style={{ perspective: 1200 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              ref={laptopRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => { mouseX.set(0); mouseY.set(0); setIsHovering(false) }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative cursor-pointer"
            >
              {/* Glow */}
              <div className="absolute -inset-8 rounded-3xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(0,207,255,0.1), transparent 70%)', filter: 'blur(20px)', opacity: isHovering ? 1 : 0.6, transition: 'opacity 0.3s' }} />
              <MacbookSVG />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
