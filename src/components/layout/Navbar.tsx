'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/80'
          : 'bg-white border-b border-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/logo.png"
            alt="NEZOR"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-display font-medium text-dark hover:text-cyan transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-cyan rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <Button href="/kapcsolat" size="sm">Ajánlatot kérek</Button>
        </div>

        <button
          className="lg:hidden p-2 text-dark rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 px-3 font-display font-medium text-dark hover:text-cyan hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button href="/kapcsolat" size="sm" className="w-full">Ajánlatot kérek</Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
