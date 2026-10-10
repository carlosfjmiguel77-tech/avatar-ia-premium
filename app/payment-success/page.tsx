'use client'

import Link from 'next/link'

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-dark-900 text-dark-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-dark-800 border border-dark-300 rounded-3xl p-10 text-center shadow-2xl">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-4xl font-bold mb-4">Pagamento confirmado</h1>
        <p className="text-dark-200 mb-8 leading-relaxed">
          O teu pacote foi confirmado com sucesso. Agora tens acesso ao teu avatar premium e às fotos exclusivas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="btn btn-primary">
            Ir para o dashboard
          </Link>
          <Link href="/" className="btn btn-secondary">
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  )
}
