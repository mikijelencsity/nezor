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

        {/* Laptop mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 28, delay: 0.15 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute -inset-6 bg-cyan/6 rounded-3xl blur-3xl" />

          <div className="relative" style={{ filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.35))' }}>

            {/* ── LID / SCREEN ── */}
            <div
              className="relative rounded-t-xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                padding: '10px 10px 0 10px',
                borderTop: '1px solid #444',
                borderLeft: '1px solid #444',
                borderRight: '1px solid #333',
              }}
            >
              {/* Thin top bezel with camera */}
              <div className="flex items-center justify-center py-1.5 mb-0">
                <div className="w-2 h-2 rounded-full bg-gray-600 border border-gray-500" />
              </div>

              {/* Screen glass */}
              <div
                className="rounded-t-sm overflow-hidden relative"
                style={{ background: '#000', aspectRatio: '16/10' }}
              >
                {/* Subtle screen reflection */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
                  }}
                />

                {/* Browser chrome */}
                <div className="bg-gray-900 border-b border-gray-700/80 px-3 py-2 flex items-center gap-2.5">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-3 py-0.5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full border border-gray-600 flex-shrink-0" />
                    <span className="text-[10px] text-gray-500">nezor.hu</span>
                    <div className="w-2.5 h-2.5 ml-auto flex-shrink-0">
                      <div className="w-full h-0.5 bg-gray-600 rounded mb-0.5" />
                      <div className="w-3/4 h-0.5 bg-gray-600 rounded mb-0.5" />
                      <div className="w-full h-0.5 bg-gray-600 rounded" />
                    </div>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <div className="w-4 h-4 rounded bg-gray-800" />
                    <div className="w-4 h-4 rounded bg-gray-800" />
                  </div>
                </div>

                {/*
                 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 * VIDEÓ BEILLESZTÉSE:
                 * 1. Tedd a videót a public/video/ mappába
                 * 2. Töröld ki a PLACEHOLDER blokkot lent
                 * 3. Szedd ki a megjegyzésből az alábbi video taget
                 *
                 * <video
                 *   className="w-full h-full object-cover"
                 *   autoPlay muted loop playsInline
                 *   preload="metadata"
                 *   poster="/video/nezor-demo-poster.jpg"
                 * >
                 *   <source src="/video/nezor-demo.webm" type="video/webm" />
                 *   <source src="/video/nezor-demo.mp4" type="video/mp4" />
                 * </video>
                 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                 */}

                {/* PLACEHOLDER */}
                <div className="absolute inset-0 top-8 bg-gradient-to-br from-gray-950 via-blue-950/60 to-gray-950 flex flex-col items-center justify-center gap-3">
                  <div className="absolute inset-0 bg-grid-pattern opacity-8" />
                  <div className="relative w-14 h-14 bg-cyan/15 rounded-full flex items-center justify-center border border-cyan/25 backdrop-blur-sm">
                    <Play className="w-6 h-6 text-cyan ml-0.5" />
                  </div>
                  <div className="relative text-center">
                    <div className="text-white/80 font-display font-semibold text-sm mb-0.5">Bemutató videó</div>
                    <div className="text-gray-600 text-xs">Hamarosan elérhető</div>
                  </div>
                </div>
                {/* /PLACEHOLDER */}

              </div>
            </div>

            {/* ── BASE / KEYBOARD ── */}
            <div
              style={{
                background: 'linear-gradient(180deg, #282828 0%, #222 100%)',
                borderLeft: '1px solid #3a3a3a',
                borderRight: '1px solid #2a2a2a',
                borderBottom: '1px solid #222',
                padding: '10px 12px 8px',
              }}
              className="rounded-b-xl"
            >
              {/* Keyboard rows */}
              <div className="space-y-1 mb-3">
                {[
                  { keys: 14, w: 'w-full' },
                  { keys: 13, w: 'w-[96%]' },
                  { keys: 11, w: 'w-[92%] mx-auto' },
                ].map((row, ri) => (
                  <div key={ri} className={`flex gap-0.5 justify-center ${row.w}`}>
                    {Array.from({ length: row.keys }).map((_, ki) => (
                      <div
                        key={ki}
                        className="flex-1 h-4 rounded-sm"
                        style={{
                          background: 'linear-gradient(180deg, #363636 0%, #2e2e2e 100%)',
                          boxShadow: '0 1px 0 #1a1a1a',
                          maxWidth: 28,
                        }}
                      />
                    ))}
                  </div>
                ))}
                {/* Space bar row */}
                <div className="flex gap-0.5 justify-center w-full">
                  <div className="w-6 h-3.5 rounded-sm" style={{ background: '#2e2e2e', boxShadow: '0 1px 0 #1a1a1a' }} />
                  <div className="w-6 h-3.5 rounded-sm" style={{ background: '#2e2e2e', boxShadow: '0 1px 0 #1a1a1a' }} />
                  <div className="flex-1 h-3.5 rounded-sm mx-2" style={{ background: 'linear-gradient(180deg, #383838 0%, #2e2e2e 100%)', boxShadow: '0 1px 0 #1a1a1a', maxWidth: 180 }} />
                  <div className="w-6 h-3.5 rounded-sm" style={{ background: '#2e2e2e', boxShadow: '0 1px 0 #1a1a1a' }} />
                  <div className="w-6 h-3.5 rounded-sm" style={{ background: '#2e2e2e', boxShadow: '0 1px 0 #1a1a1a' }} />
                </div>
              </div>

              {/* Trackpad */}
              <div className="flex justify-center">
                <div
                  className="w-24 h-12 rounded-lg"
                  style={{
                    background: 'linear-gradient(160deg, #303030, #282828)',
                    border: '1px solid #3a3a3a',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                />
              </div>
            </div>

            {/* Bottom edge shadow */}
            <div
              className="h-1 rounded-b-2xl mx-4"
              style={{ background: 'linear-gradient(90deg, transparent, #111 20%, #111 80%, transparent)' }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
