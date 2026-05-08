'use client'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  { target: 9, suffix: '+', label: 'Elégedett ügyfél' },
  { target: 15, suffix: '+', label: 'Elkészült projekt' },
  { target: 100, suffix: '%', label: 'Elégedettségi arány' },
  { target: 24, suffix: 'h', label: 'Átlagos válaszidő' },
]

export function StatsSection() {
  return (
    <section className="py-12 bg-dark" aria-label="Statisztikák">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 350, damping: 25, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
