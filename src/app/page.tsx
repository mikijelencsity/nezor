import type { Metadata } from 'next'
import { faqSchema } from '@/lib/structured-data'
import { homeFAQ } from '@/data/faq'
import { Hero } from '@/components/home/Hero'
import { SocialProof } from '@/components/home/SocialProof'
import { ServicesSection } from '@/components/home/ServicesSection'
import { HowWeWork } from '@/components/home/HowWeWork'
import { PackagesTeaser } from '@/components/home/PackagesTeaser'
import { FAQSection } from '@/components/home/FAQSection'
import { ResultsCTA } from '@/components/home/ResultsCTA'

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFAQ)) }}
      />
      <Hero />
      <SocialProof />
      <ServicesSection />
      <HowWeWork />
      <PackagesTeaser />
      <FAQSection />
      <ResultsCTA />
    </>
  )
}
