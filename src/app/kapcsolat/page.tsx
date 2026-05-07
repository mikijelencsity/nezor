import type { Metadata } from 'next'
import { Mail, Clock, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Kapcsolat — Ingyenes konzultáció',
  description: 'Vedd fel velünk a kapcsolatot! Ingyenes konzultáció, 24 órán belüli válasz. Weboldal, webshop és Facebook hirdetés ajánlat.',
  openGraph: {
    title: 'Kapcsolat — NEZOR',
    description: 'Ingyenes konzultáció, 24 órán belüli válasz.',
    url: 'https://nezor.hu/kapcsolat',
  },
}

export default function KapcsolatPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Kapcsolat"
          title="Írj nekünk!"
          description="Az első konzultáció ingyenes és kötelezettség nélküli. 24 órán belül válaszolunk."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="font-display font-bold text-dark mb-4">Elérhetőség</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted">
                  <Mail className="w-5 h-5 text-cyan flex-shrink-0" />
                  <a href="mailto:nezorweb@gmail.com" className="hover:text-cyan transition-colors">nezorweb@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 text-muted">
                  <Clock className="w-5 h-5 text-cyan flex-shrink-0" />
                  <span>Válasz 24 órán belül</span>
                </li>
                <li className="flex items-center gap-3 text-muted">
                  <MapPin className="w-5 h-5 text-cyan flex-shrink-0" />
                  <span>Bács-Kiskun megye, Magyarország</span>
                </li>
              </ul>
            </div>
            <div className="bg-dark text-white rounded-2xl p-6">
              <h3 className="font-display font-bold mb-3">Ingyenes konzultáció</h3>
              <p className="text-gray-400 text-sm">Minden projekthez ingyenes, kötelezettség nélküli konzultációt kínálunk. Megismerjük az igényeidet és pontos ajánlatot adunk.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
