export interface ApiKey {
  id: string
  name: string
  key: string
  createdAt: string
  lastUsed?: string
  usage: number
  limit: number
  status: 'active' | 'suspended' | 'expired'
}

export interface User {
  id: string
  email: string
  name: string
  stripeCustomerId?: string
  subscription?: {
    id: string
    status: string
    plan: string
    currentPeriodEnd: string
  }
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  requests: number
  features: string[]
  popular?: boolean
}