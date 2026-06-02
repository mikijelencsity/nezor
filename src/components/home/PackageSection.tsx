import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const features = [
  '6–15 aloldal',
  'Teljes SEO optimalizálás',
  'Google Analytics integráció',
  'Blog modul',
  'Gyors betöltési idő',
  'Egyedi design',
  'AI keresők optimalizálása (ChatGPT, Perplexity is megtalál)',
  '2 Facebook hirdetés beállítása és elindítása',
]

export function PackageSection() {
  return (
    <section className="py-16 md:py-20" style={{ background: '#0a1f44' }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-lime mb-3">
          Induló csomag
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-black text-white leading-tight mb-10">
          Minden ami kell az induláshoz —<br />
          <span className="text-lime">egy csomagban.</span>
        </h2>

        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="px-8 py-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-dark mb-1">Weboldal + 2 Facebook hirdetés</h3>
              <p className="text-muted text-sm">Egyszeri díj · Mindent mi csinálunk, te csak jóváhagyod</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-4xl font-black text-dark leading-none">120.000 Ft</div>
              <div className="text-xs text-muted mt-1">egyszeri befektetés</div>
            </div>
          </div>

          {/* Features */}
          <div className="px-8 py-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-dark" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold text-dark">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="px-8 pb-8 pt-2">
            <Button href="/kapcsolat" size="lg" className="w-full justify-center bg-lime text-dark font-black hover:bg-lime/90 border-0 shadow-none text-base">
              Érdekel, kérek visszahívást
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-xs text-muted text-center mt-3">
              Visszahívunk 24 órán belül · Kötelezettség nélkül · Pénzvisszatérítési garancia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
