import {
  MARKET_PANIC_METRICS,
  MOCK_ARTICLES,
  MOCK_WIRES
} from '../data/mockArticles';
import type { Article, MarketMetric, WireItem } from '../types/article';

/**
 * Clean async service layer for article and wire data.
 * Phase 1 resolves from local mock fixtures; Phase 2 can swap these implementations
 * for Firestore / backend queries without changing any UI component.
 */
export async function getArticles(): Promise<Article[]> {
  return [...MOCK_ARTICLES];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const normalized = slug.trim();
  if (!normalized) {
    return null;
  }
  return MOCK_ARTICLES.find((article) => article.slug === normalized) ?? null;
}

export async function getBreakingWires(): Promise<WireItem[]> {
  return [...MOCK_WIRES];
}

export async function getMarketMetrics(): Promise<MarketMetric[]> {
  return [...MARKET_PANIC_METRICS];
}
