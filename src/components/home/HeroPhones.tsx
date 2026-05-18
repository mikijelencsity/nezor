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
      className="flex items-end justify-center relative py-8 lg:py-0"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-cyan/15 rounded-full blur-3xl scale-90 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative flex items-end justify-center gap-0">

        {/* LEFT PHONE */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -18 }}
          animate={{ opacity: 1, x: 0, rotate: -18 }}
          transition={{ delay: 0.55, duration: 0.7, ease: 'easeOut' }}
          className="mb-6 lg:mb-10 -mr-8 lg:-mr-4"
          style={{
            filter: 'drop-shadow(-8px 24px 40px rgba(0,0,0,0.3))',
            zIndex: 1,
          }}
        >
          <PhoneMockup size={isMobile ? 'xs' : 'sm'} scrollClass="phone-scroll-slow">
            <Image
              src="/screenshots/baloldalitelefon.webp"
              alt="Ügyfél weboldal 1"
              width={390}
              height={2000}
              className="w-full h-auto"
            />
          </PhoneMockup>
        </motion.div>

        {/* CENTER PHONE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          style={{
            filter: 'drop-shadow(0 32px 60px rgba(0,207,255,0.25))',
            zIndex: 10,
          }}
        >
          {/* Badge */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-xl border border-gray-100 px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap z-20"
            aria-hidden="true"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-display font-semibold text-dark">Ügyfél oldala</span>
          </motion.div>

          {/* Mobile: md size */}
          <div className="lg:hidden">
            <PhoneMockup size="md" scrollClass="phone-scroll">
              <Image src="/screenshots/ugyfel1.webp" alt="Ügyfél weboldal" width={390} height={2000} className="w-full h-auto" priority />
            </PhoneMockup>
          </div>

          {/* Desktop: lg size */}
          <div className="hidden lg:block">
            <PhoneMockup size="lg" scrollClass="phone-scroll">
              <Image src="/screenshots/ugyfel1.webp" alt="Ügyfél weboldal" width={390} height={2000} className="w-full h-auto" priority />
            </PhoneMockup>
          </div>
        </motion.div>

        {/* RIGHT PHONE */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 18 }}
          animate={{ opacity: 1, x: 0, rotate: 18 }}
          transition={{ delay: 0.55, duration: 0.7, ease: 'easeOut' }}
          className="mb-6 lg:mb-10 -ml-8 lg:-ml-4"
          style={{
            filter: 'drop-shadow(8px 24px 40px rgba(0,0,0,0.3))',
            zIndex: 1,
          }}
        >
          <PhoneMockup size={isMobile ? 'xs' : 'sm'} scrollClass="phone-scroll-fast">
            <Image
              src="/screenshots/cruisershop-mockup.webp"
              alt="Cruiser Shop weboldal"
              width={390}
              height={2000}
              className="w-full h-auto"
            />
          </PhoneMockup>
        </motion.div>

      </div>
    </motion.div>
  )
}
