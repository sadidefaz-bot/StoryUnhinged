import { useCallback, useEffect, useMemo, useState } from 'react';
import { ArticleReader } from './components/ArticleReader';
import { Footer } from './components/Footer';
import { FrontPage } from './components/FrontPage';
import { Masthead } from './components/Masthead';
import {
  getArticleBySlug,
  getArticles,
  getBreakingWires,
  getMarketMetrics
} from './services/articleService';
import type {
  Article,
  CategoryFilter,
  MarketMetric,
  WireItem
} from './types/article';
import {
  buildArticleHash,
  buildCategoryHash,
  parseHashRoute
} from './utils/editorial';

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [wires, setWires] = useState<WireItem[]>([]);
  const [marketMetrics, setMarketMetrics] = useState<MarketMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const initialRoute = useMemo(() => parseHashRoute(window.location.hash), []);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(
    initialRoute.category
  );
  const [activeSlug, setActiveSlug] = useState<string | null>(
    initialRoute.slug
  );
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [articleNotFound, setArticleNotFound] = useState(false);

  const editionDate = useMemo(() => new Date(), []);

  useEffect(() => {
    let cancelled = false;

    async function loadEdition() {
      try {
        setLoading(true);
        const [loadedArticles, loadedWires, loadedMetrics] = await Promise.all([
          getArticles(),
          getBreakingWires(),
          getMarketMetrics()
        ]);
        if (cancelled) return;
        setArticles(loadedArticles);
        setWires(loadedWires);
        setMarketMetrics(loadedMetrics);
        setLoadError(null);
      } catch {
        if (!cancelled) {
          setLoadError(
            'Unable to retrieve today\u2019s edition from the newsroom wire.'
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadEdition();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function resolveActiveArticle() {
      if (!activeSlug) {
        setActiveArticle(null);
        setArticleNotFound(false);
        return;
      }

      const found = await getArticleBySlug(activeSlug);
      if (cancelled) return;
      if (found) {
        setActiveArticle(found);
        setArticleNotFound(false);
      } else {
        setActiveArticle(null);
        setArticleNotFound(true);
      }
    }

    resolveActiveArticle();
    return () => {
      cancelled = true;
    };
  }, [activeSlug]);

  useEffect(() => {
    function handleHashChange() {
      const next = parseHashRoute(window.location.hash);
      setActiveSlug(next.slug);
      if (next.view === 'front-page') {
        setActiveCategory(next.category);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectCategory = useCallback(
    (category: CategoryFilter) => {
      setActiveCategory(category);
      setActiveSlug(null);
      const nextHash = buildCategoryHash(category);
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', nextHash);
      }
      scrollToTop();
    },
    [scrollToTop]
  );

  const handleGoHome = useCallback(() => {
    handleSelectCategory('All');
  }, [handleSelectCategory]);

  const handleSelectArticle = useCallback(
    (slug: string) => {
      setActiveSlug(slug);
      const nextHash = buildArticleHash(slug);
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', nextHash);
      }
      scrollToTop();
    },
    [scrollToTop]
  );

  const handleBackToFrontPage = useCallback(() => {
    setActiveSlug(null);
    const nextHash = buildCategoryHash(activeCategory);
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
    scrollToTop();
  }, [activeCategory, scrollToTop]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[#1A1A1A] focus:bg-[#FAF9F6] focus:px-4 focus:py-2 focus:font-[var(--font-ui)] focus:text-xs focus:font-bold focus:uppercase"
      >
        Skip to main content
      </a>

      <Masthead
        activeCategory={activeCategory}
        isArticleView={Boolean(activeSlug)}
        marketMetrics={marketMetrics}
        editionDate={editionDate}
        onSelectCategory={handleSelectCategory}
        onGoHome={handleGoHome}
      />

      {loading ? (
        <main
          id="main-content"
          className="mx-auto max-w-[1280px] px-4 py-16 text-center sm:px-6 lg:px-8"
        >
          <p className="font-[var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#555555]">
            Typesetting Today&apos;s Edition
          </p>
        </main>
      ) : loadError ? (
        <main
          id="main-content"
          className="mx-auto max-w-[720px] px-4 py-16 text-center sm:px-6"
        >
          <div className="border border-[#D6D2C4] bg-[#F2EFE9] p-8">
            <p className="font-[var(--font-display)] text-2xl font-bold text-[#1A1A1A]">
              Press Room Interruption
            </p>
            <p className="mt-2 font-[var(--font-body)] text-[15px] text-[#555555]">
              {loadError}
            </p>
          </div>
        </main>
      ) : activeSlug && articleNotFound ? (
        <main
          id="main-content"
          className="mx-auto max-w-[720px] px-4 py-16 text-center sm:px-6"
        >
          <div className="border border-[#D6D2C4] bg-[#F2EFE9] p-8">
            <p className="font-[var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E]">
              Archival Notice · 404
            </p>
            <h1 className="mt-2 font-[var(--font-display)] text-3xl font-bold text-[#1A1A1A]">
              Dispatch Not Found in Today&apos;s Edition
            </h1>
            <p className="mt-2 font-[var(--font-body)] text-[15px] text-[#555555]">
              The requested article was either retracted by an imaginary
              committee or never went to press.
            </p>
            <button
              type="button"
              onClick={handleGoHome}
              className="mt-6 inline-flex min-h-[40px] items-center border border-[#1A1A1A] bg-[#1A1A1A] px-5 py-2 font-[var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.16em] text-[#FAF9F6] hover:border-[#8B1E1E] hover:bg-[#8B1E1E]"
            >
              Return to Front Page
            </button>
          </div>
        </main>
      ) : activeArticle ? (
        <ArticleReader
          article={activeArticle}
          allArticles={articles}
          onBackToFrontPage={handleBackToFrontPage}
          onSelectArticle={handleSelectArticle}
          onSelectCategory={handleSelectCategory}
        />
      ) : (
        <FrontPage
          articles={articles}
          wires={wires}
          activeCategory={activeCategory}
          onSelectArticle={handleSelectArticle}
          onResetCategory={handleGoHome}
        />
      )}

      <Footer
        onSelectCategory={handleSelectCategory}
        onGoHome={handleGoHome}
      />
    </div>
  );
}
