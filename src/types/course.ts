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

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
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
}
