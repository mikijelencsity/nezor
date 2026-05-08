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
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* ── LEFT: dark panel ── */}
        <div className="relative bg-dark overflow-hidden flex flex-col justify-between p-10 md:p-16 min-h-[420px] lg:min-h-screen">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative">
            {/* Logo */}
            <span className="text-gradient font-display font-bold text-3xl block mb-12">NEZOR</span>

            <div className="animate-fade-up">
              <span className="inline-block bg-white/10 text-white/80 text-xs font-display font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Kapcsolat</span>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                Írj nekünk,<br />
                <span className="text-shimmer">válaszolunk!</span>
              </h1>
              <p className="text-gray-400 leading-relaxed mb-10 max-w-sm">
                Az első konzultáció ingyenes és kötelezettség nélküli. Elmondjuk mi lenne a legjobb megoldás a vállalkozásodnak.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-5 animate-fade-up-delay-2">
              <a href="mailto:nezorweb@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                  <Mail className="w-4 h-4 text-cyan" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">nezorweb@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cyan" />
                </div>
                <span className="text-gray-300 text-sm">Bács-Kiskun megye, Magyarország</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-cyan" />
                </div>
                <span className="text-gray-300 text-sm">H–P: 9:00–18:00</span>
              </div>
            </div>
          </div>

          {/* Promises */}
          <div className="relative mt-12 animate-fade-up-delay-3">
            <div className="border-t border-white/10 pt-8 space-y-3">
              {promises.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-gray-400">
                  <Icon className="w-4 h-4 text-cyan flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
            <ResponseTimeCard />
          </div>
        </div>

        {/* ── RIGHT: form ── */}
        <div className="flex items-center justify-center p-8 md:p-16 bg-white">
          <div className="w-full max-w-md">
            <div className="animate-fade-up-delay-1">
              <h2 className="text-2xl font-display font-bold text-dark mb-2">Küldd el az üzeneted</h2>
              <p className="text-muted text-sm mb-8">Minden mezőt kitöltve gyorsabban tudunk ajánlatot adni.</p>
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
