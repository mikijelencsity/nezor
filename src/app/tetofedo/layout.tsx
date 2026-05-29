import type { ReactNode } from 'react'
import Link from 'next/link'

export default function TetofedoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <Link href="/" className="font-display font-bold text-xl text-gradient">
          NEZOR
        </Link>
      </header>
      <main className="pt-14">
        {children}
      </main>
    </div>
  )
}
