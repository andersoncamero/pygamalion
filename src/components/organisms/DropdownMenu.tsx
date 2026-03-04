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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.ul
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-full md:w-56 bg-[var(--color-primary)] rounded-lg shadow-xl py-3 z-60 border border-[var(--color-light)]/10"
          role="menu"
        >
          {subMenu.map((subItem, index) => (
            <motion.li
              key={subItem.tab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              role="none"
            >
              <Button
                onClick={() => handleSubItemClick(subItem.tab)}
                className={`font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-lg py-2 px-4 rounded-md w-full text-left block hover:bg-[var(--color-light)] hover:text-[var(--color-primary)] ${getItemColorClasses(
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
