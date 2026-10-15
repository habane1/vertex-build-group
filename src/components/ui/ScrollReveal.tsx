"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  repeat?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  repeat = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!repeat) observer.unobserve(el);
        } else if (repeat) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) ${delay}ms, transform 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
