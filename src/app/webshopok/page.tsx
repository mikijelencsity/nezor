import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { FAQItem } from '@/types'
import { faqSchema } from '@/lib/structured-data'
import { AnimatedTimeline, TimelineStep } from '@/components/ui/AnimatedTimeline'

export const metadata: Metadata = {
  title: 'Webshop fejlesztés Magyarország — NEZOR',
  description: 'Professzionális webshop fejlesztés fizetési rendszerrel, rendeléskezelővel. Egyszeri díjas és havidíjas megoldások. Ingyenes ajánlat!',
  openGraph: {
    title: 'Webshop fejlesztés Magyarország — NEZOR',
    description: 'Professzionális webshop készítés fizetési rendszerrel, rendeléskezelővel. Ingyenes ajánlat!',
    url: 'https://nezor.hu/webshopok',
  },
}

const faq: FAQItem[] = [
  { question: 'Milyen fizetési rendszereket építetek be?', answer: 'SimplePay, Barion, PayPal, bankkártya és utánvét — az igényednek megfelelőt választjuk ki.' },
  { question: 'Kezeli a rendszer a készletet is?', answer: 'Igen, automatikus raktárkezelés és értesítések is beépíthetők.' },
  { question: 'Hogyan kezeli a rendszer a számlákat?', answer: 'Integrálható automatikus számlázó rendszerekkel (pl. Számlázz.hu, Billingo).' },
  { question: 'Mennyi terméket kezel a webshop?', answer: 'Csomagtól függően 100 terméktől korlátlan mennyiségig skálázható.' },
]

const steps: TimelineStep[] = [
  { number: '01', title: 'Konzultáció', description: 'Felmérjük az igényeket: termékek, fizetési mód, szállítás.' },
  { number: '02', title: 'Tervezés', description: 'Design és funkcionális terv elkészítése.' },
  { number: '03', title: 'Fejlesztés', description: 'Webshop felépítése, fizetési rendszer integráció.' },
  { number: '04', title: 'Átadás és betanítás', description: 'Tesztelés, átadás, és termékfeltöltési betanítás.' },
]

export default function WebshopokPage() {
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
            <span className="inline-block bg-cyan-light text-cyan font-semibold text-sm px-4 py-1.5 rounded-full mb-6">Webshop fejlesztés</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Online bolt, ami <span className="text-gradient">valóban elad</span>
            </h1>
            <p className="text-lg text-muted mb-8">Webshop készítés fizetési rendszerrel, rendeléskezelővel és automatikus számlázással — egész Magyarországon.</p>
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
          <AnimatedTimeline steps={steps} />
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="GYIK" title="Kérdések a webshopról" />
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Indítsuk el a webshopod!</h2>
          <p className="text-gray-400 mb-8">Az első konzultáció ingyenes és kötelezettség nélküli.</p>
          <Button href="/kapcsolat" size="lg">Ajánlatot kérek</Button>
        </div>
      </section>
      </div>
    </>
  )
}
