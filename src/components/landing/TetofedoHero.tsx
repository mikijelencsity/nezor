import { Phone, ArrowDown, Star, Shield, Clock } from 'lucide-react'

const trustBullets = [
  { icon: Shield, text: 'Garanciával vállalt munka' },
  { icon: Clock,  text: '2 héten belül élesben' },
  { icon: Star,   text: 'Magyar vállalkozásoknak' },
]

export function TetofedoHero() {
  return (
    <section className="relative overflow-hidden bg-dark min-h-[90vh] flex items-center pt-16 pb-12">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Tetőfedő szakembereknek — Júniusi akció
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6">
              Szerezz több{' '}
              <span className="text-orange-400">tetőfedő</span>{' '}
              ügyfelet online.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              Profi weboldal + 2 Facebook hirdetés, kifejezetten tetőfedő vállalkozásoknak.{' '}
              <span className="text-white font-semibold">Már 100.000 Ft-tól.</span>{' '}
              2 héten belül élesben.
            </p>

            {/* Trust bullets */}
            <ul className="space-y-3 mb-10">
              {trustBullets.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-cyan" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-display font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-colors w-full sm:w-auto"
              >
                Kérek visszahívást
                <ArrowDown className="w-5 h-5" />
              </a>
              <a
                href="tel:+36704554703"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-display font-semibold px-8 py-4 rounded-xl text-lg hover:border-white/50 hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 text-cyan" />
                +36 70 455 4703
              </a>
            </div>

            <p className="mt-4 text-gray-600 text-xs">
              Csak 3 hely maradt júniusban · Ingyenes, kötelezettségmentes
            </p>
          </div>

          {/* RIGHT — image placeholder, replace with real roofing photo */}
          <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
            {/* TODO: Replace this div with <Image> when you have a real roofing photo */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col items-center justify-center gap-4">
              <div className="text-gray-500 text-6xl">🏠</div>
              <p className="text-gray-500 text-sm text-center px-8">
                Ide kerül a tetőfedő munkaképed<br />
                (drónfotó, munka közben, vagy kész tető)
              </p>
            </div>

            {/* Overlay badges */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-dark font-semibold text-sm">5.0</span>
              </div>
              <p className="text-gray-500 text-xs">Google értékelés</p>
            </div>

            <div className="absolute bottom-4 right-4 bg-dark/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">24 órán belül</p>
                  <p className="text-gray-400 text-xs">visszahívás garantálva</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
