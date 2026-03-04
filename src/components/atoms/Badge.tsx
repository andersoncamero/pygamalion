import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "primary", className = "" }) => {
    const variants = {
        primary: "bg-[var(--color-primary)] text-[var(--color-light)]",
        secondary: "bg-[var(--color-secondary)] text-[var(--color-primary)]",
        outline: "border border-[var(--color-gray)] text-[var(--color-gray)]",
    };

    return (
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};
