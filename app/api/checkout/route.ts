import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { createSumUpCheckout } from '@/lib/sumup'

const packages = {
  starter: { price: 4, name: 'Starter' },
  plus: { price: 13, name: 'Plus' },
  premium: { price: 17, name: 'Premium' },
  custom: { price: 19.99, name: 'Custom' }
}

export async function POST(req: NextRequest) {
  try {
    const { packageName } = await req.json()
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 })
    }

    const pkg = packages[packageName as keyof typeof packages]
    if (!pkg) {
      return NextResponse.json({ error: 'Pacote inválido' }, { status: 400 })
    }

    // Criar checkout
    const checkoutUrl = await createSumUpCheckout(pkg.price, pkg.name)

    // Registrar tentativa de compra
    await supabase.from('purchases').insert({
      user_id: session.user.id,
      package_name: pkg.name,
      price: pkg.price,
      status: 'pending',
      payment_id: null
    })

    return NextResponse.json({ checkoutUrl })
  } catch (error) {
    console.error('Erro ao criar checkout:', error)
    return NextResponse.json({ error: 'Erro ao processar pagamento' }, { status: 500 })
  }
}
