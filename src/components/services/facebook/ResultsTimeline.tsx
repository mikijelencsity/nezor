'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp } from 'lucide-react'

const weeks = [
  { week: '1. hét',  reach: 1200,  clicks: 85,  leads: 4  },
  { week: '2. hét',  reach: 3800,  clicks: 210, leads: 12 },
  { week: '3. hét',  reach: 7400,  clicks: 420, leads: 24 },
  { week: '4. hét',  reach: 12400, clicks: 847, leads: 42 },
]

function AnimatedNumber({ target, delay }: { target: number; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const timer = setTimeout(() => {
      let t0: number | null = null
      const step = (ts: number) => {
        if (!t0) t0 = ts
        const p = Math.min((ts - t0) / 1200, 1)
        const e = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(e * target))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [inView, target, delay])

  return <span ref={ref}>{val.toLocaleString('hu-HU')}</span>
}

export function ResultsTimeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const maxReach = Math.max(...weeks.map(w => w.reach))

  return (
    <div ref={ref} className="space-y-4">
      {weeks.map(({ week, reach, clicks, leads }, i) => (
        <motion.div
          key={week}
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.15 }}
          className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs font-display font-bold text-muted w-12 flex-shrink-0">{week}</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-cyan rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: `${(reach / maxReach) * 100}%` } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
              />
            </div>
          </div>
          <div className="flex items-center gap-6 ml-16">
            <div className="text-center">
              <div className="text-sm font-display font-bold text-blue-600">
                <AnimatedNumber target={reach} delay={0.4 + i * 0.15} />
              </div>
              <div className="text-[9px] text-muted">Elérés</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-display font-bold text-cyan">
                <AnimatedNumber target={clicks} delay={0.5 + i * 0.15} />
              </div>
              <div className="text-[9px] text-muted">Kattintás</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-display font-bold text-green-600">
                <AnimatedNumber target={leads} delay={0.6 + i * 0.15} />
              </div>
              <div className="text-[9px] text-muted">Érdeklődő</div>
            </div>
            {i === weeks.length - 1 && (
              <div className="ml-auto flex items-center gap-1 text-green-600 text-xs font-display font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                +950%
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
