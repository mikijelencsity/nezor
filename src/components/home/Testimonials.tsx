'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const testimonials = [
  {
    name: 'Kovács Péter',
    company: 'ZT Épületgépészet',
    text: 'Teljesen elégedett vagyok a NEZOR munkájával. Az oldalunk elkészült határidőre, és azóta folyamatosan érkeznek az online érdeklődők.',
    initials: 'KP',
    bg: 'bg-cyan',
  },
  {
    name: 'Nagy Katalin',
    company: 'Neked Sütöm',
    text: 'Profik, gyorsak és tökéletesen értik az igényeimet. A webshopom forgalma az első hónapban megduplázódott!',
    initials: 'NK',
    bg: 'bg-blue-500',
  },
  {
    name: 'Molnár Gábor',
    company: 'Hellinger Kft.',
    text: 'A Facebook hirdetéseink most valóban működnek. Hetente kapunk új érdeklődőket — megérte minden forint.',
    initials: 'MG',
    bg: 'bg-cyan-dark',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Vélemények"
          title="Mit mondanak ügyfeleink?"
          description="Valódi visszajelzések valódi vállalkozóktól."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 280, damping: 26, delay: i * 0.12 }}
              whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-gray-50"
            >
              <div className="flex gap-1 mb-4" aria-label="5 csillagos értékelés">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0`} aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-dark text-sm">{t.name}</div>
                  <div className="text-xs text-muted">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
