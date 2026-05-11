'use client'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="text-white relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #1a1a2e 0%, #12121e 50%, #0e0e18 100%)' }}>

      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,207,255,0.5) 30%, rgba(0,207,255,0.5) 70%, transparent)' }} />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />

      {/* Cyan glow — top left */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,207,255,0.08) 0%, transparent 70%)' }} />

      {/* Blue glow — bottom right */}
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(80,120,255,0.07) 0%, transparent 70%)' }} />

      {/* Big NEZOR watermark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(80px, 18vw, 180px)',
          fontWeight: 900,
          fontFamily: 'var(--font-display), sans-serif',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(0,207,255,0.08)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        NEZOR
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-gradient font-display font-bold text-2xl">NEZOR</span>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Professzionális weboldal és webshop készítés, Facebook hirdetések — Bács-Kiskun megyében és egész Magyarországon.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: FaFacebook, href: '#', label: 'Facebook', rotate: [-12, 12] },
                { Icon: FaInstagram, href: '#', label: 'Instagram', rotate: [12, -12] },
              ].map(({ Icon, href, label, rotate }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.18, rotate: rotate[0], backgroundColor: '#00CFFF' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-white"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Szolgáltatások</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/weboldalak" className="hover:text-cyan transition-colors">Weboldal készítés</Link></li>
              <li><Link href="/webshopok" className="hover:text-cyan transition-colors">Webshop fejlesztés</Link></li>
              <li><Link href="/facebook-hirdetesek" className="hover:text-cyan transition-colors">Facebook hirdetések</Link></li>
              <li><Link href="/csomagok" className="hover:text-cyan transition-colors">Csomagok és árak</Link></li>
              <li><Link href="/referenciak" className="hover:text-cyan transition-colors">Referenciák</Link></li>
              <li><Link href="/blog" className="hover:text-cyan transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Kapcsolat</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan" />
                <a href="mailto:nezorweb@gmail.com" className="hover:text-cyan transition-colors">nezorweb@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} NEZOR. Minden jog fenntartva.</span>
          <div className="flex items-center gap-4">
            <Link href="/adatvedelem" className="hover:text-gray-300 transition-colors">Adatvédelmi tájékoztató</Link>
            <Link href="/adatvedelem#sutik" className="hover:text-gray-300 transition-colors">Sütik</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
