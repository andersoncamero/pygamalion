import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "../atoms/Button";
import { DropdownMenu } from "../organisms/DropdownMenu";
import { VerticalSubMenu } from "./VerticalSubMenu";
import type { MenuItem as MenuItemType } from "../../interfaces/interfaces";
import { useMenuItem } from "../../hooks/useMenuItem";

interface MenuItemProps {
  item: MenuItemType;
  setActiveTab: (tab: string) => void;
  orientation: "horizontal" | "vertical";
  activeDropdown: string;
  clickedDropdown: string;
  setActiveDropdown: (tab: string) => void;
  setClickedDropdown: (tab: string) => void;
  isVertical: boolean;
  onMenuClose?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { item, onMenuClose } = props;

  const {
    isVertical,
    isDropdownOpen,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    handleKeyDown,
    getAdaptiveButtonClasses,
  } = useMenuItem(props);

  return (
    <li
      key={item.tab}
      className={`relative ${isVertical ? "space-y-2" : "w-full md:w-auto"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        variant="ghost"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={getAdaptiveButtonClasses()}
        aria-haspopup={item.subMenu ? "menu" : undefined}
        aria-expanded={isDropdownOpen}
      >
        <motion.div
          whileHover={{ scale: isVertical ? 1.02 : 1.05 }}
          whileTap={{ scale: isVertical ? 0.98 : 0.95 }}
          className="flex items-center space-x-1"
        >
          {item.label}
          {item.subMenu && (
            <motion.span
              className="ml-1"
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          )}
        </motion.div>
      </Button>

      {!isVertical && item.subMenu && (
        <DropdownMenu
          isVisible={isDropdownOpen}
          subMenu={item.subMenu}
          onMenuClose={onMenuClose}
        />
      )}

      {isVertical && item.subMenu && isDropdownOpen && (
        <VerticalSubMenu
          subMenu={item.subMenu}
          isVertical={isVertical}
          onMenuClose={onMenuClose}
        />
      )}
    </li>
  );
};
