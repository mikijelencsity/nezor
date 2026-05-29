import { Phone, ArrowDown } from 'lucide-react'

export function TetofedoHero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-10 pb-20 min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Tetőfedő szakembereknek
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
          Miközben te offline vagy, a{' '}
          <span className="text-orange-400">konkurenciád elviszi</span>{' '}
          az ügyfeleid.
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Készítünk neked egy profi tetőfedő weboldalt és 2 Facebook hirdetést —{' '}
          <span className="text-white font-semibold">100.000 Ft-ért.</span>{' '}
          Garantált online jelenlét, több megkeresés.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#ajanlat"
            className="inline-flex items-center justify-center gap-2 bg-cyan text-white font-display font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-cyan/90 transition-colors w-full sm:w-auto"
          >
            Kérek ajánlatot
            <ArrowDown className="w-5 h-5" />
          </a>
          <a
            href="tel:+36704554703"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-display font-semibold px-8 py-4 rounded-xl text-lg hover:border-white/60 transition-colors w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            +36 70 455 4703
          </a>
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          Csak 3 hely maradt ebben a hónapban — ne hagyd ki!
        </p>
      </div>
    </section>
  )
}
