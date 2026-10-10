import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateAvatarImage } from '@/lib/huggingface'

export async function POST(req: NextRequest) {
  try {
    const { avatarId, prompt, style } = await req.json()
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 })
    }

    // Gerar imagem
    const imageBlob = await generateAvatarImage(prompt, style)

    // Upload para Supabase Storage
    const fileName = `avatar-${Date.now()}.png`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('avatar-photos')
      .upload(`${session.user.id}/${fileName}`, imageBlob)

    if (uploadError) throw uploadError

    // Obter URL pública
    const { data } = supabase.storage
      .from('avatar-photos')
      .getPublicUrl(`${session.user.id}/${fileName}`)

    // Salvar referência no banco
    await supabase.from('avatar_photos').insert({
      avatar_id: avatarId,
      image_url: data.publicUrl,
      style: style
    })

    return NextResponse.json({ url: data.publicUrl })
  } catch (error) {
    console.error('Erro ao gerar imagem:', error)
    return NextResponse.json({ error: 'Erro ao gerar imagem' }, { status: 500 })
  }
}
