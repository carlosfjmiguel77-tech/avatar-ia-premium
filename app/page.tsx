'use client'

import Link from 'next/link'
import { ArrowRight, Check, MessageCircle, Zap, Lock, Users, TrendingUp } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingCard from '@/components/PricingCard'

const features = [
  {
    icon: Zap,
    title: 'Realismo Premium',
    description: 'Visual mais próximo de uma persona digital realista e exclusiva'
  },
  {
    icon: MessageCircle,
    title: 'Conversa Natural',
    description: 'Interação envolvente com personalidade, contexto e resposta personalizada'
  },
  {
    icon: Lock,
    title: 'Conteúdo Exclusivo',
    description: 'Fotos únicas e privadas para quem procura algo premium e diferenciado'
  },
  {
    icon: Users,
    title: 'Indica Amigos',
    description: 'Ganhe 10% de desconto por cada amigo que se registar e comprar'
  },
  {
    icon: TrendingUp,
    title: 'Crescimento Social',
    description: 'Partilhe e expanda sua rede de forma orgânica com recompensas'
  }
]

const testimonials = [
  {
    text: 'Criei um avatar e fiquei muito surpreendido com a qualidade. Muito melhor do que esperava.',
    author: 'João M.'
  },
  {
    text: 'A melhor parte é que o avatar tem personalidade. Não é só uma foto bonita.',
    author: 'Sofia L.'
  },
  {
    text: 'Excelente qualidade e exclusividade. Vale muito a pena investir nisto.',
    author: 'Carlos T.'
  }
]

