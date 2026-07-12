import { LANGUAGE_CARDS, LANGUAGE_HEADER } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Languages() {
  return (
    <section
      id="languages"
      className="scroll-mt-[150px] bg-soft px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] min-[900px]:scroll-mt-[96px]"
      aria-labelledby="languages-title"
    >
      <div className="mx-auto max-w-[1320px]">
        <ScrollReveal>
          <div className="mb-10 grid grid-cols-[minmax(0,0.9fr)_minmax(380px,1fr)] items-end gap-8 max-[980px]:grid-cols-1">
            <div>
              <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent">
                {LANGUAGE_HEADER.eyebrow}
              </p>
              <h2
                id="languages-title"
                className="m-0 max-w-[880px] text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
              >
                {LANGUAGE_HEADER.heading}
              </h2>
            </div>
            <p className="m-0 max-w-[690px] text-[17px] leading-relaxed text-muted">
              {LANGUAGE_HEADER.text}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,0.85fr)] gap-4 max-[1100px]:grid-cols-2 max-[680px]:grid-cols-1">
          {LANGUAGE_CARDS.map((card, cardIndex) => (
            <ScrollReveal key={card.language} delay={cardIndex * 100}>
              <article className="h-full rounded-lg border border-line bg-white p-6 shadow-[0_14px_46px_rgba(16,24,39,0.05)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(16,24,39,0.1)]">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="text-[26px] leading-none">{card.flag}</span>
                      <span className="inline-flex rounded-md bg-deep-2 px-2.5 py-1.5 text-xs font-[900] text-white">
                        {card.language}
                      </span>
                      <span
                        className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-[11px] font-[900] tracking-wider text-white shadow-[0_4px_14px_rgba(13,124,102,0.25)]"
                        style={{
                          animation: "badgePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                        }}
                      >
                        {card.globalLevel}
                      </span>
                    </div>
                    <h3 className="m-0 text-[clamp(20px,2.2vw,28px)] leading-[1.08]">
                      {card.headline}
                    </h3>
                  </div>
                </div>

                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <p className="m-0 rounded-md border border-accent/20 bg-accent/[0.06] px-3 py-2 text-[12px] font-[800] leading-snug text-[#075e4f]">
                    {card.source}
                  </p>
                  {card.language === "French" && (
                    <a
                      href="/PapaAmadouFall/assets/TCF_Canada_Result.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-2 text-xs font-[800] text-foreground shadow-sm transition-colors hover:bg-soft"
                    >
                      TCF Report (PDF)
                    </a>
                  )}
                </div>

                <p className="m-0 mb-5 max-w-[760px] text-[15px] leading-relaxed text-muted">
                  {card.description}
                </p>

                <div className="grid gap-3" aria-label={`${card.language} language levels`}>
                  {card.results.map((result, resultIndex) => (
                    <div
                      key={`${card.language}-${result.skill}`}
                      className="rounded-lg border border-line bg-page p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <strong className="text-[15px] leading-tight text-ink">
                          {result.skill}
                        </strong>
                        <span className="inline-flex items-center gap-2 rounded-md bg-white px-2.5 py-1 text-[12px] font-[900] text-accent shadow-[0_4px_14px_rgba(16,24,39,0.06)]">
                          {result.level}
                          {result.score ? (
                            <span className="text-[11px] font-[800] text-muted">
                              {result.score}
                            </span>
                          ) : null}
                        </span>
                      </div>
                      <div
                        className="mt-3 h-2 overflow-hidden rounded-full bg-[#dfe7ee]"
                        aria-hidden="true"
                      >
                        <div
                          className="bar-grow h-full rounded-full bg-[linear-gradient(90deg,#0d7c66,#2b7de9)]"
                          style={{
                            width: `${result.strength}%`,
                            animationDelay: `${cardIndex * 200 + resultIndex * 120}ms`,
                          }}
                        />
                      </div>
                      <p className="m-0 mt-3 text-[13px] leading-relaxed text-muted">
                        {result.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
