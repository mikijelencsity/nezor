import { cn } from '@/lib/utils'

const partners = [
  { name: 'Neked Sütöm',            logo: '/logos/nekedsutom.png'            },
  { name: 'Hellinger Kft.',          logo: '/logos/hellinger.png'             },
  { name: 'Cruiser Shop',            logo: '/logos/cruisershop.png'           },
  { name: 'InShape-Diet',            logo: '/logos/inshapediet.png'           },
  { name: 'ZT Épületgépészet',       logo: '/logos/ztepuletgepeszet.png'      },
  { name: 'Estur Kft.',              logo: '/logos/logo.png'                  },
  { name: 'Korona Gomba',            logo: '/logos/koronagomba.png'           },
  { name: 'DoverSolution',           logo: '/logos/doversolution.png'         },
  { name: 'Kisállatkereskedés Baja', logo: '/logos/kisallatkereskedesbaja.jpg'},
]

interface PartnerCardProps {
  name: string
  logo: string | null
}

function PartnerCard({ name, logo }: PartnerCardProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-card border border-gray-100 flex-shrink-0 hover:shadow-card-hover hover:border-cyan/30 transition-all cursor-default select-none">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50 overflow-hidden">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logó`}
            className="w-full h-full object-contain p-1"
          />
        ) : (
          <span className="text-xs font-display font-bold text-muted">
            {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </span>
        )}
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
