'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth/login')
        return
      }
      setUser(user)
      setLoading(false)
    }

    getUser()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-dark-900 flex items-center justify-center">
        <p className="text-dark-50">A carregar...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-dark-900 px-4 py-12 text-dark-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-pink-400">Dashboard</p>
            <h1 className="text-4xl font-bold mt-2">Bem-vindo, {user?.user_metadata?.name || 'utilizador'}</h1>
          </div>
          <button
            onClick={() => supabase.auth.signOut().then(() => router.push('/'))}
            className="btn btn-secondary"
          >
            Sair
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="card">
            <p className="text-dark-300 text-sm mb-2">Avatar actual</p>
            <p className="text-2xl font-bold">Criar novo</p>
          </div>
          <div className="card">
            <p className="text-dark-300 text-sm mb-2">Fotos geradas</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="card">
            <p className="text-dark-300 text-sm mb-2">Pacote ativo</p>
            <p className="text-2xl font-bold">Nenhum</p>
          </div>
          <div className="card">
            <p className="text-dark-300 text-sm mb-2">Status</p>
            <p className="text-2xl font-bold text-pink-400">Ativo</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Começa agora</h2>
            <p className="text-dark-200 mb-6">Cria o teu avatar premium e recebe fotos exclusivas.</p>
            <Link href="/dashboard/create-avatar" className="btn btn-primary">
              Criar avatar
            </Link>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Pacotes premium</h2>
            <p className="text-dark-200 mb-6">Upgrade para obter mais fotos e funcionalidades.</p>
            <Link href="/dashboard/packages" className="btn btn-secondary">
              Ver pacotes
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
