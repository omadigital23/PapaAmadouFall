import { PROJECTS, PROJECTS_HEADER, SITE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-soft px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] scroll-mt-[96px]"
      aria-labelledby="projects-title"
    >
      <ScrollReveal>
        <div className="mb-7 flex items-end justify-between gap-6 max-[820px]:flex-col max-[820px]:items-start">
          <div>
            <p className="m-0 mb-3 text-xs font-[900] uppercase tracking-[0.1em] text-accent">
              {PROJECTS_HEADER.eyebrow}
            </p>
            <h2
              id="projects-title"
              className="m-0 max-w-[900px] text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
            >
              {PROJECTS_HEADER.heading}
            </h2>
          </div>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-[900] text-[#075e4f] underline decoration-2 underline-offset-[5px]"
          >
            {PROJECTS_HEADER.githubLink}
          </a>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-3 gap-4 max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
        {PROJECTS.map((project, index) => {
          const isFeatured = project.style === "featured";
          const isLive = project.style === "live";

          return (
            <ScrollReveal
              key={project.title}
              delay={index * 60}
              className={isFeatured ? "col-span-1" : ""}
            >
              <article
                className={`flex min-h-[300px] flex-col rounded-lg border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(16,24,39,0.1)] max-[820px]:min-h-auto ${
                  isFeatured
                    ? "border-[#24364b] bg-deep-2 text-white"
                    : isLive
                      ? "border-accent/24 bg-surface shadow-[0_12px_42px_rgba(16,24,39,0.04)]"
                      : "border-line bg-surface shadow-[0_12px_42px_rgba(16,24,39,0.04)]"
                }`}
              >
                <span
                  className={`mb-4 inline-flex self-start rounded-md px-2 py-1.5 text-xs font-[900] text-white ${
                    isFeatured || isLive ? "bg-accent" : "bg-deep-2"
                  }`}
                >
                  {project.tag}
                </span>
                <h3 className="m-0 mb-2 text-xl leading-[1.18]">{project.title}</h3>
                <p
                  className={`m-0 text-[14.5px] leading-relaxed ${
                    isFeatured ? "text-white/72" : "text-muted"
                  }`}
                >
                  {project.description}
                </p>
                <a
                  href={project.href}
                  {...(project.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={`mt-auto pt-4 font-[900] underline decoration-2 underline-offset-[5px] ${
                    isFeatured ? "text-accent-light" : "text-[#075e4f]"
                  }`}
                >
                  {project.external ? "Visit live site" : "View case study"}
                </a>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
