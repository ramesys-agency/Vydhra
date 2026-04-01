"use client";

import { useState } from "react";
import FilterSidebar from "@/components/courses/FilterSidebar";
import CourseCard from "@/components/courses/CourseCard";
// import Newsletter from "@/components/common/Newsletter";
import { courses } from "@/data/courses";
import Icon from "@/components/common/Icon";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const categories = [
    { name: "All Courses", count: courses.length },
    { name: "Development", count: courses.filter(c => c.category === "Development").length },
    { name: "Web Design", count: 0 },
  ];

  // Logic to filter courses based on selection
  const filteredCourses =
    selectedCategory === "Web Design"
      ? []
      : selectedCategory === "Development"
      ? courses.filter((c) => c.category === "Development")
      : courses;

  return (
    <div className="min-h-screen">
      <main className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <div className="flex-grow">
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

            {selectedCategory === "Web Design" ? (
              <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-gray-50 dark:bg-card-dark rounded-2xl border border-dashed border-gray-300 dark:border-border-dark">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary animate-pulse">
                  <Icon name="construction" size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Courses Coming Soon</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                  We are working hard to bring you the best Web Design courses.
                  Stay tuned for updates!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.slug}
                    {...course}
                    link={`/courses/${course.slug}`}
                  />
                ))}
              </div>
            )}
            
            {/* <div className="mt-20">
              <Newsletter />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
