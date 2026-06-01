'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const packages = [
  {
    name: 'Alap',
    desc: 'Kis vállalkozásoknak',
    features: ['1-5 aloldal', 'Mobilra optimalizált', 'SEO beállítások', 'Kapcsolati form'],
    tag: null,
    highlighted: false,
  },
  {
    name: 'Pro',
    desc: 'Növekvő vállalkozásoknak',
    features: ['6-15 aloldal', 'Teljes SEO', 'Google Analytics', 'Blog modul', 'Egyedi design'],
    tag: 'Legnépszerűbb',
    highlighted: true,
  },
  {
    name: 'Prémium',
    desc: 'Teljes digitális jelenlét',
    features: ['Korlátlan aloldal', 'Helyi SEO', 'Facebook Pixel', 'Egyedi animációk', 'Havi riport'],
    tag: null,
    highlighted: false,
  },
]

export function PackagesTeaser() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Csomagok</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Befektetés, nem kiadás.</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">Egy új ügyfél általában megtéríti a weboldal árát. A többi tiszta profit.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.1 }}
              className={cn(
                'relative rounded-3xl p-6 flex flex-col',
                pkg.highlighted
                  ? 'bg-dark text-white shadow-2xl scale-[1.03] border border-cyan/20'
                  : 'bg-secondary border border-gray-100'
              )}
            >
              {pkg.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-cyan text-white text-xs font-display font-bold px-3 py-1 rounded-full shadow-md">
                    <Zap className="w-3 h-3" /> {pkg.tag}
                  </span>
                </div>
              )}

              {/* Top accent */}
              <div className={cn('h-1 w-full rounded-full mb-5', pkg.highlighted ? 'bg-gradient-to-r from-cyan to-blue-400' : 'bg-gray-200')} />

              <h3 className={cn('text-xl font-display font-bold mb-1', pkg.highlighted ? 'text-white' : 'text-dark')}>{pkg.name}</h3>
              <p className={cn('text-sm mb-6', pkg.highlighted ? 'text-gray-400' : 'text-muted')}>{pkg.desc}</p>

              <ul className="space-y-2.5 flex-grow mb-6">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <div className={cn('w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0', pkg.highlighted ? 'bg-cyan/20' : 'bg-white')}>
                      <Check className={cn('w-2.5 h-2.5', pkg.highlighted ? 'text-cyan' : 'text-cyan')} />
                    </div>
                    <span className={pkg.highlighted ? 'text-gray-300' : 'text-dark'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/csomagok"
                className={cn(
                  'flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-display font-bold transition-colors',
                  pkg.highlighted
                    ? 'bg-cyan text-white hover:bg-cyan-dark'
                    : 'bg-white text-dark hover:bg-cyan hover:text-white border border-gray-200'
                )}
              >
                Ajánlatot kérek<span className="sr-only"> — {pkg.name} csomag</span>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-muted text-sm mb-4">Webshop csomagok is elérhetők · Egyedi igény? Kérj egyedi ajánlatot!</p>
          <Button href="/csomagok" variant="outline">Összes csomag és ár megtekintése <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </motion.div>
      </div>
    </section>
  )
}
