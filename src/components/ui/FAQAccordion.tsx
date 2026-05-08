'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQItem } from '@/types'

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            id={`faq-trigger-${index}`}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-display font-semibold text-dark hover:bg-secondary transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-panel-${index}`}
          >
            <span>{item.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              <ChevronDown className="w-5 h-5 text-cyan flex-shrink-0" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 32, mass: 0.8 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-muted bg-white border-t border-gray-100">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
