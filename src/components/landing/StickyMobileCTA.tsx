'use client'

import { Phone, FileText } from 'lucide-react'

export function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex gap-0 shadow-2xl"
      style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <a
        href="tel:+36704554703"
        className="flex-1 inline-flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-colors"
        style={{ background: '#C4531A', color: '#F5F3EF' }}
      >
        <Phone className="w-4 h-4" />
        Hívj most
      </a>
      <a
        href="#kapcsolat"
        className="flex-1 inline-flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-colors"
        style={{ color: '#F5F3EF', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
      >
        <FileText className="w-4 h-4" />
        Ajánlatot kérek
      </a>
    </div>
  )
}
