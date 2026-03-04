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
    <div className="h-full w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] mx-2 flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-300">
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden mb-4 relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={imageSrc}
          alt={altText}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${className}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute left-1/2 -translate-x-1/2 bottom-4 border border-[var(--color-light)]/50 rounded-xl text-[var(--color-dark)] text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 font-semibold bg-[var(--color-light)]/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-[var(--color-light)]/90">
          {titleImage}
        </span>
      </div>
    </div>
  );
};
