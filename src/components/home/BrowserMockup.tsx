import type { ReactNode } from 'react'

interface BrowserMockupProps {
  url: string
  children: ReactNode
}

export function BrowserMockup({ url, children }: BrowserMockupProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl" style={{ background: '#1a3a6e' }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: '#0d2244' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] flex-shrink-0" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] flex-shrink-0" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] flex-shrink-0" />
        <div
          className="flex-1 ml-2 rounded px-3 py-1 text-[10px]"
          style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }}
        >
          {url}
        </div>
      </div>
      {/* Screen content */}
      <div className="w-full">{children}</div>
    </div>
  )
}
