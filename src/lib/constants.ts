export interface SignalItem {
  number: string;
  title: string;
  description: string;
}

export interface QuickFitItem {
  label: string;
  value: string;
  detail: string;
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
  title: "Papa Amadou Fall | Bilingual IT Support & Endpoint Specialist",
  description:
    "Bilingual French-English IT Support Specialist in Campbell River, BC, with 5+ years of desktop and endpoint support, Microsoft 365, Active Directory, networking, CRM, and ticketing experience.",
  url: "https://omadigital23.github.io/PapaAmadouFall/",
  basePath: "/PapaAmadouFall",
  github: "https://github.com/omadigital23",
  linkedin: "https://www.linkedin.com/in/papa-amadou-fall-bb95a01a1",
  email: "fallpape199@gmail.com",
  phone: "+1 250 204 8358",
  phoneHref: "tel:+12502048358",
  cv: "/PapaAmadouFall/assets/Papa_Amadou_Fall_Desktop_Support_Resume.pdf",
  coverLetter: "/PapaAmadouFall/assets/Papa_Amadou_Fall_IT_Support_Cover_Letter.pdf",
  profileLogo: "/PapaAmadouFall/assets/papa-amadou-fall-profile-logo.svg",
} as const;

export const AVAILABILITY = {
  status: "Open to interviews",
  location: "British Columbia, Canada",
  timezone: "Pacific Time",
} as const;

export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Languages", href: "#languages" },
  { label: "Documents", href: "#cover-letter" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  eyebrow: "Campbell River, BC | French-English | Open to relocation",
  firstName: "Papa Amadou",
  lastName: "Fall",
  kicker:
    "Bilingual IT Support Specialist | Desktop & Endpoint Support | Microsoft 365, Active Directory, Networking & Service Desk | French & English",
  text:
    "I bring 5+ years of frontline technical support experience serving Videotron customers through XCM Sourcing. I combine desktop and endpoint troubleshooting, Microsoft 365 and Active Directory fundamentals, customer de-escalation, and clear French-English communication with disciplined ticket documentation.",
} as const;

export const HERO_FACTS = [
  { label: "Experience", value: "5+ years frontline support" },
  { label: "Support Focus", value: "Desktop, endpoint & identity" },
  { label: "Languages", value: "French TCF C1/B2 | English professional" },
  { label: "Mobility", value: "BC based, open to relocation" },
] as const;

export const SIGNALS: SignalItem[] = [
  {
    number: "01",
    title: "Support-ready",
    description: "Level 1 support, escalation judgment, helpdesk notes, and user follow-up.",
  },
  {
    number: "02",
    title: "Bilingual",
    description: "French TCF Canada C1/B2 plus daily professional English support experience.",
  },
  {
    number: "03",
    title: "5+ years",
    description: "Telecom technical support across users, tickets, diagnostics, and escalation.",
  },
  {
    number: "04",
    title: "Recruiter proof",
    description: "CV, case studies, live sites, LinkedIn, and technical evidence in one place.",
  },
];

export const QUICK_FIT_HEADER = {
  eyebrow: "Recruiter Snapshot",
  heading: "The support experience, technical range, and communication skills your users need.",
  text:
    "Strongest fit: bilingual Technical Support, Help Desk, Service Desk, SaaS Support, and customer-facing IT support roles. Secondary fit: junior full-stack roles where React, Next.js, TypeScript, APIs, and SQL are central.",
} as const;

export const QUICK_FIT: QuickFitItem[] = [
  {
    label: "Problems solved",
    value: "Endpoints, access, connectivity",
    detail:
      "Windows, macOS, mobile devices, Microsoft 365, Active Directory fundamentals, account access, Wi-Fi, modem/router, DNS/VPN basics, and common SaaS workflows.",
  },
  {
    label: "Support method",
    value: "Diagnose, document, escalate",
    detail:
      "Confirm symptoms, guide the user, test the likely cause, record clear notes, resolve when possible, and escalate with useful context.",
  },
  {
    label: "Communication",
    value: "French, English and Wolof",
    detail:
      "TCF Canada French at C1 listening, reading and writing, B2 speaking, professional working English, and native Wolof.",
  },
  {
    label: "Work authorization",
    value: "Valid employer-specific permit",
    detail:
      "Authorized to work in Canada under a valid employer-specific permit. Supporting documentation is available to verified recruiters when appropriate.",
  },
] as const;

export const PROFILE = {
  eyebrow: "Professional Profile",
  heading: "Frontline support discipline, backed by practical technical depth.",
  text:
    "Bilingual IT Support Specialist with 5+ years of frontline technical support experience supporting Videotron customers through XCM Sourcing. Strong in desktop and endpoint troubleshooting, Microsoft 365, Active Directory and Microsoft Entra ID fundamentals, Windows/macOS, Android/iOS, TCP/IP, DNS, VPN, Wi-Fi, CRM/ticketing documentation, incident escalation, customer de-escalation, and clear French-English communication.",
} as const;

