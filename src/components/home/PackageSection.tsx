import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const features = [
  '6–15 aloldal — minden fontos információ megvan',
  'Google keresőben megtalálható leszel',
  'Blog oldal — Google jobban ajánl, több látogató',
  'Az oldal azonnal betölt — senki nem kattint el',
  'Profi, egyedi megjelenés — nem sablon',
  'ChatGPT és más AI asszisztensek is ajánlanak téged',
  '2 Facebook hirdetés — beállítjuk, te csak fogadod a hívásokat',
]

export function PackageSection() {
  return (
    <section className="py-10 md:py-14" style={{ background: '#0a1f44' }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-lime mb-3">
          Induló csomag
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-black text-white leading-tight mb-6">
          Minden ami kell az induláshoz —{' '}
          <span className="text-lime">egy csomagban.</span>
        </h2>

        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-xl font-black text-dark mb-0.5">Weboldal + 2 Facebook hirdetés</h3>
              <p className="text-muted text-sm">Egyszeri díj · Mindent mi csinálunk, te csak jóváhagyod</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-3xl font-black text-dark leading-none">120.000 Ft</div>
              <div className="text-xs text-muted mt-1">egyszeri befektetés</div>
            </div>
          </div>

          {/* Features */}
          <div className="px-6 py-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
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
          <div className="px-6 pb-6 pt-2">
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