const packages = [
  {
    name: 'Starter',
    price: '4€',
    description: 'ideal para começar',
    features: [
      '5 Fotos premium iniciais',
      'Estilo realista',
      'Chat básico',
      'Experiência simples'
    ],
    popular: false,
    cta: 'Começar agora'
  },
  {
    name: 'Plus',
    price: '13€',
    description: 'mais vendido',
    features: [
      '20 Fotografias premium',
      'Qualidade superior',
      'Chat completo com IA',
      'Múltiplos estilos',
      'Suporte prioritário'
    ],
    popular: true,
    cta: 'Escolher Plus'
  },
  {
    name: 'Premium',
    price: '17€',
    description: 'melhor valor',
    features: [
      '50 Fotografias premium',
      'Qualidade máxima',
      'Chat ilimitado',
      'Todas as variações',
      'Download exclusivo',
      'Prioridade máxima'
    ],
    popular: false,
    cta: 'Upgrade Premium'
  },
  {
    name: 'Custom',
    price: '19,99€',
    description: 'personalização especial',
    features: [
      'Fotos sob medida',
      'Geração em tempo real',
      'Personalização total',
      'Experiência VIP',
      'Suporte 24/7',
      'Direito de autor'
    ],
    popular: false,
    cta: 'Ir para Custom'
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Otimizado para conversão */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Fundo animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-purple-500/20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              {/* Badge de urgência */}
              <div className="inline-block mb-6">
                <span className="bg-pink-500/20 border border-pink-500/50 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 Limitado: Apenas 500 slots disponíveis este mês
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Seu avatar IA realista, personalizado e exclusivo
              </h1>
              <p className="text-xl text-dark-200 mb-8 leading-relaxed font-light">
                Crie uma persona digital única com inteligência artificial avançada. Converse naturalmente, receba fotos exclusivas em alta qualidade e ganhe comissões indicando amigos.
              </p>

              {/* CTA Principal - Destaque máximo */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/auth/signup" className="btn btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-2xl">
                  Criar meu avatar agora <ArrowRight size={24} />
                </Link>
                <Link href="#examples" className="btn btn-secondary text-lg px-8 py-4">
                  Ver exemplos
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex gap-8 text-sm text-dark-300">
                <div>
                  <p className="font-bold text-pink-400">2.5K+</p>
                  <p>avatares criados</p>
                </div>
                <div>
                  <p className="font-bold text-pink-400">4.9★</p>
                  <p>avaliação média</p>
                </div>
                <div>
                  <p className="font-bold text-pink-400">24h</p>
                  <p>suporte rápido</p>
                </div>
              </div>
            </div>

            {/* Showcase visual */}
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-dark-800 to-dark-900 border-2 border-pink-500/30 rounded-3xl p-6 shadow-2xl hover:shadow-pink-500/20 transition">
                <div className="bg-gradient-to-br from-pink-300 via-purple-400 to-pink-500 rounded-2xl h-96 mb-6 flex items-center justify-center text-dark-900 font-bold text-2xl animate-pulse">
                  Avatar Premium em Ação
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <strong className="text-dark-100">Avatar Inteligente</strong>
                    <span className="text-xs bg-green-500/30 text-green-300 px-3 py-1 rounded-full">Online</span>
                  </div>
                  <div className="bg-dark-900 border border-dark-300 rounded-lg p-4 text-dark-100 text-sm leading-relaxed italic">
                    "Olá! Sou sua persona digital exclusiva. Posso conversar naturalmente, gerar fotos únicas e oferecer uma experiência completamente personalizada. Você só é você."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof com vídeos/testimunhos */}
        <section className="py-20 bg-dark-800/50 border-y border-dark-300">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title mb-12">O que as pessoas acham</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="card hover:bg-dark-700 transition">
                  <p className="text-dark-100 mb-4 italic italic-text">\"<span className="text-pink-400">{t.text}</span>\"</p>
                  <p className="text-sm text-dark-300">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title mb-12">Por que escolher Avatar IA Premium</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.slice(0, 3).map((f, idx) => {
                const Icon = f.icon
                return (
                  <div key={idx} className="card hover:bg-dark-700 transition">
                    <Icon size={40} className="text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-dark-200">{f.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="examples" className="py-20 bg-dark-800/50 border-y border-dark-300">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title mb-12">3 Passos para seu avatar premium</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card relative">
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <h3 className="text-2xl font-bold mb-4 mt-4">Escolhe o estilo</h3>
                <p className="text-dark-200">Seleciona o visual, personaliza todos os detalhes e cria uma persona única que é só tua.</p>
              </div>
              <div className="card relative">
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <h3 className="text-2xl font-bold mb-4 mt-4">Gera fotos premium</h3>
                <p className="text-dark-200">Recebe fotos exclusivas em alta qualidade em múltiplos estilos, todas personalizadas para ti.</p>
              </div>
              <div className="card relative">
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <h3 className="text-2xl font-bold mb-4 mt-4">Conversa e cresce</h3>
                <p className="text-dark-200">Interage com sua persona digital e ganha comissões quando amigos se juntam.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing - Otimizado para conversão */}
        <section id="pricing" className="py-20 bg-dark-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Preços transparentes, sem surpresas</h2>
              <p className="text-xl text-dark-200">Escolha o pacote certo para você. Upgrade a qualquer momento.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {packages.map((pkg, idx) => (
                <PricingCard key={idx} {...pkg} />
              ))}
            </div>
            <div className="text-center text-dark-300 text-sm">
              <p>💳 Pagamento seguro com SumUp | 🔒 Seus dados protegidos | ✅ Acesso imediato após compra</p>
            </div>
          </div>
        </section>

        {/* Sistema de indicação */}
        <section className="py-20 bg-gradient-to-r from-pink-500/10 to-purple-600/10 border-y border-dark-300">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ganhe com indicações</h2>
            <p className="text-xl text-dark-200 mb-8">Convide um amigo, ambos ganham 10% de desconto no próximo pacote.</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card">
                <p className="text-3xl font-bold text-pink-400 mb-2">10%</p>
                <p>Desconto por indicação</p>
              </div>
              <div className="card">
                <p className="text-3xl font-bold text-pink-400 mb-2">∞</p>
                <p>Sem limite de indicações</p>
              </div>
              <div className="card">
                <p className="text-3xl font-bold text-pink-400 mb-2">💰</p>
                <p>Créditos acumuláveis</p>
              </div>
            </div>
            <Link href="/auth/signup" className="btn btn-primary inline-flex items-center gap-2">
              Começar e ganhar <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6">Cria o teu avatar agora</h2>
            <p className="text-xl text-dark-200 mb-8">Limitado a 500 avatares este mês. Recebe fotos exclusivas em segundos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="btn btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
                Criar meu avatar <ArrowRight size={20} />
              </Link>
              <Link href="#pricing" className="btn btn-secondary text-lg px-8 py-4">
                Ver preços
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
