export function LaptopMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
      {/* Screen */}
      <div className="relative bg-gray-900 rounded-t-2xl rounded-b-lg overflow-hidden shadow-2xl border border-gray-700" style={{ paddingBottom: '62%' }}>
        {/* Chrome bar */}
        <div className="absolute top-0 left-0 right-0 bg-gray-800 px-3 py-2 flex items-center gap-2 z-10">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-2 bg-gray-700 rounded px-2 py-0.5 text-[10px] text-gray-400 truncate">
            estur.hu
          </div>
        </div>
        {/* Screen content */}
        <div className="absolute top-8 left-0 right-0 bottom-0 bg-white overflow-hidden">
          {children ?? <DefaultWebsiteContent />}
        </div>
      </div>
      {/* Base/stand */}
      <div className="h-3 bg-gray-700 rounded-b-lg" />
      <div className="h-2 bg-gray-600 rounded-b-xl mx-8" />
      <div className="h-1 bg-gray-500 rounded-b-2xl mx-16" />
    </div>
  )
}

function DefaultWebsiteContent() {
  return (
    <div className="w-full h-full bg-white overflow-hidden">
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
        <div className="w-12 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
        <div className="flex gap-2">
          {[24,20,28,20].map((w,i) => <div key={i} className="h-1.5 bg-gray-200 rounded-full" style={{width:w}} />)}
        </div>
        <div className="h-5 w-16 bg-cyan-400 rounded-md" />
      </div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-cyan-50 to-white px-4 py-4">
        <div className="w-3/4 h-2.5 bg-gray-800 rounded-full mb-2" />
        <div className="w-1/2 h-2 bg-gray-500 rounded-full mb-3" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-cyan-400 rounded-lg" />
          <div className="h-6 w-14 border border-cyan-400 rounded-lg" />
        </div>
      </div>
      {/* Cards row */}
      <div className="grid grid-cols-3 gap-2 px-4 py-3">
        {['bg-blue-50','bg-cyan-50','bg-sky-50'].map((bg,i) => (
          <div key={i} className={`${bg} rounded-lg p-2`}>
            <div className="w-4 h-4 bg-cyan-300 rounded mx-auto mb-1" />
            <div className="h-1.5 bg-gray-200 rounded-full" />
            <div className="h-1 bg-gray-100 rounded-full mt-1 w-3/4 mx-auto" />
          </div>
        ))}
      </div>
      {/* Content rows */}
      <div className="px-4 space-y-1.5">
        {[80,65,75,55,70].map((w,i) => (
          <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{width:`${w}%`}} />
        ))}
      </div>
      {/* Image block */}
      <div className="mx-4 mt-3 h-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
        <div className="w-6 h-6 bg-cyan-300 rounded-full opacity-60" />
      </div>
    </div>
  )
}
