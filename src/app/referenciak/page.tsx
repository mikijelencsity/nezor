import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { references } from '@/data/references'

export const metadata: Metadata = {
  title: 'Referenciák — Ügyfelek akikkel dolgoztunk',
  description: 'NEZOR referenciák — weboldalak és webshopok amiket elkészítettünk. Nézd meg a munkáinkat!',
  openGraph: {
    title: 'Referenciák — NEZOR',
    description: 'Weboldalak és webshopok amiket elkészítettünk.',
    url: 'https://nezor.hu/referenciak',
  },
}

export default function ReferenciakPage() {
  const weboldal = references.filter((r) => r.category === 'weboldal')
  const webshop = references.filter((r) => r.category === 'webshop')

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Referenciák"
          title="Büszke vagyunk az ügyfeleinkre"
          description="Nézd meg kikkel dolgoztunk eddig."
        />

        <section className="mb-16">
          <h2 className="text-xl font-display font-bold text-dark mb-6">Weboldalak</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {weboldal.map((ref) => (
              <article key={ref.id} className="border border-gray-100 rounded-2xl p-6 hover:border-cyan hover:shadow-card transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-dark text-lg">{ref.name}</h3>
                  {ref.url !== '#' && (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cyan transition-colors" aria-label={`${ref.name} weboldal megnyitása`}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted">{ref.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-dark mb-6">Webshopok</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {webshop.map((ref) => (
              <article key={ref.id} className="border border-gray-100 rounded-2xl p-6 hover:border-cyan hover:shadow-card transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-dark text-lg">{ref.name}</h3>
                  {ref.url !== '#' && (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cyan transition-colors" aria-label={`${ref.name} weboldal megnyitása`}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted">{ref.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
