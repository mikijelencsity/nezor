'use client'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function PackagesTeaser() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Csomagok"
          title="Átlátható árak, rugalmas feltételek"
          description="Válaszd az egyszeri díjas vagy havidíjas modellt — mindkettőt kínáljuk."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0 }}
            className="bg-white rounded-2xl p-6 shadow-card"
          >
            <h3 className="font-display font-bold text-dark text-lg mb-3">Egyszeri díj</h3>
            <p className="text-muted text-sm mb-4">Egyszer fizetsz, az oldal örökre a tied. Nincs havidíj, nincs kötöttség.</p>
            <ul className="space-y-2">
              {['Teljes tulajdonjog', 'Nincs havidíj', 'Egyszer és kész'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted">
                  <Check className="w-4 h-4 text-cyan" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-card border-2 border-cyan"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-dark text-lg">Havidíjas</h3>
              <span className="text-xs bg-cyan text-white px-2 py-0.5 rounded-full">Népszerű</span>
            </div>
            <p className="text-muted text-sm mb-4">Alacsonyabb induló költség + havi frissítések beleértve. Ideális, ha rendszeresen változik a tartalom.</p>
            <ul className="space-y-2">
              {['Alacsony belépési költség', 'Havi frissítések', 'Folyamatos support'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted">
                  <Check className="w-4 h-4 text-cyan" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="text-center">
          <Button href="/csomagok" size="lg">Csomagok és árak megtekintése</Button>
        </div>
      </div>
    </section>
  )
}
