import type React from "react";
import { motion } from "motion/react";
import { Button } from "../UI/Button";

interface NavMenuProps {
  orientation?: "horizontal" | "vertical";
  activeTab: string;
  setActiveTab: (tab: string) => void;
  scrolled: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  activeTab,
  setActiveTab,
  orientation = "horizontal",
  scrolled,
}) => {
  const links = [
    { label: "Nosotros", tab: "nosotros" },
    { label: "Servicios", tab: "Servicios" },
    { label: "Contacto", tab: "contactenos" },
  ];

  const layoutClasses =
    orientation === "horizontal"
      ? "flex space-x-8"
      : "flex flex-col space-y-4 p-4";

  const scrollToSection = (id: string, offset: number = 0) => {
    console.log("scrollToSection", id, offset);
    const element = document.getElementById(id);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getButtonClasses = (linkTab: string) => {
    const isActive = activeTab === linkTab;
    
    return `text-ms font-medium transition-all duration-300 ease-in-out ${
      isActive
        ? scrolled
          ? "text-[var(--color-gray)] hover:text-[var(--color-gray)]"
          : "text-[var(--color-dark)] hover:text-[var(--color-gray)]"
        : scrolled
          ? "text-[var(--color-dark)] hover:text-[var(--color-dark)]"
          : "text-[var(--color-light)] hover:text-[var(--color-dark)]"
    }`;
  };

  return (
    <motion.nav
      className={layoutClasses}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {links.map((link) => (
        <Button
          key={link.tab}
          onClick={() => {
            setActiveTab(link.tab);
            requestAnimationFrame(() => scrollToSection(link.tab, -200));
          }}
          className={getButtonClasses(link.tab)}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {link.label}
          </motion.div>
        </Button>
      ))}
    </motion.nav>
  );
};
