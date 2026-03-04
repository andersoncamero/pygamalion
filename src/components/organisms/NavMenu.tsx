import React, { useState } from "react";
import { motion } from "motion/react";
import { MenuList } from "../molecules/MenuList";
import type { MenuItem } from "../../interfaces/interfaces";
import { useUI } from "../../context/UIContext";

interface NavMenuProps {
  orientation?: "horizontal" | "vertical";
  onMenuClose?: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  orientation = "horizontal",
  onMenuClose,
}) => {
  const { setActiveTab } = useUI();
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const [clickedDropdown, setClickedDropdown] = useState<string>("");

  const menuItems: MenuItem[] = [
    {
      label: "Productos",
      tab: "productos",
      subMenu: [
        { label: "Lectoescritura", tab: "letoescritura" },
        { label: "Literacy", tab: "literacy" },
        { label: "Littératie", tab: "litteratie" },
        { label: "Letramento", tab: "letramento" },
      ],
    },
    {
      label: "Servicios",
      tab: "servicios",
      subMenu: [
        { label: "Asesorías", tab: "asesorias" },
        { label: "Desarrollo profesional", tab: "desarrollo-profesional" },
        { label: "Diseño", tab: "diseno" },
        { label: "Zona Glossa", tab: "zona-glossa" },
      ],
    },
    {
      label: "Nosotros",
      tab: "nosotros",
      subMenu: [
        { label: "Sobre nosotros", tab: "sobre-nosotros" },
        { label: "Liderazgo", tab: "liderazgo" },
        { label: "Nuestro compromiso", tab: "nuestro-compromiso" },
        { label: "Centro de noticias", tab: "noticias" },
      ],
    },
    {
      label: "Centro de recursos",
      tab: "recursos",
      subMenu: [
        { label: "Blogs", tab: "blogs" },
        { label: "Podcasts", tab: "podcasts" },
        { label: "Artículos", tab: "articulos" },
      ],
    },
    { label: "Contacto", tab: "contactenos" },
  ];

  const layoutClasses =
    orientation === "horizontal"
      ? "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10 w-full md:w-auto md:items-center"
      : "flex flex-col space-y-4 p-4";

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (orientation === "vertical" && onMenuClose) {
      onMenuClose();
    }
  };

  return (
    <motion.nav
      className={`${layoutClasses} ${orientation !== "vertical" ? "relative" : ""} z-50`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MenuList
        items={menuItems}
        setActiveTab={handleTabChange}
        orientation={orientation}
        activeDropdown={activeDropdown}
        clickedDropdown={clickedDropdown}
        setActiveDropdown={setActiveDropdown}
        setClickedDropdown={setClickedDropdown}
        onMenuClose={onMenuClose}
      />
    </motion.nav>
  );
};
