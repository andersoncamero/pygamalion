import { useState } from "react";
import { NavMenu } from "./NavMenu";
import { Button } from "../UI/Button";
import { Menu, X } from "lucide-react";

interface NavContainerProps {
  activeTab: string;
  setActiveTab: (val: string) => void;
  scrolled: boolean;
}

export const NavContainer: React.FC<NavContainerProps> = ({
  activeTab,
  setActiveTab,
  scrolled,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const getIconColor = () => {
    return scrolled
      ? "text-[var(--color-primary)] hover:text-[var(--color-primary)]"
      : "text-[var(--colo-dark)] hover:text-[var(--color-secondary)]";
  };

  const getButtonStyle = () => {
    const baseClasses = "md:hidden transition-colors duration-200";
    const responsiveClasses = "p-1.5 sm:p-2";
    const hoverClasses = scrolled
      ? "hover:bg-[var(--color-primary)]/10"
      : "hover:bg-[var(--color-dark)]/90";

    return `${baseClasses} ${responsiveClasses} ${hoverClasses} rounded-md`;
  };

  return (
    <div className="flex items-center">
      <div className="hidden md:block">
        <NavMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          orientation="horizontal"
          scrolled={scrolled}
        />
      </div>
      <Button
        className={getButtonStyle()}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <X
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200  ${getIconColor()}`}
          />
        ) : (
          <Menu
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200  ${getIconColor()}`}
          />
        )}
      </Button>

      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full border-t shadow-md md:hidden transition-colors duration-200 ${
            scrolled
              ? "bg-[var(--color-light)] border-[var(--color-primary)]/20"
              : "bg-[var(--color-primary)]/95 border-[var(--color-dark)]/20"
          }`}
        >
          <NavMenu
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            orientation="vertical"
            scrolled={scrolled}
          />
        </div>
      )}
    </div>
  );
};
