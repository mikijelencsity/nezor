'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, ThumbsUp } from 'lucide-react'

function FacebookAdPhone() {
  return (
    <div className="w-full h-full bg-gray-100 overflow-hidden flex flex-col" style={{ fontFamily: 'system-ui' }}>
      {/* FB Nav */}
      <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="text-blue-600 font-bold text-sm">facebook</div>
        <div className="flex gap-2">
          {['🔍','👥','🔔'].map((e,i) => (
            <div key={i} className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs">{e}</div>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="flex-1 overflow-hidden space-y-0.5 bg-gray-100">
        {/* Regular post (muted) */}
        <div className="bg-white p-2.5 opacity-40">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"/>
            <div>
              <div className="text-[9px] font-semibold text-dark">Ismerős neve</div>
              <div className="text-[7px] text-muted">2 órája</div>
            </div>
          </div>
          <div className="h-12 bg-gray-100 rounded-lg"/>
        </div>

        {/* AD POST — highlighted */}
        <div className="bg-white border-l-2 border-blue-500 relative">
          {/* Sponsored badge */}
          <div className="absolute top-2 right-2 bg-blue-50 text-blue-600 text-[7px] font-bold px-1.5 py-0.5 rounded z-10">
            Szponzorált
          </div>
          <div className="p-2.5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan to-blue-500 flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">N</span>
              </div>
              <div>
                <div className="text-[9px] font-bold text-dark">NEZOR Webfejlesztés</div>
                <div className="text-[7px] text-muted">Szponzorált · 🌐</div>
              </div>
              <MoreHorizontal className="w-3.5 h-3.5 text-muted ml-auto"/>
            </div>
            <div className="text-[9px] text-dark mb-2 leading-relaxed">
              🚀 Nincs még weboldalad? Több ezer vásárlót szerzünk neked! Ingyenes konzultáció most.
            </div>
            {/* Ad image — realistic creative */}
            <div className="rounded-xl h-28 mb-2 relative overflow-hidden bg-gray-900">
              {/* Background: dark with subtle pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900"/>
              <div className="absolute inset-0 bg-grid-pattern opacity-10"/>
              {/* Mini website mockup on right */}
              <div className="absolute right-2 top-2 bottom-2 w-16 bg-white rounded-lg overflow-hidden shadow-lg opacity-90">
                <div className="h-2.5 bg-gray-800 flex items-center px-1 gap-0.5">
                  <span className="w-1 h-1 rounded-full bg-red-400"/><span className="w-1 h-1 rounded-full bg-yellow-400"/><span className="w-1 h-1 rounded-full bg-green-400"/>
                </div>
                <div className="bg-gradient-to-b from-cyan-50 to-white px-1.5 py-1.5">
                  <div className="w-4/5 h-1.5 bg-gray-700 rounded-full mb-1"/>
                  <div className="w-3/5 h-1 bg-gray-400 rounded-full mb-1.5"/>
                  <div className="h-3.5 w-10 bg-cyan-400 rounded"/>
                </div>
                <div className="grid grid-cols-2 gap-0.5 px-1 pb-1">
                  {['bg-blue-100','bg-cyan-100','bg-sky-100','bg-indigo-100'].map((c,i)=>(
                    <div key={i} className={`${c} rounded h-3`}/>
                  ))}
                </div>
              </div>
              {/* Left: headline */}
              <div className="absolute left-3 top-3 right-20">
                <div className="text-cyan text-[8px] font-bold mb-1 uppercase tracking-wide">NEZOR</div>
                <div className="text-white text-[10px] font-bold leading-tight mb-1.5">Profi weboldal<br/>már 48 óra alatt</div>
                <div className="bg-cyan rounded-md px-1.5 py-0.5 inline-block">
                  <span className="text-white text-[7px] font-bold">Ingyenes ajánlat →</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2 mb-2">
              <div>
                <div className="text-[7px] text-muted">nezor.hu</div>
                <div className="text-[9px] font-bold text-dark">Ingyenes ajánlat kérése →</div>
              </div>
              <div className="bg-blue-600 text-white text-[8px] font-bold px-2 py-1 rounded-lg">
                Megismerem
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-gray-100">
              <div className="flex items-center gap-1 text-muted">
                <div className="flex -space-x-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center"><ThumbsUp className="w-2 h-2 text-white"/></div>
                  <div className="w-3 h-3 rounded-full bg-red-400 flex items-center justify-center text-[6px]">❤</div>
                </div>
                <span className="text-[8px]">124</span>
              </div>
              <div className="flex gap-3">
                {[['👍','Tetszik'],['💬','Hozzászólás'],['↗','Megosztás']].map(([e,l])=>(
                  <div key={l} className="flex items-center gap-0.5 text-[7px] text-muted font-semibold">
                    <span>{e}</span><span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Another muted post */}
        <div className="bg-white p-2.5 opacity-30">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-teal-400"/>
            <div className="w-20 h-2 bg-gray-200 rounded-full"/>
          </div>
          <div className="h-8 bg-gray-100 rounded-lg"/>
        </div>
      </div>
    </div>
  )
}

function InstagramAdPhone() {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col" style={{ fontFamily: 'system-ui' }}>
      {/* IG Nav */}
      <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100">
        <div className="text-dark font-bold text-xs italic">Instagram</div>
        <div className="flex gap-2">
          <Heart className="w-4 h-4 text-dark"/>
          <MessageCircle className="w-4 h-4 text-dark"/>
        </div>
      </div>

      {/* Stories row */}
      <div className="flex gap-2 px-3 py-2 border-b border-gray-100 overflow-hidden">
        {[
          { color: 'from-yellow-400 to-pink-500', label: 'Te' },
          { color: 'from-pink-400 to-purple-500', label: 'barát' },
          { color: 'from-blue-400 to-cyan', label: 'ismerős' },
        ].map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${s.color} p-0.5`}>
              <div className="w-full h-full rounded-full bg-white p-0.5">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${s.color}`}/>
              </div>
            </div>
            <span className="text-[7px] text-dark">{s.label}</span>
          </div>
        ))}
      </div>

      {/* IG AD POST */}
      <div className="flex-1 overflow-hidden">
        <div className="px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan to-blue-500 p-0.5">
              <div className="w-full h-full rounded-full bg-white p-0.5">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan to-blue-500 flex items-center justify-center">
                  <span className="text-white text-[6px] font-bold">N</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-dark">nezor_webfejlesztes</div>
              <div className="text-[7px] text-blue-500">Szponzorált</div>
            </div>
          </div>
          <MoreHorizontal className="w-3.5 h-3.5 text-dark"/>
        </div>

        {/* Square image — realistic IG creative */}
        <div className="w-full relative overflow-hidden bg-gray-900" style={{height: 150}}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-900 to-indigo-950"/>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"/>
          {/* Stats floating cards */}
          <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-2.5 py-1.5">
            <div className="text-white/60 text-[7px]">Havi látogatók</div>
            <div className="text-white font-bold text-[11px]">+2.400</div>
          </div>
          <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-2.5 py-1.5">
            <div className="text-white/60 text-[7px]">Konverzió</div>
            <div className="text-cyan font-bold text-[11px]">+38%</div>
          </div>
          {/* Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-cyan text-[8px] font-bold uppercase tracking-widest mb-1">NEZOR</div>
            <div className="text-white font-bold text-sm text-center leading-tight px-4">Weboldal nélkül láthatatlan vagy</div>
          </div>
          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
            <div className="text-white/80 text-[8px]">nezor.hu · Ingyenes konzultáció</div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex gap-3">
              <Heart className="w-4 h-4 text-dark"/>
              <MessageCircle className="w-4 h-4 text-dark"/>
              <Share2 className="w-4 h-4 text-dark"/>
            </div>
            <Bookmark className="w-4 h-4 text-dark"/>
          </div>
          <div className="text-[8px] font-bold text-dark mb-0.5">847 kedvelés</div>
          <div className="text-[8px] text-dark"><span className="font-bold">nezor_webfejlesztes</span> <span className="text-muted">Ingyenes konzultáció! 🚀 #weboldal #marketing</span></div>
          <div className="mt-1.5 bg-gradient-to-r from-cyan to-blue-500 rounded-xl py-1.5 text-center text-white text-[8px] font-bold">
            Ingyenes ajánlat kérése
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="text-xs font-display font-bold text-dark flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${label === 'Facebook' ? 'bg-blue-500' : 'bg-gradient-to-br from-pink-500 to-purple-500'}`}/>
        {label}
      </div>
      <div className="relative w-36 sm:w-52" style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.28))' }}>
        <div className="bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-4 border-gray-800">
          <div className="h-5 sm:h-6 bg-gray-900 flex items-center justify-center">
            <div className="w-12 sm:w-16 h-3 bg-black rounded-full"/>
          </div>
          <div className="relative overflow-hidden h-[280px] sm:h-[400px]">
            {children}
          </div>
          <div className="h-4 sm:h-5 bg-gray-900 flex items-center justify-center">
            <div className="w-12 sm:w-16 h-1 bg-gray-700 rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: text */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      >
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-display font-bold px-3 py-1.5 rounded-full mb-4">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-500"/>
          Facebook & Instagram
        </div>
        <h3 className="text-2xl font-display font-bold text-dark mb-4 leading-tight">
          Hirdetéseid ott jelennek meg<br />
          <span className="text-gradient">ahol a vásárlóid vannak</span>
        </h3>
        <p className="text-muted mb-6 leading-relaxed">
          Mindkét platformon egyszerre — Facebook feed, Instagram feed, Stories. Minden formátumra optimalizálva, minden célközönségnek személyre szabva.
        </p>
        <div className="space-y-3">
          {[
            { platform: 'Facebook', reach: '3,8 millió', desc: 'magyar felhasználó' },
            { platform: 'Instagram', reach: '2,1 millió', desc: 'magyar felhasználó' },
            { platform: 'Meta Audience Network', reach: '+40%', desc: 'extra elérés' },
          ].map(item => (
            <div key={item.platform} className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
              <div className="font-display font-bold text-dark text-sm w-16">{item.reach}</div>
              <div>
                <div className="text-xs font-semibold text-dark">{item.platform}</div>
                <div className="text-[10px] text-muted">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: phone mockups */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.15 }}
        className="flex flex-row items-start justify-center gap-3 sm:gap-4 lg:gap-6"
      >
        <PhoneShell label="Facebook">
          <FacebookAdPhone />
        </PhoneShell>
        <PhoneShell label="Instagram">
          <InstagramAdPhone />
        </PhoneShell>
      </motion.div>
    </div>
  )
}
