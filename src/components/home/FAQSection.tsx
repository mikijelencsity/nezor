import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { homeFAQ } from '@/data/faq'

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="GYIK"
          title="Gyakori kérdések"
          description="Nem találod a választ? Vedd fel velünk a kapcsolatot!"
        />
        <FAQAccordion items={homeFAQ} />
      </div>
    </section>
  )
}
