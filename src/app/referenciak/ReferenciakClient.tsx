'use client'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { references } from '@/data/references'
import { cn } from '@/lib/utils'
import { Reference } from '@/types'

function ReferenceCard({ ref, index }: { ref: Reference; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 28, delay: index * 0.06 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-shadow duration-300"
    >
      {/* Logo terület */}
      <div className={cn(
        'relative h-52 flex items-center justify-center bg-gradient-to-br overflow-hidden',
        ref.gradient ?? 'from-gray-100 to-gray-50'
      )}>
        {/* Logo */}
        {ref.imageUrl ? (
          <img
            src={ref.imageUrl}
            alt={`${ref.name} logó`}
            className="max-h-20 max-w-[60%] w-auto h-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-95"
            style={{ filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.18))' }}
          />
        ) : (
          <span className="text-3xl font-display font-bold text-dark/40 relative z-10">
            {ref.name.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <a
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${ref.name} weboldal megnyitása`}
            className="flex items-center gap-2 bg-white text-dark font-display font-bold text-sm px-5 py-2.5 rounded-full hover:bg-cyan hover:text-white transition-colors"
          >
            Megtekintés <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Tartalom */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display font-bold text-dark text-base leading-tight">{ref.name}</h3>
          <span className={cn(
            'text-[10px] font-display font-bold px-2 py-0.5 rounded-full flex-shrink-0',
            ref.category === 'webshop'
              ? 'bg-orange-100 text-orange-600'
              : 'bg-cyan-light text-cyan'
          )}>
            {ref.category === 'webshop' ? 'Webshop' : 'Weboldal'}
          </span>
        </div>
        <p className="text-xs text-muted mt-1">{ref.description}</p>
      </div>
    </motion.article>
  )
}

export function ReferenciakClient() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Fejléc */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          <SectionHeading
            label="Referenciák"
            title="Büszke vagyunk az ügyfeleinkre"
            description="Ezeknek a vállalkozásoknak segítettünk erősebb online jelenlétet felépíteni."
          />
        </motion.div>

        {/* Statisztikák */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {[
            { value: '9+',   label: 'Elégedett ügyfél' },
            { value: '7',    label: 'Weboldal projekt'  },
            { value: '2',    label: 'Webshop projekt'   },
            { value: '100%', label: 'Elégedettség'      },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25, delay: 0.15 + i * 0.07 }}
              className="text-center px-6 py-4 bg-secondary rounded-2xl min-w-[110px]"
            >
              <div className="text-2xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Kártyák rács */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref, i) => (
            <ReferenceCard key={ref.id} ref={ref} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="mt-20 rounded-3xl bg-dark text-white p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Készen állsz az{' '}
              <span className="text-gradient">online jelenlétre?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Vedd fel velünk a kapcsolatot — az első konzultáció ingyenes és kötelezettség nélküli.
            </p>
            <Button href="/kapcsolat" size="lg">
              Ajánlatot kérek <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
