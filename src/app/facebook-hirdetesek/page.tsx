import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { AnimatedTimeline } from '@/components/ui/AnimatedTimeline'
import { FacebookFeatures } from '@/components/services/FacebookFeatures'
import { FAQItem } from '@/types'
import {
  Target, ArrowRight, CheckCircle, Zap, Star, Shield
} from 'lucide-react'
import { FacebookVisual } from '@/components/services/FacebookVisual'

export const metadata: Metadata = {
  title: 'Facebook hirdetés kezelés Magyarország — NEZOR',
  description: 'Professzionális Facebook és Instagram hirdetés kezelés. Célzott Meta kampányok kis- és középvállalkozásoknak egész Magyarországon.',
  openGraph: {
    title: 'Facebook hirdetés kezelés Magyarország — NEZOR',
    description: 'Célzott Meta kampányok kis- és középvállalkozásoknak.',
    url: 'https://nezor.hu/facebook-hirdetesek',
  },
}

const steps = [
  { number: '01', title: 'Célcsoport meghatározás', description: 'Közösen meghatározzuk ki a legjobb célközönséged — életkor, helyszín, érdeklődés szerint.' },
  { number: '02', title: 'Kampány tervezés',         description: 'Elkészítjük a hirdetési stratégiát, szövegeket és vizuálokat.' },
  { number: '03', title: 'Indítás & optimalizálás', description: 'Futtatjuk a kampányt, naponta monitorozzuk és finomítjuk az eredmények alapján.' },
  { number: '04', title: 'Havi riport',              description: 'Részletes összefoglalót küldünk az elért eredményekről.' },
]

const faq: FAQItem[] = [
  { question: 'Mekkora büdzsével érdemes elkezdeni?', answer: 'Napi 1000-2000 Ft-tal már érdemi eredményeket lehet elérni helyi célzással.' },
  { question: 'Mennyi idő alatt látszanak az eredmények?', answer: 'Az első eredmények 1-2 héten belül láthatók. Az optimalizálás folyamatos.' },
  { question: 'Instagram hirdetéseket is csináltok?', answer: 'Igen, a Meta rendszere Facebook-ot és Instagramot is lefed, mindkettőre optimalizálunk.' },
  { question: 'Kapok-e riportot az eredményekről?', answer: 'Igen, minden hónapban részletes riportot küldünk az elért eredményekről.' },
]

const guarantees = [
  { icon: Zap,    title: 'Gyors eredmények',     text: 'Napi 1000-2000 Ft-tal is érdemi eredmény érhető el már az első hétben.' },
  { icon: Star,   title: 'Tapasztalt kezelés',   text: 'Különböző iparágakban szerzett tapasztalattal optimalizáljuk a kampányod.' },
  { icon: Shield, title: 'Átlátható riportálás', text: 'Minden forintot számon tartunk — pontosan látod mire megy a büdzsé.' },
]

export default function FacebookHirdetesekPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-blue-100/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 bg-blue-50 text-blue-500 text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-6">
                <Target className="w-3.5 h-3.5" />
                Facebook & Instagram hirdetések
              </div>
              <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark leading-tight mb-6">
                Célzott hirdetések,<br /><span className="text-gradient">valódi ügyfelek</span>
              </h1>
              <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-2xl">
                Facebook hirdetés kezelés és Meta kampányok, amelyek elérik a potenciális vevőidet — Bács-Kiskun megyétől az egész országig.
              </p>
              <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-10">
                <Button href="/kapcsolat" size="lg" className="glow-pulse">Ingyenes konzultáció <ArrowRight className="ml-2 w-5 h-5" /></Button>
              </div>
              <div className="animate-fade-up-delay-4 flex flex-wrap gap-6">
                {[{ v: 'Napi', l: 'Optimalizálás' }, { v: 'Havi', l: 'Riport' }, { v: 'Meta Partner', l: 'Integráció' }].map(h => (
                  <div key={h.l} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan" />
                    <span className="font-display font-bold text-dark">{h.v}</span>
                    <span className="text-sm text-muted">{h.l}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: visual */}
            <FacebookVisual />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="clip-diagonal-reverse py-24 -mt-16" style={{ background: 'linear-gradient(135deg, #d0e8ff 0%, #ddeeff 50%, #ccdeff 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <SectionHeading label="Amit kínálunk" title="Teljes körű kampánykezelés" description="Nem csak beállítjuk a hirdetéseket — folyamatosan kezeljük, optimalizáljuk és mérjük az eredményeket." />
          <FacebookFeatures />
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-white">
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
                  <div key={item.title} className="flex gap-4 p-5 bg-secondary rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-blue-400 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-dark mb-1">{item.title}</div>
                      <div className="text-sm text-muted">{item.text}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="GYIK" title="Kérdések a Facebook hirdetésről" />
          <FAQAccordion items={faq} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Kezdjük el a hirdetést!</h2>
          <p className="text-gray-400 mb-8">Ingyenes konzultáció — megmutatjuk milyen eredmény érhető el a te iparágadban.</p>
          <Button href="/kapcsolat" size="lg">Ajánlatot kérek <ArrowRight className="ml-2 w-5 h-5" /></Button>
        </div>
      </section>
    </div>
  )
}
