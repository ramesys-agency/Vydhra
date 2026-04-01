import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import CourseHero from "./components/CourseHero";
import Curriculum from "./components/Curriculum";
import PricingSidebar from "./components/PricingSidebar";
import TestimonialsSection from "./components/TestimonialsSection";
// import ProgramComparison from "./components/ProgramComparison";
import ProjectsSection from "./components/ProjectsSection";
import ToolsSection from "./components/ToolsSection";
import RequirementsSection from "./components/RequirementsSection";
import FeaturesSection from "./components/FeaturesSection";

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
          level={course.level}
          duration={course.duration}
          requirements={course.requirements}
        />

        <div className="max-w-7xl mx-auto px-8 py-20 gap-16">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-16">
              {/* 1. Course Content */}
              <Curriculum modules={course.curriculum} />

              {/* 2. Features (New Section) */}
              {course.features && (
                <FeaturesSection features={course.features} />
              )}

              {/* 3. Description */}
              {/* <div className="py-8">
                <h2 className="text-3xl font-bold mb-6">About this Course</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  &ldquo;{course.description}&rdquo;
                </p>
              </div> */}

              {/* 4. Prerequisites */}
              <RequirementsSection requirements={course.requirements} />

              {/* 5. Projects */}
              <ProjectsSection projects={course.projects} />

              {/* 6. Tools */}
              <ToolsSection tools={course.tools} />

              {/* 7. Comparison */}
              {/* <ProgramComparison /> */}
            </div>

            {/* Right Sidebar (Sticky) */}
            <aside className="lg:col-span-1 sticky top-28">
              <PricingSidebar price={course.price} />
            </aside>
          </div>
        </div>

        <TestimonialsSection testimonials={course.testimonials} />
      </main>
    </div>
  );
}
