import type { CaseStudy } from "@/lib/constants";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bilingual-support-ticket-simulator",
    tag: "Support System",
    title: "Bilingual Support Ticket Simulator",
    intro:
      "A planned tool for classifying support tickets, choosing diagnostic steps, and drafting professional replies in English and French.",
    sections: [
      {
        heading: "Purpose",
        content:
          "Create a small support workflow tool that demonstrates ticket triage, priority selection, escalation judgment, and bilingual customer communication.",
      },
      {
        heading: "Core Features",
        content: "",
        list: [
          "Ticket categories: internet, Wi-Fi, modem, router, telephony, account access.",
          "Priority levels: low, normal, urgent.",
          "Suggested troubleshooting checklist.",
          "Customer response templates in English and French.",
          "Escalation recommendation when the issue requires level 2 support.",
        ],
      },
      {
        heading: "Skills Demonstrated",
        content:
          "Technical support workflow thinking, bilingual communication, React data structures, customer empathy, and structured documentation.",
      },
    ],
  },
  {
    slug: "technical-support-knowledge-base",
    tag: "Documentation",
    title: "Technical Support Knowledge Base",
    intro:
      "Structured troubleshooting documentation for connectivity, Wi-Fi, DNS, modem/router support, and escalation decisions.",
    sections: [
      {
        heading: "Purpose",
        content:
          "Show clear technical documentation that a support agent can use to resolve issues consistently and explain steps to non-technical users.",
      },
      {
        heading: "Suggested Sections",
        content: "",
        list: [
          "Internet connection down.",
          "Slow Wi-Fi troubleshooting.",
          "Modem and router restart validation.",
          "DNS issue checklist.",
          "Windows, macOS, Android, and iOS device notes.",
          "Escalation criteria for level 2 support.",
        ],
      },
      {
        heading: "Portfolio Value",
        content:
          "This project supports the User Support Technician profile by proving structured diagnostic thinking and customer-friendly explanation.",
      },
    ],
  },
  {
    slug: "oma-digital-automation-portfolio",
    tag: "Automation",
    title: "OMA Digital Automation",
    intro:
      "Practical automation concepts for lead capture, CRM handoff, API workflows, and small-business response systems.",
    sections: [
      {
        heading: "Purpose",
        content:
          "Use automation to help small businesses capture leads, qualify prospects, notify teams, and respond faster without losing human control.",
      },
      {
        heading: "Relevant Workflows",
        content: "",
        list: [
          "Website form to CRM workflow.",
          "Email or WhatsApp notification handoff.",
          "AI-assisted lead qualification.",
          "API integration and structured data capture.",
        ],
      },
      {
        heading: "Portfolio Value",
        content:
          "This shows the transition from support technician to automation-aware technical operator with business process understanding.",
      },
    ],
  },
  {
    slug: "web-development-portfolio",
    tag: "Web Support",
    title: "Web Development Portfolio",
    intro:
      "Responsive business websites and practical web support work using JavaScript, PHP, React, Next.js, MySQL, and SEO-aware structure.",
    sections: [
      {
        heading: "Purpose",
        content:
          "Present practical web development skills as a technical foundation that complements support, documentation, and automation work.",
      },
      {
        heading: "Live Projects",
        content: "",
        list: [
          "OMA Digital website — omadigital.net",
          "SOJIF Consulting website — sojifconsulting.com",
          "Nubia Aura website — nubiaaura.com",
          "Technical support ticket simulator.",
        ],
      },
      {
        heading: "Portfolio Value",
        content:
          "The goal is not to claim senior developer status. It shows credible technical range for web support and junior technical roles.",
      },
    ],
  },
];
