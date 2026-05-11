'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react'

const steps = [
  { number: '01', icon: MessageSquare, title: 'Ingyenes konzultáció', description: 'Megismerjük az igényeidet. Semmi kötelezettség.', color: 'from-cyan/20 to-blue-400/20', iconColor: 'text-cyan' },
  { number: '02', icon: Palette,       title: 'Design tervezés',      description: 'Elkészítjük a vizuális tervet, te jóváhagyod.', color: 'from-purple-400/20 to-pink-400/20', iconColor: 'text-purple-500' },
  { number: '03', icon: Code2,         title: 'Fejlesztés',           description: 'Megépítjük és teszteljük minden eszközön.', color: 'from-blue-400/20 to-indigo-400/20', iconColor: 'text-blue-500' },
  { number: '04', icon: Rocket,        title: 'Átadás & support',     description: 'Élesítünk és folyamatos supportot biztosítunk.', color: 'from-green-400/20 to-emerald-400/20', iconColor: 'text-green-500' },
]

export function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Folyamat</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Így dolgozunk együtt</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">Átlátható, gyors, eredményes — az első konzultációtól az éles weboldalig.</p>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan via-blue-400 to-green-400 origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map(({ number, icon: Icon, title, description, color, iconColor }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.1 + i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 relative border border-white shadow-sm`}>
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-dark text-white text-[10px] font-display font-bold rounded-full flex items-center justify-center">{number}</span>
                </div>
                <h3 className="font-display font-bold text-dark mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-4">
          {steps.map(({ number, icon: Icon, title, description, color, iconColor }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 bg-secondary rounded-2xl"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 relative`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-dark text-white text-[9px] font-bold rounded-full flex items-center justify-center">{number}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-dark mb-1">{title}</h3>
                <p className="text-sm text-muted">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
