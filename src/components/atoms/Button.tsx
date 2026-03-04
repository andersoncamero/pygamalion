import React from "react";

interface ButtonProps {
  id?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  className?: string;
  role?: string;
  tabIndex?: number;
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  "aria-label"?: string;
  "aria-haspopup"?: "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
  "aria-expanded"?: boolean | "true" | "false" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  onKeyDown,
  tabIndex = 0,
  className = "",
  variant = "primary",
  "aria-label": ariaLabel,
  "aria-haspopup": ariaHasPopup,
  "aria-expanded": ariaExpanded,
}) => {
  const baseStyles = "px-8 py-3 rounded-xl font-bold transition-all duration-200 focus:outline-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";
  const neoStyles = "border-2 border-[var(--color-dark)] shadow-[4px_4px_0px_#1d1d1b]";

  const variants = {
    primary: `${neoStyles} bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90`,
    secondary: `${neoStyles} bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90`,
    outline: `${neoStyles} bg-transparent text-[var(--color-dark)] hover:bg-[var(--color-light)]`,
    danger: `${neoStyles} bg-[var(--color-red)] text-white hover:bg-[var(--color-red)]/90`,
    ghost: "bg-transparent hover:bg-black/5",
  };

  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  );
};
