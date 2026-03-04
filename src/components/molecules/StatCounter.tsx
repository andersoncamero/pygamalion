import React from "react";
import { Typography } from "../atoms/Typography";

interface StatCounterProps {
    value: string;
    label: string;
    className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, label, className = "" }) => {
    return (
        <div className={`flex flex-col items-center text-center group w-full sm:w-1/2 lg:w-1/4 px-4 ${className}`}>
            <div className="inline-block bg-[var(--color-primary)]/30 text-[var(--color-dark)] font-bold text-3xl sm:text-4xl lg:text-5xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg rotate-[-2deg] mb-3 sm:mb-4 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                {value}
            </div>
            <Typography variant="p" className="text-[var(--color-gray)] text-sm sm:text-base lg:text-lg font-medium">
                {label}
            </Typography>
        </div>
    );
};
