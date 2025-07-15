import { Logo } from "./Logo";
import { NavContainer } from "./NavContainer";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="fixed top-0 w-full bg-[var(--color-light)] backdrop-blur-sm shadow-sm border-b border-[var(--color-secondary)]/20 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 mr-4">
            <Logo src="/logo.png" />
          </div>
          <div className="frelative flex items-center">
            <NavContainer activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </header>
  );
};
