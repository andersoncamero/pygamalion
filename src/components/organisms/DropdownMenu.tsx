import type React from "react";
import type { SubMenuLink } from "../../interfaces/interfaces";
import { getItemColorClasses, scrollToSection } from "../../utils/utils";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "../atoms/Button";
import { useUI } from "../../context/UIContext";

interface DropdownMenuProps {
  isVisible: boolean;
  subMenu: SubMenuLink[];
  onMenuClose?: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isVisible,
  subMenu,
  onMenuClose,
}) => {
  const { activeTab, setActiveTab } = useUI();

  const handleSubItemClick = (tab: string) => {
    setActiveTab(tab);
    if (onMenuClose) {
      onMenuClose();
    }
    requestAnimationFrame(() => scrollToSection(tab, -200));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextItem = document.getElementById(`dropdown-item-${index + 1}`);
      nextItem?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevItem = document.getElementById(`dropdown-item-${index - 1}`);
      prevItem?.focus();
    } else if (e.key === "Escape") {
      if (onMenuClose) onMenuClose();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.ul
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-full md:w-64 bg-[var(--color-primary)]/95 backdrop-blur-md rounded-xl shadow-2xl py-3 z-60 border border-white/10 overflow-hidden"
          role="menu"
        >
          {subMenu.map((subItem, index) => (
            <motion.li
              key={subItem.tab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              role="none"
              className="px-2 mb-1 last:mb-0"
            >
              <Button
                id={`dropdown-item-${index}`}
                variant="ghost"
                onClick={() => handleSubItemClick(subItem.tab)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`font-three transition-all duration-300 ease-in-out focus:bg-white/10 focus:outline-none text-base md:text-[15px] lg:text-base xl:text-[17px] 2xl:text-base py-2 px-4 rounded-lg w-full text-left flex items-center hover:bg-white/10 hover:text-white ${getItemColorClasses(
                  activeTab,
                  subItem.tab
                )}`}
                role="menuitem"
              >
                <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                  {subItem.label}
                </motion.div>
              </Button>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
