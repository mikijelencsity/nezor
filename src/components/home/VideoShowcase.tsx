'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Play, X } from 'lucide-react'

export function VideoShowcase() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [open, setOpen] = useState(false)

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <section className="py-20 bg-secondary overflow-hidden" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Bemutató</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Nézd meg hogyan dolgozunk</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Egy valódi projekt elkészítésének folyamata — konzultációtól az éles weboldalig.
          </p>
        </motion.div>

        {/* Thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 240, damping: 28, delay: 0.15 }}
          className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: '16/9' }}
          onClick={() => setOpen(true)}
          role="button"
          aria-label="Bemutató videó megnyitása"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setOpen(true)}
        >
          {/*
           * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           * POSTER KÉP BEILLESZTÉSE:
           * Cseréld ki az alábbi div-et erre:
           *
           * <img
           *   src="/video/nezor-demo-poster.jpg"
           *   alt="NEZOR bemutató videó"
           *   className="w-full h-full object-cover"
           * />
           * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           */}

          {/* Poster placeholder — cseréld ki valódi képre */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(0,207,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
            {/* Decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-96 h-96 bg-cyan/8 rounded-full blur-3xl" />
              <div className="absolute w-64 h-64 bg-blue-500/8 rounded-full blur-2xl translate-x-24 -translate-y-12" />
            </div>
            {/* Bottom text overlay */}
            <div className="absolute bottom-6 left-8">
              <div className="text-white/25 text-xs font-display uppercase tracking-widest">NEZOR · Digitális Ügynökség</div>
            </div>
          </div>
          {/* /Poster placeholder */}

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {/* Outer pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
                className="absolute w-28 h-28 rounded-full border-2 border-white/30"
              />
              {/* Middle ring */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
                className="absolute w-20 h-20 rounded-full border border-white/40"
              />
              {/* Play circle */}
              <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)' }}>
                <Play className="w-6 h-6 text-dark ml-1" fill="currentColor" strokeWidth={0} />
              </div>
            </motion.div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-display font-semibold px-2.5 py-1 rounded-lg">
            2:30
          </div>
        </motion.div>

        {/* Click hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-muted mt-4"
        >
          Kattints a lejátszáshoz
        </motion.p>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[150] bg-black/92 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            {/* Video container */}
            <motion.div
              key="video"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="fixed inset-0 z-[160] flex items-center justify-center p-4 md:p-10 pointer-events-none"
            >
              <div className="relative w-full max-w-5xl pointer-events-auto" style={{ aspectRatio: '16/9' }}>
                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setOpen(false)}
                  className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
                  aria-label="Bezárás"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Video / placeholder */}
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                  {/*
                   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                   * VIDEÓ BEILLESZTÉSE:
                   * 1. Tedd a videót: public/video/nezor-demo.mp4
                   * 2. Töröld a lightbox-placeholder div-et lent
                   * 3. Szedd ki a megjegyzésből az alábbi video taget
                   *
                   * <video
                   *   className="w-full h-full object-cover"
                   *   controls
                   *   autoPlay
                   *   playsInline
                   *   poster="/video/nezor-demo-poster.jpg"
                   * >
                   *   <source src="/video/nezor-demo.webm" type="video/webm" />
                   *   <source src="/video/nezor-demo.mp4"  type="video/mp4" />
                   * </video>
                   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                   */}

                  {/* lightbox-placeholder */}
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,207,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="relative w-16 h-16 bg-cyan/15 rounded-full flex items-center justify-center border border-cyan/25">
                      <Play className="w-7 h-7 text-cyan ml-1" />
                    </div>
                    <div className="relative text-center">
                      <div className="text-white font-display font-bold text-lg mb-1">Videó hamarosan elérhető</div>
                      <div className="text-gray-500 text-sm">Tedd be a videót a public/video/ mappába</div>
                    </div>
                  </div>
                  {/* /lightbox-placeholder */}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
