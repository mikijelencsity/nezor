'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQItem } from '@/types'
import { cn } from '@/lib/utils'

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left font-display font-semibold text-dark hover:bg-secondary transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={cn('w-5 h-5 text-cyan flex-shrink-0 transition-transform', openIndex === index && 'rotate-180')}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 text-muted bg-white border-t border-gray-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
