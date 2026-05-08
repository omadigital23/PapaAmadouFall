"use client";

import { useEffect, useRef, useState } from "react";
import { SIGNALS } from "@/lib/constants";

export default function SignalStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="grid grid-cols-4 text-white bg-[linear-gradient(135deg,#07101a_0%,#0c1c2e_50%,#07101a_100%)] border-t border-b border-line-dark-2 max-[1080px]:grid-cols-2 max-[820px]:grid-cols-1"
      aria-label="Profile highlights"
    >
      {SIGNALS.map((item, i) => {
        const isPrimary = i === 0;
        return (
          <div
            key={item.number}
            className={`relative min-h-[160px] px-[clamp(18px,3vw,38px)] py-8 border-r border-line-dark-2 last:border-r-0 max-[820px]:min-h-[118px] max-[820px]:border-r-0 max-[820px]:border-b max-[820px]:border-line-dark-2 max-[820px]:last:border-b-0 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {isPrimary && (
              <div
                className="absolute bottom-0 left-[clamp(18px,3vw,38px)] right-[clamp(18px,3vw,38px)] h-[2px] rounded-full"
                style={{
                  background: "linear-gradient(90deg, #0d7c66, transparent)",
                  opacity: visible ? 1 : 0,
                  transition: "opacity 1s ease 600ms",
                }}
              />
            )}

            <span className="block mb-4 text-brass text-[13px] font-[900] tracking-wider">
              {item.number}
            </span>

            <strong
              className={`block mb-2 leading-[1.02] transition-all duration-1000 ${
                isPrimary
                  ? "text-[clamp(22px,2vw,28px)] text-accent-light"
                  : i === 2
                  ? "text-[clamp(26px,2.3vw,34px)] tracking-[0.04em]"
                  : i === 3
                  ? "text-[clamp(18px,1.6vw,22px)]"
                  : "text-[clamp(28px,2.5vw,36px)]"
              }`}
              style={{
                transitionDelay: `${300 + i * 150}ms`,
                animation: visible && isPrimary
                  ? `scoreReveal 0.8s cubic-bezier(0.16,1,0.3,1) ${300}ms both`
                  : "none",
              }}
            >
              {item.title}
            </strong>

            <p className="m-0 text-white/55 text-[13px] leading-[1.45]">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
}
