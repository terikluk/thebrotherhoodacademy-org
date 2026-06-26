"use client";

import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  value: string;
  label: string;
  description?: string;
}

function parseValue(val: string): { numeric: number; prefix: string; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)([^0-9]*)$/);
  if (!match) return { numeric: 0, prefix: "", suffix: val };
  return { numeric: parseFloat(match[2]), prefix: match[1], suffix: match[3] };
}

export default function StatsCounter({ value, label, description }: StatsCounterProps) {
  const { numeric, prefix, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const duration = 1500;
          const start = performance.now();
          const isDecimal = numeric % 1 !== 0;

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * numeric;
            setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-bold text-gold mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="font-body font-semibold text-warm-white text-lg mb-1">{label}</div>
      {description && (
        <p className="font-body text-sm text-warm-white/60 max-w-40 mx-auto leading-snug">{description}</p>
      )}
    </div>
  );
}
