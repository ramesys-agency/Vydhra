import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import CourseHero from "./components/CourseHero";
import Curriculum from "./components/Curriculum";
import PricingSidebar from "./components/PricingSidebar";
import TestimonialsSection from "./components/TestimonialsSection";
import ProgramComparison from "./components/ProgramComparison";
import ProjectsSection from "./components/ProjectsSection";
import ToolsSection from "./components/ToolsSection";
import RequirementsSection from "./components/RequirementsSection";

interface PageProps {
  params: { slug: string };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <main>
        <CourseHero
          title={course.title}
          subtitle={course.subtitle}
          description={course.description}
          live={course.liveInteractiveClasses}
          image={course.image}
          price={course.price}
        />

        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 divide-y divide-gray-200 dark:divide-border-dark">
              {/* 1. Course Content */}
              <div className="pb-8">
                 <Curriculum modules={course.curriculum} />
              </div>

              {/* 2. Description */}
              <div className="py-8">
                 <h2 className="text-3xl font-bold mb-6">About this Course</h2>
                 <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                   {course.description}
                 </p>
              </div>

               {/* 3. Prerequisites */}
              <RequirementsSection requirements={course.requirements} />

              {/* 4. Projects */}
              <ProjectsSection projects={course.projects} />
              
              {/* 5. Tools */}
              <ToolsSection tools={course.tools} />

              {/* 6. Loopholes */}
              <ProgramComparison />
            </div>

            {/* Right Sidebar */}
            <PricingSidebar price={course.price} />
          </div>
        </div>

        <TestimonialsSection />
      </main>
    </div>
  );
}
