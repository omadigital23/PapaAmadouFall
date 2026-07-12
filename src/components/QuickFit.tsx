import { QUICK_FIT, QUICK_FIT_HEADER } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function QuickFit() {
  return (
    <section
      id="fit"
      className="scroll-mt-[150px] bg-page px-[clamp(18px,4vw,56px)] py-[clamp(54px,7vw,86px)] min-[900px]:scroll-mt-[96px]"
      aria-labelledby="fit-title"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-[minmax(0,0.88fr)_minmax(420px,1fr)] items-start gap-[clamp(28px,5vw,70px)] max-[1080px]:grid-cols-1">
        <ScrollReveal>
          <div className="max-w-[760px]">
            <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent">
              {QUICK_FIT_HEADER.eyebrow}
            </p>
            <h2
              id="fit-title"
              className="m-0 text-[clamp(30px,4vw,54px)] leading-[1.02] tracking-normal"
            >
              {QUICK_FIT_HEADER.heading}
            </h2>
            <p className="m-0 mt-4 max-w-[720px] text-[17px] leading-relaxed text-muted">
              {QUICK_FIT_HEADER.text}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 max-[760px]:grid-cols-1">
          {QUICK_FIT.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 70}>
              <article className="min-h-[184px] rounded-lg border border-line bg-surface p-5 shadow-[0_12px_42px_rgba(16,24,39,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(16,24,39,0.08)] max-[760px]:min-h-auto">
                <span className="inline-flex rounded-md bg-deep-2 px-2 py-1.5 text-xs font-[900] text-white">
                  {item.label}
                </span>
                <h3 className="m-0 mt-4 text-xl leading-[1.18]">{item.value}</h3>
                <p className="m-0 mt-2 text-[14.5px] leading-relaxed text-muted">{item.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
