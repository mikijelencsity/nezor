# SEO On-Page Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all 4 on-page SEO warnings on nezor.hu homepage (Seobility audit).

**Architecture:** Four isolated file changes — meta title in page.tsx, hero paragraph in Hero.tsx, new apple-icon.tsx, footer label strings in Footer.tsx. No shared state, no new dependencies.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS

---

## File Map

| Action | File |
|--------|------|
| Modify | `src/app/page.tsx` |
| Modify | `src/components/home/Hero.tsx` |
| Create | `src/app/apple-icon.tsx` |
| Modify | `src/components/layout/Footer.tsx` |

---

### Task 1: Shorten meta title

**Files:**
- Modify: `src/app/page.tsx:18`

- [ ] **Step 1: Edit the title**

In `src/app/page.tsx`, replace line 18:

```ts
  title: 'NEZOR — Weboldal, Webshop és Facebook Hirdetések Magyarországon',
```

with:

```ts
  title: 'Weboldal, Webshop és Facebook Hirdetés | NEZOR',
```

- [ ] **Step 2: Verify build compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "seo: shorten homepage meta title under 580px"
```

---

### Task 2: Use H1 keywords in hero body text

**Files:**
- Modify: `src/components/home/Hero.tsx:33`

- [ ] **Step 1: Edit the paragraph**

In `src/components/home/Hero.tsx`, replace the `<p>` text (around line 33):

```tsx
              Weboldalakat, webshopokat és Facebook hirdetéseket készítünk,
              amelyek valódi eredményeket hoznak — Bács-Kiskun megyétől az
              egész országig.
```

with:

```tsx
              Professzionális weboldal és webshop készítés, Facebook hirdetés
              kezelés — hogy több ügyfelet szerezz és gyorsabb növekedést érj
              el. Bács-Kiskun megyétől az egész országig.
```

- [ ] **Step 2: Verify build compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Hero.tsx
git commit -m "seo: include H1 keywords in hero paragraph"
```

---

### Task 3: Add Apple touch icon

**Files:**
- Create: `src/app/apple-icon.tsx`

- [ ] **Step 1: Create the file**

Create `src/app/apple-icon.tsx` with this exact content:

```tsx
import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#1A1A2E',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#00CFFF',
            fontSize: 110,
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '-4px',
            lineHeight: 1,
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  )
}
```

- [ ] **Step 2: Verify Next.js picks it up**

```bash
npx tsc --noEmit
```

Expected: no errors. Next.js will auto-serve this as `/apple-touch-icon.png`.

- [ ] **Step 3: Commit**

```bash
git add src/app/apple-icon.tsx
git commit -m "seo: add apple touch icon (180x180)"
```

---

### Task 4: Fix duplicate anchor texts in Footer

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Update the navLinks array**

In `src/components/layout/Footer.tsx`, replace the `navLinks` array:

```ts
const navLinks = [
  { label: 'Weboldal készítés',        href: '/weboldalak' },
  { label: 'Webshop fejlesztés',       href: '/webshopok' },
  { label: 'Facebook hirdetés kezelés', href: '/facebook-hirdetesek' },
  { label: 'Csomagok és árak',         href: '/csomagok' },
  { label: 'Munkáink',                 href: '/referenciak' },
  { label: 'Szakmai blog',             href: '/blog' },
  { label: 'Városok',                  href: '/varosok' },
]
```

- [ ] **Step 2: Verify build compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "seo: differentiate footer anchor texts from navbar"
```

---

## Done

All 4 Seobility warnings addressed:
- ✓ Title under 580px
- ✓ H1 keywords in body text
- ✓ Apple touch icon present
- ✓ No duplicate anchor texts between Navbar and Footer
