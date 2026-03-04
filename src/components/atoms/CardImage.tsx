import React from "react";

interface CardImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = "" }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`rounded-xl shadow-lg w-full aspect-[4/3] object-fill mb-4 ${className}`}
        />
    );
};
