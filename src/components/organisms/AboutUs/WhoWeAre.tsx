import React from "react";
import { CheckCircle } from "lucide-react";

interface WhoWeAreProps {
    description1: string;
    description2: string;
    features: {
        title: string;
        description: string;
    }[];
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ description1, description2, features }) => {
    return (
        <div className="flex flex-1 flex-col overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-dark)] mb-4">
                ¿Quiénes somos?
            </h2>
            <p className="text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[var(--color-gray)] mb-4">
                {description1}
            </p>
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[var(--color-gray)] mb-6">
                {description2}
            </p>
            <div className="space-y-3 sm:space-y-4 flex-1">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 mt-5">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-medium text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[var(--color-gray)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] filter saturate-[100%]">
                                {feature.title}
                            </h4>
                            <p className="font-normal text-[var(--color-gray)] text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
