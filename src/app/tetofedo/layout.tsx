import type { ReactNode } from 'react'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-serif',
  display: 'swap',
})

export default function TetofedoLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${playfair.variable} min-h-screen`} style={{ backgroundColor: '#111111' }}>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl tracking-tight" style={{ color: '#F5F3EF' }}>
            NEZOR
          </Link>
          <a
            href="tel:+36704554703"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: '#C4531A' }}
          >
            +36 70 455 4703
          </a>
        </div>
      </header>
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
