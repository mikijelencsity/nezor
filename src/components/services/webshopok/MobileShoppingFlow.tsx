'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Heart, Star, ChevronLeft, Check } from 'lucide-react'

const steps = [
  { label: 'Termékek',   desc: 'Böngészés' },
  { label: 'Részletek',  desc: 'Kiválasztás' },
  { label: 'Kosár',      desc: 'Áttekintés' },
  { label: 'Fizetés',    desc: 'Checkout' },
  { label: 'Siker!',     desc: 'Visszaigazolás' },
]

function ProductList() {
  const products = [
    { name: 'Kerékpár sisak',  price: '12.900 Ft', color: 'bg-blue-100',   emoji: '🪖' },
    { name: 'Kerékpár lámpa',  price: '4.900 Ft',  color: 'bg-yellow-100', emoji: '💡' },
    { name: 'Gyerek kerékpár', price: '54.900 Ft', color: 'bg-green-100',  emoji: '🚲' },
    { name: 'Kerékpár lakat',  price: '3.900 Ft',  color: 'bg-red-100',    emoji: '🔒' },
  ]
  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <div className="bg-white px-3 py-2 border-b border-gray-100 flex items-center justify-between">
        <span className="text-[10px] font-display font-bold text-dark">Kerékpár shop</span>
        <div className="relative"><ShoppingCart className="w-4 h-4 text-dark"/><span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan rounded-full text-[7px] text-white flex items-center justify-center">2</span></div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
            <div className={`${p.color} h-14 flex items-center justify-center text-2xl`}>{p.emoji}</div>
            <div className="p-2">
              <div className="text-[9px] font-semibold text-dark leading-tight mb-0.5">{p.name}</div>
              <div className="text-[9px] font-bold text-cyan">{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductDetail() {
  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <div className="bg-white px-3 py-2 border-b border-gray-100 flex items-center gap-2">
        <ChevronLeft className="w-3.5 h-3.5 text-muted"/>
        <span className="text-[10px] font-display font-bold text-dark">Termék részletek</span>
      </div>
      <div className="bg-blue-50 h-24 flex items-center justify-center text-5xl">🪖</div>
      <div className="px-3 py-2">
        <div className="flex items-start justify-between mb-1">
          <div className="text-xs font-bold text-dark">Kerékpár sisak Pro</div>
          <Heart className="w-3.5 h-3.5 text-muted"/>
        </div>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_,i)=><Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"/>)}
          <span className="text-[8px] text-muted">(47)</span>
        </div>
        <div className="text-base font-display font-bold text-cyan mb-2">12.900 Ft</div>
        <div className="space-y-1 mb-3">
          {['Állítható méret: S-XL', 'CE tanúsított', 'Szabad szállítás 30.000 Ft felett'].map((f,i)=>(
            <div key={i} className="flex items-center gap-1 text-[8px] text-muted">
              <Check className="w-2.5 h-2.5 text-green-500"/>{f}
            </div>
          ))}
        </div>
        <div className="bg-cyan rounded-xl py-2 text-center text-white text-[10px] font-display font-bold">
          Kosárba
        </div>
      </div>
    </div>
  )
}

function CartView() {
  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <div className="bg-white px-3 py-2 border-b border-gray-100 flex items-center gap-2">
        <ShoppingCart className="w-3.5 h-3.5 text-cyan"/>
        <span className="text-[10px] font-display font-bold text-dark">Kosaram (2)</span>
      </div>
      <div className="p-3 space-y-2">
        {[
          { emoji: '🪖', name: 'Kerékpár sisak Pro', price: '12.900 Ft' },
          { emoji: '💡', name: 'Kerékpár lámpa LED', price: '4.900 Ft'  },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-lg">{item.emoji}</div>
            <div className="flex-1">
              <div className="text-[9px] font-semibold text-dark">{item.name}</div>
              <div className="text-[9px] font-bold text-cyan">{item.price}</div>
            </div>
          </div>
        ))}
        <div className="border-t border-gray-100 pt-2 flex items-center justify-between">
          <span className="text-[9px] text-muted">Összesen:</span>
          <span className="text-xs font-display font-bold text-dark">17.800 Ft</span>
        </div>
        <div className="bg-cyan rounded-xl py-2 text-center text-white text-[10px] font-display font-bold">
          Tovább a fizetéshez →
        </div>
      </div>
    </div>
  )
}

