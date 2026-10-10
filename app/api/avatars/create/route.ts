import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { userId, name, style, description } = await request.json()

    if (!userId || !name) {
      return NextResponse.json({ error: 'UserId and name required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('avatars')
      .insert([
        {
          user_id: userId,
          name,
          style,
          description,
          created_at: new Date()
        }
      ])
      .select()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ avatar: data[0], message: 'Avatar created successfully' }, { status: 201 })
  } catch (error) {
    console.error('Avatar Creation Error:', error)
    return NextResponse.json({ error: 'Failed to create avatar' }, { status: 500 })
  }
}
