'use client'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

export function VideoShowcase() {
  const sectionRef = useRef(null)
  const laptopRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [isHovering, setIsHovering] = useState(false)

  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 25 })
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), { stiffness: 150, damping: 25 })
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), { stiffness: 150, damping: 25 })

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
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Bemutató</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Látványos eredmények</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">Nézd meg hogyan néz ki egy NEZOR által készített weboldal élesben.</p>
        </motion.div>

        {/* 3D scene container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 28, delay: 0.2 }}
          className="flex justify-center"
          style={{ perspective: 1200 }}
        >
          <motion.div
            ref={laptopRef}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-pointer select-none"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Ambient glow */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                inset: -40,
                background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(0,207,255,0.12), transparent 70%)',
                filter: 'blur(20px)',
                opacity: isHovering ? 1 : 0.5,
                transition: 'opacity 0.4s',
              }}
            />

            {/* Drop shadow beneath laptop */}
            <div style={{
              position: 'absolute',
              bottom: -20,
              left: '10%',
              right: '10%',
              height: 30,
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%)',
              filter: 'blur(12px)',
              transform: 'translateZ(-40px)',
            }} />

            <div className="relative w-full" style={{ maxWidth: 620 }}>

              {/* ── LID ── */}
              <div style={{
                background: 'linear-gradient(160deg, #3d3d3f 0%, #2d2d2f 45%, #1d1d1f 100%)',
                borderRadius: '14px 14px 4px 4px',
                padding: '7px 7px 0',
                boxShadow: '0 0 0 0.5px rgba(255,255,255,0.09) inset, -4px -4px 12px rgba(0,0,0,0.3), 4px -4px 12px rgba(0,0,0,0.2)',
                position: 'relative',
                transformStyle: 'preserve-3d',
              }}>
                {/* Lid top specular highlight */}
                <div style={{ position: 'absolute', top: 1, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)', borderRadius: 1 }} />
                {/* Lid side highlights */}
                <div style={{ position: 'absolute', top: 8, left: 1, bottom: 0, width: 1, background: 'linear-gradient(180deg, rgba(255,255,255,0.12), transparent)' }} />
                <div style={{ position: 'absolute', top: 8, right: 1, bottom: 0, width: 1, background: 'linear-gradient(180deg, rgba(255,255,255,0.06), transparent)' }} />

                {/* Notch */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 5, position: 'relative', zIndex: 2 }}>
                  <div style={{ width: 88, height: 7, background: '#1c1c1e', borderRadius: '0 0 8px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2a2a2a', border: '1px solid #333' }} />
                  </div>
                </div>

                {/* Screen */}
                <div style={{ borderRadius: '7px 7px 2px 2px', overflow: 'hidden', background: '#000', aspectRatio: '16/10', position: 'relative', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.9)' }}>

                  {/* Mouse-tracked screen glare */}
                  <motion.div
                    style={{
                      position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'none',
                      background: isHovering
                        ? `radial-gradient(circle 120px at ${glareX}% ${glareY}%, rgba(255,255,255,0.05) 0%, transparent 70%)`
                        : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)',
                    }}
                  />

                  {/* Browser chrome */}
                  <div style={{ background: '#1d1d1f', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 5 }}>
                    <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'block', boxShadow: '0 0 4px rgba(255,95,87,0.4)' }} />
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'block', boxShadow: '0 0 4px rgba(254,188,46,0.3)' }} />
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'block', boxShadow: '0 0 4px rgba(40,200,64,0.3)' }} />
                    </div>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 5, padding: '3px 10px', display: 'flex', alignItems: 'center', gap: 6, maxWidth: 240, margin: '0 auto' }}>
                      <div style={{ width: 7, height: 7, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.2)', flexShrink: 0 }} />
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>nezor.hu</span>
                    </div>
                    <div style={{ width: 40, flexShrink: 0 }} />
                  </div>

                  {/*
                   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                   * VIDEÓ BEILLESZTÉSE:
                   * 1. Tedd a videót a public/video/ mappába
                   * 2. Töröld ki a PLACEHOLDER blokkot lent
                   * 3. Szedd ki a megjegyzésből az alábbi video taget
                   *
                   * <video
                   *   style={{ display:'block', width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0, top:30 }}
                   *   autoPlay muted loop playsInline preload="metadata"
                   *   poster="/video/nezor-demo-poster.jpg"
                   * >
                   *   <source src="/video/nezor-demo.webm" type="video/webm" />
                   *   <source src="/video/nezor-demo.mp4" type="video/mp4" />
                   * </video>
                   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                   */}

                  {/* PLACEHOLDER */}
                  <div style={{ position: 'absolute', inset: 0, top: 30, background: 'linear-gradient(145deg, #080810, #0d1220, #080810)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,207,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                    <motion.div
                      animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ position: 'relative', width: 50, height: 50, borderRadius: '50%', background: 'rgba(0,207,255,0.12)', border: '1px solid rgba(0,207,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Play style={{ width: 20, height: 20, color: '#00CFFF', marginLeft: 2 }} />
                    </motion.div>
                    <div style={{ position: 'relative', textAlign: 'center' }}>
                      <div style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 700, fontSize: 12, marginBottom: 3 }}>Bemutató videó</div>
                      <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>Hamarosan elérhető</div>
                    </div>
                  </div>
                  {/* /PLACEHOLDER */}

                </div>
              </div>

              {/* ── HINGE ── */}
              <div style={{ height: 4, background: 'linear-gradient(90deg, #0a0a0a 0%, #252527 12%, #3c3c3e 50%, #252527 88%, #0a0a0a 100%)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
              </div>

              {/* ── BASE ── */}
              <div style={{
                background: 'linear-gradient(175deg, #3c3c3e 0%, #2c2c2e 35%, #242426 100%)',
                borderRadius: '0 0 12px 12px',
                padding: '10px 14px 16px',
                boxShadow: '0 0 0 0.5px rgba(255,255,255,0.06) inset, 4px 8px 20px rgba(0,0,0,0.4), -4px 8px 20px rgba(0,0,0,0.3)',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transform: 'translateZ(-2px)',
              }}>
                <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.09), transparent)' }} />

                {/* Keyboard island */}
                <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: 8, padding: '7px 10px 9px', marginBottom: 10, boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.4)' }}>
                  {/* Fn row */}
                  <div style={{ display: 'flex', gap: 2.5, marginBottom: 3 }}>
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i} style={{ flex: 1, height: 7, borderRadius: 2.5, background: 'linear-gradient(180deg, #464648, #383838)', boxShadow: '0 1px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)' }} />
                    ))}
                  </div>
                  {/* Key rows */}
                  {[13, 12, 11].map((count, ri) => (
                    <div key={ri} style={{ display: 'flex', gap: 2.5, marginBottom: 2.5, justifyContent: 'space-between' }}>
                      {Array.from({ length: count }).map((_, ki) => (
                        <div key={ki} style={{ flex: 1, height: 16, borderRadius: 3, background: 'linear-gradient(180deg, #484848, #383838)', boxShadow: '0 2px 0 rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.07)', maxWidth: 36 }} />
                      ))}
                    </div>
                  ))}
                  {/* Spacebar */}
                  <div style={{ display: 'flex', gap: 2.5, alignItems: 'center', justifyContent: 'center' }}>
                    {[18, 18].map((w, i) => (
                      <div key={i} style={{ width: w, height: 13, borderRadius: 3, background: 'linear-gradient(180deg, #484848, #383838)', boxShadow: '0 2px 0 rgba(0,0,0,0.65)' }} />
                    ))}
                    <div style={{ width: 200, height: 13, borderRadius: 3, background: 'linear-gradient(180deg, #4c4c4e, #3c3c3e)', boxShadow: '0 2px 0 rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.07)', margin: '0 6px', flex: 1, maxWidth: 200 }} />
                    {[18, 18].map((w, i) => (
                      <div key={i} style={{ width: w, height: 13, borderRadius: 3, background: 'linear-gradient(180deg, #484848, #383838)', boxShadow: '0 2px 0 rgba(0,0,0,0.65)' }} />
                    ))}
                  </div>
                </div>

                {/* Trackpad */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    whileHover={{ boxShadow: '0 0 0 1px rgba(0,207,255,0.2), inset 0 1px 0 rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.5)' }}
                    style={{ width: 120, height: 68, borderRadius: 9, background: 'linear-gradient(155deg, #3e3e40, #303032)', border: '0.5px solid rgba(255,255,255,0.09)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 6px rgba(0,0,0,0.5)', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
                  />
                </div>
              </div>

              {/* Ground shadow */}
              <div style={{ height: 2, borderRadius: '0 0 14px 14px', marginInline: '4%', background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.5) 80%, transparent)' }} />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
