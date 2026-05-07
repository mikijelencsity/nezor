import Link from 'next/link'
import { Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-gradient font-display font-bold text-2xl">NEZOR</span>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Professzionális weboldal és webshop készítés, Facebook hirdetések — Bács-Kiskun megyében és egész Magyarországon.
            </p>
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
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan transition-colors" aria-label="Facebook">
                <span className="text-xs font-bold leading-none">f</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan transition-colors" aria-label="Instagram">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} NEZOR. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  )
}
