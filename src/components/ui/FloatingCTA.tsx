'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolledDown = window.scrollY > 400
      const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 120
      setVisible(scrolledDown && !nearBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="fixed bottom-6 right-4 sm:right-6 z-[80]"
        >
          <Link
            href="/kapcsolat"
            className="group flex items-center gap-2.5 bg-dark text-white font-display font-bold text-sm px-5 py-3.5 rounded-full shadow-2xl hover:bg-cyan hover:text-white transition-colors duration-300 border border-white/10"
          >
            <Sparkles className="w-4 h-4 text-cyan group-hover:text-white transition-colors" />
            Ingyenes ajánlat
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
