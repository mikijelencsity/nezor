'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, ShoppingCart, TrendingUp, ArrowRight, Check } from 'lucide-react'
import { services } from '@/data/services'

const icons = { Monitor, ShoppingCart, TrendingUp }

const serviceDetails = {
  weboldalak: {
    visual: (
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-2 border-b border-gray-100">
          <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400"/><span className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><span className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
          <div className="flex-1 mx-2 bg-white rounded px-2 py-0.5 text-[10px] text-muted border border-gray-200">ugyfel-weboldala.hu</div>
        </div>
        <div className="p-5 space-y-3">
          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-4">
            <div className="w-3/4 h-3 bg-gray-800 rounded-full mb-2"/>
            <div className="w-1/2 h-2 bg-gray-400 rounded-full mb-3"/>
            <div className="flex gap-2"><div className="h-7 w-20 bg-cyan rounded-lg"/><div className="h-7 w-18 border border-cyan rounded-lg"/></div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['bg-cyan-50','bg-blue-50','bg-sky-50'].map((bg,i)=>(
              <div key={i} className={`${bg} rounded-xl p-3`}>
                <div className="w-5 h-5 bg-cyan-200 rounded-lg mx-auto mb-1.5"/>
                <div className="h-1.5 bg-gray-200 rounded-full"/>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            {[80,65,75].map((w,i)=><div key={i} className="h-2 bg-gray-100 rounded-full" style={{width:`${w}%`}}/>)}
          </div>
        </div>
      </div>
    ),
  },
  webshopok: {
    visual: (
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-orange-50 px-4 py-3 flex items-center justify-between border-b border-orange-100">
          <div className="w-16 h-2.5 bg-orange-400 rounded-full"/>
          <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center"><ShoppingCart className="w-3.5 h-3.5 text-white"/></div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            {[['from-blue-400 to-indigo-500','12.900 Ft'],['from-amber-400 to-orange-400','4.900 Ft'],['from-emerald-400 to-teal-500','54.900 Ft'],['from-pink-400 to-rose-500','8.900 Ft']].map(([g,p],i)=>(
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <div className={`bg-gradient-to-br ${g} h-14`}/>
                <div className="p-2"><div className="h-2 bg-gray-200 rounded-full mb-1.5"/><div className="text-[9px] font-bold text-dark">{p}</div></div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-2.5 flex items-center justify-between">
            <div><div className="text-[8px] text-muted">Kosár összesen</div><div className="text-xs font-bold text-dark">17.800 Ft</div></div>
            <div className="bg-orange-400 rounded-lg px-3 py-1.5 text-white text-[9px] font-bold">Rendelés →</div>
          </div>
        </div>
      </div>
    ),
  },
  'facebook-hirdetesek': {
    visual: (
      <div className="relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden p-5">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"/>
        <div className="relative space-y-3">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white text-sm font-display font-bold">Kampány eredmények</span>
            <span className="text-green-400 text-xs font-semibold bg-green-400/10 px-2 py-0.5 rounded-full">↑ +34%</span>
          </div>
          {[{label:'Elérés',val:'12.400',bar:95,color:'bg-blue-400'},{label:'Kattintás',val:'847',bar:68,color:'bg-cyan'},{label:'Érdeklődő',val:'42',bar:42,color:'bg-green-400'}].map(m=>(
            <div key={m.label}>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-gray-400">{m.label}</span>
                <span className="text-white font-bold">{m.val}</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full"><div className={`h-full ${m.color} rounded-full`} style={{width:`${m.bar}%`}}/></div>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] text-gray-400">Kattintás ára</span>
            <span className="text-cyan font-bold text-sm">58 Ft</span>
          </div>
        </div>
      </div>
    ),
  },
}

export function ServicesSection() {
  const [active, setActive] = useState('weboldalak')
  const current = services.find(s => s.id === active)!
  const Icon = icons[current.icon as keyof typeof icons]
  const detail = serviceDetails[active as keyof typeof serviceDetails]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Szolgáltatások</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Minden amire szükséged van</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">Komplex digitális megoldásokat kínálunk kis- és középvállalkozásoknak.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: tabs + info */}
          <div>
            {/* Tab buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
              {services.map(s => {
                const TabIcon = icons[s.icon as keyof typeof icons]
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl font-display font-semibold text-sm transition-all flex-1 ${
                      active === s.id
                        ? 'bg-dark text-white shadow-lg'
                        : 'bg-white text-muted hover:text-dark hover:shadow-sm'
                    }`}
                  >
                    <TabIcon className={`w-4 h-4 ${active === s.id ? 'text-cyan' : ''}`} />
                    {s.title.split(' ')[0]}
                  </button>
                )
              })}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ type: 'spring', stiffness: 350, damping: 32 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan to-blue-400 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-dark">{current.title}</h3>
                </div>
                <p className="text-muted mb-6 leading-relaxed">{current.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {current.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-dark">
                      <div className="w-5 h-5 rounded-full bg-cyan-light flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-cyan" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2 bg-dark text-white font-display font-bold text-sm px-6 py-3 rounded-xl hover:bg-cyan transition-colors"
                >
                  Részletek <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: animated visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-cyan/5 rounded-3xl blur-2xl" />
              <div className="relative">
                {detail.visual}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
