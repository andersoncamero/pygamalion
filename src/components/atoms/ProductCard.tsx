import type React from "react";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
      <div className="w-full h-50 md:h-50 lg:h-100 overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-8">
        <h3 className="sm:text-lg md:text-xl lg:text-2xl font-semibold text-[var(--color-dark)] mb-2">{title}</h3>
        {description && (
          <p className="sm:text-md md:text-lg lg:text-xl text-[var(--color-gray)]">{description}</p>
        )}
      </div>
    </article>
  );
};
