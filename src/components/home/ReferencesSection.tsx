import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const refs = [
  {
    name: 'Neked Sütöm',
    category: 'Lángosozó · Baja',
    quote: 'Végre az interneten is megtalálnak. A NEZOR mindent megcsinált, mi csak a sütésre koncentráltunk.',
    url: 'nekedsutom.hu',
    href: 'https://nekedsutom.hu',
  },
  {
    name: 'Estur Épker Kft.',
    category: 'Generálkivitelező · Baja',
    quote: 'Végre van egy oldalunk, ami tényleg képvisel minket. Már online is megtalálnak az ügyfelek.',
    url: 'estur.hu',
    href: 'https://estur.hu',
  },
  {
    name: 'Hellinger Kft.',
    category: 'Építőipar · Dél-Dunántúl',
    quote: '25 éve dolgozunk, de az online jelenlétünk nem mutatta ezt. Most már igen.',
    url: 'hellingerkft.hu',
    href: 'https://hellingerkft.hu',
  },
]

export function ReferencesSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted mb-6">
          Akiknek már segítettünk
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-dark leading-[1.0] mb-14">
          Magyar vállalkozások,
          <br />
          akik már előrébb járnak.
        </h2>

        <div className="space-y-5 mb-14">
          {refs.map((ref) => (
            <div
              key={ref.name}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8"
            >
              <p className="text-2xl md:text-3xl font-display font-bold text-dark mb-1">
                {ref.name}
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-6">
                {ref.category}
              </p>
              <blockquote className="text-xl md:text-2xl text-dark italic leading-relaxed border-l-4 border-cyan pl-6 mb-6">
                "{ref.quote}"
              </blockquote>
              <a
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-cyan hover:underline"
              >
                {ref.url}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <Button href="/kapcsolat" size="lg" className="glow-pulse px-10 py-5 text-xl">
          Kérek ingyenes auditot
          <ArrowRight className="ml-3 w-6 h-6" />
        </Button>
      </div>
    </section>
  )
}
