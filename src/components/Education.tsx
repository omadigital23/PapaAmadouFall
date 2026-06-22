import { EDUCATION, EDUCATION_HEADER, SITE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-[150px] bg-soft px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] min-[900px]:scroll-mt-[96px]"
      aria-labelledby="education-title"
    >
      <ScrollReveal>
        <div className="mb-8 max-w-[820px]">
          <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent">
            {EDUCATION_HEADER.eyebrow}
          </p>
          <h2
            id="education-title"
            className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
          >
            {EDUCATION_HEADER.heading}
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 max-w-[920px]">
        {EDUCATION.map((edu, index) => (
          <ScrollReveal key={`${edu.degree}-${edu.period}`} delay={index * 100}>
            <article className="relative overflow-hidden rounded-lg border border-line bg-surface p-7 shadow-[0_14px_46px_rgba(16,24,39,0.05)] transition-all duration-200 hover:shadow-[0_20px_60px_rgba(16,24,39,0.1)]">
              {/* Accent bar at top */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,#0d7c66,#2b7de9)]" />

              <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span
                    className={`inline-flex rounded-md px-2.5 py-1.5 text-xs font-[900] ${edu.tagStyle}`}
                  >
                    {edu.tag}
                  </span>
                  <span className="ml-3 text-[13px] font-[900] text-brass">{edu.period}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/20 bg-accent/10 px-3 py-2 text-[12px] font-[800] leading-snug text-[#075e4f]">
                  🎓 {edu.mention}
                </span>
              </div>

              <h3 className="m-0 mb-2 text-[clamp(20px,2.2vw,26px)] leading-[1.12]">
                {edu.degree}
              </h3>

              <p className="m-0 mb-1 text-[15px] font-[700] text-accent">
                {edu.institution}
              </p>
              <p className="m-0 mb-4 text-[13px] font-[600] text-muted">
                {edu.system}
              </p>

              <p className="m-0 mb-4 max-w-[760px] text-[15px] leading-relaxed text-muted">
                {edu.description}
              </p>

              {edu.note && (
                <div className="mt-4 flex items-start gap-2 rounded-md border border-accent-2/20 bg-accent-2/[0.06] px-4 py-3">
                  <span className="mt-0.5 text-[13px]">📋</span>
                  <p className="m-0 text-[13px] leading-relaxed text-muted">
                    {edu.note}
                  </p>
                </div>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <p className="mt-5 max-w-[860px] text-[13.5px] leading-relaxed text-muted">
          Academic credentials and evaluation reports are available privately for verified hiring and immigration processes.{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-[700] text-accent underline decoration-accent/40 underline-offset-4 transition-all hover:decoration-accent"
          >
            {SITE.email}
          </a>
        </p>
      </ScrollReveal>
    </section>
  );
}
