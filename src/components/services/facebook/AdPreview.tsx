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
            {/* Ad image */}
            <div className="bg-gradient-to-br from-cyan via-blue-400 to-indigo-500 rounded-xl h-20 flex items-center justify-center mb-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"/>
              <div className="relative text-center">
                <div className="text-white font-bold text-[10px] mb-0.5">NEZOR</div>
                <div className="text-white/80 text-[8px]">Professzionális weboldalak</div>
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

        {/* Square image */}
        <div className="bg-gradient-to-br from-cyan via-blue-400 to-indigo-500 w-full aspect-square relative overflow-hidden" style={{maxHeight: 130}}>
          <div className="absolute inset-0 bg-grid-pattern opacity-20"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-white font-bold text-sm mb-1">Weboldal nélkül?</div>
            <div className="text-white/80 text-[9px] text-center px-4">Ezrek keresnek rád Googleon — de nem találnak</div>
            <div className="mt-2 bg-white/20 border border-white/40 rounded-full px-3 py-1">
              <span className="text-white text-[8px] font-bold">nezor.hu →</span>
            </div>
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
    <div className="flex flex-col items-center gap-3">
      <div className="text-xs font-display font-bold text-dark flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${label === 'Facebook' ? 'bg-blue-500' : 'bg-gradient-to-br from-pink-500 to-purple-500'}`}/>
        {label}
      </div>
      <div className="relative w-36" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}>
        <div className="bg-gray-900 rounded-[2rem] overflow-hidden border-4 border-gray-800">
          <div className="h-5 bg-gray-900 flex items-center justify-center">
            <div className="w-12 h-2.5 bg-black rounded-full"/>
          </div>
          <div className="relative overflow-hidden" style={{ height: 320 }}>
            {children}
          </div>
          <div className="h-4 bg-gray-900 flex items-center justify-center">
            <div className="w-14 h-1 bg-gray-700 rounded-full"/>
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
        className="flex items-end justify-center gap-6"
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
