'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  popular: boolean
  cta: string
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular,
  cta
}: PricingCardProps) {
  return (
    <div
      className={`relative card transition-all ${
        popular
          ? 'ring-2 ring-pink-500 md:scale-105 shadow-2xl shadow-pink-500/20'
          : 'hover:bg-dark-700'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
          Mais popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-dark-300">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-5xl font-black text-pink-400">{price}</span>
        <span className="text-dark-300 ml-2">uma vez</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-dark-200">
            <Check size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/auth/signup"
        className={`btn w-full flex items-center justify-center gap-2 ${
          popular ? 'btn-primary' : 'btn-secondary'
        }`}
      >
        {cta}
        <ArrowRight size={18} />
      </Link>

      {popular && (
        <p className="text-center text-xs text-pink-400 mt-4 font-semibold">
          ✓ Melhor custo-benefício
        </p>
      )}
    </div>
  )
}
