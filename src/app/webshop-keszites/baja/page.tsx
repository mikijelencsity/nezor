import type { Metadata } from 'next'
import { ArrowRight, CheckCircle, MapPin, Clock, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Webshop készítés Baja — Professzionális online áruház | NEZOR',
  description: 'Webshop készítés Baján. Online áruház SimplePay fizetéssel, rendeléskezelővel, GLS szállítással. 2-4 hét alatt éles. Ingyenes ajánlat!',
  openGraph: {
    title: 'Webshop készítés Baja — NEZOR',
    description: 'Professzionális webshop készítés Baján. Ingyenes ajánlat!',
    url: 'https://nezor.hu/webshop-keszites/baja',
  },
}

const faqItems = [
  { question: 'Mennyibe kerül egy webshop Baján?', answer: 'Alap webshopok 150 000 – 300 000 Ft-tól, teljes körű megoldások 400 000 – 800 000 Ft-tól érhetők el Baján. Havidíjas konstrukcióban havi 25 000 Ft-tól elérhető. Ingyenes konzultáción pontos árat adunk.' },
  { question: 'Mennyi idő alatt indul el a webshopom Baján?', answer: 'Alap webshopok 2-4 héten belül élesbe kerülnek. Az átadás végén betanítást is tartunk a termékfeltöltésre és rendeléskezelésre.' },
  { question: 'Milyen fizetési módokat építetek be?', answer: 'SimplePay, Barion, bankkártya, utánvét és átutalás — az igényednek megfelelő kombinációt alakítjuk ki.' },
  { question: 'Tud-e a webshop helyi Bajai szállítást kezelni?', answer: 'Igen, beállítható bajai helyi szállítási zóna is, akár ingyenes helyi kiszállítással Baján belül — GLS, DPD és Magyar Posta mellett.' },
  { question: 'Tudok-e magam termékeket feltölteni?', answer: 'Igen, betanítjuk a teljes folyamatot — termékfeltöltés, rendeléskezelés, szállítás beállítása. Adminisztrátori hozzáférést kapsz.' },
  { question: 'Integrálható számlázó rendszerrel?', answer: 'Igen, Számlázz.hu és Billingo integrációval minden rendelésnél automatikusan kiállítja a számlát.' },
]

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-orange-50/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-orange-50 text-orange-500 text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Webshop készítés — Baja
          </div>
          <h1 className="animate-fade-up-delay-1 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-5">
            Webshop készítés <span className="text-gradient">Baján</span>
          </h1>
          <p className="animate-fade-up-delay-2 text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Professzionális webshop készítés Baján — SimplePay és Barion fizetéssel, GLS szállítással,
            automatikus rendeléskezeléssel. 2-4 hét alatt éles, betanítással együtt.
          </p>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button href="/kapcsolat" size="lg" className="glow-pulse">
              Ingyenes webshop ajánlat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/csomagok" variant="outline" size="lg">
              Csomagok megtekintése
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            {[
              { icon: Clock, text: '2-4 hetes átfutás' },
              { icon: Star, text: 'Betanítás az átadáskor' },
              { icon: Zap, text: '30 napos support' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-cyan" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Bemutatkozás */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            Webshop Baján — miért most a legjobb időpont?
          </h2>
          <p className="text-muted leading-relaxed text-base mb-4">
            A bajai fogyasztók egyre többet vásárolnak online — és ez a trend csak erősödni fog. Ha bajai vállalkozóként nincs webshopod, az ügyfeleid egy részét elveszíted azoknak, akik online értékesítenek. A NEZOR csapata Baján és Bács-Kiskun megye egész területén készít professzionális webshopokat.
          </p>
          <p className="text-muted leading-relaxed text-base mb-6">
            Referenciáink között van a Cruiser Shop — Baja egyik legjobb kerékpárszaküzlete — amelynek webshopját a NEZOR készítette. A bajai piac ismeretével olyan webshopot építünk, ami a helyi vásárlók igényeire is optimalizált.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'SimplePay és Barion fizetési integráció',
              'Mobilbarát, gyors webshop',
              'Automatikus rendeléskezelő',
              'Helyi Bajai szállítás beállítás',
              'Számlázz.hu / Billingo integráció',
              'GLS, DPD, Magyar Posta szállítás',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                <span className="text-sm font-medium text-dark">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Miért most */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            Online értékesítés Baján — a számok nem hazudnak
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Egy bajai fizikai üzlet naponta 8-10 órát van nyitva, és csak Baja és közvetlen környéke érhető el. Egy webshop viszont 24/7 nyitva van, és egész Magyarország a piacod. A rendelések több mint 60%-a telefonról érkezik — ezért minden webshopunkat "mobile-first" elvvel tervezzük.
          </p>
          <p className="text-muted leading-relaxed">
            A bajai Cruiser Shop példája is mutatja: egy jól felépített webshop nemcsak helyi vásárlókat hoz, hanem az egész ország kerékpáros közösségét eléri. Hasonlót érhet el a te vállalkozásod is.
          </p>
        </section>

        {/* Folyamat */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            Webshop fejlesztési folyamat Baján
          </h2>
          <div className="space-y-3">
            {[
              { num: '01', title: 'Konzultáció', desc: 'Felmérjük a termékeket, fizetési és szállítási igényeket. Megismerjük a bajai célközönséget.' },
              { num: '02', title: 'Tervezés', desc: 'Design és funkciótérkép elkészítése. Te jóváhagyod mielőtt nekiállunk.' },
              { num: '03', title: 'Fejlesztés', desc: 'Webshop felépítése, fizetési rendszer és szállítás integrálása, tesztelés minden eszközön.' },
              { num: '04', title: 'Átadás és betanítás', desc: 'Élesítjük a webshopot, betanítunk a teljes kezelésre. 30 napig ingyenes support.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-card">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-blue-400 flex items-center justify-center flex-shrink-0 text-white font-display font-bold text-sm">{num}</div>
                <div>
                  <div className="font-display font-bold text-dark text-sm mb-1">{title}</div>
                  <div className="text-sm text-muted">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Miért mi */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-6">Miért a NEZOR webshopja Baján?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: 'Gyors indulás', desc: '2-4 héten belül éles a webshopod — az első rendelés gyorsan megérkezhet.' },
              { icon: Star, title: 'Bajai referencia', desc: 'A Cruiser Shop webshopja a mi munkánk — Baja egyik legjobb kerékpárszaküzlete.' },
              { icon: Zap, title: 'Teljes betanítás', desc: 'Nem csak átadjuk — megtanítjuk a teljes kezelést a termékfeltöltéstől a rendelésig.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/20 to-blue-400/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="font-display font-bold text-dark mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionHeading label="GYIK" title="Kérdések a webshop készítésről Baján" centered={false} />
          <FAQAccordion items={faqItems} />
        </section>

        {/* Más városok */}
        <section>
          <h2 className="text-lg font-display font-bold text-dark mb-4">Webshop készítés más városokban is</h2>
          <div className="flex flex-wrap gap-2">
            {['Kecskemét', 'Kalocsa', 'Kiskunhalas', 'Budapest', 'Pécs', 'Debrecen'].map((city) => (
              <Link key={city} href={`/webshop-keszites/${city.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s/g, '-')}`}
                className="text-sm px-3 py-1.5 bg-secondary hover:bg-cyan-light hover:text-cyan rounded-full transition-colors font-medium text-dark">
                {city}
              </Link>
            ))}
            <Link href="/varosok" className="text-sm px-3 py-1.5 bg-cyan text-white rounded-full font-medium hover:bg-cyan-dark transition-colors">Összes város →</Link>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-3xl bg-dark text-white p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Indítsuk el a bajai webshopod!</h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">Ingyenes konzultáció — kötelezettség nélkül.</p>
            <Button href="/kapcsolat" size="lg">
              Ingyenes webshop ajánlat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
