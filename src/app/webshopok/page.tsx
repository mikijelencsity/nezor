import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { AnimatedTimeline } from '@/components/ui/AnimatedTimeline'
import { WebshopokFeatures } from '@/components/services/WebshopokFeatures'
import { FAQItem } from '@/types'
import {
  ShoppingCart, ArrowRight, CheckCircle, Zap, Star, Shield
} from 'lucide-react'
import { WebshopokVisual } from '@/components/services/WebshopokVisual'

const RevenueDashboard = dynamic(
  () => import('@/components/services/webshopok/RevenueDashboard').then(m => ({ default: m.RevenueDashboard })),
  { loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-3xl" />, ssr: false }
)
const MobileShoppingFlow = dynamic(
  () => import('@/components/services/webshopok/MobileShoppingFlow').then(m => ({ default: m.MobileShoppingFlow })),
  { loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-3xl" />, ssr: false }
)

export const metadata: Metadata = {
  title: 'Webshop fejlesztés Magyarország — NEZOR',
  description: 'Professzionális webshop készítés fizetési rendszerrel, rendeléskezelővel. Egyszeri díjas és havidíjas megoldások. Ingyenes ajánlat!',
  openGraph: {
    title: 'Webshop fejlesztés Magyarország — NEZOR',
    description: 'Professzionális webshop készítés fizetési rendszerrel, rendeléskezelővel.',
    url: 'https://nezor.hu/webshopok',
  },
}

const steps = [
  { number: '01', title: 'Konzultáció',          description: 'Felmérjük az igényeket: termékek, fizetési mód, szállítás, funkcionalitás.' },
  { number: '02', title: 'Tervezés',             description: 'Design és funkcionális terv, amit te jóváhagysz.' },
  { number: '03', title: 'Fejlesztés',           description: 'Webshop felépítése, fizetési rendszer integráció, tesztelés.' },
  { number: '04', title: 'Átadás & betanítás',  description: 'Átadás, termékfeltöltési betanítás, folyamatos support.' },
]

const faq: FAQItem[] = [
  { question: 'Milyen fizetési rendszereket építetek be?', answer: 'SimplePay, Barion, PayPal, bankkártya és utánvét — az igényednek megfelelőt választjuk ki.' },
  { question: 'Kezeli a rendszer a készletet is?', answer: 'Igen, automatikus raktárkezelés és értesítések is beépíthetők.' },
  { question: 'Hogyan kezeli a rendszer a számlákat?', answer: 'Integrálható automatikus számlázó rendszerekkel (pl. Számlázz.hu, Billingo).' },
  { question: 'Mennyi terméket kezel a webshop?', answer: 'Csomagtól függően 100 terméktől korlátlan mennyiségig skálázható.' },
]

const guarantees = [
  { icon: Zap,    title: 'Gyors indulás',      text: 'A webshopod 2-4 héten belül készen áll az első rendelések fogadására.' },
  { icon: Star,   title: 'Betanítás',           text: 'Megtanítunk mindent a termékfeltöltéstől a rendelések kezeléséig.' },
  { icon: Shield, title: 'Biztonságos fizetés', text: 'PCI-DSS kompatibilis fizetési megoldások, SSL titkosítás.' },
]

export default function WebshopokPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-orange-100/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 bg-orange-50 text-orange-500 text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-6">
                <ShoppingCart className="w-3.5 h-3.5" />
                Webshop fejlesztés
              </div>
              <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark leading-tight mb-6">
                Online bolt, ami<br />
                <span className="text-gradient">valóban elad</span>
              </h1>
              <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-2xl">
                Webshop készítés fizetési rendszerrel, rendeléskezelővel és automatikus számlázással — egész Magyarországon.
              </p>
              <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-10">
                <Button href="/kapcsolat" size="lg" className="glow-pulse">
                  Ingyenes ajánlat kérése <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button href="/csomagok" variant="outline" size="lg">Csomagok megtekintése</Button>
              </div>
              <div className="animate-fade-up-delay-4 flex flex-wrap gap-6">
                {[{ v: 'SimplePay', l: 'Fizetés' }, { v: 'GLS & DPD', l: 'Szállítás' }, { v: 'GDPR', l: 'Kompatibilis' }].map(h => (
                  <div key={h.l} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan" />
                    <span className="font-display font-bold text-dark">{h.v}</span>
                    <span className="text-sm text-muted">{h.l}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: visual */}
            <WebshopokVisual />
          </div>
        </div>
      </section>

      {/* ── MOBILE SHOPPING FLOW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MobileShoppingFlow />
        </div>
      </section>

      {/* ── REVENUE DASHBOARD ── */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Admin felület"
            title="Minden a kezedben van"
            description="Könnyen kezelhető admin panel — termékek, rendelések, bevételek egy helyen."
          />
          <RevenueDashboard />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Mit kapsz" title="Teljes webshop megoldás" description="Mindent egyben — nem kell külön fizetési rendszert, szállítást vagy számlázót keresned." />
          <WebshopokFeatures />
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading label="Folyamat" title="Hogyan dolgozunk?" centered={false} />
              <AnimatedTimeline steps={steps} />
            </div>
            <div className="space-y-6 pt-4 lg:pt-16">
              {guarantees.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4 p-5 bg-white rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-blue-400 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-white" /></div>
                    <div><div className="font-display font-bold text-dark mb-1">{item.title}</div><div className="text-sm text-muted">{item.text}</div></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="GYIK" title="Kérdések a webshopról" />
          <FAQAccordion items={faq} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Indítsuk el a webshopod!</h2>
          <p className="text-gray-400 mb-8">Az első konzultáció ingyenes és kötelezettség nélküli.</p>
          <Button href="/kapcsolat" size="lg">Ajánlatot kérek <ArrowRight className="ml-2 w-5 h-5" /></Button>
        </div>
      </section>
    </div>
  )
}
