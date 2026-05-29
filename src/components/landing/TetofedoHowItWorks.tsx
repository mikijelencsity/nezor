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
