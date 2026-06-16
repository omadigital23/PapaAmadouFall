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

export interface EvidenceMetric {
  value: string;
  label: string;
  detail: string;
}

export interface EvidenceItem {
  tag: string;
  title: string;
  description: string;
}

export interface ProjectProof {
  title: string;
  category: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}

export interface InfrastructureStep {
  label: string;
  value: string;
  detail: string;
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

export interface LanguageResult {
  skill: string;
  level: string;
  score?: string;
  detail: string;
  strength: number;
}

export interface LanguageCard {
  language: string;
  flag: string;
  globalLevel: string;
  headline: string;
  source: string;
  description: string;
  results: LanguageResult[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  system: string;
  mention: string;
  description: string;
  tag: string;
  tagStyle: string;
  note?: string;
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
    "Bilingual French-English technical support specialist in British Columbia focused on IT support, telecom troubleshooting, SaaS support, web support, and practical n8n automation infrastructure.",
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
  { label: "Languages", href: "#languages" },
  { label: "Projects", href: "#projects" },
  { label: "Proof", href: "#proof" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  eyebrow: "Campbell River, BC | Trilingual FR/EN/WO | Technical Support",
  firstName: "Papa Amadou",
  lastName: "Fall",
  kicker: "Bilingual Technical Support Specialist with verified French results and real web infrastructure depth.",
  text:
    "I help support teams diagnose issues clearly, document cleanly, communicate in French and English, and bring practical technical range across telecom, SaaS, DNS, HTTPS, reverse proxy, and n8n automation environments.",
} as const;

export const HERO_FACTS = [
  { label: "Target", value: "IT Support / Help Desk" },
  { label: "Experience", value: "10+ years bilingual" },
  { label: "French proof", value: "TCF Canada C1" },
  { label: "Education", value: "Licence Informatique" },
] as const;

export const SIGNALS: SignalItem[] = [
  {
    number: "01",
    title: "Support-first",
    description: "N1 telecom support, customer handling, documentation, and escalation discipline.",
  },
  {
    number: "02",
    title: "TCF Canada",
    description: "French results: C1 listening, C1 reading, C1 writing, and B2 speaking.",
  },
  {
    number: "03",
    title: "10+ years",
    description: "Bilingual FR/EN work experience across telecom support, logistics, and web development.",
  },
  {
    number: "04",
    title: "Evidence-backed",
    description: "CV, live sites, case studies, LinkedIn, and infrastructure proof for recruiter review.",
  },
];

export const PROFILE = {
  eyebrow: "Professional Profile",
  heading: "A calm support operator for real user environments.",
  text:
    "My strongest fit is a bilingual technical support role where clear troubleshooting, precise notes, customer reassurance, and escalation judgment matter. My web background adds technical range, while my telecom support experience keeps the profile focused on users, tickets, and practical resolution.",
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
      "JavaScript, TypeScript, React, Next.js, PHP, Python, MySQL, APIs, n8n, Nginx, DNS, HTTPS, and workflow automation.",
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
      "Lead capture, CRM handoff, API workflows, notifications, and self-hosted n8n infrastructure with Nginx, DNS, HTTPS, and secure routing.",
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
  {
    tag: "Learning App",
    title: "Cloud Cert",
    description:
      "Interactive Google Cloud networking study path with modules, quiz tracking, topology concepts, and bilingual interface.",
    href: "https://cloud-cert.vercel.app/",
    style: "live",
    external: true,
  },
  {
    tag: "SaaS Login",
    title: "OMA Compta",
    description:
      "SYSCOHADA accounting platform login experience for West African SMEs, with clean product positioning and secure access flow.",
    href: "https://oma-compta.vercel.app/login",
    style: "live",
    external: true,
  },
];

export const EVIDENCE_HEADER = {
  eyebrow: "Evidence Layer",
  heading: "Proof that the support profile is backed by real technical delivery.",
  text:
    "The portfolio now connects customer support discipline with visible delivery: live websites, automation infrastructure, DNS/HTTPS deployment, and documented case studies.",
} as const;

export const EVIDENCE_METRICS: EvidenceMetric[] = [
  {
    value: "5+",
    label: "Years support",
    detail: "Telecom N1, ticketing, troubleshooting, escalation, and bilingual customer handling.",
  },
  {
    value: "5",
    label: "Live sites",
    detail: "Business, consulting, commerce, learning, and SaaS surfaces in production.",
  },
  {
    value: "n8n",
    label: "Self-hosted",
    detail: "Cloud VM, Nginx reverse proxy, DNS, HTTPS, and secure routing to the service.",
  },
  {
    value: "C1/B2",
    label: "French proof",
    detail: "TCF Canada results available privately for verified hiring and immigration processes.",
  },
];

export const LANGUAGE_HEADER = {
  eyebrow: "Languages",
  heading: "Trilingual profile — verified French, professional English, native Wolof.",
  text:
    "Language precision matters in support: users need calm explanations, accurate notes, and clear follow-up at every step. French is certified through TCF Canada (C1/B2). English is used daily for technical support, web work, and team communication. Wolof is my mother tongue.",
} as const;

export const LANGUAGE_CARDS: LanguageCard[] = [
  {
    language: "French",
    flag: "🇫🇷",
    globalLevel: "C1",
    headline: "Verified TCF Canada results",
    source: "TCF Canada — February 2026 | Valid until February 2028",
    description:
      "Certified professional French for customer support, documentation, guided troubleshooting, and written follow-up. TCF Canada is the official French proficiency test recognized by IRCC for Canadian immigration and recruitment.",
    results: [
      {
        skill: "Listening",
        level: "C1",
        score: "505 pts",
        detail: "Understand complex customer issues, technical context, and multi-step instructions.",
        strength: 94,
      },
      {
        skill: "Reading",
        level: "C1",
        score: "502 pts",
        detail: "Read procedures, tickets, internal notes, support documentation, and technical specs.",
        strength: 94,
      },
      {
        skill: "Writing",
        level: "C1",
        score: "15 / 20",
        detail: "Write structured follow-ups, customer notes, internal summaries, and escalation reports.",
        strength: 90,
      },
      {
        skill: "Speaking",
        level: "B2",
        score: "13 / 20",
        detail: "Guide users clearly through live troubleshooting steps and explain technical issues.",
        strength: 82,
      },
    ],
  },
  {
    language: "English",
    flag: "🇬🇧",
    globalLevel: "C1",
    headline: "C1 proficiency — 10 years bilingual work experience",
    source: "10 years bilingual at XCEED/Videotron & ELIM Peche | Daily professional use",
    description:
      "Professional English validated by over 10 years of daily bilingual work: technical support at XCEED/Videotron serving English-speaking customers, logistics coordination at ELIM Peche, web development, and recruiter correspondence. C1 level across all professional contexts.",
    results: [
      {
        skill: "Support communication",
        level: "C1 — Professional",
        detail: "Explain diagnostic checks, next steps, and escalation status clearly to English-speaking users and team leads.",
        strength: 88,
      },
      {
        skill: "Technical reading",
        level: "C1 — Professional",
        detail: "Work confidently with technical docs, SaaS tools, APIs, tickets, and deployment material.",
        strength: 90,
      },
      {
        skill: "Written follow-up",
        level: "C1 — Professional",
        detail: "Write clear status updates, issue summaries, customer notes, and async team messages.",
        strength: 86,
      },
      {
        skill: "Spoken interaction",
        level: "C1 — Professional",
        detail: "Handle customer calls, team syncs, interviews, and live interactions confidently in English.",
        strength: 84,
      },
    ],
  },
  {
    language: "Wolof",
    flag: "🇸🇳",
    globalLevel: "Native",
    headline: "Native language — mother tongue",
    source: "First language — spoken natively since childhood in Senegal",
    description:
      "Wolof is my first language, spoken natively since childhood in Thiès, Senegal. It is the most widely spoken language in Senegal and serves as a regional lingua franca across West Africa.",
    results: [
      {
        skill: "Oral communication",
        level: "Native — C2",
        detail: "Full native fluency for any spoken context: informal, professional, and community.",
        strength: 100,
      },
      {
        skill: "Comprehension",
        level: "Native — C2",
        detail: "Complete natural understanding of all registers, accents, and cultural contexts.",
        strength: 100,
      },
      {
        skill: "Cultural literacy",
        level: "Native",
        detail: "Full cultural and contextual fluency across Senegambian speech communities.",
        strength: 100,
      },
    ],
  },
];

export const INFRASTRUCTURE_STEPS: InfrastructureStep[] = [
  {
    label: "DNS",
    value: "n8n.omadigital.net",
    detail: "Custom subdomain configured for external access.",
  },
  {
    label: "Edge",
    value: "Nginx",
    detail: "Reverse proxy routes traffic to the internal n8n service.",
  },
  {
    label: "Security",
    value: "HTTPS",
    detail: "Encrypted browser access for the automation endpoint.",
  },
  {
    label: "Service",
    value: "n8n",
    detail: "Self-hosted workflow automation running on a cloud VM.",
  },
];

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    tag: "Infrastructure",
    title: "n8n self-hosting",
    description:
      "Configured a cloud VM, DNS, Nginx reverse proxy, HTTPS access, and secure routing to an internal n8n service.",
  },
  {
    tag: "Support Transfer",
    title: "Operational troubleshooting",
    description:
      "The same method used in customer support appears in the technical work: isolate symptoms, verify services, document the route, and escalate only when needed.",
  },
  {
    tag: "Delivery",
    title: "Live production surfaces",
    description:
      "The portfolio links to deployed websites and written case studies instead of relying only on claims.",
  },
];

export const PROJECT_PROOFS: ProjectProof[] = [
  {
    title: "OMA Digital",
    category: "Automation agency platform",
    description: "Web, mobile, AI automation positioning, service pages, lead capture, and live business presence.",
    href: "https://www.omadigital.net/en",
    image: "/PapaAmadouFall/assets/evidence-oma-digital.webp",
    alt: "OMA Digital live website screenshot showing automation agency hero section",
  },
  {
    title: "SOJIF Consulting",
    category: "Consulting website",
    description:
      "Corporate site for legal, finance, business structuring, recruitment, and digitalization services.",
    href: "https://www.sojifconsulting.com/en",
    image: "/PapaAmadouFall/assets/evidence-sojif-consulting.webp",
    alt: "SOJIF Consulting live website screenshot showing business structuring and performance hero section",
  },
  {
    title: "Nubia Aura",
    category: "Commerce platform",
    description:
      "Fashion and tailoring platform with product discovery, catalog presentation, and customer support paths.",
    href: "https://www.nubiaaura.com/en",
    image: "/PapaAmadouFall/assets/evidence-nubia-aura.webp",
    alt: "Nubia Aura live website screenshot showing fashion catalog hero section",
  },
  {
    title: "Cloud Cert",
    category: "Learning platform",
    description:
      "Google Cloud networking study interface with module planning, quiz progress, target topology, and bilingual controls.",
    href: "https://cloud-cert.vercel.app/",
    image: "/PapaAmadouFall/assets/evidence-cloud-cert.webp",
    alt: "Cloud Cert live website screenshot showing Google Cloud networking study dashboard",
  },
  {
    title: "OMA Compta",
    category: "Accounting SaaS",
    description:
      "SYSCOHADA accounting login experience for SMEs, with product positioning, clean form layout, and secure access flow.",
    href: "https://oma-compta.vercel.app/login",
    image: "/PapaAmadouFall/assets/evidence-oma-compta.webp",
    alt: "OMA Compta live website screenshot showing SYSCOHADA accounting login page",
  },
];

export const EXPERIENCE_HEADER = {
  eyebrow: "Experience",
  heading: "Customer-facing support, workplace reliability, and technical range.",
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2026 - Present",
    role: "Food Counter Attendant / Customer Service",
    description:
      "Delivered front-line customer service in a high-volume Canadian environment, operating POS systems, resolving client inquiries, and building workplace communication skills transferable to IT support.",
    tags: [
      { label: "Canadian workplace", style: "exp-tag-telecom" },
      { label: "Customer service", style: "exp-tag-csat" },
    ],
  },
  {
    period: "2020 - 2026",
    role: "Bilingual Technical Support Advisor N1 / Agent",
    description:
      "First-contact support for internet connectivity, modem/router configuration, Wi-Fi, and DNS diagnostics. Guided users through troubleshooting, documented tickets, and maintained KPI targets.",
    tags: [
      { label: "Bilingual N1", style: "exp-tag-bilingual" },
      { label: "Telecom", style: "exp-tag-telecom" },
      { label: "Troubleshooting", style: "exp-tag-csat" },
    ],
  },
  {
    period: "2016 - 2020",
    role: "Stock Manager & Assistant Manager",
    description:
      "Managed inventory tracking, production reporting, stock organization, and team coordination. Maintained reporting and documentation discipline transferable to support ticketing.",
    tags: [
      { label: "Stock reporting", style: "exp-tag-stock" },
      { label: "Operations", style: "exp-tag-logistics" },
      { label: "Documentation", style: "exp-tag-docs" },
    ],
  },
  {
    period: "2015 - 2016",
    role: "Web Developer & Maintenance Technician",
    description:
      "Developed and maintained web applications and internal tools using PHP, JavaScript, and MySQL. Performed database updates, troubleshooting, and user support.",
    tags: [
      { label: "Web support", style: "exp-tag-web" },
      { label: "PHP / MySQL", style: "exp-tag-web" },
    ],
  },
];

