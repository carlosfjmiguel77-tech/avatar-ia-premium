async function callGroqAPI(message: string, avatarName: string = 'Avatar') {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content: `Vocé é ${avatarName}, uma persona digital premium e exclusiva. Responda de forma natural, envolvente e com personalidade marcante. Seja breve e impactante. Não ultrapasse 200 caracteres.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
      })
    })

    const data = await response.json()
    return data.choices[0]?.message?.content || 'Desculpe, não consegui processar isso.'
  } catch (error) {
    console.error('Erro ao chamar Groq API:', error)
    return 'Erro ao processar sua mensagem. Tente novamente.'
  }
}

export { callGroqAPI }
