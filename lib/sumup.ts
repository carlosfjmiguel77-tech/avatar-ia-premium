async function createSumUpCheckout(amount: number, packageName: string) {
  try {
    const response = await fetch('https://api.sumup.com/v0.1/checkouts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SUMUP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100),
        currency: 'EUR',
        description: `Avatar IA Premium - ${packageName}`,
        checkout_reference: `avatar-${Date.now()}`,
        redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success`,
        return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
      })
    })

    const data = await response.json()
    return data.checkout_url
  } catch (error) {
    console.error('Erro ao criar checkout SumUp:', error)
    throw error
  }
}

export { createSumUpCheckout }
