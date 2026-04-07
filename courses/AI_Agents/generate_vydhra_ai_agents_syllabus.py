from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak

OUTPUT = "/home/ptspl19/Desktop/git-projects/Freelance/Production/Vydhra/courses/AI_Agents/Vydhra_AI_Agents_Engineering_Bootcamp_Generated.pdf"

weeks = [
    ("Module 01", "Week 1 - Foundations of AI Agents", [
        "AI agents vs LLM apps, real-world use cases, and agent architecture",
        "Reason-act-observe loops, tools, APIs, and system design essentials",
    ], "Build a basic AI assistant using an LLM API",
    "Students understand agent architecture and build a first working agent."),
    ("Module 02", "Week 2 - Prompt Engineering and Control", [
        "Chain-of-thought, ReAct, few-shot prompting, and system prompt design",
        "Tool calling, structured outputs, prompt debugging, and optimization",
    ], "Build a reasoning-based agent with tool usage",
    "Students control LLM behavior more reliably and intelligently."),
    ("Module 03", "Week 3 - LangChain and Tool-Based Agents", [
        "Chains, tools, memory, execution flow, and decision-making patterns",
        "Multi-tool agents with search, calculator, and API integrations",
    ], "Build a multi-tool agent using LangChain",
    "Students build modular agents using tools and memory."),
    ("Module 04", "Week 4 - RAG Systems", [
        "Embeddings, vector databases, chunking strategies, and retrieval",
        "Retrieval optimization and hallucination-reduction techniques",
    ], "Build a PDF knowledge chatbot using RAG",
    "Students create knowledge-based AI systems for real applications."),
    ("Module 05", "Week 5 - LangGraph Workflows", [
        "State machines, planner-executor flows, and looping agent workflows",
        "Fallbacks, error handling, and structured multi-step design",
    ], "Build a planner-executor agent system",
    "Students design reliable multi-step AI workflows."),
    ("Module 06", "Week 6 - Multi-Agent Systems", [
        "AutoGen, CrewAI, collaboration patterns, and agent communication",
        "Task delegation, role-based agents, and system scaling concepts",
    ], "Build a research-plus-writer multi-agent system",
    "Students build collaborative AI systems with multiple agents."),
    ("Module 07", "Week 7 - Production AI Systems", [
        "Deployment with FastAPI, logging, monitoring, and observability",
        "Cost optimization, retries, guardrails, and safety handling",
    ], "Deploy an AI agent web app with logging and monitoring",
    "Students build production-ready AI applications."),
    ("Module 08", "Week 8 - Evaluation and Capstone", [
        "Evaluation, debugging, tracing, benchmarks, and optimization",
        "Final capstone: full AI agent system with deployment and testing",
    ], "Build a final portfolio project with rigorous evaluation",
    "Students complete a portfolio-ready, production-grade AI system."),
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
        Paragraph("Vydhra AI Agents Engineering Bootcamp", styles['TitleCustom']),
        Spacer(1, 5.5*mm),
    ]

    chips = Table([[chip("Duration: 8 Weeks"), chip("Format: Agent-First Design"), chip("Level: Intermediate to Production")]], colWidths=[48*mm, 50*mm, 50*mm])
    chips.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'MIDDLE')]))
    story += [chips, Spacer(1, 7*mm)]

    story += [
        Paragraph("Advanced AI Agents Engineering Roadmap", styles['Section']),
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
