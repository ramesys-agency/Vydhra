export interface Review {
  name: string;
  course: string;
  text: string;
  rating: number;
  image: string;
  category: string;
  verified?: boolean;
}

export const reviews: Review[] = [
  {
    name: "Alex Johnson",
    course: "MERN + AI Job-Ready Bootcamp",
    text: "The curriculum was incredibly thorough. I went from knowing nothing to landing a junior full-stack role in 3 months! Building actual chatbots and AI-driven features made my portfolio stand out.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    category: "Fullstack Development",
    verified: true,
  },
  {
    name: "Sarah Chen",
    course: "AI Agents Engineering Bootcamp",
    text: "I tried several online platforms but this is different. The projects are actually representative of what you do in a real AI startup. Learning LangChain and orchestration tools gave me immense confidence.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    category: "AI & ML",
  },
  {
    name: "Marcus Thorne",
    course: "Python AI Course",
    text: "Truly world-class training that focuses on the 'why' and not just the 'how' of Python programming. Starting without prior coding knowledge, I built an API and LLM-powered tool to automate my daily tasks.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    category: "Programming",
  },
  {
    name: "Elena Rodriguez",
    course: "ML Job Ready Bootcamp",
    text: "The mentorship aspect is what sets this platform apart. Direct feedback from industry pros is priceless. I finally feel confident navigating complex Pandas datasets and deploying predictive ML models.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    category: "AI & ML",
    verified: true,
  },
  {
    name: "David Kim",
    course: "SQL Job-Ready Bootcamp",
    text: "A must-have for anyone serious about working with real data. The level of detail in the interview prep sections, and practicing complex window functions, helped me pass technical rounds seamlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    category: "Data Engineering",
  },
  {
    name: "Jessica Walsh",
    course: "MERN + AI Job-Ready Bootcamp",
    text: "Incredible pacing. I never felt overwhelmed even though deploying a backend service was completely new to me. Best investment I've made this year for my career growth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    category: "Fullstack Development",
    verified: true,
  },
  {
    name: "Michael Chen",
    course: "Data Engineering Masterclass",
    text: "Switching from a traditional dev role to data engineering was daunting, but this course made it smooth. The focus on ETL pipelines and cloud data warehouses was exactly what I needed.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    category: "Data Engineering",
  },
  {
    name: "Sonia Gupta",
    course: "Advanced Python Algorithms",
    text: "Finally, a course that dives deep into advanced algorithms without being too academic. I've already applied some of the optimization techniques to my current projects.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop",
    category: "Programming",
  },
  {
    name: "Robert Wilson",
    course: "Generative AI Bootcamp",
    text: "The most practical GenAI course I've found. From prompt engineering to fine-tuning, every module was packed with actionable insights.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    category: "AI & ML",
    verified: true,
  },
  {
    name: "Linda Wu",
    course: "React & Next.js Professional",
    text: "The focus on server components and performance optimization made this course stand out. My apps are now significantly faster and more maintainable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    category: "Fullstack Development",
  },
  {
    name: "Arjun Mehta",
    course: "Cloud Architecture Foundations",
    text: "Great overview of modern cloud patterns. The hands-on labs with AWS and Azure were particularly helpful for my certification prep.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    category: "Fullstack Development",
  },
  {
    name: "Sophie Laurent",
    course: "Natural Language Processing",
    text: "A deep dive into NLP that covers both classical methods and modern transformers. The project on sentiment analysis was a highlight.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
    category: "AI & ML",
    verified: true,
  },
];
