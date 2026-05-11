'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const featured = {
  name: 'Kovács Péter',
  company: 'ZT Épületgépészet',
  role: 'Tulajdonos',
  text: 'A NEZOR csapata teljesen átformálta a cégünk online jelenlétét. Az új weboldalunk után az érdeklődők száma megduplázódott az első hónapban. Profik, gyorsak, és tényleg értik amit csinálnak.',
  initials: 'KP',
  result: '+112%',
  resultLabel: 'több érdeklődő',
  bg: 'bg-cyan',
}

const others = [
  {
    name: 'Nagy Katalin',
    company: 'Neked Sütöm',
    text: 'A webshopom forgalma az első hónapban megduplázódott. Profik, gyorsak és megértik az igényeimet.',
    initials: 'NK',
    bg: 'bg-blue-500',
    result: '2×',
    resultLabel: 'forgalom',
  },
  {
    name: 'Molnár Gábor',
    company: 'Hellinger Kft.',
    text: 'A Facebook hirdetéseink most valóban működnek. Hetente kapunk új érdeklődőket az oldalunkról.',
    initials: 'MG',
    bg: 'bg-indigo-500',
    result: '+42',
    resultLabel: 'érdeklődő/hó',
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 bg-secondary overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Vélemények</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Mit mondanak ügyfeleink?</h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 280, damping: 28, delay: 0.1 }}
          className="relative bg-dark text-white rounded-3xl p-8 md:p-12 mb-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <Quote className="w-10 h-10 text-cyan/40 mb-4" />
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 italic">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${featured.bg} flex items-center justify-center text-white font-display font-bold flex-shrink-0`}>
                  {featured.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-white">{featured.name}</div>
                  <div className="text-gray-400 text-sm">{featured.role} · {featured.company}</div>
                </div>
                <div className="flex gap-0.5 ml-auto">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
              </div>
            </div>
            {/* Result stat */}
            <div className="flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-5xl font-display font-bold text-gradient mb-2">{featured.result}</div>
              <div className="text-gray-400 text-sm">{featured.resultLabel}</div>
              <div className="text-gray-500 text-xs mt-1">az első hónapban</div>
            </div>
          </div>
        </motion.div>

        {/* Two smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 280, damping: 28, delay: 0.25 + i * 0.12 }}
              className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-gray-50"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_,j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${t.bg} flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div className="flex-1">
                  <div className="font-display font-semibold text-dark text-sm">{t.name}</div>
                  <div className="text-xs text-muted">{t.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-display font-bold text-gradient">{t.result}</div>
                  <div className="text-[10px] text-muted">{t.resultLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
