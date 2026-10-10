'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-dark-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center font-black text-lg">A</div>
          <div className="text-xl font-black gradient-text">Avatar IA</div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-dark-200">
          <Link href="#examples" className="hover:text-pink-400 transition">Como funciona</Link>
          <Link href="#pricing" className="hover:text-pink-400 transition">Pacotes</Link>
          <Link href="#" className="hover:text-pink-400 transition">Indicações</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="btn btn-secondary text-sm px-4 py-2">
            Entrar
          </Link>
          <Link href="/auth/signup" className="btn btn-primary text-sm px-4 py-2 inline-flex items-center gap-2">
            Criar avatar <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  )
}
