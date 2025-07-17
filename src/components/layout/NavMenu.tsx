import React, { useState } from "react";
import { motion } from "motion/react";
import { MenuList } from "../UI/MenuList";
import type { MenuItem } from "../../interfaces/interfaces";

interface NavMenuProps {
  orientation?: "horizontal" | "vertical";
  activeTab: string;
  setActiveTab: (tab: string) => void;
  scrolled: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  orientation = "horizontal",
  activeTab,
  setActiveTab,
  scrolled,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const [clickedDropdown, setClickedDropdown] = useState<string>("");

  const menuItems: MenuItem[] = [
    {
      label: "Productos",
      tab: "productos",
      subMenu: [
        { label: "Lectoescritura", tab: "letoescritura" },
        { label: "Literacy", tab: "literacy" },
        { label: "Litterate", tab: "litterate" },
      ],
    },
    {
      label: "Servicios",
      tab: "servicios",
      subMenu: [
        { label: "Asesorias", tab: "asesorias" },
        { label: "Desarrollo profesional", tab: "desarrollo-profesional" },
        { label: "Diseño", tab: "diseno" },
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
    { label: "Contacto", tab: "contactenos" },
  ];

  const layoutClasses =
    orientation === "horizontal"
      ? "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 w-full md:w-auto md:justify-end"
      : "flex flex-col space-y-4 p-4";

  return (
    <motion.nav
      className={`${layoutClasses} ${orientation !== "vertical" ? "relative" : ""} z-50`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MenuList
        items={menuItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        scrolled={scrolled}
        orientation={orientation}
        activeDropdown={activeDropdown}
        clickedDropdown={clickedDropdown}
        setActiveDropdown={setActiveDropdown}
        setClickedDropdown={setClickedDropdown}
      />
    </motion.nav>
  );
};
