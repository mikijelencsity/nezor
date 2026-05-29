# Tetőfedő Landing Oldal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-converting landing page at `/tetofedo` for roofing specialists, offering website + 2 free Facebook ads for 100,000 HUF.

**Architecture:** Standalone Next.js route with its own layout (no Navbar/Footer). 9 focused components in `src/components/landing/`. New API route `/api/tetofedo-contact` for the simplified form. All components are server components except TetofedoCTA (client, has form state) and UrgencyBar (client, sticky positioning).

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, react-hook-form, zod, Resend, lucide-react

---

## File Map

| Action | File |
|--------|------|
| Create | `src/app/tetofedo/layout.tsx` |
| Create | `src/app/tetofedo/page.tsx` |
| Create | `src/components/landing/UrgencyBar.tsx` |
| Create | `src/components/landing/TetofedoHero.tsx` |
| Create | `src/components/landing/TetofedoPainPoints.tsx` |
| Create | `src/components/landing/TetofedoOffer.tsx` |
| Create | `src/components/landing/TetofedoHowItWorks.tsx` |
| Create | `src/components/landing/TetofedoReferences.tsx` |
| Create | `src/components/landing/TetofedoObjections.tsx` |
| Create | `src/components/landing/TetofedoCTA.tsx` |
| Create | `src/app/api/tetofedo-contact/route.ts` |

---

### Task 1: Landing page layout (no Navbar/Footer)

**Files:**
- Create: `src/app/tetofedo/layout.tsx`

- [ ] **Step 1: Create the layout file**

```tsx
import type { ReactNode } from 'react'
import Link from 'next/link'

export default function TetofedoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <Link href="/" className="font-display font-bold text-xl text-gradient">
          NEZOR
        </Link>
      </header>
      <main className="pt-14">
        {children}
      </main>
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/tetofedo/layout.tsx
git commit -m "feat: tetofedo landing layout without navbar/footer"
```

---

### Task 2: UrgencyBar component

**Files:**
- Create: `src/components/landing/UrgencyBar.tsx`

- [ ] **Step 1: Create the component**

```tsx
'use client'

import { Zap } from 'lucide-react'

export function UrgencyBar() {
  return (
    <div className="fixed top-14 left-0 right-0 z-30 bg-orange-500 text-white text-center py-2 px-4 text-sm font-semibold">
      <span className="inline-flex items-center gap-2">
        <Zap className="w-4 h-4 flex-shrink-0" />
        Júniusi akció — Csak 3 hely maradt! Weboldal + 2 ingyenes Facebook hirdetés
        <Zap className="w-4 h-4 flex-shrink-0" />
      </span>
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/UrgencyBar.tsx
git commit -m "feat: urgency bar component for tetofedo landing"
```

---

### Task 3: TetofedoHero component

**Files:**
- Create: `src/components/landing/TetofedoHero.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { Phone, ArrowDown } from 'lucide-react'

export function TetofedoHero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-10 pb-20 min-h-[85vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Tetőfedő szakembereknek
        </span>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
          Miközben te offline vagy, a{' '}
          <span className="text-orange-400">konkurenciád elviszi</span>{' '}
          az ügyfeleid.
        </h1>

        {/* Subheadline */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Készítünk neked egy profi tetőfedő weboldalt és 2 Facebook hirdetést —{' '}
          <span className="text-white font-semibold">100.000 Ft-ért.</span>{' '}
          Garantált online jelenlét, több megkeresés.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#ajanlat"
            className="inline-flex items-center justify-center gap-2 bg-cyan text-white font-display font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-cyan/90 transition-colors w-full sm:w-auto"
          >
            Kérek ajánlatot
            <ArrowDown className="w-5 h-5" />
          </a>
          <a
            href="tel:+36704554703"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-display font-semibold px-8 py-4 rounded-xl text-lg hover:border-white/60 transition-colors w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            +36 70 455 4703
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-gray-500 text-sm">
          Csak 3 hely maradt ebben a hónapban — ne hagyd ki!
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/TetofedoHero.tsx
git commit -m "feat: hero section for tetofedo landing"
```

---

### Task 4: TetofedoPainPoints component

**Files:**
- Create: `src/components/landing/TetofedoPainPoints.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { WifiOff, TrendingDown, PhoneMissed } from 'lucide-react'

const pains = [
  {
    icon: WifiOff,
    title: 'Nincs weboldalad',
    desc: 'Az ügyfelek keresnek, de nem találnak meg online. A Google-ben a konkurensed jelenik meg — nem te.',
  },
  {
    icon: TrendingDown,
    title: 'A konkurensed már Facebookon van',
    desc: 'Miközben te szájhagyomány útján szerzed az ügyfeleket, a versenytársad hirdetésekkel éri el az újakat.',
  },
  {
    icon: PhoneMissed,
    title: 'Szezonon kívül alig csörög a telefon',
    desc: 'Télen, tavasszal alig van munka. Egy jó weboldal és hirdetés egész évben hozza az ügyfeleket.',
  },
]

export function TetofedoPainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-3">
            Ismerős valamelyik?
          </h2>
          <p className="text-muted text-lg">Ha igen, itt az idő változtatni.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-display font-bold text-dark text-lg mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/TetofedoPainPoints.tsx
git commit -m "feat: pain points section for tetofedo landing"
```

