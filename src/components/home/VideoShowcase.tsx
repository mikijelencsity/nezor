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
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-6 bg-cyan/8 rounded-3xl blur-3xl" />

          <div className="relative">
            {/* Screen */}
            <div className="bg-gray-900 rounded-t-2xl overflow-hidden shadow-2xl border border-gray-700 border-b-0">
              {/* Browser chrome */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-700/60">
                <div className="flex gap-1.5 flex-shrink-0">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-gray-700/60 rounded-md px-3 py-1 text-xs text-gray-400 text-center">
                  nezor.hu
                </div>
                <div className="w-16 flex-shrink-0" />
              </div>

              {/* Video area — 16:9 aspect ratio */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute inset-0 bg-gray-950 flex items-center justify-center">

                  {/*
                   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                   * VIDEÓ BEILLESZTÉSE:
                   * 1. Tedd a videót a public/video/ mappába
                   * 2. Töröld ki a placeholder div-et alatta
                   * 3. Szedd ki a megjegyzésből az alábbi video taget
                   *
                   * <video
                   *   className="absolute inset-0 w-full h-full object-cover"
                   *   autoPlay
                   *   muted
                   *   loop
                   *   playsInline
                   *   preload="metadata"
                   *   poster="/video/nezor-demo-poster.jpg"
                   * >
                   *   <source src="/video/nezor-demo.webm" type="video/webm" />
                   *   <source src="/video/nezor-demo.mp4" type="video/mp4" />
                   * </video>
                   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                   */}

                  {/* PLACEHOLDER — töröld ki ha van videód */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 flex flex-col items-center justify-center gap-4">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <div className="relative w-16 h-16 bg-cyan/20 rounded-full flex items-center justify-center border border-cyan/30">
                      <Play className="w-7 h-7 text-cyan ml-1" />
                    </div>
                    <div className="relative text-center">
                      <div className="text-white font-display font-bold text-lg mb-1">Videó hamarosan</div>
                      <div className="text-gray-500 text-sm">Ide kerül a bemutató videó</div>
                    </div>
                  </div>
                  {/* /PLACEHOLDER */}

                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-xl" />
            <div className="h-3 bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-xl mx-6 shadow-lg" />
            <div className="h-1.5 bg-gray-600 rounded-b-2xl mx-14 shadow-md" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
