'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Search, TrendingUp, Star } from 'lucide-react'

const initialResults = [
  { pos: 1, title: 'Weboldal készítés Budapest — Fővárosi Stúdió', url: 'fovarosistudio.hu', snippet: 'Modern weboldalak vállalkozásoknak...',      highlight: false },
  { pos: 2, title: 'Cheap Web Design Hungary — QuickSites',        url: 'quicksites.hu',    snippet: 'Olcsó weboldalak 24 óra alatt...',           highlight: false },
  { pos: 3, title: 'WebMaster Kft. — Weboldal Készítés',           url: 'webmaster.hu',    snippet: 'Foglaljon időpontot még ma!',                highlight: false },
  { pos: 4, title: 'DigitalPro — Webfejlesztés',                   url: 'digitalpro.hu',   snippet: 'Egyedi megoldások minden igényre...',        highlight: false },
  { pos: 5, title: 'NetWork Studio — Honlap Készítés',             url: 'networkstudio.hu', snippet: 'WordPress és egyedi fejlesztés...',          highlight: false },
  { pos: 6, title: 'NEZOR — Weboldal készítés Bács-Kiskun',        url: 'nezor.hu',        snippet: 'Professzionális weboldalak, SEO optimalizálva.', highlight: true  },
]

const finalResults = [
  { pos: 1, title: 'NEZOR — Weboldal készítés Bács-Kiskun',        url: 'nezor.hu',        snippet: 'Professzionális weboldalak, SEO optimalizálva.', highlight: true  },
  { pos: 2, title: 'Weboldal készítés Budapest — Fővárosi Stúdió', url: 'fovarosistudio.hu', snippet: 'Modern weboldalak vállalkozásoknak...',      highlight: false },
  { pos: 3, title: 'WebMaster Kft. — Weboldal Készítés',           url: 'webmaster.hu',    snippet: 'Foglaljon időpontot még ma!',                highlight: false },
  { pos: 4, title: 'DigitalPro — Webfejlesztés',                   url: 'digitalpro.hu',   snippet: 'Egyedi megoldások minden igényre...',        highlight: false },
  { pos: 5, title: 'NetWork Studio — Honlap Készítés',             url: 'networkstudio.hu', snippet: 'WordPress és egyedi fejlesztés...',          highlight: false },
  { pos: 6, title: 'Cheap Web Design Hungary — QuickSites',        url: 'quicksites.hu',    snippet: 'Olcsó weboldalak 24 óra alatt...',           highlight: false },
]

function ResultItem({ result, animated }: { result: typeof initialResults[0]; animated: boolean }) {
  return (
    <div className={`px-4 py-3 rounded-xl transition-all duration-300 ${result.highlight ? 'bg-cyan-light border border-cyan/30' : 'bg-white border border-gray-100'}`}>
      <div className="flex items-start gap-3">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5 ${result.highlight ? 'bg-cyan text-white' : 'bg-gray-100 text-muted'}`}>
          {result.pos}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] text-green-600 truncate">{result.url}</div>
          <div className={`text-xs font-semibold truncate ${result.highlight ? 'text-cyan' : 'text-blue-700'}`}>{result.title}</div>
          <div className="text-[9px] text-muted truncate">{result.snippet}</div>
          {result.highlight && (
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />)}
              <span className="text-[8px] text-muted">4.9 (47 értékelés)</span>
            </div>
          )}
        </div>
        {result.highlight && animated && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex-shrink-0"
          >
            <TrendingUp className="w-4 h-4 text-cyan" />
          </motion.div>
        )}
      </div>
    </div>
  )
}

export function SeoRankingAnimation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [phase, setPhase] = useState<'initial' | 'animating' | 'final'>('initial')
  const [results, setResults] = useState(initialResults)

  useEffect(() => {
    if (!inView) return
    const t1 = setTimeout(() => setPhase('animating'), 1200)
    const t2 = setTimeout(() => {
      setResults(finalResults)
      setPhase('final')
    }, 2200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [inView])

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left: explanation */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      >
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-display font-bold px-3 py-1.5 rounded-full mb-4">
          <TrendingUp className="w-3.5 h-3.5" />
          SEO Optimalizálás
        </div>
        <h3 className="text-2xl font-display font-bold text-dark mb-4 leading-tight">
          Az első helyre kerülsz<br />
          <span className="text-gradient">Google-on is</span>
        </h3>
        <p className="text-muted mb-6 leading-relaxed">
          Minden általunk készített weboldal teljes SEO-optimalizálással érkezik — technikai beállítások, meta adatok, strukturált adatok és tartalom stratégia.
        </p>
        <div className="space-y-3">
          {[
            'Technikai SEO alaptól felépítve',
            'Meta title & description minden oldalon',
            'JSON-LD strukturált adatok (Schema.org)',
            'Google Search Console bekötés',
            'Helyi SEO — Bács-Kiskun megye',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-dark">
              <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: animated SERP */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.2 }}
        className="relative"
      >
        {/* Browser chrome */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Address bar */}
          <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-100 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white rounded-lg px-3 py-1 flex items-center gap-2 border border-gray-200">
              <Search className="w-3 h-3 text-muted" />
              <span className="text-xs text-dark">weboldal készítés bács-kiskun</span>
            </div>
          </div>

          {/* Results */}
          <div className="p-3 space-y-2 bg-gray-50">
            <div className="text-[9px] text-muted px-1 mb-1">Kb. 124 000 találat (0,42 másodperc)</div>
            <AnimatePresence mode="popLayout">
              {results.map((result) => (
                <motion.div
                  key={result.url}
                  layout
                  transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                >
                  <ResultItem result={result} animated={phase === 'final'} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Phase indicator */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <AnimatePresence mode="wait">
            {phase === 'initial' && (
              <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-xs text-muted bg-white px-3 py-1 rounded-full shadow border border-gray-100">
                6. pozíció induláskor...
              </motion.span>
            )}
            {phase === 'animating' && (
              <motion.span key="a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-xs text-cyan font-semibold bg-cyan-light px-3 py-1 rounded-full shadow border border-cyan/20">
                ⬆ Feljebb kerülünk...
              </motion.span>
            )}
            {phase === 'final' && (
              <motion.span key="f" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-xs text-green-700 font-bold bg-green-50 px-3 py-1 rounded-full shadow border border-green-200">
                🎉 1. helyezés elérve!
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
