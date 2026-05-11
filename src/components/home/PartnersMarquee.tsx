'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const partners = [
  { name: 'Neked Sütöm',            logo: '/logos/nekedsutom.png',             size: 'lg' },
  { name: 'Hellinger Kft.',          logo: '/logos/hellinger.png',              size: 'sm' },
  { name: 'Cruiser Shop',            logo: '/logos/cruisershop.png',            size: 'md' },
  { name: 'InShape-Diet',            logo: '/logos/inshapediet.png',            size: 'sm' },
  { name: 'ZT Épületgépészet',       logo: '/logos/ztepuletgepeszet.png',       size: 'md' },
  { name: 'Estur Kft.',              logo: '/logos/logo.png',                   size: 'sm' },
  { name: 'Korona Gomba',            logo: '/logos/koronagomba.png',            size: 'md' },
  { name: 'DoverSolution',           logo: '/logos/doversolution.png',          size: 'sm' },
  { name: 'Kisállatkereskedés Baja', logo: '/logos/kisallatkereskedesbaja.jpg', size: 'lg' },
]

// Scatter config — rotation for each card
const scatter = [
  { rotate: -6 },
  { rotate:  4 },
  { rotate: -3 },
  { rotate:  5 },
  { rotate: -2 },
  { rotate:  6 },
  { rotate: -4 },
  { rotate:  3 },
  { rotate: -5 },
]

const sizeMap = {
  sm: { card: 'w-28 h-20', img: 'h-8'  },
  md: { card: 'w-32 h-24', img: 'h-10' },
  lg: { card: 'w-36 h-28', img: 'h-12' },
}

export function PartnersMarquee() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="py-16 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-display font-semibold text-muted uppercase tracking-widest mb-10"
        >
          Megbíztak bennünk
        </motion.p>

        {/* Desktop: scattered */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-4">
          {partners.map((p, i) => {
            const s = sizeMap[p.size as keyof typeof sizeMap]
            const sc = scatter[i]
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.85, rotate: sc.rotate }}
                animate={inView ? { opacity: 1, scale: 1, rotate: sc.rotate } : {}}
                transition={{ type: 'spring', stiffness: 260, damping: 22, delay: i * 0.07 }}
                whileHover={{ rotate: 0, scale: 1.08, zIndex: 10 }}
                className={`relative ${s.card} bg-white rounded-2xl shadow-card flex flex-col items-center justify-center gap-2 cursor-default flex-shrink-0`}
                style={{ transformOrigin: 'center center' }}
                title={p.name}
              >
                <img src={p.logo} alt={p.name} className={`${s.img} w-auto object-contain`} />
                <span className="text-[9px] font-display font-semibold text-muted text-center px-2 leading-tight line-clamp-1">{p.name}</span>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile: clean grid */}
        <div className="md:hidden grid grid-cols-3 gap-3">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 280, damping: 25, delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 p-3 h-20"
            >
              <img src={p.logo} alt={p.name} className="h-8 w-auto object-contain" />
              <span className="text-[8px] font-display font-semibold text-muted text-center leading-tight line-clamp-1 px-1">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
