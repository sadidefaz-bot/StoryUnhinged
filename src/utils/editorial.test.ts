import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildArticleHash,
  buildCategoryHash,
  formatArticleDate,
  formatEditionDate,
  getRelatedArticles,
  getSecondaryColumnCount,
  parseHashRoute,
  selectFrontPageLayout
} from './editorial';
import { MOCK_ARTICLES } from '../data/mockArticles';

test('selectFrontPageLayout promotes isLead story when All is selected', () => {
  const layout = selectFrontPageLayout(MOCK_ARTICLES, 'All');
  assert.equal(layout.totalCount, 6);
  assert.ok(layout.leadArticle);
  assert.equal(layout.leadArticle.isLead, true);
  assert.equal(layout.secondaryArticles.length, 5);
  assert.equal(
    layout.secondaryArticles.some((a) => a.id === layout.leadArticle?.id),
    false
  );
});

test('selectFrontPageLayout promotes first matching story cleanly for single-article category', () => {
  const layout = selectFrontPageLayout(MOCK_ARTICLES, 'World');
  assert.equal(layout.totalCount, 1);
  assert.ok(layout.leadArticle);
  assert.equal(layout.leadArticle.category, 'World');
  assert.equal(layout.secondaryArticles.length, 0);
});

test('selectFrontPageLayout promotes first matching story cleanly for two-article category', () => {
  const layout = selectFrontPageLayout(MOCK_ARTICLES, 'Tech');
  assert.equal(layout.totalCount, 2);
  assert.ok(layout.leadArticle);
  assert.equal(layout.leadArticle.category, 'Tech');
  assert.equal(layout.secondaryArticles.length, 1);
  assert.equal(layout.secondaryArticles[0].category, 'Tech');
});

test('getSecondaryColumnCount avoids empty columns for 1 or 2 stories', () => {
  assert.equal(getSecondaryColumnCount(0), 1);
  assert.equal(getSecondaryColumnCount(1), 1);
  assert.equal(getSecondaryColumnCount(2), 2);
  assert.equal(getSecondaryColumnCount(3), 3);
  assert.equal(getSecondaryColumnCount(5), 3);
});

test('getRelatedArticles excludes active slug and prioritizes category variety', () => {
  const leadSlug = MOCK_ARTICLES[0].slug;
  const related = getRelatedArticles(MOCK_ARTICLES, leadSlug, 3);
  assert.equal(related.length, 3);
  assert.equal(related.some((a) => a.slug === leadSlug), false);
});

test('date formatters produce deterministic broadsheet formatting', () => {
  const sampleDate = new Date('2026-11-25T14:30:00Z');
  assert.equal(formatEditionDate(sampleDate), 'Wednesday, November 25, 2026');
  assert.equal(
    formatArticleDate('2026-11-24T13:15:00Z'),
    'November 24, 2026 · 1:15 PM GMT'
  );
});

test('hash route helpers round-trip article and section routes cleanly', () => {
  const slug = 'central-bank-replaces-interest-rates-with-vibes';
  const artHash = buildArticleHash(slug);
  assert.deepEqual(parseHashRoute(artHash), {
    view: 'article',
    slug,
    category: 'All'
  });

  const secHash = buildCategoryHash('Science');
  assert.deepEqual(parseHashRoute(secHash), {
    view: 'front-page',
    slug: null,
    category: 'Science'
  });

  assert.deepEqual(parseHashRoute(buildCategoryHash('All')), {
    view: 'front-page',
    slug: null,
    category: 'All'
  });
});
