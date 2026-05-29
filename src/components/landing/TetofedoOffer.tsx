import { CheckCircle, Globe, Megaphone, Smartphone, Search } from 'lucide-react'

const included = [
  { icon: Globe,       text: '5 oldalas professzionális weboldal' },
  { icon: Smartphone,  text: 'Mobilbarát, gyors betöltés' },
  { icon: Search,      text: 'SEO-optimalizált — megtalálnak a Google-ben' },
  { icon: Megaphone,   text: '2 db Facebook hirdetés megtervezve és feltöltve' },
  { icon: CheckCircle, text: 'Domain és tárhely első évre benne van' },
  { icon: CheckCircle, text: '2 héten belül élesben az oldalad' },
]

export function TetofedoOffer() {
  return (
    <section id="ajanlat" className="py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-500/20 text-orange-400 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Korlátozott ideig
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Mit kapsz 100.000 Ft-ért?
          </h2>
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-gray-500 line-through text-2xl">250.000 Ft</span>
            <span className="text-cyan font-display font-bold text-4xl">100.000 Ft</span>
          </div>
          <p className="text-gray-400 text-sm">Egyszeri díj, nincs rejtett költség</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-cyan" />
                </div>
                <span className="text-gray-200 text-sm">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <a
              href="#kapcsolat"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-display font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Igen, kérem ezt az ajánlatot!
            </a>
            <p className="text-gray-500 text-xs mt-3">Csak 3 hely maradt ebben a hónapban</p>
          </div>
        </div>
      </div>
    </section>
  )
}
