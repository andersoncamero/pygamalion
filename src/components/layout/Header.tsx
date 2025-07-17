import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavContainer } from "./NavContainer";
import { getScrolledColorVariant } from "../../utilis/utils";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-sm shadow-sm border-b border-[var(--color-primary)]/20 z-50 transition-all duration-400 ease-in-out ${
        getScrolledColorVariant(scrolled)
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 mr-4">
            <Logo src={scrolled ? "/logo.png" : "/logo-FA.png"} />
          </div>
          <div className="frelative flex items-center">
            <NavContainer
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              scrolled={scrolled}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
