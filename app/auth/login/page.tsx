'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        setError(error.message)
        return
      }

      router.push('/dashboard')
    } catch (err) {
      setError('Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-900 px-4">
      <div className="w-full max-w-md bg-dark-800 border border-dark-300 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold mb-2">Entrar</h1>
        <p className="text-dark-300 mb-8">Acede ao teu avatar premium.</p>

        <form onSubmit={handleLogin} className="space-y-5">
          {error && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-red-200 text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm text-dark-200 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-dark-300 bg-dark-900 px-4 py-3 text-white outline-none focus:border-pink-500"
              placeholder="email@exemplo.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm text-dark-200 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-dark-300 bg-dark-900 px-4 py-3 text-white outline-none focus:border-pink-500"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full disabled:opacity-50"
          >
            {loading ? 'A entrar...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-6 text-center text-dark-300">
          Não tens conta?{' '}
          <Link href="/auth/signup" className="text-pink-400 underline">
            Criar conta
          </Link>
        </div>
      </div>
    </main>
  )
}
