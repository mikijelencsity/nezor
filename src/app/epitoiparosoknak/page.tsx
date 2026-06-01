'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EpitoiparosLandingPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/epitoiparosoknak-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Hiba történt')
      }

      router.push(`/epitoiparosoknak/utmutato?token=${data.token}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Hiba történt. Próbáld újra.')
      setLoading(false)
    }
  }

  return (
    <main>
      <section style={{
        background: '#0a1f44',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-150px',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,224,255,0.3), transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 28px', position: 'relative', zIndex: 1 }}>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(0,224,255,0.1)', border: '1px solid rgba(0,224,255,0.35)',
            padding: '8px 18px', borderRadius: '100px',
            fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase' as const, color: '#00e0ff',
            marginBottom: '28px',
          }}>
            <span style={{ width: '8px', height: '8px', background: '#00e0ff', borderRadius: '50%', boxShadow: '0 0 10px #00e0ff' }} />
            Ingyenes útmutató · Építőiparosoknak
          </div>

          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '12px',
          }}>
            Tóth Béla épp most döntött,
            <br />kit hív fel a tetőjéhez.
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: '-0.025em',
            color: '#00e0ff',
            marginBottom: '32px',
            textShadow: '0 0 30px rgba(0,224,255,0.6)',
          }}>
            Nem téged.
          </p>

          <p style={{
            fontSize: '20px', lineHeight: 1.6,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '580px', marginBottom: '48px',
          }}>
            Ez naponta többször megtörténik a környékeden. Az ingyenes útmutatóban megmutatjuk,
            hogyan változzon meg — weboldal, Google-profil és Facebook hirdetés segítségével.
          </p>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px', padding: '24px 28px',
            marginBottom: '40px',
          }}>
            <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#00e0ff', marginBottom: '16px' }}>
              Az útmutató tartalmaz:
            </p>
            {[
              'Miért veszíted el az ügyfeleket és hogyan fordítsd meg',
              'Weboldal, Google-profil, Facebook hirdetés — a 4 lépéses rendszer',
              'Valódi magyar referenciák — akiknek már megcsináltuk',
              '10% kedvezmény az első együttműködésre (NEZOR10 kuponkód)',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                <span style={{ color: '#00e0ff', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>→</span>
                <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="add meg az email-edet..."
                style={{
                  flex: '1', minWidth: '260px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '6px', padding: '18px 20px',
                  fontSize: '17px', color: '#fff',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? 'rgba(0,224,255,0.5)' : '#00e0ff',
                  color: '#0a1f44',
                  border: 'none', borderRadius: '6px',
                  padding: '18px 32px',
                  fontSize: '17px', fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  whiteSpace: 'nowrap' as const,
                  transition: 'all 0.2s',
                }}
              >
                {loading ? 'Küldés...' : 'Olvasom az útmutatót →'}
              </button>
            </div>

            {error && (
              <p style={{ color: '#ff6b6b', fontSize: '14px', marginTop: '10px' }}>{error}</p>
            )}

            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '12px' }}>
              Ingyenes. Semmi spam. Bármikor leiratkozhatsz.
            </p>
          </form>

          <div style={{
            marginTop: '48px', paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', gap: '32px', flexWrap: 'wrap' as const,
          }}>
            {[
              { num: '6+', label: 'év tapasztalat' },
              { num: '20+', label: 'magyar vállalkozás' },
              { num: '24h', label: 'válaszidő' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 600, color: '#fff', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
