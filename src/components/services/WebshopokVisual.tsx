'use client'
import { motion } from 'framer-motion'
import { TrendingUp, Package } from 'lucide-react'
import Image from 'next/image'
import { PhoneMockup } from '@/components/ui/PhoneMockup'

function MiniBarChart() {
  const bars = [40, 55, 45, 70, 60, 85, 95]
  return (
    <div className="flex items-end gap-1 h-8">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.06, ease: 'easeOut' }}
          style={{ originY: 1, height: `${h}%` }}
          className="flex-1 bg-gradient-to-t from-orange-400 to-amber-300 rounded-sm"
        />
      ))}
    </div>
  )
}

export function WebshopokVisual() {
  return (
    <div className="relative flex items-center justify-center mt-8 lg:mt-0">
      <div className="absolute -inset-8 bg-orange-300/10 rounded-3xl blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
        style={{ filter: 'drop-shadow(0 32px 48px rgba(0,0,0,0.25))' }}
      >
        <PhoneMockup size="lg" scrollClass="phone-scroll">
          <Image src="/screenshots/webshop.webp" alt="Webshop screenshot" width={390} height={2000} className="w-full h-auto" />
        </PhoneMockup>

        {/* Floating: New order */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute -right-8 top-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-3 w-44 z-20"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <Package className="w-3 h-3 text-green-600" />
            </div>
            <div>
              <div className="text-[10px] font-display font-bold text-dark">Új rendelés!</div>
              <div className="text-[9px] text-muted">2 perccel ezelőtt</div>
            </div>
          </div>
          <div className="text-sm font-display font-bold text-green-600">+12.400 Ft</div>
        </motion.div>

        {/* Floating: Revenue chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-lg border border-gray-100 p-3 w-40 z-20"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-display font-bold text-dark">Heti bevétel</span>
            <TrendingUp className="w-3 h-3 text-green-500" />
          </div>
          <MiniBarChart />
          <div className="mt-1.5 text-xs font-display font-bold text-dark">+34% <span className="text-[9px] text-green-500 font-normal">vs. előző hét</span></div>
        </motion.div>

        {/* Badge */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-100 px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap z-20"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-display font-semibold text-dark">3 rendelés ma</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
