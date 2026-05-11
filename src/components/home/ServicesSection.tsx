'use client'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Check, Monitor, ShoppingCart, TrendingUp } from 'lucide-react'
import { WeboldalakVisual } from '@/components/services/WeboldalakVisual'
import { WebshopokVisual } from '@/components/services/WebshopokVisual'
import { FacebookVisual } from '@/components/services/FacebookVisual'

const serviceData = [
  {
    id: 'weboldalak',
    icon: Monitor,
    badge: 'Weboldal készítés',
    badgeColor: 'bg-cyan-light text-cyan',
    title: 'Modern weboldalak, amelyek ügyfeleket hoznak',
    description: 'Gyors, mobilra optimalizált, SEO-barát weboldalak kis- és középvállalkozásoknak — Bács-Kiskun megyétől az egész országig.',
    features: ['Mobilra 100% optimalizált', 'SEO + Google Analytics', 'Gyors betöltés (<1s)', 'SSL tanúsítvány', 'Egyedi design'],
    href: '/weboldalak',
    cta: 'Weboldalak részletei',
    visual: WeboldalakVisual,
    visualLeft: false,
    bg: 'bg-white',
  },
  {
    id: 'webshopok',
    icon: ShoppingCart,
    badge: 'Webshop fejlesztés',
    badgeColor: 'bg-orange-50 text-orange-500',
    title: 'Online bolt, ami valóban elad',
    description: 'Teljes e-kereskedelmi megoldás fizetési rendszerrel, rendeléskezelővel és automatikus számlázással — egész Magyarországon.',
    features: ['SimplePay, Barion, PayPal', 'GLS & DPD szállítás', 'Automatikus számlázás', 'Raktárkezelő', 'Kupon & akciók'],
    href: '/webshopok',
    cta: 'Webshopok részletei',
    visual: WebshopokVisual,
    visualLeft: true,
    bg: 'bg-secondary',
  },
  {
    id: 'facebook-hirdetesek',
    icon: TrendingUp,
    badge: 'Facebook hirdetések',
    badgeColor: 'bg-blue-50 text-blue-500',
    title: 'Célzott hirdetések, valódi ügyfelek',
    description: 'Meta kampányok amelyek elérik a potenciális vevőidet — Bács-Kiskun megyétől az egész országig. Napi optimalizálás, havi riport.',
    features: ['Precíz célzás', 'A/B tesztelés', 'Napi optimalizálás', 'Facebook + Instagram', 'Havi riport'],
    href: '/facebook-hirdetesek',
    cta: 'Hirdetések részletei',
    visual: FacebookVisual,
    visualLeft: false,
    bg: 'bg-white',
  },
]

function ServiceRow({ service, index }: { service: typeof serviceData[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Visual = service.visual
  const Icon = service.icon

  const textContent = (
    <motion.div
      initial={{ opacity: 0, x: service.visualLeft ? 32 : -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: 'spring', stiffness: 280, damping: 28, delay: 0.1 }}
    >
      <span className={`inline-flex items-center gap-2 text-xs font-display font-bold px-3 py-1.5 rounded-full mb-5 ${service.badgeColor}`}>
        <Icon className="w-3.5 h-3.5" />
        {service.badge}
      </span>
      <h3 className="text-2xl md:text-3xl font-display font-bold text-dark mb-4 leading-tight">
        {service.title}
      </h3>
      <p className="text-muted mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-2.5 mb-8">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-3 text-sm text-dark">
            <div className="w-5 h-5 rounded-full bg-cyan-light flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-cyan" />
            </div>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={service.href}
        className="inline-flex items-center gap-2 bg-dark text-white font-display font-bold text-sm px-6 py-3 rounded-xl hover:bg-cyan transition-colors"
      >
        {service.cta} <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )

  const visualContent = (
    <motion.div
      initial={{ opacity: 0, x: service.visualLeft ? -32 : 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: 'spring', stiffness: 280, damping: 28, delay: 0.2 }}
    >
      <Visual />
    </motion.div>
  )

  return (
    <div ref={ref} className={`py-20 ${service.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {service.visualLeft ? (
            <>
              {visualContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {visualContent}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 text-center">
        <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Szolgáltatások</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Minden amire szükséged van</h2>
        <p className="text-muted mt-3 max-w-xl mx-auto">Komplex digitális megoldásokat kínálunk kis- és középvállalkozásoknak.</p>
      </div>
      {serviceData.map((s, i) => <ServiceRow key={s.id} service={s} index={i} />)}
    </section>
  )
}
