import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ResultsCTA() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-4">
          Kezdjük el
        </span>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
          Készen állsz{' '}
          <span className="text-gradient">több ügyfélre?</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Ingyenes, 30 perces átnézésben megmutatjuk hogyan lehetne a weboldalad több ügyfelet hozni. Kötelezettség nélkül.
        </p>

        <Button href="/kapcsolat" size="lg" className="glow-pulse mb-6">
          Ingyenes weboldal audit
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className="flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Shield className="w-4 h-4 text-cyan flex-shrink-0" />
          Ha 30 nap után nem tetszik az oldal, visszaadjuk a pénzt.
        </p>
      </div>
    </section>
  )
}
