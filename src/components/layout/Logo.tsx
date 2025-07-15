import type React from "react";
import { Link } from "react-router";

interface LogoProps {
  src: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ src, className }) => {
  return (
    <Link to="/" className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
      <img src={src} alt="Pygmalion Education House" className={className ||"h-16 w-auto sm:h-10 md:h-22 lg:h-18 xl:h-26 max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-contain"} />
    </Link>
  );
};
