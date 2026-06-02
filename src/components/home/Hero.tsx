import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BrowserMockup } from '@/components/home/BrowserMockup'

const trustItems = [
  '24h visszahívás garantálva',
  'Pénzvisszatérítési garancia',
  'Neked Sütöm · Estur Épker · Hellinger Kft.',
]

export function Hero() {
  return (
    <section style={{ background: '#0a1f44' }}>
      {/* 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">

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

        {/* RIGHT — browser mockup */}
        <div className="flex items-center justify-center px-6 py-10 lg:py-14 relative" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="w-full max-w-sm relative">
            <BrowserMockup url="estur.hu">
              <div
                className="w-full flex items-center justify-center flex-col gap-2"
                style={{ height: '240px', background: 'linear-gradient(160deg, #dce8ff 0%, #eef4ff 100%)' }}
              >
                <span style={{ fontSize: '40px', opacity: 0.18 }}>🏗️</span>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#1e4fd8', opacity: 0.4 }}>
                  Kliens weboldal screenshot
                </span>
              </div>
            </BrowserMockup>

            {/* Notification badge 1 */}
            <div className="absolute -right-4 top-10 bg-white rounded-xl px-3 py-2 shadow-xl flex items-center gap-2 text-xs font-bold text-dark whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-lime flex-shrink-0" />
              Új ajánlatkérés érkezett
            </div>

            {/* Notification badge 2 */}
            <div className="absolute -right-4 bottom-12 bg-white rounded-xl px-3 py-2 shadow-xl flex items-center gap-2 text-xs font-bold text-dark whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-cyan flex-shrink-0" />
              Új telefonhívás
            </div>
          </div>
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
