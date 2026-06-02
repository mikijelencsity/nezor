import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 text-center" style={{ background: '#0a1f44' }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight mb-5">
          Ne hagyd, hogy a konkurensed vigye el{' '}
          <span className="text-lime">az ügyfeleket.</span>
        </h2>

        <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Megnézzük az online jelenléted és megmondjuk pontosan mi hiányzik, miért nem jönnek az ügyfelek — és mit lehet tenni. Ingyen, kötelezettség nélkül.
        </p>

        <Button href="/kapcsolat" size="lg" className="bg-lime text-dark font-black hover:bg-lime/90 border-0 shadow-none text-xl px-12 py-5 mb-4">
          Kérek ingyenes átvizsgálást
          <ArrowRight className="ml-3 w-6 h-6" />
        </Button>

        <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Visszahívunk 24 órán belül
        </p>

        <div
          className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
        >
          <Shield className="w-4 h-4 text-lime flex-shrink-0" />
          Ha 30 nap után nem tetszik az oldal, visszaadjuk a pénzt.
        </div>
      </div>
    </section>
  )
}
