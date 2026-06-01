# NEZOR Homepage CRO Redesign — Design Spec

**Date:** 2026-06-01
**Goal:** Több érdeklődő, erősebb pozicionálás, "nem weboldalt adunk el, hanem több ügyfelet hozunk"

---

## Pozicionálás

**Egyetlen üzenet:** Nem weboldalt adunk el — több ügyfelet hozunk.

Minden szekció, headline és CTA ezt az egy gondolatot erősíti.
Kerülendő: "professzionális", "modern", "egyedi", "minőségi" — generic ügynökség szavak.
Fókusz: érdeklődők, növekedés, ROI, ügyfélszerzés.

---

## Oldal struktúra (végső sorrend)

```
1. Hero            ← teljes újraírás
2. SocialProof     ← ÚJ komponens
3. ServicesSection ← megmarad (keretezés változik)
4. HowWeWork       ← ÚJ komponens
5. PackagesTeaser  ← headline + subheadline átírva
6. FAQSection      ← megmarad
7. ResultsCTA      ← ÚJ komponens
```

**Eltávolítva:**
- `StatsSection` — "9+ ügyfél" rombolja a hitelességet
- `WhyNezor` — generikus 4-kártyás sablon
- `BlogPreview` — gyenge tartalom gyengíti az autoritást
- `PartnersMarquee` — ha üres/gyenge logók vannak

---

## 1. Hero szekció (`src/components/home/Hero.tsx`)

**Badge:** "Weboldal · Webshop · Facebook hirdetés"

**H1:**
> "Minden hónapban több érdeklődőt hozunk a vállalkozásodnak."

**Subheadline:**
> "Weboldal, webshop, Facebook hirdetés — egy céllal: hogy a legjobb ügyfelek téged keressenek meg, ne a konkurensedet."

**CTA-k:**
- Elsődleges: "Mutasd hogyan működik" → `/csomagok`
- Másodlagos: "Ingyen megnézem a vállalkozásom" → `/kapcsolat`

**Trust signals (hero alatt, stats helyett):**
- "Neked Sütöm · Estur Épker · Hellinger Kft." — konkrét ügyfélnevek
- Három pill: `24h válasz` · `Garanciával` · `Bács-Kiskun + egész ország`

**Vizuális:** HeroPhones megmarad. Dot-grid háttér megmarad. Animációk megmaradnak.

---

## 2. SocialProof szekció (`src/components/home/SocialProof.tsx`) — ÚJ

**Headline:** "Magyar vállalkozások, akik több ügyfelet szereznek velünk."

**3 referencia kártya:**

```
Neked Sütöm · Lángosozó, Baja
"Online megrendelési lehetőség + helyi közönség elérése Facebook hirdetéssel."
nekedsutom.hu →

Estur Épker Kft. · Generálkivitelező, Baja
"Professzionális megjelenés, ajánlatkérési űrlap, Google-ban is megtalálható."
estur.hu →

Hellinger Kft. · Építőipar, Dél-Dunántúl
"25 éves tapasztalat — most már online is megtalálják az ügyfelek."
hellingerkft.hu →
```

**Design:** fehér háttér, kártyák, ügyfél neve bold, eredmény-leírás szürke, link cyan.

---

## 3. ServicesSection (`src/components/home/ServicesSection.tsx`)

**Megmarad** — a problem/solution struktúra jó.

**Headline változás:**
- Jelenlegi: "Probléma → Megoldás"
- Új: "Így hozunk neked több ügyfelet."

**Subheadline változás:**
- Jelenlegi: "Nézd meg mi a különbség NEZOR nélkül és NEZOR-ral."
- Új: "Válassz szolgáltatást és nézd meg pontosan mit jelent a vállalkozásodnak."

---

## 4. HowWeWork szekció (`src/components/home/HowWeWork.tsx`) — ÚJ

**Headline:** "Így hozunk ügyfeleket a vállalkozásodnak."

**Subheadline:** "Nem sablont adunk el. Egy rendszert, ami működik."

**3 lépés:**

```
01 — Megértjük a vállalkozásod
Nem sablont rakunk össze. Megnézzük ki a célügyféled,
mi a versenytársad, és mi az az egy dolog ami téged
megkülönböztet. Erre épül minden.

02 — Weboldalad ügyfélszerzőre tervezzük
Nem szép oldalakat csinálunk. Olyan oldalakat, ahol
a látogató azonnal megérti mit kínálsz és miért bízzon
benned. Minden elem az érdeklődő → ügyfél útvonalon van.

03 — Hirdetéssel forgalmat hozunk rá
Egy jó weboldal önmagában kevés. Facebook hirdetéssel
célzottan hozzuk azokat, akiknek most van szükségük
rád — nem mindenkinek, hanem a tiednek.
```

**CTA a szekció végén:** "Ingyenes weboldal audit" → `/kapcsolat`

**Design:** sötét háttér (bg-dark), számok nagy és bold, szöveg szürke, CTA button.

---

## 5. PackagesTeaser (`src/components/home/PackagesTeaser.tsx`)

**Csak headline + subheadline változik:**

- Jelenlegi headline: "Rugalmas csomagok"
- Új headline: **"Befektetés, nem kiadás."**

- Új subheadline:
  > "Egy új ügyfél általában megtéríti a weboldal árát. A többi tiszta profit."

Csomagok tartalma változatlan.

---

## 6. FAQSection (`src/components/home/FAQSection.tsx`)

Megmarad változatlanul.

---

## 7. ResultsCTA szekció (`src/components/home/ResultsCTA.tsx`) — ÚJ

**Design:** sötét háttér, centált, erős végső push.

**Headline:** "Készen állsz több ügyfélre?"

**Subheadline:**
> "Ingyenes, 30 perces átnézésben megmutatjuk hogyan lehetne a weboldalad több ügyfelet hozni. Kötelezettség nélkül."

**CTA:** "Ingyenes weboldal audit" → `/kapcsolat`

**Risk reversal** (CTA alatt kis szöveg):
> "Ha 30 nap után nem tetszik az oldal, visszaadjuk a pénzt."

---

## Fájl változások összefoglalója

| Fájl | Változás |
|------|----------|
| `src/app/page.tsx` | Struktúra átírva — új sorrend, eltávolított szekciók |
| `src/components/home/Hero.tsx` | Teljes újraírás — headline, subheadline, CTA-k, trust signals |
| `src/components/home/SocialProof.tsx` | ÚJ komponens |
| `src/components/home/HowWeWork.tsx` | ÚJ komponens |
| `src/components/home/PackagesTeaser.tsx` | Headline + subheadline módosítás |
| `src/components/home/ResultsCTA.tsx` | ÚJ komponens |
| `src/components/home/ServicesSection.tsx` | Headline + subheadline módosítás |
