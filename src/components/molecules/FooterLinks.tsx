import React from "react";
import { Typography } from "../atoms/Typography";

interface FooterLink {
    label: string;
    href?: string;
}

interface FooterLinksProps {
    title: string;
    links: FooterLink[];
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
    return (
        <div className="flex flex-col">
            <Typography variant="h4" className="font-normal text-xl sm:text-md md:text-lg lg:text-xl mb-4 text-[var(--color-light)]">
                {title}
            </Typography>
            <ul className="space-y-2 text-[var(--color-light)]">
                {links.map((link, index) => (
                    <li key={index}>
                        <Typography variant="p" className="text-lg sm:text-md md:text-lg lg:text-xl">
                            {link.label}
                        </Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
};
