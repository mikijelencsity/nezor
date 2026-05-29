const included = [
  '5 oldalas, professzionálisan megtervezett weboldal',
  'Mobilra optimalizált — az ügyfelek telefonon találnak meg',
  'Google-ban is megjelensz (SEO alapbeállítás)',
  '2 db Facebook hirdetés megtervezve és feltöltve',
  'Domain és tárhely az első évre benne van',
  'Átadás 2 héten belül, garanciával',
]

export function TetofedoOffer() {
  return (
    <section id="ajanlat" style={{ background: '#1A1A1A' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-6" style={{ color: '#C4531A' }}>
              Az ajánlat
            </p>
            <h2
              className="font-bold leading-[1.1] mb-6"
              style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#F5F3EF',
                letterSpacing: '-0.02em',
              }}
            >
              Minden, amire szükséged van az online jelenléthez.
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#9CA3AF' }}>
              Nem egy sablon weboldalt kapsz. Egy tetőfedő vállalkozásra szabott, konverzióra optimalizált eszközt, ami ügyfeleket hoz.
            </p>

            {/* Price */}
            <div
              className="inline-block py-6 px-8 mb-8"
              style={{ border: '1px solid rgba(196,83,26,0.4)', borderRadius: '2px', background: 'rgba(196,83,26,0.06)' }}
            >
              <div className="flex items-baseline gap-4 mb-1">
                <span style={{ color: '#6B7280', textDecoration: 'line-through', fontSize: '1.1rem' }}>250.000 Ft</span>
                <span
                  className="font-bold"
                  style={{
                    fontFamily: 'var(--font-serif), Georgia, serif',
                    fontSize: '2.4rem',
                    color: '#F5F3EF',
                  }}
                >
                  Már 100.000 Ft-tól
                </span>
              </div>
              <p className="text-xs uppercase tracking-widest" style={{ color: '#6B7280' }}>
                Ingyenes helyszíni felmérés után pontos ajánlat
              </p>
            </div>

            <a
              href="#kapcsolat"
              className="inline-flex items-center gap-3 font-semibold text-base px-8 py-4 transition-all"
              style={{ background: '#C4531A', color: '#F5F3EF', borderRadius: '4px' }}
            >
              Ingyenes felmérést kérek
            </a>
          </div>

          {/* RIGHT — what's included */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-8" style={{ color: '#6B7280' }}>
              Benne van
            </p>
            <div className="space-y-0">
              {included.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-5 py-5 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span
                    className="font-bold text-sm mt-0.5 flex-shrink-0 w-6"
                    style={{ color: '#C4531A', fontFamily: 'var(--font-serif), Georgia, serif' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-6" style={{ color: '#6B7280' }}>Csak 3 hely maradt ebben a hónapban.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
