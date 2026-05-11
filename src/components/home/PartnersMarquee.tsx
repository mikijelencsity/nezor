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
    <section className="py-14 bg-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-display font-semibold text-gray-500 uppercase tracking-widest mb-8"
        >
          Megbíztak bennünk
        </motion.p>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center p-5 bg-dark hover:bg-white/5 transition-colors group"
              title={p.name}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-8 w-auto object-contain transition-all duration-300 brightness-0 invert opacity-40 group-hover:opacity-90"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
