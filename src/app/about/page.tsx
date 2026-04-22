import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Us - Vydhra',
  description: 'Learn more about Vydhra and our mission to provide high-quality online courses.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-24">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
              Built to Solve the Gap Between <br/> <span className="text-primary">Learning</span> and Real-World Tech Skills
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Vydhra was created to redefine how people enter the tech industry—through real capability, not just theoretical knowledge.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-orange-400 rounded-2xl blur-lg opacity-30 animate-pulse" />
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-background">
                <span className="material-icons text-6xl text-muted-foreground/50">insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-widest">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              To build a new standard of tech education—one that focuses on real-world capability, not passive learning. We aim to equip learners with the skills, thinking, and practical experience required to succeed in AI, software development, and data-driven roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'engineering',
                title: 'Industry-Driven Learning',
                description: 'Learn from professionals actively working in AI and software development—not traditional instructors disconnected from real-world systems.'
              },
              {
                icon: 'psychology',
                title: 'Real Capability Over Theory',
                description: 'We focus on building skills that translate directly into real work—projects, systems, and problem-solving.'
              },
              {
                icon: 'public',
                title: 'Globally Relevant Skills',
                description: 'Our programs are designed to prepare learners for opportunities across global tech markets.'
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin & Founder Story Section */}
      <section className="py-20 px-6 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative group">
                    <div className="absolute inset-0 flex items-center justify-center bg-background group-hover:scale-110 transition-transform duration-700">
                        <span className="material-icons text-9xl text-muted-foreground/50">business</span>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
                    The Founder
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tighter leading-tight">
                    From Building Systems <br/> to Building Talent
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                    <p>
                        Vydhra is a wholly owned subsidiary of Ramesys Private Limited, built to solve a real industry problem—not just to teach.
                    </p>
                    <p>
                        While working on real-world projects at Ramesys, one challenge kept repeating: finding truly skilled developers. The issue wasn’t a lack of candidates—it was a lack of real capability. Most learners understood concepts. Very few could apply them in production environments.
                    </p>
                    <p>
                        That gap led to a clear decision: instead of searching for talent, build it. What began as internal training and mentorship inside Ramesys evolved into Vydhra—a platform focused on creating professionals who can contribute from day one.
                    </p>
                </div>
                <div className="pt-4 border-t border-border">
                    <div className="font-bold text-foreground text-xl uppercase tracking-widest">Ramesys Private Limited</div>
                    <div className="text-primary text-sm font-bold uppercase tracking-widest">Parent Company</div>
                </div>
            </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
             <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
                Our Vision
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase tracking-tighter">
                Building the <span className="text-primary">Next Generation</span> of AI & Tech Professionals
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The future of work is being shaped by AI, automation, and rapidly evolving technologies. Vydhra’s vision is to become a global platform that produces highly capable professionals who can build, adapt, and lead in this new era.
            </p>
             <div className="pt-8 flex justify-center gap-4">
                <button className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 hover:shadow-primary/30 transition-all cursor-pointer hover:scale-105 active:scale-95 uppercase tracking-widest text-sm">
                    Join Our Programs
                </button>
            </div>
        </div>
      </section>

    </main>
  );
}
