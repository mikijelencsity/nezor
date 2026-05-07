import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyNezor } from '@/components/home/WhyNezor'
import { ReferencesPreview } from '@/components/home/ReferencesPreview'
import { PackagesTeaser } from '@/components/home/PackagesTeaser'
import { FAQSection } from '@/components/home/FAQSection'
import { BlogPreview } from '@/components/home/BlogPreview'
import { getLatestPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'NEZOR — Weboldal, Webshop és Facebook Hirdetések Magyarországon',
  description: 'Professzionális weboldal és webshop készítés, Facebook hirdetés kezelés Bács-Kiskun megyében és egész Magyarországon. Ingyenes konzultáció!',
  openGraph: {
    title: 'NEZOR — Weboldal, Webshop és Facebook Hirdetések',
    description: 'Professzionális digitális ügynökség — Bács-Kiskun megye és egész Magyarország.',
    url: 'https://nezor.hu',
  },
}

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3)

  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyNezor />
      <ReferencesPreview />
      <PackagesTeaser />
      <FAQSection />
      <BlogPreview posts={latestPosts} />
    </>
  )
}
