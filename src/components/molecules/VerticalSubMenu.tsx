import React from "react";
import { motion } from "motion/react";
import type { SubMenuLink } from "../../interfaces/interfaces";
import {
  getItemColorClasses,
  getScrolledColorVariant,
  scrollToSection,
} from "../../utils/utils";
import { useUI } from "../../context/UIContext";
import { Button } from "../atoms/Button";

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

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextItem = document.getElementById(`v-submenu-item-${index + 1}`);
      nextItem?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevItem = document.getElementById(`v-submenu-item-${index - 1}`);
      prevItem?.focus();
    } else if (e.key === "Escape") {
      if (onMenuClose) onMenuClose();
    }
  };

  return (
    <motion.ul
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className={`pl-4 mt-1 space-y-1 ${getScrolledColorVariant()} rounded-md py-2`}
      role="menu"
    >
      {subMenu.map((subItem, index) => (
        <li key={subItem.tab} role="none">
          <Button
            id={`v-submenu-item-${index}`}
            onClick={() => handleClick(subItem.tab)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`font-semibold transition-all duration-300 ease-in-out focus:bg-[var(--color-light)]/20 focus:outline-none text-lg py-2 px-4 rounded-md w-full text-left hover:bg-[var(--color-light)]/10 ${getItemColorClasses(
              activeTab,
              subItem.tab,
              isVertical
            )}`}
            role="menuitem"
          >
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
              {subItem.label}
            </motion.div>
          </Button>
        </li>
      ))}
    </motion.ul>
  );
};
