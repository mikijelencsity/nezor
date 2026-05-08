'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { references } from '@/data/references'
import { cn } from '@/lib/utils'
import { Reference } from '@/types'

const tabs = [
  { key: 'osszes',   label: 'Összes',     count: references.length },
  { key: 'weboldal', label: 'Weboldalak', count: references.filter(r => r.category === 'weboldal').length },
  { key: 'webshop',  label: 'Webshopok',  count: references.filter(r => r.category === 'webshop').length },
]

function ReferenceCard({ ref, index }: { ref: Reference; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 border border-gray-100"
    >
      {/* Gradiens sáv */}
      <div className={cn(
        'relative h-48 flex items-center justify-center bg-gradient-to-br',
        ref.gradient ?? 'from-gray-100 to-gray-50'
      )}>
        {/* Logó konténer: sötétebb szürke alap hogy a fehér logók is látszódjanak */}
        <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm px-6 py-4 flex items-center justify-center" style={{ minWidth: 160, minHeight: 90 }}>
          {ref.imageUrl ? (
            <img
              src={ref.imageUrl}
              alt={`${ref.name} logó`}
              className="max-h-14 max-w-[150px] w-auto h-auto object-contain"
              style={{ display: 'block' }}
            />
          ) : (
            <span className="text-2xl font-display font-bold" style={{ color: '#1A1A2E' }}>
              {ref.name.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
            </span>
          )}
        </div>

        {/* Kategória badge */}
        <span className={cn(
          'absolute top-3 right-3 text-xs font-display font-semibold px-2.5 py-1 rounded-full',
          ref.category === 'webshop'
            ? 'bg-orange-100 text-orange-600'
            : 'bg-cyan-light text-cyan'
        )}>
          {ref.category === 'webshop' ? 'Webshop' : 'Weboldal'}
        </span>
      </div>

      {/* Tartalom */}
      <div className="p-5 border-t border-gray-100">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg leading-tight" style={{ color: '#1A1A2E' }}>{ref.name}</h3>
          {ref.url !== '#' && (
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ref.name} weboldal megnyitása`}
              className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted hover:bg-cyan hover:text-white transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <p className="text-sm" style={{ color: '#6B7280' }}>{ref.description}</p>
      </div>
    </motion.article>
  )
}

export function ReferenciakClient() {
  const [activeTab, setActiveTab] = useState('osszes')

  const filtered = activeTab === 'osszes'
    ? references
    : references.filter(r => r.category === activeTab)

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Fejléc */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { value: '9+',   label: 'Elégedett ügyfél' },
            { value: '7',    label: 'Weboldal projekt'  },
            { value: '2',    label: 'Webshop projekt'   },
            { value: '100%', label: 'Elégedettség'      },
          ].map(stat => (
            <div key={stat.label} className="text-center px-6 py-4 bg-secondary rounded-2xl min-w-[110px]">
              <div className="text-2xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filter tabok */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-secondary rounded-2xl p-1.5 gap-1">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-all duration-200',
                  activeTab === tab.key
                    ? 'bg-white text-dark shadow-sm'
                    : 'text-muted hover:text-dark'
                )}
              >
                {tab.label}
                <span className={cn(
                  'ml-2 text-xs px-1.5 py-0.5 rounded-full',
                  activeTab === tab.key
                    ? 'bg-cyan text-white'
                    : 'bg-gray-200 text-muted'
                )}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Kártyák rács */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((ref, i) => (
              <ReferenceCard key={ref.id} ref={ref} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA szekció */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl bg-dark text-white p-10 md:p-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Te lehetsz a következő{' '}
            <span className="text-gradient">sikertörténet</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Vedd fel velünk a kapcsolatot — az első konzultáció ingyenes és kötelezettség nélküli.
          </p>
          <Button href="/kapcsolat" size="lg">
            Ajánlatot kérek <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

      </div>
    </div>
  )
}
