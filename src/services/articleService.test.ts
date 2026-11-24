import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getArticleBySlug,
  getArticles,
  getBreakingWires,
  getMarketMetrics
} from './articleService';
import { CATEGORIES } from '../utils/editorial';

test('articleService returns 6 mock articles covering all 5 categories', async () => {
  const articles = await getArticles();
  assert.equal(articles.length, 6);

  const presentCategories = new Set(articles.map((article) => article.category));
  for (const category of CATEGORIES) {
    assert.equal(
      presentCategories.has(category),
      true,
      `Missing category ${category}`
    );
  }
});

test('articleService resolves articles by slug and returns null for unknown slug', async () => {
  const articles = await getArticles();
  const first = await getArticleBySlug(articles[0].slug);
  assert.ok(first);
  assert.equal(first.id, articles[0].id);

  const missing = await getArticleBySlug('non-existent-dispatch');
  assert.equal(missing, null);
});

test('articleService returns 7 breaking wires and market panic metrics', async () => {
  const wires = await getBreakingWires();
  assert.equal(wires.length, 7);
  for (const wire of wires) {
    assert.ok(wire.timestamp.length > 0);
    assert.ok(wire.headline.length > 10);
  }

  const metrics = await getMarketMetrics();
  assert.ok(metrics.length >= 4 && metrics.length <= 5);
});

test('mock editorial content obeys deadpan voice rules without clichés or exclamation marks', async () => {
  const articles = await getArticles();
  const wires = await getBreakingWires();
  const bannedPhrases = ['delve', 'chaos ensues', 'buckle up', 'wild ride'];

  const allText = [
    ...articles.flatMap((a) => [
      a.satireHeadline,
      a.subhead,
      a.excerpt,
      ...a.bodyParagraphs
    ]),
    ...wires.map((w) => w.headline)
  ];

  for (const text of allText) {
    assert.equal(
      text.includes('!'),
      false,
      `Found exclamation mark in: ${text}`
    );
    const lower = text.toLowerCase();
    for (const phrase of bannedPhrases) {
      assert.equal(
        lower.includes(phrase),
        false,
        `Found banned phrase "${phrase}" in: ${text}`
      );
    }
  }
});
