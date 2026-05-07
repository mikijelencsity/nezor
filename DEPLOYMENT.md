# Deployment útmutató — NEZOR

## 1. Vercel account
- Regisztrálj: https://vercel.com
- Kapcsold össze a GitHub accountoddal

## 2. GitHub repo létrehozása
Hozz létre egy új repo-t a GitHub-on (pl. nezor-website), majd:
```
git remote add origin https://github.com/FELHASZNALONEV/nezor-website.git
git push -u origin main
```

## 3. Vercel projekt importálása
- Vercel dashboardon: "Add New Project"
- Válaszd ki a GitHub repo-t
- Framework: Next.js (automatikusan felismeri)

## 4. Környezeti változók beállítása Vercelben
- Project Settings → Environment Variables
- Add hozzá:
  - `RESEND_API_KEY` = (Resend.com-on regisztrálva kapott API key)
  - `NEXT_PUBLIC_FB_PAGE_ID` = (Facebook Page ID — Page Settings → About → Page ID)
  - `NEXT_PUBLIC_SITE_URL` = https://nezor.hu

## 5. Resend beállítás
- Regisztrálj: https://resend.com
- API Keys → Create API Key
- Domain beállítás: Add domain → nezor.hu (DNS TXT rekord hozzáadás szükséges)
- Frissítsd a `from` mezőt a route.ts fájlban:
  `from: 'NEZOR Kapcsolat <noreply@nezor.hu>'`

## 6. Domain beállítás
- Vercel → Project → Settings → Domains
- Add: nezor.hu
- DNS beállítás a domain registrárodnál:
  - A rekord: 76.76.21.21 → nezor.hu
  - CNAME: cname.vercel-dns.com → www.nezor.hu

## 7. Referencia URL-ek frissítése
`src/data/references.ts` fájlban az `url: '#'` értékeket cseréld le a valódi URL-ekre.

## 8. Árak frissítése
`src/data/packages.ts` fájlban az `'Árat kérek'` értékeket cseréld le a valódi árakkal.

## 9. Facebook Messenger Widget
- Hozz létre vagy használj egy meglévő Facebook Page-et
- Page ID: Facebook Page → About → Page Transparency → Page ID
- Állítsd be a `NEXT_PUBLIC_FB_PAGE_ID` env változót Vercelben

## 10. Footer közösségi linkek
`src/components/layout/Footer.tsx` fájlban a `href="#"` értékeket cseréld ki a valódi Facebook/Instagram profilokra.
