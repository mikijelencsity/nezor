'use client'
import Link from 'next/link'
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Weboldal készítés',        href: '/weboldalak' },
  { label: 'Webshop fejlesztés',       href: '/webshopok' },
  { label: 'Facebook hirdetés kezelés', href: '/facebook-hirdetesek' },
  { label: 'Csomagok és árak',         href: '/csomagok' },
  { label: 'Munkáink',                 href: '/referenciak' },
  { label: 'Szakmai blog',             href: '/blog' },
  { label: 'Városok',                  href: '/varosok' },
]

export function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1a1a2e 0%, #12121e 50%, #0e0e18 100%)' }}
    >
      {/* Top cyan border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,207,255,0.5) 30%, rgba(0,207,255,0.5) 70%, transparent)' }} />

      {/* Grid + glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,207,255,0.09) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(80,120,255,0.07) 0%, transparent 70%)' }} />

      {/* NEZOR watermark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(80px, 18vw, 180px)',
          fontWeight: 900,
          fontFamily: 'var(--font-display), sans-serif',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(0,207,255,0.09)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        NEZOR
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:pb-6">

        {/* Desktop: 4 columns | Mobile: stacked with dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-10">

          {/* Brand */}
          <div>
            <span className="text-gradient font-display font-bold text-3xl block mb-3">NEZOR</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professzionális weboldal és webshop készítés, Facebook hirdetések — Bács-Kiskun megyétől az egész országig.
            </p>
            {/* Social icons — larger on mobile */}
            <div className="flex gap-3">
              {[
                { Icon: FaFacebook, href: '#', label: 'Facebook',  rotate: -12 },
                { Icon: FaInstagram, href: '#', label: 'Instagram', rotate:  12 },
              ].map(({ Icon, href, label, rotate }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, rotate, backgroundColor: '#00CFFF' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  className="w-11 h-11 bg-white/8 border border-white/10 rounded-xl flex items-center justify-center text-white hover:border-cyan/30 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-cyan rounded-full inline-block" />
              Szolgáltatások
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-cyan transition-all -translate-x-1 group-hover:translate-x-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-cyan rounded-full inline-block" />
              Kapcsolat
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@nezor.hu"
                  className="group flex items-center gap-3 p-3 bg-white/5 border border-white/8 rounded-xl hover:border-cyan/30 hover:bg-white/8 transition-all"
                >
                  <div className="w-8 h-8 bg-cyan/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-cyan" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 mb-0.5">Email</div>
                    <div className="text-xs text-gray-300 group-hover:text-white transition-colors font-medium">info@nezor.hu</div>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 p-3 bg-white/5 border border-white/8 rounded-xl">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 mb-0.5">Helyszín</div>
                  <div className="text-xs text-gray-300 font-medium">Bács-Kiskun megye</div>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 bg-white/5 border border-white/8 rounded-xl">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 mb-0.5">Válaszidő</div>
                  <div className="text-xs text-gray-300 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    24 órán belül
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} NEZOR. Minden jog fenntartva.</span>
          <div className="flex items-center gap-4">
            <Link href="/adatvedelem" className="hover:text-gray-400 transition-colors">Adatvédelmi tájékoztató</Link>
            <Link href="/adatvedelem#sutik" className="hover:text-gray-400 transition-colors">Sütik</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
