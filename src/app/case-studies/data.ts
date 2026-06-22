import type { CaseStudy } from "@/lib/constants";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bilingual-support-ticket-simulator",
    tag: "Support System",
    title: "Bilingual Support Ticket Simulator",
    intro:
      "A helpdesk workflow concept for classifying client support tickets, selecting diagnostic steps, setting priority, and drafting professional replies in English and French.",
    sections: [
      {
        heading: "Purpose",
        content:
          "Show the habits behind strong Level 1 and intermediate client support: understand the symptom, choose the right checks, communicate clearly, update the ticket, and know when to escalate.",
      },
      {
        heading: "Workflow",
        content: "",
        list: [
          "Ticket categories: Windows sign-in, Microsoft 365 access, Teams/OneDrive, printers, phones, internet, Wi-Fi, modem, router, telephony, and account access.",
          "Priority levels: low, normal, urgent, and escalation required.",
          "Troubleshooting checklist tied to symptoms, user impact, device context, and network path.",
          "Customer response templates in English and French.",
          "Escalation recommendation when Level 2 support or vendor follow-up is needed.",
        ],
      },
      {
        heading: "Value",
        content:
          "The project demonstrates structured helpdesk thinking, bilingual communication, priority awareness, and the ability to turn repeated issues into repeatable workflows.",
      },
    ],
  },
  {
    slug: "technical-support-knowledge-base",
    tag: "Documentation",
    title: "Technical Support Knowledge Base",
    intro:
      "Troubleshooting documentation for Windows, Microsoft 365, connectivity, Wi-Fi, DNS, modem/router support, peripheral checks, and escalation decisions.",
    sections: [
      {
        heading: "Purpose",
        content:
          "Give support teams a consistent reference for resolving common user issues, documenting next steps, and explaining fixes to non-technical staff.",
      },
      {
        heading: "Sections",
        content: "",
        list: [
          "Internet connection down.",
          "Slow Wi-Fi troubleshooting.",
          "Modem and router restart validation.",
          "Windows sign-in and workstation setup checks.",
          "Microsoft 365, Teams, OneDrive, and SharePoint user support notes.",
          "Printer, phone, scanner, webcam, and mobile device checks.",
          "DNS issue checklist.",
          "Windows, macOS, Android, and iOS device notes.",
          "Escalation criteria for level 2 support.",
        ],
      },
      {
        heading: "Value",
        content:
          "This supports the Client Support Analyst profile by proving clear diagnostic thinking, user-friendly explanation, technical documentation, and escalation discipline.",
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
          "Use automation and reliable infrastructure to help small businesses capture requests, qualify prospects, notify teams, and respond faster while keeping human control.",
      },
      {
        heading: "Workflows",
        content: "",
        list: [
          "Website form to CRM workflow.",
          "Email or WhatsApp notification handoff.",
          "AI-assisted lead qualification.",
          "API integration and structured data capture.",
        ],
      },
      {
        heading: "Infrastructure Proof",
        content:
          "Self-hosted n8n on a cloud VM using Nginx as a reverse proxy, configured DNS for n8n.omadigital.net, enabled HTTPS access, and routed external traffic securely to the internal n8n service.",
        list: [
          "Self-hosted n8n on a cloud VM.",
          "Nginx configured as a reverse proxy.",
          "DNS configured for n8n.omadigital.net.",
          "HTTPS access enabled for secure browser traffic.",
          "External traffic routed securely to the internal n8n service.",
        ],
      },
      {
        heading: "Value",
        content:
          "This shows practical range beyond basic support: customer workflow thinking, deployment discipline, DNS/HTTPS awareness, and the ability to document technical systems clearly.",
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
