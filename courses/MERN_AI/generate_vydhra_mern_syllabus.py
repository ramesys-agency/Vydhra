from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak

OUTPUT = "/home/ptspl19/Desktop/git-projects/Freelance/Production/Vydhra/courses/MERN_AI/Vydhra_MERN_STACK_Job_Ready_Bootcamp_Generated.pdf"

weeks = [
    ("Module 01", "Week 1 - Web Foundations", [
        "HTML Semantic Structure, SEO Basics, Forms & Input Types",
        "CSS Box Model, Flexbox, Tailwind CSS & Responsive Design",
    ], "Build a modern, responsive landing page with AI-assisted styling",
    "Students can build accessible, mobile-first layouts using modern CSS frameworks."),
    ("Module 02", "Week 2 - JavaScript Mastery", [
        "JS Essentials (ES6+), Variables, Functions, Arrays, Objects",
        "Asynchronous JS, Promises, Async/Await & API Fetching",
    ], "Build an API-based mini productivity application",
    "Students can handle complex data and asynchronous operations in JavaScript."),
    ("Module 03", "Week 3 - React Core", [
        "React Basics, JSX, Components, Component Lifecycle",
        "State Management, useEffect, Handling Events & React Router",
    ], "Build a multi-page interactive React user interface",
    "Students can create dynamic single-page applications with seamless navigation."),
    ("Module 04", "Week 4 - Advanced React & State", [
        "Context API, Global State, Authentication Flow",
        "Protected Routes, Error Handling & UI Polish with AI",
    ], "Implement global state and secure authentication flows",
    "Students can manage complex application states and secure UI components."),
    ("Module 05", "Week 5 - Frontend Production", [
        "Project Setup, Reusable Component Design, CRUD Integration",
        "Frontend Optimization, UX Principles & Production Readiness",
    ], "Finalize a production-ready dashboard frontend with full CRUD",
    "Students complete a professional-grade frontend system ready for hosting."),
    ("Module 06", "Week 6 - Node.js & Express", [
        "Node.js Fundamentals, Express Setup, Middleware Usage",
        "REST API Design Principles & Service Layer Architecture",
    ], "Build a structured and scalable backend REST API",
    "Students can build robust, modular server-side applications."),
    ("Module 07", "Week 7 - Databases & Prisma", [
        "Database Design (MongoDB/SQL), Prisma ORM & Schemas",
        "Relational CRUD, Data Modeling & AI Query Optimization",
    ], "Design relational schemas and perform storage operations",
    "Students can model complex data structures and optimize database performance."),
    ("Module 08", "Week 8 - Backend Security", [
        "JWT Authentication, Access/Refresh Tokens, Password Hashing",
        "Role-Based Access Control (RBAC) & API Hardening",
    ], "Implement a secure login system with role-based permissions",
    "Students can protect backend resources and secure sensitive data."),
    ("Module 09", "Week 9 - AI Tools & Workflows", [
        "Prompt Engineering, AI Code Generation, Testing with AI",
        "Automated Documentation & AI-Driven Refactoring",
    ], "Use AI to automate tests, documentation, and code cleanup",
    "Students adopt AI-first workflows for high-quality software development."),
    ("Module 10", "Week 10 - AI Integration", [
        "OpenAI API Integration, Chatbot Development",
        "AI Blog Generators & AI Code Reviewer Assistants",
    ], "Build and integrate custom AI features into full-stack apps",
    "Students can leverage LLMs to create intelligent application features."),
    ("Module 11", "Week 11 - Deployment & CI/CD", [
        "Environment Configs, Cloud Deployment (Vercel/DigitalOcean)",
        "CI/CD Pipelines, Production Performance & Best Practices",
    ], "Deploy a full-stack system with automated CI/CD pipelines",
    "Students understand the complete software release lifecycle in production."),
    ("Module 12", "Week 12 - Capstone & Portfolio", [
        "Capstone Development, Full-stack AI System Finalization",
        "Resume, LinkedIn, GitHub Polish & Interview Prep",
    ], "Complete a portfolio-ready full-stack AI-integrated system",
    "Students finish with a major project and job-ready career profiles."),
]

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleCustom', fontName='Helvetica-Bold', fontSize=22, leading=26, textColor=colors.HexColor('#1f4ea8')))
styles.add(ParagraphStyle(name='Body', fontName='Helvetica', fontSize=10, leading=13.2, textColor=colors.HexColor('#26313f')))
styles.add(ParagraphStyle(name='Chip', fontName='Helvetica-Bold', fontSize=9.1, leading=11, alignment=TA_CENTER, textColor=colors.HexColor('#2348a5')))
styles.add(ParagraphStyle(name='Section', fontName='Helvetica-Bold', fontSize=14.5, leading=17, textColor=colors.HexColor('#13294b')))
styles.add(ParagraphStyle(name='WhiteHead', fontName='Helvetica-Bold', fontSize=12.2, leading=14.5, textColor=colors.white))
styles.add(ParagraphStyle(name='ModuleTag', fontName='Helvetica-Bold', fontSize=11, leading=13.2, textColor=colors.white))
styles.add(ParagraphStyle(name='CellHead', fontName='Helvetica-Bold', fontSize=9.3, leading=11.4, textColor=colors.HexColor('#21324d')))
styles.add(ParagraphStyle(name='CellBody', fontName='Helvetica', fontSize=9.2, leading=11.8, textColor=colors.HexColor('#273444')))

