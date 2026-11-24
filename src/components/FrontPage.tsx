import { ArrowRight } from 'lucide-react';
import type { Article, CategoryFilter, WireItem } from '../types/article';
import {
  formatArticleDate,
  selectFrontPageLayout
} from '../utils/editorial';
import { BreakingWires } from './BreakingWires';
import { EditorialImage } from './EditorialImage';

interface FrontPageProps {
  articles: Article[];
  wires: WireItem[];
  activeCategory: CategoryFilter;
  onSelectArticle: (slug: string) => void;
  onResetCategory: () => void;
}

interface SecondaryStoryCardProps {
  article: Article;
  onSelectArticle: (slug: string) => void;
  layout?: 'stacked' | 'horizontal';
}

function SecondaryStoryCard({
  article,
  onSelectArticle,
  layout = 'stacked'
}: SecondaryStoryCardProps) {
  if (layout === 'horizontal') {
    return (
      <article className="group grid grid-cols-1 gap-5 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <button
            type="button"
            onClick={() => onSelectArticle(article.slug)}
            aria-label={`Read photo story: ${article.satireHeadline}`}
            className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          >
            <EditorialImage
              src={article.imageUrl}
              alt={article.imageCaption}
              aspectClass="aspect-[16/10]"
            />
          </button>
        </div>

        <div className="flex flex-col md:col-span-7">
          <div className="flex items-center gap-2 font-ui text-[11px] font-semibold uppercase tracking-[0.14em]">
            <span className="text-[#8B1E1E]">{article.category}</span>
            <span aria-hidden="true" className="text-[#D6D2C4]">
              ·
            </span>
            <span className="text-[#555555] tabular-nums">
              {article.readTimeMinutes} min read
            </span>
          </div>

          <h3 className="mt-2 font-display text-2xl font-bold leading-[1.2] text-[#1A1A1A]">
            <button
              type="button"
              onClick={() => onSelectArticle(article.slug)}
              className="text-left transition-colors duration-150 hover:text-[#8B1E1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
            >
              {article.satireHeadline}
            </button>
          </h3>

          <p className="mt-2.5 font-body text-[15px] leading-[1.68] text-[#555555]">
            {article.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#D6D2C4] pt-3">
            <span className="font-ui text-[11px] font-medium uppercase tracking-[0.1em] text-[#555555]">
              By {article.authorName}
            </span>
            <button
              type="button"
              onClick={() => onSelectArticle(article.slug)}
              className="inline-flex items-center gap-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors duration-150 hover:text-[#8B1E1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
            >
              <span>Read Full Dispatch</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col">
      <button
        type="button"
        onClick={() => onSelectArticle(article.slug)}
        aria-label={`Read story: ${article.satireHeadline}`}
        className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
      >
        <EditorialImage
          src={article.imageUrl}
          alt={article.imageCaption}
          aspectClass="aspect-[16/10]"
        />
      </button>

      <div className="mt-3.5 flex items-center gap-2 font-ui text-[11px] font-semibold uppercase tracking-[0.14em]">
        <span className="text-[#8B1E1E]">{article.category}</span>
        <span aria-hidden="true" className="text-[#D6D2C4]">
          ·
        </span>
        <span className="text-[#555555] tabular-nums">
          {article.readTimeMinutes} min read
        </span>
      </div>

      <h3 className="mt-2 font-display text-[21px] font-bold leading-[1.22] text-[#1A1A1A]">
        <button
          type="button"
          onClick={() => onSelectArticle(article.slug)}
          className="text-left transition-colors duration-150 hover:text-[#8B1E1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
        >
          {article.satireHeadline}
        </button>
      </h3>

      <p className="mt-2.5 flex-1 font-body text-[14.5px] leading-[1.68] text-[#555555]">
        {article.excerpt}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#D6D2C4] pt-3">
        <span className="truncate font-ui text-[11px] font-medium uppercase tracking-[0.08em] text-[#555555]">
          By {article.authorName}
        </span>
        <button
          type="button"
          onClick={() => onSelectArticle(article.slug)}
          aria-label={`Read full dispatch: ${article.satireHeadline}`}
          className="inline-flex shrink-0 items-center gap-1 font-ui text-[11px] font-bold uppercase tracking-[0.12em] text-[#1A1A1A] transition-colors duration-150 hover:text-[#8B1E1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
        >
          <span>Read</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export function FrontPage({
  articles,
  wires,
  activeCategory,
  onSelectArticle,
  onResetCategory
}: FrontPageProps) {
  const { leadArticle, secondaryArticles } = selectFrontPageLayout(
    articles,
    activeCategory
  );

  // Organize secondary articles into balanced print rows so there are never orphan columns
  const topRowArticles =
    secondaryArticles.length >= 4
      ? secondaryArticles.slice(0, 3)
      : secondaryArticles;
  const bottomRowArticles =
    secondaryArticles.length >= 4 ? secondaryArticles.slice(3) : [];

  return (
    <main
      id="main-content"
      className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
    >
      {activeCategory !== 'All' ? (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#D6D2C4] pb-3">
          <div className="flex items-baseline gap-3">
            <span className="font-ui text-[11px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E]">
              Section Desk
            </span>
            <h1 className="font-display text-2xl font-bold text-[#1A1A1A]">
              {activeCategory}
            </h1>
          </div>
          <button
            type="button"
            onClick={onResetCategory}
            className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555] underline underline-offset-4 transition-colors duration-150 hover:text-[#1A1A1A]"
          >
            View All Sections
          </button>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0">
        {/* Main Editorial Area — 9 Columns */}
        <div className="lg:col-span-9 lg:border-r lg:border-[#D6D2C4] lg:pr-8">
          {leadArticle ? (
            <section aria-label="Lead Dispatch">
              <article className="group" data-testid="lead-story">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-ui text-[11px] font-bold uppercase tracking-[0.16em]">
                  <span className="text-[#8B1E1E]">
                    {activeCategory === 'All'
                      ? `Lead Dispatch · ${leadArticle.category}`
                      : `Featured · ${leadArticle.category}`}
                  </span>
                  <span aria-hidden="true" className="text-[#D6D2C4]">
                    /
                  </span>
                  <time
                    dateTime={leadArticle.publishedAt}
                    className="font-medium text-[#555555] tabular-nums"
                  >
                    {formatArticleDate(leadArticle.publishedAt)}
                  </time>
                  <span aria-hidden="true" className="text-[#D6D2C4]">
                    ·
                  </span>
                  <span className="font-medium text-[#555555] tabular-nums">
                    {leadArticle.readTimeMinutes} min read
                  </span>
                </div>

                {activeCategory === 'All' ? (
                  <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.015em] text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem]">
                    <button
                      type="button"
                      onClick={() => onSelectArticle(leadArticle.slug)}
                      className="text-left transition-colors duration-150 hover:text-[#8B1E1E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]"
                    >
                      {leadArticle.satireHeadline}
                    </button>
                  </h1>
                ) : (
                  <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.015em] text-[#1A1A1A] sm:text-4xl lg:text-[2.6rem]">
                    <button
                      type="button"
                      onClick={() => onSelectArticle(leadArticle.slug)}
                      className="text-left transition-colors duration-150 hover:text-[#8B1E1E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]"
                    >
                      {leadArticle.satireHeadline}
                    </button>
                  </h2>
                )}

                <p className="mt-3.5 max-w-3xl font-body text-lg italic leading-[1.55] text-[#555555] sm:text-[20px]">
                  {leadArticle.subhead}
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => onSelectArticle(leadArticle.slug)}
                    aria-label={`Open lead dispatch: ${leadArticle.satireHeadline}`}
                    className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
                  >
                    <EditorialImage
                      src={leadArticle.imageUrl}
                      alt={leadArticle.imageCaption}
                      caption={leadArticle.imageCaption}
                      aspectClass="aspect-[16/9]"
                      priority
                    />
                  </button>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-4 md:border-r md:border-[#D6D2C4] md:pr-5">
                    <p className="font-ui text-[12px] font-bold uppercase tracking-[0.12em] text-[#1A1A1A]">
                      By {leadArticle.authorName}
                    </p>
                    <p className="mt-1 font-body text-[13px] italic leading-snug text-[#555555]">
                      {leadArticle.authorTitle}
                    </p>
                  </div>

                  <div className="md:col-span-8 md:pl-2">
                    <p className="font-body text-[16.5px] leading-[1.72] text-[#1A1A1A]">
                      {leadArticle.excerpt}
                    </p>
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => onSelectArticle(leadArticle.slug)}
                        className="inline-flex min-h-[40px] items-center gap-2 border border-[#1A1A1A] bg-[#1A1A1A] px-4 py-2 font-ui text-[11px] font-bold uppercase tracking-[0.16em] text-[#FAF9F6] transition-colors duration-150 hover:border-[#8B1E1E] hover:bg-[#8B1E1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
                      >
                        <span>Read Full Dispatch</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : (
            <section className="border border-[#D6D2C4] bg-[#F2EFE9] p-8 text-center">
              <p className="font-display text-2xl font-bold text-[#1A1A1A]">
                No Dispatches Filed Under {activeCategory}
              </p>
              <p className="mt-2 font-body text-[15px] text-[#555555]">
                Our correspondents are currently awaiting an official comment
                from a nonexistent committee.
              </p>
              <button
                type="button"
                onClick={onResetCategory}
                className="mt-5 inline-flex min-h-[40px] items-center border border-[#1A1A1A] px-4 py-2 font-ui text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6]"
              >
                Return to Front Page
              </button>
            </section>
          )}

          {/* Secondary Story Grid */}
          {secondaryArticles.length > 0 ? (
            <section
              aria-label="Additional Dispatches"
              className="mt-9 border-t border-[#1A1A1A] pt-7"
              data-testid="secondary-stories"
            >
              <div className="mb-6 flex items-baseline justify-between border-b border-[#D6D2C4] pb-2">
                <h2 className="font-ui text-[12px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A]">
                  {activeCategory === 'All'
                    ? 'More From Today\u2019s Edition'
                    : `Additional ${activeCategory} Reporting`}
                </h2>
                <span className="font-ui text-[11px] uppercase tracking-[0.12em] text-[#555555] tabular-nums">
                  {secondaryArticles.length}{' '}
                  {secondaryArticles.length === 1 ? 'Dispatch' : 'Dispatches'}
                </span>
              </div>

              {topRowArticles.length === 1 ? (
                <SecondaryStoryCard
                  article={topRowArticles[0]}
                  onSelectArticle={onSelectArticle}
                  layout="horizontal"
                />
              ) : (
                <div
                  className={`grid grid-cols-1 divide-y divide-[#D6D2C4] md:divide-x md:divide-y-0 ${
                    topRowArticles.length === 2
                      ? 'md:grid-cols-2'
                      : 'md:grid-cols-3'
                  }`}
                >
                  {topRowArticles.map((article, index) => (
                    <div
                      key={article.id}
                      className={`py-6 first:pt-0 last:pb-0 md:py-0 ${
                        index === 0
                          ? 'md:pr-6'
                          : index === topRowArticles.length - 1
                            ? 'md:pl-6'
                            : 'md:px-6'
                      }`}
                    >
                      <SecondaryStoryCard
                        article={article}
                        onSelectArticle={onSelectArticle}
                      />
                    </div>
                  ))}
                </div>
              )}

              {bottomRowArticles.length > 0 ? (
                <div className="mt-8 border-t border-[#D6D2C4] pt-8">
                  <div
                    className={`grid grid-cols-1 divide-y divide-[#D6D2C4] md:divide-x md:divide-y-0 ${
                      bottomRowArticles.length === 1
                        ? 'md:grid-cols-1'
                        : 'md:grid-cols-2'
                    }`}
                  >
                    {bottomRowArticles.map((article, index) => (
                      <div
                        key={article.id}
                        className={`py-6 first:pt-0 last:pb-0 md:py-0 ${
                          bottomRowArticles.length === 1
                            ? ''
                            : index === 0
                              ? 'md:pr-7'
                              : 'md:pl-7'
                        }`}
                      >
                        <SecondaryStoryCard
                          article={article}
                          onSelectArticle={onSelectArticle}
                          layout={
                            bottomRowArticles.length === 1
                              ? 'horizontal'
                              : 'stacked'
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          ) : leadArticle && activeCategory !== 'All' ? (
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#D6D2C4] bg-[#F2EFE9]/60 px-5 py-4">
              <p className="font-[var(--font-body)] text-[14px] italic text-[#555555]">
                That concludes today&apos;s {activeCategory} filing. Further
                dispatches appear on the Front Page.
              </p>
              <button
                type="button"
                onClick={onResetCategory}
                className="font-[var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8B1E1E] underline underline-offset-4 transition-colors hover:text-[#1A1A1A]"
              >
                Return to All Sections
              </button>
            </div>
          ) : null}
        </div>

        {/* Right Sidebar — Breaking Wires (3 Columns) */}
        <div className="border-t border-[#1A1A1A] pt-8 lg:col-span-3 lg:border-t-0 lg:pl-8 lg:pt-0">
          <BreakingWires wires={wires} />
        </div>
      </div>
    </main>
  );
}
