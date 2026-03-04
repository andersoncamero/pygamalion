import { useState } from "react";
import { NavMenu } from "./NavMenu";
import { Button } from "../atoms/Button";
import { Menu, X } from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside";

export const NavContainer: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuRef = useClickOutside<HTMLDivElement>({
    onClickOutside: () => setMenuOpen(false),
    enabled: menuOpen,
  }) as React.RefObject<HTMLDivElement>;

  const getIconColor = () => {
    return "text-white hover:text-[var(--color-secondary)]";
  };

  const getButtonStyle = () => {
    const baseClasses = "md:hidden transition-colors duration-200";
    const responsiveClasses = "p-1.5 sm:p-2";
    const hoverClasses = "hover:bg-[var(--color-light)]/10";

    return `${baseClasses} ${responsiveClasses} ${hoverClasses} rounded-md`;
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex items-center w-full justify-end">
      <div className="hidden md:flex flex-grow justify-end mr-4">
        <NavMenu orientation="horizontal" />
      </div>
      <Button
        variant="ghost"
        className={getButtonStyle()}
        onClick={handleToggleMenu}
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
          ref={menuRef}
          className="absolute top-full left-0 w-full shadow-2xl md:hidden transition-all duration-300 bg-[var(--color-primary)]/95 backdrop-blur-lg border-t border-white/10 rounded-b-2xl overflow-hidden"
        >
          <NavMenu
            orientation="vertical"
            onMenuClose={handleMenuClose}
          />
        </div>
      )}
    </div>
  );
};
