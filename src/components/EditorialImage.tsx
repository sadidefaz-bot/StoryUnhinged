import { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  caption,
  aspectClass = 'aspect-[16/9]',
  priority = false
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="w-full">
      <div
        className={`relative w-full overflow-hidden border border-[#D6D2C4] bg-[#F2EFE9] ${aspectClass}`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover [filter:grayscale(85%)_contrast(105%)] transition-[filter] duration-300 ease-out group-hover:[filter:grayscale(25%)_contrast(100%)]"
          />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="flex h-full w-full flex-col items-center justify-center bg-[#F2EFE9] px-6 text-center text-[#555555]"
          >
            <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8B1E1E]">
              Archival Photograph Unavailable
            </span>
            <span className="mt-2 max-w-md font-body text-sm italic">
              {alt}
            </span>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-2.5 border-b border-[#D6D2C4] pb-2.5 font-body text-[13px] italic leading-relaxed text-[#555555]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
