import type { Metadata } from 'next'
import { localBusinessSchema } from '@/lib/structured-data'
import { Hero } from '@/components/home/Hero'
import { PainSection } from '@/components/home/PainSection'
import { ReferencesSection } from '@/components/home/ReferencesSection'
import { FinalCTA } from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Weboldal, Webshop és Facebook Hirdetés | NEZOR',
  description: 'Több ügyfelet hozunk a vállalkozásodnak — weboldal, webshop és Facebook hirdetés kezelés Bács-Kiskun megyében és egész Magyarországon.',
  openGraph: {
    title: 'NEZOR — Több ügyfelet hozunk a vállalkozásodnak',
    description: 'Weboldal, webshop és Facebook hirdetés — egy céllal: több ügyfél.',
    url: 'https://nezor.hu',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <Hero />
      <PainSection />
      <ReferencesSection />
      <FinalCTA />
    </>
  )
}
