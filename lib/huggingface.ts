async function generateAvatarImage(prompt: string, style: string = 'realistic') {
  try {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0',
      {
        headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
        method: 'POST',
        body: JSON.stringify({
          inputs: `${prompt}, ${style} style, professional photo, high quality, premium`,
        }),
      }
    )

    const result = await response.blob()
    return result
  } catch (error) {
    console.error('Erro ao gerar imagem:', error)
    throw error
  }
}

export { generateAvatarImage }
