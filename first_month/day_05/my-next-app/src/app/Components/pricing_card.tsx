import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  isPopular?: boolean
  ctaText: string
}

export function PricingCard({ title, price, features, isPopular = false, ctaText }: PricingCardProps) {
  return (
    <div
      className={`flex flex-col p-6 shadow-lg rounded-lg dark:bg-gray-800 justify-between border ${
        isPopular
          ? "bg-primary/5 border-primary/20 dark:border-gray-700 relative"
          : "bg-white border-gray-200 dark:border-gray-700"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
          Popular
        </div>
      )}
      <div>
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
          <span className="text-4xl font-bold text-gray-900 dark:text-gray-50">{price}</span>/ month
        </div>
        <ul className="mt-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Button className="w-full">{ctaText}</Button>
      </div>
    </div>
  )
}
