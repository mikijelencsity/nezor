'use client'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Package } from '@/types'
import { cn } from '@/lib/utils'

export function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative bg-white rounded-3xl flex flex-col overflow-hidden transition-all duration-300',
        pkg.highlighted
          ? 'border-2 border-cyan shadow-card-hover scale-[1.02] ring-pulse'
          : 'border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1'
      )}
    >
      {/* Top accent bar */}
      <div className={cn(
        'h-1.5 w-full',
        pkg.highlighted
          ? 'bg-gradient-to-r from-cyan to-blue-400'
          : 'bg-gray-100'
      )} />

      <div className="p-8 flex flex-col flex-grow">
        {pkg.highlighted && (
          <div className="flex items-center gap-1.5 mb-4">
            <span className="inline-flex items-center gap-1 bg-cyan text-white text-xs font-display font-bold px-3 py-1 rounded-full">
              <Star className="w-3 h-3" /> Legnépszerűbb
            </span>
          </div>
        )}

        <h3 className="text-2xl font-display font-bold text-dark mb-2">{pkg.name}</h3>
        <p className="text-muted text-sm mb-6">{pkg.description}</p>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-secondary rounded-2xl p-4 text-center">
            <div className="text-xs text-muted mb-1 font-medium">Egyszeri díj</div>
            <div className="font-display font-bold text-dark text-sm">{pkg.oneTimePrice}</div>
          </div>
          <div className={cn('rounded-2xl p-4 text-center', pkg.highlighted ? 'bg-cyan-light' : 'bg-secondary')}>
            <div className="text-xs text-muted mb-1 font-medium">Havidíj</div>
            <div className="font-display font-bold text-dark text-sm">{pkg.monthlyPrice}</div>
            {pkg.monthlyUpdates && (
              <div className="text-xs text-cyan mt-0.5 font-semibold">{pkg.monthlyUpdates}× frissítés/hó</div>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2.5 mb-8 flex-grow">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
              <div className={cn('w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                pkg.highlighted ? 'bg-cyan' : 'bg-secondary'
              )}>
                <Check className={cn('w-2.5 h-2.5', pkg.highlighted ? 'text-white' : 'text-cyan')} />
              </div>
              {f}
            </li>
          ))}
        </ul>

        <Button
          href="/kapcsolat"
          variant={pkg.highlighted ? 'primary' : 'outline'}
          className="w-full"
        >
          Ajánlatot kérek<span className="sr-only"> — {pkg.name}</span>
        </Button>
      </div>
    </motion.div>
  )
}
