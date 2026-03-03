import { Service, PortfolioItem, Testimonial, CaseStudy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'meetings-conferences',
    title: 'Meetings & Conferences',
    description: 'End-to-end association conference management with precision and scale.',
    icon: 'Users',
    image: 'https://picsum.photos/seed/mice-conf/800/600',
    longDescription: 'We deliver seamless, turnkey management for association meetings and conferences, eliminating complexity, risk, and operational stress.'
  },
  {
    id: 'corporate-meets',
    title: 'Corporate Conferences',
    description: 'Strategic meets that move businesses forward through alignment and inspiration.',
    icon: 'Building2',
    image: 'https://picsum.photos/seed/mice-corp/800/600',
    longDescription: 'From leadership summits to awards nights, we create platforms for alignment, inspiration, and measurable business outcomes.'
  },
  {
    id: 'outbound-meetings',
    title: 'Outbound Meetings',
    description: 'Seamless planning and execution of corporate events worldwide.',
    icon: 'Globe',
    image: 'https://picsum.photos/seed/mice-outbound/800/600',
    longDescription: 'Leveraging our representative offices globally, we deliver end-to-end international event solutions with confidence.'
  },
  {
    id: 'trade-exhibitions',
    title: 'Trade Exhibitions',
    description: 'High-impact business platforms that deliver measurable results.',
    icon: 'LayoutGrid',
    image: 'https://picsum.photos/seed/mice-exhib/800/600',
    longDescription: 'We transform exhibition concepts into high-impact business platforms—from industry showcases to international trade fairs.'
  },
  {
    id: 'travel-services',
    title: 'Travel Services',
    description: 'Comprehensive logistics including accommodation, transport, and air-tickets.',
    icon: 'Plane',
    image: 'https://picsum.photos/seed/mice-travel/800/600',
    longDescription: 'Our expertise in aviation logistics and hospitality ensures efficient movement planning for delegates and speakers.'
  }
];

export const AFFILIATIONS = [
  { name: 'ICCA', logo: 'https://via.placeholder.com/100x50?text=ICCA' },
  { name: 'SITE', logo: 'https://via.placeholder.com/100x50?text=SITE' },
  { name: 'IATO', logo: 'https://via.placeholder.com/100x50?text=IATO' },
  { name: 'PATA', logo: 'https://via.placeholder.com/100x50?text=PATA' },
  { name: 'ICPB', logo: 'https://via.placeholder.com/100x50?text=ICPB' },
];

export const WHY_US_POINTS = [
  {
    title: 'Strength & Leadership',
    description: 'Leadership team with over 30 years of PCO and MICE expertise.'
  },
  {
    title: 'One-Stop Solutions',
    description: 'All MICE services under one umbrella for seamless coordination.'
  },
  {
    title: 'Technology-Driven',
    description: 'Strong execution powered by online registration and abstract management.'
  },
  {
    title: 'Global Reach',
    description: 'Extensive expertise in international logistics and destination management.'
  }
];
