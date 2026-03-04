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
            className={`w-full h-full object-cover ${className}`}
        />
    );
};
