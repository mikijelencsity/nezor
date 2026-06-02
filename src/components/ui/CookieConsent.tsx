'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const STORAGE_KEY = 'nezor_cookie_consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    window.dispatchEvent(new Event('nezor_cookie_accepted'))
    setVisible(false)
  }

  function necessary() {
    localStorage.setItem(STORAGE_KEY, 'necessary')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          className="fixed bottom-4 left-4 sm:left-6 w-[calc(100%-2rem)] sm:w-80 z-[90] rounded-2xl shadow-2xl p-5"
          style={{ background: '#0a1f44', border: '1px solid rgba(255,255,255,0.1)' }}
          role="dialog"
          aria-label="Cookie hozzájárulás"
        >
          <p className="font-display font-bold text-white text-sm mb-2">Süti beállítások</p>

          <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Az oldal működéséhez szükséges sütiket mindig használjuk. A látogatottság méréséhez (Google Analytics) a hozzájárulásodat kérjük.{' '}
            <Link href="/adatvedelem#sutik" className="underline" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Részletek
            </Link>
          </p>

          <div className="flex gap-2">
            <button
              onClick={accept}
              className="flex-1 text-xs font-black py-2.5 rounded-xl transition-colors"
              style={{ background: '#AAFF00', color: '#0a1f44' }}
            >
              Elfogadom
            </button>
            <button
              onClick={necessary}
              className="flex-1 text-xs font-semibold py-2.5 rounded-xl transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Csak szükséges
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
