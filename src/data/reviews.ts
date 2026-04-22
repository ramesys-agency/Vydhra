export interface Review {
  name: string;
  course: string;
  text: string;
  rating: number;
  image?: string;
  category: string;
  verified?: boolean;
}

export const reviews: Review[] = [
  {
    name: "Arjun Mehta",
    course: "MERN + AI Bootcamp",
    text: "I joined with basic JavaScript knowledge and honestly didn’t expect this level of depth. The projects were tough but that’s what helped. I actually built things I can show in interviews now.",
    rating: 5,
    category: "Fullstack Development",
    verified: true,
  },
  {
    name: "Sofia Martinez",
    course: "Python AI Course",
    text: "I liked that it wasn’t just theory. We actually built things step by step. Sometimes it felt intense, but looking back, that’s what made the difference.",
    rating: 5,
    category: "Programming",
    verified: true,
  },
  {
    name: "Daniel Okoye",
    course: "SQL Bootcamp",
    text: "Very practical course. I was already working with data but my SQL was weak. This helped me get confident with queries and interviews.",
    rating: 5,
    category: "Data Engineering",
    verified: true,
  },
  {
    name: "Emily Carter",
    course: "Machine Learning Bootcamp",
    text: "It’s not an easy course, but that’s the point. The mentors actually explain things instead of just showing slides. I feel much more confident applying for ML roles now.",
    rating: 5,
    category: "AI & ML",
    verified: true,
  },
  {
    name: "Lucas Fernandes",
    course: "MERN + AI Bootcamp",
    text: "The AI integration part was the most interesting for me. I had never worked with APIs like that before. Now I’m using it in my own projects.",
    rating: 5,
    category: "Fullstack Development",
    verified: true,
  },
  {
    name: "Aisha Khan",
    course: "AI Agents Engineering Bootcamp",
    text: "I joined out of curiosity about AI agents, but it turned out to be very hands-on. The LangChain part was confusing at first, but the sessions helped a lot.",
    rating: 5,
    category: "AI Engineering",
    verified: true,
  },
  {
    name: "Kevin Tan",
    course: "Python AI Course",
    text: "Good structure overall. Starts simple and then slowly gets more advanced. I appreciated that they didn’t rush through concepts.",
    rating: 5,
    category: "Programming",
    verified: true,
  },
  {
    name: "Michael Johnson",
    course: "Machine Learning Bootcamp",
    text: "I’ve taken a few online courses before, but this felt different. More focused on actually building things instead of just watching.",
    rating: 5,
    category: "AI & ML",
    verified: true,
  },
  {
    name: "Priya Sharma",
    course: "SQL Bootcamp",
    text: "I was from a non-tech background, so I was a bit nervous. But the way they explained basics made it easier to follow. Practice sessions helped a lot.",
    rating: 5,
    category: "Data Engineering",
    verified: true,
  },
  {
    name: "Ahmed El-Sayed",
    course: "AI Agents Engineering Bootcamp",
    text: "This is not a beginner-level easy course, but if you stick with it, you learn a lot. The projects are actually useful, not just for show.",
    rating: 5,
    category: "AI Engineering",
    verified: true,
  },
];
