export const scrollToSection = (id: string, offset: number = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const getItemColorClasses = (
  activeTab: string,
  itemTab: string,
  isVertical: boolean = false,
  isOpen: boolean = false
): string => {

  const isActive = activeTab === itemTab;

  if (isVertical) {
    return isActive || isOpen
      ? "text-[var(--color-dark)] font-bold"
      : "text-[var(--color-light)]/80";
  }

  if (isActive || isOpen) {
    return "text-[var(--color-dark)] font-bold";
  } else {
    return "text-[var(--color-light)]/90 transition-all duration-300";
  }
};

export const getScrolledColorVariant = (): string => {
  return "bg-[var(--color-primary)]/95 text-[var(--color-light)]";
};
