const objections = [
  {
    q: 'Drága 100.000 Ft?',
    a: 'Egy tetőcsere ára 300.000 és 1.500.000 Ft között van. Ha egyetlen új ügyfelet hoz a weboldal — és fog —, már megtérült. A befektetés nem kérdés. Az a kérdés, hogy megengeded-e magadnak, hogy ne legyen weboldalad.',
  },
  {
    q: 'Nem értek a technikához.',
    a: 'Nem is kell. Mi végzünk el mindent: domain, tárhely, dizájn, szöveg, feltöltés. Te csak jóváhagyod a kész oldalt. Ha valami nem tetszik, javítjuk. Egy hívás, és indul a munka.',
  },
  {
    q: 'Már volt weboldalam, nem hozott ügyfelet.',
    a: 'Egy rosszul megcsinált weboldal tényleg nem hoz ügyfelet — és sajnos rengeteg ilyen van piacon. Mi konverzióra optimalizálva tervezzük az oldalt, és a 2 Facebook hirdetés célzottan hozza az embereket, akiknek valóban tetőmunkára van szükségük.',
  },
]

export function TetofedoObjections() {
  return (
    <section style={{ background: '#F5F3EF' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-16 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-6" style={{ color: '#C4531A' }}>
            Kérdések
          </p>
          <h2
            className="font-bold leading-[1.1]"
            style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#111111',
              letterSpacing: '-0.02em',
            }}
          >
            Amire gondolhatsz.
          </h2>
        </div>

        <div>
          {objections.map(({ q, a }) => (
            <div
              key={q}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 py-10 border-t"
              style={{ borderColor: 'rgba(17,17,17,0.1)' }}
            >
              <h3
                className="font-bold text-xl leading-snug"
                style={{ color: '#111111', fontFamily: 'var(--font-serif), Georgia, serif' }}
              >
                {q}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                {a}
              </p>
            </div>
          ))}
          <div className="border-t" style={{ borderColor: 'rgba(17,17,17,0.1)' }} />
        </div>

      </div>
    </section>
  )
}
