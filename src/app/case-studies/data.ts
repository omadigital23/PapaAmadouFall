import type { CaseStudy } from "@/lib/constants";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bilingual-support-ticket-simulator",
    tag: "Support System",
    title: "Bilingual Support Ticket Simulator",
    intro:
      "A support workflow concept for classifying tickets, selecting diagnostic steps, and drafting professional replies in English and French.",
    sections: [
      {
        heading: "Purpose",
        content:
          "Show the habits behind strong first-line support: understand the symptom, choose the right checks, communicate clearly, and know when to escalate.",
      },
      {
        heading: "Workflow",
        content: "",
        list: [
          "Ticket categories: internet, Wi-Fi, modem, router, telephony, and account access.",
          "Priority levels: low, normal, urgent, and escalation required.",
          "Troubleshooting checklist tied to symptoms and device context.",
          "Customer response templates in English and French.",
          "Escalation recommendation when level 2 support is needed.",
        ],
      },
      {
        heading: "Value",
        content:
          "The project demonstrates structured support thinking, bilingual communication, and the ability to turn repeated issues into repeatable workflows.",
      },
    ],
  },
  {
    slug: "technical-support-knowledge-base",
    tag: "Documentation",
    title: "Technical Support Knowledge Base",
    intro:
      "Troubleshooting documentation for connectivity, Wi-Fi, DNS, modem/router support, device checks, and escalation decisions.",
    sections: [
      {
        heading: "Purpose",
        content:
          "Give support teams a consistent reference for resolving common issues and explaining next steps to non-technical users.",
      },
      {
        heading: "Sections",
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
        heading: "Value",
        content:
          "This supports the IT support profile by proving clear diagnostic thinking, customer-friendly explanation, and documentation discipline.",
      },
    ],
  },
  {
    slug: "oma-digital-automation-portfolio",
    tag: "Automation",
    title: "OMA Digital Automation",
    intro:
      "Practical automation concepts and self-hosted n8n infrastructure for lead capture, CRM handoff, API workflows, notifications, and small-business response systems.",
    sections: [
      {
        heading: "Purpose",
        content:
          "Use automation to help small businesses capture requests, qualify prospects, notify teams, and respond faster while keeping human control.",
      },
      {
        heading: "Workflows",
        content: "",
        list: [
          "Website form to CRM workflow.",
          "Email or WhatsApp notification handoff.",
          "AI-assisted lead qualification.",
          "API integration and structured data capture.",
          "Self-hosted n8n on a cloud VM using Nginx as a reverse proxy, DNS for n8n.omadigital.net, HTTPS access, and secure routing to the internal n8n service.",
        ],
      },
      {
        heading: "Value",
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
          "OMA Digital website - omadigital.net",
          "SOJIF Consulting website - sojifconsulting.com",
          "Nubia Aura website - nubiaaura.com",
          "Technical support workflow concepts.",
        ],
      },
      {
        heading: "Value",
        content:
          "The goal is not to claim senior developer status. It shows credible technical range for web support and junior technical roles.",
      },
    ],
  },
];
