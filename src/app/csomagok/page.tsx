import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { websitePackages, webshopPackages } from '@/data/packages'
import { Package } from '@/types'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Csomagok és árak — Weboldal, Webshop',
  description: 'Weboldal és webshop csomagok egyszeri díjas és havidíjas konstrukcióban. Áttekinthető árak, rugalmas feltételek.',
  openGraph: {
    title: 'Csomagok és árak — NEZOR',
    description: 'Weboldal és webshop csomagok egyszeri díjas és havidíjas konstrukcióban.',
    url: 'https://nezor.hu/csomagok',
  },
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className={cn('bg-white rounded-2xl p-8 shadow-card flex flex-col', pkg.highlighted && 'border-2 border-cyan shadow-card-hover')}>
      {pkg.highlighted && (
        <span className="self-start text-xs bg-cyan text-white px-3 py-1 rounded-full mb-4 font-semibold">Népszerű</span>
      )}
      <h3 className="text-2xl font-display font-bold text-dark mb-2">{pkg.name}</h3>
      <p className="text-muted text-sm mb-6">{pkg.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-secondary rounded-xl">
        <div className="text-center">
          <div className="text-xs text-muted mb-1">Egyszeri díj</div>
          <div className="font-display font-bold text-dark">{pkg.oneTimePrice}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-muted mb-1">Havidíj</div>
          <div className="font-display font-bold text-dark">{pkg.monthlyPrice}</div>
          {pkg.monthlyUpdates && <div className="text-xs text-cyan mt-1">{pkg.monthlyUpdates} frissítés/hó</div>}
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted">
            <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <Button href="/kapcsolat" variant={pkg.highlighted ? 'primary' : 'outline'} className="w-full">
        Ajánlatot kérek
      </Button>
    </div>
  )
}

export default function CsomagokPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Csomagok"
          title="Átlátható árak, rugalmas feltételek"
          description="Minden csomagnál választhatsz egyszeri díjas vagy havidíjas konstrukció között."
        />

        <section className="mb-20">
          <h2 className="text-2xl font-display font-bold text-dark mb-8 text-center">Weboldal csomagok</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {websitePackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-8 text-center">Webshop csomagok</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webshopPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </section>

        <div className="mt-16 text-center bg-secondary rounded-2xl p-10">
          <h3 className="text-2xl font-display font-bold text-dark mb-3">Nem találod amit keresel?</h3>
          <p className="text-muted mb-6">Egyedi igényekre egyedi megoldást adunk. Vedd fel velünk a kapcsolatot!</p>
          <Button href="/kapcsolat" size="lg">Egyedi ajánlat kérése</Button>
        </div>
      </div>
    </div>
  )
}
