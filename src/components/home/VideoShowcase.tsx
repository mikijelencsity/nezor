'use client'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

export function VideoShowcase() {
  const sectionRef = useRef(null)
  const laptopRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [isHovering, setIsHovering] = useState(false)

  // Mouse tracking — subtle additional tilt on top of base product-shot angle
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const extraRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 28 })
  const extraRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 28 })
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, 80]), { stiffness: 120, damping: 28 })
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, 80]), { stiffness: 120, damping: 28 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!laptopRef.current) return
    const rect = laptopRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovering(false)
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
              Nézd meg hogyan<br />
              <span className="text-gradient">dolgozunk</span>
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              Egy valódi projekt elkészítésének folyamata — konzultációtól az éles weboldalig. Gyors, átlátható, profi.
            </p>
            <div className="space-y-3">
              {[
                { label: '1–2 hét',  desc: 'Átlagos átfutási idő' },
                { label: '100%',     desc: 'Mobilra optimalizált' },
                { label: '24 órán belül', desc: 'Válasz minden kérdésre' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
                  <span className="font-display font-bold text-cyan text-sm w-28 flex-shrink-0">{item.label}</span>
                  <span className="text-sm text-muted">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D product-shot laptop */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -30 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ type: 'spring', stiffness: 180, damping: 28, delay: 0.15 }}
            style={{ perspective: 1400 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              ref={laptopRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: useTransform(extraRotateX, v => v + 6),
                rotateY: useTransform(extraRotateY, v => v - 20),
                transformStyle: 'preserve-3d',
              }}
              className="relative cursor-pointer select-none"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Ambient glow — matches the angle */}
              <div style={{
                position: 'absolute', inset: -50,
                background: 'radial-gradient(ellipse 70% 50% at 65% 55%, rgba(0,207,255,0.14), transparent 70%)',
                filter: 'blur(24px)',
                pointerEvents: 'none',
              }} />

              {/* Ground reflection/shadow */}
              <div style={{
                position: 'absolute', bottom: -16, left: '5%', right: '-5%',
                height: 24,
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.28) 0%, transparent 70%)',
                filter: 'blur(10px)',
                transform: 'translateZ(-60px) rotateX(90deg)',
                pointerEvents: 'none',
              }} />

              <div style={{ width: 520, maxWidth: '90vw' }}>

                {/* ── LID ── */}
                <div style={{
                  background: 'linear-gradient(145deg, #3e3e40 0%, #2e2e30 40%, #1e1e20 100%)',
                  borderRadius: '14px 14px 3px 3px',
                  padding: '7px 7px 0',
                  boxShadow: [
                    '0 0 0 0.5px rgba(255,255,255,0.1) inset',
                    '-6px -3px 18px rgba(0,0,0,0.35)',
                    '3px -2px 10px rgba(0,0,0,0.2)',
                    'inset 1px 0 0 rgba(255,255,255,0.06)',
                  ].join(', '),
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                }}>
                  {/* Specular edge */}
                  <div style={{ position: 'absolute', top: 1, left: '15%', right: '35%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), rgba(255,255,255,0.08))', borderRadius: 1 }} />
                  {/* Right edge depth */}
                  <div style={{ position: 'absolute', top: 8, right: -3, bottom: 0, width: 4, background: 'linear-gradient(90deg, #1a1a1c, #0a0a0c)', borderRadius: '0 4px 2px 0', transform: 'translateZ(-2px)' }} />

                  {/* Notch */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
                    <div style={{ width: 90, height: 7, background: '#1a1a1c', borderRadius: '0 0 8px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2c2c2e', border: '1px solid #383838' }} />
                    </div>
                  </div>

                  {/* Screen */}
                  <div style={{ borderRadius: '7px 7px 2px 2px', overflow: 'hidden', background: '#000', aspectRatio: '16/10', position: 'relative', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.8)' }}>
                    {/* Tracked glare */}
                    <motion.div style={{
                      position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'none',
                      background: isHovering
                        ? `radial-gradient(circle 140px at ${glareX}% ${glareY}%, rgba(255,255,255,0.06) 0%, transparent 65%)`
                        : 'linear-gradient(130deg, rgba(255,255,255,0.04) 0%, transparent 45%)',
                    }} />

                    {/* Static product-shot light */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(130deg, rgba(255,255,255,0.04) 0%, transparent 40%)', zIndex: 11, pointerEvents: 'none' }} />

                    {/* Browser bar */}
                    <div style={{ background: '#1c1c1e', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 5 }}>
                      <div style={{ display: 'flex', gap: 5 }}>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'block', boxShadow: '0 0 5px rgba(255,95,87,0.5)' }} />
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'block', boxShadow: '0 0 5px rgba(254,188,46,0.4)' }} />
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'block', boxShadow: '0 0 5px rgba(40,200,64,0.4)' }} />
                      </div>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 5, padding: '3px 10px', display: 'flex', alignItems: 'center', gap: 6, maxWidth: 220, margin: '0 auto' }}>
                        <div style={{ width: 7, height: 7, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.2)' }} />
                        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>nezor.hu</span>
                      </div>
                    </div>

                    {/*
                     * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                     * VIDEÓ BEILLESZTÉSE:
                     * 1. Tedd a videót: public/video/nezor-demo.mp4
                     * 2. Töröld a PLACEHOLDER blokkot lent
                     * 3. Szedd ki a megjegyzésből az alábbi video taget
                     *
                     * <video style={{display:'block',width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0,top:29}}
                     *   autoPlay muted loop playsInline preload="metadata"
                     *   poster="/video/nezor-demo-poster.jpg">
                     *   <source src="/video/nezor-demo.webm" type="video/webm" />
                     *   <source src="/video/nezor-demo.mp4"  type="video/mp4" />
                     * </video>
                     * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                     */}

                    {/* PLACEHOLDER */}
                    <div style={{ position: 'absolute', inset: 0, top: 29, background: 'linear-gradient(145deg, #080810, #0c1220, #080810)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,207,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity }}
                        style={{ position: 'relative', width: 46, height: 46, borderRadius: '50%', background: 'rgba(0,207,255,0.13)', border: '1px solid rgba(0,207,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Play style={{ width: 18, height: 18, color: '#00CFFF', marginLeft: 2 }} />
                      </motion.div>
                      <div style={{ position: 'relative', textAlign: 'center' }}>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, fontSize: 11, marginBottom: 2 }}>Bemutató videó</div>
                        <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 9 }}>Hamarosan elérhető</div>
                      </div>
                    </div>
                    {/* /PLACEHOLDER */}
                  </div>
                </div>

                {/* ── HINGE ── */}
                <div style={{ height: 4, background: 'linear-gradient(90deg, #080808 0%, #222224 15%, #3a3a3c 50%, #222224 85%, #080808 100%)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.07), transparent 60%)' }} />
                  {/* Right side of hinge */}
                  <div style={{ position: 'absolute', right: -3, top: 0, bottom: 0, width: 4, background: '#0a0a0c' }} />
                </div>

                {/* ── BASE ── */}
                <div style={{
                  background: 'linear-gradient(170deg, #3c3c3e 0%, #2c2c2e 40%, #222224 100%)',
                  borderRadius: '0 0 14px 14px',
                  padding: '10px 14px 16px',
                  boxShadow: [
                    '0 0 0 0.5px rgba(255,255,255,0.07) inset',
                    '-6px 10px 24px rgba(0,0,0,0.45)',
                    '3px 10px 18px rgba(0,0,0,0.3)',
                  ].join(', '),
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: '8%', right: '25%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), rgba(255,255,255,0.04))' }} />
                  {/* Right depth face */}
                  <div style={{ position: 'absolute', top: 0, right: -4, bottom: 4, width: 5, background: 'linear-gradient(180deg, #1a1a1c, #0e0e10)', borderRadius: '0 0 4px 0', transform: 'translateZ(-3px)' }} />

                  {/* Keyboard island */}
                  <div style={{ background: 'rgba(0,0,0,0.22)', borderRadius: 8, padding: '7px 10px 9px', marginBottom: 10, boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)' }}>
                    {/* Fn row */}
                    <div style={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div key={i} style={{ flex: 1, height: 7, borderRadius: 2, background: 'linear-gradient(180deg, #464648, #383838)', boxShadow: '0 1px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)' }} />
                      ))}
                    </div>
                    {/* Key rows */}
                    {[13, 12, 11].map((count, ri) => (
                      <div key={ri} style={{ display: 'flex', gap: 2, marginBottom: 2.5 }}>
                        {Array.from({ length: count }).map((_, ki) => (
                          <div key={ki} style={{ flex: 1, height: 16, borderRadius: 3, background: 'linear-gradient(180deg, #484848, #383838)', boxShadow: '0 2px 0 rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.07)', maxWidth: 36 }} />
                        ))}
                      </div>
                    ))}
                    {/* Spacebar */}
                    <div style={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ width: 18, height: 13, borderRadius: 3, background: 'linear-gradient(180deg,#484848,#383838)', boxShadow: '0 2px 0 rgba(0,0,0,0.65)' }} />
                      <div style={{ width: 18, height: 13, borderRadius: 3, background: 'linear-gradient(180deg,#484848,#383838)', boxShadow: '0 2px 0 rgba(0,0,0,0.65)' }} />
                      <div style={{ flex: 1, maxWidth: 190, height: 13, borderRadius: 3, background: 'linear-gradient(180deg,#4c4c4e,#3c3c3e)', boxShadow: '0 2px 0 rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.07)', margin: '0 5px' }} />
                      <div style={{ width: 18, height: 13, borderRadius: 3, background: 'linear-gradient(180deg,#484848,#383838)', boxShadow: '0 2px 0 rgba(0,0,0,0.65)' }} />
                      <div style={{ width: 18, height: 13, borderRadius: 3, background: 'linear-gradient(180deg,#484848,#383838)', boxShadow: '0 2px 0 rgba(0,0,0,0.65)' }} />
                    </div>
                  </div>

                  {/* Trackpad */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                      whileHover={{ boxShadow: '0 0 0 1px rgba(0,207,255,0.18), inset 0 1px 0 rgba(255,255,255,0.07), 0 2px 8px rgba(0,0,0,0.5)' }}
                      style={{ width: 128, height: 72, borderRadius: 9, background: 'linear-gradient(155deg, #3e3e40, #2e2e30)', border: '0.5px solid rgba(255,255,255,0.08)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.5)', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
                    />
                  </div>
                </div>

                {/* Bottom edge */}
                <div style={{ height: 2, borderRadius: '0 0 16px 16px', marginInline: '3%', background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.55) 20%, rgba(0,0,0,0.55) 80%, transparent)' }} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
