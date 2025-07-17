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
  scrolled: boolean,
  isVertical?: boolean,
): string => {

  const isActive = activeTab === itemTab;

    if (isVertical) {
    return scrolled
      ? isActive
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-dark)] hover:text-[var(--color-dark)]"
      : isActive
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-gray)] hover:text-[var(--color-dark)]";
  }
  if (isActive) {
    return scrolled
      ? "text-[var(--color-gray)] hover:text-[var(--color-gray)]"
      : "text-[var(--color-dark)] hover:text-[var(--color-gray)]";
  } else {
    return scrolled
      ? "text-[var(--color-dark)] hover:text-[var(--color-dark)]"
      : "text-[var(--color-light)] hover:text-[var(--color-dark)]";
  }
};

export const getScrolledColorVariant = (
  scrolled: boolean,
): string => {
  return scrolled
    ? "bg-[var(--color-light)] text-[var(--color-light)]"
    : "bg-[var(--color-primary)] text-[var(--color-dark)]";
};
