import React from "react";

interface CardCarouselPros {
  imageSrc: string;
  altText: string;
  titleImage: string;
  className?: string;
}

export const CardCarousel: React.FC<CardCarouselPros> = ({
  imageSrc,
  altText,
  className,
  titleImage,
}) => {
  return (
    <div className="h-full w-[400px] m-2 flex-shrink-0 cursor-pointer">
      <div className="rounded-3xl overflow-hidden mb-4 relative h-[250px]">
        <img src={imageSrc} alt={altText} className={className} />
        <span className="absolute inset-x-3 bottom-4 border border-[var(--color-light)]/50 rounded-xl text-[var(--color-dark)] text-md px-6 py-4 font-semibold capitalize bg-[var(--color-light)]/50">
            {titleImage}
        </span>
      </div>
    </div>
  );
};
