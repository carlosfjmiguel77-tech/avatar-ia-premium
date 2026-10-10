'use client'

import Link from 'next/link'
import { ArrowRight, Check, MessageCircle, Sparkles, Shield, Users, TrendingUp, Star, Gift } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingCard from '@/components/PricingCard'

const coreBenefits = [
  {
    icon: Sparkles,
    title: 'Avatar com personalidade',
    description: 'Personalize estilo, traços e presença para criar uma persona única e memorável.'
  },
  {
    icon: MessageCircle,
    title: 'Conversação natural',
    description: 'Interaja com o teu avatar como se fosse uma persona real, com resposta natural e envolvente.'
  },
  {
    icon: Shield,
    title: 'Conteúdo privado',
    description: 'Gere imagens exclusivas e fotos premium num ambiente privado e seguro.'
  }
]

const growthLevers = [
  {
    icon: Users,
    title: 'Indique amigos',
    description: 'Cada indicação ativa converte em desconto para ti e para o amigo.'
  },
  {
    icon: TrendingUp,
    title: 'Crescimento orgânico',
    description: 'A sua rede cresce e o produto ganha escala sem depender de campanhas caras.'
  },
  {
    icon: Gift,
    title: 'Créditos e rewards',
    description: 'Acumula créditos e usa-os no próximo upgrade quando quiseres avançar.'
  }
]

const testimonials = [
  { quote: 'Fiquei realmente surpreendido com a qualidade. O avatar tem personalidade e parece quase real.', author: 'João M.' },
  { quote: 'A melhor parte é que o avatar responde e parece vivo. Não parece só uma imagem.', author: 'Sofia L.' },
  { quote: 'É premium, exclusivo e muito mais interessante do que outras ferramentas genéricas.', author: 'Carlos T.' }
]

const packages = [
  {
    name: 'Starter',
    price: '4€',
    description: 'ideal para conhecer',
    features: ['5 fotos premium', 'Estilo básico', 'Chat simples', 'Acesso inicial'],
    popular: false,
    cta: 'Começar'
  },
  {
    name: 'Plus',
    price: '13€',
    description: 'mais popular',
    features: ['20 fotos premium', 'Qualidade superior', 'Chat completo', 'Estilos múltiplos'],
    popular: true,
    cta: 'Escolher Plus'
  },
  {
    name: 'Premium',
    price: '17€',
    description: 'melhor valor',
    features: ['50 fotos premium', 'Qualidade máxima', 'Chat ilimitado', 'Downloads exclusivos'],
    popular: false,
    cta: 'Upgrade Premium'
  },
  {
    name: 'Custom',
    price: '19,99€',
    description: 'experiência VIP',
    features: ['Fotos sob medida', 'Personalização total', 'Selo premium', 'Suporte prioritário'],
    popular: false,
    cta: 'Ir para Custom'
  }
]

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-purple-500/20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 border border-pink-500/40 bg-pink-500/10 text-pink-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star size={16} className="text-pink-400" />
                Apenas 500 vagas este mês
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-6">
                O teu avatar IA premium, personalizado e exclusivo.
              </h1>

              <p className="text-xl text-dark-200 leading-relaxed mb-8 max-w-xl">
                Cria uma persona digital única, conversa com ela, recebe fotos premium e apresenta uma presença digital que se destaca.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/auth/signup" className="btn btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
                  Criar o meu avatar <ArrowRight size={22} />
                </Link>
                <Link href="#pricing" className="btn btn-secondary text-lg px-8 py-4">
                  Ver preços
                </Link>
              </div>

              <div className="flex flex-wrap gap-8 text-sm text-dark-300">
                <div>
                  <div className="text-pink-400 text-2xl font-bold">2.5K+</div>
                  <div>avatares criados</div>
                </div>
                <div>
                  <div className="text-pink-400 text-2xl font-bold">4.9/5</div>
                  <div>avaliação</div>
                </div>
                <div>
                  <div className="text-pink-400 text-2xl font-bold">24h</div>
                  <div>suporte</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-pink-400/20 rounded-3xl p-6 shadow-2xl shadow-pink-500/10">
                <div className="bg-gradient-to-br from-pink-300 via-purple-400 to-pink-500 h-[26rem] rounded-2xl flex items-center justify-center text-dark-900 font-black text-3xl">
                  Avatar Premium
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-dark-50">Persona Digital</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-green-500/15 text-green-300 border border-green-400/20">online</span>
                  </div>
                  <div className="bg-dark-900 border border-dark-300 rounded-xl p-4 text-sm text-dark-200 leading-relaxed">
                    "Sou a tua persona digital. Posso conversar, adaptar o teu estilo e gerar fotos exclusivas com um visual premium."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-800/50 border-y border-dark-300">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title mb-12">O que torna esta experiência diferente</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreBenefits.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="card ">
                    <Icon size={40} className="text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-dark-200">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title mb-12">A fórmula que faz crescer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {growthLevers.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="card">
                    <Icon size={42} className="text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-dark-200">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-800/50 border-y border-dark-300">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title mb-12">Como funciona em 3 passos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Escolhe o estilo', description: 'Seleciona o visual ideal para a tua persona digital e define o tipo de presença que pretendes.' },
                { step: '2', title: 'Personaliza', description: 'Ajusta detalhes, expressão e identidade para ter um avatar que reflete a tua essência.' },
                { step: '3', title: 'Conversa e cresce', description: 'Interage, gera imagens exclusivas e usa a rede de indicações para crescer com descontos.' }
              ].map((item) => (
                <div key={item.step} className="card relative">
                  <div className="absolute -top-4 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center font-bold text-white text-lg">{item.step}</div>
                  <h3 className="text-2xl font-bold mt-4 mb-4">{item.title}</h3>
                  <p className="text-dark-200">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="section-title mb-12">O que as pessoas dizem</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, index) => (
                <div key={index} className="card">
                  <div className="flex gap-1 text-pink-400 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-dark-100 italic mb-4">“{item.quote}”</p>
                  <p className="text-dark-300 font-medium">— {item.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-dark-800/50 border-y border-dark-300">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Pacotes pensados para converter</h2>
              <p className="text-xl text-dark-200">Fácil de começar. Premium ao avançar.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <PricingCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-pink-500/10 to-purple-600/10 border-y border-dark-300">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ganhe com a rede</h2>
            <p className="text-xl text-dark-200 mb-8">Indique amigos, receba descontos e amplie o alcance do produto de forma orgânica.</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card">
                <p className="text-4xl font-bold text-pink-400 mb-2">10%</p>
                <p className="text-dark-200">de desconto por indicação ativa</p>
              </div>
              <div className="card">
                <p className="text-4xl font-bold text-pink-400 mb-2">∞</p>
                <p className="text-dark-200">acumular recompensas e créditos</p>
              </div>
              <div className="card">
                <p className="text-4xl font-bold text-pink-400 mb-2">💰</p>
                <p className="text-dark-200">reinveste no teu próximo upgrade</p>
              </div>
            </div>
            <Link href="/auth/signup" className="btn btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Criar agora <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Cria o teu avatar agora</h2>
            <p className="text-xl text-dark-200 mb-8">A tua presença digital premium começa aqui. Configura o teu avatar e entra no mundo do novo social digital.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="btn btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
                Começar agora <ArrowRight size={20} />
              </Link>
              <Link href="#pricing" className="btn btn-secondary text-lg px-8 py-4">
                Ver pacotes
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
