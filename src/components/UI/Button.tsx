import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  role?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  role
}) => {
  
  return (
    <button
      onClick={onClick}
      className={`${className}`}
      role={role}
    >
        {children}
    </button>
  );
};
