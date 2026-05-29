'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, CheckCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Add meg a neved'),
  phone: z.string().min(6, 'Add meg a telefonszámod'),
  email: z.string().email('Érvényes email cím szükséges'),
})

type FormData = z.infer<typeof schema>

const inputClass = [
  'w-full px-4 py-3.5 text-sm transition-colors',
  'bg-transparent border-b border-white/20',
  'text-white placeholder:text-white/30',
  'focus:outline-none focus:border-white/60',
].join(' ')

const errorClass = 'text-red-400 text-xs mt-1'

export function TetofedoCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    setError('')
    try {
      const res = await fetch('/api/tetofedo-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Hiba')
      setSubmitted(true)
    } catch {
      setError('Hiba történt. Hívj minket: +36 70 455 4703')
    }
  }

  return (
    <section id="kapcsolat" style={{ background: '#111111' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT — messaging */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-6" style={{ color: '#C4531A' }}>
              Kapcsolat
            </p>
            <h2
              className="font-bold leading-[1.05] mb-6"
              style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                color: '#F5F3EF',
                letterSpacing: '-0.02em',
              }}
            >
              Tedd meg az első lépést.
            </h2>
            <p className="text-base leading-relaxed mb-12" style={{ color: '#9CA3AF' }}>
              Visszahívunk 24 órán belül. Megbeszéljük, mire van szükséged, és pontos ajánlatot adunk — ingyen, kötelezettség nélkül.
            </p>

            {/* Big phone */}
            <a
              href="tel:+36704554703"
              className="inline-flex items-center gap-4 group"
            >
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ background: 'rgba(196,83,26,0.15)', borderRadius: '2px' }}
              >
                <Phone className="w-5 h-5" style={{ color: '#C4531A' }} />
              </div>
              <div>
                <div
                  className="font-bold text-2xl transition-colors"
                  style={{ color: '#F5F3EF', fontFamily: 'var(--font-serif), Georgia, serif', letterSpacing: '-0.01em' }}
                >
                  +36 70 455 4703
                </div>
                <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: '#6B7280' }}>
                  Hétköznap 8:00–18:00
                </div>
              </div>
            </a>

            <div className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <p className="text-xs leading-relaxed" style={{ color: '#4B5563' }}>
                "Egy tetőcsere ára 300.000–1.500.000 Ft. Ha egyetlen új ügyfelet hoz a weboldal — és fog —, a befektetés már az első munkánál megtérül."
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            {submitted ? (
              <div className="py-16 text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-6" style={{ color: '#C4531A' }} />
                <h3
                  className="font-bold text-2xl mb-3"
                  style={{ fontFamily: 'var(--font-serif), Georgia, serif', color: '#F5F3EF' }}
                >
                  Köszönjük!
                </h3>
                <p style={{ color: '#9CA3AF' }}>
                  Hamarosan felhívunk.<br />
                  Addig is: <strong style={{ color: '#F5F3EF' }}>+36 70 455 4703</strong>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                <div>
                  <input
                    {...register('name')}
                    placeholder="Neved *"
                    className={inputClass}
                  />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register('phone')}
                    placeholder="Telefonszámod *"
                    className={inputClass}
                  />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                </div>
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Email cím *"
                    className={inputClass}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                {error && (
                  <p className="text-red-400 text-sm py-3 px-4" style={{ background: 'rgba(239,68,68,0.1)', borderRadius: '2px' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-semibold text-base py-4 transition-all"
                  style={{
                    background: isSubmitting ? 'rgba(196,83,26,0.5)' : '#C4531A',
                    color: '#F5F3EF',
                    borderRadius: '4px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? 'Küldés...' : 'Kérek visszahívást'}
                </button>
                <p className="text-xs text-center" style={{ color: '#4B5563' }}>
                  Ingyenes, kötelezettségmentes.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
