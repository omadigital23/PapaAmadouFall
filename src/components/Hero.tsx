import { HERO, HERO_FACTS, SITE } from "@/lib/constants";
import OperationsConsole from "./OperationsConsole";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[clamp(660px,78vh,780px)] items-center overflow-hidden bg-[linear-gradient(135deg,#07101a_0%,#091726_42%,#0c1e32_72%,#07101a_100%)] px-[clamp(18px,4vw,56px)] pb-[54px] pt-[112px] text-white max-[900px]:min-h-auto max-[900px]:pt-[156px]"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(90deg, black, transparent 82%)",
        }}
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1320px] items-center gap-[clamp(38px,6vw,82px)] max-[900px]:flex-col max-[900px]:items-start">
        <div className="w-full max-w-[600px] shrink-0">
          <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent-light">
            {HERO.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="m-0 text-[clamp(48px,4.9vw,76px)] font-[900] leading-[0.98] tracking-normal max-[900px]:text-[clamp(40px,11vw,54px)]"
            style={{ textWrap: "balance" }}
          >
            <span className="block">{HERO.firstName}</span>
            <span className="block">{HERO.lastName}</span>
          </h1>

          <p
            className="mt-5 max-w-[560px] text-[clamp(20px,1.7vw,27px)] font-[800] leading-[1.16] text-[#f7fafc] max-[900px]:text-[20px]"
            style={{ textWrap: "balance" }}
          >
            {HERO.kicker}
          </p>

          <p className="mt-4 max-w-[590px] text-[17px] leading-relaxed text-white/78 max-[900px]:text-base max-[560px]:hidden">
            {HERO.text}
          </p>
          <p className="mt-4 hidden max-w-[590px] text-[15px] leading-relaxed text-white/78 max-[560px]:block">
            5+ years of bilingual desktop and endpoint support, Microsoft 365, Active Directory,
            customer de-escalation, and CRM/ticketing documentation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3" aria-label="Primary links">
            <a
              id="hero-cv-btn"
              href={SITE.cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[7px] border border-accent bg-accent px-6 py-3 text-sm font-[900] text-white no-underline shadow-[0_4px_14px_rgba(13,124,102,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_8px_24px_rgba(13,124,102,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
              aria-label="Open Papa Amadou Fall CV PDF"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a
              id="hero-contact-btn"
              href={`mailto:${SITE.email}`}
              className="btn-cv"
            >
              Email me
            </a>
            <a
              id="hero-github-btn"
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-[7px] border border-white/20 bg-white/8 px-6 py-3 text-sm font-[900] text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-white/48 hover:bg-white/14"
            >
              LinkedIn
            </a>
          </div>

          <dl className="mt-6 grid max-w-[620px] grid-cols-2 gap-2.5">
            {HERO_FACTS.map((fact, index) => (
              <div
                key={fact.label}
                className={`rounded-lg border border-white/12 bg-white/[0.055] px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] ${
                  index >= 2 ? "max-[560px]:hidden" : ""
                }`}
              >
                <dt className="text-[11px] font-[900] uppercase tracking-[0.12em] text-accent-light">
                  {fact.label}
                </dt>
                <dd className="m-0 mt-1 text-[14px] font-[800] leading-snug text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-1 justify-end max-[900px]:w-full max-[900px]:justify-center max-[650px]:hidden">
          <OperationsConsole />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[2] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
