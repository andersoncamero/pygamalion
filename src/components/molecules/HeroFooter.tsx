import React from "react";
import { motion } from "motion/react";
import { Typography } from "../atoms/Typography";

interface HeroFooterProps {
    isVisible: boolean;
}

export const HeroFooter: React.FC<HeroFooterProps> = ({ isVisible }) => {
    return (
        <div className="flex-1 mt-2 lg:mt-16 box-content md:box-border gap-4 flex flex-col items-center text-center">
            <Typography
                variant="h1"
                className="font-medium font-three text-3xl sm:text-3xl md:text-4xl lg:text-[46px] text-[var(--color-gray)] leading-tight flex flex-wrap line-clamp-2 overflow-hidden justify-center text-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] filter saturate-[100%]"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    El Efecto Pygmalión es nuestro faro en la construcción de futuros sociales.
                </motion.span>
            </Typography>
            <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[var(--color-dark)] font-secondary leading-relaxed pt-0.5 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                    duration: 0.8,
                    delay: 1.5,
                    ease: "easeOut",
                }}
            >
                Creemos profundamente en el potencial de cada persona y en el impacto de una educación que confía, inspira y acompaña.
            </motion.p>
        </div>
    );
};
