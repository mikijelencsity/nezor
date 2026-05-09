'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Users, TrendingUp } from 'lucide-react'

export function TargetingMap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="relative bg-gradient-to-br from-blue-950 to-indigo-950 rounded-3xl overflow-hidden p-8 min-h-[280px] flex items-center justify-center">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Dots representing Hungary roughly */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/30"
            style={{ left: `${15 + (i % 8) * 9}%`, top: `${20 + Math.floor(i / 8) * 15}%` }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.03 }}
          />
        ))}
      </div>

      {/* Center: Bács-Kiskun targeting */}
      <div className="relative flex flex-col items-center">
        {/* Expanding rings */}
        {[80, 130, 180].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-cyan/20"
            style={{ width: size, height: size }}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.2, ease: 'easeOut' }}
          />
        ))}

        {/* Center pin */}
        <motion.div
          initial={{ scale: 0, y: -10 }}
          animate={inView ? { scale: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center gap-2"
        >
          <div className="w-12 h-12 bg-cyan rounded-full flex items-center justify-center shadow-lg shadow-cyan/30">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-1.5 text-center">
            <div className="text-white font-display font-bold text-xs">Bács-Kiskun megye</div>
            <div className="text-cyan text-[10px]">Elsődleges célterület</div>
          </div>
        </motion.div>

        {/* Floating audience chips */}
        {[
          { label: '125.000 ember', icon: Users, pos: '-top-12 -left-24', delay: 0.7 },
          { label: 'Egész Magyarország', icon: TrendingUp, pos: '-top-12 -right-28', delay: 0.85 },
          { label: '25-55 éves', icon: Users, pos: '-bottom-12 left-0', delay: 1.0 },
        ].map(({ label, icon: Icon, pos, delay }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 350, damping: 25, delay }}
            className={`absolute ${pos} bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1 flex items-center gap-1.5 whitespace-nowrap`}
          >
            <Icon className="w-3 h-3 text-cyan" />
            <span className="text-white text-[9px] font-display font-semibold">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
