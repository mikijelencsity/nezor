import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug } from '@/data/cities'
import { CityServicePage } from '@/components/city/CityServicePage'

export async function generateStaticParams() {
  return cities.map(city => ({ varos: city.slug }))
}

export async function generateMetadata({ params }: { params: { varos: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.varos)
  if (!city) return {}
  return {
    title: `Weboldal készítés ${city.name} — NEZOR`,
    description: `Professzionális weboldal készítés ${city.inCity}. Gyors, mobilbarát, SEO-optimalizált weboldalak kis- és középvállalkozásoknak. Ingyenes ajánlat!`,
    openGraph: {
      title: `Weboldal készítés ${city.name} — NEZOR`,
      description: `Professzionális weboldal készítés ${city.inCity}. Ingyenes ajánlat!`,
      url: `https://nezor.hu/weboldal-keszites/${city.slug}`,
    },
  }
}

export default function Page({ params }: { params: { varos: string } }) {
  const city = getCityBySlug(params.varos)
  if (!city) notFound()
  return <CityServicePage city={city} service="weboldal" />
}
