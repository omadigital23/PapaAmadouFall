import { HERO, SITE } from "@/lib/constants";
import OperationsConsole from "./OperationsConsole";

export default function Hero() {
  return (
    <section
      className="relative flex overflow-hidden min-h-[clamp(650px,78vh,760px)] items-center px-[clamp(18px,4vw,56px)] pt-[98px] pb-[54px] text-white bg-[linear-gradient(135deg,#07101a_0%,#091726_58%,#07101a_100%)] max-[820px]:min-h-auto max-[820px]:pt-[138px] max-[820px]:pb-[54px] max-[820px]:bg-[linear-gradient(180deg,#07101a_0%,#091726_100%)]"
      aria-labelledby="hero-title"
    >
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_80%_-20%,rgba(13,124,102,0.15),transparent)]" />

      <div className="relative z-[1] flex items-center gap-[clamp(40px,6vw,80px)] w-full max-w-[1320px] mx-auto max-[820px]:flex-col">
        {/* Text */}
        <div className="w-full max-w-[560px] shrink-0">
          <p className="m-0 mb-3 text-accent-light text-xs font-[900] tracking-[0.1em] uppercase">
            {HERO.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="m-0 text-[clamp(48px,4.9vw,76px)] leading-[0.98] tracking-normal max-[820px]:text-[clamp(40px,11vw,52px)]"
            style={{ textWrap: "balance" }}
          >
            <span className="block">{HERO.firstName}</span>
            <span className="block">{HERO.lastName}</span>
          </h1>

          <p
            className="max-w-[540px] mt-5 text-[#f7fafc] text-[clamp(22px,1.9vw,30px)] font-[800] leading-[1.12] max-[820px]:max-w-[360px] max-[820px]:text-[23px]"
            style={{ textWrap: "balance" }}
          >
            {HERO.kicker}
          </p>

          <p className="max-w-[560px] mt-4 text-white/78 text-[17px] max-[820px]:text-base">
            {HERO.text}
          </p>

          <div className="flex flex-wrap gap-3 mt-6" aria-label="Primary links">
            <a
              id="hero-contact-btn"
              href={`mailto:${SITE.email}`}
              className="inline-flex min-h-[46px] items-center justify-center px-[18px] py-3 rounded-[7px] text-sm font-[900] no-underline bg-accent border border-accent text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
            >
              Contact
            </a>
            <a
              id="hero-github-btn"
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center px-[18px] py-3 rounded-[7px] text-sm font-[900] no-underline bg-white/8 border border-white/20 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/48 hover:bg-white/14"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Console Visual */}
        <div className="flex-1 flex justify-end max-[820px]:hidden">
          <OperationsConsole />
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute right-0 bottom-0 left-0 z-[2] h-px bg-white/16" />
    </section>
  );
}
