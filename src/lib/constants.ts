// ─── Types ───────────────────────────────────────────────────────────────────

export interface SignalItem {
  number: string;
  title: string;
  description: string;
}

export interface Capability {
  tag: string;
  title: string;
  description: string;
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  href: string;
  style: "featured" | "normal" | "live";
  external?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  tag: string;
  title: string;
  intro: string;
  sections: { heading: string; content: string; list?: string[] }[];
}

// ─── Site ────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "Papa Amadou Fall",
  title: "Papa Amadou Fall | Bilingual Technical Support Specialist",
  description:
    "Papa Amadou Fall is a bilingual French-English technical support specialist focused on IT support, telecom troubleshooting, SaaS support, web support, and automation.",
  url: "https://omadigital23.github.io/PapaAmadouFall/",
  github: "https://github.com/omadigital23",
  email: "fallpape199@gmail.com",
} as const;

// ─── Nav ─────────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: "Bilingual French-English | Campbell River, British Columbia",
  firstName: "Papa Amadou",
  lastName: "Fall",
  kicker: "Technical Support Specialist with web and automation depth.",
  text: "I bring telecom support discipline, clear bilingual communication, structured troubleshooting, and practical web skills to IT support, help desk, SaaS support, and junior web support roles.",
} as const;

// ─── Signal Strip ────────────────────────────────────────────────────────────

export const SIGNALS: SignalItem[] = [
  { number: "01", title: "5+ years", description: "technical support and customer operations" },
  { number: "02", title: "FR / EN", description: "bilingual customer communication" },
  { number: "03", title: "N1 telecom support", description: "internet, modem, router, Wi-Fi, telephony" },
  { number: "04", title: "Web + automation", description: "JavaScript, React, Next.js, APIs, n8n" },
];

// ─── Profile ─────────────────────────────────────────────────────────────────

export const PROFILE = {
  eyebrow: "Professional Profile",
  heading: "A support-first profile built for real customer environments.",
  text: "My best fit is a bilingual technical support role where customer clarity, diagnosis, documentation, and escalation matter. The software background adds range without diluting the support profile.",
} as const;

