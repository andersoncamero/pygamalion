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
        <div className="w-full flex flex-col items-center text-center px-0">
            <Typography variant="h1" className="font-bold font-primary text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[var(--color-dark)] leading-[1.4] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-4">
                {splitText("En cada")}
                <AnimatedWord colorClass="bg-[#8ecae6]" delay={0.6} className="text-black">
                    voz
                </AnimatedWord>
                {splitText("habita una")}
                <AnimatedWord colorClass="bg-[#ffde91]" delay={0.8} className="text-black">
                    historia
                </AnimatedWord>
                {splitText("que merece ser")}
                <AnimatedWord colorClass="bg-[#bda5cc]" delay={1.0} className="text-black">
                    escuchada
                </AnimatedWord>
                {splitText("y")}
                <AnimatedWord colorClass="bg-[#f7b68e]" delay={1.2} className="text-black">
                    reconocida
                </AnimatedWord>
            </Typography>

            <motion.p
                className="text-lg sm:text-xl md:text-2xl text-[var(--color-dark)] font-secondary leading-relaxed max-w-3xl mb-4 italic opacity-80"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            >
                Nuestro compromiso es contribuir a la construcción de un mundo en el que cada persona pueda encontrar su lugar.
            </motion.p>
        </div>
    );
};
