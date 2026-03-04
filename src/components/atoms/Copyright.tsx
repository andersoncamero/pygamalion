import React from "react";
import { Typography } from "./Typography";

interface CopyrightProps {
    year?: number;
    company?: string;
    className?: string;
}

export const Copyright: React.FC<CopyrightProps> = ({
    year = new Date().getFullYear(),
    company = "Pygmalion Education House",
    className = ""
}) => {
    return (
        <div className={`border-t border-[var(--color-light)]/20 p-8 text-center ${className}`}>
            <Typography variant="p" className="text-[var(--color-light)] text-lg sm:text-sm md:text-md lg:text-lg">
                © {year} {company}. Todos los derechos reservados.
            </Typography>
        </div>
    );
};
