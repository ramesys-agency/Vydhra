import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/lib/api";
import CourseHero from "./components/CourseHero";
import Curriculum from "./components/Curriculum";
import PricingSidebar from "./components/PricingSidebar";
import TestimonialsSection from "./components/TestimonialsSection";
// import ProgramComparison from "./components/ProgramComparison";
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
          price={course.price}
          priceINR={course.priceINR}
          priceUSD={course.priceUSD}
          level={course.level}
          duration={course.duration}
          requirements={course.requirements}
          slug={slug}
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

              {/* 3. Available Batches */}
              <BatchesSection
                batches={course.batches}
                slug={slug}
                coursePrice={course.price}
                coursePriceUSD={course.priceUSD}
              />

              {/* 5. Prerequisites */}
              <RequirementsSection requirements={course.requirements} />

              {/* 6. Projects */}
              <ProjectsSection projects={course.projects} />

              {/* 7. Tools */}
              <ToolsSection tools={course.tools} />
            </div>

            {/* Right Sidebar (Sticky) */}
            <aside className="lg:col-span-1 sticky top-28">
              <PricingSidebar 
                price={course.price} 
                priceINR={course.priceINR}
                priceUSD={course.priceUSD}
                slug={slug} 
              />
            </aside>
          </div>
        </div>

        <TestimonialsSection testimonials={course.testimonials} />
      </main>
    </div>
  );
}
