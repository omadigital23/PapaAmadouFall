import { CAPABILITIES, PROFILE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Profile() {
  return (
    <section
      id="profile"
      className="grid scroll-mt-[150px] grid-cols-[minmax(0,0.82fr)_minmax(420px,1fr)] items-start gap-[clamp(34px,6vw,84px)] bg-white px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] max-[1080px]:grid-cols-1 min-[900px]:scroll-mt-[96px]"
      aria-labelledby="profile-title"
    >
      <ScrollReveal>
        <div className="max-w-[820px]">
          <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent">
            {PROFILE.eyebrow}
          </p>
          <h2
            id="profile-title"
            className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
          >
            {PROFILE.heading}
          </h2>
          <p className="max-w-[760px] text-[17px] leading-relaxed text-muted">{PROFILE.text}</p>
        </div>
      </ScrollReveal>

      <div
        className="grid grid-cols-2 gap-3.5 max-[820px]:grid-cols-1"
        aria-label="Technical support capabilities"
      >
        {CAPABILITIES.map((capability, index) => (
          <ScrollReveal
            key={capability.tag}
            delay={index * 80}
            className={index === CAPABILITIES.length - 1 ? "col-span-2 max-[820px]:col-span-1" : ""}
          >
            <article className="min-h-[184px] rounded-lg border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(16,24,39,0.08)] max-[820px]:min-h-auto">
              <span
                className={`mb-4 inline-flex rounded-md px-2 py-1.5 text-xs font-[900] ${capability.tagStyle}`}
              >
                {capability.tag}
              </span>
              <h3 className="m-0 mb-2 text-xl leading-[1.18]">{capability.title}</h3>
              <p className="m-0 text-[14.5px] leading-relaxed text-muted">
                {capability.description}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
