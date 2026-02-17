import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Us - Vydhra',
  description: 'Learn more about Vydhra and our mission to provide high-quality online courses.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-24">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              Empowering <span className="text-primary">Learning</span> Without Limits
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              At Vydhra, we believe that education should be accessible, engaging, and transformative. We are dedicated to providing high-quality courses that help you master new skills and advance your career.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-orange-400 rounded-2xl blur-lg opacity-30 animate-pulse" />
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl">
              {/* Placeholder for a hero image if desired */}
              <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-900">
                <span className="material-icons text-6xl text-slate-300 dark:text-slate-700">groups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white dark:bg-background-dark/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We are on a mission to democratize education by connecting expert instructors with eager learners from around the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'school',
                title: 'Expert Instructors',
                description: 'Learn from industry professionals who bring real-world experience to every lesson.'
              },
              {
                icon: 'schedule',
                title: 'Flexible Learning',
                description: 'Study at your own pace, on your own schedule, from anywhere in the world.'
              },
              {
                icon: 'verified',
                title: 'Certified Skills',
                description: 'Earn certificates that validate your expertise and help you stand out to employers.'
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
            {[
                { number: '10k+', label: 'Students' },
                { number: '200+', label: 'Courses' },
                { number: '50+', label: 'Instructors' },
                { number: '4.9', label: 'Rating' }
            ].map((stat, i) => (
                <div key={i}>
                    <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.number}</div>
                     <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
            ))}
        </div>
      </section> */}

      {/* Founder Story Section */}
      <section className="py-20 px-6 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                     {/* Placeholder for founder image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-900">
                        <span className="material-icons text-9xl text-slate-300 dark:text-slate-700">person</span>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
                    The Founder
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    Built from Passion, <br/>Driven by Purpose
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                        Hello! I&apos;m the founder of Vydhra. My journey began with a simple realization: quality education shouldn&apos;t be a luxury. After years in the industry, I saw a gap between theoretical knowledge and practical application.
                    </p>
                    <p>
                        I started Vydhra to bridge that gap. What began as a small series of tutorials has grown into a comprehensive platform for learners worldwide. My goal is to empower you with the tools you need to succeed in a rapidly evolving digital landscape.
                    </p>
                </div>
                <div className="pt-4">
                    <div className="font-bold text-slate-900 dark:text-white text-lg">Alex Vydhra</div>
                    <div className="text-primary text-sm font-medium">Founder & CEO</div>
                </div>
            </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
             <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
                Our Vision
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                Shaping the <span className="text-primary">Future</span> of Education
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                We envision a world where anyone, anywhere, has access to the highest quality education. We are constantly innovating to bring you immersive learning experiences, AI-driven personalization, and a community that supports your growth every step of the way.
            </p>
             <div className="pt-8 flex justify-center gap-4">
                <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-primary/30 transition-all cursor-pointer">
                    Join Our Community
                </button>
            </div>
        </div>
      </section>

    </main>
  );
}
