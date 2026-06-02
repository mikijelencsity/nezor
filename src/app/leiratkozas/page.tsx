'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function LeiratkozasContent() {
  const params = useSearchParams()
  const status = params.get('status')

  if (status === 'ok') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-md text-center">
          <div className="text-5xl mb-6">✓</div>
          <h1 className="text-2xl font-display font-black text-dark mb-3">Sikeresen leiratkoztál</h1>
          <p className="text-muted mb-8">Többé nem küldünk neked leveleket. Ha meggondolod magad, bármikor újra feliratkozhatsz.</p>
          <Link href="/" className="text-sm font-semibold text-cyan hover:underline">
            Vissza a főoldalra →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <div className="text-5xl mb-6">✗</div>
        <h1 className="text-2xl font-display font-black text-dark mb-3">Valami nem sikerült</h1>
        <p className="text-muted mb-8">Ha le szeretnél iratkozni, írj nekünk közvetlenül: <a href="mailto:info@nezor.hu" className="text-cyan font-semibold">info@nezor.hu</a></p>
        <Link href="/" className="text-sm font-semibold text-cyan hover:underline">
          Vissza a főoldalra →
        </Link>
      </div>
    </div>
  )
}

export default function LeiratkozasPage() {
  return (
    <Suspense>
      <LeiratkozasContent />
    </Suspense>
  )
}
