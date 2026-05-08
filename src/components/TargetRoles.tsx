import { ROLES_HEADER, TARGET_ROLES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function TargetRoles() {
  return (
    <section
      className="grid grid-cols-[minmax(0,0.86fr)_minmax(360px,1fr)] gap-[clamp(30px,5vw,64px)] px-[clamp(18px,4vw,56px)] py-[clamp(62px,8vw,104px)] text-white bg-deep max-[1080px]:grid-cols-1"
      aria-labelledby="roles-title"
    >
      <ScrollReveal>
        <div>
          <p className="m-0 mb-3 text-accent-light text-xs font-[900] tracking-[0.1em] uppercase">
            {ROLES_HEADER.eyebrow}
          </p>
          <h2
            id="roles-title"
            className="m-0 text-[clamp(32px,4.2vw,58px)] leading-[1.02] tracking-normal"
          >
            {ROLES_HEADER.heading}
          </h2>
        </div>
      </ScrollReveal>

      <ul
        className="grid grid-cols-2 gap-2.5 m-0 p-0 list-none max-[820px]:grid-cols-1"
        aria-label="Target roles"
      >
        {TARGET_ROLES.map((role, i) => (
          <ScrollReveal key={role} delay={i * 70}>
            <li className="min-h-[58px] px-[18px] py-[17px] border border-white/14 rounded-lg text-white/84 bg-white/5 text-sm font-[800] transition-all duration-200 hover:bg-white/10 hover:border-white/24">
              {role}
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
