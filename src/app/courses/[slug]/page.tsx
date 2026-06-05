import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/lib/api";
import CourseHero from "./components/CourseHero";

export const dynamic = "force-dynamic";
import Curriculum from "./components/Curriculum";
import PricingSidebar from "./components/PricingSidebar";
// import TestimonialsSection from "./components/TestimonialsSection";
import ProjectsSection from "./components/ProjectsSection";
import ToolsSection from "./components/ToolsSection";
import RequirementsSection from "./components/RequirementsSection";
import FeaturesSection from "./components/FeaturesSection";
import BatchesSection from "./components/BatchesSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

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
          heroImage={course.heroImage}
          pricing={course.pricing}
          level={course.level}
          duration={course.duration}
          requirements={course.requirements}
          slug={slug}
          originalPrice={course.originalPrice}
          originalPricing={course.originalPricing}
        />

        <div className="max-w-7xl mx-auto px-8 py-20 gap-16">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-16">
              <Curriculum modules={course.curriculum} />

              {course.features && (
                <FeaturesSection features={course.features} />
              )}

              <BatchesSection
                batches={course.batches}
                slug={slug}
                coursePricing={course.pricing}
                courseOriginalPricing={course.originalPricing}
              />

              <RequirementsSection requirements={course.requirements} />
              <ProjectsSection projects={course.projects} />
              <ToolsSection tools={course.tools} />
            </div>

            <aside className="lg:col-span-1 sticky top-28">
              <PricingSidebar
                pricing={course.pricing}
                slug={slug}
                originalPrice={course.originalPrice}
                originalPricing={course.originalPricing}
              />
            </aside>
          </div>
        </div>

        {/* <TestimonialsSection testimonials={course.testimonials} /> */}
      </main>
    </div>
  );
}
