const refs = [
  { name: 'Neked Sütöm', url: 'nekedsutom.hu', desc: 'Bajai kézműves lángosozó' },
  { name: 'Estur Épker Kft.', url: 'estur.hu', desc: 'Generálkivitelező, Baja' },
  { name: 'Hellinger Kft.', url: 'hellingerkft.hu', desc: 'Ipari csarnokok, Dél-Dunántúl' },
]

export function TetofedoReferences() {
  return (
    <section style={{ background: '#1A1A1A' }} className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
          <div className="lg:w-72 flex-shrink-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#C4531A' }}>
              Referenciák
            </p>
            <h2
              className="font-bold leading-tight"
              style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: '1.6rem',
                color: '#F5F3EF',
              }}
            >
              Magyar vállalkozások bíztak bennünk.
            </h2>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-0">
            {refs.map(({ name, url, desc }, i) => (
              <div
                key={name}
                className="py-8 px-6 border-t lg:border-t-0 lg:border-l first:border-l-0"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <p
                  className="font-bold text-base mb-1"
                  style={{ color: '#F5F3EF', fontFamily: 'var(--font-serif), Georgia, serif' }}
                >
                  {name}
                </p>
                <p className="text-xs mb-3" style={{ color: '#6B7280' }}>{desc}</p>
                <a
                  href={`https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono transition-colors hover:underline"
                  style={{ color: '#C4531A' }}
                >
                  {url} →
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
