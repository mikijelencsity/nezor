import { Phone, ArrowDown } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Elkészült weboldal' },
  { value: '24h', label: 'Visszahívás garantálva' },
  { value: '100%', label: 'Elégedett ügyfél' },
  { value: '2 hét', label: 'Átadási határidő' },
]

export function TetofedoHero() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden"
      style={{ background: '#111111' }}
    >
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-16 pb-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center min-h-[70vh]">

          {/* LEFT */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-8"
              style={{ color: '#C4531A' }}
            >
              Tetőfedő vállalkozásoknak — Magyarország
            </p>

            <h1
              className="font-bold leading-[1.0] mb-8"
              style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                color: '#F5F3EF',
                letterSpacing: '-0.02em',
              }}
            >
              Nem elég{' '}
              <span style={{ color: '#C4531A', fontStyle: 'italic' }}>
                jónak
              </span>{' '}
              lenni.
              <br />
              Profi benyomást is{' '}
              <br className="hidden lg:block" />
              kell keltened.
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: '#9CA3AF', fontFamily: 'var(--font-inter)' }}
            >
              Weboldalt és Facebook hirdetést készítünk tetőfedő vállalkozásoknak —
              hogy a legjobb ügyfelek téged keressenek meg, ne a konkurensedet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center gap-3 font-semibold text-base px-8 py-4 transition-all"
                style={{
                  background: '#C4531A',
                  color: '#F5F3EF',
                  borderRadius: '4px',
                }}
              >
                Kérek visszahívást
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="tel:+36704554703"
                className="inline-flex items-center justify-center gap-3 font-semibold text-base px-8 py-4 transition-all"
                style={{
                  border: '1px solid rgba(245,243,239,0.2)',
                  color: '#F5F3EF',
                  borderRadius: '4px',
                }}
              >
                <Phone className="w-4 h-4" style={{ color: '#C4531A' }} />
                +36 70 455 4703
              </a>
            </div>
          </div>

          {/* RIGHT — cinematic image placeholder */}
          <div
            className="relative h-[460px] lg:h-[560px]"
            style={{ borderRadius: '2px' }}
          >
            {/* TODO: Replace with real roofing photo — drónos tetőkép vagy munka közbeni fotó */}
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{ background: '#1E1E1E', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div style={{ fontSize: '3rem', opacity: 0.3 }}>📸</div>
              <p style={{ color: '#4B5563', fontSize: '0.8rem', textAlign: 'center', maxWidth: '200px', lineHeight: 1.6 }}>
                Tetőfedő munkaképed ide kerül<br />
                (drónfotó vagy munka közben)
              </p>
            </div>

            {/* Accent line */}
            <div
              className="absolute -left-4 top-12 bottom-12 w-0.5"
              style={{ background: '#C4531A', opacity: 0.6 }}
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-5 px-6 text-center lg:text-left">
                <div
                  className="font-bold text-2xl mb-0.5"
                  style={{
                    fontFamily: 'var(--font-serif), Georgia, serif',
                    color: '#F5F3EF',
                  }}
                >
                  {value}
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: '#6B7280' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
