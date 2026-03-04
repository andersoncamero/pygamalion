import React from "react";
import { motion } from "motion/react";

interface AnimatedWordProps {
  children: string;
  delay?: number;
  colorClass?: string;
  className?: string;
}

export const AnimatedWord: React.FC<AnimatedWordProps> = ({
  children,
  delay = 0.6,
  colorClass = "bg-[var(--color-secondary)]",
  className = "",
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={`inline-block ${colorClass} text-[var(--color-dark)] px-4 sm:px-5 py-2 sm:py-3 rounded-[1.5rem] font-bold transition-transform duration-300 hover:scale-110 mb-1 ${className}`}
    >
      {children}
    </motion.span>
  );
};
