import { useCallback, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavContainer } from "./NavContainer";
import { getScrolledColorVariant } from "../../utilis/utils";
import { IMAGES } from "../../config/images";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-sm shadow-sm border-b border-[var(--color-primary)]/20 z-50 transition-all duration-400 ease-in-out ${getScrolledColorVariant(
        scrolled
      )} px-8 md:px-16 lg:px-24 m-auto bg-cover`}
      role="banner"
      aria-label="Navegación principal"
    >
      <div className="w-full mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 md:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 mr-2 sm:mr-3 md:mr-4">
            <Logo src={scrolled ? IMAGES.logos.white : IMAGES.logos.blue} />
          </div>
          <div className="flex items-center">
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
