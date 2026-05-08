'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((f, i) => {
        const Icon = f.icon
        return (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-cyan/30 hover:shadow-card-hover transition-all"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/20 to-blue-400/20 flex items-center justify-center group-hover:from-cyan/30 group-hover:to-blue-400/30 transition-all">
              <Icon className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <h3 className="font-display font-bold text-dark text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{f.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
