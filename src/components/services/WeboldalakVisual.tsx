'use client'
import { motion } from 'framer-motion'
import { Zap, Search, Smartphone } from 'lucide-react'
import { LaptopMockup } from '@/components/ui/LaptopMockup'

const badges = [
  { icon: Zap,        label: '98/100 Sebesség',   color: 'text-green-600 bg-green-50 border-green-100',  delay: 0.8, position: 'top-2 -right-4' },
  { icon: Search,     label: 'SEO Optimalizált',  color: 'text-blue-600 bg-blue-50 border-blue-100',    delay: 1.0, position: 'top-1/3 -left-6' },
  { icon: Smartphone, label: '100% Mobilbarát',   color: 'text-cyan-600 bg-cyan-50 border-cyan-200',    delay: 1.2, position: 'bottom-8 -right-6' },
]

export function WeboldalakVisual() {
  return (
    <div className="relative mt-8 lg:mt-0">
      {/* Glow */}
      <div className="absolute -inset-8 bg-cyan/8 rounded-3xl blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
      >
        <LaptopMockup>
          <img
            src="/screenshots/weboldalak.png"
            alt="Weboldal példa"
            className="w-full h-full object-cover object-top"
          />
        </LaptopMockup>

        {/* Floating badges */}
        {badges.map(({ icon: Icon, label, color, delay, position }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay }}
            className={`hidden sm:flex absolute ${position} bg-white rounded-xl shadow-lg border px-3 py-2 items-center gap-2 whitespace-nowrap z-20 ${color.split(' ').slice(1).join(' ')}`}
          >
            <Icon className={`w-3.5 h-3.5 ${color.split(' ')[0]}`} />
            <span className={`text-xs font-display font-bold ${color.split(' ')[0]}`}>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
