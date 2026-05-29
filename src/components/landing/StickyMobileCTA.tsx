'use client'

import { Phone, MessageSquare } from 'lucide-react'

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-dark border-t border-white/10 px-4 py-3 flex gap-3 shadow-2xl">
      <a
        href="tel:+36704554703"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-display font-bold py-3 rounded-xl text-sm transition-colors"
      >
        <Phone className="w-4 h-4" />
        Visszahívást kérek
      </a>
      <a
        href="#kapcsolat"
        className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-cyan text-cyan font-display font-bold py-3 rounded-xl text-sm hover:bg-cyan hover:text-white transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        Ajánlatot kérek
      </a>
    </div>
  )
}
