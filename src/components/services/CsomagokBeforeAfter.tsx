'use client'
import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

function BadWebsite() {
  return (
    <div className="bg-gray-100 w-full h-full p-3">
      <div className="bg-gray-300 h-6 w-full rounded mb-2 flex items-center px-2">
        <div className="flex gap-1"><span className="w-2 h-2 rounded-full bg-gray-400"/><span className="w-2 h-2 rounded-full bg-gray-400"/><span className="w-2 h-2 rounded-full bg-gray-400"/></div>
      </div>
      <div className="bg-blue-800 text-center py-3 px-2 mb-2 rounded">
        <div className="text-yellow-300 text-[9px] font-bold mb-1">ÜDVÖZÖLJÜK HONLAPUNKON!!!</div>
        <div className="text-white text-[7px]">weboldal felirat felirat felirat</div>
        <div className="mt-1 bg-yellow-400 text-black text-[7px] px-2 py-0.5 rounded inline-block font-bold">KATTINTS IDE!!!</div>
      </div>
      <div className="text-[7px] text-gray-600 leading-tight mb-2">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet.</div>
      <div className="grid grid-cols-3 gap-1">
        {['bg-red-200','bg-blue-200','bg-green-200'].map((c,i) => (
          <div key={i} className={`${c} rounded p-1 text-center`}>
            <div className="w-4 h-4 bg-gray-400 rounded mx-auto mb-1" />
            <div className="h-1 bg-gray-400 rounded-full" />
          </div>
        ))}
      </div>
      <div className="mt-2 text-[7px] text-center text-gray-400 border-t border-gray-300 pt-1">Copyright 2009 Minden jog fenntartva</div>
    </div>
  )
}

function GoodWebsite() {
  return (
    <div className="bg-white w-full h-full">
      <div className="bg-white px-3 py-1.5 border-b border-gray-100 flex items-center justify-between">
        <div className="w-10 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
        <div className="flex gap-1.5">{[20,16,24].map((w,i) => <div key={i} className="h-1.5 bg-gray-200 rounded-full" style={{width:w}} />)}</div>
        <div className="h-4 w-12 bg-cyan-400 rounded-md" />
      </div>
      <div className="bg-gradient-to-br from-cyan-50 to-white px-3 py-3">
        <div className="w-3/4 h-2.5 bg-gray-800 rounded-full mb-1.5" />
        <div className="w-1/2 h-2 bg-gray-400 rounded-full mb-3" />
        <div className="flex gap-1.5">
          <div className="h-5 w-14 bg-cyan-400 rounded-lg" />
          <div className="h-5 w-12 border border-cyan-400 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 px-3 py-2">
        {['bg-cyan-50','bg-blue-50','bg-sky-50'].map((bg,i) => (
          <div key={i} className={`${bg} rounded-xl p-2`}>
            <div className="w-4 h-4 bg-cyan-300 rounded-lg mx-auto mb-1" />
            <div className="h-1.5 bg-gray-200 rounded-full mb-0.5" />
            <div className="h-1 bg-gray-100 rounded-full w-3/4 mx-auto" />
          </div>
        ))}
      </div>
      <div className="px-3 space-y-1">
        {[75,60,80,55].map((w,i) => <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{width:`${w}%`}} />)}
      </div>
    </div>
  )
}

export function CsomagokBeforeAfter() {
  return (
    <div className="hidden lg:flex items-center gap-6 justify-center">
      {/* Before */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        <div className="text-center mb-2">
          <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs font-display font-bold px-2 py-0.5 rounded-full">
            <X className="w-3 h-3" /> Előtte
          </span>
        </div>
        <div className="w-52 h-40 rounded-xl overflow-hidden shadow-lg border-2 border-red-200 opacity-90">
          <BadWebsite />
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="flex-shrink-0 text-2xl"
      >
        ✨
      </motion.div>

      {/* After */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative"
      >
        <div className="text-center mb-2">
          <span className="inline-flex items-center gap-1 bg-green-100 text-green-600 text-xs font-display font-bold px-2 py-0.5 rounded-full">
            <Check className="w-3 h-3" /> NEZOR után
          </span>
        </div>
        <div className="w-52 h-40 rounded-xl overflow-hidden shadow-xl border-2 border-cyan/40">
          <GoodWebsite />
        </div>
        {/* Glow */}
        <div className="absolute -inset-2 bg-cyan/10 rounded-2xl blur-xl -z-10" />
      </motion.div>
    </div>
  )
}
