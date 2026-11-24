export type Category = 'World' | 'Tech' | 'Economy' | 'Science' | 'Opinion';

export type CategoryFilter = 'All' | Category;

export interface Article {
  id: string;
  slug: string;
  category: Category;
  isLead?: boolean;
  satireHeadline: string;
  subhead: string;
  originalSoberHeadline: string;
  authorName: string;
  authorTitle: string;
  publishedAt: string; // ISO date string
  readTimeMinutes: number;
  imageUrl: string;
  imageCaption: string;
  excerpt: string;
  bodyParagraphs: string[];
}

export interface WireItem {
  id: string;
  timestamp: string;
  headline: string;
}

export interface MarketMetric {
  id: string;
  label: string;
  direction: 'up' | 'down';
  change: string;
}
