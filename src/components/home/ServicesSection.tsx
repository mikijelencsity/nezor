'use client'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { Monitor, ShoppingCart, TrendingUp, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'

const icons = { Monitor, ShoppingCart, TrendingUp }

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 28, delay: i * 0.1 },
  }),
}

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Szolgáltatások"
            title="Minden amire szükséged van az online sikerhez"
            description="Komplex digitális megoldásokat kínálunk kis- és középvállalkozásoknak."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons]
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card rounded-2xl p-8 group cursor-default shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan to-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 bg-cyan rounded-full flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-cyan font-semibold text-sm group-hover:gap-2 transition-all"
                >
                  Részletek
                  <span className="sr-only"> — {service.title}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
