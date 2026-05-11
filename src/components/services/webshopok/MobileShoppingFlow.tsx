'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
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
    { name: 'Prémium sisak',   price: '12.900 Ft', badge: 'Bestseller', gradient: 'from-blue-400 to-indigo-500',   sale: false },
    { name: 'LED lámpa szett', price: '4.900 Ft',  badge: 'Akció',      gradient: 'from-amber-400 to-orange-400',  sale: true  },
    { name: 'Sport kerékpár',  price: '54.900 Ft', badge: 'Új',         gradient: 'from-emerald-400 to-teal-500',  sale: false },
    { name: 'Biztonsági lakat',price: '3.900 Ft',  badge: null,         gradient: 'from-gray-400 to-gray-600',     sale: false },
  ]
  return (
    <div className="w-full h-full bg-gray-50 overflow-hidden flex flex-col">
      {/* Nav */}
      <div className="bg-white px-3 pt-2 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-display font-bold text-dark">CruiserShop</span>
          <div className="relative">
            <ShoppingCart className="w-4 h-4 text-dark"/>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan rounded-full text-[7px] text-white flex items-center justify-center font-bold">2</span>
          </div>
        </div>
        {/* Search bar */}
        <div className="bg-gray-100 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-gray-400 flex-shrink-0"/>
          <span className="text-[9px] text-gray-400">Keresés a termékek között...</span>
        </div>
      </div>
      {/* Category chips */}
      <div className="flex gap-1.5 px-3 py-2 overflow-hidden">
        {['Sisakok','Lámpák','Kerékpár','Kiegészítők'].map((c,i)=>(
          <span key={c} className={`text-[8px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${i===0 ? 'bg-dark text-white' : 'bg-white text-muted border border-gray-200'}`}>{c}</span>
        ))}
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-2 px-3 pb-3 flex-1">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className={`bg-gradient-to-br ${p.gradient} h-16 relative`}>
              {p.badge && (
                <span className={`absolute top-1.5 left-1.5 text-[7px] font-bold px-1.5 py-0.5 rounded-full ${p.badge === 'Akció' ? 'bg-red-500 text-white' : p.badge === 'Új' ? 'bg-green-500 text-white' : 'bg-white/90 text-dark'}`}>
                  {p.badge}
                </span>
              )}
              <Heart className="absolute top-1.5 right-1.5 w-3 h-3 text-white/70"/>
            </div>
            <div className="p-2">
              <div className="text-[9px] font-semibold text-dark leading-tight mb-1">{p.name}</div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-dark">{p.price}</span>
                <div className="w-5 h-5 bg-dark rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] leading-none">+</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductDetail() {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-3 py-2 flex items-center justify-between">
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
          <ChevronLeft className="w-3.5 h-3.5 text-dark"/>
        </div>
        <span className="text-[10px] font-display font-bold text-dark">Termék</span>
        <div className="relative">
          <ShoppingCart className="w-4 h-4 text-dark"/>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan rounded-full text-[7px] text-white flex items-center justify-center font-bold">2</span>
        </div>
      </div>
      {/* Product image */}
      <div className="bg-gradient-to-br from-blue-400 to-indigo-600 mx-3 rounded-2xl h-28 relative mb-3">
        <span className="absolute top-2 left-2 text-[7px] font-bold bg-white/90 text-blue-700 px-1.5 py-0.5 rounded-full">Bestseller</span>
        <div className="absolute bottom-2 right-2 flex gap-1">
          {['bg-blue-300','bg-indigo-300','bg-cyan-300'].map((c,i)=>(
            <div key={i} className={`w-3 h-3 rounded-full ${c} border-2 ${i===0 ? 'border-white' : 'border-transparent'}`}/>
          ))}
        </div>
      </div>
      {/* Info */}
      <div className="px-3 flex-1">
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="text-xs font-display font-bold text-dark">Prémium kerékpár sisak</div>
            <div className="text-[8px] text-muted">CruiserShop · Kerékpár sisakok</div>
          </div>
          <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
            <Heart className="w-3 h-3 text-muted"/>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_,i)=><Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"/>)}
          <span className="text-[8px] text-muted font-medium">4.9 (47 értékelés)</span>
        </div>
        {/* Size selector */}
        <div className="mb-2">
          <div className="text-[8px] text-muted mb-1">Méret</div>
          <div className="flex gap-1">
            {['S','M','L','XL'].map((s,i)=>(
              <div key={s} className={`w-6 h-6 rounded-lg text-[8px] font-bold flex items-center justify-center border ${i===1 ? 'bg-dark text-white border-dark' : 'border-gray-200 text-muted'}`}>{s}</div>
            ))}
          </div>
        </div>
        {/* Price + add */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[8px] text-muted">Ár</div>
            <div className="text-sm font-display font-bold text-dark">12.900 Ft</div>
          </div>
          <div className="bg-gradient-to-r from-cyan to-blue-400 rounded-xl px-4 py-2 text-white text-[9px] font-display font-bold flex items-center gap-1.5">
            <ShoppingCart className="w-3 h-3"/> Kosárba
          </div>
        </div>
      </div>
    </div>
  )
}

