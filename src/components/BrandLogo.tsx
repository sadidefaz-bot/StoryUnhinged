import { useState } from 'react';

const LOGO_SRC =
  '/assets/aistudio/d16b8ef9-5812-403b-b992-35db41e78360__1__246381bd.webp';

interface BrandLogoProps {
  size?: 'masthead' | 'footer';
}

export function BrandLogo({ size = 'masthead' }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`block font-display font-extrabold tracking-[-0.02em] text-[#1A1A1A] ${
          size === 'masthead'
            ? 'text-[2.15rem] leading-[1.05] sm:text-5xl lg:text-[3.75rem]'
            : 'text-2xl leading-none'
        }`}
      >
        STORYUNHINGED
      </span>
    );
  }

  const frameClass =
    size === 'masthead'
      ? 'h-[126px] w-[230px] sm:h-[154px] sm:w-[280px] lg:h-[170px] lg:w-[310px]'
      : 'h-[86px] w-[154px]';

  return (
    <span className={`relative block overflow-hidden ${frameClass}`}>
      <img
        src={LOGO_SRC}
        alt="StoryUnhinged"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="h-full w-full scale-[1.12] object-cover object-center mix-blend-multiply [filter:brightness(1.07)_contrast(1.16)_saturate(0.92)] [mask-image:radial-gradient(ellipse_74%_86%_at_50%_50%,black_68%,transparent_100%)] transition-opacity duration-150 group-hover:opacity-90"
      />
    </span>
  );
}