---

### Task 5: TetofedoOffer component

**Files:**
- Create: `src/components/landing/TetofedoOffer.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { CheckCircle, Globe, Megaphone, Smartphone, Search } from 'lucide-react'

const included = [
  { icon: Globe,      text: '5 oldalas professzionális weboldal' },
  { icon: Smartphone, text: 'Mobilbarát, gyors betöltés' },
  { icon: Search,     text: 'SEO-optimalizált — megtalálnak a Google-ben' },
  { icon: Megaphone,  text: '2 db Facebook hirdetés megtervezve és feltöltve' },
  { icon: CheckCircle,text: 'Domain és tárhely első évre benne van' },
  { icon: CheckCircle,text: '2 héten belül élesben az oldalad' },
]

export function TetofedoOffer() {
  return (
    <section id="ajanlat" className="py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-500/20 text-orange-400 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Korlátozott ideig
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Mit kapsz 100.000 Ft-ért?
          </h2>
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-gray-500 line-through text-2xl">250.000 Ft</span>
            <span className="text-cyan font-display font-bold text-4xl">100.000 Ft</span>
          </div>
          <p className="text-gray-400 text-sm">Egyszeri díj, nincs rejtett költség</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-cyan" />
                </div>
                <span className="text-gray-200 text-sm">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <a
              href="#kapcsolat"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-display font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Igen, kérem ezt az ajánlatot!
            </a>
            <p className="text-gray-500 text-xs mt-3">Csak 3 hely maradt ebben a hónapban</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/TetofedoOffer.tsx
git commit -m "feat: offer section for tetofedo landing"
```

---

### Task 6: TetofedoHowItWorks component

**Files:**
- Create: `src/components/landing/TetofedoHowItWorks.tsx`

- [ ] **Step 1: Create the component**

```tsx
const steps = [
  {
    number: '01',
    title: 'Kitöltöd az űrlapot',
    desc: '2 perc alatt megadod a neved és elérhetőséged. Semmi bonyolult.',
  },
  {
    number: '02',
    title: 'Felhívunk és egyeztetünk',
    desc: 'Visszahívunk, megbeszéljük mire van szükséged. Ingyenes, kötelezettségmentes.',
  },
  {
    number: '03',
    title: '2 héten belül élesben az oldalad',
    desc: 'Elkészítjük a weboldalat és a 2 hirdetést. Te csak jóváhagyod.',
  },
]

export function TetofedoHowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-3">
            Hogyan működik?
          </h2>
          <p className="text-muted">Egyszerűbb mint gondolod.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ number, title, desc }) => (
            <div key={number} className="text-center">
              <div className="w-16 h-16 bg-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan font-display font-bold text-2xl">{number}</span>
              </div>
              <h3 className="font-display font-bold text-dark text-lg mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/TetofedoHowItWorks.tsx
git commit -m "feat: how it works section for tetofedo landing"
```

---

### Task 7: TetofedoReferences component

**Files:**
- Create: `src/components/landing/TetofedoReferences.tsx`

- [ ] **Step 1: Create the component**

```tsx
const refs = [
  { name: 'Neked Sütöm', url: 'nekedsutom.hu', desc: 'Bajai kézműves lángosozó' },
  { name: 'Estur Épker Kft.', url: 'estur.hu', desc: 'Generálkivitelező, Baja' },
  { name: 'Hellinger Kft.', url: 'hellingerkft.hu', desc: 'Ipari csarnokok, Dél-Dunántúl' },
]

export function TetofedoReferences() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-3">
            Magyar vállalkozások bíztak bennünk
          </h2>
          <p className="text-muted">Ezeknek a cégeknek készítettük el a weboldalát.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {refs.map(({ name, url, desc }) => (
            <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-cyan font-display font-bold text-lg">
                  {name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display font-bold text-dark mb-1">{name}</h3>
              <p className="text-muted text-xs mb-2">{desc}</p>
              <span className="text-cyan text-xs font-mono">{url}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/TetofedoReferences.tsx
git commit -m "feat: references section for tetofedo landing"
```

---

### Task 8: TetofedoObjections component

**Files:**
- Create: `src/components/landing/TetofedoObjections.tsx`

- [ ] **Step 1: Create the component**

