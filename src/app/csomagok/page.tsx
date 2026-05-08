import type { Metadata } from 'next'
import { Zap, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { PackageCard } from '@/components/ui/PackageCard'
import { websitePackages, webshopPackages } from '@/data/packages'
import { Package } from '@/types'

export const metadata: Metadata = {
  title: 'Csomagok és árak — Weboldal, Webshop',
  description: 'Weboldal és webshop csomagok egyszeri díjas és havidíjas konstrukcióban. Áttekinthető árak, rugalmas feltételek.',
  openGraph: {
    title: 'Csomagok és árak — NEZOR',
    description: 'Weboldal és webshop csomagok egyszeri díjas és havidíjas konstrukcióban.',
    url: 'https://nezor.hu/csomagok',
  },
}

function PricingSection({ title, packages }: { title: string; packages: Package[] }) {
  return (
    <section className="mb-24">
      <h2 className="text-2xl font-display font-bold text-dark mb-10 text-center flex items-center justify-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
        {title}
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {packages.map((pkg, i) => <PackageCard key={pkg.id} pkg={pkg} index={i} />)}
      </div>
    </section>
  )
}

export default function CsomagokPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark py-20 mb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white/10 text-white text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5 text-cyan" />
            Átlátható árazás
          </div>
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Rugalmas <span className="text-shimmer">csomagok</span>
          </h1>
          <p className="animate-fade-up-delay-2 text-gray-400 text-lg max-w-xl mx-auto">
            Minden csomagnál választhatsz egyszeri díjas vagy havidíjas konstrukció között — te döntöd el mi a legjobb.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingSection title="Weboldal csomagok" packages={websitePackages} />
        <PricingSection title="Webshop csomagok" packages={webshopPackages} />

        {/* Custom package */}
        <div className="mb-20 rounded-3xl bg-gradient-to-r from-cyan/10 to-blue-400/10 border border-cyan/20 p-10 md:p-14 text-center">
          <h3 className="text-2xl font-display font-bold text-dark mb-3">Egyedi igény?</h3>
          <p className="text-muted mb-6 max-w-lg mx-auto">Nem találtad meg amit keresel? Minden projekthez egyedi ajánlatot készítünk — ingyenesen.</p>
          <Button href="/kapcsolat" size="lg">
            Egyedi ajánlat kérése <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
