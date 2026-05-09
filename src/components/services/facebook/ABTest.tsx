'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Trophy } from 'lucide-react'

function AnimBar({ target, delay, color }: { target: number; delay: number; color: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => {
      let t0: number | null = null
      const step = (ts: number) => {
        if (!t0) t0 = ts
        const p = Math.min((ts - t0) / 1000, 1)
        const e = 1 - Math.pow(1 - p, 3)
        setWidth(e * target)
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay * 1000)
    return () => clearTimeout(t)
  }, [inView, target, delay])

  return (
    <div ref={ref} className="h-3 bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

const variants = [
  {
    label: 'A verzió',
    headline: '"Weboldal készítés"',
    visual: 'Szöveges hirdetés',
    ctr: '1.2%',
    ctrTarget: 24,
    cpc: '180 Ft',
    leads: '8 db / hét',
    winner: false,
    color: 'border-gray-200 bg-white',
    barColor: 'bg-gray-300',
    badge: { text: 'Gyengébb', color: 'bg-red-50 text-red-600' },
  },
  {
    label: 'B verzió',
    headline: '"Ingyenes weboldal ajánlat — 48h"',
    visual: 'Kép + urgency szöveg',
    ctr: '3.8%',
    ctrTarget: 76,
    cpc: '58 Ft',
    leads: '26 db / hét',
    winner: true,
    color: 'border-green-200 bg-green-50',
    barColor: 'bg-gradient-to-r from-green-400 to-emerald-400',
    badge: { text: 'Nyertes ✓', color: 'bg-green-100 text-green-700' },
  },
]

export function ABTest() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {variants.map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.15 }}
            className={`relative rounded-3xl border-2 p-6 ${v.color} ${v.winner ? 'shadow-lg' : ''}`}
          >
            {v.winner && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-green-500 text-white text-xs font-display font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <Trophy className="w-3 h-3" /> Nyertes változat
                </div>
              </div>
            )}

            {/* Label */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-display font-bold text-dark">{v.label}</span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${v.badge.color}`}>{v.badge.text}</span>
            </div>

            {/* Ad preview card */}
            <div className="bg-white rounded-2xl p-3 mb-4 border border-gray-100 shadow-sm">
              <div className="text-[9px] text-muted mb-1">Hirdetés szöveg</div>
              <div className="text-xs font-bold text-dark mb-2">{v.headline}</div>
              <div className="bg-gray-50 rounded-lg px-2 py-1">
                <span className="text-[9px] text-muted">Vizuál: </span>
                <span className="text-[9px] text-dark font-medium">{v.visual}</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted">Átkattintási arány (CTR)</span>
                  <span className={`text-sm font-display font-bold ${v.winner ? 'text-green-600' : 'text-dark'}`}>{v.ctr}</span>
                </div>
                <AnimBar target={v.ctrTarget} delay={0.4 + i * 0.1} color={v.barColor} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className={`rounded-xl p-2.5 text-center ${v.winner ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="text-[9px] text-muted">Kattintás ára</div>
                  <div className={`text-sm font-display font-bold ${v.winner ? 'text-green-600' : 'text-dark'}`}>{v.cpc}</div>
                </div>
                <div className={`rounded-xl p-2.5 text-center ${v.winner ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="text-[9px] text-muted">Érdeklődők</div>
                  <div className={`text-sm font-display font-bold ${v.winner ? 'text-green-600' : 'text-dark'}`}>{v.leads}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Insight bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.5 }}
        className="bg-dark text-white rounded-2xl p-5 flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>
        <div>
          <div className="font-display font-bold text-sm mb-0.5">A B verzió 3.2× több érdeklődőt hoz — ugyanakkora büdzséből</div>
          <div className="text-gray-400 text-xs">Az A/B tesztelés nem opcionális — ez a különbség az átlagos és a kiemelkedő kampány között.</div>
        </div>
      </motion.div>
    </div>
  )
}
