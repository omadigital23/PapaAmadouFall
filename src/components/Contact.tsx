import { CONTACT, SITE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex scroll-mt-[150px] items-center justify-between gap-8 bg-deep-3 px-[clamp(18px,4vw,56px)] py-[clamp(58px,7vw,92px)] text-white max-[820px]:flex-col max-[820px]:items-start min-[900px]:scroll-mt-[96px]"
      aria-labelledby="contact-title"
    >
      <ScrollReveal>
        <div>
          <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent-light">
            {CONTACT.eyebrow}
          </p>
          <h2
            id="contact-title"
            className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
          >
            {CONTACT.heading}
          </h2>
          <p className="max-w-[760px] text-[17px] leading-relaxed text-white/72">
            {CONTACT.text}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="flex flex-wrap gap-3">
          <a
            id="contact-email-btn"
            href={`mailto:${SITE.email}`}
            className="inline-flex min-h-[46px] items-center justify-center rounded-[7px] border border-accent bg-accent px-[18px] py-3 text-sm font-[900] text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Email
          </a>
          <a
            id="contact-linkedin-btn"
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center rounded-[7px] border border-white/20 bg-white/8 px-[18px] py-3 text-sm font-[900] text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-white/48 hover:bg-white/14"
          >
            LinkedIn
          </a>
          <a
            id="contact-github-btn"
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center rounded-[7px] border border-white/20 bg-white/8 px-[18px] py-3 text-sm font-[900] text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-white/48 hover:bg-white/14"
          >
            GitHub
          </a>
          <a
            id="contact-cv-btn"
            href={SITE.cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center rounded-[7px] border border-white/20 bg-white/8 px-[18px] py-3 text-sm font-[900] text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-white/48 hover:bg-white/14"
          >
            CV
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
