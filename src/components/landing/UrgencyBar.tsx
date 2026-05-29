'use client'

import { Zap } from 'lucide-react'

export function UrgencyBar() {
  return (
    <div className="fixed top-14 left-0 right-0 z-30 bg-orange-500 text-white text-center py-2 px-4 text-sm font-semibold">
      <span className="inline-flex items-center gap-2">
        <Zap className="w-4 h-4 flex-shrink-0" />
        Júniusi akció — Csak 3 hely maradt! Weboldal + 2 ingyenes Facebook hirdetés
        <Zap className="w-4 h-4 flex-shrink-0" />
      </span>
    </div>
  )
}
