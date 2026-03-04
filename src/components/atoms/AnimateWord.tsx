import React from "react";
import { motion } from "motion/react";

interface AnimatedWordProps {
  children: string;
  delay?: number;
  colorClass?: string;
  rotate?: number;
}

export const AnimatedWord: React.FC<AnimatedWordProps> = ({
  children,
  delay = 0.6,
  colorClass = "bg-[var(--color-secondary)]/30",
  rotate = -2,
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9, rotate }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={`inline-block ${colorClass} px-4 sm:px-6 py-2 sm:py-3 rounded-lg mb-2 rotate-[${rotate}deg] hover:rotate-0 hover:scale-105 transition-transform duration-300`}
    >
      {children}
    </motion.span>
  );
};
