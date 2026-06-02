import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek — NEZOR',
  description: 'A NEZOR Webfejlesztés általános szerződési feltételei.',
  robots: { index: true, follow: true },
}

export default function AszfPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-cyan mb-8 text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" /> Vissza a főoldalra
        </Link>

        <h1 className="text-3xl font-display font-bold text-dark mb-2">Általános Szerződési Feltételek</h1>
        <p className="text-muted text-sm mb-10">Utolsó frissítés: 2026. június 1.</p>

        <div className="prose prose-sm max-w-none prose-headings:font-display prose-headings:text-dark prose-a:text-cyan">

          <h2>1. A szolgáltató adatai</h2>
          <p>
            <strong>Neve:</strong> NEZOR Webfejlesztés<br />
            <strong>Képviselője:</strong> Müller Dániel, Jelencsity Miklós<br />
            <strong>Email:</strong> info@nezor.hu<br />
            <strong>Székhely:</strong> Bács-Kiskun megye, Magyarország<br />
            <strong>Honlap:</strong> nezor.hu
          </p>

          <h2>2. Az ÁSZF hatálya</h2>
          <p>
            Jelen Általános Szerződési Feltételek (ÁSZF) a NEZOR Webfejlesztés (továbbiakban: Szolgáltató) és
            megrendelői (továbbiakban: Megrendelő) között létrejövő szerződéses jogviszonyra vonatkoznak.
            Az ÁSZF hatálya kiterjed minden weboldalfejlesztési, webshop-fejlesztési és Facebook-hirdetéskezelési
            megbízásra, amelyet a Szolgáltató végez.
          </p>

          <h2>3. A megbízás létrejötte</h2>
          <p>
            A szerződés az ajánlat elfogadásával, írásos (email) visszaigazolással jön létre. A Megrendelő az
            ajánlat elfogadásával megerősíti, hogy az ÁSZF-et megismerte és elfogadja.
          </p>

          <h2>4. Árak és fizetési feltételek</h2>
          <ul>
            <li>Az árak magyar forintban (Ft) értendők, az ÁFA-t nem tartalmazzák (alanyi adómentes).</li>
            <li>A megbízási díj 50%-a előleg, amit a munka megkezdése előtt kell megfizetni.</li>
            <li>A fennmaradó 50% az átadás előtt esedékes.</li>
            <li>A fizetés banki átutalással történik.</li>
          </ul>

          <h2>5. Teljesítési határidő</h2>
          <p>
            A teljesítési határidőt az ajánlatban rögzítjük. A határidő a tartalmak (szöveg, képek, logó)
            megrendelő általi átadásától számítódik. A Megrendelő késedelmes tartalomszolgáltatása esetén
            a határidő arányosan módosul.
          </p>

          <h2>6. Visszajelzés és módosítások</h2>
          <p>
            Az elkészült munkát a Megrendelőnek 5 munkanapon belül kell véleményeznie. Addig módosítunk,
            amíg a Megrendelő elégedett nem lesz — feltéve, hogy a kért módosítások az eredeti specifikáción
            belül maradnak. Alapvető terjedelmi változtatások esetén pótdíj számítható fel.
          </p>

          <h2>7. Szerzői jogok</h2>
          <p>
            Az elkészült weboldal forráskódja és dizájnja a teljes vételár kifizetése után a Megrendelő
            tulajdonába kerül. A Szolgáltató fenntartja a jogot, hogy a munkát referenciái között feltüntesse,
            kivéve, ha a Megrendelő ezt írásban megtiltja.
          </p>

          <h2>8. Felelősségkorlátozás</h2>
          <p>
            A Szolgáltató nem vállal felelősséget a Megrendelő által szolgáltatott tartalmak jogszerűségéért,
            harmadik fél rendszereinek (tárhelyszolgáltató, domain, fizetési kapu) meghibásodásáért, valamint
            a hirdetési kampányok konkrét eredményéért (pl. megkeresések száma), mivel ezek függnek a piactól,
            a célközönségtől és más, a Szolgáltató által nem befolyásolható tényezőktől.
          </p>

          <h2>9. Titoktartás</h2>
          <p>
            A Szolgáltató a munkavégzés során tudomására jutott üzleti információkat bizalmasan kezeli és
            harmadik félnek nem adja át.
          </p>

          <h2>10. Irányadó jog</h2>
          <p>
            A jelen ÁSZF-re a magyar jog az irányadó. Esetleges jogvitában a felek elsősorban egyeztetéssel
            próbálják rendezni a nézeteltéréseket.
          </p>

          <h2>11. ÁSZF módosítása</h2>
          <p>
            A Szolgáltató fenntartja a jogot az ÁSZF módosítására. A módosítások a weboldalon való
            közzétételkor lépnek hatályba, és csak az ezt követő új megbízásokra vonatkoznak.
          </p>

          <hr />
          <p>
            Kérdés esetén: <a href="mailto:info@nezor.hu">info@nezor.hu</a>
          </p>

        </div>
      </div>
    </div>
  )
}