export const CAPABILITIES: Capability[] = [
  {
    tag: "Support",
    tagStyle: "cap-tag-support",
    title: "Frontline / Intermediate Support",
    description:
      "Remote user support, connectivity checks, modem and router guidance, Wi-Fi performance, telephony issues, account access triage, and clear next steps.",
  },
  {
    tag: "Operations",
    tagStyle: "cap-tag-ops",
    title: "Ticket Discipline",
    description:
      "Helpdesk request updates, priority awareness, structured notes, escalation paths, procedure compliance, follow-up habits, and practical customer satisfaction discipline.",
  },
  {
    tag: "Systems",
    tagStyle: "cap-tag-systems",
    title: "Microsoft 365, Identity & Endpoints",
    description:
      "Microsoft 365, Active Directory fundamentals, Microsoft Entra ID fundamentals, Outlook, Teams, OneDrive, SharePoint, Windows 10/11, macOS, Android, iOS, and Remote Desktop.",
  },
  {
    tag: "Documentation",
    tagStyle: "cap-tag-docs",
    title: "Knowledge Transfer",
    description:
      "Customer-friendly explanations, troubleshooting checklists, user guides, internal procedure notes, bilingual response templates, and escalation summaries.",
  },
  {
    tag: "Growth",
    tagStyle: "cap-tag-growth",
    title: "Web, SaaS & Automation",
    description:
      "JavaScript, TypeScript, React, Next.js, Node.js, PHP, Python, MySQL, REST APIs, Supabase/PostgreSQL, Git/GitHub, Vercel, n8n, DNS, and HTTPS.",
  },
];

export const PROJECTS_HEADER = {
  eyebrow: "Support Evidence",
  heading: "Case studies that show how I think through tickets, users, and systems.",
  githubLink: "github.com/omadigital23",
} as const;

