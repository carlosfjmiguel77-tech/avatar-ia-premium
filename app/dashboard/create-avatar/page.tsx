'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const styles = [
  { id: 'realistic', name: 'Realista Premium', description: 'Aspecto natural e realista' },
  { id: 'anime', name: 'Anime/Cartoon', description: 'Estilo ilustrado' },
  { id: 'fantasy', name: 'Fantasy', description: 'Tema fantasia' },
  { id: 'professional', name: 'Profissional', description: 'Aspecto corporativo' }
]

export default function CreateAvatarPage() {
  const [selectedStyle, setSelectedStyle] = useState('realistic')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/avatars/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          style: selectedStyle,
          description
        })
      })

      if (!response.ok) throw new Error('Erro ao criar avatar')

      router.push('/dashboard')
    } catch (error) {
      console.error('Erro:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-dark-900 px-4 py-12 text-dark-50">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/dashboard" className="text-pink-400 hover:underline mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold">Criar teu avatar</h1>
          <p className="text-dark-300 mt-2">Personalize o estilo e características</p>
        </div>

        <form onSubmit={handleCreate} className="space-y-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Escolhe o estilo</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {styles.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setSelectedStyle(style.id)}
                  className={`p-4 rounded-xl border-2 text-left transition ${
                    selectedStyle === style.id
                      ? 'border-pink-500 bg-pink-500/10'
                      : 'border-dark-300 hover:border-dark-200'
                  }`}
                >
                  <p className="font-bold">{style.name}</p>
                  <p className="text-sm text-dark-300">{style.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Detalhes do avatar</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-dark-200 mb-2">Nome do avatar</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-dark-300 bg-dark-900 px-4 py-3 text-white outline-none focus:border-pink-500"
                  placeholder="Ex: Luna, Sofia, Alex"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-dark-200 mb-2">Descrição (opcional)</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-xl border border-dark-300 bg-dark-900 px-4 py-3 text-white outline-none focus:border-pink-500 resize-none h-24"
                  placeholder="Descreve características do teu avatar..."
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button type="submit" disabled={loading} className="btn btn-primary flex-1 disabled:opacity-50">
              {loading ? 'A criar...' : 'Criar avatar'}
            </button>
            <Link href="/dashboard" className="btn btn-secondary flex-1 text-center">
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
