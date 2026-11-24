import type { CategoryFilter } from '../types/article';
import { CATEGORY_FILTERS } from '../utils/editorial';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onSelectCategory: (category: CategoryFilter) => void;
  onGoHome: () => void;
}

const MASTHEAD_CREDITS = [
  { role: 'Chief Fabrication Officer', name: 'Margaret Vance' },
  { role: 'Managing Editor, Plausibility', name: 'Dr. Edmund Sterling' },
  { role: 'Deputy Bureau Chief, Unverified Charts', name: 'Clara Osei' },
  { role: 'Ombudsman of Mild Alarm', name: 'Harold Finch' }
] as const;

export function Footer({ onSelectCategory, onGoHome }: FooterProps) {
  return (
    <footer className="mt-14 bg-[#FAF9F6] text-[#1A1A1A]">
      <div className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="border-t-[3px] border-double border-[#1A1A1A] pt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-0">
            {/* Publication Colophon */}
            <div className="md:col-span-4 md:border-r md:border-[#D6D2C4] md:pr-8">
              <button
                type="button"
                onClick={onGoHome}
                aria-label="StoryUnhinged — Return to Front Page"
                className="group block text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
              >
                <BrandLogo size="footer" />
              </button>
              <p className="mt-2 font-body text-[14px] italic text-[#555555]">
                &ldquo;All the News That&apos;s Barely Plausible&rdquo;
              </p>
              <div className="mt-3 inline-block border border-[#8B1E1E] bg-[#F2EFE9] px-2.5 py-1 font-ui text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E]">
                100% SATIRE
              </div>
            </div>

            {/* Sections Directory */}
            <div className="md:col-span-3 md:border-r md:border-[#D6D2C4] md:px-8">
              <h2 className="font-ui text-[11px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A]">
                Sections
              </h2>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                {CATEGORY_FILTERS.map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => onSelectCategory(category)}
                      className="font-body text-[14px] text-[#555555] underline-offset-4 transition-colors hover:text-[#1A1A1A] hover:underline"
                    >
                      {category === 'All' ? 'Front Page' : category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fake Masthead Credits */}
            <div className="md:col-span-5 md:pl-8">
              <h2 className="font-ui text-[11px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A]">
                Editorial Masthead
              </h2>
              <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {MASTHEAD_CREDITS.map((credit) => (
                  <div key={credit.role}>
                    <dt className="font-ui text-[10px] font-semibold uppercase tracking-[0.12em] text-[#555555]">
                      {credit.role}
                    </dt>
                    <dd className="font-body text-[14px] text-[#1A1A1A]">
                      {credit.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Mandatory Legal Disclaimer & Compliance Notice */}
          <div className="mt-8 border-t border-[#D6D2C4] pt-5">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <p className="max-w-3xl font-body text-[13px] leading-[1.6] text-[#555555]">
                <strong className="font-ui text-[11px] font-bold uppercase tracking-[0.14em] text-[#8B1E1E]">
                  100% SATIRE —{' '}
                </strong>
                StoryUnhinged is a fictional satire publication. All stories,
                quotes, and named individuals are invented for comedic purposes.
              </p>
              <p className="shrink-0 font-ui text-[11px] uppercase tracking-[0.12em] text-[#555555]">
                Vol. CXIV · Printed in Spirit Only
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
