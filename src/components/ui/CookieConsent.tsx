'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const STORAGE_KEY = 'nezor_cookie_consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      // Small delay so it doesn't flash immediately
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          className="fixed bottom-4 left-4 sm:left-6 sm:right-auto w-[calc(100%-2rem)] sm:w-80 z-[90] bg-dark border border-white/10 rounded-2xl shadow-2xl p-5"
          role="dialog"
          aria-label="Cookie hozzájárulás"
        >
          {/* Close */}
          <button
            onClick={decline}
            className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Bezárás"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Icon + title */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-cyan/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-4 h-4 text-cyan" />
            </div>
            <span className="font-display font-bold text-white text-sm">Süti beállítások</span>
          </div>

          {/* Text */}
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Sütiket használunk a weboldal működéséhez és a látogatottság méréséhez.{' '}
            <Link href="/adatvedelem#sutik" className="text-cyan hover:underline">
              Részletek
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={accept}
              className="flex-1 bg-cyan text-white text-xs font-display font-bold py-2.5 rounded-xl hover:bg-cyan-dark transition-colors"
            >
              Elfogadom
            </button>
            <button
              onClick={decline}
              className="flex-1 bg-white/8 text-gray-300 text-xs font-display font-semibold py-2.5 rounded-xl hover:bg-white/15 transition-colors border border-white/10"
            >
              Csak szükséges
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
