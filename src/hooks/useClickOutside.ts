import { useEffect, useRef } from "react";

interface UseClickOutsideProps {
  onClickOutside: () => void;
  enabled?: boolean;
}

export function useClickOutside<T extends HTMLElement>({
  onClickOutside,
  enabled,
}: UseClickOutsideProps) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, {
      capture: true,
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, {
        capture: true,
      });
    };
  }, [onClickOutside, enabled]);

  return ref;
}
