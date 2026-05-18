import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { cities, localCities, nationalCities } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Weboldal és webshop készítés városonként — NEZOR',
  description: 'Weboldal készítés, webshop fejlesztés és Facebook hirdetés kezelés Magyarország összes nagyobb városában. Bács-Kiskun megye és országos lefedettség.',
  openGraph: {
    title: 'Városok — NEZOR',
    description: 'Weboldal és webshop készítés Magyarország összes nagyobb városában.',
    url: 'https://nezor.hu/varosok',
  },
  robots: { index: true, follow: true },
}

const services = [
  { label: 'Weboldal készítés', slug: 'weboldal-keszites', color: 'bg-cyan text-white' },
  { label: 'Webshop készítés',  slug: 'webshop-keszites',  color: 'bg-orange-500 text-white' },
  { label: 'Facebook hirdetés', slug: 'facebook-hirdetes', color: 'bg-blue-600 text-white' },
]

function CityGroup({ title, cityList }: { title: string; cityList: typeof cities }) {
  return (
    <section className="mb-14">
      <h2 className="text-xl font-display font-bold text-dark mb-6 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-cyan" />
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cityList.map((city) => (
          <div key={city.slug} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="font-display font-bold text-dark mb-3">{city.name}</div>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/${city.slug}`}
                  className={`text-xs font-display font-semibold px-2.5 py-1 rounded-full ${s.color} hover:opacity-90 transition-opacity`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function VarosokPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Lefedettség</span>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
          Weboldal készítés <span className="text-gradient">városonként</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Weboldal készítés, webshop fejlesztés és Facebook hirdetés kezelés Bács-Kiskun megyétől az egész országig. Válaszd ki a városodat!
        </p>
      </div>

      <CityGroup title="Bács-Kiskun megye" cityList={localCities} />
      <CityGroup title="Magyarország — nagyobb városok" cityList={nationalCities} />
    </div>
  )
}
