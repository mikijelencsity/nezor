import type { Metadata } from 'next'
import { UrgencyBar } from '@/components/landing/UrgencyBar'
import { TetofedoHero } from '@/components/landing/TetofedoHero'
import { TetofedoPainPoints } from '@/components/landing/TetofedoPainPoints'
import { TetofedoOffer } from '@/components/landing/TetofedoOffer'
import { TetofedoHowItWorks } from '@/components/landing/TetofedoHowItWorks'
import { TetofedoReferences } from '@/components/landing/TetofedoReferences'
import { TetofedoObjections } from '@/components/landing/TetofedoObjections'
import { TetofedoCTA } from '@/components/landing/TetofedoCTA'
import { StickyMobileCTA } from '@/components/landing/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Tetőfedő weboldal + 2 Facebook hirdetés — 100.000 Ft | NEZOR',
  description: 'Profi tetőfedő weboldal és 2 Facebook hirdetés 100.000 Ft-ért. Garantált online jelenlét, több megkeresés. Csak 3 hely maradt!',
  robots: { index: false, follow: false },
}

export default function TetofedoPage() {
  return (
    <>
      <UrgencyBar />
      <div className="mt-10">
        <TetofedoHero />
        <TetofedoPainPoints />
        <TetofedoOffer />
        <TetofedoHowItWorks />
        <TetofedoReferences />
        <TetofedoObjections />
        <TetofedoCTA />
        <div className="pb-20 lg:pb-0" />
      </div>
      <StickyMobileCTA />
    </>
  )
}
