'use client'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export function ResponseTimeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="relative mt-8 bg-white/5 border border-white/10 rounded-2xl p-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
          <Clock className="w-5 h-5 text-green-400" />
        </div>
        <div>
          <div className="text-xs text-gray-400">Átlagos válaszidő</div>
          <div className="text-white font-display font-bold">~2 óra</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400 font-semibold">Online</span>
        </div>
      </div>
    </motion.div>
  )
}
