# Építőiparos Lead Magnet Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Feliratkozási rendszer építőiparosoknak — landing page (email capture) → azonnali redirect a tartalom oldalra + Resend Audience mentés + admin panel a feliratkozók listájához.

**Architecture:** A tartalom oldal (`/epitoiparosoknak/utmutato`) egy Next.js Route Handler ami a `public/` mappából kiszolgálja a standalone HTML fájlt. A landing page (`/epitoiparosoknak`) saját layout-tal rendelkezik (nincs NEZOR navbar/footer). A feliratkozás a meglévő Resend API-n megy keresztül — contact hozzáadódik egy Resend Audience-hez, és welcome email megy ki. Admin panel: `/admin/feliratkozok` jelszóval védett oldal, ami a Resend Audience API-tól húzza le a listát.

**Tech Stack:** Next.js 15 App Router, TypeScript, Resend SDK (`resend` npm package már telepítve), Zod validáció, Tailwind CSS, `fs` (Node.js beépített modul a HTML fájl olvasáshoz).

---

## Fontos: Env változók

Az implementáció előtt ezeket kell felvenni `.env.local`-ba (és `.env.example`-be):

```
RESEND_API_KEY=<már megvan>
RESEND_AUDIENCE_ID=<Resend dashboardon létre kell hozni egy Audience-t, az ID-ja kerül ide>
ADMIN_PASSWORD=<tetszőleges jelszó az admin panelhez>
```

**Resend Audience létrehozása:** resend.com → Audiences → Create Audience → "Epitoiparos feliratkozok" → másold ki az ID-t.

---

## File map

| Fájl | Akció |
|------|-------|
| `public/epitoiparosoknak/utmutato.html` | CREATE — a tartalom HTML fájl (fix encoding + JS form submit) |
| `src/app/epitoiparosoknak/layout.tsx` | CREATE — standalone layout (nincs NEZOR navbar/footer) |
| `src/app/epitoiparosoknak/page.tsx` | CREATE — landing page email form-mal |
| `src/app/epitoiparosoknak/utmutato/route.ts` | CREATE — Route Handler ami a HTML-t szolgálja ki |
| `src/app/api/epitoiparosoknak-subscribe/route.ts` | CREATE — feliratkozás API (Resend Audience + welcome email) |
| `src/app/api/epitoiparosoknak-contact/route.ts` | CREATE — HTML oldal contact form API-ja |
| `src/app/admin/feliratkozok/page.tsx` | CREATE — admin panel (jelszóval védett) |
| `src/app/api/admin/subscribers/route.ts` | CREATE — admin API (Resend Audience lista) |
| `.env.example` | MODIFY — új env változók hozzáadása |

---

### Task 1: HTML tartalom fájl + Route Handler

**Files:**
- Create: `public/epitoiparosoknak/utmutato.html`
- Create: `src/app/epitoiparosoknak/utmutato/route.ts`

- [ ] **Step 1: Hozd létre a `public/epitoiparosoknak/` mappát és mentsd el a HTML tartalom fájlt**

Mentsd el a HTML fájlt `public/epitoiparosoknak/utmutato.html`-ként. A fájl tartalma az elküldött `online-jelenlet-epitoiparosoknak (2).html` **kódolás javítva** (Ã© → é, stb.) és az alábbi módosításokkal:

**A formspree form helyett (`<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`)** ezt kell írni:

```html
<form class="contact-form" id="epitoiparos-contact-form" onsubmit="handleContactSubmit(event)">
```

**A `</footer>` előtt** add hozzá ezt a script blokkot:

```html
<script>
async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span>Küldés...</span>';
  btn.disabled = true;

  const data = {
    name: form.querySelector('#f-name').value,
    company: form.querySelector('#f-company').value,
    phone: form.querySelector('#f-phone').value,
    email: form.querySelector('#f-email').value,
    industry: form.querySelector('#f-industry').value,
    message: form.querySelector('#f-message').value,
    coupon: 'NEZOR10',
  };

  try {
    const res = await fetch('/api/epitoiparosoknak-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Hiba');
    form.innerHTML = '<div style="text-align:center;padding:40px 0;"><p style="color:#00e0ff;font-size:22px;font-weight:700;">Köszönjük! 24 órán belül visszaírunk.</p></div>';
  } catch {
    btn.innerHTML = originalText;
    btn.disabled = false;
    const err = document.createElement('p');
    err.style.cssText = 'color:#ff6b6b;text-align:center;margin-top:12px;';
    err.textContent = 'Hiba történt. Írj közvetlenül: info@nezor.hu';
    form.appendChild(err);
  }
}
</script>
```

