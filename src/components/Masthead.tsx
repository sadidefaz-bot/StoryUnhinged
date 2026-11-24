import type { CategoryFilter, MarketMetric } from '../types/article';
import { CATEGORY_FILTERS, formatEditionDate } from '../utils/editorial';
import { BrandLogo } from './BrandLogo';

interface MastheadProps {
  activeCategory: CategoryFilter;
  isArticleView: boolean;
  marketMetrics: MarketMetric[];
  editionDate: Date;
  onSelectCategory: (category: CategoryFilter) => void;
  onGoHome: () => void;
}

export function Masthead({
  activeCategory,
  isArticleView,
  marketMetrics,
  editionDate,
  onSelectCategory,
  onGoHome
}: MastheadProps) {
  const formattedDate = formatEditionDate(editionDate);

  return (
    <header className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Top Utility Strip */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-[#D6D2C4] py-2 font-ui text-[11px] font-medium uppercase tracking-[0.1em] text-[#555555]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <time
              dateTime={editionDate.toISOString().slice(0, 10)}
              className="font-semibold text-[#1A1A1A]"
            >
              {formattedDate}
            </time>
            <span aria-hidden="true" className="text-[#D6D2C4]">
              |
            </span>
            <span>Vol. CXIV, No. 42</span>
            <span aria-hidden="true" className="hidden text-[#D6D2C4] md:inline">
              |
            </span>
            <span className="hidden md:inline">
              $4.50 or 3 Mild Conspiracy Theories
            </span>
          </div>

          <div
            className="border border-[#8B1E1E] bg-[#F2EFE9] px-2.5 py-0.5 font-ui text-[10px] font-bold uppercase tracking-[0.14em] text-[#8B1E1E]"
            aria-label="Compliance notice: 100% Satire"
          >
            100% SATIRE
          </div>
        </div>

        {/* Center Broadsheet Nameplate with Traditional Print Ears */}
        <div className="py-3 sm:py-4">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12">
            {/* Left Broadsheet Ear */}
            <div className="hidden md:col-span-3 md:flex md:justify-start">
              <div className="max-w-[230px] border border-[#D6D2C4] bg-[#F2EFE9]/65 px-3.5 py-2.5 text-left">
                <p className="font-ui text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E]">
                  The Motto
                </p>
                <p className="mt-1 font-body text-[13px] italic leading-snug text-[#1A1A1A]">
                  &ldquo;All the News That&apos;s Barely Plausible&rdquo;
                </p>
              </div>
            </div>

            {/* Center StoryUnhinged Logo */}
            <div className="flex flex-col items-center text-center md:col-span-6">
              <button
                type="button"
                onClick={onGoHome}
                className="group inline-flex flex-col items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]"
                aria-label="StoryUnhinged — Return to Front Page"
              >
                <BrandLogo size="masthead" />
              </button>
              <p className="mt-1 font-body text-sm italic tracking-[0.02em] text-[#555555] md:hidden">
                &ldquo;All the News That&apos;s Barely Plausible&rdquo;
              </p>
              <p className="mt-0.5 font-ui text-[10px] uppercase tracking-[0.12em] text-[#555555] md:hidden">
                $4.50 or 3 Mild Conspiracy Theories
              </p>
            </div>

            {/* Right Broadsheet Ear */}
            <div className="hidden md:col-span-3 md:flex md:justify-end">
              <div className="max-w-[230px] border border-[#D6D2C4] bg-[#F2EFE9]/65 px-3.5 py-2.5 text-right">
                <p className="font-ui text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A]">
                  Late Final Edition
                </p>
                <p className="mt-1 font-body text-[12.5px] italic leading-snug text-[#555555]">
                  Mostly Speculative. High of 68&deg; with Scattered Irony.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Classic Double Broadsheet Rule */}
        <div className="border-t-[3px] border-double border-[#1A1A1A]" />

        {/* Horizontal Category Navigation Bar */}
        <nav
          aria-label="Newspaper Sections"
          className="border-b border-[#D6D2C4]"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-1 sm:flex-nowrap sm:gap-x-3">
            {CATEGORY_FILTERS.map((category) => {
              const isActive = !isArticleView && activeCategory === category;
              return (
                <li key={category} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative inline-flex min-h-[42px] items-center px-2 py-2 font-ui text-[11px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1A1A1A] sm:min-h-[44px] sm:px-4 sm:text-[12px] sm:tracking-[0.14em] ${
                      isActive
                        ? 'text-[#1A1A1A]'
                        : 'text-[#555555] hover:text-[#1A1A1A]'
                    }`}
                  >
                    <span>{category}</span>
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-1.5 bottom-0 h-[2px] bg-[#8B1E1E] sm:inset-x-3"
                      />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Subtle Market Panic Ticker Strip */}
        {marketMetrics.length > 0 ? (
          <div
            aria-label="Market Panic Index"
            className="border-b border-[#1A1A1A] bg-[#F2EFE9]/75 px-3 py-2"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 font-ui text-[10.5px] tracking-[0.06em] tabular-nums lg:flex-nowrap">
              <span className="shrink-0 font-bold uppercase tracking-[0.14em] text-[#8B1E1E]">
                Panic Index
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 lg:flex-nowrap lg:justify-end lg:gap-x-5">
                {marketMetrics.map((metric, idx) => (
                  <div
                    key={metric.id}
                    className="flex shrink-0 items-center gap-1.5 whitespace-nowrap"
                  >
                    {idx > 0 ? (
                      <span
                        aria-hidden="true"
                        className="hidden text-[#D6D2C4] lg:inline"
                      >
                        /
                      </span>
                    ) : null}
                    <span className="font-medium text-[#1A1A1A]">
                      {metric.label}
                    </span>
                    <span
                      className={`font-semibold ${
                        metric.direction === 'down'
                          ? 'text-[#8B1E1E]'
                          : 'text-[#1A1A1A]'
                      }`}
                    >
                      <span aria-hidden="true">
                        {metric.direction === 'down' ? '▼' : '▲'}
                      </span>{' '}
                      <span className="sr-only">
                        {metric.direction === 'down' ? 'Down' : 'Up'}
                      </span>
                      {metric.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
