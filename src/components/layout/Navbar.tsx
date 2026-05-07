'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Weboldalak', href: '/weboldalak' },
  { label: 'Webshopok', href: '/webshopok' },
  { label: 'Facebook hirdetések', href: '/facebook-hirdetesek' },
  { label: 'Csomagok', href: '/csomagok' },
  { label: 'Referenciák', href: '/referenciak' },
  { label: 'Blog', href: '/blog' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl text-dark">
          <span className="text-gradient">NEZOR</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-display font-medium text-dark hover:text-cyan transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button href="/kapcsolat" size="sm">Ajánlatot kérek</Button>
        </div>

        <button
          className="lg:hidden p-2 text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 font-display font-medium text-dark hover:text-cyan"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/kapcsolat" size="sm" className="w-full mt-2">Ajánlatot kérek</Button>
        </div>
      )}
    </header>
  )
}
