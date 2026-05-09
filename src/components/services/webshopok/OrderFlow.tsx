'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingCart, CreditCard, Package, Truck, Star } from 'lucide-react'

const steps = [
  { icon: ShoppingCart, label: 'Böngészés',      desc: 'Termék megtalálva',    color: 'bg-cyan-100 text-cyan',         border: 'border-cyan/30'    },
  { icon: CreditCard,   label: 'Fizetés',         desc: 'SimplePay / Barion',   color: 'bg-blue-100 text-blue-600',     border: 'border-blue-200'   },
  { icon: Package,      label: 'Feldolgozás',     desc: 'Rendelés visszaigazolva', color: 'bg-purple-100 text-purple-600', border: 'border-purple-200' },
  { icon: Truck,        label: 'Kiszállítás',     desc: 'GLS / DPD / Posta',    color: 'bg-orange-100 text-orange-600', border: 'border-orange-200' },
  { icon: Star,         label: 'Megérkezett',     desc: 'Elégedett vásárló ⭐', color: 'bg-green-100 text-green-600',   border: 'border-green-200'  },
]

export function OrderFlow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref}>
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-10 left-16 right-16 h-0.5 bg-gray-200 z-0">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan to-green-400 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          />
        </div>

        {steps.map(({ icon: Icon, label, desc, color, border }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.2 + i * 0.15 }}
            className="relative z-10 flex flex-col items-center gap-3 w-32"
          >
            <div className={`w-20 h-20 rounded-2xl ${color} border-2 ${border} flex items-center justify-center shadow-sm`}>
              <Icon className="w-8 h-8" />
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-dark text-sm">{label}</div>
              <div className="text-xs text-muted mt-0.5">{desc}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden space-y-3">
        {steps.map(({ icon: Icon, label, desc, color, border }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.1 }}
            className={`flex items-center gap-4 p-4 bg-white rounded-2xl border ${border} shadow-sm`}
          >
            <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-bold text-dark text-sm">{label}</div>
              <div className="text-xs text-muted">{desc}</div>
            </div>
            <div className="ml-auto text-gray-300 font-bold">0{i + 1}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
