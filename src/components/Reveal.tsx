"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Render as a different element if needed (default: div). */
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Wraps children and fades/slides them in once they scroll into view.
 * Relies on the `.reveal` / `.reveal.in` styles in globals.css.
 */
export default function Reveal({ children, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      className={`reveal ${shown ? "in" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
