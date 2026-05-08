export interface SignalItem {
  number: string;
  title: string;
  description: string;
}

export interface Capability {
  tag: string;
  tagStyle: string;
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

export interface ExperienceTag {
  label: string;
  style: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  description: string;
  tags?: ExperienceTag[];
}

export interface Certification {
  period: string;
  title: string;
  issuer: string;
  description: string;
  tag: string;
  tagStyle: string;
  available: boolean;
}

export interface CaseStudy {
  slug: string;
  tag: string;
  title: string;
  intro: string;
  sections: { heading: string; content: string; list?: string[] }[];
}

export const SITE = {
  name: "Papa Amadou Fall",
  title: "Papa Amadou Fall | Bilingual Technical Support Specialist",
  description:
    "Bilingual French-English technical support specialist focused on IT support, telecom troubleshooting, SaaS support, web support, and practical automation.",
  url: "https://omadigital23.github.io/PapaAmadouFall/",
  basePath: "/PapaAmadouFall",
  github: "https://github.com/omadigital23",
  linkedin: "https://www.linkedin.com/in/papa-amadou-bb95a01a1",
  email: "omadigital23@gmail.com",
  cv: "/PapaAmadouFall/assets/Papa_Amadou_Fall_CV.pdf",
  profileLogo: "/PapaAmadouFall/assets/papa-amadou-fall-profile-logo.svg",
} as const;

export const AVAILABILITY = {
  status: "Open to work",
  location: "British Columbia, Canada",
  timezone: "Pacific Time",
} as const;

export const NAV_LINKS = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  eyebrow: "Bilingual French-English | Technical Support | Web Support",
  firstName: "Papa Amadou",
  lastName: "Fall",
  kicker: "Technical Support Specialist with web and automation depth.",
  text:
    "I help support teams diagnose issues clearly, document cleanly, communicate in French and English, and bring enough web and automation knowledge to work confidently with modern SaaS and IT environments.",
} as const;

export const SIGNALS: SignalItem[] = [
  {
    number: "01",
    title: "Support-first",
    description: "N1 telecom support, customer handling, documentation, and escalation discipline.",
  },
  {
    number: "02",
    title: "FR / EN",
    description: "Professional bilingual communication for users, teams, and written follow-up.",
  },
  {
    number: "03",
    title: "Web + IT",
    description: "React, Next.js, PHP, MySQL, APIs, DNS basics, devices, and user environments.",
  },
  {
    number: "04",
    title: "Reference-ready",
    description: "Documented employment history and work samples available for recruiter review.",
  },
];

export const PROFILE = {
  eyebrow: "Professional Profile",
  heading: "A calm support operator for real customer environments.",
  text:
    "My strongest fit is a bilingual technical support role where clear troubleshooting, precise notes, customer reassurance, and escalation judgment matter. My web background adds technical range without diluting the support profile.",
} as const;

export const CAPABILITIES: Capability[] = [
  {
    tag: "Support",
    tagStyle: "cap-tag-support",
    title: "Troubleshooting",
    description:
      "Connectivity checks, modem and router guidance, Wi-Fi performance, telephony issues, service validation, and clear next steps.",
  },
  {
    tag: "Operations",
    tagStyle: "cap-tag-ops",
    title: "Ticket Discipline",
    description:
      "Structured notes, escalation paths, procedure compliance, handling-time awareness, and practical customer satisfaction habits.",
  },
  {
    tag: "Systems",
    tagStyle: "cap-tag-systems",
    title: "User Environments",
    description:
      "Windows, macOS, Android, iOS, IP basics, DNS basics, cabling, customer-premise equipment, and common SaaS workflows.",
  },
  {
    tag: "Documentation",
    tagStyle: "cap-tag-docs",
    title: "Knowledge Transfer",
    description:
      "Customer-friendly explanations, troubleshooting checklists, internal process notes, and bilingual response templates.",
  },
  {
    tag: "Growth",
    tagStyle: "cap-tag-growth",
    title: "Web & Automation",
    description:
      "JavaScript, TypeScript, React, Next.js, PHP, Python, MySQL, APIs, and workflow automation with n8n.",
  },
];

export const PROJECTS_HEADER = {
  eyebrow: "Selected Work",
  heading: "Work samples that connect support discipline with technical delivery.",
  githubLink: "github.com/omadigital23",
} as const;