- [ ] **Step 2: Hozd létre a Route Handler-t**

```ts
// src/app/epitoiparosoknak/utmutato/route.ts
import { readFileSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'epitoiparosoknak', 'utmutato.html')
  const html = readFileSync(filePath, 'utf-8')
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
```

- [ ] **Step 3: TypeScript ellenőrzés**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add public/epitoiparosoknak/utmutato.html src/app/epitoiparosoknak/utmutato/route.ts
git commit -m "feat: epitoiparos content page — HTML + route handler"
```

---

### Task 2: Feliratkozás API (Resend Audience + welcome email)

**Files:**
- Create: `src/app/api/epitoiparosoknak-subscribe/route.ts`

- [ ] **Step 1: Hozd létre az API route-ot**

```ts
// src/app/api/epitoiparosoknak-subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email().max(200),
})

function escHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
    return NextResponse.json({ error: 'Konfiguráció hiányzik' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const { email } = schema.parse(body)

    // 1. Hozzáadás a Resend Audience-hez
    await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID,
      email,
      unsubscribed: false,
    })

    // 2. Welcome email a feliratkozónak
    await resend.emails.send({
      from: 'NEZOR <onboarding@resend.dev>',
      to: email,
      subject: 'Megkaptuk! Az útmutatód itt van →',
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;">
          <h1 style="font-size:28px;font-weight:700;color:#0a1f44;margin-bottom:16px;">
            Köszönjük a feliratkozást!
          </h1>
          <p style="font-size:17px;color:#2d4670;line-height:1.6;margin-bottom:24px;">
            Az útmutatód azonnal elérhető — kattints az alábbi gombra, és olvasd el, 
            hogyan hozz több ügyfelet a vállalkozásodnak online.
          </p>
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://nezor.hu'}/epitoiparosoknak/utmutato"
             style="display:inline-block;background:#1e4fd8;color:#fff;padding:16px 32px;border-radius:4px;text-decoration:none;font-size:17px;font-weight:600;">
            Olvasom az útmutatót →
          </a>
          <p style="font-size:14px;color:#6b7a99;margin-top:32px;line-height:1.5;">
            Ha kérdésed van, írj nekünk: 
            <a href="mailto:info@nezor.hu" style="color:#1e4fd8;">info@nezor.hu</a><br>
            NEZOR Webfejlesztés — Müller Dániel & Jelencsity Miklós
          </p>
        </div>
      `,
    })

    // 3. Értesítő email nekünk
    await resend.emails.send({
      from: 'NEZOR Rendszer <onboarding@resend.dev>',
      to: 'miklosjelencsity@gmail.com',
      subject: `Új feliratkozó: ${escHtml(email)}`,
      html: `<p>Új feliratkozó az építőiparos lead magnetre:</p><p><strong>${escHtml(email)}</strong></p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Érvénytelen email cím' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Hiba történt' }, { status: 500 })
  }
}
```

- [ ] **Step 2: TypeScript ellenőrzés**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/api/epitoiparosoknak-subscribe/route.ts
git commit -m "feat: subscribe API — Resend audience + welcome email"
```

---

### Task 3: Landing page (layout + UI)

**Files:**
- Create: `src/app/epitoiparosoknak/layout.tsx`
- Create: `src/app/epitoiparosoknak/page.tsx`

- [ ] **Step 1: Hozd létre a standalone layout-ot**

