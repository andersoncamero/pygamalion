import { useUI } from "../../context/UIContext";
import { Logo } from "../atoms/Logo";
import { NavContainer } from "./NavContainer";
//import { getScrolledColorVariant } from "../../utils/utils";
import { IMAGES } from "../../config/images";

export const Header: React.FC = () => {
  const { scrolled } = useUI();

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-400 ease-in-out bg-cover ${scrolled
        ? "bg-[var(--color-primary)]/90 text-[var(--color-light)] shadow-md border-b border-[var(--color-primary)]/80"
        : "bg-[var(--color-primary)]/80 text-[var(--color-light)] shadow-sm border-b border-[var(--color-primary)]/60"
        }`}
      role="banner"
      aria-label="Navegación principal"
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 py-3">
        <div className="flex items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <Logo src={IMAGES.logos.blue} />
          </div>
          <nav className="flex items-center flex-grow justify-end">
            <NavContainer />
          </nav>
        </div>
      </div>
    </header>
  );
};
