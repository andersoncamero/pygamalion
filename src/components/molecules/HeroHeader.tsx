import React, { useCallback } from "react";
import { motion } from "motion/react";
import { AnimatedWord } from "../atoms/AnimateWord";
import { Typography } from "../atoms/Typography";

interface HeroHeaderProps {
    isVisible: boolean;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ isVisible }) => {
    const splitText = useCallback(
        (text: string) => {
            return text.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="inline-block m-1"
                >
                    {word}
                </motion.span>
            ));
        },
        [isVisible]
    );

    return (
        <div className="flex-1 mt-2 lg:mt-16 box-content md:box-border flex flex-col items-center text-center">
            <Typography variant="h1" className="font-bold font-primary text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-dark)] leading-tight flex flex-wrap gap-3 line-clamp-2 overflow-hidden justify-center text-center">
                {splitText("En cada")}
                <AnimatedWord colorClass="bg-[var(--color-secondary)]/50" delay={0.6}>
                    voz
                </AnimatedWord>
                {splitText("habita una")}
                <AnimatedWord colorClass="bg-[var(--color-yellow)]/50 " delay={0.6}>
                    historia
                </AnimatedWord>
                {splitText("que merece ser")}
                <AnimatedWord colorClass="bg-[var(--color-purple)]/50" delay={0.6}>
                    escuchada
                </AnimatedWord>
                {splitText("y")}
                <AnimatedWord colorClass="bg-[var(--color-orange)]/50" delay={0.6}>
                    reconocida
                </AnimatedWord>
            </Typography>
            <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-[var(--color-dark)] font-secondary leading-relaxed pt-3 sm:pt-6 md:pt-8 lg:pt-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                    duration: 0.8,
                    delay: 1.5,
                    ease: "easeOut",
                }}
            >
                Nuestro compromiso es contribuir a la construcción de un mundo en el que cada persona pueda encontrar su lugar.
            </motion.p>
        </div>
    );
};
