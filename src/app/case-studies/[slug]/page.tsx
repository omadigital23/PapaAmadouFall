import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "../data";
import { SITE } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | ${SITE.name}`,
    description: cs.intro,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <div className="min-h-screen bg-soft">
      {/* Header */}
      <header className="flex items-center justify-between gap-4 px-[clamp(18px,4vw,56px)] py-[18px] text-white bg-deep border-b border-white/12 max-[820px]:flex-col max-[820px]:items-start">
        <Link
          href="/PapaAmadouFall"
          className="inline-flex items-center gap-2.5 font-[800] no-underline"
        >
          <Image
            src="/PapaAmadouFall/assets/papa-amadou-fall-profile-logo.svg"
            alt=""
            width={36}
            height={36}
            className="block rounded-full object-cover shadow-[0_0_0_2px_rgba(155,227,213,0.42),0_8px_24px_rgba(0,0,0,0.28)]"
          />
          <span>{SITE.name}</span>
        </Link>
        <Link
          href="/PapaAmadouFall/#projects"
          className="text-[#075e4f] font-[900] underline decoration-2 underline-offset-[5px] text-accent-light"
        >
          Back to portfolio
        </Link>
      </header>

      {/* Hero */}
      <section className="px-[clamp(18px,4vw,56px)] py-[clamp(54px,8vw,96px)] text-white bg-[linear-gradient(90deg,rgba(7,16,26,0.98),rgba(7,16,26,0.78)),url('/PapaAmadouFall/assets/papa-amadou-fall-profile-logo.svg')] bg-deep">
        <p className="m-0 mb-3 text-accent-light text-xs font-[900] tracking-[0.1em] uppercase">
          {cs.tag}
        </p>
        <h1 className="max-w-[950px] m-0 text-[clamp(42px,6vw,84px)] leading-[0.98]" style={{ textWrap: "balance" }}>
          {cs.title}
        </h1>
        <p className="max-w-[780px] text-white/78 text-lg">{cs.intro}</p>
      </section>

      {/* Content */}
      <section className="grid max-w-[1120px] grid-cols-3 gap-4 mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(34px,6vw,72px)] max-[820px]:grid-cols-1">
        {cs.sections.map((section) => (
          <article
            key={section.heading}
            className="min-h-[240px] p-6 border border-line rounded-lg bg-white max-[820px]:min-h-auto"
          >
            <h2 className="m-0 mb-3 text-2xl leading-[1.1]">{section.heading}</h2>
            {section.content && <p className="text-muted text-[15px]">{section.content}</p>}
            {section.list && (
              <ul className="m-0 pl-[18px]">
                {section.list.map((item) => (
                  <li key={item} className="text-muted text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
