import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/lib/api";
import EnrollmentClient from "./EnrollmentClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  
  if (!course) return { title: "Course Not Found" };
  
  return {
    title: `Enroll in ${course.title} | Vydhra`,
    description: `Complete your enrollment for ${course.title} and start learning today.`,
  };
}

export default async function EnrollmentPage({ params }: PageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main>
      <EnrollmentClient
        course={{
          title: course.title,
          subtitle: course.subtitle,
          pricing: course.pricing,
          image: course.image,
          category: course.category,
          slug: slug,
        }}
        slug={slug}
        batches={course.batches ?? []}
      />
    </main>
  );
}
