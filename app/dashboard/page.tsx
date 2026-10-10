'use client'

import Link from 'next/link'

const sampleCards = [
  { title: 'Avatar atual', value: 'Luna Premium' },
  { title: 'Fotos geradas', value: '24' },
  { title: 'Pacote ativo', value: 'Plus' },
  { title: 'Status', value: 'Ativo' }
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-dark-900 px-4 py-12 text-dark-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-pink-400">Dashboard</p>
            <h1 className="text-4xl font-bold mt-2">Bem-vindo ao teu painel</h1>
          </div>
          <Link href="/" className="btn btn-secondary">
            Voltar ao início
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {sampleCards.map((item) => (
            <div key={item.title} className="card">
              <p className="text-dark-300 text-sm mb-2">{item.title}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Avatar atual</h2>
            <div className="h-72 rounded-2xl bg-gradient-to-br from-pink-200 to-purple-400 flex items-center justify-center text-dark-900 font-bold text-xl">
              Preview do avatar
            </div>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="btn btn-primary">Gerar nova foto</Link>
              <Link href="#" className="btn btn-secondary">Conversar</Link>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Histórico</h2>
            <div className="space-y-4">
              {['Última conversa', '3 imagens geradas', '1 pacote upgrade', '2 indicações ativadas'].map((item) => (
                <div key={item} className="border border-dark-300 rounded-xl p-4 text-dark-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
