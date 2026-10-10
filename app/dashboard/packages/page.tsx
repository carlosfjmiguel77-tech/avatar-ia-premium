'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Starter',
    price: '4€',
    description: 'ideal para começar',
    features: ['Fotos premium iniciais', 'Estilo realista', 'Experiência simples'],
    popular: false
  },
  {
    name: 'Plus',
    price: '13€',
    description: 'mais popular',
    features: ['Mais fotografias', 'Qualidade superior', 'Mais variedade'],
    popular: true
  },
  {
    name: 'Premium',
    price: '17€',
    description: 'melhor valor',
    features: ['Mais ousado', 'Qualidade premium', 'Seleção exclusiva'],
    popular: false
  },
  {
    name: 'Custom',
    price: '19,99€',
    description: 'personalização especial',
    features: ['Fotos sob medida', 'Geração em tempo real', 'Experiência exclusiva'],
    popular: false
  }
]

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-dark-900 px-4 py-12 text-dark-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <Link href="/dashboard" className="text-pink-400 hover:underline mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl font-bold">Pacotes premium</h1>
          <p className="text-dark-300 mt-2">Escolhe o pacote que melhor se adequa a ti</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`price-card ${pkg.popular ? 'popular' : ''}`}>
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl font-bold mb-2">{pkg.price}</div>
              <p className="text-dark-300 text-sm mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-dark-200">
                    <Check size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`btn w-full ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}>
                Comprar agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
