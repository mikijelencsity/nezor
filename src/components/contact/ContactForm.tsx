'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Add meg a nevedet'),
  email: z.string().email('Érvényes email cím szükséges'),
  phone: z.string().optional(),
  service: z.enum(['weboldalak', 'webshopok', 'facebook', 'egyeb'], {
    error: 'Válassz szolgáltatást',
  }),
  message: z.string().min(10, 'Legalább 10 karakter szükséges'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Hiba történt')
      setSubmitted(true)
    } catch {
      setError('Hiba történt az üzenet küldésekor. Próbálkozz újra, vagy írj emailt a nezorweb@gmail.com címre.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-cyan mx-auto mb-4" />
        <h3 className="text-2xl font-display font-bold text-dark mb-2">Üzenet elküldve!</h3>
        <p className="text-muted">24 órán belül felvesszük veled a kapcsolatot.</p>
      </div>
    )
  }

  const inputClass = 'w-full px-3 py-2.5 border border-gray-200 rounded-xl text-dark text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors'
  const errorClass = 'text-red-500 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
      <div>
        <label htmlFor="name" className="sr-only">Neved</label>
        <input id="name" {...register('name')} aria-invalid={errors.name ? 'true' : undefined} placeholder="Neved *" className={inputClass} />
        {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email cím</label>
        <input id="email" {...register('email')} type="email" aria-invalid={errors.email ? 'true' : undefined} placeholder="Email cím *" className={inputClass} />
        {errors.email && <p className={errorClass} role="alert">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">Telefonszám</label>
        <input id="phone" {...register('phone')} placeholder="Telefonszám (opcionális)" className={inputClass} />
      </div>
      <div>
        <label htmlFor="service" className="sr-only">Szolgáltatás</label>
        <select id="service" {...register('service')} aria-invalid={errors.service ? 'true' : undefined} className={inputClass} defaultValue="">
          <option value="" disabled>Milyen szolgáltatás érdekel? *</option>
          <option value="weboldalak">Weboldal készítés</option>
          <option value="webshopok">Webshop fejlesztés</option>
          <option value="facebook">Facebook hirdetések</option>
          <option value="egyeb">Egyéb / Nem tudom</option>
        </select>
        {errors.service && <p className={errorClass} role="alert">{errors.service.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Üzenet</label>
        <textarea id="message" {...register('message')} aria-invalid={errors.message ? 'true' : undefined} placeholder="Üzenet — írj pár sort a vállalkozásodról *" rows={4} className={inputClass} />
        {errors.message && <p className={errorClass} role="alert">{errors.message.message}</p>}
      </div>
      {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl" role="alert">{error}</p>}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Küldés...' : 'Üzenet küldése'}
      </Button>
    </form>
  )
}
