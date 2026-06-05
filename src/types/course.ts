export interface Lesson {
  title: string;
  duration?: string;
  type: "video" | "locked" | "live";
}

export interface Module {
  id: string;
  title: string;
  meta: string;
  lessons: Lesson[];
  practice?: string;
  outcome?: string;
  isOpen?: boolean;
  isLocked?: boolean;
}

export interface Project {
  title: string;
  description: string;
  icon: string;
}

export interface Tool {
  name: string;
  icon: string; // Material icon name or image url
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image?: string;
}

export interface CourseBatch {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  maxSeats?: number | null;
  pricing?: Record<string, number>;
  originalPricing?: Record<string, number>;
  status: "UPCOMING" | "ACTIVE" | "COMPLETED" | "CANCELLED";
  enrollmentCount?: number;
  whatsappGroupUrl?: string | null;
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  pricing: Record<string, number>;
  image: string;
  heroImage: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Professional";
  duration: string;
  liveInteractiveClasses: boolean;
  projects: Project[];
  tools: Tool[];
  requirements: string[];
  curriculum: Module[];
  features?: string[];
  testimonials?: Testimonial[];
  batches?: CourseBatch[];
  originalPrice?: number;
  originalPricing?: Record<string, number>;
}
