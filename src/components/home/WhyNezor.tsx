'use client'
import { motion } from 'framer-motion'
import { Zap, MapPin, Wallet, Headphones } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const reasons = [
  { icon: Zap, title: 'Gyors átfutás', description: 'Alap weboldalak 1-2 héten belül elkészülnek. Nem váratsz hónapokat.' },
  { icon: MapPin, title: 'Helyi ismeret', description: 'Ismerjük a Bács-Kiskun megyei piacot és az itteni ügyfelek elvárásait.' },
  { icon: Wallet, title: 'Rugalmas árazás', description: 'Egyszeri díj vagy havidíjas csomag — te választod, mi alkalmazkodunk.' },
  { icon: Headphones, title: 'Folyamatos support', description: '24 órán belüli válasz, segítünk minden kérdésedben és módosításban.' },
]

export function WhyNezor() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          <SectionHeading label="Miért a NEZOR?" title="Amivel mások nem tudnak versenyezni" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-gray-50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan/20 to-blue-400/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-dark mb-2">{reason.title}</h3>
                <p className="text-sm text-muted">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
