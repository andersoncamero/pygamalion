import React from "react";

interface ButtonProps {
  id?: string;
  children: React.ReactNode;
  onClick: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  className?: string;
  role?: string;
  tabIndex?: number;
  "aria-label"?: string;
  "aria-haspopup"?: "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
  "aria-expanded"?: boolean | "true" | "false" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  id,
  children,
  onClick,
  onKeyDown,
  className,
  role,
  tabIndex,
  "aria-label": ariaLabel,
  "aria-haspopup": ariaHasPopup,
  "aria-expanded": ariaExpanded,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={className}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  );
};
