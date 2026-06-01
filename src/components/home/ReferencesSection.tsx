import { ArrowUpRight } from 'lucide-react'

const refs = [
  {
    name: 'Neked Sütöm',
    category: 'Lángosozó · Baja',
    quote: 'Végre az interneten is megtalálnak. A NEZOR mindent megcsinált, mi csak a sütésre koncentráltunk.',
    url: 'nekedsutom.hu',
    href: 'https://nekedsutom.hu',
    imgBg: 'linear-gradient(135deg, #e8f4e8, #d0ecd0)',
    imgEmoji: '🍩',
  },
  {
    name: 'Estur Épker Kft.',
    category: 'Generálkivitelező · Baja',
    quote: 'Már online is megtalálnak az ügyfelek. Ár-érték arányban nem találtunk jobbat a környéken.',
    url: 'estur.hu',
    href: 'https://estur.hu',
    imgBg: 'linear-gradient(135deg, #e3ecff, #cddaff)',
    imgEmoji: '🏗️',
  },
  {
    name: 'Hellinger Kft.',
    category: 'Építőipar · Dél-Dunántúl',
    quote: '25 éve dolgozunk, de az online jelenlétünk nem mutatta ezt. Most már igen.',
    url: 'hellingerkft.hu',
    href: 'https://hellingerkft.hu',
    imgBg: 'linear-gradient(135deg, #f0ece4, #e4ddd0)',
    imgEmoji: '🔨',
  },
]

export function ReferencesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan mb-3">
          Akiknek már megcsináltuk
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-black text-dark leading-tight mb-10">
          Magyar vállalkozók, akik már előrébb járnak.
        </h2>

        <div className="flex flex-col gap-5">
          {refs.map((ref) => (
            <div key={ref.name} className="border border-gray-200 rounded-xl overflow-hidden">
              {/* Big image area */}
              <div
                className="w-full flex flex-col items-center justify-center gap-2 relative"
                style={{ height: '200px', background: ref.imgBg }}
              >
                <span style={{ fontSize: '40px', opacity: 0.2 }}>{ref.imgEmoji}</span>
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-30">
                  {ref.url} screenshot
                </span>
                {/* URL badge */}
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 flex items-center gap-1 text-lime text-xs font-bold px-2.5 py-1 rounded"
                  style={{ background: '#0a1f44' }}
                >
                  {ref.url} <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Card body */}
              <div className="px-5 py-4">
                <p className="text-lg font-black text-dark">{ref.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted mb-3">{ref.category}</p>
                <blockquote className="text-sm italic text-dark/80 border-l-[3px] border-cyan pl-3 leading-relaxed">
                  "{ref.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
