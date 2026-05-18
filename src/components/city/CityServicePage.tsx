import { ArrowRight, CheckCircle, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { City, cities } from '@/data/cities'
import Link from 'next/link'
import { faqSchema } from '@/lib/structured-data'

export type ServiceType = 'weboldal' | 'webshop' | 'facebook'

const serviceConfig = {
  weboldal: {
    title: 'Weboldal készítés',
    slug: 'weboldal-keszites',
    badge: 'Weboldal készítés',
    color: 'text-cyan',
    bg: 'bg-cyan-light',
    heroDesc: (city: City) =>
      `Professzionális weboldal készítés ${city.inCity} kis- és középvállalkozásoknak. Gyors, mobilbarát, SEO-optimalizált weboldalak — helyi tapasztalattal, megfizethető áron.`,
    intro: (city: City) =>
      `Ha ${city.adjective} vállalkozásodnak profi online jelenlétre van szüksége, jó helyen jársz. A NEZOR csapata ${city.inCity} és Bács-Kiskun megye egész területén készít modern, gyors és keresőbarát weboldalakat. Minden weboldalunk mobilra optimalizált, Google PageSpeed-en 90+ pontszámot ér el, és az átadástól számított 30 napig ingyenes supportot biztosítunk.`,
    features: [
      'Egyedi, mobilbarát design',
      'Google-barát SEO felépítés',
      'Gyors betöltési idő (90+ PageSpeed)',
      'Kapcsolatfelvételi form és térkép',
      'SSL tanúsítvány és biztonság',
      '30 napos ingyenes support',
    ],
    faq: (city: City) => [
      { question: `Mennyibe kerül egy weboldal ${city.inCity}?`, answer: `${city.inCity} a weboldal ára a komplexitástól függ. Alap bemutatkozó oldalak már 50-150 ezer forinttól elérhetők, míg összetettebb oldalak 200-500 ezer forint között mozognak. Ingyenes ajánlatkérés után pontos árat adunk.` },
      { question: `Mennyi idő alatt készül el a weboldal ${city.inCity}?`, answer: `Alap weboldalak 1-2 héten belül elkészülnek. Összetettebb, egyedi oldalak 3-4 hetet vehetnek igénybe. A határidőt írásban vállaljuk.` },
      { question: `Segítetek a ${city.adjective} vállalkozásom szövegének megírásában?`, answer: `Igen, kérés esetén segítünk a szövegek megírásában is, SEO-barát formában, hogy a ${city.adjective} keresőtalálatok között minél előrébb kerülj.` },
      { question: `Van-e helyi irodájuk ${city.inCity}?`, answer: `Bács-Kiskun megye egész területén dolgozunk, ${city.inCity} is az ügyfeleinket szolgáljuk. Az együttműködés online is gördülékenyen zajlik, de szükség esetén személyes találkozót is szervezünk.` },
    ],
    cta: 'Ingyenes weboldal ajánlat',
  },
  webshop: {
    title: 'Webshop készítés',
    slug: 'webshop-keszites',
    badge: 'Webshop fejlesztés',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    heroDesc: (city: City) =>
      `Professzionális webshop készítés ${city.inCity} vállalkozásoknak. Online áruház fizetési rendszerrel, rendeléskezelővel és automatikus számlázással — megfizethető áron.`,
    intro: (city: City) =>
      `Szeretnél ${city.inCity} webshopot indítani? A NEZOR csapata teljes körű e-kereskedelmi megoldásokat kínál — SimplePay és Barion fizetési integrációval, automatikus raktárkezeléssel és mobilbarát designnal. ${city.adjective.charAt(0).toUpperCase() + city.adjective.slice(1)} vásárlóid 0-24 órában rendelhetnek, te pedig alvás közben is bevételt termelsz.`,
    features: [
      'SimplePay és Barion fizetési integráció',
      'Mobilbarát, gyors webshop',
      'Automatikus rendeléskezelő',
      'Raktárkezelés és értesítők',
      'Számlázz.hu / Billingo integráció',
      'GLS, DPD, Magyar Posta szállítás',
    ],
    faq: (city: City) => [
      { question: `Mennyibe kerül egy webshop ${city.inCity}?`, answer: `${city.inCity} a webshop ára a termékkészlettől és a szükséges funkcióktól függ. Alap webshopok 150-300 ezer forinttól, teljes körű megoldások 400-800 ezer forinttól érhetők el. Ingyenes ajánlatkérés után pontos árat adunk.` },
      { question: `Mennyi idő alatt indul el a webshopom ${city.inCity}?`, answer: `Alap webshopok 2-4 héten belül élesbe kerülnek. A folyamat végén betanítást is tartunk, hogy magabiztosan kezeld a rendeléseidet.` },
      { question: `Milyen fizetési módokat építetek be a ${city.adjective} webshopba?`, answer: `SimplePay, Barion, bankkártya, utánvét és átutalás — az igényednek megfelelő kombinációt alakítjuk ki.` },
      { question: `${city.name} területén tudtok segíteni a webshop indításában?`, answer: `Igen, ${city.inCity} is teljes körű webshop fejlesztési szolgáltatást nyújtunk. Online együttműködéssel is gördülékenyen zajlik a projekt.` },
    ],
    cta: 'Ingyenes webshop ajánlat',
  },
  facebook: {
    title: 'Facebook hirdetés kezelés',
    slug: 'facebook-hirdetes',
    badge: 'Facebook & Instagram hirdetések',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    heroDesc: (city: City) =>
      `Professzionális Facebook és Instagram hirdetés kezelés ${city.inCity} vállalkozásoknak. Célzott Meta kampányok, amelyek valódi ügyfeleket hoznak — napi optimalizálással, havi riporttal.`,
    intro: (city: City) =>
      `Facebook hirdetéseket szeretnél indítani ${city.inCity}? A NEZOR csapata célzott Meta kampányokat kezel ${city.adjective} és országos vállalkozásoknak egyaránt. Pontos célközönség-meghatározással, napi optimalizálással és átlátható havi riporttal dolgozunk — hogy minden forint a legjobb helyre kerüljön.`,
    features: [
      'Facebook és Instagram kampányok',
      'Pontos célközönség-meghatározás',
      'Napi optimalizálás és monitorozás',
      'Kreatív szövegek és vizuálok',
      'Havi részletes riport',
      'Átlátható büdzsé kezelés',
    ],
    faq: (city: City) => [
      { question: `Mekkora büdzsével érdemes elkezdeni ${city.inCity}?`, answer: `${city.inCity} napi 1000-2000 Ft-tal már érdemi eredményeket lehet elérni helyi célzással. Az optimális büdzsét az iparág és a célközönség mérete határozza meg.` },
      { question: `Mennyi idő alatt látszanak az eredmények a ${city.adjective} hirdetéseknél?`, answer: `Az első eredmények 1-2 héten belül láthatók. A kampány optimalizálása folyamatos, és az első hónap végére már pontosabb képet kapunk az eredményekről.` },
      { question: `${city.name} területén is vállaltok hirdetés kezelést?`, answer: `Igen, ${city.inCity} is teljes körű Facebook és Instagram hirdetés kezelési szolgáltatást nyújtunk. Helyi és országos célzással egyaránt dolgozunk.` },
      { question: `Kapok-e riportot a ${city.adjective} kampány eredményeiről?`, answer: `Igen, minden hónapban részletes riportot küldünk az elért eredményekről — elérés, kattintások, leadek, büdzsé felhasználás.` },
    ],
    cta: 'Ingyenes hirdetési ajánlat',
  },
}

interface Props {
  city: City
  service: ServiceType
}

export function CityServicePage({ city, service }: Props) {
  const cfg = serviceConfig[service]
  const faqItems = cfg.faq(city)

  const otherCities = cities
    .filter(c => c.slug !== city.slug && c.isLocal === city.isLocal)
    .slice(0, 6)

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
          <div className={`animate-fade-up inline-flex items-center gap-2 ${cfg.bg} ${cfg.color} text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-5`}>
            <MapPin className="w-3.5 h-3.5" />
            {cfg.badge} — {city.name}
          </div>
          <h1 className="animate-fade-up-delay-1 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-5">
            {cfg.title} <span className="text-gradient">{city.inCity}</span>
          </h1>
          <p className="animate-fade-up-delay-2 text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            {cfg.heroDesc(city)}
          </p>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kapcsolat" size="lg" className="glow-pulse">
              {cfg.cta} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/csomagok" variant="outline" size="lg">
              Csomagok megtekintése
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Bemutatkozás */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            {cfg.title} {city.inCity} — miért a NEZOR?
          </h2>
          <p className="text-muted leading-relaxed text-lg mb-6">
            {cfg.intro(city)}
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

        {/* Miért mi */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-6">
            Amivel más {city.adjective} cégek nem tudnak versenyezni
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Gyors átfutás', desc: 'Alap projektek 1-2 héten belül elkészülnek — nem váratsz hónapokat.' },
              { title: 'Kiemelkedő ár-érték', desc: 'Áraink a piaci átlag alatt vannak, minőségünk felett.' },
              { title: 'Helyi tapasztalat', desc: `Ismerjük a ${city.adjective} piacot és az itteni vállalkozások igényeit.` },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card">
                <h3 className="font-display font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionHeading label="GYIK" title={`Kérdések a ${cfg.title.toLowerCase()}ről ${city.inCity}`} centered={false} />
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
              Ingyenes konzultáció — kötelezettség nélkül.
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
