import { PROJECTS_HEADER, PROJECTS, SITE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] bg-soft scroll-mt-[86px]"
      aria-labelledby="projects-title"
    >
      <ScrollReveal>
        <div className="flex items-end justify-between gap-6 mb-7 max-[820px]:flex-col max-[820px]:items-start">
          <div>
            <p className="m-0 mb-3 text-accent text-xs font-[900] tracking-[0.1em] uppercase">
              {PROJECTS_HEADER.eyebrow}
            </p>
            <h2
              id="projects-title"
              className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
            >
              {PROJECTS_HEADER.heading}
            </h2>
          </div>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#075e4f] font-[900] underline decoration-2 underline-offset-[5px] shrink-0"
          >
            {PROJECTS_HEADER.githubLink}
          </a>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-4 gap-4 max-[1080px]:grid-cols-2 max-[820px]:grid-cols-1">
        {PROJECTS.map((project, i) => {
          const isFeatured = project.style === "featured";
          const isLive = project.style === "live";

          return (
            <ScrollReveal key={project.title} delay={i * 60}>
              <article
                className={`flex min-h-[310px] flex-col p-6 border rounded-lg transition-all duration-200 hover:shadow-[0_20px_60px_rgba(16,24,39,0.1)] hover:scale-[1.02] max-[820px]:min-h-auto ${
                  isFeatured
                    ? "text-white bg-deep-2 border-[#24364b]"
                    : isLive
                    ? "bg-surface border-accent/24 shadow-[0_12px_42px_rgba(16,24,39,0.04)]"
                    : "bg-surface border-line shadow-[0_12px_42px_rgba(16,24,39,0.04)]"
                }`}
              >
                <span
                  className={`inline-flex self-start mb-4 px-2 py-1.5 rounded-md text-white text-xs font-[900] ${
                    isFeatured || isLive ? "bg-accent" : "bg-deep-2"
                  }`}
                >
                  {project.tag}
                </span>
                <h3 className="m-0 mb-2 text-xl leading-[1.18]">{project.title}</h3>
                <p className={`m-0 text-[14.5px] ${isFeatured ? "text-white/72" : "text-muted"}`}>
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
