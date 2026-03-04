import React from "react";
import { motion } from "motion/react";
import type { SubMenuLink } from "../../interfaces/interfaces";
import {
  getItemColorClasses,
  getScrolledColorVariant,
  scrollToSection,
} from "../../utils/utils";
import { useUI } from "../../context/UIContext";

interface VerticalSubMenuProps {
  subMenu: SubMenuLink[];
  isVertical: boolean;
  onMenuClose?: () => void;
}

export const VerticalSubMenu: React.FC<VerticalSubMenuProps> = ({
  subMenu,
  isVertical,
  onMenuClose,
}) => {
  const { activeTab, setActiveTab } = useUI();

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    if (onMenuClose) {
      onMenuClose();
    }
    requestAnimationFrame(() => scrollToSection(tab, -200));
  };

  return (
    <motion.ul
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className={`pl-4 mt-1 space-y-1 ${getScrolledColorVariant()} rounded-md py-2`}
    >
      {subMenu.map((subItem) => (
        <li key={subItem.tab}>
          <button
            onClick={() => handleClick(subItem.tab)}
            className={`font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-lg py-2 px-4 rounded-md w-full text-left hover:bg-[var(--color-light)] hover:text-[var(--color-primary)] ${getItemColorClasses(
              activeTab,
              subItem.tab,
              isVertical
            )}`}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {subItem.label}
            </motion.div>
          </button>
        </li>
      ))}
    </motion.ul>
  );
};
