import { Suspense } from "react";
import CourseCard from "@/components/courses/CourseCard";
import { getCourses } from "@/lib/api";
import { Course } from "@/types/course";

export const dynamic = "force-dynamic";

function CourseGrid({ courses, comingSoon = false }: { courses: Course[]; comingSoon?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <CourseCard
          key={(course as any).id || course.slug || index}
          {...course}
          comingSoon={comingSoon}
          link={`/courses/${course.slug}`}
        />
      ))}
    </div>
  );
}

function CourseSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-4xl p-5 shadow-sm h-full flex flex-col"
        >
          {/* Image Placeholder */}
          <div className="relative aspect-4/3 rounded-2xl mb-6 bg-muted animate-pulse overflow-hidden">
            {/* Category tag skeleton */}
            <div className="absolute top-4 left-4 bg-background/50 backdrop-blur-md w-24 h-6 rounded-full border border-border/50 animate-pulse" />
          </div>

          {/* Content Placeholder */}
          <div className="flex flex-col grow px-1 space-y-3">
            {/* Title skeleton */}
            <div className="h-6 bg-muted rounded-xl animate-pulse w-5/6" />

            {/* Description skeleton */}
            <div className="space-y-2 grow">
              <div className="h-4 bg-muted rounded-lg animate-pulse w-full" />
              <div className="h-4 bg-muted rounded-lg animate-pulse w-4/5" />
            </div>

            {/* Footer skeleton */}
            <div className="flex items-center justify-between pt-5 border-t border-border mt-4">
              {/* Price skeleton */}
              <div className="h-8 bg-muted rounded-lg animate-pulse w-24" />

              {/* Button skeleton */}
              <div className="w-12 h-12 rounded-2xl bg-muted animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function CourseLists() {
  const courses = await getCourses();
  const liveCourses = courses.filter((c) => c.status !== "COMING_SOON");
  const comingSoonCourses = courses.filter((c) => c.status === "COMING_SOON");

  return (
    <>
      {liveCourses.length > 0 && (
        <section className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground leading-none">
              Open for Enrollment
            </h2>
          </div>
          <CourseGrid courses={liveCourses} />
        </section>
      )}

      {comingSoonCourses.length > 0 && (
        <section>
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground leading-none mb-3">
              Coming Soon
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              New batches launching shortly — explore the curriculum and
              register your interest.
            </p>
          </div>
          <CourseGrid courses={comingSoonCourses} comingSoon />
        </section>
      )}
    </>
  );
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 text-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-primary leading-none mb-6">
              Choose the Right AI & Tech <br className="hidden md:inline" />
              Bootcamp for Your <br className="hidden md:inline" />
              Career Growth
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl text-base md:text-lg">
              Explore Vydhra&apos;s live, mentor-led bootcamps in AI, Machine
              Learning, Full-Stack Development, Data Engineering, and
              Cybersecurity—built to make you job-ready in 2–6 months.
            </p>
          </div>

          <Suspense fallback={<CourseSkeleton />}>
            <CourseLists />
          </Suspense>

          {/* <div className="mt-20">
            <Newsletter />
          </div> */}
        </div>
      </main>
    </div>
  );
}
