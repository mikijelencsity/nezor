'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-cyan-light/30" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative text-center px-4 max-w-xl mx-auto">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          className="mb-6"
        >
          <span
            className="font-display font-bold leading-none select-none"
            style={{
              fontSize: 'clamp(100px, 20vw, 180px)',
              background: 'linear-gradient(135deg, #e0f9ff, #00CFFF 40%, #0090FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.25,
            }}
          >
            404
          </span>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.15 }}
          className="w-16 h-16 bg-cyan-light rounded-2xl flex items-center justify-center mx-auto mb-6"
        >
          <Search className="w-7 h-7 text-cyan" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.2 }}
          className="text-3xl md:text-4xl font-display font-bold text-dark mb-4"
        >
          Ez az oldal nem létezik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.28 }}
          className="text-muted text-lg mb-10 leading-relaxed"
        >
          A keresett oldal nem található — valószínűleg megváltozott a cím vagy töröltük.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.36 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/" size="lg">
            <Home className="w-4 h-4 mr-2" />
            Vissza a főoldalra
          </Button>
          <Button href="/kapcsolat" variant="outline" size="lg">
            Vedd fel a kapcsolatot
          </Button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            { label: 'Weboldalak', href: '/weboldalak' },
            { label: 'Webshopok', href: '/webshopok' },
            { label: 'Csomagok', href: '/csomagok' },
            { label: 'Referenciák', href: '/referenciak' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-cyan transition-colors px-4 py-2 bg-secondary rounded-full hover:bg-cyan-light"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
