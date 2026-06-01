import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-36">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,207,255,0.45) 1.8px, transparent 1.8px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted mb-6">
          Weboldal · Webshop · Facebook hirdetés
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-dark leading-[1.0] mb-8">
          Téged nem találnak
          <br />
          meg online.
          <br />
          <span className="text-gradient">A konkurensed igen.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted leading-relaxed mb-10 max-w-2xl">
          Weboldalat és Facebook hirdetést készítünk — hogy a legjobb ügyfelek téged hívjanak, ne a konkurensedet.
        </p>

        <Button href="/kapcsolat" size="lg" className="glow-pulse px-10 py-5 text-xl mb-10">
          Ingyenes weboldal audit kérése
          <ArrowRight className="ml-3 w-6 h-6" />
        </Button>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="font-semibold text-dark">Ügyfeleink:</span>
          <span>Neked Sütöm · Estur Épker · Hellinger Kft.</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-cyan" />
            24h visszahívás
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-cyan" />
            Garancia
          </span>
        </div>
      </div>
    </section>
  )
}
