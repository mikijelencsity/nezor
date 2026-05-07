'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle, Globe, ShoppingBag, TrendingUp } from 'lucide-react'

const highlights = ['Ingyenes konzultáció', '24 órán belüli válasz', 'Bács-Kiskun megye']

const mockupItems = [
  { icon: Globe, label: 'Weboldal', color: 'text-cyan' },
  { icon: ShoppingBag, label: 'Webshop', color: 'text-blue-400' },
  { icon: TrendingUp, label: 'Hirdetés', color: 'text-cyan' },
]

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

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

          {/* ── Right: browser mockup — hidden on mobile ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow blob */}
              <div className="absolute -inset-6 bg-cyan/10 rounded-3xl blur-3xl" aria-hidden="true" />

              {/* Browser chrome */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-xs text-muted border border-gray-200">
                    ugyfel-weboldala.hu
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  {/* Fake nav */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-2.5 bg-gradient-to-r from-cyan to-blue-400 rounded-full" />
                    <div className="flex gap-3">
                      {[36, 28, 32, 44].map((w, i) => (
                        <div key={i} className="h-1.5 bg-gray-200 rounded-full" style={{ width: w }} />
                      ))}
                    </div>
                  </div>

                  {/* Hero area */}
                  <div className="bg-gradient-to-br from-cyan-light to-white rounded-xl p-5">
                    <div className="w-3/4 h-3.5 bg-dark/70 rounded-full mb-2.5" />
                    <div className="w-1/2 h-2.5 bg-dark/35 rounded-full mb-4" />
                    <div className="flex gap-2">
                      <div className="h-7 w-20 bg-cyan rounded-lg" />
                      <div className="h-7 w-18 border-2 border-cyan rounded-lg" />
                    </div>
                  </div>

                  {/* Service cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {mockupItems.map(({ icon: Icon, label, color }) => (
                      <div key={label} className="bg-secondary rounded-xl p-3 text-center">
                        <Icon className={`w-4 h-4 ${color} mx-auto mb-1`} aria-hidden="true" />
                        <div className="text-xs text-muted font-display font-medium">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {[{ val: '9+', w: '75%' }, { val: '15+', w: '88%' }, { val: '100%', w: '100%' }].map(({ val, w }) => (
                      <div key={val} className="text-center">
                        <div className="text-sm font-display font-bold text-gradient">{val}</div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1">
                          <div className="h-full bg-gradient-to-r from-cyan to-blue-400 rounded-full" style={{ width: w }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2"
                aria-hidden="true"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-display font-semibold text-dark">Élő projekt</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2"
                aria-hidden="true"
              >
                <CheckCircle className="w-3.5 h-3.5 text-cyan" />
                <span className="text-xs font-display font-semibold text-dark">SEO optimalizált</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
