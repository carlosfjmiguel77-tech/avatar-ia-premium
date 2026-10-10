'use client'

import Link from 'next/link'
import { Button } from './Button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-300">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Avatar IA</div>
        <Link href="#pricing">
          <Button variant="primary">Comprar agora</Button>
        </Link>
      </div>
    </header>
  )
}