```tsx
// src/app/epitoiparosoknak/layout.tsx
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Online jelenlét építőiparosoknak — Ingyenes útmutató | NEZOR',
  description: 'Töltsd le az ingyenes útmutatónkat: hogyan szerezz több ügyfelet online, ha építőipari szakember vagy.',
  robots: { index: false, follow: false },
}

export default function EpitoiparosLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Hozd létre a landing page-t**

```tsx
// src/app/epitoiparosoknak/page.tsx
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

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Hiba történt')
      }

      router.push('/epitoiparosoknak/utmutato')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Hiba történt. Próbáld újra.')
      setLoading(false)
    }
  }

  return (
    <main>
      {/* HERO */}
      <section style={{
        background: '#0a1f44',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow háttér */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-150px',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,224,255,0.3), transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 28px', position: 'relative', zIndex: 1 }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(0,224,255,0.1)', border: '1px solid rgba(0,224,255,0.35)',
            padding: '8px 18px', borderRadius: '100px',
            fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', color: '#00e0ff',
            marginBottom: '28px',
          }}>
            <span style={{ width: '8px', height: '8px', background: '#00e0ff', borderRadius: '50%', boxShadow: '0 0 10px #00e0ff' }} />
            Ingyenes útmutató · Építőiparosoknak
          </div>

          {/* Headline */}
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

          {/* Subheadline */}
          <p style={{
            fontSize: '20px', lineHeight: 1.6,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '580px', marginBottom: '48px',
          }}>
            Ez naponta többször megtörténik a környékeden. Az ingyenes útmutatóban megmutatjuk,
            hogyan változzon meg — weboldal, Google-profil és Facebook hirdetés segítségével.
          </p>

          {/* Mi van az útmutatóban */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px', padding: '24px 28px',
            marginBottom: '40px',
          }}>
            <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00e0ff', marginBottom: '16px' }}>
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

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
                  whiteSpace: 'nowrap',
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

          {/* Social proof */}
          <div style={{
            marginTop: '48px', paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', gap: '32px', flexWrap: 'wrap',
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
```

- [ ] **Step 3: TypeScript ellenőrzés**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/epitoiparosoknak/layout.tsx src/app/epitoiparosoknak/page.tsx
git commit -m "feat: epitoiparos landing page — email capture form"
```

---

### Task 4: Contact form API (HTML oldal alján lévő form)

**Files:**
- Create: `src/app/api/epitoiparosoknak-contact/route.ts`

- [ ] **Step 1: Hozd létre az API route-ot**

```ts
// src/app/api/epitoiparosoknak-contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(100).optional().default(''),
  phone: z.string().max(30).optional().default(''),
  email: z.string().email().max(200),
  industry: z.string().max(100).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  coupon: z.string().max(20).optional().default('NEZOR10'),
})

function escHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Konfiguráció hiányzik' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: 'NEZOR Útmutató <onboarding@resend.dev>',
      to: 'miklosjelencsity@gmail.com',
      subject: `Új érdeklődő az útmutatóból: ${escHtml(data.name)}`,
      html: `
        <h2>Új érdeklődő az építőiparos útmutató oldalról</h2>
        <p><strong>Név:</strong> ${escHtml(data.name)}</p>
        <p><strong>Vállalkozás:</strong> ${escHtml(data.company)}</p>
        <p><strong>Telefon:</strong> ${escHtml(data.phone)}</p>
        <p><strong>Email:</strong> ${escHtml(data.email)}</p>
        <p><strong>Szakma:</strong> ${escHtml(data.industry)}</p>
        <p><strong>Üzenet:</strong> ${escHtml(data.message)}</p>
        <p><strong>Kuponkód:</strong> ${escHtml(data.coupon)}</p>
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

- [ ] **Step 2: TypeScript ellenőrzés**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/api/epitoiparosoknak-contact/route.ts
git commit -m "feat: epitoiparos contact form API"
```

---

### Task 5: Admin panel (API + UI)

**Files:**
- Create: `src/app/api/admin/subscribers/route.ts`
- Create: `src/app/admin/feliratkozok/page.tsx`

- [ ] **Step 1: Hozd létre az admin API route-ot**

```ts
// src/app/api/admin/subscribers/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET(req: NextRequest) {
  const password = req.nextUrl.searchParams.get('password')

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
    return NextResponse.json({ error: 'Konfiguráció hiányzik' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.contacts.list({
      audienceId: process.env.RESEND_AUDIENCE_ID,
    })

    if (error) throw error

    return NextResponse.json({ contacts: data?.data ?? [] })
  } catch {
    return NextResponse.json({ error: 'Nem sikerült lekérni a listát' }, { status: 500 })
  }
}
```

- [ ] **Step 2: Hozd létre az admin page-t**

```tsx
// src/app/admin/feliratkozok/page.tsx
'use client'

import { useState } from 'react'

interface Contact {
  id: string
  email: string
  first_name?: string
  last_name?: string
  created_at: string
  unsubscribed: boolean
}

export default function AdminFeliratkozokPage() {
  const [password, setPassword] = useState('')
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`/api/admin/subscribers?password=${encodeURIComponent(password)}`)
      if (!res.ok) {
        throw new Error('Helytelen jelszó')
      }
      const data = await res.json()
      setContacts(data.contacts)
      setLoggedIn(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Hiba történt')
    } finally {
      setLoading(false)
    }
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center px-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 w-full max-w-sm">
          <h1 className="text-white font-display font-bold text-2xl mb-2">Admin</h1>
          <p className="text-gray-400 text-sm mb-8">Feliratkozók listája</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Jelszó"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan text-base"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan text-dark font-bold py-3 rounded-lg text-base disabled:opacity-50"
            >
              {loading ? 'Betöltés...' : 'Belépés'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white font-display font-bold text-3xl">Feliratkozók</h1>
            <p className="text-gray-400 mt-1">Építőiparos lead magnet · {contacts.length} feliratkozó</p>
          </div>
          <button
            onClick={() => setLoggedIn(false)}
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            Kijelentkezés
          </button>
        </div>

        {contacts.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
            <p className="text-gray-400">Még nincsenek feliratkozók.</p>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500">#</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Email</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Feliratkozott</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Státusz</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, i) => (
                  <tr key={contact.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-gray-500 text-sm">{i + 1}</td>
                    <td className="px-6 py-4 text-white font-medium">{contact.email}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">
                      {new Date(contact.created_at).toLocaleDateString('hu-HU', {
                        year: 'numeric', month: 'short', day: 'numeric',
                        hour: '2-digit', minute: '2-digit',
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        contact.unsubscribed
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        {contact.unsubscribed ? 'Leiratkozott' : 'Aktív'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: TypeScript ellenőrzés**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/api/admin/subscribers/route.ts src/app/admin/feliratkozok/page.tsx
git commit -m "feat: admin panel — subscriber list with password protection"
```

---

### Task 6: Env vars + build ellenőrzés

**Files:**
- Modify: `.env.example`

- [ ] **Step 1: Frissítsd a `.env.example` fájlt**

```bash
# Tartalom:
RESEND_API_KEY=
NEXT_PUBLIC_FB_PAGE_ID=
NEXT_PUBLIC_SITE_URL=https://nezor.hu
RESEND_AUDIENCE_ID=
ADMIN_PASSWORD=
```

- [ ] **Step 2: Hozd létre `.env.local`-t a valódi értékekkel**

```
RESEND_API_KEY=<a meglévő kulcs>
NEXT_PUBLIC_SITE_URL=https://nezor.hu
RESEND_AUDIENCE_ID=<Resend dashboardon létrehozott audience ID>
ADMIN_PASSWORD=<tetszőleges jelszó>
```

**Fontos:** `.env.local` nincs és nem kerülhet a git-be (már benne van `.gitignore`-ban).

- [ ] **Step 3: Build ellenőrzés**

```bash
npm run build
```

Expected: exit code 0.

- [ ] **Step 4: Commit**

```bash
git add .env.example
git commit -m "chore: add RESEND_AUDIENCE_ID and ADMIN_PASSWORD to env example"
```

---

## Self-review

**Spec coverage:**
- ✅ Landing page email capture → `/epitoiparosoknak` — Task 3
- ✅ Azonnali redirect content oldalra — Task 3 (router.push on success)
- ✅ Resend Audience mentés — Task 2
- ✅ Welcome email feliratkozónak — Task 2
- ✅ Értesítő email nekünk — Task 2
- ✅ Content oldal HTML 1:1 — Task 1
- ✅ HTML form → saját API — Task 1 + Task 4
- ✅ Admin panel jelszóval — Task 5
- ✅ Admin API (Resend lista) — Task 5
- ✅ Standalone layout (nincs NEZOR navbar/footer) — Task 3

**Placeholder scan:** Nincs TBD, nincs TODO.

**Type consistency:** `Contact` interface a Task 5-ben definiálva, `schema` minden API route-ban lokálisan definiálva, nincs cross-task type dependency.

**Megjegyzés:** A Task 1-ben a HTML fájlt kézzel kell elkészíteni az elküldött `online-jelenlet-epitoiparosoknak (2).html` fájlból, javítva az encoding-ot (Ã© → é stb.) és módosítva a form-ot. Ez a legnagyobb manuális lépés.
