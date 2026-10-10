import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { name, style, description } = await req.json()
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 })
    }

    const { data, error } = await supabase
      .from('avatars')
      .insert({
        user_id: session.user.id,
        name,
        style,
        description
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ avatar: data })
  } catch (error) {
    console.error('Erro ao criar avatar:', error)
    return NextResponse.json({ error: 'Erro ao criar avatar' }, { status: 500 })
  }
}
