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
