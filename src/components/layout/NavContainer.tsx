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
        className="md:hidden p-2 rounded-md"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X className="w-6 h-6 text-[var(--color-primary)]" />
        ) : (
          <Menu className="w-6 h-6 text-[var(--color-primary)]" />
        )}
      </Button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-light)] border-t border-[var(--color-secondary)] shadow-md md:hidden">
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
