import { NextRequest, NextResponse } from 'next/server'
import { generateImage } from '@/lib/huggingface'

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt required' }, { status: 400 })
    }

    const imageUrl = await generateImage(prompt)
    return NextResponse.json({ imageUrl })
  } catch (error) {
    console.error('Image Generation Error:', error)
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 })
  }
}
