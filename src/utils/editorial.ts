import type { Article, Category, CategoryFilter } from '../types/article';

export const CATEGORY_FILTERS: readonly CategoryFilter[] = [
  'All',
  'World',
  'Tech',
  'Economy',
  'Science',
  'Opinion'
] as const;

export const CATEGORIES: readonly Category[] = [
  'World',
  'Tech',
  'Economy',
  'Science',
  'Opinion'
] as const;

export interface FrontPageLayout {
  leadArticle: Article | null;
  secondaryArticles: Article[];
  totalCount: number;
}

/**
 * Selects the featured lead story and secondary grid stories for the Front Page.
 * - When 'All' is active, honors the article marked `isLead: true` (or falls back to index 0).
 * - When a specific category is active, promotes the first matching article into the featured
 *   slot cleanly so 1–2 article sections never leave awkward empty grid gaps.
 */
export function selectFrontPageLayout(
  articles: readonly Article[],
  activeCategory: CategoryFilter
): FrontPageLayout {
  const filtered =
    activeCategory === 'All'
      ? [...articles]
      : articles.filter((article) => article.category === activeCategory);

  if (filtered.length === 0) {
    return { leadArticle: null, secondaryArticles: [], totalCount: 0 };
  }

  const leadIndex =
    activeCategory === 'All'
      ? Math.max(
          0,
          filtered.findIndex((article) => article.isLead === true)
        )
      : 0;

  const leadArticle = filtered[leadIndex];
  const secondaryArticles = filtered.filter((_, index) => index !== leadIndex);

  return {
    leadArticle,
    secondaryArticles,
    totalCount: filtered.length
  };
}

/**
 * Computes deterministic "More From This Edition" articles excluding the active article.
 * Prioritizes stories from different categories first for broadsheet variety.
 */
export function getRelatedArticles(
  articles: readonly Article[],
  currentSlug: string,
  limit = 3
): Article[] {
  const current = articles.find((a) => a.slug === currentSlug);
  const candidates = articles.filter((a) => a.slug !== currentSlug);

  if (!current) {
    return candidates.slice(0, limit);
  }

  const differentCategory = candidates.filter(
    (a) => a.category !== current.category
  );
  const sameCategory = candidates.filter(
    (a) => a.category === current.category
  );

  return [...differentCategory, ...sameCategory].slice(0, limit);
}

/**
 * Returns the responsive grid column count (1, 2, or 3) for secondary stories
 * so sections with only 1–2 remaining articles fill width cleanly without dead gaps.
 */
export function getSecondaryColumnCount(secondaryCount: number): 1 | 2 | 3 {
  if (secondaryCount <= 1) {
    return 1;
  }
  if (secondaryCount === 2) {
    return 2;
  }
  return 3;
}

/**
 * Formats an edition date like "Tuesday, November 24, 2026".
 */
export function formatEditionDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(date);
}

/**
 * Formats an article ISO timestamp in crisp newspaper style, e.g. "November 24, 2026 · 1:15 PM UTC".
 */
export function formatArticleDate(isoString: string): string {
  const parsed = new Date(isoString);
  if (Number.isNaN(parsed.getTime())) {
    return isoString;
  }
  const datePart = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(parsed);

  const timePart = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC'
  }).format(parsed);

  return `${datePart} · ${timePart} GMT`;
}

export interface ParsedHashRoute {
  view: 'front-page' | 'article';
  slug: string | null;
  category: CategoryFilter;
}

export function parseHashRoute(hash: string): ParsedHashRoute {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (!clean) {
    return { view: 'front-page', slug: null, category: 'All' };
  }

  if (clean.startsWith('article/')) {
    const slug = decodeURIComponent(clean.slice('article/'.length)).trim();
    if (slug) {
      return { view: 'article', slug, category: 'All' };
    }
  }

  if (clean.startsWith('section/')) {
    const rawCat = decodeURIComponent(clean.slice('section/'.length)).trim();
    const matched = CATEGORY_FILTERS.find(
      (cat) => cat.toLowerCase() === rawCat.toLowerCase()
    );
    if (matched) {
      return { view: 'front-page', slug: null, category: matched };
    }
  }

  return { view: 'front-page', slug: null, category: 'All' };
}

export function buildArticleHash(slug: string): string {
  return `#/article/${encodeURIComponent(slug)}`;
}

export function buildCategoryHash(category: CategoryFilter): string {
  if (category === 'All') {
    return '#/';
  }
  return `#/section/${encodeURIComponent(category.toLowerCase())}`;
}
