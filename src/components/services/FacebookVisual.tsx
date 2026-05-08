'use client'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Users, MousePointer, TrendingUp } from 'lucide-react'
import { PhoneMockup } from '@/components/ui/PhoneMockup'

function FacebookFeedScreen() {
  return (
    <div className="w-full bg-gray-100" style={{ height: '180%' }}>
      {/* FB Nav */}
      <div className="bg-blue-600 px-3 py-2 flex items-center justify-between">
        <div className="text-white text-xs font-bold">facebook</div>
        <div className="flex gap-2">
          {[14,14,14].map((s,i) => <div key={i} className="w-3.5 h-3.5 bg-blue-400 rounded" />)}
        </div>
      </div>
      {/* Story row */}
      <div className="bg-white px-2 py-2 flex gap-2 border-b border-gray-200">
        {['bg-blue-400','bg-pink-400','bg-green-400','bg-purple-400'].map((c,i) => (
          <div key={i} className="flex-shrink-0">
            <div className={`w-10 h-14 ${c} rounded-xl opacity-80`} />
          </div>
        ))}
      </div>
      {/* Ad post */}
      <div className="bg-white mt-2 border border-gray-200">
        <div className="px-3 py-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
          <div>
            <div className="text-[9px] font-bold text-gray-800">NEZOR Weboldalkészítés</div>
            <div className="text-[8px] text-gray-400">Szponzorált · 🌐</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-cyan-100 to-blue-50 mx-3 rounded-xl p-3 mb-2">
          <div className="w-3/4 h-2.5 bg-blue-600 rounded-full mb-1.5" />
          <div className="w-1/2 h-2 bg-blue-400 rounded-full mb-3" />
          <div className="text-[9px] font-bold text-cyan-700 bg-white rounded-lg px-2 py-1 inline-block">Ingyenes ajánlat →</div>
        </div>
        <div className="px-3 pb-2 flex items-center justify-between border-t border-gray-100 pt-2">
          {[Heart, MessageCircle, Share2].map((Icon, i) => (
            <div key={i} className="flex items-center gap-1">
              <Icon className="w-3 h-3 text-gray-400" />
              <span className="text-[9px] text-gray-400">{['124','38','12'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Regular post */}
      <div className="bg-white mt-2 p-3 border border-gray-200">
        <div className="flex gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0" />
          <div className="flex-1">
            <div className="w-1/2 h-1.5 bg-gray-700 rounded-full mb-1" />
            <div className="w-1/3 h-1.5 bg-gray-300 rounded-full" />
          </div>
        </div>
        {[70,85,60].map((w,i) => (
          <div key={i} className="h-1.5 bg-gray-200 rounded-full mb-1" style={{width:`${w}%`}} />
        ))}
      </div>
    </div>
  )
}

export function FacebookVisual() {
  return (
    <div className="relative hidden lg:flex items-center justify-center">
      <div className="absolute -inset-8 bg-blue-300/10 rounded-3xl blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
        style={{ filter: 'drop-shadow(0 32px 48px rgba(0,0,0,0.25))' }}
      >
        <PhoneMockup size="lg" scrollClass="phone-scroll-slow">
          <FacebookFeedScreen />
        </PhoneMockup>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute -right-10 top-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-3 w-44 z-20"
        >
          <div className="text-[10px] font-display font-bold text-dark mb-2.5">Kampány eredmények</div>
          <div className="space-y-2">
            {[
              { icon: Users,         label: 'Elérés',      value: '12.400',  color: 'text-blue-500' },
              { icon: MousePointer,  label: 'Kattintás',   value: '847',     color: 'text-cyan-500' },
              { icon: TrendingUp,    label: 'Érdeklődő',   value: '+42',     color: 'text-green-500' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Icon className={`w-3 h-3 ${color}`} />
                  <span className="text-[9px] text-muted">{label}</span>
                </div>
                <span className={`text-[10px] font-display font-bold ${color}`}>{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTR badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="absolute -left-8 bottom-24 bg-white rounded-2xl shadow-lg border border-gray-100 px-3 py-2 z-20"
        >
          <div className="text-[9px] text-muted mb-0.5">Átkattintási arány</div>
          <div className="text-lg font-display font-bold text-blue-600">3.2% <span className="text-[10px] text-green-500">↑</span></div>
        </motion.div>

        {/* Top badge */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-100 px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap z-20"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-display font-semibold text-dark">Kampány fut</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
