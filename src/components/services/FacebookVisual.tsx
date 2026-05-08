'use client'
import { motion } from 'framer-motion'
import { Target, Users, MousePointer, TrendingUp, MapPin, Briefcase, Heart, ShoppingBag } from 'lucide-react'

/* ── A: Targeting bullseye ── */
function TargetingBullseye() {
  const chips = [
    { icon: MapPin,     label: 'Bács-Kiskun',  delay: 0.6,  pos: '-top-3 left-1/2 -translate-x-1/2' },
    { icon: Users,      label: '25–45 év',      delay: 0.75, pos: 'top-1/4 -right-2'                 },
    { icon: Briefcase,  label: 'Vállalkozók',   delay: 0.9,  pos: '-bottom-3 right-1/4'              },
    { icon: Heart,      label: 'Érdeklődők',    delay: 1.05, pos: '-bottom-3 left-1/4'               },
    { icon: ShoppingBag,label: 'Vásárlók',      delay: 1.2,  pos: 'top-1/4 -left-2'                 },
  ]

  return (
    <div className="relative w-40 h-40 flex-shrink-0 mx-auto">
      {/* Rings */}
      {[140, 100, 64, 32].map((size, i) => (
        <motion.div
          key={size}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
          className="absolute inset-0 m-auto rounded-full border-2"
          style={{
            width: size, height: size,
            borderColor: `rgba(0,207,255,${0.15 + i * 0.15})`,
            backgroundColor: `rgba(0,207,255,${0.03 + i * 0.03})`,
          }}
        />
      ))}
      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7, type: 'spring' }}
        className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-gradient-to-br from-cyan to-blue-400 shadow-lg flex items-center justify-center"
      >
        <Target className="w-3 h-3 text-white" />
      </motion.div>
      {/* Floating chips */}
      {chips.map(({ icon: Icon, label, delay, pos }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay }}
          className={`absolute ${pos} bg-white rounded-full shadow-md border border-gray-100 px-2 py-1 flex items-center gap-1 whitespace-nowrap z-10`}
        >
          <Icon className="w-2.5 h-2.5 text-cyan" />
          <span className="text-[9px] font-display font-bold text-dark">{label}</span>
        </motion.div>
      ))}
    </div>
  )
}

/* ── B: Mini dashboard card ── */
function DashboardCard() {
  const points = [20, 35, 28, 50, 42, 65, 58, 80, 72, 95]
  const maxY = Math.max(...points)
  const w = 120, h = 36
  const pathD = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w
    const y = h - (p / maxY) * h
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')
  const areaD = `${pathD} L ${w} ${h} L 0 ${h} Z`

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 w-full"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-display font-bold text-dark">Kampány teljesítmény</span>
        <span className="text-[9px] text-green-500 font-semibold bg-green-50 px-1.5 py-0.5 rounded-full">↑ +34%</span>
      </div>
      {/* SVG line chart */}
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="mb-3 overflow-visible">
        <defs>
          <linearGradient id="fb-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00CFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00CFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#fb-grad)" />
        <motion.path
          d={pathD}
          fill="none"
          stroke="#00CFFF"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: 'easeInOut' }}
        />
      </svg>
      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: Users,        val: '12.4K', label: 'Elérés',    color: 'text-blue-500'  },
          { icon: MousePointer, val: '847',   label: 'Kattintás', color: 'text-cyan'       },
          { icon: TrendingUp,   val: '42',    label: 'Lead',      color: 'text-green-500' },
        ].map(({ icon: Icon, val, label, color }) => (
          <div key={label} className="text-center">
            <Icon className={`w-3 h-3 ${color} mx-auto mb-0.5`} />
            <div className={`text-xs font-display font-bold ${color}`}>{val}</div>
            <div className="text-[8px] text-muted">{label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ── C: ROI flow ── */
function ROIFlow() {
  const steps = [
    { label: 'Büdzsé',     value: '50.000 Ft', color: 'bg-blue-50   border-blue-200   text-blue-700'   },
    { label: 'Elérés',     value: '12.400',    color: 'bg-cyan-50   border-cyan-200   text-cyan-700'   },
    { label: 'Kattintás',  value: '847',       color: 'bg-purple-50 border-purple-200 text-purple-700' },
    { label: 'Érdeklődő',  value: '42 db',     color: 'bg-green-50  border-green-200  text-green-700'  },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1 }}
      className="flex items-center gap-1 w-full"
    >
      {steps.map(({ label, value, color }, i) => (
        <div key={label} className="flex items-center gap-1 flex-1">
          <div className={`flex-1 rounded-xl border p-2 text-center ${color}`}>
            <div className="text-[8px] text-muted mb-0.5">{label}</div>
            <div className="text-[10px] font-display font-bold">{value}</div>
          </div>
          {i < steps.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="text-cyan text-xs flex-shrink-0"
            >→</motion.span>
          )}
        </div>
      ))}
    </motion.div>
  )
}

/* ── Main export ── */
export function FacebookVisual() {
  return (
    <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full max-w-sm"
      >
        {/* Glow */}
        <div className="absolute -inset-4 bg-blue-300/10 rounded-3xl blur-2xl" />

        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-xl p-5 space-y-4">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Target className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-xs font-display font-bold text-dark">Meta Hirdetés Kezelő</span>
            <span className="ml-auto flex items-center gap-1 text-[9px] text-green-500 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Aktív
            </span>
          </div>

          {/* A: Bullseye */}
          <TargetingBullseye />

          {/* B: Dashboard */}
          <DashboardCard />

          {/* C: ROI flow */}
          <ROIFlow />
        </div>
      </motion.div>
    </div>
  )
}
