const steps = [
  {
    number: '01',
    title: 'Felvesszük veled a kapcsolatot',
    desc: 'Visszahívunk 24 órán belül. Megbeszéljük a vállalkozásodat, a célokat, és azt, mire van szükséged. Ingyenes, kötelezettségmentes.',
  },
  {
    number: '02',
    title: 'Elkészítjük a weboldaladat és a hirdetéseket',
    desc: 'Mi végzünk el mindent — tervezés, szövegírás, feltöltés. Neked csak jóvá kell hagyni a kész verziót. Semmi technikai tudás nem kell.',
  },
  {
    number: '03',
    title: '2 héten belül élesben az oldalad',
    desc: 'Átadjuk az elkészült weboldalt és feltöltjük a 2 Facebook hirdetést. Attól a naptól elkezdhetnek hívni az új ügyfelek.',
  },
]

export function TetofedoHowItWorks() {
  return (
    <section style={{ background: '#F5F3EF' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-6" style={{ color: '#C4531A' }}>
              A folyamat
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
              Egyszerűbb, mint gondolod.
            </h2>
          </div>

          <div>
            {steps.map(({ number, title, desc }) => (
              <div
                key={number}
                className="grid grid-cols-[60px_1fr] gap-8 py-8 border-b"
                style={{ borderColor: 'rgba(17,17,17,0.1)' }}
              >
                <div
                  className="font-bold text-4xl leading-none pt-1"
                  style={{ fontFamily: 'var(--font-serif), Georgia, serif', color: '#111111', opacity: 0.15 }}
                >
                  {number}
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: '#111111', fontFamily: 'var(--font-serif), Georgia, serif' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-b" style={{ borderColor: 'rgba(17,17,17,0.1)' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
