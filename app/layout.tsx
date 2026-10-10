import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avatar IA Premium - Seu avatar realista, personalizado e exclusivo',
  description: 'Crie o seu avatar realista, converse com ele e receba fotos premium em alta qualidade.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Avatar IA Premium',
    description: 'Avatar realista personalizado com chat IA e fotos exclusivas',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className="bg-dark-900 text-dark-50">
        {children}
      </body>
    </html>
  )
}
