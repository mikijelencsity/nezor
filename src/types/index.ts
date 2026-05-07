export interface Reference {
  id: string
  name: string
  description: string
  url: string
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

export interface Service {
  id: string
  title: string
  description: string
  href: string
  icon: string
  features: string[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readingTime: string
  content?: string
}