def chip(text):
    t = Table([[Paragraph(text, styles['Chip'])]], colWidths=[44*mm], rowHeights=[11.5*mm])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#e8eefb')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    return t

def module_card(module, title, points, practice, outcome):
    m_parts = module.split()
    module_num = m_parts[-1] if len(m_parts) > 1 else ""
    header_text = f"Module<br/>{module_num}" if module_num else "Bonus"
    
    header = Table(
        [[Paragraph(header_text, styles['ModuleTag']),
          Paragraph(title, styles['WhiteHead']),
          Paragraph("■", styles['WhiteHead'])]],
        colWidths=[28*mm, 126*mm, 8*mm]
    )
    header.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#355fc9')),
        ('BOX', (0,0), (-1,-1), 0.9, colors.HexColor('#355fc9')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN', (2,0), (2,0), 'CENTER'),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
    ]))

    rows = [
        [Paragraph("<b>Topics</b>", styles['CellHead']), Paragraph(points[0], styles['CellBody'])],
        ["", Paragraph(points[1], styles['CellBody'])],
        [Paragraph("<b>Practical</b>", styles['CellHead']), Paragraph(practice, styles['CellBody'])],
        [Paragraph("<b>Outcome</b>", styles['CellHead']), Paragraph(outcome, styles['CellBody'])],
    ]
    body = Table(rows, colWidths=[34*mm, 128*mm])
    body.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.8, colors.HexColor('#c6ccd6')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#d5dbe3')),
        ('BACKGROUND', (0,0), (0,-1), colors.HexColor('#f2f4f7')),
        ('BACKGROUND', (1,0), (1,-1), colors.HexColor('#ffffff')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
    ]))
    return KeepTogether([header, body, Spacer(1, 4*mm)])

def make_pdf(path=OUTPUT):
    doc = SimpleDocTemplate(path, pagesize=A4, leftMargin=20*mm, rightMargin=20*mm, topMargin=14*mm, bottomMargin=14*mm)
    story = []
    story += [
        Paragraph("Vydhra MERN + AI Job-Ready Bootcamp", styles['TitleCustom']),
        Spacer(1, 4.5*mm),
    ]

    chips = Table([[chip("Duration: 12 Weeks"), chip("Format: 12 Core Modules + AI"), chip("Level: Beginner to Job-Ready Fullstack")]], colWidths=[48*mm, 50*mm, 50*mm])
    chips.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'MIDDLE')]))
    story += [chips, Spacer(1, 6*mm)]

    story += [
        Paragraph("3-Month Intensive Certification Roadmap", styles['Section']),
        Spacer(1, 1.5*mm),
        Spacer(1, 3*mm),
    ]

    for idx, week in enumerate(weeks):
        # Page break every 4 modules for clarity
        if idx > 0 and idx % 4 == 0:
            story.append(PageBreak())
        story.append(module_card(*week))

    doc.build(story)

if __name__ == '__main__':
    make_pdf()
    print(f"PDF generated: {OUTPUT}")
