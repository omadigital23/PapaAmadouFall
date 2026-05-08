"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 right-0 left-0 z-30 flex items-center justify-between gap-6 px-[clamp(18px,4vw,56px)] py-4 text-[#f7fafc] backdrop-blur-[18px] transition-shadow duration-300 max-[820px]:flex-col max-[820px]:items-start max-[820px]:gap-3 ${
        scrolled
          ? "bg-deep/85 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/10"
          : "bg-deep/72 border-b border-white/12"
      }`}
    >
      <a
        href="#top"
        className="inline-flex items-center gap-2.5 font-[800] tracking-normal no-underline"
        aria-label="Papa Amadou Fall home"
        onClick={(e) => handleClick(e, "#top")}
      >
        <Image
          src="/PapaAmadouFall/assets/papa-amadou-fall-profile-logo.svg"
          alt=""
          width={36}
          height={36}
          className="block rounded-full object-cover shadow-[0_0_0_2px_rgba(155,227,213,0.42),0_8px_24px_rgba(0,0,0,0.28)]"
        />
        <span>{SITE.name}</span>
      </a>

      <nav className="flex items-center gap-5.5 text-white/76 text-sm font-[800] max-[820px]:w-full max-[820px]:justify-between max-[820px]:gap-2.5 max-[820px]:text-[13px]" aria-label="Portfolio sections">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="no-underline transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
            onClick={(e) => handleClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
