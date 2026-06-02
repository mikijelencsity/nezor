import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const trustItems = [
  '24h visszahívás garantálva',
  'Addig változtatunk, amíg nem tetszik',
  '20+ elégedett ügyfél',
]

export function Hero() {
  return (
    <section style={{ background: '#0a1f44' }}>
      {/* 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

        {/* LEFT — text */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-14 lg:py-20">
          <span className="inline-block bg-lime text-dark text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded mb-6 w-fit">
            Weboldal · Hirdetés · Több ügyfél
          </span>

          <h1 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-5">
            Nincs weboldalad?
            <br />
            Vagy van, de nem hoz
            <br />
            <span className="text-cyan">egyetlen ügyfelet sem?</span>
          </h1>

          <p className="text-base md:text-lg mb-8 leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Megcsináljuk a weboldalad és a Facebook hirdetéseket — hogy az ügyfelek téged találjanak meg, ne a konkurensedet.
          </p>

          <Button href="/kapcsolat" size="lg" className="w-fit bg-lime text-dark font-black hover:bg-lime/90 border-0 shadow-none text-base px-7 py-4">
            Kérek ingyenes átvizsgálást →
          </Button>

          <p className="mt-3 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Visszahívunk 24 órán belül · Kötelezettség nélkül
          </p>
        </div>

        {/* RIGHT — full image */}
        <div className="relative hidden lg:block min-h-[520px]">
          <Image
            src="/hero-image.jpg"
            alt="Több ügyfél weboldalon keresztül"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Trust bar */}
      <div className="px-6 sm:px-10 lg:px-14 py-4 flex flex-wrap gap-5 md:gap-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <CheckCircle className="w-4 h-4 text-lime flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
