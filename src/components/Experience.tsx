"use client";

import { EXPERIENCE_HEADER, EXPERIENCE, EXPERIENCE_NOTE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] scroll-mt-[96px]"
      aria-labelledby="experience-title"
    >
      <ScrollReveal>
        <div className="max-w-[820px]">
          <p className="m-0 mb-3 text-accent text-xs font-[900] tracking-[0.1em] uppercase">
            {EXPERIENCE_HEADER.eyebrow}
          </p>
          <h2
            id="experience-title"
            className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
          >
            {EXPERIENCE_HEADER.heading}
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-7 grid grid-cols-4 gap-4 max-[1080px]:grid-cols-2 max-[820px]:grid-cols-1">
        {EXPERIENCE.map((exp, i) => (
          <ScrollReveal key={exp.period} delay={i * 100}>
            <article className="relative flex min-h-[240px] flex-col rounded-lg border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(16,24,39,0.08)] max-[820px]:min-h-auto">
              <span className="block mb-3.5 text-brass text-[13px] font-[900]">{exp.period}</span>
              <h3 className="m-0 mb-2 text-xl leading-[1.18]">{exp.role}</h3>
              <p className="m-0 text-muted text-[14.5px] flex-1 leading-relaxed">{exp.description}</p>
              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4" aria-label="Experience highlights">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`inline-flex items-center px-2 py-1 rounded-md text-[11px] font-[900] tracking-wide ${tag.style}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <p className="max-w-[860px] mt-5 text-[#7a8595] text-[13.5px] leading-relaxed">
          {EXPERIENCE_NOTE}
        </p>
      </ScrollReveal>
    </section>
  );
}
