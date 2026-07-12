from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]

ACCENT = colors.HexColor("#0d7c66")
INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#4f5f73")
LINE = colors.HexColor("#d7dee8")
SOFT = colors.HexColor("#f4f7fb")


PROFILE = {
    "name": "PAPA AMADOU FALL",
    "title": "Bilingual IT Support Specialist | Service Desk Analyst | Customer Support Engineer (SaaS)",
    "location": "Campbell River, British Columbia, Canada",
    "phone": "+1 250 204 8358",
    "email": "fallpape199@gmail.com",
    "linkedin": "www.linkedin.com/in/papa-amadou-fall-bb95a01a1",
    "portfolio": "omadigital23.github.io/PapaAmadouFall",
    "github": "github.com/omadigital23",
}


WORK_AUTH = (
    "Currently in Canada on an employer-specific work permit. A new employer-supported authorization "
    "would be required before starting with a new employer; the LMIA-exempt Francophone Mobility pathway "
    "may be an option for eligible roles outside Quebec."
)


def styles():
    base = getSampleStyleSheet()
    base.add(
        ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=20,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=2,
        )
    )
    base.add(
        ParagraphStyle(
            "TitleLine",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.2,
            leading=11,
            textColor=ACCENT,
            alignment=TA_CENTER,
            spaceAfter=5,
        )
    )
    base.add(
        ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.5,
            leading=9,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=2,
        )
    )
    base.add(
        ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.4,
            leading=10.5,
            textColor=INK,
            spaceBefore=4,
            spaceAfter=3,
        )
    )
    base.add(
        ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.15,
            leading=9.8,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=2,
        )
    )
    base.add(
        ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.4,
            leading=8.8,
            textColor=MUTED,
            spaceAfter=1.5,
        )
    )
    base.add(
        ParagraphStyle(
            "Job",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.35,
            leading=9.6,
            textColor=INK,
            spaceBefore=2,
            spaceAfter=1,
        )
    )
    base.add(
        ParagraphStyle(
            "ResumeBullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.8,
            leading=9.1,
            leftIndent=8,
            firstLineIndent=-6,
            textColor=INK,
            spaceAfter=1,
        )
    )
    return base


def p(text, style):
    return Paragraph(text.replace("&", "&amp;"), style)


def section(title, st):
    return [
        Spacer(1, 2),
        Table(
            [[p(title.upper(), st["Section"])]],
            colWidths=[7.25 * inch],
            style=[
                ("LINEBELOW", (0, 0), (-1, -1), 0.8, ACCENT),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ],
        ),
    ]


def bullet(text, st):
    return p("- " + text, st["ResumeBullet"])


def job(title, period, bullets, st):
    story = [p(f"{title} | {period}", st["Job"])]
    story.extend(bullet(item, st) for item in bullets)
    return story


def doc(path, title=None):
    return SimpleDocTemplate(
        str(path),
        pagesize=letter,
        rightMargin=0.45 * inch,
        leftMargin=0.45 * inch,
        topMargin=0.36 * inch,
        bottomMargin=0.36 * inch,
        title=title,
        author="Papa Amadou FALL",
    )


def build_cv(path):
    st = styles()
    story = [
        p(PROFILE["name"], st["Name"]),
        p(PROFILE["title"], st["TitleLine"]),
        p(
            f'{PROFILE["location"]} | {PROFILE["phone"]} | {PROFILE["email"]}',
            st["Contact"],
        ),
        p(
            f'LinkedIn: {PROFILE["linkedin"]} | Portfolio: {PROFILE["portfolio"]} | GitHub: {PROFILE["github"]}',
            st["Contact"],
        ),
    ]

    story += section("Professional Profile", st)
    story.append(
        p(
            "Bilingual French-English technical support professional with 5+ years of customer-facing "
            "troubleshooting experience, plus full-stack web and SaaS support skills. Strong fit for "
            "Technical Support Representative, Help Desk Analyst, Service Desk Analyst, Customer Support "
            "Engineer, SaaS Support, Implementation Support, and junior full-stack roles where support and "
            "product troubleshooting overlap.",
            st["Body"],
        )
    )

    story += section("Work Authorization", st)
    story.append(p(WORK_AUTH, st["Small"]))

    story += section("Core Skills", st)
    skills = [
        [
            p(
                "<b>Support / Service Desk</b><br/>Customer troubleshooting, CRM/ticketing, incident notes, escalation, remote diagnostics, technical documentation",
                st["Small"],
            ),
            p(
                "<b>IT / Systems</b><br/>Windows, Microsoft 365, Teams, OneDrive, SharePoint basics, DNS, VPN, IP networking, Wi-Fi, modem/router, telephony",
                st["Small"],
            ),
        ],
        [
            p(
                "<b>Web / SaaS</b><br/>React, Next.js, TypeScript, JavaScript, Node.js, REST APIs, Supabase/PostgreSQL, SQL, Git, GitHub, Vercel",
                st["Small"],
            ),
            p(
                "<b>Customer / Operations</b><br/>Bilingual FR/EN communication, customer service, problem solving, teamwork, procedure discipline, fast learning",
                st["Small"],
            ),
        ],
    ]
    story.append(
        Table(
            skills,
            colWidths=[3.55 * inch, 3.55 * inch],
            style=TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), SOFT),
                    ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                    ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 6),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                    ("TOPPADDING", (0, 0), (-1, -1), 4),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ]
            ),
        )
    )

    story += section("Professional Experience", st)
    story += job(
        "Bilingual Technical Support Representative - XCM Sourcing / Videotron",
        "Dec 2020 - Jun 2026",
        [
            "Supported Videotron customers with internet connectivity, Wi-Fi, modem/router, telephony, mobile service, and account access issues.",
            "Diagnosed symptoms, guided users step by step, documented cases in CRM/ticketing systems, and escalated complex incidents with clear context.",
            "Delivered calm French-English support under pressure while following procedures and quality expectations.",
        ],
        st,
    )
    story += job(
        "Project-Based Full-Stack Developer / Web & Automation Support - OMA Digital",
        "2015 - Present",
        [
            "Built and maintained web, SaaS-style, and automation projects with React, Next.js, TypeScript, Node.js, REST APIs, Supabase/PostgreSQL, SQL, Git, GitHub, and Vercel.",
            "Created support-oriented portfolio case studies covering ticket triage, troubleshooting, documentation, deployment awareness, and user guidance.",
        ],
        st,
    )
    story += job(
        "Customer Service Team Member - Tim Hortons",
        "Jun 2026 - Present",
        [
            "Canadian workplace experience in a fast-paced customer environment: POS operation, customer inquiries, teamwork, procedures, punctuality, and service reliability.",
        ],
        st,
    )

    story += section("Education", st)
    story.append(
        p(
            "<b>Bachelor's Degree in Management Information Systems</b> - University of Thies, Senegal | 2011 - 2014<br/>"
            "Database design, SQL/MySQL, algorithms, web development, software engineering, and organizational information systems.",
            st["Small"],
        )
    )

    story += section("Languages", st)
    story.append(
        p(
            "French: fluent, TCF Canada C1 listening/reading/writing and B2 speaking | English: professional working proficiency | Wolof: native",
            st["Small"],
        )
    )

    doc(path, "Papa Amadou FALL CV").build(story)


