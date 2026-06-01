import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HeroPhones } from '@/components/home/HeroPhones'

const trustSignals = [
  '24h válasz',
  'Garanciával',
  'Bács-Kiskun + egész ország',
]

const clients = ['Neked Sütöm', 'Estur Épker', 'Hellinger Kft.']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14 lg:py-16 flex items-center min-h-0">
      {/* Background */}
      <div className="dot-grid-bg absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,207,255,0.55) 1.8px, transparent 1.8px)', backgroundSize: '28px 28px' }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-cyan-light/20 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div>
            <span className="animate-fade-up inline-flex items-center gap-2 bg-cyan-light text-cyan font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" aria-hidden="true" />
              Weboldal · Webshop · Facebook hirdetés
            </span>

            <h1 className="animate-fade-up-delay-1 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-4">
              Minden hónapban{' '}
              <span className="text-gradient">több érdeklődőt</span>{' '}
              hozunk a vállalkozásodnak.
            </h1>

            <p className="animate-fade-up-delay-2 text-base md:text-lg text-muted mb-6 leading-relaxed">
              Weboldal, webshop, Facebook hirdetés — egy céllal: hogy a legjobb ügyfelek téged keressenek meg, ne a konkurensedet.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3 mb-6">
              <Button href="/csomagok" size="lg" className="glow-pulse w-full sm:w-auto">
                Mutasd hogyan működik
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/kapcsolat" variant="outline" size="lg" className="w-full sm:w-auto">
                Ingyen megnézem a vállalkozásom
              </Button>
            </div>

            <div className="animate-fade-up-delay-4 space-y-3">
              <p className="text-xs text-muted uppercase tracking-widest">Ügyfeleink</p>
              <p className="text-sm font-display font-semibold text-dark">
                {clients.join(' · ')}
              </p>
              <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2">
                {trustSignals.map((text) => (
                  <li key={text} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <HeroPhones />

        </div>
      </div>
    </section>
  )
}
