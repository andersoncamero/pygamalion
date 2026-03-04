import type React from "react";
import { Typography } from "../atoms/Typography";
import { CardImage } from "../atoms/CardImage";
import { Badge } from "../atoms/Badge";

interface ProductCardProps {
    imageSrc: string;
    title: string;
    description?: string;
    price?: string;
    category?: string;
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    imageSrc,
    title,
    description,
    price,
    category,
    className = "",
}) => {
    return (
        <article className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full ${className}`}>
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden flex-shrink-0">
                <CardImage src={imageSrc} alt={title} className="w-full h-full" />
                {category && (
                    <Badge className="absolute top-4 left-4" variant="secondary">
                        {category}
                    </Badge>
                )}
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <Typography variant="h3" className="sm:text-lg md:text-xl lg:text-3xl font-bold text-[var(--color-dark)] mb-2">
                    {title}
                </Typography>
                {description && (
                    <Typography variant="p" className="text-xl sm:text-md md:text-lg lg:text-xl text-[var(--color-gray)] mb-4">
                        {description}
                    </Typography>
                )}
                {price && (
                    <div className="mt-4 flex justify-between items-center">
                        <Badge variant="primary" className="text-xl px-4 py-2">
                            {price}
                        </Badge>
                    </div>
                )}
            </div>
        </article>
    );
};
