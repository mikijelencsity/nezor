import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ResultsCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-red-500 font-display font-semibold text-sm uppercase tracking-widest mb-4">
          Utolsó figyelmeztetés
        </span>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-6 leading-tight">
          Ne hagyd, hogy a konkurensed{' '}
          <span className="text-gradient">vigye el az ügyfeleket.</span>
        </h2>

        <p className="text-muted text-lg mb-4 max-w-xl mx-auto leading-relaxed">
          Kérj egy ingyenes auditot és nézd meg, hogyan tudna több érdeklődőt hozni a weboldalad.
        </p>

        <p className="text-dark font-semibold text-base mb-10">
          30 perc. Ingyen. Kötelezettség nélkül.
        </p>

        <Button href="/kapcsolat" size="lg" className="glow-pulse mb-6">
          Ingyenes weboldal audit kérése
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className="flex items-center justify-center gap-2 text-muted text-sm">
          <Shield className="w-4 h-4 text-cyan flex-shrink-0" />
          Addig dolgozunk rajta, amíg teljesen elégedett nem vagy.
        </p>
      </div>
    </section>
  )
}
