'use client'

import Link from 'next/link'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-900 px-4">
      <div className="w-full max-w-md bg-dark-800 border border-dark-300 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold mb-2">Entrar</h1>
        <p className="text-dark-300 mb-8">Acede ao teu avatar premium.</p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-dark-200 mb-2">Email</label>
            <input className="w-full rounded-xl border border-dark-300 bg-dark-900 px-4 py-3 text-white outline-none" placeholder="email@exemplo.com" />
          </div>
          <div>
            <label className="block text-sm text-dark-200 mb-2">Password</label>
            <input type="password" className="w-full rounded-xl border border-dark-300 bg-dark-900 px-4 py-3 text-white outline-none" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center text-dark-300">
          Não tens conta?{' '}
          <Link href="/" className="text-pink-400 underline">
            Voltar para a loja
          </Link>
        </div>
      </div>
    </main>
  )
}
