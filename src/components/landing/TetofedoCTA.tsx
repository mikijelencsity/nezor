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

const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-xl text-dark text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors'
const errorClass = 'text-red-500 text-xs mt-1'

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
    <section id="kapcsolat" className="py-20 bg-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-500/20 text-orange-400 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Csak 3 hely maradt!
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Kérj ajánlatot most!
          </h2>
          <p className="text-gray-400">Visszahívunk 24 órán belül.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-dark mb-2">Köszönjük!</h3>
                <p className="text-muted">Hamarosan felhívunk. Addig is elérsz minket: <strong>+36 70 455 4703</strong></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                <div>
                  <input {...register('name')} placeholder="Neved *" className={inputClass} />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register('phone')} placeholder="Telefonszámod *" className={inputClass} />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                </div>
                <div>
                  <input {...register('email')} type="email" placeholder="Email cím *" className={inputClass} />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>
                {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-display font-bold px-8 py-4 rounded-xl text-lg transition-colors"
                >
                  {isSubmitting ? 'Küldés...' : 'Igen, kérem az ajánlatot!'}
                </button>
                <p className="text-gray-400 text-xs text-center">Ingyenes, kötelezettségmentes. Csak visszahívunk.</p>
              </form>
            )}
          </div>

          <div className="flex flex-col items-center justify-center text-center p-8">
            <p className="text-gray-400 text-lg mb-4">Vagy hívj fel közvetlenül:</p>
            <a
              href="tel:+36704554703"
              className="inline-flex items-center gap-3 text-white font-display font-bold text-3xl md:text-4xl hover:text-cyan transition-colors"
            >
              <Phone className="w-8 h-8 text-cyan" />
              +36 70 455 4703
            </a>
            <p className="text-gray-500 text-sm mt-4">Hétköznap 8:00–18:00 között</p>
            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl text-left">
              <p className="text-gray-300 text-sm leading-relaxed">
                "Egy tetőcsere ára 300.000–1.500.000 Ft. Ha egyetlen új ügyfelet hoz a weboldal, már megtérült a befektetés."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
