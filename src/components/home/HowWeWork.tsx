import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    num: '01',
    title: 'Megértjük a vállalkozásod',
    desc: 'Ki a célügyfeled, ki a konkurensed, és mi az, ami téged megkülönböztet. Erre épül minden.',
  },
  {
    num: '02',
    title: 'Felépítjük az ügyfélszerző rendszert',
    desc: 'Weboldal + Google megjelenés + Facebook hirdetés — egy célra hangolva: ajánlatkérések.',
  },
  {
    num: '03',
    title: 'Több hívás, több ajánlatkérés',
    desc: 'A rendszer a háttérben dolgozik — te arra koncentrálsz, amihez igazán értesz.',
  },
]

export function HowWeWork() {
  return (
    <section className="py-16 md:py-20" style={{ background: '#f4f7fb' }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan mb-3">
          Hogyan csináljuk
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-black text-dark leading-tight mb-10">
          3 lépés, és több ügyfelet kapsz.
        </h2>

        <div className="flex flex-col divide-y divide-blue-100">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-5 py-6">
              <span
                className="text-5xl font-black leading-none flex-shrink-0"
                style={{ color: '#AAFF00', textShadow: '0 0 20px rgba(170,255,0,0.4)' }}
              >
                {step.num}
              </span>
              <div>
                <h3 className="text-lg font-black text-dark mb-1">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button href="/kapcsolat" size="lg" className="bg-lime text-dark font-black hover:bg-lime/90 border-0 shadow-none">
            Ingyenes weboldal audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
