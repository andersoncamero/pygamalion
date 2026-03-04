import React from "react";
import type { LucideIcon } from "lucide-react";
import { CardImage } from "../atoms/CardImage";
import { IconCircle } from "../atoms/IconCircle";
import { Typography } from "../atoms/Typography";

interface ValueCardProps {
    imageSrc: string;
    Icon: LucideIcon;
    title: string;
    description: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ imageSrc, Icon, title, description }) => {
    return (
        <div className="flex-1 text-center group">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                <CardImage
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <IconCircle Icon={Icon} />
            <Typography variant="h4" className="text-xl font-semibold text-[var(--color-dark)] mb-2">
                {title}
            </Typography>
            <Typography variant="p" className="text-[var(--color-gray)] text-xl leading-relaxed">
                {description}
            </Typography>
        </div>
    );
};
