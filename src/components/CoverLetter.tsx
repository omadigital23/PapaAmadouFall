import { COVER_LETTER } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function CoverLetter() {
  return (
    <section
      id="cover-letter"
      className="scroll-mt-[150px] bg-soft px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] min-[900px]:scroll-mt-[96px]"
      aria-labelledby="cover-letter-title"
    >
      <ScrollReveal>
        <div className="mb-8 max-w-[820px]">
          <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent">
            {COVER_LETTER.eyebrow}
          </p>
          <h2
            id="cover-letter-title"
            className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
          >
            {COVER_LETTER.heading}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <article className="relative max-w-[820px] overflow-hidden rounded-lg border border-line bg-surface shadow-[0_14px_46px_rgba(16,24,39,0.05)] transition-all duration-200 hover:shadow-[0_20px_60px_rgba(16,24,39,0.1)]">
          {/* Accent bar at top */}
          <div className="absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,#0d7c66,#2b7de9)]" />

          <div className="p-[clamp(24px,4vw,40px)]">
            {/* Salutation */}
            <p className="m-0 mb-5 text-[16px] font-[700] text-foreground">
              {COVER_LETTER.salutation}
            </p>

            {/* Body paragraphs */}
            <div className="space-y-4">
              {COVER_LETTER.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="m-0 text-[15px] leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Closing */}
            <div className="mt-8">
              <p className="m-0 mb-1 text-[15px] font-[600] text-foreground">
                {COVER_LETTER.closing}
              </p>
              <p className="m-0 mt-3 text-[17px] font-[800] text-foreground">
                {COVER_LETTER.name}
              </p>
              <p className="m-0 mt-1 text-[13px] text-muted">
                {COVER_LETTER.contact}
              </p>
            </div>
          </div>

          {/* LMIA-Exempt badge & Download */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-accent/[0.06] px-[clamp(24px,4vw,40px)] py-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/15 px-2.5 py-1.5 text-[11px] font-[900] tracking-wide text-[#075e4f]">
                ✅ LMIA-EXEMPT
              </span>
              <span className="text-[12px] text-muted">
                Mobilité Francophone (C16) — No employer LMIA cost or delay
              </span>
            </div>
            <a
              href="/PapaAmadouFall/assets/Papa_Amadou_Fall_Cover_Letter.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-2 text-xs font-[800] text-foreground hover:bg-soft transition-colors shadow-sm"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Cover Letter (PDF)
            </a>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
}
