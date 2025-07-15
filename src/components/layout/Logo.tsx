import type React from "react";
import { Link } from "react-router";

interface LogoProps {
  src: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ src, className }) => {
  return (
    <Link to="/" className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
      <img src={src} alt="Pygmalion Education House" className={className ||"h-21 w-auto sm:h-15 md:h-27 lg:h-23 xl:h-30 max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] object-contain"} />
    </Link>
  );
};
