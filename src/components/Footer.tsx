import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="flex justify-between gap-5 px-[clamp(18px,4vw,56px)] py-6 text-muted bg-white border-t border-line text-[13px] max-[820px]:flex-col">
      <span>&copy; 2026 {SITE.name}</span>
      <span>Built with Next.js &amp; Tailwind CSS</span>
    </footer>
  );
}
