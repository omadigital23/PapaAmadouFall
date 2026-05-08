import { SIGNALS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function SignalStrip() {
  return (
    <section
      className="grid grid-cols-4 text-white bg-deep border-t border-b border-line-dark-2 max-[1080px]:grid-cols-2 max-[820px]:grid-cols-1"
      aria-label="Profile highlights"
    >
      {SIGNALS.map((item, i) => (
        <ScrollReveal key={item.number} delay={i * 100}>
          <div
            className={`min-h-[150px] px-[clamp(18px,3vw,38px)] py-7 border-r border-line-dark-2 last:border-r-0 max-[820px]:min-h-[118px] max-[820px]:border-r-0 max-[820px]:border-b max-[820px]:border-line-dark-2 max-[820px]:last:border-b-0`}
          >
            <span className="block mb-4 text-brass text-[13px] font-[900]">{item.number}</span>
            <strong className="block mb-1.5 text-2xl leading-[1.05]">{item.title}</strong>
            <p className="m-0 text-white/66 text-sm">{item.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
