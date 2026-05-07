'use client'
import { useEffect, useState } from 'react'

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      if (total <= 0) return
      setProgress((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 z-[200] h-0.5 bg-gradient-to-r from-cyan to-blue-400"
      style={{ width: `${progress}%`, transition: 'width 80ms linear' }}
      aria-hidden="true"
    />
  )
}
