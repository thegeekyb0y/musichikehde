
import { useEffect } from "react";

export default function useScrollReveal(selector = ".scroll-reveal", options = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target); // Remove if you want only once
          }
        });
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    const targets = document.querySelectorAll(selector);
    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, [selector, options]);
}
