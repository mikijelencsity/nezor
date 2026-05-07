'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = ['Ingyenes konzultáció', '24 órán belüli válasz', 'Bács-Kiskun megye']

export function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  const headline = [
    { text: 'Professzionális', gradient: false },
    { text: 'weboldal.', gradient: false },
    { text: 'Több', gradient: true },
    { text: 'ügyfél.', gradient: true },
    { text: 'Gyorsabb', gradient: true },
    { text: 'növekedés.', gradient: true },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 min-h-[88vh] flex items-center">
      {/* Parallax dot grid — desktop only */}
      {!isMobile && (
        <div
          className="dot-grid-bg absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          aria-hidden="true"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-cyan-light/40 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left: text ── */}
          <div>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-cyan-light text-cyan font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" aria-hidden="true" />
              Digitális ügynökség — Bács-Kiskun megye
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark leading-tight mb-6">
              {headline.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                  className={`inline-block mr-3 ${w.gradient ? 'text-gradient' : ''}`}
                >
                  {w.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="text-lg md:text-xl text-muted mb-8 leading-relaxed"
            >
              Weboldalakat, webshopokat és Facebook hirdetéseket készítünk, amelyek valódi eredményeket hoznak — Bács-Kiskun megyétől az egész országig.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button href="/csomagok" size="lg" className="glow-pulse">
                Csomagok megtekintése <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/kapcsolat" variant="outline" size="lg">
                Ingyenes konzultáció
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
            >
              {highlights.map((text) => (
                <li key={text} className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                  {text}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Right: phone mockups ── */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 48, y: isMobile ? 24 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="flex items-center justify-center relative py-8 lg:py-0"
          >
            {/* Glow blob */}
            <div className="absolute inset-0 bg-cyan/10 rounded-full blur-3xl scale-75" aria-hidden="true" />

            {/* Phone arrangement */}
            <div className="relative flex items-end justify-center gap-3 lg:gap-4">

              {/* Left phone — desktop only */}
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -14 }}
                animate={{ opacity: 1, x: 0, rotate: -14 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="hidden lg:block mb-8 opacity-80"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
              >
                <PhoneMockup size="sm" scrollClass="phone-scroll-slow" />
              </motion.div>

              {/* Center phone — visible on ALL screen sizes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative z-10"
                style={{ filter: 'drop-shadow(0 32px 60px rgba(0,0,0,0.3))' }}
              >
                {/* "Ügyfél oldala" badge */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-100 px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap z-20"
                  aria-hidden="true"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-display font-semibold text-dark">Ügyfél oldala</span>
                </motion.div>

                {/* Mobile: md size, Desktop: lg size */}
                <div className="lg:hidden">
                  <PhoneMockup size="md" scrollClass="phone-scroll">
                    <img
                      src="/screenshots/neked-sutom.jpg"
                      alt="Neked Sütöm — ügyfél weboldal"
                      className="w-full"
                    />
                  </PhoneMockup>
                </div>
                <div className="hidden lg:block">
                  <PhoneMockup size="lg" scrollClass="phone-scroll">
                    <img
                      src="/screenshots/neked-sutom.jpg"
                      alt="Neked Sütöm — ügyfél weboldal"
                      className="w-full"
                    />
                  </PhoneMockup>
                </div>
              </motion.div>

              {/* Right phone — desktop only */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 14 }}
                animate={{ opacity: 1, x: 0, rotate: 14 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="hidden lg:block mb-8 opacity-80"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
              >
                <PhoneMockup size="sm" scrollClass="phone-scroll-fast" />
              </motion.div>

            </div>

            {/* Bottom badge */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-100 px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap"
              aria-hidden="true"
            >
              <CheckCircle className="w-3.5 h-3.5 text-cyan" />
              <span className="text-xs font-display font-semibold text-dark">SEO optimalizált</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