export const EXPERIENCE_NOTE =
  "Professional continuity across technical support, customer operations, logistics, documentation, and web maintenance. Employment references and supporting documents can be shared privately when appropriate.";

export const CERTIFICATIONS_HEADER = {
  eyebrow: "References",
  heading: "Private employment proof for verified recruiter review.",
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

export const EDUCATION_HEADER = {
  eyebrow: "Education",
  heading: "Academic foundation in information systems and business management.",
} as const;

export const EDUCATION: EducationItem[] = [
  {
    period: "2011 — 2014",
    degree: "Licence en Management Informatisé des Organisations",
    institution: "Université Iba Der Thiam de Thiès",
    system: "LMD System — 180 ECTS Credits",
    mention: "Assez-Bien",
    description:
      "Three-year degree combining business management, information systems, database administration, and organizational computing. Provides the analytical and technical foundation for IT support, SaaS environments, and structured problem-solving.",
    tag: "University Degree",
    tagStyle: "cert-tag-employment",
    note: "WES/ECA credential evaluation in progress for Canadian equivalency.",
  },
];

export const CONTACT = {
  eyebrow: "Contact",
  heading: "Available for bilingual technical support and IT support conversations.",
  text:
    "Best fit: support teams that need calm troubleshooting, clear notes, bilingual customer handling, and technical curiosity backed by real web and automation delivery.",
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