export const CAPABILITIES: Capability[] = [
  {
    tag: "Support",
    title: "Troubleshooting",
    description:
      "Connectivity checks, modem/router guidance, Wi-Fi performance, telephony issues, and service validation.",
  },
  {
    tag: "Operations",
    title: "Ticket Discipline",
    description:
      "Clear notes, escalation paths, procedure compliance, handling-time awareness, and customer satisfaction focus.",
  },
  {
    tag: "Systems",
    title: "User Environments",
    description:
      "Windows, macOS, Android, iOS, IP basics, DNS basics, cabling, and customer-premise equipment.",
  },
  {
    tag: "Growth",
    title: "Web & Automation",
    description:
      "JavaScript, TypeScript, React, Next.js, PHP, Python, MySQL, APIs, and workflow automation with n8n.",
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const PROJECTS_HEADER = {
  eyebrow: "Selected Work",
  heading: "Projects that prove support discipline, web delivery, and production judgment.",
  githubLink: "github.com/omadigital23",
} as const;

export const PROJECTS: Project[] = [
  {
    tag: "Support System",
    title: "Bilingual Support Ticket Simulator",
    description:
      "A planned tool for classifying support requests, choosing next diagnostic steps, and drafting professional replies in English and French.",
    href: "/PapaAmadouFall/case-studies/bilingual-support-ticket-simulator",
    style: "featured",
  },
  {
    tag: "Documentation",
    title: "Technical Support Knowledge Base",
    description:
      "Troubleshooting notes for connectivity, Wi-Fi, DNS, modem/router issues, and escalation decisions.",
    href: "/PapaAmadouFall/case-studies/technical-support-knowledge-base",
    style: "normal",
  },
  {
    tag: "Automation",
    title: "OMA Digital Automation",
    description:
      "Lead capture, CRM handoff, API workflows, and automation systems for practical small-business operations.",
    href: "/PapaAmadouFall/case-studies/oma-digital-automation-portfolio",
    style: "normal",
  },
  {
    tag: "Web Support",
    title: "Responsive Web Portfolio",
    description:
      "Business websites and support work using JavaScript, PHP, React, Next.js, MySQL, and SEO-aware structure.",
    href: "/PapaAmadouFall/case-studies/web-development-portfolio",
    style: "normal",
  },
  {
    tag: "Business Site",
    title: "OMA Digital",
    description:
      "Agency website presenting web development, mobile applications, AI automation, video creation, and international services.",
    href: "https://www.omadigital.net/en",
    style: "live",
    external: true,
  },
  {
    tag: "Client Site",
    title: "SOJIF Consulting",
    description:
      "Professional consulting website for law, finance, HR, business structuring, recruitment, and digitalization services.",
    href: "https://www.sojifconsulting.com/en",
    style: "live",
    external: true,
  },
  {
    tag: "Commerce Site",
    title: "Nubia Aura",
    description:
      "Fashion and custom tailoring platform with catalog presentation, WhatsApp support, payments, and product discovery.",
    href: "https://www.nubiaaura.com/en",
    style: "live",
    external: true,
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export const EXPERIENCE_HEADER = {
  eyebrow: "Experience",
  heading: "Customer-facing support, Canadian workplace discipline, and technical range.",
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2026 – 2027",
    role: "Tim Hortons — Customer Service Team Member",
    description:
      "Canadian workplace experience, POS operations, customer service, team coordination, punctuality, and shift discipline.",
  },
  {
    period: "2020 – 2026",
    role: "XCM Sourcing — Videotron Technical Support Advisor N1",
    description:
      "First-line support for internet, modem, router, Wi-Fi, telephony, tickets, escalations, and bilingual service.",
  },
  {
    period: "2015 – 2016",
    role: "Net-Transact — Web Developer & Maintenance Technician",
    description:
      "Web application maintenance, PHP, JavaScript, MySQL, updates, troubleshooting, and internal user support.",
  },
];

export const EXPERIENCE_NOTE =
  "Earlier documented experience: Elim Pêche Ltd, 2016–2020. Included as professional continuity and operations background.";

// ─── Target Roles ────────────────────────────────────────────────────────────

export const ROLES_HEADER = {
  eyebrow: "Target Roles",
  heading: "Focused on support roles where bilingual communication is a technical advantage.",
} as const;

export const TARGET_ROLES = [
  "Bilingual Technical Support Specialist",
  "IT Support Technician",
  "Help Desk Technician",
  "Technical Support Analyst",
  "SaaS Support Specialist",
  "Junior Web Support Specialist",
] as const;

// ─── Contact ─────────────────────────────────────────────────────────────────

export const CONTACT = {
  eyebrow: "Contact",
  heading: "Available for bilingual technical support and IT support conversations.",
  text: "Best fit: support teams that need calm troubleshooting, clear notes, bilingual customer handling, and technical curiosity.",
} as const;

// ─── Operations Console (Hero Visual) ────────────────────────────────────────

export const CONSOLE_TICKETS = [
  { label: "Internet down", sub: "Connectivity", color: "#0d7c66" },
  { label: "Slow Wi-Fi", sub: "Performance", color: "#c9822e" },
  { label: "Router config", sub: "Equipment", color: "#2b7de9" },
  { label: "Phone issue", sub: "Telephony", color: "#7c3aed" },
  { label: "DNS check", sub: "Network basics", color: "#c9a82e" },
] as const;

export const CONSOLE_STEPS = [
  "Validate service status",
  "Check modem and router",
  "Confirm Wi-Fi / IP / DNS",
  "Document notes",
  "Escalate when needed",
] as const;

export const CONSOLE_RESPONSES = [
  { tag: "EN", text: "Clear next step and documented checks." },
  { tag: "FR", text: "Réponse claire et suivi structuré." },
  { tag: "NEXT", text: "Ticket ready for escalation if needed." },
] as const;
