import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  longDescription: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
}
