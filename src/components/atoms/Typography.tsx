import React from "react";

interface TypographyProps {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    children: React.ReactNode;
    className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, className = "" }) => {
    const Tag = variant;
    return <Tag className={className}>{children}</Tag>;
};
