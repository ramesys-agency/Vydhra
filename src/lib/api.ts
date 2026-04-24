import { Course } from "@/types/course";

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || "http://127.0.0.1:3001";

export async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${API_URL}/api/public/vydhra/courses`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  const result = await res.json();
  // Map DB courses to frontend Course type using the 'details' field
  return result.data.map((course: any) => {
    const details = typeof course.details === 'string' ? JSON.parse(course.details) : (course.details || {});
    const mappedCourse = {
      ...details,
      id: course.id,
      slug: course.slug || details.slug,
      title: details.title || course.name,
      description: details.description || course.description || "",
      category: details.category || "Course",
      image: details.image || "/courses/ai-agents.png",
      price: typeof course.price === 'number' ? `$${course.price.toFixed(2)}` : (details.price || course.price),
      priceUSD: course.priceUSD || details.priceUSD,
    };
    return mappedCourse as Course;
  });
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const res = await fetch(`${API_URL}/api/public/vydhra/courses/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("Failed to fetch course details");
  }

  const course = await res.json();
  const details = typeof course.details === 'string' ? JSON.parse(course.details) : (course.details || {});
  return {
    ...details,
    id: course.id,
    slug: course.slug || details.slug,
    title: details.title || course.name,
    description: details.description || course.description || "",
    category: details.category || "Course",
    image: details.image || "/courses/ai-agents.png",
    price: typeof course.price === 'number' ? `$${course.price.toFixed(2)}` : (details.price || course.price),
    priceUSD: course.priceUSD || details.priceUSD,
  } as Course;
}
