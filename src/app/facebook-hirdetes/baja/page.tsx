import type { Metadata } from 'next'
import { ArrowRight, CheckCircle, MapPin, Clock, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Facebook hirdetés kezelés Baja — Meta kampányok | NEZOR',
  description: 'Facebook és Instagram hirdetés kezelés Baján. Célzott Meta kampányok bajai vállalkozásoknak — napi optimalizálással, havi riporttal. Ingyenes ajánlat!',
  openGraph: {
    title: 'Facebook hirdetés kezelés Baja — NEZOR',
    description: 'Célzott Meta kampányok bajai vállalkozásoknak. Ingyenes ajánlat!',
    url: 'https://nezor.hu/facebook-hirdetes/baja',
  },
}

const faqItems = [
  { question: 'Mekkora büdzsével érdemes elkezdeni Baján?', answer: 'Bajai helyi célzással napi 1 000-2 000 Ft-tal már érdemi eredményeket lehet elérni. Hatékony kampányhoz napi 3 000-5 000 Ft ajánlott. Az optimális büdzsét az iparág és a célközönség határozza meg.' },
  { question: 'Mennyi idő alatt látszanak az eredmények Baján?', answer: 'Az első érdeklődők 1-2 héten belül jönnek. A Meta algoritmusának az első hétben kell idő az adatgyűjtésre. A kampány folyamatosan javul az optimalizálással.' },
  { question: 'Csak bajai embereket lehet célozni?', answer: 'Igen, pontosan beállítható a Baja + X km-es körzet célzás. De az egész Magyarországra is bővíthető a kampány ha szükséges.' },
  { question: 'Instagram hirdetéseket is csináltok Baján?', answer: 'Igen, a Meta rendszere Facebook-ot és Instagramot is lefed. Mindkét platformra optimalizált kampányokat futtatunk.' },
  { question: 'Kapok-e riportot az eredményekről?', answer: 'Igen, minden hónapban részletes riportot küldünk — elérés, kattintások, leadek, büdzsé felhasználás. Mindig tudod mire ment minden forint.' },
  { question: 'Mi szükséges az induláshoz?', answer: 'Egy Facebook oldal és egy rövid brief a vállalkozásodról. A hirdetési fiókot és a kampányokat mi állítjuk be Baján is.' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-blue-50/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Facebook hirdetés — Baja
          </div>
          <h1 className="animate-fade-up-delay-1 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-5">
            Facebook hirdetés <span className="text-gradient">Baján</span>
          </h1>
          <p className="animate-fade-up-delay-2 text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Célzott Facebook és Instagram hirdetések bajai vállalkozásoknak.
            Napi 1 000 Ft-tól érdemi eredmény Baján — napi optimalizálással, havi riporttal.
          </p>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button href="/kapcsolat" size="lg" className="glow-pulse">
              Ingyenes hirdetési ajánlat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/csomagok" variant="outline" size="lg">
              Csomagok megtekintése
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            {[
              { icon: Clock, text: 'Napi optimalizálás' },
              { icon: Star, text: 'Havi riport' },
              { icon: Zap, text: 'Gyors eredmények' },
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
            Facebook hirdetés Baján — miért hatékony helyi célzással?
          </h2>
          <p className="text-muted leading-relaxed text-base mb-4">
            Baja és 30-50 km-es körzetében több tízezer Facebook és Instagram felhasználó él. A Meta hirdetési rendszerével pontosan megcélozhatod azokat, akik életkoruk, érdeklődési körük és helyszínük alapján a legjobb potenciális ügyfeleid. Ez azt jelenti, hogy a hirdetésed nem véletlenszerű embereket ér el — hanem pontosan a bajai és környékbeli érdeklődőket.
          </p>
          <p className="text-muted leading-relaxed text-base mb-6">
            A NEZOR csapata Baján és egész Bács-Kiskun megyében kezel Facebook és Instagram kampányokat. Helyi piacismeretünkkel pontosan tudjuk, milyen üzenetekre reagálnak a bajai vásárlók, és milyen célzással érhető el a legjobb eredmény.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Bajai és környéki helyi célzás',
              'Facebook és Instagram kampányok',
              'Napi optimalizálás és monitorozás',
              'Kreatív szövegek és vizuálok',
              'Havi részletes riport',
              'Átlátható büdzsé kezelés',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                <span className="text-sm font-medium text-dark">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Miért Meta */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            Miért érdemes Facebook hirdetést indítani Baján?
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            A hagyományos helyi hirdetések (újság, szórólap) egyre kevésbé hatékonyak. A bajai fogyasztók az okostelefonjukon töltik az idejük nagy részét — és ott a legjobb elérni őket. A Facebook és Instagram hirdetések előnye: pontosan mérhető, bármikor módosítható, és a kattintásonkénti költség sokkal alacsonyabb mint a hagyományos médiafelületeké.
          </p>
          <p className="text-muted leading-relaxed">
            Bajai helyi célzással a kattintási költség akár 50-150 Ft is lehet — ez azt jelenti, hogy napi 2 000 Ft büdzsével 13-40 potenciális ügyfelet érhetsz el naponta, akik ténylegesen érdeklődnek a kínálatod iránt.
          </p>
        </section>

        {/* Kampánytípusok */}
        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-4">
            Milyen kampányok működnek Baján?
          </h2>
          <div className="space-y-4">
            {[
              { title: 'Helyi forgalom kampány', desc: 'Bajai és környéki embereket célzunk meg a vállalkozásod ajánlatával. Ideális minden helyi szolgáltatónak és üzletnek.' },
              { title: 'Lead generáló kampány', desc: 'Közvetlenül a Facebookon gyűjtünk érdeklődőket — nevet, emailt, telefonszámot. Nem kell külső weboldalra kattintani.' },
              { title: 'Weboldal forgalom kampány', desc: 'Hirdetéssel terelünk látogatókat a weboldaladra. Kombinálva retargetinggel a leghatékonyabb bajai ügyfélszerzési módszer.' },
              { title: 'Retargeting kampány', desc: 'Azokat célozzuk, akik már jártak a weboldaladan. Ezek a kampányok a legjobb konverziós aránnyal bírnak Baján is.' },
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
          <h2 className="text-2xl font-display font-bold text-dark mb-6">Miért a NEZOR Baján?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: 'Napi optimalizálás', desc: 'Nem állítjuk be és felejtjük el — minden nap megnézzük és finomítjuk a bajai kampányokat.' },
              { icon: Star, title: 'Helyi piacismeret', desc: 'Tudjuk mi működik Baján. Ismerjük a helyi fogyasztókat és az itteni vállalkozások igényeit.' },
              { icon: Zap, title: 'Átlátható riportálás', desc: 'Minden hónapban részletes riportot kapsz — pontosan tudod mire ment minden forint.' },
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
          <SectionHeading label="GYIK" title="Kérdések a Facebook hirdetésről Baján" centered={false} />
          <FAQAccordion items={faqItems} />
        </section>

        {/* Más városok */}
        <section>
          <h2 className="text-lg font-display font-bold text-dark mb-4">Facebook hirdetés más városokban is</h2>
          <div className="flex flex-wrap gap-2">
            {['Kecskemét', 'Kalocsa', 'Kiskunhalas', 'Budapest', 'Pécs', 'Debrecen'].map((city) => (
              <Link key={city} href={`/facebook-hirdetes/${city.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s/g, '-')}`}
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Kezdjük el a bajai hirdetést!</h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">Ingyenes konzultáció — megmutatjuk milyen eredmény érhető el Baján.</p>
            <Button href="/kapcsolat" size="lg">
              Ingyenes hirdetési ajánlat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
