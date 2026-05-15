'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { LaptopMockup } from '@/components/ui/LaptopMockup'

export function HeroPhones() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
      className="flex items-end justify-center relative py-4 lg:py-0"
    >
      <div className="absolute inset-0 bg-cyan/10 rounded-full blur-3xl scale-75" aria-hidden="true" />

      {/* Mobile: csak laptop */}
      <div className="lg:hidden relative z-10" style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.2))' }}>
        <LaptopMockup>
          <img
            src="/screenshots/weboldalak.png"
            alt="Weboldal példa"
            className="w-full h-full object-cover object-top"
          />
        </LaptopMockup>
      </div>

      {/* Desktop: bal telefon + laptop + jobb telefon */}
      <div className="hidden lg:flex items-end justify-center gap-2">

        {/* BAL TELEFON */}
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: -10 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-6 opacity-80 -mr-6"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
        >
          <PhoneMockup size="sm" scrollClass="phone-scroll-slow">
            <Image src="/screenshots/baloldalitelefon.webp" alt="Ügyfél weboldal mobilon" width={390} height={2000} className="w-full h-auto" />
          </PhoneMockup>
        </motion.div>

        {/* LAPTOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative z-10"
          style={{ filter: 'drop-shadow(0 32px 60px rgba(0,0,0,0.25))' }}
        >
          {/* Badge */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-100 px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap z-20"
            aria-hidden="true"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-display font-semibold text-dark">Ügyfél oldala</span>
          </motion.div>

          <LaptopMockup>
            <img
              src="/screenshots/weboldalak.png"
              alt="Weboldal példa"
              className="w-full h-full object-cover object-top"
            />
          </LaptopMockup>
        </motion.div>

        {/* JOBB TELEFON */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 10 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-6 opacity-80 -ml-6"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
        >
          <PhoneMockup size="sm" scrollClass="phone-scroll-fast">
            <Image src="/screenshots/ugyfel1.webp" alt="Ügyfél weboldal mobilon" width={390} height={2000} className="w-full h-auto" />
          </PhoneMockup>
        </motion.div>

      </div>
    </motion.div>
  )
}
