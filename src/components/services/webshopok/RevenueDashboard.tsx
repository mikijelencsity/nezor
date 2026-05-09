'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, ShoppingBag, Users, ArrowUpRight, MoreHorizontal } from 'lucide-react'

function AnimCount({ target, prefix = '', suffix = '', duration = 1600, delay = 0 }: {
  target: number; prefix?: string; suffix?: string; duration?: number; delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => {
      let t0: number | null = null
      const step = (ts: number) => {
        if (!t0) t0 = ts
        const p = Math.min((ts - t0) / duration, 1)
        const e = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(e * target))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay * 1000)
    return () => clearTimeout(t)
  }, [inView, target, duration, delay])

  const display = target >= 1000
    ? (val >= 1000 ? `${Math.floor(val / 1000)},${String(val % 1000).padStart(3, '0')}` : val.toString())
    : val.toString()

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

const chartBars = [38, 52, 45, 68, 59, 74, 82, 65, 88, 76, 92, 100]

const recentOrders = [
  { id: '#4821', product: 'Kerékpár lakat',    amount: '8.900 Ft',  status: 'Teljesítve', color: 'text-green-600 bg-green-50' },
  { id: '#4820', product: 'Sisak + tükör',     amount: '24.500 Ft', status: 'Feldolgozás', color: 'text-blue-600 bg-blue-50'  },
  { id: '#4819', product: 'Gyerek kerékpár',   amount: '67.900 Ft', status: 'Teljesítve', color: 'text-green-600 bg-green-50' },
  { id: '#4818', product: 'Lámpa szett',       amount: '5.400 Ft',  status: 'Szállítás', color: 'text-orange-600 bg-orange-50' },
]

export function RevenueDashboard() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Dashboard header */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan to-blue-400 rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-display font-bold text-dark text-sm">Webshop Admin</div>
            <div className="text-[10px] text-muted">ugyfel-webshop.hu</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-green-600 font-semibold">Élő</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: TrendingUp, label: 'Mai bevétel',   prefix: '', target: 847400, suffix: ' Ft', color: 'text-green-600', bg: 'bg-green-50', delay: 0.1 },
            { icon: ShoppingBag, label: 'Rendelések',   prefix: '', target: 47,     suffix: ' db',  color: 'text-blue-600',  bg: 'bg-blue-50',  delay: 0.2 },
            { icon: Users,       label: 'Látogatók',    prefix: '', target: 1243,   suffix: '',      color: 'text-purple-600',bg: 'bg-purple-50',delay: 0.3 },
          ].map(({ icon: Icon, label, prefix, target, suffix, color, bg, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 320, damping: 28, delay }}
              className={`${bg} rounded-2xl p-4`}
            >
              <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-2 shadow-sm`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <div className={`text-lg font-display font-bold ${color}`}>
                <AnimCount target={target} prefix={prefix} suffix={suffix} delay={delay + 0.3} />
              </div>
              <div className="text-[10px] text-muted mt-0.5">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-display font-bold text-dark">Bevétel — elmúlt 12 nap</span>
            <span className="flex items-center gap-1 text-green-600 text-[10px] font-semibold">
              <ArrowUpRight className="w-3 h-3" /> +34% vs. előző hét
            </span>
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {chartBars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-cyan to-blue-300 rounded-t-sm"
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.05, ease: 'easeOut' }}
                style={{ height: `${h}%`, originY: 1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Recent orders */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-display font-bold text-dark">Legutóbbi rendelések</span>
            <MoreHorizontal className="w-4 h-4 text-muted" />
          </div>
          <div className="space-y-2">
            {recentOrders.map((order, i) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.7 + i * 0.1 }}
                className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-muted font-mono">{order.id}</span>
                  <span className="text-xs text-dark font-medium">{order.product}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-display font-bold text-dark">{order.amount}</span>
                  <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${order.color}`}>{order.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
