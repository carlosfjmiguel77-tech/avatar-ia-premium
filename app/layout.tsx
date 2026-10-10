import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avatar IA Premium - Seu Avatar Personalizado Exclusivo',
  description: 'Crie seu avatar IA premium personalizado. Conversa natural, fotos exclusivas e presença digital premium em um só lugar.',
  keywords: 'avatar IA, IA premium, persona digital, foto IA, chat IA',
  openGraph: {
    title: 'Avatar IA Premium - Seu Avatar Personalizado Exclusivo',
    description: 'Crie seu avatar IA premium personalizado com conversa natural e fotos exclusivas.',
    type: 'website',
    url: 'https://avatar-ia-premium.com',
    images: [{
      url: 'https://avatar-ia-premium.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Avatar IA Premium'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avatar IA Premium',
    description: 'Seu avatar personalizado, exclusivo e premium',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-900 text-dark-50 antialiased">
        {children}
      </body>
    </html>
  )
}
