import { cn } from '@/lib/utils'

interface PhoneMockupProps {
  /**
   * Replace this with: <img src="/screenshots/client-name.jpg" alt="..." className="w-full" />
   * Recommended screenshot size: 390×844px (iPhone 14 ratio)
   */
  children?: React.ReactNode
  scrollClass?: string
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const sizes = {
  xs: { outer: 'w-[100px] h-[204px]', inner: 'rounded-[20px]', island: 'w-10 h-3 top-2',   screen: 'rounded-[17px]' },
  sm: { outer: 'w-[140px] h-[284px]', inner: 'rounded-[28px]', island: 'w-14 h-3.5 top-3', screen: 'rounded-[24px]' },
  md: { outer: 'w-[180px] h-[365px]', inner: 'rounded-[36px]', island: 'w-16 h-4 top-3.5', screen: 'rounded-[30px]' },
  lg: { outer: 'w-[220px] h-[448px]', inner: 'rounded-[44px]', island: 'w-20 h-5 top-4',   screen: 'rounded-[38px]' },
}

export function PhoneMockup({ children, scrollClass = 'phone-scroll', className, size = 'md' }: PhoneMockupProps) {
  const s = sizes[size]

  return (
    <div className={cn('relative flex-shrink-0', s.outer, className)}>
      {/* Outer frame */}
      <div className={cn('absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl', s.inner)}>
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-16 w-[3px] h-8 bg-gray-700 rounded-l-full" aria-hidden="true" />
        <div className="absolute -left-[3px] top-28 w-[3px] h-12 bg-gray-700 rounded-l-full" aria-hidden="true" />
        <div className="absolute -right-[3px] top-20 w-[3px] h-14 bg-gray-700 rounded-r-full" aria-hidden="true" />

        {/* Screen bezel */}
        <div className={cn('absolute inset-[3px] bg-black overflow-hidden', s.screen)}>
          {/* Dynamic Island */}
          <div className={cn('absolute left-1/2 -translate-x-1/2 bg-black rounded-full z-20', s.island)} aria-hidden="true" />

          {/* Screen content — scrollable area */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={cn('w-full', scrollClass)}>
              {children ?? <PlaceholderWebsite />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Replace this with a real <img> screenshot when ready */
function PlaceholderWebsite() {
  return (
    <div className="w-full bg-white" style={{ height: '180%' }}>
      {/* Nav */}
      <div className="bg-white px-3 py-2.5 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
        <div className="w-12 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
        <div className="flex gap-1.5">
          {[20, 16, 20].map((w, i) => (
            <div key={i} className="h-1.5 bg-gray-200 rounded-full" style={{ width: w }} />
          ))}
        </div>
      </div>

      {/* Hero block */}
      <div className="bg-gradient-to-br from-sky-50 to-white px-3 py-5">
        <div className="w-4/5 h-2.5 bg-gray-800 rounded-full mb-2" />
        <div className="w-3/5 h-2 bg-gray-500 rounded-full mb-3" />
        <div className="w-3/5 h-2 bg-gray-400 rounded-full mb-4" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-cyan-400 rounded-lg" />
          <div className="h-6 w-14 border border-cyan-400 rounded-lg" />
        </div>
      </div>

      {/* Service cards */}
      <div className="px-3 py-4">
        <div className="w-2/5 h-2 bg-gray-300 rounded-full mb-3" />
        <div className="grid grid-cols-3 gap-1.5 mb-4">
          {['bg-blue-50', 'bg-cyan-50', 'bg-sky-50'].map((bg, i) => (
            <div key={i} className={`${bg} rounded-xl p-2`}>
              <div className="w-4 h-4 bg-cyan-300 rounded-lg mx-auto mb-1" />
              <div className="w-full h-1.5 bg-gray-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* About block */}
      <div className="px-3 pb-4 space-y-2">
        <div className="w-3/5 h-2.5 bg-gray-700 rounded-full mb-2" />
        {[85, 90, 70, 80].map((w, i) => (
          <div key={i} className="h-1.5 bg-gray-200 rounded-full" style={{ width: `${w}%` }} />
        ))}
      </div>

      {/* Image placeholder */}
      <div className="mx-3 mb-4 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
        <div className="w-8 h-8 bg-cyan-300 rounded-full opacity-60" />
      </div>

      {/* CTA block */}
      <div className="bg-gray-900 mx-3 rounded-xl p-3 mb-4">
        <div className="w-3/4 h-2 bg-white/60 rounded-full mb-2" />
        <div className="w-1/2 h-2 bg-white/40 rounded-full mb-3" />
        <div className="h-5 w-20 bg-cyan-400 rounded-lg" />
      </div>

      {/* Footer */}
      <div className="bg-gray-800 px-3 py-4">
        <div className="w-10 h-2 bg-cyan-400 rounded-full mb-2" />
        {[60, 45, 55].map((w, i) => (
          <div key={i} className="h-1 bg-gray-600 rounded-full mb-1.5" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  )
}
