'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PhoneMockup } from '@/components/ui/PhoneMockup'

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
      className="flex items-center justify-center relative py-4 lg:py-0"
    >
      <div className="absolute inset-0 bg-cyan/10 rounded-full blur-3xl scale-75" aria-hidden="true" />

      <div className="relative flex items-end justify-center gap-0 lg:gap-4">

        {/* LEFT PHONE */}
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -14 }}
          animate={{ opacity: 1, x: 0, rotate: -14 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-4 lg:mb-8 opacity-70 -mr-10 lg:mr-4"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
        >
          <PhoneMockup size={isMobile ? 'xs' : 'sm'} scrollClass="phone-scroll-slow">
            <Image src="/screenshots/baloldalitelefon.webp" alt="Ügyfél weboldal 1" width={390} height={2000} className="w-full h-auto" />
          </PhoneMockup>
        </motion.div>

        {/* CENTER PHONE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative z-10"
          style={{ filter: 'drop-shadow(0 32px 60px rgba(0,0,0,0.3))' }}
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-100 px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap z-20"
            aria-hidden="true"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-display font-semibold text-dark">Ügyfél oldala</span>
          </motion.div>

          <div className="lg:hidden">
            <PhoneMockup size="md" scrollClass="phone-scroll">
              <Image src="/screenshots/ugyfel1.webp" alt="Ügyfél weboldal" width={390} height={2000} className="w-full h-auto" priority />
            </PhoneMockup>
          </div>

          <div className="hidden lg:block">
            <PhoneMockup size="lg" scrollClass="phone-scroll">
              <Image src="/screenshots/ugyfel1.webp" alt="Ügyfél weboldal" width={390} height={2000} className="w-full h-auto" priority />
            </PhoneMockup>
          </div>
        </motion.div>

        {/* RIGHT PHONE */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 14 }}
          animate={{ opacity: 1, x: 0, rotate: 14 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-4 lg:mb-8 opacity-70 -ml-10 lg:ml-4"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
        >
          <PhoneMockup size={isMobile ? 'xs' : 'sm'} scrollClass="phone-scroll-fast">
            <Image src="/screenshots/ugyfel1.webp" alt="Ügyfél weboldal 2" width={390} height={2000} className="w-full h-auto" />
          </PhoneMockup>
        </motion.div>

      </div>
    </motion.div>
  )
}