export const PROJECTS: Project[] = [
  {
    tag: "Support System",
    title: "Bilingual Support Ticket Simulator",
    description:
      "Support workflow concept for ticket triage, diagnostic steps, priority selection, escalation judgment, and professional replies in English and French.",
    href: "/PapaAmadouFall/case-studies/bilingual-support-ticket-simulator",
    style: "featured",
  },
  {
    tag: "Documentation",
    title: "Technical Support Knowledge Base",
    description:
      "Structured troubleshooting notes for connectivity, Wi-Fi, DNS, modem/router support, device checks, and escalation decisions.",
    href: "/PapaAmadouFall/case-studies/technical-support-knowledge-base",
    style: "normal",
  },
  {
    tag: "Automation",
    title: "OMA Digital Automation",
    description:
      "Lead capture, CRM handoff, API workflow, notification, and automation concepts for small-business operations.",
    href: "/PapaAmadouFall/case-studies/oma-digital-automation-portfolio",
    style: "normal",
  },
  {
    tag: "Web Support",
    title: "Responsive Web Portfolio",
    description:
      "Business websites and support work using JavaScript, PHP, React, Next.js, MySQL, SEO-aware structure, and practical maintenance.",
    href: "/PapaAmadouFall/case-studies/web-development-portfolio",
    style: "normal",
  },
  {
    tag: "Business Site",
    title: "OMA Digital",
    description:
      "Agency website for web development, mobile applications, AI automation, video creation, and international services.",
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

export const EXPERIENCE_HEADER = {
  eyebrow: "Experience",
  heading: "Customer-facing support, workplace reliability, and technical range.",
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2026 - Present",
    role: "Tim Hortons - Customer Service Team Member",
    description:
      "Canadian workplace experience, POS operations, customer service, team coordination, punctuality, and shift discipline.",
    tags: [
      { label: "Canadian workplace", style: "exp-tag-telecom" },
      { label: "Customer service", style: "exp-tag-csat" },
    ],
  },
  {
    period: "2020 - 2026",
    role: "XCM Sourcing - Videotron Technical Support Advisor N1",
    description:
      "First-line support for internet, modem, router, Wi-Fi, telephony, tickets, escalations, and bilingual customer communication.",
    tags: [
      { label: "Bilingual N1", style: "exp-tag-bilingual" },
      { label: "Telecom", style: "exp-tag-telecom" },
      { label: "Troubleshooting", style: "exp-tag-csat" },
    ],
  },
  {
    period: "2016 - 2020",
    role: "Elim Peche Ltd - Logistics & Operations Coordinator",
    description:
      "Stock reporting, inventory reconciliation, supply chain coordination, purchase order tracking, operations support, and internal documentation.",
    tags: [
      { label: "Logistics", style: "exp-tag-logistics" },
      { label: "Stock reports", style: "exp-tag-stock" },
      { label: "Documentation", style: "exp-tag-docs" },
    ],
  },
  {
    period: "2015 - 2016",
    role: "Net-Transact - Web Developer & Maintenance Technician",
    description:
      "Web application maintenance, PHP, JavaScript, MySQL, updates, troubleshooting, and internal user support.",
    tags: [
      { label: "Web support", style: "exp-tag-web" },
      { label: "PHP / MySQL", style: "exp-tag-web" },
    ],
  },
];

export const EXPERIENCE_NOTE =
  "Professional continuity across technical support, customer operations, logistics, documentation, and web maintenance. Employment references and supporting documents can be shared privately when appropriate.";

export const CERTIFICATIONS_HEADER = {
  eyebrow: "Proof & References",
  heading: "Credible evidence without exposing private documents publicly.",
  note:
    "Employment certificates, reference material, and supporting documents are available privately for recruiters and verified hiring processes.",
} as const;

export const CERTIFICATIONS: Certification[] = [
  {
    period: "2020 - 2026",
    title: "Technical Support Advisor N1",
    issuer: "XCM Sourcing / Videotron",
    description:
      "Bilingual first-line telecom support across internet, Wi-Fi, modem/router, telephony, tickets, and escalation workflows.",
    tag: "Employment proof",
    tagStyle: "cert-tag-employment",
    available: true,
  },
  {
    period: "2016 - 2020",
    title: "Logistics & Operations",
    issuer: "Elim Peche Ltd",
    description:
      "Inventory reporting, stock reconciliation, logistics coordination, purchase order tracking, and operational documentation.",
    tag: "Reference-ready",
    tagStyle: "cert-tag-contract",
    available: true,
  },
  {
    period: "2015 - 2016",
    title: "Web Developer & Maintenance",
    issuer: "Net-Transact",
    description:
      "Web application maintenance and internal user support using PHP, JavaScript, MySQL, and practical troubleshooting.",
    tag: "Technical proof",
    tagStyle: "cert-tag-employment",
    available: true,
  },
];

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

export const CONTACT = {
  eyebrow: "Contact",
  heading: "Available for bilingual technical support and IT support conversations.",
  text:
    "Best fit: support teams that need calm troubleshooting, clear notes, bilingual customer handling, and technical curiosity.",
} as const;

export const CONSOLE_TICKETS = [
  { label: "Internet down", sub: "Connectivity", color: "#0d7c66" },
  { label: "Slow Wi-Fi", sub: "Performance", color: "#c9822e" },
  { label: "Router config", sub: "Equipment", color: "#2b7de9" },
  { label: "Phone issue", sub: "Telephony", color: "#7c3aed" },
  { label: "DNS check", sub: "Network basics", color: "#c9a82e" },
] as const;

export const CONSOLE_STEPS = [
  "Confirm symptoms",
  "Check service status",
  "Validate modem/router",
  "Document clear notes",
  "Escalate when needed",
] as const;

export const CONSOLE_RESPONSES = [
  { tag: "EN", text: "Clear next step with documented checks." },
  { tag: "FR", text: "Reponse claire avec suivi structure." },
  { tag: "NEXT", text: "Ticket ready for escalation if needed." },
] as const;
