'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const partners = [
  { name: 'Neked Sütöm',            logo: '/logos/nekedsutom.webp',             imgClass: '' },
  { name: 'Hellinger Kft.',          logo: '/logos/hellinger.webp',              imgClass: '' },
  { name: 'Cruiser Shop',            logo: '/logos/cruisershop.webp',            imgClass: '' },
  { name: 'InShape-Diet',            logo: '/logos/inshapediet.webp',            imgClass: '' },
  { name: 'ZT Épületgépészet',       logo: '/logos/ztepuletgepeszet.png',        imgClass: '-rotate-90' },
  { name: 'Estur Kft.',              logo: '/logos/estur.webp',                  imgClass: '' },
  { name: 'Korona Gomba',            logo: '/logos/koronagomba.webp',            imgClass: 'scale-150' },
  { name: 'DoverSolution',           logo: '/logos/doversolution.webp',          imgClass: '' },
  { name: 'Kisállatkereskedés Baja', logo: '/logos/kisallatkereskedesbaja.webp', imgClass: '' },
]

export function PartnersMarquee() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="py-14 bg-[#111113]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-display font-semibold text-gray-500 uppercase tracking-widest mb-8"
        >
          Megbíztak bennünk
        </motion.p>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center gap-2.5 p-6 bg-[#111113] hover:bg-white/5 transition-colors group"
              title={p.name}
            >
              <img
                src={p.logo}
                alt={p.name}
                width={120}
                height={48}
                loading="lazy"
                className={`h-12 w-auto max-w-[120px] object-contain transition-all duration-300 opacity-60 group-hover:opacity-100 ${p.imgClass}`}
              />
              <span className="hidden sm:block text-[10px] font-display font-medium text-gray-600 group-hover:text-gray-400 transition-colors text-center leading-tight line-clamp-1 px-1">
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
