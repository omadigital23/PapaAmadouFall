import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white px-[clamp(18px,4vw,56px)] py-8">
      <div className="flex items-center justify-between gap-5 max-[820px]:flex-col max-[820px]:items-start">
        <div>
          <p className="m-0 text-[13px] text-muted">&copy; 2026 {SITE.name}</p>
          <p className="m-0 mt-1 text-[12px] text-[#a0a8b4]">
            Built with Next.js, React, and Tailwind CSS. Deployed on GitHub Pages.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-[700] text-accent no-underline underline-offset-4 hover:underline"
            aria-label="Papa Amadou Fall on LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-[700] text-muted no-underline transition-colors hover:text-ink"
            aria-label="Papa Amadou Fall GitHub"
          >
            GitHub
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="text-[13px] font-[700] text-muted no-underline transition-colors hover:text-ink"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
