import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-[1.0] mb-8">
          Ne hagyd, hogy a
          <br />
          konkurensed vigye el
          <br />
          <span className="text-gradient">az ügyfeleket.</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl">
          30 perces ingyenes átvizsgálás. Megmutatjuk mi megy rosszul és hogyan lehetne több ügyfeled. Kötelezettség nélkül.
        </p>

        <Button href="/kapcsolat" size="lg" className="glow-pulse px-10 py-5 text-xl mb-6">
          Ingyenes weboldal audit kérése
          <ArrowRight className="ml-3 w-6 h-6" />
        </Button>

        <p className="flex items-center gap-2 text-gray-500 text-sm">
          <Shield className="w-4 h-4 text-cyan flex-shrink-0" />
          Visszahívunk 24 órán belül · Pénzvisszatérítési garancia
        </p>
      </div>
    </section>
  )
}
