import { CERTIFICATIONS, CERTIFICATIONS_HEADER, SITE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  return (
    <section
      id="references"
      className="scroll-mt-[150px] bg-soft px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] min-[900px]:scroll-mt-[96px]"
      aria-labelledby="proof-title"
    >
      <ScrollReveal>
        <div className="mb-8 max-w-[820px]">
          <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent">
            {CERTIFICATIONS_HEADER.eyebrow}
          </p>
          <h2
            id="proof-title"
            className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
          >
            {CERTIFICATIONS_HEADER.heading}
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-3 gap-4 max-[1080px]:grid-cols-2 max-[820px]:grid-cols-1">
        {CERTIFICATIONS.map((certification, index) => (
          <ScrollReveal key={`${certification.title}-${certification.period}`} delay={index * 80}>
            <article className="flex min-h-[250px] flex-col rounded-lg border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(16,24,39,0.08)] max-[820px]:min-h-auto">
              <div className="mb-4 flex items-start justify-between gap-3">
                <span
                  className={`inline-flex rounded-md px-2 py-1.5 text-xs font-[900] ${certification.tagStyle}`}
                >
                  {certification.tag}
                </span>
                {certification.available && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-[700] text-accent">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    Private review
                  </span>
                )}
              </div>

              <span className="mb-1 block text-[13px] font-[900] text-brass">
                {certification.period}
              </span>
              <h3 className="m-0 mb-1 text-[18px] leading-[1.22]">{certification.title}</h3>
              <p className="m-0 mb-3 text-[13px] font-[700] text-accent">
                {certification.issuer}
              </p>
              <p className="m-0 flex-1 text-[14px] leading-relaxed text-muted">
                {certification.description}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={350}>
        <p className="mt-5 max-w-[860px] text-[13.5px] leading-relaxed text-muted">
          {CERTIFICATIONS_HEADER.note}{" "}
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
