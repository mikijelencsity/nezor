import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const pains = [
  'Nem találnak meg Google-ben — a konkurensed igen',
  'Weboldalad van, de senki nem kér ajánlatot',
  'Hirdetsz Facebookon, de nincs mérhető eredmény',
  'Minden ügyfeled ajánlásból jön — kiszámíthatatlan',
]

export function PainSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan mb-3">
          Ismerős valamelyik?
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-black text-dark leading-tight mb-10">
          Így veszíted el az ügyfeleket minden nap.
        </h2>

        <div className="flex flex-col gap-3 mb-10">
          {pains.map((pain) => (
            <div
              key={pain}
              className="flex items-center gap-4 rounded-lg px-5 py-4 border-l-4 border-lime"
              style={{ background: '#f8fff0' }}
            >
              <span className="w-7 h-7 rounded-full bg-lime text-dark text-sm font-black flex items-center justify-center flex-shrink-0">
                ✗
              </span>
              <p className="text-base font-bold text-dark">{pain}</p>
            </div>
          ))}
        </div>

        <Button href="/kapcsolat" size="lg" className="bg-lime text-dark font-black hover:bg-lime/90 border-0 shadow-none">
          Nézd meg ingyen mi a helyzet
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}
