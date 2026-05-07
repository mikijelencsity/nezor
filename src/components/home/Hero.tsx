import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Bács-Kiskun megye #1 ügynöksége',
  'Ingyenes konzultáció',
  '24 órán belüli válasz',
]

export function Hero() {
  return (
    <section className="gradient-hero py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block bg-cyan-light text-cyan font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            Digitális ügynökség — Bács-Kiskun megye
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark leading-tight mb-6">
            Professzionális weboldal.{' '}
            <span className="text-gradient">Több ügyfél.</span>{' '}
            Gyorsabb növekedés.
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed">
            Weboldalakat, webshopokat és Facebook hirdetéseket készítünk, amelyek valódi eredményeket hoznak — Bács-Kiskun megyétől az egész országig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button href="/csomagok" size="lg">
              Csomagok megtekintése <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/kapcsolat" variant="outline" size="lg">
              Ingyenes konzultáció
            </Button>
          </div>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {highlights.map((text) => (
              <li key={text} className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
