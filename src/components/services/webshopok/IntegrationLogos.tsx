'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const integrations = [
  { name: 'SimplePay',   category: 'Fizetés',    color: 'bg-blue-50   border-blue-100',  text: 'text-blue-700'   },
  { name: 'Barion',      category: 'Fizetés',    color: 'bg-purple-50 border-purple-100', text: 'text-purple-700' },
  { name: 'PayPal',      category: 'Fizetés',    color: 'bg-sky-50    border-sky-100',    text: 'text-sky-700'    },
  { name: 'GLS',         category: 'Szállítás',  color: 'bg-yellow-50 border-yellow-100', text: 'text-yellow-700' },
  { name: 'DPD',         category: 'Szállítás',  color: 'bg-red-50    border-red-100',    text: 'text-red-700'    },
  { name: 'Magyar Posta',category: 'Szállítás',  color: 'bg-orange-50 border-orange-100', text: 'text-orange-700' },
  { name: 'Számlázz.hu', category: 'Számlázás',  color: 'bg-green-50  border-green-100',  text: 'text-green-700'  },
  { name: 'Billingo',    category: 'Számlázás',  color: 'bg-teal-50   border-teal-100',   text: 'text-teal-700'   },
  { name: 'Utánvét',     category: 'Fizetés',    color: 'bg-cyan-50   border-cyan-100',   text: 'text-cyan-700'   },
]

export function IntegrationLogos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-9 gap-3">
        {integrations.map(({ name, category, color, text }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 350, damping: 25, delay: i * 0.06 }}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border ${color} hover:shadow-sm transition-shadow`}
          >
            <div className={`w-8 h-8 rounded-lg ${color} border ${color.split(' ')[1]} flex items-center justify-center`}>
              <span className={`text-[8px] font-display font-bold ${text}`}>{name.slice(0,2).toUpperCase()}</span>
            </div>
            <span className={`text-[9px] font-display font-bold ${text} text-center leading-tight`}>{name}</span>
            <span className="text-[7px] text-muted text-center">{category}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
