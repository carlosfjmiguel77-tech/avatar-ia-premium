import axios from 'axios'

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY
const HF_API_URL = 'https://api-inference.huggingface.co/models'

if (!HF_API_KEY) {
  console.warn('HUGGINGFACE_API_KEY não configurada')
}

export async function generateImage(prompt: string) {
  try {
    const response = await axios.post(
      `${HF_API_URL}/stabilityai/stable-diffusion-xl-base-1.0`,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer'
      }
    )

    const base64 = Buffer.from(response.data).toString('base64')
    return `data:image/png;base64,${base64}`
  } catch (error) {
    console.error('Erro ao gerar imagem:', error)
    throw error
  }
}
