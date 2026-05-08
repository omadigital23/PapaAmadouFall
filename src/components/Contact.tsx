import { CONTACT, SITE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-between gap-8 px-[clamp(18px,4vw,56px)] py-[clamp(58px,7vw,92px)] text-white bg-deep-3 scroll-mt-[86px] max-[820px]:flex-col max-[820px]:items-start"
      aria-labelledby="contact-title"
    >
      <ScrollReveal>
        <div>
          <p className="m-0 mb-3 text-accent-light text-xs font-[900] tracking-[0.1em] uppercase">
            {CONTACT.eyebrow}
          </p>
          <h2
            id="contact-title"
            className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
          >
            {CONTACT.heading}
          </h2>
          <p className="max-w-[760px] text-white/72 text-[17px]">{CONTACT.text}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="flex flex-wrap gap-3">
          <a
            id="contact-email-btn"
            href={`mailto:${SITE.email}`}
            className="inline-flex min-h-[46px] items-center justify-center px-[18px] py-3 rounded-[7px] text-sm font-[900] no-underline bg-accent border border-accent text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Email
          </a>
          <a
            id="contact-github-btn"
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center px-[18px] py-3 rounded-[7px] text-sm font-[900] no-underline bg-white/8 border border-white/20 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/48 hover:bg-white/14"
          >
            GitHub
          </a>
          <a
            id="contact-portfolio-btn"
            href={SITE.url}
            className="inline-flex min-h-[46px] items-center justify-center px-[18px] py-3 rounded-[7px] text-sm font-[900] no-underline bg-white/8 border border-white/20 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/48 hover:bg-white/14"
          >
            Portfolio
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
