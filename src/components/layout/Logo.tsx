import type React from "react";
import { Link } from "react-router";

interface LogoProps {
  src: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ src, className }) => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src={src} alt="Pygmalion Education House" className={className ||"h-full w-[400px]"} />
    </Link>
  );
};
