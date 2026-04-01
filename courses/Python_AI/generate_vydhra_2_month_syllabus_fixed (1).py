from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak

OUTPUT = "/mnt/data/Vydhra_2_Month_Syllabus_Fixed.pdf"

weeks = [
    ("Module 01", "Week 1 - Introduction to Python", [
        "Python overview, career paths, installation, VS Code/Jupyter setup",
        "Variables, data types, input/output, operators, and first mini programs",
    ], "Setup checklist, calculator, and input-output exercises",
    "Students can install Python, understand syntax, and write their first small programs confidently."),
    ("Module 02", "Week 2 - Control Flow", [
        "If/elif/else, comparison operators, logical operators, and nested conditions",
        "Loops: for, while, range, break/continue, and beginner logic-building tasks",
    ], "Grade checker, number logic, and a menu-driven practice task",
    "Students can build decision-based and repeated-execution programs with clean logic."),
    ("Module 03", "Week 3 - Functions & Debugging", [
        "Functions, parameters, return values, scope, and reusable code design",
        "Built-in functions, debugging basics, error tracing, and practice patterns",
    ], "Calculator with functions, converter, and reusable utility tasks",
    "Students can organize code into functions and debug basic programming issues."),
    ("Module 04", "Week 4 - Data Structures & Strings", [
        "Strings, indexing, slicing, common methods, and text handling",
        "Lists, tuples, sets, dictionaries, and looping through collections",
    ], "Contact book, shopping list manager, and word counter",
    "Students can store, access, and manipulate structured data effectively."),
    ("Module 05", "Week 5 - Files, Errors & Modules", [
        "File handling, reading/writing text files, and CSV/JSON basics",
        "try/except/finally, importing modules, packages, pip, and project structure",
    ], "Notes app, CSV reader, and an error-safe script",
    "Students can create practical scripts that handle data and runtime errors."),
    ("Module 06", "Week 6 - OOP & GitHub Workflow", [
        "Classes, objects, constructors, methods, and basic OOP thinking",
        "Git basics, GitHub repositories, commits, push workflow, and portfolio hygiene",
    ], "Student record class and publishing the first project to GitHub",
    "Students can build basic class-based programs and publish work professionally."),
    ("Module 07", "Week 7 - APIs, SQL & AI Basics", [
        "API basics with requests, JSON responses, and mini integration workflow",
        "SQL basics, prompt engineering, and intro to LLM/API-based AI workflow",
    ], "Weather or currency app, simple SQL tasks, and prompt design practice",
    "Students gain beginner exposure to data querying, APIs, and modern AI workflow concepts."),
    ("Module 08", "Week 8 - Capstone & Job Readiness", [
        "Capstone planning, development workflow, testing, debugging, and cleanup",
        "Resume, LinkedIn, GitHub portfolio polish, and Python interview preparation",
    ], "Final capstone, README, resume draft, and mock interview practice",
    "Students finish with a portfolio-ready project and stronger fresher-level job readiness."),
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
    module_num = module.split()[-1]
    header = Table(
        [[Paragraph(f"Module<br/>{module_num}", styles['ModuleTag']),
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
        [Paragraph("<b>Topics Covered</b>", styles['CellHead']), Paragraph(points[0], styles['CellBody'])],
        ["", Paragraph(points[1], styles['CellBody'])],
        [Paragraph("<b>Practice</b>", styles['CellHead']), Paragraph(practice, styles['CellBody'])],
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
        Paragraph("Vydhra Python + AI Job-Ready Bootcamp", styles['TitleCustom']),
        Spacer(1, 5.5*mm),
    ]

    chips = Table([[chip("Duration: 8 Weeks"), chip("Format: 2 Topic Points + Practice"), chip("Level: Beginner to Job-Ready Foundation")]], colWidths=[48*mm, 50*mm, 50*mm])
    chips.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'MIDDLE')]))
    story += [chips, Spacer(1, 7*mm)]

    story += [
        Paragraph("Website-Style Course Structure", styles['Section']),
        Spacer(1, 1.5*mm),
        Spacer(1, 3*mm),
    ]

    for idx, week in enumerate(weeks):
        if idx == 4:
            story.append(PageBreak())
        story.append(module_card(*week))

    doc.build(story)

if __name__ == '__main__':
    make_pdf()
    print(OUTPUT)
