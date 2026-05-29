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
