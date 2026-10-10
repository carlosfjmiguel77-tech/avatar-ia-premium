'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
        }
      })

      if (signupError) {
        setError(signupError.message)
        return
      }

      // Redirecionar para dashboard após signup bem-sucedido
      setTimeout(() => router.push('/dashboard'), 1000)
    } catch (err) {
      setError('Erro ao criar conta')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-900 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-dark-800 border border-dark-300 rounded-3xl p-8 shadow-2xl mb-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Cria tua conta</h1>
            <p className="text-dark-300">Começa com teu avatar premium em segundos</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            {error && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-red-200 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm text-dark-200 mb-2 font-semibold">Nome completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-dark-300 bg-dark-900 px-4 py-3 text-white outline-none focus:border-pink-500 transition"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-dark-200 mb-2 font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-dark-300 bg-dark-900 px-4 py-3 text-white outline-none focus:border-pink-500 transition"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-dark-200 mb-2 font-semibold">Password segura</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-dark-300 bg-dark-900 px-4 py-3 text-white outline-none focus:border-pink-500 transition"
                placeholder="••••••••"
                required
                minLength={8}
              />
              <p className="text-xs text-dark-400 mt-1">Mínimo 8 caracteres</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full text-lg py-3 disabled:opacity-50 font-bold"
            >
              {loading ? 'A criar conta...' : 'Criar meu avatar agora'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-dark-300 text-center text-dark-300 text-sm">
            Já tens conta?{' '}
            <Link href="/auth/login" className="text-pink-400 font-bold hover:underline">
              Entra aqui
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="text-center text-dark-400 text-sm space-y-2">
          <p>🔒 Pagamento seguro e criptografado</p>
          <p>✅ Acesso imediato após criação da conta</p>
          <p>📱 Funciona em todos os dispositivos</p>
        </div>
      </div>
    </main>
  )
}
