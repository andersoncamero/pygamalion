import React from "react";
import { motion } from "motion/react";
import type { SubMenuLink } from "../../interfaces/interfaces";
import {
  getItemColorClasses,
  getScrolledColorVariant,
  scrollToSection,
} from "../../utilis/utils";

interface VerticalSubMenuProps {
  subMenu: SubMenuLink[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  scrolled: boolean;
  isVertical: boolean;
  onMenuClose?: () => void;
}

export const VerticalSubMenu: React.FC<VerticalSubMenuProps> = ({
  subMenu,
  activeTab,
  setActiveTab,
  scrolled,
  isVertical,
  onMenuClose,
}) => {
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
      className={`pl-4 mt-1 space-y-1 ${getScrolledColorVariant(
        scrolled
      )} rounded-md border border-gray-200 py-2`}
    >
      {subMenu.map((subItem) => (
        <li key={subItem.tab}>
          <button
            onClick={() => handleClick(subItem.tab)}
            className={`font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-sm py-2 px-4 ${getItemColorClasses(
              activeTab,
              subItem.tab,
              scrolled,
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
