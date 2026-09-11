export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tag: string;
  iconName: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  keyBenefits: string[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  clientCategory: string;
  title: string;
  period: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    change: string;
    description: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice?: string;
  projectPrice?: string;
  tagline: string;
  idealFor: string;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  highlight: string;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Services' | '1-on-1 Approach' | 'Pricing & Process';
}