function PaymentView() {
  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <div className="bg-white px-3 py-2 border-b border-gray-100">
        <span className="text-[10px] font-display font-bold text-dark">Fizetés</span>
      </div>
      <div className="p-3 space-y-2">
        <div className="bg-gray-50 rounded-xl p-2">
          <div className="text-[8px] text-muted mb-1">Szállítási cím</div>
          <div className="text-[9px] font-semibold text-dark">Kovács János, Kecskemét</div>
          <div className="text-[8px] text-muted">6000 Kecskemét, Fő u. 12.</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-2">
          <div className="text-[8px] text-muted mb-1.5">Fizetési mód</div>
          <div className="grid grid-cols-3 gap-1">
            {['SimplePay', 'Barion', 'Utánvét'].map((m, i) => (
              <div key={m} className={`text-center py-1.5 rounded-lg text-[8px] font-semibold border ${i===0 ? 'border-cyan bg-cyan-light text-cyan' : 'border-gray-200 text-muted'}`}>{m}</div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-1">
          <span className="text-[9px] text-muted">Fizetendő:</span>
          <span className="text-xs font-display font-bold text-dark">17.800 Ft</span>
        </div>
        <div className="bg-gradient-to-r from-cyan to-blue-400 rounded-xl py-2 text-center text-white text-[10px] font-display font-bold">
          Fizetés most 🔒
        </div>
      </div>
    </div>
  )
}

function SuccessView() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3"
      >
        <Check className="w-8 h-8 text-green-600" />
      </motion.div>
      <div className="text-xs font-display font-bold text-dark mb-1 text-center">Rendelés leadva!</div>
      <div className="text-[9px] text-muted text-center mb-3">Visszaigazolást küldtünk e-mailben</div>
      <div className="bg-gray-50 rounded-xl p-3 w-full text-center">
        <div className="text-[8px] text-muted">Rendelési szám</div>
        <div className="text-[11px] font-display font-bold text-dark">#4822</div>
        <div className="text-[8px] text-muted mt-1">Várható kézbesítés: 2-3 munkanap</div>
      </div>
    </div>
  )
}

const screens = [ProductList, ProductDetail, CartView, PaymentView, SuccessView]

export function MobileShoppingFlow() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % screens.length)
    }, 2800)
    return () => clearInterval(t)
  }, [auto])

  const Screen = screens[current]

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      {/* Phone */}
      <div className="flex-shrink-0 relative" style={{ filter: 'drop-shadow(0 32px 48px rgba(0,0,0,0.25))' }}>
        <div className="absolute -inset-6 bg-cyan/8 rounded-full blur-3xl" />
        <div className="relative w-52 bg-gray-900 rounded-[2.5rem] overflow-hidden border-4 border-gray-800">
          {/* Dynamic Island */}
          <div className="h-7 bg-gray-900 flex items-center justify-center">
            <div className="w-16 h-3.5 bg-black rounded-full" />
          </div>
          {/* Screen */}
          <div className="relative overflow-hidden" style={{ height: 380 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                className="absolute inset-0"
              >
                <Screen />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Bottom bar */}
          <div className="h-6 bg-gray-900 flex items-center justify-center">
            <div className="w-20 h-1 bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right: steps + description */}
      <div className="flex-1">
        <h3 className="text-2xl font-display font-bold text-dark mb-2">
          Zökkenőmentes mobilos<br />
          <span className="text-gradient">vásárlási élmény</span>
        </h3>
        <p className="text-muted mb-6 text-sm leading-relaxed">
          Vásárlóid 70%-a telefonon böngész. A mi webshopjaink mobilra optimalizálva érkeznek — gyors, intuitív, konvertáló.
        </p>

        {/* Step indicators */}
        <div className="space-y-2">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setAuto(false) }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                current === i ? 'bg-cyan-light border border-cyan/30' : 'bg-secondary hover:bg-gray-100'
              }`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-bold flex-shrink-0 ${
                current === i ? 'bg-cyan text-white' : 'bg-gray-200 text-muted'
              }`}>
                {i + 1}
              </div>
              <div>
                <div className={`text-sm font-display font-bold ${current === i ? 'text-cyan' : 'text-dark'}`}>{step.label}</div>
                <div className="text-[10px] text-muted">{step.desc}</div>
              </div>
              {current === i && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan"
                />
              )}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-muted mt-3">Kattints bármelyik lépésre a megtekintéshez</p>
      </div>
    </div>
  )
}
