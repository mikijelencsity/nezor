import { ArrowRight, CheckCircle, MapPin, Clock, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { City, cities } from '@/data/cities'
import Link from 'next/link'
import { faqSchema } from '@/lib/structured-data'
import {
  pick,
  weboldalIntro, weboldalWhyOnline, weboldalTypes, weboldalProcess,
  webshopIntro, webshopWhyNow, webshopFeatures, webshopProcess,
  facebookIntro, facebookWhyMeta, facebookTypes, facebookProcess,
} from '@/data/cityContent'

export type ServiceType = 'weboldal' | 'webshop' | 'facebook'

const serviceConfig = {
  weboldal: {
    title: 'Weboldal készítés',
    slug: 'weboldal-keszites',
    badge: 'Weboldal készítés',
    colorClass: 'text-cyan',
    bgClass: 'bg-cyan-light',
    heroDesc: (c: City) => `Professzionális weboldal készítés ${c.inCity} kis- és középvállalkozásoknak. Gyors, mobilbarát, SEO-optimalizált weboldalak — helyi tapasztalattal, megfizethető áron.`,
    features: [
      'Egyedi, mobilbarát design',
      'Google-barát SEO felépítés',
      'Gyors betöltési idő (90+ PageSpeed)',
      'Kapcsolatfelvételi form és térkép',
      'SSL tanúsítvány és biztonság',
      '30 napos ingyenes support',
    ],
    faq: (c: City) => [
      { question: `Mennyibe kerül egy weboldal ${c.inCity}?`, answer: `${c.inCity} a weboldal ára a komplexitástól függ. Alap bemutatkozó oldalak már 50-150 ezer forinttól elérhetők, míg összetettebb oldalak 200-500 ezer forint között mozognak. Ingyenes ajánlatkérés után pontos árat adunk.` },
      { question: `Mennyi idő alatt készül el a weboldal ${c.inCity}?`, answer: `Alap weboldalak 1-2 héten belül elkészülnek. Összetettebb, egyedi oldalak 3-4 hetet vehetnek igénybe. A határidőt írásban vállaljuk.` },
      { question: `Segítetek a ${c.adjective} vállalkozásom szövegének megírásában?`, answer: `Igen, kérés esetén segítünk a szövegek megírásában is, SEO-barát formában, hogy a ${c.adjective} keresőtalálatok között minél előrébb kerülj.` },
      { question: `Van-e helyi irodájuk ${c.inCity}?`, answer: `Bács-Kiskun megye egész területén dolgozunk, ${c.inCity} is az ügyfeleinket szolgáljuk. Az együttműködés online is gördülékenyen zajlik, de szükség esetén személyes találkozót is szervezünk.` },
      { question: `Milyen weboldalakat készítetek ${c.inCity}?`, answer: `Bemutatkozó oldalakat, céges weboldalakat, portfólió oldalakat, landing page-eket és blog oldalakat készítünk. Minden típust ${c.inCity} és egész Magyarországon vállalunk.` },
      { question: `Mi történik az átadás után?`, answer: `Az átadástól számított 30 napig ingyenes supportot biztosítunk — bármilyen módosítást, javítást elvégzünk díjmentesen. Utána havidíjas karbantartási csomagot is kínálunk.` },
    ],
    cta: 'Ingyenes weboldal ajánlat',
    getIntro: (c: City) => pick(weboldalIntro, c, 0)(c),
    getWhyOnline: (c: City) => pick(weboldalWhyOnline, c, 1)(c),
    getTypes: (c: City) => pick(weboldalTypes, c, 2)(c),
    getProcess: (c: City) => pick(weboldalProcess, c, 3)(c),
    whyOnlineTitle: (c: City) => `Miért fontos az online jelenlét ${c.inCity}?`,
    typesTitle: (c: City) => `Weboldal típusok ${c.inCity}`,
    processTitle: 'A folyamat lépései',
  },
  webshop: {
    title: 'Webshop készítés',
    slug: 'webshop-keszites',
    badge: 'Webshop fejlesztés',
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-50',
    heroDesc: (c: City) => `Professzionális webshop készítés ${c.inCity} vállalkozásoknak. Online áruház fizetési rendszerrel, rendeléskezelővel és automatikus számlázással — megfizethető áron.`,
    features: [
      'SimplePay és Barion fizetési integráció',
      'Mobilbarát, gyors webshop',
      'Automatikus rendeléskezelő',
      'Raktárkezelés és értesítők',
      'Számlázz.hu / Billingo integráció',
      'GLS, DPD, Magyar Posta szállítás',
    ],
    faq: (c: City) => [
      { question: `Mennyibe kerül egy webshop ${c.inCity}?`, answer: `${c.inCity} a webshop ára a termékkészlettől és a szükséges funkcióktól függ. Alap webshopok 150-300 ezer forinttól, teljes körű megoldások 400-800 ezer forinttól érhetők el.` },
      { question: `Mennyi idő alatt indul el a webshopom ${c.inCity}?`, answer: `Alap webshopok 2-4 héten belül élesbe kerülnek. A folyamat végén betanítást is tartunk.` },
      { question: `Milyen fizetési módokat építetek be?`, answer: `SimplePay, Barion, bankkártya, utánvét és átutalás — az igényednek megfelelő kombinációt alakítjuk ki.` },
      { question: `${c.name} területén is tudtok segíteni?`, answer: `Igen, ${c.inCity} is teljes körű webshop fejlesztési szolgáltatást nyújtunk.` },
      { question: `Kezeli a rendszer a készletet?`, answer: `Igen, automatikus raktárkezelés, alacsony készlet értesítők és rendelés-visszaigazolások is beépíthetők.` },
      { question: `Hogyan kezeli a rendszer a számlákat?`, answer: `Integrálható automatikus számlázó rendszerekkel (Számlázz.hu, Billingo) — minden rendelésnél automatikusan kiállítja a számlát.` },
    ],
    cta: 'Ingyenes webshop ajánlat',
    getIntro: (c: City) => pick(webshopIntro, c, 0)(c),
    getWhyOnline: (c: City) => pick(webshopWhyNow, c, 1)(c),
    getTypes: (c: City) => pick(webshopFeatures, c, 2)(c),
    getProcess: (c: City) => pick(webshopProcess, c, 3)(c),
    whyOnlineTitle: (c: City) => `Miért indíts webshopot ${c.inCity}?`,
    typesTitle: (c: City) => `Webshop funkciók ${c.inCity}`,
    processTitle: 'Webshop fejlesztési folyamat',
  },
  facebook: {
    title: 'Facebook hirdetés kezelés',
    slug: 'facebook-hirdetes',
    badge: 'Facebook & Instagram hirdetések',
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
    heroDesc: (c: City) => `Professzionális Facebook és Instagram hirdetés kezelés ${c.inCity} vállalkozásoknak. Célzott Meta kampányok, napi optimalizálással és havi riporttal.`,
    features: [
      'Facebook és Instagram kampányok',
      'Pontos célközönség-meghatározás',
      'Napi optimalizálás és monitorozás',
      'Kreatív szövegek és vizuálok',
      'Havi részletes riport',
      'Átlátható büdzsé kezelés',
    ],
    faq: (c: City) => [
      { question: `Mekkora büdzsével érdemes elkezdeni ${c.inCity}?`, answer: `Napi 1000-2000 Ft-tal már érdemi eredményeket lehet elérni ${c.adjective} helyi célzással. Az optimális büdzsét az iparág határozza meg.` },
      { question: `Mennyi idő alatt látszanak az eredmények?`, answer: `Az első eredmények 1-2 héten belül láthatók. A kampány optimalizálása folyamatos.` },
      { question: `Instagram hirdetéseket is csináltok?`, answer: `Igen, a Meta rendszere Facebook-ot és Instagramot is lefed, mindkettőre optimalizálunk.` },
      { question: `Kapok-e riportot az eredményekről?`, answer: `Igen, minden hónapban részletes riportot küldünk — elérés, kattintások, leadek, konverziók.` },
      { question: `${c.name} területén is vállaltok hirdetés kezelést?`, answer: `Igen, ${c.inCity} is teljes körű Facebook és Instagram hirdetés kezelési szolgáltatást nyújtunk.` },
      { question: `Mi szükséges az induláshoz?`, answer: `Egy Facebook oldal és egy rövid brief az üzletedről. A hirdetési fiókot és a kampányokat mi állítjuk be.` },
    ],
    cta: 'Ingyenes hirdetési ajánlat',
    getIntro: (c: City) => pick(facebookIntro, c, 0)(c),
    getWhyOnline: (c: City) => pick(facebookWhyMeta, c, 1)(c),
    getTypes: (c: City) => pick(facebookTypes, c, 2)(c),
    getProcess: (c: City) => pick(facebookProcess, c, 3)(c),
    whyOnlineTitle: (c: City) => `Miért érdemes Facebook hirdetést indítani ${c.inCity}?`,
    typesTitle: (c: City) => `Hirdetés típusok ${c.inCity}`,
    processTitle: 'Hogyan dolgozunk?',
  },
}

interface Props {
  city: City
  service: ServiceType
}

export function CityServicePage({ city, service }: Props) {
  const cfg = serviceConfig[service]
  const faqItems = cfg.faq(city)
  const otherCities = cities.filter(c => c.slug !== city.slug && c.isLocal === city.isLocal).slice(0, 8)

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
          <div className={`animate-fade-up inline-flex items-center gap-2 ${cfg.bgClass} ${cfg.colorClass} text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-5`}>
            <MapPin className="w-3.5 h-3.5" />
            {cfg.badge} — {city.name}
          </div>
          <h1 className="animate-fade-up-delay-1 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-5">
            {cfg.title} <span className="text-gradient">{city.inCity}</span>
          </h1>
          <p className="animate-fade-up-delay-2 text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            {cfg.heroDesc(city)}
          </p>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button href="/kapcsolat" size="lg" className="glow-pulse">
              {cfg.cta} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/csomagok" variant="outline" size="lg">
              Csomagok megtekintése
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            {[
              { icon: Clock, text: 'Gyors átfutás' },
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
            {cfg.title} {city.inCity} — NEZOR
          </h2>
          <p className="text-muted leading-relaxed text-base mb-6 whitespace-pre-line">
            {cfg.getIntro(city)}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cfg.features.map((f) => (
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
            {cfg.whyOnlineTitle(city)}
          </h2>
          <p className="text-muted leading-relaxed text-base whitespace-pre-line">
            {cfg.getWhyOnline(city)}
          </p>
        </section>

        {/* Típusok / Funkciók */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            {cfg.typesTitle(city)}
          </h2>
          <div className="prose prose-sm max-w-none text-muted leading-relaxed">
            {cfg.getTypes(city).split('\n\n').map((para, i) => (
              <p key={i} className="mb-3">{para.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        </section>

        {/* Miért mi */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-6">
            Miért a NEZOR {city.inCity}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: 'Gyors átfutás', desc: `Alap projektek 1-2 héten belül elkészülnek ${city.inCity} — nem váratsz hónapokat.` },
              { icon: Star, title: 'Kiemelkedő ár-érték', desc: `Áraink a piaci átlag alatt vannak ${city.inCity} — anélkül hogy a minőségen spórolnánk.` },
              { icon: Zap, title: 'Helyi tapasztalat', desc: `Ismerjük a ${city.adjective} piacot és az itteni vállalkozások igényeit és kihívásait.` },
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
            {cfg.processTitle}
          </h2>
          <p className="text-muted leading-relaxed text-base whitespace-pre-line">
            {cfg.getProcess(city)}
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-6">
            Kérdések a {cfg.title.toLowerCase()}ről {city.inCity}
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* Más városok */}
        {otherCities.length > 0 && (
          <section>
            <h2 className="text-lg font-display font-bold text-dark mb-4">
              {cfg.title} más városokban is
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${cfg.slug}/${c.slug}`}
                  className="text-sm px-3 py-1.5 bg-secondary hover:bg-cyan-light hover:text-cyan rounded-full transition-colors font-medium text-dark"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/varosok"
                className="text-sm px-3 py-1.5 bg-cyan text-white rounded-full font-medium hover:bg-cyan-dark transition-colors"
              >
                Összes város →
              </Link>
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="rounded-3xl bg-dark text-white p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Dolgozzunk együtt {city.inCity}!
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Ingyenes konzultáció — kötelezettség nélkül. Megmutatjuk, mit tudunk érted csinálni.
            </p>
            <Button href="/kapcsolat" size="lg">
              {cfg.cta} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
