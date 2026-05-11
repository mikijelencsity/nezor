'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const partners = [
  { name: 'Neked Sütöm',            logo: '/logos/nekedsutom.png'             },
  { name: 'Hellinger Kft.',          logo: '/logos/hellinger.png'              },
  { name: 'Cruiser Shop',            logo: '/logos/cruisershop.png'            },
  { name: 'InShape-Diet',            logo: '/logos/inshapediet.png'            },
  { name: 'ZT Épületgépészet',       logo: '/logos/ztepuletgepeszet.png'       },
  { name: 'Estur Kft.',              logo: '/logos/logo.png'                   },
  { name: 'Korona Gomba',            logo: '/logos/koronagomba.png'            },
  { name: 'DoverSolution',           logo: '/logos/doversolution.png'          },
  { name: 'Kisállatkereskedés Baja', logo: '/logos/kisallatkereskedesbaja.jpg' },
]

export function PartnersMarquee() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="py-14 bg-white border-y border-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-display font-semibold text-muted uppercase tracking-widest mb-8"
        >
          Megbíztak bennünk
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-center justify-center"
              title={p.name}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-8 w-auto object-contain transition-all duration-300"
                style={{
                  filter: 'grayscale(100%) opacity(0.45)',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.45)')}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
