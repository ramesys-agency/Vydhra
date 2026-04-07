from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak

OUTPUT = "/home/ptspl19/Desktop/git-projects/Freelance/Production/Vydhra/courses/SQL/Vydhra_SQL_Job_Ready_Bootcamp_Generated.pdf"

weeks = [
    ("Module 01", "Week 1 - SQL Foundations", [
        "SQL syntax, SELECT, WHERE, ORDER BY, DISTINCT, LIMIT/TOP",
        "Relational databases, filtering logic, and real-world query patterns",
    ], "Basic data retrieval and filtering exercises",
    "Students write clean SQL queries to retrieve and filter data confidently."),
    ("Module 02", "Week 2 - Aggregations and Analysis", [
        "COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING, and NULL handling",
        "CASE WHEN for conditional logic and analytical reporting",
    ], "Sales and metrics analysis queries",
    "Students analyze datasets using aggregations and conditional logic."),
    ("Module 03", "Week 3 - Joins", [
        "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, and SELF JOIN",
        "Table relationships and real-world multi-table querying",
    ], "Business-oriented multi-table query tasks",
    "Students combine tables and extract meaningful business insights."),
    ("Module 04", "Week 4 - Subqueries and Advanced Filtering", [
        "Subqueries, correlated subqueries, EXISTS, IN, and NOT IN",
        "ANY, ALL, and nested filtering for intermediate SQL problems",
    ], "Complex filtering and nested query practice",
    "Students solve intermediate SQL problems using nested logic."),
    ("Module 05", "Week 5 - Window Functions", [
        "ROW_NUMBER(), RANK(), DENSE_RANK(), PARTITION BY, ORDER BY",
        "LEAD(), LAG(), running totals, and analytical SQL patterns",
    ], "Ranking, trend, and time-based analysis queries",
    "Students solve advanced analytical and interview-level SQL problems."),
    ("Module 06", "Week 6 - Data Transformation", [
        "CASE WHEN advanced usage, string functions, date functions",
        "Data cleaning and transformation techniques for reporting",
    ], "Cleaning and transforming messy datasets",
    "Students prepare and transform data for analysis and reporting."),
    ("Module 07", "Week 7 - Database Design Basics", [
        "Tables, schema, normalization basics, Primary & Foreign keys",
        "Index basics and performance considerations in SQL systems",
    ], "Designing simple database structures",
    "Students understand how structured data is organized and optimized."),
    ("Module 08", "Week 8 - Capstone and Interview Prep", [
        "End-to-end SQL project, query optimization, and clean SQL",
        "Interview questions, case-based problems, and timed practice",
    ], "Final project using a real-world dataset",
    "Students complete a portfolio-ready SQL project and gain confidence."),
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
        Paragraph("Vydhra SQL Job-Ready Bootcamp", styles['TitleCustom']),
        Spacer(1, 5.5*mm),
    ]

    chips = Table([[chip("Duration: 8 Weeks"), chip("Format: Query-First Practice"), chip("Level: Beginner to Job-Ready")]], colWidths=[48*mm, 50*mm, 50*mm])
    chips.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'MIDDLE')]))
    story += [chips, Spacer(1, 7*mm)]

    story += [
        Paragraph("Intensive SQL Certification Curriculum", styles['Section']),
        Spacer(1, 1.5*mm),
        Spacer(1, 3*mm),
    ]

    for idx, week in enumerate(weeks):
        if idx % 4 == 0 and idx > 0:
            story.append(PageBreak())
        story.append(module_card(*week))

    doc.build(story)

if __name__ == '__main__':
    make_pdf()
    print(f"PDF generated: {OUTPUT}")
