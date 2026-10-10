'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-black gradient-text mb-2">Avatar IA</div>
            <p className="text-dark-300 text-sm">Seu avatar premium, personalizado e exclusivo.</p>
          </div>

          <div className="flex gap-6 text-sm text-dark-300">
            <Link href="#pricing" className="hover:text-pink-400 transition">Pacotes</Link>
            <Link href="/auth/signup" className="hover:text-pink-400 transition">Criar avatar</Link>
            <Link href="/auth/login" className="hover:text-pink-400 transition">Entrar</Link>
          </div>
        </div>

        <div className="border-t border-dark-300 mt-8 pt-6 text-center text-sm text-dark-400">
          © 2026 Avatar IA Premium. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
