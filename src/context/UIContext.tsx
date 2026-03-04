import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface UIContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    scrolled: boolean;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("sobre-nosotros");
    const [scrolled, setScrolled] = useState<boolean>(false);

    const handleScroll = useCallback(() => {
        const isScrolled = window.scrollY > 50;
        setScrolled(isScrolled);
    }, []);

    useEffect(() => {
        let ticking = false;

        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", throttledScroll);
    }, [handleScroll]);

    return (
        <UIContext.Provider value={{ activeTab, setActiveTab, scrolled }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
};
