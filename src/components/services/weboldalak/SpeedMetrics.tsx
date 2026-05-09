'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface GaugeProps {
  value: number
  label: string
  color: string
  delay: number
}

function CircleGauge({ value, label, color, delay }: GaugeProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)
  const r = 52
  const circ = 2 * Math.PI * r
  const progress = inView ? (value / 100) * circ : 0

  useEffect(() => {
    if (!inView) return
    let t0: number | null = null
    const duration = 1400
    const step = (ts: number) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * value))
      if (p < 1) requestAnimationFrame(step)
    }
    const timer = setTimeout(() => requestAnimationFrame(step), delay * 1000)
    return () => clearTimeout(timer)
  }, [inView, value, delay])

  const strokeColor = color === 'green' ? '#22c55e' : color === 'cyan' ? '#00CFFF' : '#f59e0b'
  const textColor = color === 'green' ? 'text-green-500' : color === 'cyan' ? 'text-cyan' : 'text-amber-500'
  const bgColor = color === 'green' ? 'bg-green-50' : color === 'cyan' ? 'bg-cyan-light' : 'bg-amber-50'

  return (
    <div ref={ref} className={`flex flex-col items-center gap-3 p-6 ${bgColor} rounded-3xl`}>
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="8"/>
          <motion.circle
            cx="60" cy="60" r={r}
            fill="none"
            stroke={strokeColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: inView ? circ - progress : circ }}
            transition={{ duration: 1.4, delay, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-3xl font-display font-bold ${textColor}`}>{count}</span>
        </div>
      </div>
      <span className="font-display font-bold text-dark text-sm text-center">{label}</span>
    </div>
  )
}

export function SpeedMetrics() {
  const metrics = [
    { value: 98, label: 'Teljesítmény',   color: 'green', delay: 0.1 },
    { value: 100, label: 'SEO',           color: 'cyan',  delay: 0.25 },
    { value: 95, label: 'Legjobb gyakorlat', color: 'green', delay: 0.4 },
    { value: 100, label: 'Akadálymentesség', color: 'cyan', delay: 0.55 },
  ]

  return (
    <div>
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-display font-bold px-3 py-1.5 rounded-full mb-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          Google PageSpeed Insights
        </div>
        <p className="text-muted text-sm">Minden általunk készített weboldal teljes pontszámra törekszik</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map(m => <CircleGauge key={m.label} {...m} />)}
      </div>
    </div>
  )
}
