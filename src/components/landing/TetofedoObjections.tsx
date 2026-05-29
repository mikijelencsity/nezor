const objections = [
  {
    q: 'Drága 100.000 Ft?',
    a: 'Egy tetőcsere ára 300.000–1.500.000 Ft között van. Ha egyetlen új ügyfélt hoz a weboldal, már megtérült. A legtöbb ügyfelünk az első hónapban visszakapja a befektetését.',
  },
  {
    q: 'Nem értek a technikához.',
    a: 'Nem is kell. Mi mindent intézünk — domain, tárhely, tervezés, feltöltés. Neked csak jóvá kell hagyni a kész oldalt. Semmi más.',
  },
  {
    q: 'Már volt weboldalam, nem hozott ügyfelet.',
    a: 'Egy rosszul megcsinált weboldal valóban nem hoz ügyfelet. Mi konverzióra optimalizálva építjük az oldalt, és a 2 Facebook hirdetés célzottan tetőfedő munkát keresőket ér el.',
  },
]

export function TetofedoObjections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-3">
            Amire gondolhatsz...
          </h2>
        </div>
        <div className="space-y-4">
          {objections.map(({ q, a }) => (
            <div key={q} className="border border-gray-200 rounded-2xl p-6 hover:border-cyan/40 transition-colors">
              <h3 className="font-display font-bold text-dark mb-2 flex items-start gap-2">
                <span className="text-orange-500 flex-shrink-0">?</span>
                {q}
              </h3>
              <p className="text-muted text-sm leading-relaxed pl-5">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
