import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { FAQItem } from '@/types'
import { faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Weboldal készítés Bács-Kiskun megye — NEZOR',
  description: 'Professzionális weboldal készítés Bács-Kiskun megyében és egész Magyarországon. Egyszeri díjas és havidíjas csomagok. Ingyenes ajánlat!',
  openGraph: {
    title: 'Weboldal készítés Bács-Kiskun megye — NEZOR',
    description: 'Professzionális weboldal készítés Bács-Kiskun megyében és egész Magyarországon. Egyszeri díjas és havidíjas csomagok.',
    url: 'https://nezor.hu/weboldalak',
  },
}

const faq: FAQItem[] = [
  { question: 'Mennyi idő alatt készül el a weboldal?', answer: 'Alap weboldalak 1-2 héten belül elkészülnek. Egyedi, összetettebb oldalak 3-4 hetet vehetnek igénybe.' },
  { question: 'Mi kell ahhoz, hogy elkezdjük?', answer: 'Szükségünk van a cég adataira, logóra, és egy vázlatos elképzelésre. Ezeket az ingyenes konzultáción egyeztetjük.' },
  { question: 'Segítetek a szövegek megírásában?', answer: 'Igen, kérés esetén segítünk a szövegek megírásában is, SEO-barát formában.' },
  { question: 'Mi történik, ha módosítani szeretném az oldalt?', answer: 'Havidíjas csomagban a megállapodott számú frissítés beleértve. Egyszeri díjas csomagnál egyedi árazású módosítás.' },
]

const steps = [
  { number: '01', title: 'Ingyenes konzultáció', description: 'Megismerjük az igényeidet és bemutatjuk a lehetőségeket.' },
  { number: '02', title: 'Design tervezés', description: 'Elkészítjük az oldal dizájntervét, amit jóváhagysz.' },
  { number: '03', title: 'Fejlesztés', description: 'Megépítjük az oldalt, mobilra és SEO-ra optimalizálva.' },
  { number: '04', title: 'Átadás', description: 'Tesztelés után átadjuk az oldalt és betanítunk a kezelésére.' },
]

export default function WeboldalakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faq)) }}
      />
      <div>
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cyan-light text-cyan font-semibold text-sm px-4 py-1.5 rounded-full mb-6">Weboldal készítés</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Modern weboldalak, amelyek <span className="text-gradient">ügyfeleket hoznak</span>
            </h1>
            <p className="text-lg text-muted mb-8">Gyors, mobilra optimalizált, SEO-barát weboldalak kis- és középvállalkozásoknak — Bács-Kiskun megyétől az egész országig.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kapcsolat" size="lg">Ingyenes ajánlat kérése</Button>
              <Button href="/csomagok" variant="outline" size="lg">Csomagok megtekintése</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Folyamat" title="Hogyan dolgozunk?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="text-5xl font-display font-bold text-cyan-light mb-4">{step.number}</div>
                <h3 className="font-display font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="GYIK" title="Kérdések a weboldal készítésről" />
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Kész vagy elkezdeni?</h2>
          <p className="text-gray-400 mb-8">Az első konzultáció ingyenes és kötelezettség nélküli.</p>
          <Button href="/kapcsolat" size="lg">Ajánlatot kérek</Button>
        </div>
      </section>
      </div>
    </>
  )
}
