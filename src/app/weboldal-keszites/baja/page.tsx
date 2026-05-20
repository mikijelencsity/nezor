import type { Metadata } from 'next'
import { ArrowRight, CheckCircle, MapPin, Clock, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Weboldal készítés Baja — Professzionális webfejlesztés | NEZOR',
  description: 'Weboldal készítés Baján és Bács-Kiskun megyében. Gyors, mobilbarát, SEO-optimalizált weboldalak 1-2 hét alatt. Ingyenes konzultáció!',
  openGraph: {
    title: 'Weboldal készítés Baja — NEZOR',
    description: 'Professzionális weboldal készítés Baján. Gyors átfutás, megfizethető ár. Ingyenes ajánlat!',
    url: 'https://nezor.hu/weboldal-keszites/baja',
  },
}

const faqItems = [
  { question: 'Mennyibe kerül egy weboldal Baján?', answer: 'Baján az alap bemutatkozó weboldalak ára 50 000 – 150 000 Ft között mozog. Közepes céges weboldalak 150 000 – 350 000 Ft, prémium egyedi oldalak 350 000 Ft felett. Havidíjas konstrukcióban havi 15 000 Ft-tól elérhető. Ingyenes konzultáción pontos ajánlatot adunk.' },
  { question: 'Mennyi idő alatt készül el a weboldal Baján?', answer: 'Alap weboldalak 1-2 héten belül elkészülnek. Összetettebb, egyedi oldalak 3-4 hetet vehetnek igénybe. A határidőt írásban vállaljuk — késés esetén kedvezmény.' },
  { question: 'Hogyan találnak meg Baján a weboldalammal?', answer: 'Minden weboldalunkhoz teljes SEO optimalizálást biztosítunk — meta tagek, Google Analytics, sitemap, JSON-LD schema és helyi SEO beállítások. Így a "weboldal készítés Baja" és hasonló helyi keresésekre megjelensz a Google találatokban.' },
  { question: 'Van helyi irodájuk Baján?', answer: 'Baján és egész Bács-Kiskun megyében dolgozunk. Az együttműködés online is gördülékenyen zajlik, de szükség esetén személyes konzultációt is vállalunk Baján.' },
  { question: 'Segítetek a szövegek megírásában?', answer: 'Igen, kérés esetén segítünk SEO-barát szövegek megírásában is — hogy a bajai és környékbeli keresőtalálatok között minél előrébb kerülj.' },
  { question: 'Mi történik az átadás után?', answer: 'Az átadástól számított 30 napig ingyenes supportot biztosítunk. Ezután havidíjas karbantartási csomagot is kínálunk.' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-cyan-light/30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-cyan-light text-cyan text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Weboldal készítés — Baja
          </div>
          <h1 className="animate-fade-up-delay-1 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-5">
            Weboldal készítés <span className="text-gradient">Baján</span>
          </h1>
          <p className="animate-fade-up-delay-2 text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Professzionális weboldal készítés Baján és Bács-Kiskun megye egész területén.
            Gyors, mobilbarát, SEO-optimalizált weboldalak 1-2 hét alatt — helyi tapasztalattal, megfizethető áron.
          </p>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button href="/kapcsolat" size="lg" className="glow-pulse">
              Ingyenes weboldal ajánlat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/csomagok" variant="outline" size="lg">
              Csomagok megtekintése
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            {[
              { icon: Clock, text: '1-2 hetes átfutás' },
              { icon: Star, text: 'Ingyenes konzultáció' },
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
            Weboldal készítés Baján — miért fontos 2025-ben?
          </h2>
          <p className="text-muted leading-relaxed text-base mb-4">
            Baja Bács-Kiskun megye egyik legfontosabb városa, közel 36 000 lakossal és élénk gazdasági élettel. A Duna-parti városban a helyi vállalkozások egyre élesebb versennyel szembesülnek — és a különbség sokszor az online jelenlétben rejlik. Ha valaki Baján keres szolgáltatót, elsőként Google-on néz utána.
          </p>
          <p className="text-muted leading-relaxed text-base mb-6">
            A NEZOR csapata Baján és egész Bács-Kiskun megyében készít modern, gyors és keresőbarát weboldalakat. Bajai referenciáink között megtalálható a Cruiser Shop kerékpárszaküzlet és a Kisállatkereskedés Baja — olyan vállalkozások, amelyek profi online jelenlétre váltottak és érzik az eredményét.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Egyedi, mobilbarát design',
              'Google-barát SEO felépítés',
              'Gyors betöltési idő (90+ PageSpeed)',
              'Bajai és helyi SEO optimalizálás',
              'SSL tanúsítvány és biztonság',
              '30 napos ingyenes support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                <span className="text-sm font-medium text-dark">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Miért fontos */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            Miért kell profi weboldal egy bajai vállalkozásnak?
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            A bajai fogyasztók több mint 80%-a online keres helyi szolgáltatókat, mielőtt dönt. Legyen szó asztalosról, kozmetikusról, étteremről vagy bármilyen más vállalkozásról — az első benyomás digitálisan történik. Egy lassú, elavult vagy nem mobilbarát weboldal elveszíti a látogatók felét már az első 3 másodpercben.
          </p>
          <p className="text-muted leading-relaxed">
            A NEZOR weboldalak ezzel szemben: villámgyorsan töltenek be (Google PageSpeed 90+ pont), tökéletesen néznek ki telefonon, tableten és asztali gépen egyaránt, és a bajai keresési kifejezésekre optimalizálva vannak. Ez azt jelenti, hogy az érdeklődők Baján és környékén megtalálnak — és ami ugyanilyen fontos: bizalmat éreznek, amikor rátalálnak az oldaladra.
          </p>
        </section>

        {/* Weboldal típusok */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            Weboldal típusok Baján — melyik illik neked?
          </h2>
          <div className="space-y-4">
            {[
              { title: 'Bemutatkozó weboldal', desc: 'Ideális bajai egyéni vállalkozóknak, kisebb üzleteknek. 3-5 aloldal, egyszerű struktúra, kapcsolatfelvételi form. Gyorsan elkészül, megfizethető.' },
              { title: 'Céges weboldal', desc: 'Nagyobb bajai vállalkozásoknak, akik részletesen szeretnék bemutatni a szolgáltatásaikat. Blog modul, teljes SEO — ez hoz a legtöbb organikus forgalmat Baján.' },
              { title: 'Landing page', desc: 'Egyetlen ajánlatra fókuszált oldal — Facebook hirdetési kampányokhoz ideális. A látogató megérkezik és csak egy dolgot tehet: felveszi veled a kapcsolatot.' },
              { title: 'Portfólió weboldal', desc: 'Kreatív bajai szakembereknek: fotósok, asztalosok, grafikusok, építészek. Vizuálisan erős, galéria fókuszú.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 p-4 bg-secondary rounded-2xl">
                <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
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
          <h2 className="text-2xl font-display font-bold text-dark mb-6">
            Miért a NEZOR Baján?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: 'Gyors átfutás', desc: 'Alap weboldalak 1-2 héten belül elkészülnek Baján — nem váratsz hónapokat. A határidőt írásban vállaljuk.' },
              { icon: Star, title: 'Helyi referenciák', desc: 'Bajai vállalkozásoknak — köztük a Cruiser Shopnak és a Kisállatkereskedésnek — segítettünk profi online jelenlétet felépíteni.' },
              { icon: Zap, title: 'Kiemelkedő ár-érték', desc: 'Áraink a piaci átlag alatt vannak Baján — anélkül, hogy a minőségen spórolnánk.' },
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

        {/* Folyamat */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            A weboldal készítés folyamata Baján
          </h2>
          <div className="space-y-3">
            {[
              { num: '01', title: 'Ingyenes konzultáció', desc: 'Megismerjük a bajai vállalkozásodat, céljaidat és a helyi piac sajátosságait. Semmi kötelezettség.' },
              { num: '02', title: 'Design tervezés', desc: 'Elkészítjük az oldal vizuális tervét. Te jóváhagyod, mielőtt nekiállnánk a fejlesztésnek.' },
              { num: '03', title: 'Fejlesztés és tesztelés', desc: 'Megépítjük az oldalt, teszteljük minden eszközön és böngészőben — különösen mobilon.' },
              { num: '04', title: 'Átadás és support', desc: 'Átadjuk az oldalt, betanítunk a kezelésre. 30 napig ingyenes support vár Baján és online.' },
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

        {/* FAQ */}
        <section>
          <SectionHeading label="GYIK" title="Kérdések a weboldal készítésről Baján" centered={false} />
          <FAQAccordion items={faqItems} />
        </section>

        {/* Más városok */}
        <section>
          <h2 className="text-lg font-display font-bold text-dark mb-4">
            Weboldal készítés más városokban is
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Kecskemét', 'Kalocsa', 'Kiskunhalas', 'Budapest', 'Pécs', 'Debrecen'].map((city) => (
              <Link
                key={city}
                href={`/weboldal-keszites/${city.toLowerCase().replace(/é/g, 'e').replace(/á/g, 'a').replace(/ő/g, 'o').replace(/ú/g, 'u').replace(/í/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ó/g, 'o').replace(/ű/g, 'u').replace(/\s/g, '-')}`}
                className="text-sm px-3 py-1.5 bg-secondary hover:bg-cyan-light hover:text-cyan rounded-full transition-colors font-medium text-dark"
              >
                {city}
              </Link>
            ))}
            <Link href="/varosok" className="text-sm px-3 py-1.5 bg-cyan text-white rounded-full font-medium hover:bg-cyan-dark transition-colors">
              Összes város →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-3xl bg-dark text-white p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Készítsük el a bajai weboldalad!
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Ingyenes konzultáció — megmutatjuk mit tudunk érted csinálni Baján.
            </p>
            <Button href="/kapcsolat" size="lg">
              Ingyenes weboldal ajánlat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
