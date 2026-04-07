"use client";

import CourseCard from "@/components/courses/CourseCard";
// import Newsletter from "@/components/common/Newsletter";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-primary leading-none mb-6">
              Choose your <br />
              path to success
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg">
              Learn from experts how to design, structure, and publish
              professional websites. Our courses are practical and directly
              applicable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.slug}
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