function CartView() {
  return (
    <div className="w-full h-full bg-gray-50 overflow-hidden flex flex-col">
      <div className="bg-white px-3 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <span className="text-[11px] font-display font-bold text-dark">Kosaram</span>
        <span className="text-[8px] bg-cyan-light text-cyan font-bold px-2 py-0.5 rounded-full">2 termék</span>
      </div>
      {/* Free shipping progress */}
      <div className="bg-white mx-3 mt-3 rounded-2xl p-3 mb-2">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[8px] text-muted">Szabad szállításig még:</span>
          <span className="text-[8px] font-bold text-green-600">12.200 Ft</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan to-green-400 rounded-full" style={{width:'59%'}}/>
        </div>
      </div>
      {/* Items */}
      <div className="px-3 space-y-2 flex-1">
        {[
          { gradient: 'from-blue-400 to-indigo-500', name: 'Prémium kerékpár sisak', variant: 'M méret', price: '12.900 Ft' },
          { gradient: 'from-amber-400 to-orange-400', name: 'LED lámpa szett', variant: '800 lumen', price: '4.900 Ft' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-2.5 flex items-center gap-2.5 shadow-sm">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex-shrink-0`}/>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-semibold text-dark truncate">{item.name}</div>
              <div className="text-[8px] text-muted">{item.variant}</div>
              <div className="text-[9px] font-bold text-dark mt-0.5">{item.price}</div>
            </div>
            <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
              <span className="text-[9px] w-4 text-center text-muted font-bold">−</span>
              <span className="text-[9px] w-3 text-center font-bold text-dark">1</span>
              <span className="text-[9px] w-4 text-center text-muted font-bold">+</span>
            </div>
          </div>
        ))}
      </div>
      {/* Summary */}
      <div className="bg-white mx-3 mb-3 mt-2 rounded-2xl p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] text-muted">Részösszeg</span>
          <span className="text-[9px] font-semibold text-dark">17.800 Ft</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] text-muted">Szállítás</span>
          <span className="text-[9px] font-semibold text-orange-500">+ 990 Ft</span>
        </div>
        <div className="bg-gradient-to-r from-cyan to-blue-400 rounded-xl py-2 text-center text-white text-[9px] font-display font-bold">
          Megrendelés → 18.790 Ft
        </div>
      </div>
    </div>
  )
}

