import React from "react";
import { motion } from "motion/react";
import { Typography } from "../atoms/Typography";

interface SocialItem {
    icon: string;
    alt: string;
    url: string;
}

interface SocialLinksProps {
    title?: string;
    items: SocialItem[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ title = "Síguenos", items }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex-1 min-w-[180px] max-w-sm">
                <Typography variant="h4" className="font-normal mb-4 text-xl sm:text-md md:text-lg lg:text-xl text-left text-[var(--color-light)]">
                    {title}
                </Typography>
                <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        },
                        hidden: { opacity: 0 }
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex gap-2 sm:gap-3 md:gap-4 justify-center items-center flex-wrap"
                >
                    {items.map((social) => (
                        <motion.li
                            key={social.alt}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                    scale: 0.8
                                }
                            }}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center space-y-1 cursor-pointer relative"
                        >
                            <div
                                onClick={() => {
                                    const element = document.querySelector(`[data-social="${social.alt}"]`);
                                    element?.classList.add('animate-spin');
                                    setTimeout(() => {
                                        window.open(social.url, "_blank");
                                        element?.classList.remove('animate-spin');
                                    }, 1000);
                                }}
                                className="relative"
                            >
                                <img
                                    src={social.icon}
                                    alt={social.alt}
                                    data-social={social.alt}
                                    loading="lazy"
                                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform duration-300"
                                />
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};
