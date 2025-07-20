import type React from "react";
import { Link } from "react-router";

interface LogoProps {
  src: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ src, className }) => {
  const defaultAdaptiveClasses =
    "h-16 w-auto sm:h-16 md:h-18 lg:h-20 xl:h-24 2xl:h-28 max-w-[180px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] 2xl:max-w-[400px] object-contain transition-all duration-300";
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
    >
      <img
        src={src}
        alt="Pygmalion Education House"
        className={className || defaultAdaptiveClasses}
      />
    </Link>
  );
};