function PaymentView() {
  return (
    <div className="w-full h-full bg-gray-50 overflow-hidden flex flex-col">
      <div className="bg-white px-3 py-2.5 border-b border-gray-100">
        <span className="text-[11px] font-display font-bold text-dark">Fizetés</span>
      </div>
      <div className="p-3 space-y-2 flex-1">
        {/* Credit card visual */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] text-white/60">SimplePay</span>
            <div className="flex gap-1">
              <div className="w-5 h-3 bg-orange-400 rounded opacity-90"/>
              <div className="w-5 h-3 bg-red-500 rounded -ml-2 opacity-70"/>
            </div>
          </div>
          <div className="text-[9px] font-mono tracking-widest text-white/80 mb-2">•••• •••• •••• 4821</div>
          <div className="flex justify-between">
            <div>
              <div className="text-[7px] text-white/50">Kártyabirtokos</div>
              <div className="text-[8px] font-semibold">KOVÁCS JÁNOS</div>
            </div>
            <div>
              <div className="text-[7px] text-white/50">Lejárat</div>
              <div className="text-[8px] font-semibold">09/27</div>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="bg-white rounded-2xl p-2.5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[8px] text-muted">Szállítási cím</div>
              <div className="text-[9px] font-semibold text-dark">6000 Kecskemét, Fő u. 12.</div>
            </div>
            <span className="text-[8px] text-cyan font-semibold">Módosít</span>
          </div>
        </div>
        {/* Order summary */}
        <div className="bg-white rounded-2xl p-2.5">
          <div className="text-[8px] text-muted mb-1.5">Rendelés összesítő</div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-muted">2 termék + szállítás</span>
            <span className="text-[9px] font-display font-bold text-dark">18.790 Ft</span>
          </div>
        </div>
      </div>
      <div className="px-3 pb-3">
        <div className="bg-gradient-to-r from-cyan to-blue-500 rounded-2xl py-3 text-center text-white text-[10px] font-display font-bold flex items-center justify-center gap-1.5 shadow-lg">
          <div className="w-3 h-3 rounded-full border border-white/50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"/>
          </div>
          Biztonságos fizetés · 18.790 Ft
        </div>
      </div>
    </div>
  )
}

function SuccessView() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      {/* Top gradient */}
      <div className="bg-gradient-to-br from-green-400 to-emerald-500 px-4 pt-4 pb-6 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg"
        >
          <Check className="w-7 h-7 text-green-500" strokeWidth={3}/>
        </motion.div>
        <div className="text-white font-display font-bold text-sm mb-0.5">Siker! 🎉</div>
        <div className="text-white/80 text-[9px]">Köszönjük a vásárlást!</div>
      </div>
      {/* Order info */}
      <div className="bg-white flex-1 px-3 pt-4 space-y-2">
        <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
          <span className="text-[9px] text-muted">Rendelési szám</span>
          <span className="text-[9px] font-display font-bold text-dark">#4822</span>
        </div>
        {/* Tracking steps */}
        <div className="p-2.5 bg-gray-50 rounded-xl">
          <div className="text-[8px] text-muted mb-2">Követési állapot</div>
          <div className="space-y-2">
            {[
              { label: 'Rendelés elfogadva', done: true },
              { label: 'Feldolgozás alatt', done: true },
              { label: 'Átadva futárnak', done: false },
              { label: 'Kézbesítve', done: false },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 flex items-center justify-center ${s.done ? 'bg-green-500' : 'bg-gray-200'}`}>
                  {s.done && <Check className="w-2 h-2 text-white" strokeWidth={3}/>}
                </div>
                <span className={`text-[8px] ${s.done ? 'text-dark font-semibold' : 'text-muted'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-[8px] text-muted">Visszaigazolás elküldve · kovacs@email.hu</div>
      </div>
    </div>
  )
}

const screens = [ProductList, ProductDetail, CartView, PaymentView, SuccessView]

export function MobileShoppingFlow() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(true)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: '-10%' })

  useEffect(() => {
    if (!auto || !isInView) return
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % screens.length)
    }, 2800)
    return () => clearInterval(t)
  }, [auto, isInView])

  const Screen = screens[current]

  return (
    <div ref={containerRef} className="flex flex-col lg:flex-row items-center gap-10">
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
