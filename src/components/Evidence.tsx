import Image from "next/image";
import {
  EVIDENCE_HEADER,
  EVIDENCE_ITEMS,
  EVIDENCE_METRICS,
  INFRASTRUCTURE_STEPS,
  PROJECT_PROOFS,
} from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Evidence() {
  return (
    <section
      id="proof"
      className="scroll-mt-[150px] bg-white px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] min-[900px]:scroll-mt-[96px]"
      aria-labelledby="evidence-title"
    >
      <div className="mx-auto max-w-[1320px]">
        <ScrollReveal>
          <div className="mb-8 grid grid-cols-[minmax(0,0.95fr)_minmax(420px,1fr)] items-end gap-8 max-[1080px]:grid-cols-1">
            <div>
              <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent">
                {EVIDENCE_HEADER.eyebrow}
              </p>
              <h2
                id="evidence-title"
                className="m-0 max-w-[920px] text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
              >
                {EVIDENCE_HEADER.heading}
              </h2>
            </div>
            <p className="m-0 max-w-[680px] text-[17px] leading-relaxed text-muted">
              {EVIDENCE_HEADER.text}
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-5 grid grid-cols-4 gap-3 max-[1080px]:grid-cols-2 max-[680px]:grid-cols-1">
          {EVIDENCE_METRICS.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 60}>
              <article className="min-h-[154px] rounded-lg border border-line bg-soft p-5">
                <strong className="block text-[clamp(30px,3vw,46px)] leading-none text-deep">
                  {metric.value}
                </strong>
                <span className="mt-3 block text-sm font-[900] text-accent">{metric.label}</span>
                <p className="m-0 mt-2 text-[13px] leading-relaxed text-muted">{metric.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-[minmax(0,1.06fr)_minmax(360px,0.94fr)] gap-4 max-[1080px]:grid-cols-1">
          <ScrollReveal>
            <article className="min-h-[420px] overflow-hidden rounded-lg border border-[#24364b] bg-deep text-white shadow-[0_22px_70px_rgba(7,16,26,0.18)]">
              <div className="border-b border-white/10 px-6 py-5">
                <span className="inline-flex rounded-md bg-accent px-2.5 py-1.5 text-xs font-[900] text-white">
                  Live Infrastructure
                </span>
                <h3 className="m-0 mt-4 text-[clamp(24px,3vw,38px)] leading-[1.05]">
                  n8n automation route
                </h3>
                <p className="m-0 mt-3 max-w-[760px] text-[15px] leading-relaxed text-white/68">
                  External traffic reaches a public HTTPS endpoint, passes through Nginx, and is
                  routed to the internal n8n service on a cloud VM.
                </p>
              </div>

              <div
                className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-3 p-5"
                aria-label="n8n deployment flow"
              >
                {INFRASTRUCTURE_STEPS.map((step, index) => (
                  <div
                    key={step.label}
                    className="relative min-h-[164px] min-w-0 rounded-lg border border-white/10 bg-white/[0.06] p-4"
                  >
                    {index < INFRASTRUCTURE_STEPS.length - 1 && (
                      <span
                        className="absolute right-[-14px] top-1/2 hidden h-px w-[14px] bg-accent-light/60 min-[1180px]:block"
                        aria-hidden="true"
                      />
                    )}
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent-light text-xs font-[900] text-deep">
                      {index + 1}
                    </span>
                    <span className="mt-4 block text-[11px] font-[900] uppercase tracking-[0.12em] text-accent-light">
                      {step.label}
                    </span>
                    <strong className="mt-1 block break-words text-[18px] leading-[1.1] [overflow-wrap:anywhere]">
                      {step.value}
                    </strong>
                    <p className="m-0 mt-3 text-[12.5px] leading-relaxed text-white/58">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </ScrollReveal>

          <div className="grid gap-3">
            {EVIDENCE_ITEMS.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 90}>
                <article className="min-h-[132px] rounded-lg border border-line bg-surface p-5 shadow-[0_12px_42px_rgba(16,24,39,0.04)]">
                  <span className="inline-flex rounded-md bg-deep-2 px-2 py-1.5 text-xs font-[900] text-white">
                    {item.tag}
                  </span>
                  <h3 className="m-0 mt-3 text-xl leading-[1.18]">{item.title}</h3>
                  <p className="m-0 mt-2 text-[14.5px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4 max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
          {PROJECT_PROOFS.map((proof, index) => (
            <ScrollReveal key={proof.title} delay={index * 90}>
              <article className="overflow-hidden rounded-lg border border-line bg-surface shadow-[0_14px_50px_rgba(16,24,39,0.06)]">
                <a href={proof.href} target="_blank" rel="noreferrer" className="block no-underline">
                  <div className="relative aspect-[16/10] overflow-hidden bg-soft">
                    <Image
                      src={proof.image}
                      alt={proof.alt}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-[900] uppercase tracking-[0.1em] text-accent">
                      {proof.category}
                    </span>
                    <h3 className="m-0 mt-2 text-xl leading-[1.15]">{proof.title}</h3>
                    <p className="m-0 mt-2 text-[14px] leading-relaxed text-muted">
                      {proof.description}
                    </p>
                    <span className="mt-4 inline-flex font-[900] text-[#075e4f] underline decoration-2 underline-offset-[5px]">
                      Visit live site
                    </span>
                  </div>
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
