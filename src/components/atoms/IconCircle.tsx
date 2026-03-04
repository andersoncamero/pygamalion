import React from "react";
import type { LucideIcon } from "lucide-react";

interface IconCircleProps {
    Icon: LucideIcon;
    className?: string;
}

export const IconCircle: React.FC<IconCircleProps> = ({ Icon, className = "" }) => {
    return (
        <div className={`w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 ${className}`}>
            <Icon className="w-8 h-8 text-[var(--color-primary)]" />
        </div>
    );
};
