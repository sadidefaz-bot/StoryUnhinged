import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Article } from '../types/article';
import { formatArticleDate, getRelatedArticles } from '../utils/editorial';
import { EditorialImage } from './EditorialImage';

interface ArticleReaderProps {
  article: Article;
  allArticles: Article[];
  onBackToFrontPage: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectCategory: (category: Article['category']) => void;
}

export function ArticleReader({
  article,
  allArticles,
  onBackToFrontPage,
  onSelectArticle,
  onSelectCategory
}: ArticleReaderProps) {
  const relatedArticles = getRelatedArticles(allArticles, article.slug, 3);

  return (
    <main
      id="main-content"
      className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
    >
      {/* Single-Column Centered Editorial Reader */}
      <article className="mx-auto max-w-[720px]" data-testid="article-reader">
        {/* Top Back Navigation */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#D6D2C4] pb-4">
          <button
            type="button"
            onClick={onBackToFrontPage}
            className="inline-flex min-h-[40px] items-center gap-2 font-ui text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors duration-150 hover:text-[#8B1E1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Front Page</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectCategory(article.category)}
            className="font-ui text-[11px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] underline-offset-4 hover:underline"
          >
            {article.category} Desk
          </button>
        </div>

        {/* Origin Box ("The Sober Reality") */}
        <section
          aria-label="The Sober Reality"
          className="mb-7 border border-[#D6D2C4] bg-[#F2EFE9] px-5 py-4"
          data-testid="sober-reality-box"
        >
          <p className="font-ui text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B1E1E]">
            The Sober Reality
          </p>
          <p className="mt-1 font-body text-[13px] italic text-[#555555]">
            Inspired by the painfully boring real-world headline:
          </p>
          <p className="mt-1.5 font-display text-[17px] font-semibold leading-snug text-[#1A1A1A]">
            &ldquo;{article.originalSoberHeadline}&rdquo;
          </p>
        </section>

        {/* Full Article Header Metadata */}
        <header>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-ui text-[11px] font-bold uppercase tracking-[0.16em]">
            <span className="text-[#8B1E1E]">{article.category}</span>
            <span aria-hidden="true" className="text-[#D6D2C4]">
              ·
            </span>
            <span className="font-medium text-[#555555] tabular-nums">
              {article.readTimeMinutes} min read
            </span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.015em] text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem]">
            {article.satireHeadline}
          </h1>

          <p className="mt-4 font-body text-lg italic leading-[1.58] text-[#555555] sm:text-[21px]">
            {article.subhead}
          </p>

          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-y border-[#D6D2C4] py-3.5">
            <div>
              <span className="font-ui text-[12px] font-bold uppercase tracking-[0.12em] text-[#1A1A1A]">
                By {article.authorName}
              </span>
              <span className="ml-2 font-body text-[13px] italic text-[#555555]">
                — {article.authorTitle}
              </span>
            </div>
            <time
              dateTime={article.publishedAt}
              className="font-ui text-[11px] font-medium uppercase tracking-[0.1em] text-[#555555] tabular-nums"
            >
              {formatArticleDate(article.publishedAt)}
            </time>
          </div>
        </header>

        {/* Full-Width Editorial Photograph */}
        <div className="group my-7">
          <EditorialImage
            src={article.imageUrl}
            alt={article.imageCaption}
            caption={article.imageCaption}
            aspectClass="aspect-[16/9]"
            priority
          />
        </div>

        {/* Article Body Prose with Editorial Drop Cap */}
        <div className="space-y-6 font-body text-[18px] leading-[1.78] text-[#1A1A1A]">
          {article.bodyParagraphs.map((paragraph, index) => (
            <p
              key={`${article.id}-p-${index}`}
              className={index === 0 ? 'editorial-dropcap' : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* End-of-Dispatch Mark */}
        <div className="mt-10 flex items-center justify-between border-t border-[#D6D2C4] pt-5">
          <p className="font-ui text-[11px] font-medium uppercase tracking-[0.14em] text-[#555555]">
            Filed under {article.category} · 100% Satire
          </p>
          <button
            type="button"
            onClick={onBackToFrontPage}
            className="inline-flex items-center gap-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A] hover:text-[#8B1E1E]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Front Page</span>
          </button>
        </div>
      </article>

      {/* More From This Edition Strip */}
      {relatedArticles.length > 0 ? (
        <section
          aria-labelledby="more-from-edition-heading"
          className="mx-auto mt-14 max-w-[1040px] border-t-[3px] border-double border-[#1A1A1A] pt-8"
          data-testid="more-from-edition"
        >
          <div className="mb-6 flex items-baseline justify-between border-b border-[#D6D2C4] pb-2.5">
            <h2
              id="more-from-edition-heading"
              className="font-ui text-[12px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A]"
            >
              More From This Edition
            </h2>
            <button
              type="button"
              onClick={onBackToFrontPage}
              className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555] hover:text-[#1A1A1A]"
            >
              Full Front Page
            </button>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#D6D2C4] md:grid-cols-3 md:divide-x md:divide-y-0">
            {relatedArticles.map((related, index) => (
              <article
                key={related.id}
                className={`group flex flex-col py-6 first:pt-0 last:pb-0 md:py-0 ${
                  index === 0
                    ? 'md:pr-6'
                    : index === relatedArticles.length - 1
                      ? 'md:pl-6'
                      : 'md:px-6'
                }`}
              >
                <div className="flex items-center gap-2 font-ui text-[11px] font-semibold uppercase tracking-[0.14em]">
                  <span className="text-[#8B1E1E]">{related.category}</span>
                  <span aria-hidden="true" className="text-[#D6D2C4]">
                    ·
                  </span>
                  <span className="text-[#555555] tabular-nums">
                    {related.readTimeMinutes} min read
                  </span>
                </div>

                <h3 className="mt-2 font-display text-[19px] font-bold leading-[1.25] text-[#1A1A1A]">
                  <button
                    type="button"
                    onClick={() => onSelectArticle(related.slug)}
                    className="text-left transition-colors duration-150 hover:text-[#8B1E1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
                  >
                    {related.satireHeadline}
                  </button>
                </h3>

                <p className="mt-2 flex-1 font-body text-[14px] italic leading-[1.55] text-[#555555]">
                  {related.subhead}
                </p>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => onSelectArticle(related.slug)}
                    className="inline-flex items-center gap-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A] hover:text-[#8B1E1E]"
                  >
                    <span>Read Dispatch</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