export const PROJECTS: Project[] = [
  {
    tag: "Support System",
    title: "Bilingual Support Ticket Simulator",
    description:
      "Support workflow concept for helpdesk ticket triage, priority selection, diagnostic steps, escalation judgment, and professional replies in English and French.",
    href: "/PapaAmadouFall/case-studies/bilingual-support-ticket-simulator",
    style: "featured",
  },
  {
    tag: "Documentation",
    title: "Technical Support Knowledge Base",
    description:
      "Structured troubleshooting notes for Windows, Microsoft 365, connectivity, Wi-Fi, DNS, modem/router support, peripheral checks, and escalation decisions.",
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
];

export const EVIDENCE_HEADER = {
  eyebrow: "Evidence Layer",
  heading: "Proof that the support profile maps to real work environments.",
  text:
    "The portfolio connects helpdesk discipline with visible delivery: ticket thinking, user documentation, live websites, automation infrastructure, DNS/HTTPS deployment, and documented case studies that a recruiter can inspect quickly.",
} as const;

export const EVIDENCE_METRICS: EvidenceMetric[] = [
  {
    value: "5+",
    label: "Years IT support",
    detail: "Recent client support, ticketing, troubleshooting, escalation, and bilingual customer handling.",
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
  heading: "Verified French, professional working English, and native Wolof.",
  text:
    "French is certified through TCF Canada at C1 listening, reading and writing, and B2 speaking. English is used professionally for support, technical reading and documentation. Wolof is my native language.",
} as const;

export const LANGUAGE_CARDS: LanguageCard[] = [
  {
    language: "French",
    flag: "FR",
    globalLevel: "C1",
    headline: "Verified TCF Canada results",
    source: "TCF Canada - February 2026 | Valid until February 2028",
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
    flag: "EN",
    globalLevel: "Professional",
    headline: "Professional working proficiency",
    source: "Daily professional use in support, web work, documentation, and recruiter communication",
    description:
      "Professional English used for customer support, technical reading, documentation, web projects, and recruiter communication. I keep the claim practical and evidence-based: strong enough for bilingual support roles, without presenting it as an official English test result.",
    results: [
      {
        skill: "Support communication",
        level: "Professional",
        detail: "Explain diagnostic checks, next steps, and escalation status clearly to English-speaking users and team leads.",
        strength: 88,
      },
      {
        skill: "Technical reading",
        level: "Professional",
        detail: "Work confidently with technical docs, SaaS tools, APIs, tickets, and deployment material.",
        strength: 90,
      },
      {
        skill: "Written follow-up",
        level: "Professional",
        detail: "Write clear status updates, issue summaries, customer notes, and async team messages.",
        strength: 86,
      },
      {
        skill: "Spoken interaction",
        level: "Professional",
        detail: "Handle customer calls, team syncs, interviews, and live interactions confidently in English.",
        strength: 84,
      },
    ],
  },
  {
    language: "Wolof",
    flag: "WO",
    globalLevel: "Native",
    headline: "Native language",
    source: "First language - spoken natively since childhood in Senegal",
    description:
      "Native Wolof communication with full cultural and contextual fluency for spoken customer, team, and community interactions.",
    results: [
      {
        skill: "Oral communication",
        level: "Native",
        detail: "Natural fluency across informal, professional, and community settings.",
        strength: 100,
      },
      {
        skill: "Comprehension",
        level: "Native",
        detail: "Complete understanding of everyday speech, context, and regional expression.",
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
  heading: "Technical support first, with Canadian workplace reliability.",
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Dec 2020 - Jun 2026",
    role: "Technical Support Representative - XCM Sourcing (Videotron Project)",
    description:
      "Resolved internet, Wi-Fi, modem/router, telephony, mobile service, and account access issues for residential customers. Used troubleshooting procedures to identify root causes, restore service, document cases in CRM/ticketing tools, and escalate complex incidents with clear context. Delivered bilingual French-English support while maintaining quality and customer satisfaction expectations.",
    tags: [
      { label: "Bilingual FR/EN", style: "exp-tag-bilingual" },
      { label: "Desktop / Endpoint", style: "exp-tag-web" },
      { label: "Helpdesk / CRM", style: "exp-tag-docs" },
      { label: "Telecom", style: "exp-tag-telecom" },
      { label: "Troubleshooting", style: "exp-tag-csat" },
    ],
  },
  {
    period: "2015 - Present",
    role: "Web Developer / Automation Builder - OMA Digital (Freelance / Part-time)",
    description:
      "Built and maintained websites, support workflows, and automation tools using React, Next.js, TypeScript, JavaScript, Node.js, APIs, SQL, and Supabase/PostgreSQL. This project-based experience supports SaaS, implementation, and customer-facing technical support roles by combining product troubleshooting, documentation, deployment awareness, and user guidance.",
    tags: [
      { label: "React / Next.js", style: "exp-tag-web" },
      { label: "SQL / APIs", style: "exp-tag-web" },
      { label: "SaaS support", style: "exp-tag-docs" },
    ],
  },
  {
    period: "Jun 2026 - Present",
    role: "Customer Service Team Member - Tim Hortons",
    description:
      "Front-line customer service in a high-volume Canadian workplace. Operates POS systems, resolves customer inquiries, coordinates with team members, follows procedures, and builds Canadian workplace references while actively pursuing a qualified IT support role.",
    tags: [
      { label: "Canadian workplace", style: "exp-tag-telecom" },
      { label: "Customer service", style: "exp-tag-csat" },
      { label: "Campbell River, BC", style: "exp-tag-bilingual" },
    ],
  },
];

export const EXPERIENCE_NOTE =
  "Main profile: bilingual technical support and service desk readiness, strengthened by project-based web/SaaS support work and recent Canadian customer-service experience. Employment references and supporting documents can be shared privately when appropriate.";

export const CERTIFICATIONS_HEADER = {
  eyebrow: "References",
  heading: "Private employment proof for verified recruiter review.",
  note:
    "Employment certificates, reference material, and supporting documents are available privately for recruiters and verified hiring processes.",
} as const;

export const CERTIFICATIONS: Certification[] = [
  {
    period: "Dec 2020 - Jun 2026",
    title: "Technical Support Representative",
    issuer: "XCM Sourcing / Videotron",
    description:
      "Bilingual first-line telecom support across internet, Wi-Fi, modem/router, telephony, ticketing/CRM, and escalation workflows.",
    tag: "Employment proof",
    tagStyle: "cert-tag-employment",
    available: true,
  },
  {
    period: "2015 - Present",
    title: "Project-Based Web & Automation Support",
    issuer: "OMA Digital",
    description:
      "Portfolio evidence for React/Next.js, TypeScript, APIs, SQL, Supabase/PostgreSQL, deployment awareness, and SaaS-style support workflows.",
    tag: "Portfolio proof",
    tagStyle: "cert-tag-contract",
    available: true,
  },
  {
    period: "Jun 2026 - Present",
    title: "Canadian Customer Service Experience",
    issuer: "Tim Hortons",
    description:
      "Recent Canadian workplace experience showing reliability, punctuality, customer service, procedure discipline, and teamwork.",
    tag: "Workplace proof",
    tagStyle: "cert-tag-employment",
    available: true,
  },
];

export const ROLES_HEADER = {
  eyebrow: "Target Roles",
  heading: "Focused on bilingual support first, with a selective junior full-stack track.",
} as const;

export const TARGET_ROLES = [
  "Technical Support Representative",
  "Bilingual IT Support Specialist",
  "IT Support Specialist",
  "Desktop Support Technician",
  "Endpoint Support Technician",
  "Help Desk Analyst",
  "Help Desk Technician",
  "Service Desk Analyst",
  "IT Support Technician",
  "Customer Support Engineer (SaaS)",
  "Implementation Support Specialist",
  "Junior Full-Stack Developer",
] as const;

export const EDUCATION_HEADER = {
  eyebrow: "Education",
  heading: "Academic foundation in information systems and business management.",
} as const;

export const EDUCATION: EducationItem[] = [
  {
    period: "2011 - 2014",
    degree: "Bachelor's Degree in Management Information Systems",
    institution: "University of Thies, Senegal",
    system: "Three-year university degree",
    mention: "Information systems, databases, web development, software engineering",
    description:
      "Three-year degree combining business management, information systems, database administration, and organizational computing. Provides the analytical and technical foundation for IT support, SaaS environments, and structured problem-solving.",
    tag: "University Degree",
    tagStyle: "cert-tag-employment",
  },
];

export const CONTACT = {
  eyebrow: "Contact",
  heading: "Available to interview for bilingual technical support roles.",
  text:
    "Based in Campbell River, BC, with 5+ years of technical, desktop and endpoint support experience. Open to relocation for the right IT Support, Help Desk, Service Desk, Desktop Support, Endpoint Support, SaaS Support, or Customer Support Engineer opportunity.",
} as const;

export const COVER_LETTER = {
  eyebrow: "Application Documents",
  heading: "A consistent CV, cover letter, and portfolio for recruiter review.",
  salutation: "Dear Hiring Manager,",
  body: [
    "I am applying for IT Support, Help Desk, Service Desk and Technical Support opportunities where bilingual communication, structured troubleshooting and strong customer service are essential. With more than five years of frontline technical support experience at XCM Sourcing on the Videotron project, I can help users resolve technical problems clearly, calmly and efficiently.",
    "In this role, I supported Videotron customers with internet connectivity, Wi-Fi, modem and router configuration, mobile devices, telephony, account access and service-related issues. I diagnosed problems remotely, guided non-technical users through step-by-step solutions in French and English, documented cases in CRM and ticketing workflows, and escalated complex incidents with complete troubleshooting notes.",
    "My technical foundation includes Microsoft 365, Outlook, Teams, OneDrive, SharePoint, Windows 10/11, macOS, Android/iOS, Active Directory and Microsoft Entra ID fundamentals, TCP/IP, DNS, VPN, Wi-Fi, modem/router troubleshooting and Remote Desktop. My additional experience with web development and automation - including JavaScript, TypeScript, PHP, Python, MySQL, REST APIs, Git/GitHub, Supabase and n8n - strengthens my systems thinking, problem-solving and ability to learn new tools quickly.",
    "Since relocating to British Columbia, I have continued building Canadian workplace experience at Tim Hortons while actively pursuing a long-term return to the IT support field. I am known for patience, professional communication, accurate documentation, customer de-escalation and a practical approach to resolving technical issues.",
    "I am currently authorized to work in Canada under a valid employer-specific LMIA-exempt Francophone Mobility work permit. Changing employers requires the appropriate employer-supported LMIA-exempt process before I can start. I am also open to relocation for the right IT support opportunity.",
    "I would welcome the opportunity to discuss how my bilingual communication skills, technical support experience and practical technology background can help your team deliver reliable and professional support."
  ],
  closing: "Sincerely,",
  name: "Papa Amadou FALL",
  contact: "fallpape199@gmail.com - www.linkedin.com/in/papa-amadou-fall-bb95a01a1 - omadigital23.github.io/PapaAmadouFall",
} as const;

export const CONSOLE_TICKETS = [
  { label: "Internet down", sub: "Connectivity", color: "#0d7c66" },
  { label: "M365 access", sub: "User account", color: "#c9822e" },
  { label: "Printer issue", sub: "Peripheral", color: "#2b7de9" },
  { label: "Phone issue", sub: "Telephony", color: "#7c3aed" },
  { label: "Windows login", sub: "Workstation", color: "#c9a82e" },
] as const;

export const CONSOLE_STEPS = [
  "Confirm symptoms",
  "Check account/device",
  "Validate network path",
  "Document clear notes",
  "Escalate when needed",
] as const;

export const CONSOLE_RESPONSES = [
  { tag: "EN", text: "Clear next step with documented checks." },
  { tag: "FR", text: "Reponse claire avec suivi structure." },
  { tag: "NEXT", text: "Ticket ready for escalation if needed." },
] as const;
