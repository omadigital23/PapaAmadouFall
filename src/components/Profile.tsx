import { PROFILE, CAPABILITIES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Profile() {
  return (
    <section
      id="profile"
      className="grid grid-cols-[minmax(0,0.82fr)_minmax(420px,1fr)] gap-[clamp(34px,6vw,84px)] items-start px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] bg-white scroll-mt-[86px] max-[1080px]:grid-cols-1"
      aria-labelledby="profile-title"
    >
      <ScrollReveal>
        <div className="max-w-[820px]">
          <p className="m-0 mb-3 text-accent text-xs font-[900] tracking-[0.1em] uppercase">
            {PROFILE.eyebrow}
          </p>
          <h2
            id="profile-title"
            className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
          >
            {PROFILE.heading}
          </h2>
          <p className="max-w-[760px] text-muted text-[17px]">{PROFILE.text}</p>
        </div>
      </ScrollReveal>

      <div
        className="grid grid-cols-2 gap-3.5 max-[820px]:grid-cols-1"
        aria-label="Technical support capabilities"
      >
        {CAPABILITIES.map((cap, i) => (
          <ScrollReveal key={cap.tag} delay={i * 80}>
            <article className="min-h-[210px] p-5.5 border border-line rounded-lg bg-surface transition-all duration-200 hover:shadow-[0_16px_48px_rgba(16,24,39,0.08)] hover:scale-[1.02] max-[820px]:min-h-auto">
              <span className="inline-flex mb-4 px-2 py-1.5 rounded-md text-white bg-deep-2 text-xs font-[900]">
                {cap.tag}
              </span>
              <h3 className="m-0 mb-2 text-xl leading-[1.18]">{cap.title}</h3>
              <p className="m-0 text-muted text-[14.5px]">{cap.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
