import { useEffect, useState } from "react";
import type { MenuItem as MenuItemType } from "../interfaces/interfaces";
import { getItemColorClasses } from "../utils/utils";
import { useUI } from "../context/UIContext";

interface UseMenuItemProps {
    item: MenuItemType;
    orientation: "horizontal" | "vertical";
    activeDropdown: string;
    clickedDropdown: string;
    setActiveDropdown: (tab: string) => void;
    setClickedDropdown: (tab: string) => void;
    onMenuClose?: () => void;
    setActiveTab: (tab: string) => void;
}

export const useMenuItem = ({
    item,
    orientation,
    activeDropdown,
    clickedDropdown,
    setActiveDropdown,
    setClickedDropdown,
    onMenuClose,
    setActiveTab: setLocalActiveTab,
}: UseMenuItemProps) => {
    const { activeTab, setActiveTab: setGlobalActiveTab } = useUI();
    const isVertical = orientation === "vertical";
    const showDropdownOnHover = !isVertical;

    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" && window.innerWidth < 768
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
            // Usar el setter global del contexto
            setGlobalActiveTab(item.tab);
            // También llamar al setter local si existe (por ejemplo para cerrar menús en NavMenu)
            setLocalActiveTab(item.tab);

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
            "font-medium font-three transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 inline-flex items-center whitespace-nowrap";

        const typographyClasses =
            "text-base md:text-[15px] lg:text-base xl:text-[17px] 2xl:text-base font-bold";

        const paddingClasses = isVertical
            ? "py-0 px-0"
            : "py-1.5 px-2 md:px-2 lg:px-3 xl:px-4 2xl:px-4 w-full md:w-auto text-left md:text-center";

        const spacingClasses = item.subMenu
            ? "justify-between md:justify-center space-x-1"
            : "";

        const colorClasses = getItemColorClasses(
            activeTab,
            item.tab,
            isVertical,
            isDropdownOpen
        );

        return `${baseClasses} ${typographyClasses} ${paddingClasses} ${spacingClasses} ${colorClasses}`;
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
        } else if (e.key === "ArrowDown" && item.subMenu && !isDropdownOpen) {
            e.preventDefault();
            if (isMobile || !showDropdownOnHover) {
                setClickedDropdown(item.tab);
            } else {
                setActiveDropdown(item.tab);
            }
        } else if (e.key === "Escape") {
            setActiveDropdown("");
            setClickedDropdown("");
        }
    };

    return {
        isVertical,
        isDropdownOpen,
        handleMouseEnter,
        handleMouseLeave,
        handleClick,
        handleKeyDown,
        getAdaptiveButtonClasses,
    };
};
