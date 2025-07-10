import React, { createContext, useContext } from "react";

interface TabsContextType {
    value: string;
    onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
    value: string;
    onValueChange: (value: string) => void;
    className?: string;
    children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
    value,
    onValueChange,
    className,
    children,
}) => {
    return (
        <TabsContext.Provider value={{value, onValueChange}}>
            <div className={className}>
                {children}
            </div>
        </TabsContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTabsContext = () => {
    const context = useContext(TabsContext)
    if (!context) throw new Error("useTabsContext debe usarse dentro de <Tabs>");
    return context
}