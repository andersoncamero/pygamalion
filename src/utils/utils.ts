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
  isVertical?: boolean,
): string => {

  const isActive = activeTab === itemTab;

  if (isVertical) {
    return isActive
      ? "text-[var(--color-light)] font-bold"
      : "text-[var(--color-light)]/80";
  }

  if (isActive) {
    return "text-[var(--color-light)] font-bold border-b-2 border-[var(--color-secondary)]";
  } else {
    return "text-[var(--color-light)]/90 transition-all duration-300";
  }
};

export const getScrolledColorVariant = (): string => {
  return "bg-[var(--color-primary)] text-[var(--color-light)] shadow-md border border-[var(--color-light)]/10";
};
