import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { AnimatedTimeline } from '@/components/ui/AnimatedTimeline'
import { WeboldalakFeatures } from '@/components/services/WeboldalakFeatures'
import { FAQItem } from '@/types'
import {
  Zap, Shield, Code2, ArrowRight, CheckCircle, Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Weboldal készítés Bács-Kiskun megye — NEZOR',
  description: 'Professzionális weboldal készítés Bács-Kiskun megyében és egész Magyarországon. Egyszeri díjas és havidíjas csomagok. Ingyenes ajánlat!',
  openGraph: {
    title: 'Weboldal készítés Bács-Kiskun megye — NEZOR',
    description: 'Professzionális weboldal készítés Bács-Kiskun megyében és egész Magyarországon.',
    url: 'https://nezor.hu/weboldalak',
  },
}

const steps = [
  { number: '01', title: 'Ingyenes konzultáció', description: 'Megismerjük az igényeidet, célközönségedet és elképzeléseidet. Semmi kötelezettség.' },
  { number: '02', title: 'Design tervezés', description: 'Elkészítjük az oldal vizuális tervét. Te jóváhagyod mielőtt nekiállunk.' },
  { number: '03', title: 'Fejlesztés & tesztelés', description: 'Megépítjük az oldalt, teszteljük minden eszközön és böngészőben.' },
  { number: '04', title: 'Átadás & support', description: 'Átadjuk az oldalt, betanítunk és folyamatos supportot biztosítunk.' },
]

const faq: FAQItem[] = [
  { question: 'Mennyi idő alatt készül el a weboldal?', answer: 'Alap weboldalak 1-2 héten belül elkészülnek. Egyedi, összetettebb oldalak 3-4 hetet vehetnek igénybe.' },
  { question: 'Mi kell ahhoz, hogy elkezdjük?', answer: 'Szükségünk van a cég adataira, logóra, és egy vázlatos elképzelésre. Ezeket az ingyenes konzultáción egyeztetjük.' },
  { question: 'Segítetek a szövegek megírásában?', answer: 'Igen, kérés esetén segítünk a szövegek megírásában is, SEO-barát formában.' },
  { question: 'Mi történik, ha módosítani szeretném az oldalt?', answer: 'Havidíjas csomagban a megállapodott számú frissítés beleértve. Egyszeri díjas csomagnál egyedi árazású módosítás.' },
]

const highlights = [
  { value: '1-2 hét', label: 'Átfutási idő' },
  { value: '100%', label: 'Mobilbarát' },
  { value: '9+', label: 'Elkészült oldal' },
]

const guarantees = [
  { icon: Star, title: 'Garanciák', text: 'Ha nem vagy elégedett az első designtervvel, ingyen újratervezzük.' },
  { icon: Zap, title: 'Gyors átfutás', text: 'Alap weboldalak 1-2 héten belül elkészülnek — nem váratsz hónapokat.' },
  { icon: Shield, title: 'Folyamatos support', text: '24 órán belüli válasz minden kérdésedre és módosítási igényedre.' },
]

export default function WeboldalakPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        <div className="bg-grid-pattern absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-cyan-light/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-cyan-light text-cyan text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-6">
              <Code2 className="w-3.5 h-3.5" />
              Weboldal készítés
            </div>

            <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark leading-tight mb-6">
              Modern weboldalak,<br />
              amelyek <span className="text-gradient">ügyfeleket hoznak</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-2xl">
              Gyors, mobilra optimalizált, SEO-barát weboldalak — Bács-Kiskun megyétől az egész országig. Egyszeri díjas vagy havidíjas konstrukcióban.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="/kapcsolat" size="lg" className="glow-pulse">
                Ingyenes ajánlat kérése <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/csomagok" variant="outline" size="lg">Csomagok megtekintése</Button>
            </div>

            <div className="animate-fade-up-delay-4 flex flex-wrap gap-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" />
                  <span className="font-display font-bold text-dark">{h.value}</span>
                  <span className="text-sm text-muted">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="clip-diagonal-reverse bg-secondary py-24 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <SectionHeading
            label="Mit kapsz"
            title="Minden benne van amire szükséged van"
            description="Nem csak egy szép weboldalt kapsz — hanem egy üzleti eszközt ami eredményeket hoz."
          />
          <WeboldalakFeatures />
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
          <SectionHeading label="GYIK" title="Kérdések a weboldal készítésről" />
          <FAQAccordion items={faq} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Készen állsz egy <span className="text-shimmer">profi weboldalra?</span>
          </h2>
          <p className="text-gray-400 mb-8">Az első konzultáció ingyenes és kötelezettség nélküli.</p>
          <Button href="/kapcsolat" size="lg">Ajánlatot kérek <ArrowRight className="ml-2 w-5 h-5" /></Button>
        </div>
      </section>
    </div>
  )
}
