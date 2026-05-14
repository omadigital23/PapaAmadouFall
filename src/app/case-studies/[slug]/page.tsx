import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { CASE_STUDIES } from "../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES.find((item) => item.slug === slug);
  if (!caseStudy) return {};

  return {
    title: `${caseStudy.title} | ${SITE.name}`,
    description: caseStudy.intro,
    alternates: {
      canonical: `${SITE.url}case-studies/${caseStudy.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES.find((item) => item.slug === slug);
  if (!caseStudy) notFound();

  return (
    <div className="min-h-screen bg-soft">
      <header className="flex items-center justify-between gap-4 border-b border-white/12 bg-deep px-[clamp(18px,4vw,56px)] py-[18px] text-white max-[820px]:flex-col max-[820px]:items-start">
        <Link href="/" className="inline-flex items-center gap-2.5 font-[800] no-underline">
          <Image
            src={SITE.profileLogo}
            alt=""
            width={36}
            height={36}
            className="block rounded-full object-cover shadow-[0_0_0_2px_rgba(155,227,213,0.42),0_8px_24px_rgba(0,0,0,0.28)]"
          />
          <span>{SITE.name}</span>
        </Link>
        <Link
          href="/#projects"
          className="font-[900] text-accent-light underline decoration-2 underline-offset-[5px]"
        >
          Back to portfolio
        </Link>
      </header>

      <section
        className="bg-deep px-[clamp(18px,4vw,56px)] py-[clamp(54px,8vw,96px)] text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7,16,26,0.98), rgba(7,16,26,0.82))",
        }}
      >
        <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent-light">
          {caseStudy.tag}
        </p>
        <h1
          className="m-0 max-w-[950px] text-[clamp(42px,6vw,84px)] leading-[0.98]"
          style={{ textWrap: "balance" }}
        >
          {caseStudy.title}
        </h1>
        <p className="max-w-[780px] text-lg leading-relaxed text-white/78">{caseStudy.intro}</p>
      </section>

      <section className="mx-auto grid max-w-[1120px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 px-[clamp(18px,4vw,56px)] py-[clamp(34px,6vw,72px)]">
        {caseStudy.sections.map((section) => (
          <article
            key={section.heading}
            className="min-h-[240px] rounded-lg border border-line bg-white p-6 max-[820px]:min-h-auto"
          >
            <h2 className="m-0 mb-3 text-2xl leading-[1.1]">{section.heading}</h2>
            {section.content && (
              <p className="text-[15px] leading-relaxed text-muted">{section.content}</p>
            )}
            {section.list && (
              <ul className="m-0 pl-[18px]">
                {section.list.map((item) => (
                  <li key={item} className="mb-2 text-[15px] leading-relaxed text-muted">
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
