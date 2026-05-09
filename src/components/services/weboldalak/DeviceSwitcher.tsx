'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Tablet, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

const devices = [
  { key: 'desktop', label: 'Desktop',  icon: Monitor,    w: 520, h: 320, aspect: 'aspect-[16/10]' },
  { key: 'tablet',  label: 'Tablet',   icon: Tablet,     w: 320, h: 420, aspect: 'aspect-[4/5]'  },
  { key: 'mobile',  label: 'Mobil',    icon: Smartphone, w: 200, h: 380, aspect: 'aspect-[9/16]' },
]

function DesktopMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-700 flex flex-col shadow-2xl">
      <div className="bg-gray-800 px-3 py-2 flex items-center gap-2 flex-shrink-0">
        <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400"/><span className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><span className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
        <div className="flex-1 mx-2 bg-gray-700 rounded px-2 py-0.5 text-[10px] text-gray-400">ugyfel-weboldal.hu</div>
      </div>
      <div className="flex-1 overflow-hidden bg-white">{children}</div>
    </div>
  )
}

function TabletMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl flex flex-col">
      <div className="h-3 bg-gray-800 flex items-center justify-center flex-shrink-0">
        <div className="w-8 h-1 bg-gray-600 rounded-full"/>
      </div>
      <div className="flex-1 overflow-hidden bg-white">{children}</div>
      <div className="h-4 bg-gray-800 flex items-center justify-center flex-shrink-0">
        <div className="w-4 h-4 rounded-full border-2 border-gray-600"/>
      </div>
    </div>
  )
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden border-4 border-gray-700 shadow-2xl flex flex-col">
      <div className="h-6 bg-gray-900 flex items-center justify-center flex-shrink-0">
        <div className="w-16 h-3 bg-gray-800 rounded-full"/>
      </div>
      <div className="flex-1 overflow-hidden bg-white">{children}</div>
      <div className="h-6 bg-gray-900 flex items-center justify-center flex-shrink-0">
        <div className="w-8 h-1 bg-gray-700 rounded-full"/>
      </div>
    </div>
  )
}

function WebsiteContent() {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="bg-gradient-to-br from-cyan-50 to-white p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"/>
          <div className="flex gap-1">{[20,16,24].map((w,i)=><div key={i} className="h-1.5 bg-gray-200 rounded-full" style={{width:w}}/>)}</div>
          <div className="h-5 w-14 bg-cyan-400 rounded-lg"/>
        </div>
        <div className="w-3/4 h-3 bg-gray-800 rounded-full mb-2"/>
        <div className="w-1/2 h-2 bg-gray-400 rounded-full mb-4"/>
        <div className="flex gap-2 mb-4">
          <div className="h-7 w-18 bg-cyan-400 rounded-lg"/>
          <div className="h-7 w-16 border border-cyan-400 rounded-lg"/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 px-3 py-2">
        {['bg-cyan-50','bg-blue-50','bg-sky-50'].map((bg,i)=>(
          <div key={i} className={`${bg} rounded-xl p-2`}>
            <div className="w-5 h-5 bg-cyan-300 rounded-lg mx-auto mb-1"/>
            <div className="h-1.5 bg-gray-200 rounded-full"/>
          </div>
        ))}
      </div>
      <div className="px-3 space-y-2">
        {[80,65,75,55].map((w,i)=><div key={i} className="h-2 bg-gray-100 rounded-full" style={{width:`${w}%`}}/>)}
      </div>
      <div className="mx-3 mt-3 bg-gray-900 rounded-xl p-3">
        <div className="w-2/3 h-2 bg-white/50 rounded-full mb-2"/>
        <div className="h-6 w-20 bg-cyan-400 rounded-lg"/>
      </div>
    </div>
  )
}

const shells = { desktop: DesktopMockup, tablet: TabletMockup, mobile: PhoneShell }

export function DeviceSwitcher() {
  const [active, setActive] = useState('desktop')
  const current = devices.find(d => d.key === active)!
  const Shell = shells[active as keyof typeof shells]

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Toggle buttons */}
      <div className="inline-flex bg-secondary rounded-2xl p-1.5 gap-1">
        {devices.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-xl font-display font-semibold text-sm transition-all duration-200',
              active === key ? 'bg-white text-dark shadow-sm' : 'text-muted hover:text-dark'
            )}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Mockup */}
      <div className="relative w-full flex justify-center">
        <div className="absolute -inset-4 bg-cyan/8 rounded-3xl blur-2xl"/>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -12 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="relative"
            style={{ width: current.w, maxWidth: '100%', height: current.h }}
          >
            <Shell><WebsiteContent /></Shell>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