def build_cover_letter(path):
    st = styles()
    body = [
        p(PROFILE["name"], st["Name"]),
        p(PROFILE["title"], st["TitleLine"]),
        p(
            f'{PROFILE["location"]} | {PROFILE["phone"]} | {PROFILE["email"]}',
            st["Contact"],
        ),
        p(
            f'LinkedIn: {PROFILE["linkedin"]} | Portfolio: {PROFILE["portfolio"]}',
            st["Contact"],
        ),
        Spacer(1, 12),
        p("Dear Hiring Manager,", st["Body"]),
        Spacer(1, 4),
    ]

    paragraphs = [
        "I am applying for bilingual Technical Support, Help Desk, Service Desk, Customer Support Engineer, SaaS Support, or Implementation Support roles where customer-facing troubleshooting, clear documentation, and calm communication are important.",
        "I bring more than five years of technical support experience from XCM Sourcing / Videotron, where I helped customers resolve internet connectivity, Wi-Fi, modem/router, telephony, mobile service, and account access issues. I am comfortable confirming symptoms, guiding non-technical users step by step, documenting cases in CRM/ticketing tools, and escalating complex incidents with useful context.",
        "My strongest value is the combination of bilingual French-English support experience and full-stack technical knowledge. Alongside support work, I have built and maintained web and automation projects using React, Next.js, TypeScript, Node.js, REST APIs, Supabase/PostgreSQL, SQL, Git, GitHub, and Vercel. This helps me understand SaaS products, user workflows, technical documentation, and the bridge between customers and engineering teams.",
        "I hold a Bachelor's Degree in Management Information Systems and I am currently based in Campbell River, British Columbia. I am open to opportunities in British Columbia or remote Canada, especially roles involving French/English support, SaaS tools, CRM/ticketing, Microsoft 365, Windows, networking basics, SQL, or product troubleshooting.",
        WORK_AUTH + " I am happy to discuss a compliant start plan if we move forward.",
        "Thank you for your time and consideration. I would welcome the opportunity to discuss how my support experience, bilingual communication, and technical background can help your team deliver reliable customer support.",
    ]
    body.extend(p(text, st["Body"]) for text in paragraphs)
    body += [
        Spacer(1, 10),
        p("Sincerely,", st["Body"]),
        p("Papa Amadou FALL", st["Job"]),
    ]

    doc(path, "Papa Amadou FALL Cover Letter").build(body)


def main():
    destinations = [
        ROOT / "Papa_Amadou_FALL_CV.pdf",
        ROOT / "public" / "assets" / "Papa_Amadou_Fall_CV.pdf",
        ROOT / "docs" / "assets" / "Papa_Amadou_Fall_CV.pdf",
    ]
    cover_destinations = [
        ROOT / "Papa_Amadou_FALL_Cover_Letter.pdf",
        ROOT / "public" / "assets" / "Papa_Amadou_Fall_Cover_Letter.pdf",
        ROOT / "docs" / "assets" / "Papa_Amadou_Fall_Cover_Letter.pdf",
    ]

    for path in destinations + cover_destinations:
        path.parent.mkdir(parents=True, exist_ok=True)

    for path in destinations:
        build_cv(path)
    for path in cover_destinations:
        build_cover_letter(path)

    print("Generated application PDFs:")
    for path in destinations + cover_destinations:
        print(f"- {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
