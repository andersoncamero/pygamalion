import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";
import { DropdownMenu } from "./DropdownMenu";
import { VerticalSubMenu } from "./VerticalSubMenu";
import { getItemColorClasses } from "../../utilis/utils";
import type { MenuItem as MenuItemType } from "../../interfaces/interfaces";

interface MenuItemProps {
  item: MenuItemType;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  scrolled: boolean;
  orientation: "horizontal" | "vertical";
  activeDropdown: string;
  clickedDropdown: string;
  setActiveDropdown: (tab: string) => void;
  setClickedDropdown: (tab: string) => void;
  isVertical: boolean;
  onMenuClose?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  activeTab,
  setActiveTab,
  scrolled,
  orientation,
  activeDropdown,
  clickedDropdown,
  setActiveDropdown,
  setClickedDropdown,
  onMenuClose,
}) => {
  const isVertical = orientation === "vertical";
  const showDropdownOnHover = !isVertical;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const shouldShowDropdown = isMobile ? clickedDropdown : activeDropdown;
  const isDropdownOpen = shouldShowDropdown === item.tab;

  const handleMouseEnter = () => {
    if (item.subMenu && showDropdownOnHover) {
      setActiveDropdown(item.tab);
    } else {
      setClickedDropdown(item.tab);
    }
  };

  const handleMouseLeave = () => {
    if (showDropdownOnHover) {
      setActiveDropdown("");
    }
  };

  const handleClick = () => {
    if (item.subMenu) {
      if (isMobile || !showDropdownOnHover) {
        setClickedDropdown(clickedDropdown === item.tab ? "" : item.tab);
      }
    } else {
      setActiveTab(item.tab);
      setActiveDropdown("");
      setClickedDropdown("");

      if (isVertical && onMenuClose) {
        onMenuClose();
      }

      requestAnimationFrame(() => {
        const element = document.getElementById(item.tab);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 200;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
    }
  };

  const getAdaptiveButtonClasses = () => {
    const baseClasses =
      "font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 inline-flex items-center whitespace-nowrap";

    const typographyClasses =
      "text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base";

    const paddingClasses = isVertical
      ? "py-0 px-0"
      : "py-1.5 px-2 md:px-2 lg:px-3 xl:px-4 2xl:px-4 w-full md:w-auto text-left md:text-center";

    const spacingClasses = item.subMenu
      ? "justify-between md:justify-center space-x-1"
      : "";

    return `${baseClasses} ${typographyClasses} ${paddingClasses} ${spacingClasses}`;
  };

  return (
    <li
      key={item.tab}
      className={`relative ${isVertical ? "space-y-2" : "w-full md:w-auto"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.subMenu && isVertical ? (
        <Button
          onClick={handleClick}
          className={`${getAdaptiveButtonClasses()} ${getItemColorClasses(
            activeTab,
            item.tab,
            scrolled,
            isVertical
          )}`}
          aria-haspopup={item.subMenu ? "true" : undefined}
          aria-expanded={item.subMenu ? isDropdownOpen.toString() : undefined}
        >
          <motion.div
            whileHover={{ scale: isVertical ? 1.02 : 1.05 }}
            whileTap={{ scale: isVertical ? 0.98 : 0.95 }}
            className="flex items-center space-x-1"
          >
            {item.label}
            <motion.span
              className="ml-1"
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </motion.div>
        </Button>
      ) : (
        <Button
          onClick={handleClick}
          className={`${getAdaptiveButtonClasses()} ${getItemColorClasses(
            activeTab,
            item.tab,
            scrolled,
            isVertical
          )}`}
          aria-haspopup={item.subMenu ? "true" : undefined}
          aria-expanded={item.subMenu ? isDropdownOpen.toString() : undefined}
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
                animate={{
                  rotate: isDropdownOpen ? 180 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            )}
          </motion.div>
        </Button>
      )}

      {!isVertical && item.subMenu && (
        <DropdownMenu
          isVisible={isDropdownOpen}
          subMenu={item.subMenu}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          scrolled={scrolled}
          onMenuClose={onMenuClose}
        />
      )}

      {isVertical && item.subMenu && isDropdownOpen && (
        <VerticalSubMenu
          subMenu={item.subMenu}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          scrolled={scrolled}
          isVertical={isVertical}
          onMenuClose={onMenuClose}
        />
      )}
    </li>
  );
};
