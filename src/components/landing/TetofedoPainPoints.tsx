import { WifiOff, TrendingDown, PhoneMissed } from 'lucide-react'

const pains = [
  {
    icon: WifiOff,
    title: 'Nincs weboldalad',
    desc: 'Az ügyfelek keresnek, de nem találnak meg online. A Google-ben a konkurensed jelenik meg — nem te.',
  },
  {
    icon: TrendingDown,
    title: 'A konkurensed már Facebookon van',
    desc: 'Miközben te szájhagyomány útján szerzed az ügyfeleket, a versenytársad hirdetésekkel éri el az újakat.',
  },
  {
    icon: PhoneMissed,
    title: 'Szezonon kívül alig csörög a telefon',
    desc: 'Télen, tavasszal alig van munka. Egy jó weboldal és hirdetés egész évben hozza az ügyfeleket.',
  },
]

export function TetofedoPainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-3">
            Ismerős valamelyik?
          </h2>
          <p className="text-muted text-lg">Ha igen, itt az idő változtatni.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-display font-bold text-dark text-lg mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
