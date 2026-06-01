'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Megértjük a vállalkozásod',
    description: 'Nem sablont rakunk össze. Megnézzük ki a célügyféled, mi a versenytársad, és mi az az egy dolog ami téged megkülönböztet. Erre épül minden.',
  },
  {
    number: '02',
    title: 'Weboldalad ügyfélszerzőre tervezzük',
    description: 'Nem szép oldalakat csinálunk. Olyan oldalakat, ahol a látogató azonnal megérti mit kínálsz és miért bízzon benned. Minden elem az érdeklődő → ügyfél útvonalon van.',
  },
  {
    number: '03',
    title: 'Hirdetéssel forgalmat hozunk rá',
    description: 'Egy jó weboldal önmagában kevés. Facebook hirdetéssel célzottan hozzuk azokat, akiknek most van szükségük rád — nem mindenkinek, hanem a tiednek.',
  },
]

export function HowWeWork() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">
            A folyamat
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Így hozunk ügyfeleket a vállalkozásodnak.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Nem sablont adunk el. Egy rendszert, ami működik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-display font-bold text-white/10 mb-4 leading-none">
                {step.number}
              </div>
              <div className="w-8 h-0.5 bg-cyan mb-4" />
              <h3 className="font-display font-bold text-white text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/kapcsolat" size="lg">
            Ingyenes weboldal audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
