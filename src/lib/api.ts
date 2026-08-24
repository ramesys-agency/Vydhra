import { Course } from "@/types/course";

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || process.env.ADMIN_API_URL || "http://127.0.0.1:3002";

function mapPricing(course: Record<string, unknown>): Record<string, number> {
  if (course.pricing && typeof course.pricing === "object" && !Array.isArray(course.pricing)) {
    return course.pricing as Record<string, number>;
  }
  const fallback: Record<string, number> = {};
  if (typeof course.priceUSD === "number") fallback.USD = course.priceUSD;
  if (typeof course.priceINR === "number") fallback.INR = course.priceINR;
  if (typeof course.price === "number" && !fallback.USD) fallback.USD = course.price;
  return fallback;
}

const IMAGE_MAP: Record<string, string> = {
  "ai-agents-engineering": "https://res.cloudinary.com/daafchadi/image/upload/v1779183243/vydhra/courses/qify1r7ayf4ignmp2wel.png",
  "mern-stack-ai": "https://res.cloudinary.com/daafchadi/image/upload/v1779183219/vydhra/courses/f7e0z6d4fcxtq1bd0lq3.png",
  "ml-job-ready": "https://res.cloudinary.com/daafchadi/image/upload/v1779183183/vydhra/courses/ujuische1fvdswebjo4v.png",
  "python-ai": "https://res.cloudinary.com/daafchadi/image/upload/v1779183132/vydhra/courses/rm0iwunug5bpczwbcyke.png",
  "sql-job-ready": "https://res.cloudinary.com/daafchadi/image/upload/v1779183110/vydhra/courses/vcf0qrijwlslnfjvyebb.png",
  "python-data-analysis": "https://res.cloudinary.com/daafchadi/image/upload/v1779183051/vydhra/courses/w3ulxvedathhokyfba8o.png",
  "r-data-analysis": "https://res.cloudinary.com/daafchadi/image/upload/v1779183032/vydhra/courses/eigtbayb9wf1jkvabykj.png",
  "html-css-js-front-end": "https://res.cloudinary.com/daafchadi/image/upload/v1779182983/vydhra/courses/bn4ime7s1cmwueyyaon0.png",
  "cybersecurity": "https://res.cloudinary.com/daafchadi/image/upload/v1779182923/vydhra/courses/oy2rtiev8jzwd43d0oct.png",
  "deep-learning": "https://res.cloudinary.com/daafchadi/image/upload/v1779182944/vydhra/courses/yf7xk3ttnec7cyzl0p2r.png",
  "power-bi-analytics": "https://res.cloudinary.com/daafchadi/image/upload/v1779174362/vydhra/courses/iakyo5bxfjik5qnqziej.png",
  "ai-prompt-engineering": "https://res.cloudinary.com/daafchadi/image/upload/v1779183001/vydhra/courses/m11h6j0xcb77gqnd8nc3.png",
  "data-engineering": "https://res.cloudinary.com/daafchadi/image/upload/v1779182960/vydhra/courses/xaaqmbgtt7j7nh0nixnt.png"
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapCourse(course: any): Course {
  const details = typeof course.details === "string"
    ? JSON.parse(course.details)
    : (course.details || {});

  const slug = course.slug || details.slug || `course-${course.id}`;
  const overrideImage = IMAGE_MAP[slug];

  return {
    ...details,
    id: course.id,
    status: details.status === "COMING_SOON" ? "COMING_SOON" : "LIVE",
    slug,
    title: details.title || course.name || "Untitled Course",
    description: details.description || course.description || "",
    category: details.category || "Course",
    image: overrideImage || details.image || "/courses/ai-agents.png",
    heroImage: overrideImage || details.heroImage || details.image || "/courses/ai-agents.png",
    pricing: mapPricing(course),
    batches: Array.isArray(course.batches) ? course.batches : [],
    originalPrice: typeof details.originalPrice === "number"
      ? details.originalPrice
      : details.originalPrice && !isNaN(parseFloat(details.originalPrice))
      ? parseFloat(details.originalPrice)
      : undefined,
    originalPricing: course.originalPricing || {},
  } as Course;
}

export async function getCourses(): Promise<Course[]> {
  try {
    const res = await fetch(`${API_URL}/api/public/vydhra/courses`, { cache: "no-store" });

    if (!res.ok) throw new Error(`Failed to fetch courses: ${res.statusText}`);

    const result = await res.json();
    const courseData = result?.data;
    if (!Array.isArray(courseData)) {
      console.error("Invalid API response format", result);
      return [];
    }

    return courseData.map((c) => {
      try { return mapCourse(c); }
      catch (e) {
        console.error("Error mapping course:", e, c);
        return { id: c.id, title: c.name || "Error", slug: c.slug || `error-${c.id}`, pricing: {} } as unknown as Course;
      }
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Our backend services are currently unreachable. Please check your connection or try again later.");
  }
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  try {
    const res = await fetch(`${API_URL}/api/public/vydhra/courses/${slug}`, { cache: "no-store" });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch course details: ${res.statusText}`);
    }

    const course = await res.json();
    if (!course) return null;

    return mapCourse(course);
  } catch (error) {
    console.error(`Error fetching course ${slug}:`, error);
    if (error instanceof Error && error.message.includes("404")) return null;
    throw new Error("Unable to load course details at this time. Please try again later.");
  }
}
