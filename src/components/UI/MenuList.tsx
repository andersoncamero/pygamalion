import React from "react";
import type { MenuItem as MenuItemType } from "../../interfaces/interfaces";
import { MenuItem } from "./MenuItem";

interface MenuListProps {
  items: MenuItemType[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  scrolled: boolean;
  orientation: "horizontal" | "vertical";
  activeDropdown: string;
  clickedDropdown: string;
  setActiveDropdown: (tab: string) => void;
  setClickedDropdown: (tab: string) => void;
}

export const MenuList: React.FC<MenuListProps> = ({
  items,
  activeTab,
  setActiveTab,
  scrolled,
  orientation,
  activeDropdown,
  clickedDropdown,
  setActiveDropdown,
  setClickedDropdown,
}) => {
  return (
    <ul
    className={
      orientation === "horizontal"
        ? "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 lg:space-x-4 xl:space-x-6 2xl:space-x-8"
        : "flex flex-col space-y-4 p-4"
    }
    >
      {items.map((item) => (
        <MenuItem
          key={item.tab}
          item={item}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          scrolled={scrolled}
          orientation={orientation}
          activeDropdown={activeDropdown}
          clickedDropdown={clickedDropdown}
          setActiveDropdown={setActiveDropdown}
          setClickedDropdown={setClickedDropdown}
          isVertical={orientation === "vertical"}
        />
      ))}
    </ul>
  );
};
