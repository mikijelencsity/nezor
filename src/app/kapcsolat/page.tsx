import type { Metadata } from 'next'
import { Mail, Clock, MapPin, MessageCircle, CheckCircle } from 'lucide-react'
import { ContactForm } from '@/components/contact/ContactForm'
import { ResponseTimeCard } from '@/components/contact/ResponseTimeCard'

export const metadata: Metadata = {
  title: 'Kapcsolat — Ingyenes konzultáció',
  description: 'Vedd fel velünk a kapcsolatot! Ingyenes konzultáció, 24 órán belüli válasz. Weboldal, webshop és Facebook hirdetés ajánlat.',
  openGraph: {
    title: 'Kapcsolat — NEZOR',
    description: 'Ingyenes konzultáció, 24 órán belüli válasz.',
    url: 'https://nezor.hu/kapcsolat',
  },
}

const promises = [
  { icon: Clock,         text: '24 órán belüli válasz garantálva' },
  { icon: CheckCircle,   text: 'Ingyenes és kötelezettség nélküli' },
  { icon: MessageCircle, text: 'Messenger-en is elérhetsz minket' },
]

export default function KapcsolatPage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT: dark panel ── */}
        <div className="relative bg-dark overflow-hidden flex flex-col justify-between p-8 lg:p-12 min-h-[360px]">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative">
            <span className="text-gradient font-display font-bold text-2xl block mb-6">NEZOR</span>

            <div className="animate-fade-up">
              <span className="inline-block bg-white/10 text-white/80 text-xs font-display font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">Kapcsolat</span>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
                Írj nekünk,<br />
                <span className="text-shimmer">válaszolunk!</span>
              </h1>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm text-sm">
                Az első konzultáció ingyenes és kötelezettség nélküli. Elmondjuk mi lenne a legjobb megoldás a vállalkozásodnak.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3 animate-fade-up-delay-2">
              <a href="mailto:nezorweb@gmail.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-cyan" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">nezorweb@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-cyan" />
                </div>
                <span className="text-gray-300 text-sm">Bács-Kiskun megye, Magyarország</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 text-cyan" />
                </div>
                <span className="text-gray-300 text-sm">H–P: 9:00–18:00</span>
              </div>
            </div>
          </div>

          {/* Promises */}
          <div className="relative mt-6 animate-fade-up-delay-3">
            <div className="border-t border-white/10 pt-5 space-y-2">
              {promises.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-xs text-gray-400">
                  <Icon className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
            <ResponseTimeCard />
          </div>
        </div>

        {/* ── RIGHT: form ── */}
        <div className="flex items-center justify-center p-8 lg:p-12 bg-white">
          <div className="w-full max-w-md">
            <div className="animate-fade-up-delay-1">
              <h2 className="text-xl font-display font-bold text-dark mb-1">Küldd el az üzeneted</h2>
              <p className="text-muted text-sm mb-5">Minden mezőt kitöltve gyorsabban tudunk ajánlatot adni.</p>
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
