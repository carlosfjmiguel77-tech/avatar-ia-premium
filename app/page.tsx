'use client'

import Link from 'next/link'
import { ArrowRight, Check, MessageCircle, Zap, Lock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingCard from '@/components/PricingCard'

const features = [
  {
    title: '1. Escolhe o estilo',
    description: 'Seleciona o visual do teu avatar e escolhe o nível de realismo que pretendês.'
  },
  {
    title: '2. Personaliza',
    description: 'Adiciona detalhes únicos para criar uma persona exclusiva e diferenciada.'
  },
  {
    title: '3. Gera e conversa',
    description: 'Recebe fotos premium, conversa com o avatar e cria experiências exclusivas.'
  }
]

const benefits = [
  {
    icon: Zap,
    title: 'Realismo premium',
    description: 'Visual mais próximo de uma persona digital realista e exclusiva.'
  },
  {
    icon: MessageCircle,
    title: 'Conversação natural',
    description: 'Interação envolvente com personalidade, contexto e resposta personalizada.'
  },
  {
    icon: Lock,
    title: 'Conteúdo exclusivo',
    description: 'Fotos únicas e privadas para quem procura algo premium e diferenciado.'
  }
]

const packages = [
  {
    name: 'Starter',
    price: '4€',
    description: 'ideal para começar',
    features: [
      'Fotos premium iniciais',
      'Estilo realista',
      'Experiência simples'
    ],
    popular: false
  },
  {
    name: 'Plus',
    price: '13€',
    description: 'mais popular',
    features: [
      'Mais fotografias',
      'Qualidade superior',
      'Mais variedade'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '17€',
    description: 'melhor valor',
    features: [
      'Mais ousado',
      'Qualidade premium',
      'Seleção exclusiva'
    ],
    popular: false
  },
  {
    name: 'Custom',
    price: '19,99€',
    description: 'personalização especial',
    features: [
      'Fotos sob medida',
      'Geração em tempo real',
      'Experiência exclusiva'
    ],
    popular: false
  }
]

const faqs = [
  {
    question: 'O que é o Avatar IA?',
    answer: 'É uma persona digital criada por IA, com visual realista, conversa personalizada e geração de imagens exclusivas.'
  },
  {
    question: 'Quanto tempo demora?',
    answer: 'Normalmente alguns minutos, dependendo do pacote e do nível de personalização escolhida.'
  },
  {
    question: 'Posso comprar um pacote?',
    answer: 'Sim. Oferecemos diferentes níveis para adequar a experiência ao teu objetivo e ao teu nível de consumo.'
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Seu avatar realista, personalizado e exclusivo.
              </h1>
              <p className="text-xl text-dark-200 mb-8 leading-relaxed">
                Crie uma persona digital única, converse com ela e receba fotos premium em alta qualidade. Tudo em um só lugar, com estilo realista, interação inteligente e personalização exclusiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="#pricing" className="btn btn-primary flex items-center justify-center gap-2">
                  Gerar meu avatar <ArrowRight size={20} />
                </Link>
                <Link href="#examples" className="btn btn-secondary">
                  Ver exemplos
                </Link>
              </div>
              <p className="text-dark-300 text-sm">Sem complicação. Sem demora. Só qualidade e exclusividade.</p>
            </div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-300 rounded-3xl p-6 shadow-2xl">
                <div className="bg-gradient-to-br from-pink-200 to-purple-400 rounded-2xl h-64 mb-4 flex items-center justify-center">
                  <div className="text-center text-dark-900 font-bold">Avatar Preview</div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <strong className="text-dark-100">Avatar Premium</strong>
                  <span className="text-sm text-dark-300">Online</span>
                </div>
                <div className="bg-dark-900 border border-dark-300 rounded-lg p-4 text-dark-100 text-sm leading-relaxed">
                  “Olá! Posso conversar contigo, criar cenas e personalizar o teu estilo.”
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="py-20 bg-dark-800/50 border-y border-dark-300">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title">Como funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="card">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-dark-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title">O que tens ao teu dispor</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <div key={idx} className="card">
                    <Icon size={40} className="text-pink-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-dark-200">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-dark-800/50 border-y border-dark-300">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title">Pacotes</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {packages.map((pkg, idx) => (
                <PricingCard key={idx} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="section-title">Perguntas frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="card">
                  <h3 className="font-bold text-dark-100 mb-2">{faq.question}</h3>
                  <p className="text-dark-200">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border-y border-dark-300">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Cria o teu avatar hoje</h2>
            <p className="text-xl text-dark-200 mb-8">Recebe fotos exclusivas em segundos e começa a usar premium agora.</p>
            <Link href="#pricing" className="btn btn-primary inline-flex items-center gap-2">
              Comprar agora <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
