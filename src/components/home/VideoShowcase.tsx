'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play } from 'lucide-react'

export function VideoShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Bemutató
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">
            Látványos eredmények
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Nézd meg hogyan néz ki egy NEZOR által készített weboldal élesben.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 28, delay: 0.15 }}
          className="flex justify-center"
        >
          {/* Outer glow */}
          <div className="relative w-full" style={{ maxWidth: 620 }}>
            <div className="absolute -inset-8 rounded-3xl blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(0,207,255,0.08) 0%, transparent 70%)' }} />

            <div className="relative">

              {/* ── SCREEN LID ── */}
              <div
                style={{
                  background: 'linear-gradient(160deg, #3a3a3c 0%, #2c2c2e 40%, #1c1c1e 100%)',
                  borderRadius: '12px 12px 4px 4px',
                  padding: '6px 6px 0',
                  boxShadow: '0 0 0 0.5px rgba(255,255,255,0.08) inset, 0 -1px 0 rgba(0,0,0,0.5)',
                  position: 'relative',
                }}
              >
                {/* Top highlight */}
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', borderRadius: 1 }} />

                {/* Notch */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
                  <div style={{ width: 80, height: 6, background: '#1c1c1e', borderRadius: '0 0 6px 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2c2c2e', border: '1px solid #3a3a3a' }} />
                  </div>
                </div>

                {/* Screen */}
                <div
                  style={{
                    borderRadius: '6px 6px 2px 2px',
                    overflow: 'hidden',
                    background: '#000',
                    aspectRatio: '16/10',
                    position: 'relative',
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.8)',
                  }}
                >
                  {/* Glass reflection */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 40%)', zIndex: 10, pointerEvents: 'none' }} />

                  {/* Browser bar */}
                  <div style={{ background: '#1d1d1f', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ display: 'flex', gap: 5 }}>
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'block' }} />
                    </div>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 4, padding: '3px 10px', display: 'flex', alignItems: 'center', gap: 6, maxWidth: 260, margin: '0 auto' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.2)', flexShrink: 0 }} />
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: 0.3 }}>nezor.hu</span>
                    </div>
                    <div style={{ width: 40 }} />
                  </div>

                  {/*
                   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                   * VIDEÓ BEILLESZTÉSE:
                   * 1. Tedd a videót a public/video/ mappába
                   * 2. Töröld ki a PLACEHOLDER blokkot lent
                   * 3. Szedd ki a megjegyzésből az alábbi video taget
                   *
                   * <video
                   *   className="w-full h-full object-cover"
                   *   style={{ display: 'block' }}
                   *   autoPlay muted loop playsInline
                   *   preload="metadata"
                   *   poster="/video/nezor-demo-poster.jpg"
                   * >
                   *   <source src="/video/nezor-demo.webm" type="video/webm" />
                   *   <source src="/video/nezor-demo.mp4" type="video/mp4" />
                   * </video>
                   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                   */}

                  {/* PLACEHOLDER */}
                  <div style={{ position: 'absolute', inset: 0, top: 30, background: 'linear-gradient(145deg, #0a0a0f, #0d1220, #0a0a0f)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,207,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                    <div style={{ position: 'relative', width: 52, height: 52, borderRadius: '50%', background: 'rgba(0,207,255,0.12)', border: '1px solid rgba(0,207,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play style={{ width: 22, height: 22, color: '#00CFFF', marginLeft: 3 }} />
                    </div>
                    <div style={{ position: 'relative', textAlign: 'center' }}>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: 13, marginBottom: 3 }}>Bemutató videó</div>
                      <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11 }}>Hamarosan elérhető</div>
                    </div>
                  </div>
                  {/* /PLACEHOLDER */}

                </div>
              </div>

              {/* ── HINGE ── */}
              <div style={{ height: 3, background: 'linear-gradient(90deg, #111 0%, #2a2a2c 15%, #3a3a3c 50%, #2a2a2c 85%, #111 100%)', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 50%)' }} />
              </div>

              {/* ── BASE ── */}
              <div
                style={{
                  background: 'linear-gradient(175deg, #3a3a3c 0%, #2c2c2e 30%, #252527 100%)',
                  borderRadius: '0 0 10px 10px',
                  padding: '10px 14px 14px',
                  boxShadow: '0 0 0 0.5px rgba(255,255,255,0.06) inset',
                  position: 'relative',
                }}
              >
                {/* Base top highlight */}
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

                {/* Keyboard island */}
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 8, padding: '8px 10px 10px', marginBottom: 8 }}>
                  {/* Function row */}
                  <div style={{ display: 'flex', gap: 3, marginBottom: 4, justifyContent: 'space-between' }}>
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i} style={{ flex: 1, height: 7, borderRadius: 3, background: 'linear-gradient(180deg, #4a4a4c, #3a3a3c)', boxShadow: '0 1px 0 rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)' }} />
                    ))}
                  </div>
                  {/* Key rows */}
                  {[13, 12, 11].map((count, ri) => (
                    <div key={ri} style={{ display: 'flex', gap: 3, marginBottom: 3, justifyContent: ri === 2 ? 'center' : 'space-between' }}>
                      {Array.from({ length: count }).map((_, ki) => (
                        <div key={ki} style={{ flex: 1, height: 14, borderRadius: 3, background: 'linear-gradient(180deg, #464648, #363638)', boxShadow: '0 1.5px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)', maxWidth: 34 }} />
                      ))}
                    </div>
                  ))}
                  {/* Space bar row */}
                  <div style={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 22, height: 12, borderRadius: 3, background: 'linear-gradient(180deg, #464648, #363638)', boxShadow: '0 1.5px 0 rgba(0,0,0,0.6)' }} />
                    <div style={{ width: 22, height: 12, borderRadius: 3, background: 'linear-gradient(180deg, #464648, #363638)', boxShadow: '0 1.5px 0 rgba(0,0,0,0.6)' }} />
                    <div style={{ flex: 1, height: 12, borderRadius: 3, background: 'linear-gradient(180deg, #4a4a4c, #3a3a3c)', boxShadow: '0 1.5px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)', maxWidth: 200, margin: '0 6px' }} />
                    <div style={{ width: 22, height: 12, borderRadius: 3, background: 'linear-gradient(180deg, #464648, #363638)', boxShadow: '0 1.5px 0 rgba(0,0,0,0.6)' }} />
                    <div style={{ width: 22, height: 12, borderRadius: 3, background: 'linear-gradient(180deg, #464648, #363638)', boxShadow: '0 1.5px 0 rgba(0,0,0,0.6)' }} />
                  </div>
                </div>

                {/* Trackpad */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: 110, height: 60, borderRadius: 8, background: 'linear-gradient(145deg, #3c3c3e, #2e2e30)', border: '0.5px solid rgba(255,255,255,0.08)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 3px rgba(0,0,0,0.4)' }} />
                </div>
              </div>

              {/* Bottom shadow */}
              <div style={{ height: 2, background: 'linear-gradient(90deg, transparent 5%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.6) 80%, transparent 95%)', borderRadius: '0 0 12px 12px' }} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
