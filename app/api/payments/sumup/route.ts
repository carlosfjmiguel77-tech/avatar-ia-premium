import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

const SUMUP_API_KEY = process.env.SUMUP_API_KEY
const SUMUP_API_URL = 'https://api.sumup.com/v0.1'

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, description, email } = await request.json()

    if (!amount || !currency) {
      return NextResponse.json({ error: 'Amount and currency required' }, { status: 400 })
    }

    const response = await axios.post(
      `${SUMUP_API_URL}/checkouts`,
      {
        amount: Math.round(amount * 100),
        currency,
        checkout_reference: `avatar-${Date.now()}`,
        description: description || 'Avatar IA Premium',
        return_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/payment-success`,
        notification_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/payments/webhook`
      },
      {
        headers: {
          Authorization: `Bearer ${SUMUP_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('SumUp Payment Error:', error)
    return NextResponse.json({ error: 'Failed to create payment' }, { status: 500 })
  }
}
