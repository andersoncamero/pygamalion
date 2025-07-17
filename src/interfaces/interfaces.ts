export interface SubMenuLink {
    label: string;
    tab: string;
}

export interface MenuItem {
    label: string;
    tab: string;
    subMenu?: SubMenuLink[];
}