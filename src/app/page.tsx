import type { Metadata } from 'next'
import { faqSchema } from '@/lib/structured-data'
import { homeFAQ } from '@/data/faq'
import { Hero } from '@/components/home/Hero'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyNezor } from '@/components/home/WhyNezor'
import { ReferencesPreview } from '@/components/home/ReferencesPreview'
import { PackagesTeaser } from '@/components/home/PackagesTeaser'
import { FAQSection } from '@/components/home/FAQSection'
import { BlogPreview } from '@/components/home/BlogPreview'
import { StatsSection } from '@/components/home/StatsSection'
import { PartnersMarquee } from '@/components/home/PartnersMarquee'
import { Testimonials } from '@/components/home/Testimonials'
import { VideoShowcase } from '@/components/home/VideoShowcase'
import { getLatestPosts } from '@/lib/blog'
import { BlogPost } from '@/types'

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
  let latestPosts: BlogPost[] = []
  try {
    latestPosts = await getLatestPosts(3)
  } catch {
    // blog posts unavailable, render without them
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFAQ)) }}
      />
      <Hero />
      <StatsSection />
      <PartnersMarquee />
      <ServicesSection />
      <VideoShowcase />
      <WhyNezor />
      <Testimonials />
      <ReferencesPreview />
      <PackagesTeaser />
      <FAQSection />
      <BlogPreview posts={latestPosts} />
    </>
  )
}
