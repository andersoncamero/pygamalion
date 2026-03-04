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
            <CardImage
                src={imageSrc}
                alt={title}
                className="transition-transform duration-500 group-hover:scale-105"
            />
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
