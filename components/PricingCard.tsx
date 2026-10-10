import { Check } from 'lucide-react'
import { Button } from './Button'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false
}: PricingCardProps) {
  return (
    <div className={`price-card ${popular ? 'popular' : ''}`}>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="text-4xl font-bold mb-2">{price}</div>
      <p className="text-dark-300 text-sm mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-dark-200">
            <Check size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={popular ? 'primary' : 'secondary'} className="w-full">
        Escolher
      </Button>
    </div>
  )
}
