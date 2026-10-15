"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site-data";

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  return (
    <section className="bg-yellow py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center ${
              i < STATS.length - 1
                ? "md:border-r md:border-white/30"
                : ""
            }`}
          >
            <p className="font-heading text-5xl md:text-6xl font-bold text-text-dark">
              <CountUp target={stat.value} />
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-text-dark/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
