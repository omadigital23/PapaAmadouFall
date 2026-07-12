"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import { AVAILABILITY, NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      id="site-header"
      className={`fixed left-0 right-0 top-0 z-30 flex items-center justify-between gap-6 px-[clamp(18px,4vw,56px)] py-3.5 text-[#f7fafc] backdrop-blur-[18px] transition-shadow duration-300 max-[900px]:gap-3 max-[700px]:flex-wrap ${
        scrolled
          ? "border-b border-white/10 bg-deep/88 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "border-b border-white/12 bg-deep/72"
      }`}
    >
      <a
        href="#top"
        className="inline-flex items-center gap-2.5 font-[800] tracking-normal no-underline"
        aria-label="Papa Amadou Fall home"
        onClick={(event) => handleClick(event, "#top")}
      >
        <Image
          src={SITE.profileLogo}
          alt=""
          width={42}
          height={42}
          className="block rounded-xl object-contain shadow-[0_0_0_2px_rgba(155,227,213,0.42),0_8px_24px_rgba(0,0,0,0.28)]"
          priority
        />
        <span>{SITE.name}</span>
      </a>

      <button
        type="button"
        className="ml-auto hidden min-h-10 items-center gap-2 rounded-lg border border-white/18 bg-white/8 px-3 text-sm font-[800] text-white max-[700px]:inline-flex"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
        Menu
      </button>

      <div
        id="mobile-navigation"
        className={`${menuOpen ? "max-[700px]:flex" : "max-[700px]:hidden"} flex items-center gap-5 max-[900px]:gap-3 max-[700px]:w-full max-[700px]:flex-col max-[700px]:items-stretch`}
      >
        <nav
          className="flex items-center gap-5 text-sm font-[800] text-white/76 max-[900px]:gap-3 max-[700px]:grid max-[700px]:grid-cols-2 max-[700px]:gap-2 max-[700px]:text-[13px]"
          aria-label="Portfolio sections"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 no-underline transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light max-[700px]:text-center"
              onClick={(event) => {
                handleClick(event, link.href);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Papa Amadou Fall on LinkedIn"
          className="text-white/60 transition-colors duration-200 hover:text-white max-[760px]:hidden"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-accent/40 bg-accent/20 px-3 py-1.5 text-[11px] font-[800] text-accent-light no-underline transition-all duration-200 hover:bg-accent/30 max-[700px]:justify-center"
          aria-label={`${AVAILABILITY.status} - ${AVAILABILITY.location}`}
        >
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light"
            style={{ animation: "pulseDot 2.4s ease-in-out infinite" }}
          />
          <span className="truncate">
            {AVAILABILITY.status} / {AVAILABILITY.location}
          </span>
        </a>
      </div>
    </header>
  );
}
