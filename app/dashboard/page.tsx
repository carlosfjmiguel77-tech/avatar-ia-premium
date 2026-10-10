'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Copy, Share2, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [referralCode, setReferralCode] = useState('')
  const [avatars, setAvatars] = useState([])
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth/login')
        return
      }
      setUser(user)
      setReferralCode(`avatar-${user.id.slice(0, 8)}`)
      
      // Buscar avatares do utilizador
      const { data } = await supabase
        .from('avatars')
        .select('*')
        .eq('user_id', user.id)
      
      setAvatars(data || [])
      setLoading(false)
    }

    getUser()
  }, [])

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(`${window.location.origin}?ref=${referralCode}`)
    alert('Link de indicação copiado!')
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-dark-900 flex items-center justify-center">
        <p className="text-dark-50 text-lg">A carregar o seu painel...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-dark-900 px-4 py-12 text-dark-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-pink-400 font-bold">Dashboard Premium</p>
            <h1 className="text-5xl font-bold mt-2">Bem-vindo, {user?.user_metadata?.name || 'utilizador'}</h1>
            <p className="text-dark-300 mt-2">Gerencie seus avatares e acompanhe seu crescimento</p>
          </div>
          <button
            onClick={() => supabase.auth.signOut().then(() => router.push('/'))}
            className="btn btn-secondary"
          >
            Sair
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card hover:bg-dark-700 transition">
            <p className="text-dark-300 text-sm mb-2">Avatares criados</p>
            <p className="text-4xl font-bold text-pink-400">{avatars.length}</p>
          </div>
          <div className="card hover:bg-dark-700 transition">
            <p className="text-dark-300 text-sm mb-2">Fotos geradas</p>
            <p className="text-4xl font-bold text-pink-400">0</p>
          </div>
          <div className="card hover:bg-dark-700 transition">
            <p className="text-dark-300 text-sm mb-2">Pacote ativo</p>
            <p className="text-2xl font-bold">Nenhum</p>
          </div>
          <div className="card hover:bg-dark-700 transition">
            <p className="text-dark-300 text-sm mb-2">Créditos indicação</p>
            <p className="text-4xl font-bold text-green-400">0€</p>
          </div>
        </div>

        {/* Sistema de referência destacado */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card bg-gradient-to-br from-pink-500/10 to-dark-800">
            <div className="flex items-center gap-3 mb-4">
              <Share2 size={24} className="text-pink-400" />
              <h2 className="text-2xl font-bold">Ganhe com indicações</h2>
            </div>
            <p className="text-dark-200 mb-6">Convide amigos e receba 10% de desconto em cada compra que realizarem.</p>
            <div className="bg-dark-900 border border-dark-300 rounded-lg p-4 mb-4">
              <p className="text-xs text-dark-400 mb-2">Seu código de indicação</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-pink-400 font-mono text-sm break-all">{referralCode}</code>
                <button
                  onClick={handleCopyReferral}
                  className="btn btn-primary p-2"
                  title="Copiar"
                >
                  <Copy size={18} />
                </button>
              </div>
            </div>
            <p className="text-xs text-dark-400 text-center">Link: {window?.location?.origin}?ref={referralCode}</p>
          </div>

          {/* Principais ações */}
          <div className="space-y-4">
            <Link href="/dashboard/create-avatar" className="card hover:bg-dark-700 transition block">
              <h3 className="text-xl font-bold mb-2">Criar novo avatar</h3>
              <p className="text-dark-200">Personalize e gere seu próximo avatar premium</p>
            </Link>
            <Link href="/dashboard/packages" className="card hover:bg-dark-700 transition block">
              <h3 className="text-xl font-bold mb-2">Upgrade de pacote</h3>
              <p className="text-dark-200">Obtenha mais fotos e funcionalidades premium</p>
            </Link>
          </div>
        </div>

        {/* Avatares criados */}
        {avatars.length > 0 && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Meus avatares</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {avatars.map((avatar) => (
                <div key={avatar.id} className="bg-dark-900 border border-dark-300 rounded-xl p-6 hover:border-pink-500 transition">
                  <div className="bg-gradient-to-br from-pink-200 to-purple-400 rounded-lg h-40 mb-4 flex items-center justify-center text-dark-900 font-bold">
                    {avatar.name}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{avatar.name}</h3>
                  <p className="text-dark-300 text-sm mb-4">{avatar.description || 'Sem descrição'}</p>
                  <p className="text-xs text-dark-400 mb-4">Estilo: {avatar.style || 'Não definido'}</p>
                  <div className="flex gap-2">
                    <button className="btn btn-primary flex-1 text-sm">Conversar</button>
                    <button className="btn btn-secondary flex-1 text-sm">Gerar fotos</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {avatars.length === 0 && (
          <div className="text-center py-12">
            <TrendingUp size={48} className="mx-auto mb-4 text-dark-400" />
            <p className="text-dark-300 mb-4">Você ainda não criou nenhum avatar</p>
            <Link href="/dashboard/create-avatar" className="btn btn-primary inline-flex items-center gap-2">
              Criar meu primeiro avatar
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
