import { Course } from "@/types/course";

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || process.env.ADMIN_API_URL || "http://127.0.0.1:3002";

export async function getCourses(): Promise<Course[]> {
  try {
    const res = await fetch(`${API_URL}/api/public/vydhra/courses`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch courses: ${res.statusText}`);
    }

    const result = await res.json();
    
    // Defensive check for data structure
    const courseData = result?.data;
    if (!Array.isArray(courseData)) {
      console.error("Invalid API response format: expected an array in 'data' field", result);
      return [];
    }

    return courseData.map((course: any) => {
      try {
        const details = typeof course.details === 'string' 
          ? JSON.parse(course.details) 
          : (course.details || {});
          
        return {
          ...details,
          id: course.id,
          slug: course.slug || details.slug || `course-${course.id}`,
          title: details.title || course.name || "Untitled Course",
          description: details.description || course.description || "",
          category: details.category || "Course",
          image: details.image || "/courses/ai-agents.png",
          price: typeof course.price === 'number' 
            ? `$${course.price.toFixed(2)}` 
            : (details.price || course.price || "Contact for Pricing"),
          priceUSD: course.priceUSD || details.priceUSD,
        } as Course;
      } catch (parseError) {
        console.error("Error parsing course details:", parseError, course);
        // Return a partial object to avoid breaking the whole list
        return {
          id: course.id,
          title: course.name || "Error loading course",
          slug: course.slug || `error-${course.id}`,
          image: "/courses/ai-agents.png",
          price: "N/A"
        } as unknown as Course;
      }
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Our backend services are currently unreachable. Please check your connection or try again later.");
  }
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  try {
    const res = await fetch(`${API_URL}/api/public/vydhra/courses/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch course details: ${res.statusText}`);
    }

    const course = await res.json();
    if (!course) return null;

    const details = typeof course.details === 'string' 
      ? JSON.parse(course.details) 
      : (course.details || {});

    return {
      ...details,
      id: course.id,
      slug: course.slug || details.slug || slug,
      title: details.title || course.name || "Untitled Course",
      description: details.description || course.description || "",
      category: details.category || "Course",
      image: details.image || "/courses/ai-agents.png",
      price: typeof course.price === 'number'
        ? `$${course.price.toFixed(2)}`
        : (details.price || course.price || "Contact for Pricing"),
      priceUSD: course.priceUSD || details.priceUSD,
      batches: Array.isArray(course.batches) ? course.batches : [],
    } as Course;
  } catch (error) {
    console.error(`Error fetching course ${slug}:`, error);
    if (error instanceof Error && error.message.includes("404")) return null;
    throw new Error("Unable to load course details at this time. Please try again later.");
  }
}
