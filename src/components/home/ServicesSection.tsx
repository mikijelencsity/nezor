'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import NextLink from 'next/link'
import { ArrowRight, TrendingDown, TrendingUp, X, Check, Monitor, ShoppingCart, AlertCircle, Zap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    id: 'weboldalak',
    icon: Monitor,
    label: 'Weboldal',
    href: '/weboldalak',
    problem: {
      title: 'Weboldal nélkül...',
      bg: 'bg-red-50',
      border: 'border-red-100',
      items: [
        { icon: X, text: 'Google-on nem találnak rád', color: 'text-red-500' },
        { icon: X, text: '0 online érdeklődő havonta', color: 'text-red-500' },
        { icon: X, text: 'Konkurensek elvisznek', color: 'text-red-500' },
        { icon: X, text: 'Nem hiteles a vállalkozás', color: 'text-red-500' },
      ],
      visual: (
        <div className="bg-white rounded-xl p-3 border border-red-100 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted">Havi látogatók</span>
            <span className="text-red-500 font-bold text-sm">0</span>
          </div>
          <div className="h-10 flex items-end gap-1">
            {[2,1,3,1,2,1,2,1].map((h,i) => (
              <div key={i} className="flex-1 bg-red-100 rounded-sm" style={{height: h*4}} />
            ))}
          </div>
          <div className="flex items-center gap-1 text-red-400 text-[10px]">
            <TrendingDown className="w-3 h-3" /> Nincs organikus forgalom
          </div>
        </div>
      ),
    },
    solution: {
      title: 'NEZOR weboldaladdal',
      bg: 'bg-cyan-light',
      border: 'border-cyan/20',
      items: [
        { icon: Check, text: 'Google 1. oldal találatok', color: 'text-cyan' },
        { icon: Check, text: '+2.400 látogató havonta', color: 'text-cyan' },
        { icon: Check, text: 'Konkurencia előtt jársz', color: 'text-cyan' },
        { icon: Check, text: 'Professzionális megjelenés', color: 'text-cyan' },
      ],
      visual: (
        <div className="bg-white rounded-xl p-3 border border-cyan/20 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted">Havi látogatók</span>
            <span className="text-cyan font-bold text-sm">+2.400</span>
          </div>
          <div className="h-10 flex items-end gap-1">
            {[2,3,4,5,6,7,8,10].map((h,i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-cyan to-blue-300 rounded-sm" style={{height: h*3.5}} />
            ))}
          </div>
          <div className="flex items-center gap-1 text-cyan text-[10px]">
            <TrendingUp className="w-3 h-3" /> Folyamatos növekedés
          </div>
        </div>
      ),
    },
  },
  {
    id: 'webshopok',
    icon: ShoppingCart,
    label: 'Webshop',
    href: '/webshopok',
    problem: {
      title: 'Webshop nélkül...',
      bg: 'bg-orange-50',
      border: 'border-orange-100',
      items: [
        { icon: X, text: 'Csak nyitvatartás alatt árulsz', color: 'text-orange-500' },
        { icon: X, text: 'Elveszett vásárlók', color: 'text-orange-500' },
        { icon: X, text: 'Korlátozott piac', color: 'text-orange-500' },
        { icon: X, text: 'Nincs passzív bevétel', color: 'text-orange-500' },
      ],
      visual: (
        <div className="bg-white rounded-xl p-3 border border-orange-100">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-orange-400" />
            <span className="text-[10px] font-semibold text-orange-500">0 rendelés ma</span>
          </div>
          <div className="space-y-1.5">
            {['Bolt zárva', 'Nincs online fizetés', 'Nincs szállítás'].map(t => (
              <div key={t} className="flex items-center gap-2 bg-orange-50 rounded-lg px-2 py-1">
                <X className="w-3 h-3 text-orange-400 flex-shrink-0" />
                <span className="text-[9px] text-orange-600">{t}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    solution: {
      title: 'NEZOR webshoppal',
      bg: 'bg-green-50',
      border: 'border-green-200',
      items: [
        { icon: Check, text: '0-24h nyitva, automatikusan', color: 'text-green-600' },
        { icon: Check, text: 'SimplePay, Barion beépítve', color: 'text-green-600' },
        { icon: Check, text: 'Egész Magyarország a piacod', color: 'text-green-600' },
        { icon: Check, text: 'Alvás közben is rendelnek', color: 'text-green-600' },
      ],
      visual: (
        <div className="bg-white rounded-xl p-3 border border-green-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted">Mai bevétel</span>
            <span className="text-green-600 font-bold text-sm">+124.900 Ft</span>
          </div>
          <div className="space-y-1.5">
            {[
              { t: 'Kerékpár sisak', p: '12.900 Ft', c: 'bg-blue-50' },
              { t: 'LED lámpa szett', p: '4.900 Ft', c: 'bg-amber-50' },
              { t: 'Sport kerékpár', p: '54.900 Ft', c: 'bg-green-50' },
            ].map(o => (
              <div key={o.t} className={`flex items-center justify-between ${o.c} rounded-lg px-2 py-1`}>
                <span className="text-[9px] text-dark font-medium">{o.t}</span>
                <span className="text-[9px] font-bold text-green-600">{o.p}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  },
  {
    id: 'facebook-hirdetesek',
    icon: Zap,
    label: 'Facebook hirdetés',
    href: '/facebook-hirdetesek',
    problem: {
      title: 'Rosszul beállított hirdetés',
      bg: 'bg-red-50',
      border: 'border-red-100',
      items: [
        { icon: X, text: 'Magas kattintásköltség (350 Ft)', color: 'text-red-500' },
        { icon: X, text: '0.4% CTR — pénz az ablakon', color: 'text-red-500' },
        { icon: X, text: 'Rossz célközönség', color: 'text-red-500' },
        { icon: X, text: 'Nincs optimalizálás', color: 'text-red-500' },
      ],
      visual: (
        <div className="bg-white rounded-xl p-3 border border-red-100 space-y-2">
          <div className="text-[10px] font-semibold text-red-500 mb-1">Kampány teljesítmény</div>
          {[
            { l: 'CTR', v: '0.4%', w: 8, c: 'bg-red-300' },
            { l: 'CPC', v: '350 Ft', w: 70, c: 'bg-red-200' },
            { l: 'Lead', v: '3 db', w: 15, c: 'bg-red-300' },
          ].map(m => (
            <div key={m.l}>
              <div className="flex justify-between text-[9px] mb-0.5">
                <span className="text-muted">{m.l}</span>
                <span className="font-bold text-red-500">{m.v}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div className={`h-full ${m.c} rounded-full`} style={{ width: `${m.w}%` }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    solution: {
      title: 'NEZOR kezeléssel',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      items: [
        { icon: Check, text: 'Alacsony kattintásköltség (58 Ft)', color: 'text-blue-600' },
        { icon: Check, text: '3.8% CTR — pontos célzás', color: 'text-blue-600' },
        { icon: Check, text: 'Bács-Kiskun + egész ország', color: 'text-blue-600' },
        { icon: Check, text: 'Napi optimalizálás', color: 'text-blue-600' },
      ],
      visual: (
        <div className="bg-white rounded-xl p-3 border border-blue-200 space-y-2">
          <div className="text-[10px] font-semibold text-blue-600 mb-1">Kampány teljesítmény</div>
          {[
            { l: 'CTR', v: '3.8%', w: 76, c: 'bg-gradient-to-r from-cyan to-blue-400' },
            { l: 'CPC', v: '58 Ft', w: 18, c: 'bg-gradient-to-r from-cyan to-blue-400' },
            { l: 'Lead', v: '42 db', w: 84, c: 'bg-gradient-to-r from-cyan to-blue-400' },
          ].map(m => (
            <div key={m.l}>
              <div className="flex justify-between text-[9px] mb-0.5">
                <span className="text-muted">{m.l}</span>
                <span className="font-bold text-blue-600">{m.v}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div className={`h-full ${m.c} rounded-full`} style={{ width: `${m.w}%` }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
  },
]

function ServicePair({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 280, damping: 28, delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100"
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-4 border-b border-gray-50 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan to-blue-400 rounded-xl flex items-center justify-center">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <span className="font-display font-bold text-dark">{service.label}</span>
        <NextLink
          href={service.href}
          className="ml-auto text-xs text-cyan font-semibold flex items-center gap-1 hover:gap-2 transition-all"
        >
          Részletek <ArrowRight className="w-3 h-3" />
        </NextLink>
      </div>

      {/* Problem / Solution columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Problem */}
        <div className={`p-5 ${service.problem.bg} border-r border-gray-100`}>
          <div className="flex items-center gap-2 mb-3">
            <X className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span className="text-xs font-display font-bold text-red-500">{service.problem.title}</span>
          </div>
          <ul className="space-y-1.5 mb-4">
            {service.problem.items.map(item => {
              const ItemIcon = item.icon
              return (
                <li key={item.text} className="flex items-center gap-2 text-[11px] text-dark">
                  <ItemIcon className={`w-3 h-3 ${item.color} flex-shrink-0`} />
                  {item.text}
                </li>
              )
            })}
          </ul>
          {service.problem.visual}
        </div>

        {/* Solution */}
        <div className={`p-5 ${service.solution.bg}`}>
          <div className="flex items-center gap-2 mb-3">
            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-xs font-display font-bold text-green-600">{service.solution.title}</span>
          </div>
          <ul className="space-y-1.5 mb-4">
            {service.solution.items.map(item => {
              const ItemIcon = item.icon
              return (
                <li key={item.text} className="flex items-center gap-2 text-[11px] text-dark">
                  <ItemIcon className={`w-3 h-3 ${item.color} flex-shrink-0`} />
                  {item.text}
                </li>
              )
            })}
          </ul>
          {service.solution.visual}
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="text-center mb-10"
        >
          <SectionHeading
            label="Szolgáltatások"
            title="Így hozunk neked több ügyfelet."
            description="Válassz szolgáltatást és nézd meg pontosan mit jelent a vállalkozásodnak."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {services.map((s, i) => <ServicePair key={s.id} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
