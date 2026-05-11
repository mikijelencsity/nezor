'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Weboldalak',          href: '/weboldalak',           number: '01' },
  { label: 'Webshopok',           href: '/webshopok',             number: '02' },
  { label: 'Facebook hirdetések', href: '/facebook-hirdetesek',   number: '03' },
  { label: 'Csomagok',            href: '/csomagok',              number: '04' },
  { label: 'Referenciák',         href: '/referenciak',           number: '05' },
  { label: 'Blog',                href: '/blog',                  number: '06' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Top bar ── */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100/80'
            : 'bg-white border-b border-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl">
            <span className="text-gradient">NEZOR</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-display font-medium transition-colors relative group',
                  pathname === link.href ? 'text-cyan' : 'text-dark hover:text-cyan'
                )}
              >
                {link.label}
                <span className={cn(
                  'absolute -bottom-0.5 left-0 h-0.5 bg-cyan rounded-full transition-all duration-300',
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                )} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Button href="/kapcsolat" size="sm">Ajánlatot kérek</Button>
          </div>

          {/* Hamburger */}
          <motion.button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü megnyitása"
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-5 h-5 text-dark" />
          </motion.button>
        </nav>
      </header>

      {/* ── Full-screen mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel — slides in from right */}
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-sm bg-dark flex flex-col overflow-hidden lg:hidden"
              style={{ willChange: 'transform' }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <span className="text-gradient font-display font-bold text-2xl">NEZOR</span>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.85, rotate: 90 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Menü bezárása"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                style={{ originX: 0 }}
                className="h-px bg-white/10 mx-6 mb-6"
              />

              {/* Nav items */}
              <nav className="flex-1 px-6 space-y-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'group flex items-center gap-4 py-3.5 rounded-2xl px-4 transition-all',
                        pathname === link.href
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      <span className="text-xs font-display font-bold text-cyan/60 w-5">{link.number}</span>
                      <span className="font-display font-bold text-lg flex-1">{link.label}</span>
                      <ArrowRight className={cn(
                        'w-4 h-4 transition-all',
                        pathname === link.href ? 'text-cyan' : 'text-white/20 group-hover:text-cyan group-hover:translate-x-1'
                      )} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="px-6 pb-8 pt-4 border-t border-white/10"
              >
                <Link
                  href="/kapcsolat"
                  className="flex items-center justify-center gap-2 w-full bg-cyan text-white font-display font-bold py-3.5 rounded-2xl mb-4 hover:bg-cyan-dark transition-colors glow-pulse"
                  onClick={() => setMobileOpen(false)}
                >
                  Ajánlatot kérek <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:nezorweb@gmail.com"
                  className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  nezorweb@gmail.com
                </a>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-20 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
