import CourseCard from "@/components/courses/CourseCard";
import { getCourses } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function CoursesPage() {
  const courses = await getCourses();
  // console.log(courses);
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 text-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-primary leading-none mb-6">
              Choose the Right AI & Tech <br className="hidden md:inline" />
              Bootcamp for Your <br className="hidden md:inline" />
              Career Growth
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl text-base md:text-lg">
              Explore Vydhra’s live, ISO-certified bootcamps in AI, Machine
              Learning, Full-Stack Development, Data Engineering, and
              Cybersecurity—built to make you job-ready in 2–6 months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={(course as any).id || course.slug || index}
                {...course}
                link={`/courses/${course.slug}`}
              />
            ))}
          </div>

          {/* <div className="mt-20">
            <Newsletter />
          </div> */}
        </div>
      </main>
    </div>
  );
}
