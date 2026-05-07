import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { references } from '@/data/references'

export function ReferencesPreview() {
  const preview = references.slice(0, 6)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Referenciák"
          title="Elégedett ügyfeleink"
          description="Nézd meg kik bíztak meg minket eddig."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {preview.map((ref) => (
            <article key={ref.id} className="border border-gray-100 rounded-xl p-5 hover:border-cyan hover:shadow-card transition-all group">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-semibold text-dark">{ref.name}</h3>
                  <p className="text-sm text-muted mt-1">{ref.description}</p>
                  <span className="inline-block mt-2 text-xs bg-cyan-light text-cyan px-2 py-0.5 rounded-full">
                    {ref.category === 'webshop' ? 'Webshop' : 'Weboldal'}
                  </span>
                </div>
                {ref.url !== '#' && (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cyan transition-colors" aria-label={`${ref.name} weboldal megnyitása`}>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Button href="/referenciak" variant="outline">
            Összes referencia <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
