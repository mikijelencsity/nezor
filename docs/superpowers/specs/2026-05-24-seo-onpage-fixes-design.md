# SEO On-Page Fixes — Design

**Date:** 2026-05-24
**Scope:** Homepage on-page SEO warning fixes (Seobility audit)

## Changes

### 1. Meta title shortening
- **File:** `src/app/page.tsx`
- **Current:** `NEZOR — Weboldal, Webshop és Facebook Hirdetések Magyarországon` (659px)
- **New:** `Weboldal, Webshop és Facebook Hirdetés | NEZOR` (~520px, under 580px limit)

### 2. H1 keywords in body text
- **File:** `src/components/home/Hero.tsx`
- H1: "Professzionális weboldal. Több ügyfél. Gyorsabb növekedés."
- **Current `<p>`:** "Weboldalakat, webshopokat és Facebook hirdetéseket készítünk, amelyek valódi eredményeket hoznak — Bács-Kiskun megyétől az egész országig."
- **New `<p>`:** "Professzionális weboldal és webshop készítés, Facebook hirdetés kezelés — hogy több ügyfelet szerezz és gyorsabb növekedést érj el. Bács-Kiskun megyétől az egész országig."

### 3. Apple touch icon
- **New file:** `src/app/apple-icon.tsx` — Next.js auto-serves as `/apple-touch-icon.png`
- Same design as `icon.tsx`: sötét kör (#1A1A2E), cyan N betű (#00CFFF)
- Size: 180×180px

### 4. Duplicate anchor texts
- **File:** `src/components/layout/Footer.tsx`
- Change Footer `navLinks` to differ from Navbar labels:
  - `Facebook hirdetések` → `Facebook hirdetés kezelés`
  - `Blog` → `Szakmai blog`
  - `Referencák` → `Munkáink`
