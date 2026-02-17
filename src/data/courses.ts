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

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Professional";
  duration: string;
  liveInteractiveClasses: boolean;
  projects: Project[];
  tools: Tool[];
  requirements: string[];
  curriculum: Module[];
}

export const courses: Course[] = [
  {
    slug: "python-for-beginners",
    title: "Python for Beginners",
    subtitle: "Start Your Coding Journey",
    description:
      "Master the basics of Python programming. Perfect for absolute beginners with no prior coding experience.",
    price: "€199,00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnXzm2Kf3j9bERb1rtP32C7IcexoCwPcaWiICgT0i5d6zZIsG3_LKf1DvMDxxUYyj2k8qDa4Rdq21XH83F63MqQa4qGCHTcEbxKfxMapyAVNCgK_1qc7L9IJtBVKcVNp4NYpGM32cqy45wyrHl1TLvrrXxL3KpsRxJ6h0dJg6VT5-zH9ZdUQla_8QfQewRIHM4w-30n8phVaxV4rloJWZrEGDK40q6cVTVAOJvIjGzCZDr_4-Y0iHX79-bUHHVcSV3AJgmy7xjptMu", // Placeholder
    category: "Development",
    level: "Beginner",
    duration: "6 Weeks",
    liveInteractiveClasses: true,
    projects: [
      {
        title: "Calculator App",
        description: "Build a fully functional calculator using Python basics.",
        icon: "calculate",
      },
      {
        title: "Number Guessing Game",
        description: "Create an interactive game to guess numbers.",
        icon: "videogame_asset",
      },
      {
        title: "To-Do List CLI",
        description: "Manage tasks with a command-line interface.",
        icon: "list_alt",
      },
    ],
    tools: [
      { name: "VS Code", icon: "code" },
      { name: "Python 3", icon: "terminal" },
      { name: "Git", icon: "history" },
    ],
    requirements: [
      "No prior coding experience needed",
      "A computer (Mac, Windows, or Linux)",
      "Internet connection",
    ],
    curriculum: [
      {
        id: "01",
        title: "Introduction to Python",
        meta: "Weeks 1-2",
        lessons: [
          { title: "Setting up the Environment", type: "video" },
          { title: "Variables and Data Types", type: "live" },
          { title: "Basic Operators", type: "video" },
        ],
        isOpen: true,
      },
      {
        id: "02",
        title: "Control Flow",
        meta: "Weeks 3-4",
        lessons: [
          { title: "If/Else Statements", type: "live" },
          { title: "Loops (For & While)", type: "video" },
          { title: "Functions Basics", type: "live" },
        ],
      },
      {
        id: "03",
        title: "Data Structures Basics",
        meta: "Weeks 5-6",
        lessons: [
          { title: "Lists and Tuples", type: "video" },
          { title: "Dictionaries and Sets", type: "live" },
          { title: "Final Beginner Project", type: "live" },
        ],
      },
    ],
  },
  {
    slug: "python-for-intermediate",
    title: "Python for Intermediate",
    subtitle: "Level Up Your Skills",
    description:
      "Dive deeper into Python with Object-Oriented Programming, file handling, and intermediate algorithms.",
    price: "€299,00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDi7_tFib3FMI8n6oyKaCWfoJ03FXj7_fOuMyOHK-0IXV4I7H1ZDOVp248bkBrCPwBzeU7oYtDlAJ8bIde02tsLlzmVcGwA7PRE7-jMDcm7N9rnPUCKSnX3QmNmUoRxEd_DicUbBHu2qK_qSjykOClcadnZlboeyAuxiKs8EK10U-h5e2mI-P7JbtFd_JN78Zoso8uYRKcytJSNzWLXz0L53LSgyqsM582z-STsh0IK2GLfktZU4w8Y3_7IzO3-LpNXjdd7lhEovlKo",
    category: "Development",
    level: "Intermediate",
    duration: "8 Weeks",
    liveInteractiveClasses: true,
    projects: [
      {
        title: "Weather App API",
        description: "Fetch weather data from an API and display it.",
        icon: "cloud",
      },
      {
        title: "Expense Tracker",
        description: "Track expenses with file storage.",
        icon: "attach_money",
      },
      {
        title: "Web Scraper",
        description: "Scrape data from websites using BeautifulSoup.",
        icon: "public",
      },
    ],
    tools: [
      { name: "PyCharm", icon: "laptop_mac" },
      { name: "Virtual Environments", icon: "layers" },
      { name: "Pip", icon: "download" },
    ],
    requirements: [
      "Basic understanding of Python syntax",
      "Knowledge of variables, loops, and functions",
      "Familiarity with using a terminal",
    ],
    curriculum: [
      {
        id: "01",
        title: "Object-Oriented Programming",
        meta: "Weeks 1-3",
        lessons: [
          { title: "Classes and Objects", type: "live" },
          { title: "Inheritance and Polymorphism", type: "video" },
          { title: "Encapsulation", type: "live" },
        ],
        isOpen: true,
      },
      {
        id: "02",
        title: "Advanced Data Handling",
        meta: "Weeks 4-6",
        lessons: [
          { title: "File I/O", type: "video" },
          { title: "Exception Handling", type: "live" },
          { title: "Modules and Packages", type: "video" },
        ],
      },
      {
        id: "03",
        title: "Web Interaction",
        meta: "Weeks 7-8",
        lessons: [
          { title: "Working with APIs", type: "live" },
          { title: "Web Scraping Basics", type: "live" },
          { title: "Intermediate Project", type: "live" },
        ],
      },
    ],
  },
  {
    slug: "python-for-professional",
    title: "Python for Professional",
    subtitle: "Master Advanced Concepts",
    description:
      "Become a Python Pro. Master Data Science, Machine Learning, and scalable application development.",
    price: "€499,00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbE-g_pFwT0Wq1S1iOuag7oISnFiQCtjvjyUEhf4p9V1MdrLTjNeealsbf8vYlIjMwA9C46hdaOhlVuWMT-N_MIqUFczIQsQpCLJvyOJ77uHjzpMC36_cnS5sMOPxo4nrgDvgP2uD31MOvwamfVsIipuxaTLsaRXYjhp_pFQ3b6oKLE97OpvXu_GHfg1uDTXlO1g1XY07hfguOyNS3eIrHE1ExowlD7FA5EVaOTHHTGW9p9ThOgb8WmSn6AA9IYTHLInZzC1qaKITV",
    category: "Development",
    level: "Professional",
    duration: "12 Weeks",
    liveInteractiveClasses: true,
    projects: [
      {
        title: "E-commerce Backend",
        description: "Build a scalable backend with Django/FastAPI.",
        icon: "shopping_cart",
      },
      {
        title: "Data Analysis Dashboard",
        description: "Visualize complex data with Pandas and Matplotlib.",
        icon: "analytics",
      },
      {
        title: "AI Chatbot",
        description: "Create a chatbot using Machine Learning basics.",
        icon: "smart_toy",
      },
    ],
    tools: [
      { name: "Docker", icon: "dns" },
      { name: "Django / FastAPI", icon: "web" },
      { name: "Jupyter Notebooks", icon: "menu_book" },
      { name: "PostgreSQL", icon: "storage" },
    ],
    requirements: [
      "Solid understanding of Python and OOP",
      "Experience with libraries and frameworks",
      "Desire to build production-ready software",
    ],
    curriculum: [
      {
        id: "01",
        title: "Advanced Python Features",
        meta: "Weeks 1-3",
        lessons: [
          { title: "Decorators and Generators", type: "live" },
          { title: "Metaclasses", type: "video" },
          { title: "Concurrency and Parallelism", type: "live" },
        ],
        isOpen: true,
      },
      {
        id: "02",
        title: "Data Science & ML",
        meta: "Weeks 4-8",
        lessons: [
          { title: "NumPy & Pandas", type: "live" },
          { title: "Data Visualization", type: "video" },
          { title: "Intro to Machine Learning", type: "live" },
        ],
      },
      {
        id: "03",
        title: "Web Frameworks & Deployment",
        meta: "Weeks 9-12",
        lessons: [
          { title: "Django/FastAPI Deep Dive", type: "live" },
          { title: "Database Management", type: "video" },
          { title: "Deployment with Docker", type: "live" },
        ],
      },
    ],
  },
];
