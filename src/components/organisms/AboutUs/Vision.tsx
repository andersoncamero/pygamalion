import React from "react";

interface VisionProps {
    imageSrc: string;
    title: string;
    description: string;
}

export const Vision: React.FC<VisionProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl shadow-xl min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <div className="flex-[7] flex flex-col">
                <img
                    src={imageSrc}
                    alt="Visualización de nuestra visión"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-[3] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-2 sm:p-6 text-[var(--color-light)] flex flex-col">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                    {title}
                </h3>
                <p className="text-[var(--color-light)] leading-relaxed text-xl sm:text-xl md:text-2xl lg:text-3xl">
                    {description}
                </p>
            </div>
        </div>
    );
};
