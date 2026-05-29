'use client'

export function UrgencyBar() {
  return (
    <div
      className="text-center py-2.5 px-4 text-sm font-semibold tracking-wide"
      style={{ background: '#C4531A', color: '#F5F3EF' }}
    >
      Júniusi akció — Csak 3 hely maradt ebben a hónapban ·{' '}
      <a href="#kapcsolat" className="underline underline-offset-2 hover:no-underline">
        Ingyenes felmérést kérek
      </a>
    </div>
  )
}
