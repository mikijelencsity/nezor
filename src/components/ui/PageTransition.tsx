'use client'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname}>
        {/* Cyan curtain — sweeps across on every page change */}
        <motion.div
          className="fixed inset-0 z-[150] pointer-events-none origin-left"
          style={{ background: 'linear-gradient(135deg, #00CFFF, #0090FF)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: 0.85,
            times: [0, 0.45, 0.55, 1],
            ease: ['easeIn', 'linear', 'easeOut'],
          }}
        />

        {/* Page content — fades in after curtain passes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
