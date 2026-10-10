import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { callGroqAPI } from '@/lib/groq'

export async function POST(req: NextRequest) {
  try {
    const { message, avatarId } = await req.json()
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 })
    }

    // Buscar avatar
    const { data: avatar } = await supabase
      .from('avatars')
      .select('name')
      .eq('id', avatarId)
      .single()

    // Chamar Groq
    const aiResponse = await callGroqAPI(message, avatar?.name || 'Avatar')

    // Salvar mensagem
    await supabase.from('chat_messages').insert({
      avatar_id: avatarId,
      user_message: message,
      ai_response: aiResponse
    })

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error('Erro no chat:', error)
    return NextResponse.json({ error: 'Erro ao processar chat' }, { status: 500 })
  }
}
