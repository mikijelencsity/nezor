import { cn } from '@/lib/utils'

const partners = [
  { name: 'Neked Sütöm',           initials: 'NS', color: 'bg-pink-100   text-pink-600'   },
  { name: 'Hellinger Kft.',         initials: 'HK', color: 'bg-blue-100   text-blue-600'   },
  { name: 'Cruiser Shop',           initials: 'CS', color: 'bg-orange-100 text-orange-600' },
  { name: 'InShape-Diet',           initials: 'ID', color: 'bg-green-100  text-green-600'  },
  { name: 'ZT Épületgépészet',      initials: 'ZT', color: 'bg-purple-100 text-purple-600' },
  { name: 'Estur Kft.',             initials: 'EK', color: 'bg-cyan-100   text-cyan-700'   },
  { name: 'Korona Gomba',           initials: 'KG', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'DoverSolution',          initials: 'DS', color: 'bg-indigo-100 text-indigo-600' },
  { name: 'Kisállatkereskedés Baja',initials: 'KB', color: 'bg-red-100    text-red-600'    },
]

interface PartnerCardProps {
  name: string
  initials: string
  color: string
}

function PartnerCard({ name, initials, color }: PartnerCardProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-card border border-gray-100 flex-shrink-0 hover:shadow-card-hover hover:border-cyan/30 transition-all cursor-default select-none">
      {/*
       * LOGO PLACEHOLDER — cseréld le valódi logóra:
       * <img src="/logos/neked-sutom.png" alt="Neked Sütöm" className="w-10 h-10 object-contain" />
       */}
      <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm flex-shrink-0', color)}>
        {initials}
      </div>
      <span className="font-display font-semibold text-dark text-sm whitespace-nowrap">{name}</span>
    </div>
  )
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...partners, ...partners]
  return (
    <div className={cn('flex gap-5 w-max', reverse ? 'animate-marquee-reverse' : 'animate-marquee')}>
      {doubled.map((p, i) => (
        <PartnerCard key={i} {...p} />
      ))}
    </div>
  )
}

export function PartnersMarquee() {
  return (
    <section className="py-16 bg-secondary overflow-hidden" aria-label="Partnereink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">
          Partnereink
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">
          Akik már minket választottak
        </h2>
        <p className="text-muted mt-3 max-w-xl mx-auto">
          Büszkén dolgozunk együtt ezekkel a vállalkozásokkal.
        </p>
      </div>

      {/* Two-row marquee with fade edges */}
      <div
        className="marquee-container space-y-4"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        <div className="flex overflow-hidden">
          <MarqueeRow />
        </div>
        <div className="flex overflow-hidden">
          <MarqueeRow reverse />
        </div>
      </div>
    </section>
  )
}