```tsx
const objections = [
  {
    q: 'Drága 100.000 Ft?',
    a: 'Egy tetőcsere ára 300.000–1.500.000 Ft között van. Ha egyetlen új ügyfélt hoz a weboldal, már megtérült. A legtöbb ügyfelünk az első hónapban visszakapja a befektetését.',
  },
  {
    q: 'Nem értek a technikához.',
    a: 'Nem is kell. Mi mindent intézünk — domain, tárhely, tervezés, feltöltés. Neked csak jóvá kell hagyni a kész oldalt. Semmi más.',
  },
  {
    q: 'Már volt weboldalam, nem hozott ügyfelet.',
    a: 'Egy rosszul megcsinált weboldal valóban nem hoz ügyfelet. Mi konverzióra optimalizálva építjük az oldalt, és a 2 Facebook hirdetés célzottan tetőfedő munkát keresőket ér el.',
  },
]

export function TetofedoObjections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-3">
            Amire gondolhatsz...
          </h2>
        </div>
        <div className="space-y-4">
          {objections.map(({ q, a }) => (
            <div key={q} className="border border-gray-200 rounded-2xl p-6 hover:border-cyan/40 transition-colors">
              <h3 className="font-display font-bold text-dark mb-2 flex items-start gap-2">
                <span className="text-orange-500 flex-shrink-0">?</span>
                {q}
              </h3>
              <p className="text-muted text-sm leading-relaxed pl-5">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/TetofedoObjections.tsx
git commit -m "feat: objections section for tetofedo landing"
```

---

### Task 9: API route for tetofedo contact form

**Files:**
- Create: `src/app/api/tetofedo-contact/route.ts`

- [ ] **Step 1: Create the API route**

```ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(6).max(30),
  email: z.string().email().max(200),
})

function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Hiba történt' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: 'NEZOR Tetőfedő <onboarding@resend.dev>',
      to: 'miklosjelencsity@gmail.com',
      subject: `Új tetőfedő érdeklődő: ${escHtml(data.name)}`,
      html: `
        <h2>Új érdeklődő a tetofedo landing oldalról</h2>
        <p><strong>Név:</strong> ${escHtml(data.name)}</p>
        <p><strong>Telefon:</strong> ${escHtml(data.phone)}</p>
        <p><strong>Email:</strong> ${escHtml(data.email)}</p>
        <p><strong>Ajánlat:</strong> Weboldal + 2 Facebook hirdetés (100.000 Ft)</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Érvénytelen adatok' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Hiba történt' }, { status: 500 })
  }
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/api/tetofedo-contact/route.ts
git commit -m "feat: tetofedo contact API route"
```

---

### Task 10: TetofedoCTA component (form + phone)

**Files:**
- Create: `src/components/landing/TetofedoCTA.tsx`

- [ ] **Step 1: Create the component**

```tsx
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
          {/* Form */}
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

          {/* Phone */}
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
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/TetofedoCTA.tsx
git commit -m "feat: CTA section with form and phone for tetofedo landing"
```

---

### Task 11: Main page.tsx — assemble everything

**Files:**
- Create: `src/app/tetofedo/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from 'next'
import { UrgencyBar } from '@/components/landing/UrgencyBar'
import { TetofedoHero } from '@/components/landing/TetofedoHero'
import { TetofedoPainPoints } from '@/components/landing/TetofedoPainPoints'
import { TetofedoOffer } from '@/components/landing/TetofedoOffer'
import { TetofedoHowItWorks } from '@/components/landing/TetofedoHowItWorks'
import { TetofedoReferences } from '@/components/landing/TetofedoReferences'
import { TetofedoObjections } from '@/components/landing/TetofedoObjections'
import { TetofedoCTA } from '@/components/landing/TetofedoCTA'

export const metadata: Metadata = {
  title: 'Tetőfedő weboldal + 2 Facebook hirdetés — 100.000 Ft | NEZOR',
  description: 'Profi tetőfedő weboldal és 2 Facebook hirdetés 100.000 Ft-ért. Garantált online jelenlét, több megkeresés. Csak 3 hely maradt!',
  robots: { index: false, follow: false },
}

export default function TetofedoPage() {
  return (
    <>
      <UrgencyBar />
      <div className="mt-10">
        <TetofedoHero />
        <TetofedoPainPoints />
        <TetofedoOffer />
        <TetofedoHowItWorks />
        <TetofedoReferences />
        <TetofedoObjections />
        <TetofedoCTA />
      </div>
    </>
  )
}
```

- [ ] **Step 2: Verify full build**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/tetofedo/page.tsx
git commit -m "feat: tetofedo landing page assembled"
```

---

## Done

All sections implemented:
- ✓ Standalone layout (no navbar/footer)
- ✓ Sticky urgency bar
- ✓ Hero with pain headline + dual CTA
- ✓ Pain points section
- ✓ Offer with price anchor
- ✓ How it works (3 steps)
- ✓ References (3 clients)
- ✓ Objection handling
- ✓ Final CTA with form + phone number
- ✓ New API route for form submissions
