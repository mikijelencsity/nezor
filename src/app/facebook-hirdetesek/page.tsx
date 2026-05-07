import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { FAQItem } from '@/types'
import { Target, BarChart2, RefreshCw, FileText } from 'lucide-react'
import { faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Facebook hirdetés kezelés Magyarország — NEZOR',
  description: 'Professzionális Facebook és Instagram hirdetés kezelés. Célzott Meta kampányok kis- és középvállalkozásoknak egész Magyarországon.',
  openGraph: {
    title: 'Facebook hirdetés kezelés Magyarország — NEZOR',
    description: 'Professzionális Facebook és Instagram hirdetés kezelés. Célzott Meta kampányok kis- és középvállalkozásoknak.',
    url: 'https://nezor.hu/facebook-hirdetesek',
  },
}

const faq: FAQItem[] = [
  { question: 'Mekkora büdzsével érdemes elkezdeni?', answer: 'Napi 1000-2000 Ft-tal már érdemi eredményeket lehet elérni helyi célzással. Az optimális büdzsét az ingyenes konzultáción határozzuk meg.' },
  { question: 'Mennyi idő alatt látszanak az eredmények?', answer: 'Az első eredmények 1-2 héten belül láthatók. Az optimalizálás folyamatos, általában 30 nap után érik el a kampányok a legjobb hatékonyságot.' },
  { question: 'Instagram hirdetéseket is csináltok?', answer: 'Igen, a Meta hirdetési rendszere Facebook-ot és Instagramot is lefed, mindkettőre optimalizálunk.' },
  { question: 'Kapok-e riportot a hirdetések eredményéről?', answer: 'Igen, minden hónapban részletes riportot küldünk az elért eredményekről, elköltött büdzséről és az optimalizálási lépésekről.' },
]

const features = [
  { icon: Target, title: 'Precíz célzás', description: 'Életkor, helyszín, érdeklődés alapján érjük el a potenciális ügyfeleidet.' },
  { icon: BarChart2, title: 'A/B tesztelés', description: 'Több hirdetésváltozatot tesztelünk, hogy a legjobb teljesítőt futtassuk.' },
  { icon: RefreshCw, title: 'Folyamatos optimalizálás', description: 'Naponta monitorozzuk és optimalizáljuk a kampányokat.' },
  { icon: FileText, title: 'Havi riport', description: 'Részletes havi jelentés az eredményekről és következő lépésekről.' },
]

export default function FacebookHirdetesekPage() {
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
            <span className="inline-block bg-cyan-light text-cyan font-semibold text-sm px-4 py-1.5 rounded-full mb-6">Facebook hirdetések</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Célzott hirdetések, <span className="text-gradient">valódi ügyfelek</span>
            </h1>
            <p className="text-lg text-muted mb-8">Facebook hirdetés kezelés és Meta kampányok, amelyek elérik a potenciális vevőidet — Bács-Kiskun megyétől az egész országig.</p>
            <Button href="/kapcsolat" size="lg">Ingyenes konzultáció</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Szolgáltatás" title="Amit kínálunk" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-10 h-10 bg-cyan-light rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-dark mb-2">{f.title}</h3>
                  <p className="text-sm text-muted">{f.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="GYIK" title="Kérdések a Facebook hirdetésről" />
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Kezdjük el a hirdetést!</h2>
          <p className="text-gray-400 mb-8">Ingyenes konzultáció — megmutatjuk milyen eredmény érhető el a te iparágadban.</p>
          <Button href="/kapcsolat" size="lg">Ajánlatot kérek</Button>
        </div>
      </section>
      </div>
    </>
  )
}
