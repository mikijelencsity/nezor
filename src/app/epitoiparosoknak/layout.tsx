import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Online jelenlét építőiparosoknak — Ingyenes útmutató | NEZOR',
  description: 'Töltsd le az ingyenes útmutatónkat: hogyan szerezz több ügyfelet online, ha építőipari szakember vagy.',
  robots: { index: false, follow: false },
}

export default function EpitoiparosLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
}
