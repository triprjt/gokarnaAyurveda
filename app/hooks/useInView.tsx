// hooks/useInView.ts
import { useEffect, useState, RefObject } from "react";

export const useInView = (
  ref: RefObject<HTMLElement | null>,
  options = { threshold: 0.3 }
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
};
