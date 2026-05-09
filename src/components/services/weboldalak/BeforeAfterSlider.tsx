'use client'
import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftRight } from 'lucide-react'

function OldWebsite() {
  return (
    <div className="w-full h-full bg-gray-100 overflow-hidden select-none">
      <div className="bg-blue-900 px-3 py-2 flex items-center justify-between">
        <div className="text-yellow-300 text-[9px] font-bold">ÜDVÖZÖLJÜK!!! 🌟</div>
        <div className="text-white text-[8px]">Menü | Rólunk | Kapcsolat</div>
      </div>
      <div className="bg-gradient-to-b from-blue-800 to-blue-600 py-4 text-center px-2">
        <div className="text-yellow-300 text-[11px] font-bold mb-1 animate-pulse">✨ LEGJOBB AJÁNLAT ✨</div>
        <div className="text-white text-[8px] mb-2">Kattintson ide a részletekért!!!</div>
        <div className="bg-yellow-400 text-black text-[8px] font-bold px-2 py-1 rounded inline-block">KATTINTS IDE!!!</div>
      </div>
      <div className="bg-white p-2">
        <div className="text-[7px] text-gray-600 leading-relaxed mb-2">Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus malesuada fames ac turpis egestas.</div>
        <div className="grid grid-cols-3 gap-1 mb-2">
          {['bg-red-200','bg-green-200','bg-blue-200'].map((c,i)=>(
            <div key={i} className={`${c} p-1 text-center rounded`}>
              <div className="text-[6px] font-bold mb-1">Szolg. {i+1}</div>
              <div className="w-4 h-4 bg-gray-400 rounded mx-auto"/>
            </div>
          ))}
        </div>
        <div className="text-[6px] text-gray-400 text-center border-t pt-1">Copyright © 2009 Minden jog fenntartva • Készítette: AngySoft Bt.</div>
      </div>
    </div>
  )
}

function NewWebsite() {
  return (
    <div className="w-full h-full bg-white overflow-hidden select-none">
      <div className="bg-white px-3 py-2 border-b border-gray-100 flex items-center justify-between">
        <div className="w-10 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"/>
        <div className="flex gap-2">{[20,16,24,16].map((w,i)=><div key={i} className="h-1.5 bg-gray-200 rounded-full" style={{width:w}}/>)}</div>
        <div className="h-5 w-14 bg-cyan-400 rounded-lg"/>
      </div>
      <div className="bg-gradient-to-br from-cyan-50 to-white px-3 py-3">
        <div className="w-3/4 h-2.5 bg-gray-800 rounded-full mb-2"/>
        <div className="w-1/2 h-2 bg-gray-400 rounded-full mb-3"/>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-cyan-400 rounded-lg"/>
          <div className="h-6 w-14 border border-cyan-400 rounded-lg"/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 px-3 py-2">
        {['bg-cyan-50','bg-blue-50','bg-sky-50'].map((bg,i)=>(
          <div key={i} className={`${bg} rounded-xl p-2`}>
            <div className="w-4 h-4 bg-cyan-300 rounded-lg mx-auto mb-1"/>
            <div className="h-1.5 bg-gray-200 rounded-full mb-0.5"/>
            <div className="h-1 bg-gray-100 rounded-full w-3/4 mx-auto"/>
          </div>
        ))}
      </div>
      <div className="px-3 space-y-1.5">
        {[80,65,75,55].map((w,i)=><div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{width:`${w}%`}}/>)}
      </div>
      <div className="mx-3 mt-2 bg-gray-900 rounded-xl p-3">
        <div className="w-2/3 h-2 bg-white/50 rounded-full mb-2"/>
        <div className="h-6 w-20 bg-cyan-400 rounded-lg"/>
      </div>
    </div>
  )
}

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseMove = (e: React.MouseEvent) => { if (dragging) updatePosition(e.clientX) }
  const onTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX) }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 select-none" style={{ height: 280 }}
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={onTouchMove}
      onTouchEnd={() => setDragging(false)}
    >
      {/* Labels */}
      <div className="absolute top-3 left-3 z-30 bg-red-500 text-white text-[10px] font-display font-bold px-2 py-1 rounded-full">Előtte</div>
      <div className="absolute top-3 right-3 z-30 bg-green-500 text-white text-[10px] font-display font-bold px-2 py-1 rounded-full">NEZOR után</div>

      {/* Old (full width background) */}
      <div className="absolute inset-0"><OldWebsite /></div>

      {/* New (clipped to right of slider) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <NewWebsite />
      </div>

      {/* Divider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-20" style={{ left: `${position}%` }}>
        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl border-2 border-gray-200 flex items-center justify-center cursor-ew-resize z-30"
          onMouseDown={() => setDragging(true)}
          onTouchStart={() => setDragging(true)}
        >
          <ArrowLeftRight className="w-4 h-4 text-dark" />
        </div>
      </div>

      {/* Instruction */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 bg-black/50 text-white text-[9px] font-display px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
        Húzd a csúszkát
      </div>
    </div>
  )
}
