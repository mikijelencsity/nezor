const pains = [
  {
    number: '01',
    headline: 'Nincs weboldalad — a Google-ben a konkurensed jelenik meg.',
    body: 'Ma már az ügyfelek 70%-a online keres tetőfedőt. Ha nem vagy fent, egyszerűen nem létezel számukra.',
  },
  {
    number: '02',
    headline: 'A konkurensed hirdet Facebookon. Te nem.',
    body: 'Miközben te szájhagyomány útján vársz az ügyfelekre, a versenytársad célzott hirdetésekkel éri el pontosan azokat, akiknek beázik a teteje.',
  },
  {
    number: '03',
    headline: 'Szezonon kívül leáll a telefon.',
    body: 'Télen és tavasszal drasztikusan visszaesik a munka. Egy profi weboldal és rendszeres hirdetés egész évben stabilan hozza az ügyfeleket.',
  },
]

export function TetofedoPainPoints() {
  return (
    <section style={{ background: '#F5F3EF' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-6" style={{ color: '#C4531A' }}>
            A valóság
          </p>
          <h2
            className="font-bold leading-[1.1]"
            style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#111111',
              letterSpacing: '-0.02em',
            }}
          >
            A legtöbb tetőfedő vállalkozás rengeteg ügyfelet veszít el — egy rossz weboldal vagy a weboldal hiánya miatt.
          </h2>
        </div>

        <div>
          {pains.map(({ number, headline, body }) => (
            <div
              key={number}
              className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-16 py-10 border-t"
              style={{ borderColor: 'rgba(17,17,17,0.12)' }}
            >
              <div
                className="font-bold text-5xl leading-none"
                style={{ fontFamily: 'var(--font-serif), Georgia, serif', color: '#111111', opacity: 0.15 }}
              >
                {number}
              </div>
              <h3
                className="font-bold text-xl leading-snug"
                style={{ color: '#111111', fontFamily: 'var(--font-serif), Georgia, serif' }}
              >
                {headline}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                {body}
              </p>
            </div>
          ))}
          <div className="border-t" style={{ borderColor: 'rgba(17,17,17,0.12)' }} />
        </div>

      </div>
    </section>
  )
}
