import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const pains = [
  'Nem találnak meg Google-ben — a konkurensed igen',
  'Weboldalad van, de nem hoz ajánlatkéréseket',
  'Hirdetsz Facebookon, de nincs mérhető eredmény',
  'Minden ügyfeled ajánlásból jön — kiszámíthatatlan',
]

export function PainSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted mb-6">
          Ismerős valamelyik?
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-dark leading-[1.0] mb-14">
          Lehet, hogy most is
          <br />
          ügyfeleket veszítesz.
        </h2>

        <div className="space-y-5 mb-14">
          {pains.map((pain) => (
            <div
              key={pain}
              className="flex items-center gap-5 bg-red-50 border-l-4 border-red-500 rounded-xl px-6 py-5"
            >
              <span className="text-red-500 font-black text-3xl leading-none flex-shrink-0">✗</span>
              <p className="text-dark font-bold text-xl md:text-2xl leading-snug">{pain}</p>
            </div>
          ))}
        </div>

        <Button href="/kapcsolat" size="lg" className="glow-pulse px-10 py-5 text-xl">
          Nézd meg ingyen mi a helyzet
          <ArrowRight className="ml-3 w-6 h-6" />
        </Button>
      </div>
    </section>
  )
}
