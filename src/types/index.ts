export interface Reference {
  id: string
  name: string
  description: string
  url: string
  imageUrl?: string
  gradient?: string
  category: 'weboldal' | 'webshop'
}

export interface Package {
  id: string
  name: string
  description: string
  features: string[]
  oneTimePrice?: string
  monthlyPrice?: string
  monthlyUpdates?: number
  highlighted?: boolean
  type: 'weboldal' | 'webshop'
}

export interface FAQItem {
  question: string
  answer: string
}

export type ServiceIcon = 'Monitor' | 'ShoppingCart' | 'TrendingUp'

export interface Service {
  id: string
  title: string
  description: string
  href: string
  icon: ServiceIcon
  features: string[]
}

export type BlogCategory = 'Weboldal' | 'Webshop' | 'Facebook hirdetések' | 'Tippek'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: BlogCategory
  readingTime: string
  content?: string
}
