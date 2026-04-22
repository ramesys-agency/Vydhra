import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import EnrollmentClient from "./EnrollmentClient";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  
  if (!course) return { title: "Course Not Found" };
  
  return {
    title: `Enroll in ${course.title} | Vydhra`,
    description: `Complete your enrollment for ${course.title} and start learning today.`,
  };
}

export default async function EnrollmentPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main>
      <EnrollmentClient 
        course={{
          title: course.title,
          subtitle: course.subtitle,
          price: course.price,
          image: course.image,
          category: course.category
        }} 
        slug={slug}
      />
    </main>
  );
}
