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

export const courses: Course[] = [
  {
    slug: "ml-job-ready",
    title: "ML Job Ready Bootcamp",
    subtitle: "8-Week Intensive Machine Learning Journey",
    description:
      "A comprehensive, job-focused bootcamp designed to take you from foundational statistics to advanced deep learning. Build a professional portfolio and get ready for the AI job market.",
    price: "$499.00",
    image:
      "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=2000&auto=format&fit=crop",
    category: "AI & ML",
    level: "Professional",
    duration: "8 Weeks",
    liveInteractiveClasses: true,
    projects: [
      {
        title: "Predictive Sales Model",
        description: "Build a regression model to predict future sales trends.",
        icon: "trending_up",
      },
      {
        title: "Customer Segmentation",
        description: "Use clustering to group customers based on behavior.",
        icon: "groups",
      },
      {
        title: "Image Classifier",
        description: "Develop a deep learning model for visual recognition.",
        icon: "camera_alt",
      },
    ],
    tools: [
      { name: "Scikit-Learn", icon: "scikit-learn" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Pandas", icon: "pandas" },
      { name: "GitHub", icon: "github" },
    ],
    requirements: [
      "Basic Python knowledge",
      "Understanding of basic math/algebra",
      "A laptop and stable internet",
    ],
    curriculum: [
      {
        id: "01",
        title: "Intro to Machine Learning & Statistics",
        meta: "Week 1",
        lessons: [
          {
            title: "What is ML? Types and Real-world applications",
            type: "video",
          },
          {
            title: "Descriptive Statistics: Mean, Median, Mode, Std Dev",
            type: "live",
          },
          {
            title: "Probability Basics & Inferential Statistics",
            type: "video",
          },
        ],
        practice: "Exploratory Data Analysis (EDA) on a basic dataset",
        outcome:
          "Students understand ML terminology and the mathematical backbone of data analysis.",
        isOpen: true,
      },
      {
        id: "02",
        title: "Python for Data Science",
        meta: "Week 2",
        lessons: [
          { title: "NumPy for numerical operations", type: "live" },
          {
            title: "Pandas for data manipulation & Series/DataFrames",
            type: "video",
          },
          {
            title: "Matplotlib & Seaborn for data visualization",
            type: "live",
          },
        ],
        practice: "Automating data summary reports using Pandas",
        outcome:
          "Students can load, manipulate, and visualize datasets efficiently using Python.",
      },
      {
        id: "03",
        title: "Data Preprocessing & Cleaning",
        meta: "Week 3",
        lessons: [
          { title: "Handling missing values & outliers", type: "video" },
          {
            title: "Feature scaling (Standardization/Normalization)",
            type: "live",
          },
          { title: "Encoding categorical variables", type: "video" },
        ],
        practice: "Preparing a 'dirty' dataset for machine learning models",
        outcome:
          "Students gain the ability to turn raw, messy data into high-quality training features.",
      },
      {
        id: "04",
        title: "Supervised Learning (Regression)",
        meta: "Week 4",
        lessons: [
          {
            title: "Linear Regression & Multi-Linear Regression",
            type: "live",
          },
          {
            title: "Cost functions, Gradient Descent, & MSE/R2-score",
            type: "video",
          },
          { title: "Regularization (Lasso/Ridge regression)", type: "live" },
        ],
        practice: "House price prediction project",
        outcome:
          "Students can build predictive models for continuous values and evaluate performance.",
      },
      {
        id: "05",
        title: "Supervised Learning (Classification)",
        meta: "Week 5",
        lessons: [
          { title: "Logistic Regression & Decision Trees", type: "video" },
          {
            title: "Random Forest & Support Vector Machines (SVM)",
            type: "live",
          },
          {
            title: "Confusion matrix, Precision, Recall, & F1-score",
            type: "video",
          },
        ],
        practice: "Spam detection or Loan approval project",
        outcome:
          "Students can build robust classification models and interpret evaluation metrics.",
      },
      {
        id: "06",
        title: "Unsupervised Learning",
        meta: "Week 6",
        lessons: [
          { title: "Clustering (K-Means & Hierarchical)", type: "live" },
          { title: "Dimensionality Reduction (PCA basics)", type: "video" },
          { title: "Association Rule Learning", type: "live" },
        ],
        practice: "Customer segmentation project",
        outcome:
          "Students can identify patterns and group data in practical scenarios.",
      },
      {
        id: "07",
        title: "Deep Learning Fundamentals",
        meta: "Week 7",
        lessons: [
          {
            title: "Neural networks, layers, and activation functions",
            type: "video",
          },
          { title: "TensorFlow/Keras introduction", type: "live" },
          {
            title: "When to use Deep Learning vs Traditional ML",
            type: "video",
          },
        ],
        practice: "Basic image classification demonstration",
        outcome:
          "Students gain a strong beginner-level understanding of deep learning concepts and tools.",
      },
      {
        id: "08",
        title: "Capstone & Job Readiness",
        meta: "Week 8",
        lessons: [
          { title: "End-to-end ML project workflow", type: "live" },
          { title: "Model evaluation & deployment basics", type: "video" },
          { title: "GitHub portfolio polish & Interview prep", type: "live" },
        ],
        outcome:
          "Students complete a portfolio-ready ML project and strengthen job readiness.",
        isOpen: true,
      },
    ],
    features: [
      "8-week intensive bootcamp from scratch",
      "Focus on job readiness and real-world ML workflows",
      "Hands-on portfolio building",
      "Live interactive classes with industry experts",
    ],
    testimonials: [
      {
        name: "SVEN",
        role: "SOFTWARE ENGINEER",
        text: "I can't emphasize enough how valuable this course is. Learning Python through this course completely shifted my professional focus.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBOdBRCWmTBTRC_HZfFKGkpWp-HFz3BLIUTk5nerVlvHn1pS4QO-wGcatYu_kz7AXb4kvjAU4O7ie68XhcjoySty9C_xzr0fCbsgwRXye-GR1HjpqVdrvax-u34X_kboSum5S9exzrSc6_hHM_4aZVrrwJRLA9xEdDg8vZJAkgNJBM0WZeyeJ6iorvJOj0s1Czz2-75U-bJn7VlkbJsh8FL11wahHhCLK8Mf6OOtSuc313j_xg4OcHKxaM2RuXCTk50DGR0OFhjrx6q",
      },
    ],
  },
  {
    slug: "python-ai",
    title: "Python AI Course",
    subtitle: "Master Python & AI Workflows",
    description:
      "A 2-month comprehensive program covering Python foundations, advanced algorithms, and modern AI toolkits including APIs, SQL, and LLM-based workflows.",
    price: "$299.00",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop",
    category: "Programming",
    level: "Beginner",
    duration: "8 Weeks",
    liveInteractiveClasses: true,
    projects: [
      {
        title: "Command-Line Calculator Tool",
        description:
          "Understand core Python concepts by building a working calculator from scratch.",
        icon: "calculate",
      },
      {
        title: "Interactive Logic Game",
        description:
          "Apply conditions and loops to create an interactive number-based game.",
        icon: "sports_esports",
      },
      {
        title: "Task Manager with File Saving",
        description:
          "Build a simple command-line tool to manage daily tasks and understand real-world program flow.",
        icon: "assignment",
      },
    ],
    tools: [
      { name: "VS Code", icon: "vscode" },
      { name: "Python 3", icon: "python" },
      { name: "Git", icon: "git" },
    ],
    requirements: [
      "No programming background required",
      "A laptop or desktop (Windows, macOS, or Linux)",
      "Basic computer usage knowledge",
      "Commitment to practice regularly",
    ],
    curriculum: [
      {
        id: "01",
        title: "Python Foundations",
        meta: "Week 1",
        lessons: [
          {
            title: "Intro to Python: Installation and Hello World",
            type: "video",
          },
          { title: "Variables, Data Types, and Type Casting", type: "live" },
          {
            title: "Basic Operators: Arithmetic, Comparison & Logical",
            type: "video",
          },
        ],
        practice: "Building a basic BMI or Currency Converter calculator",
        outcome:
          "Students can write simple scripts and understand how computers store information.",
        isOpen: true,
      },
      {
        id: "02",
        title: "Control Flow & Data Structures",
        meta: "Week 2",
        lessons: [
          {
            title: "Conditional Statements (If-Else, Match-Case)",
            type: "live",
          },
          { title: "Loops: For & While loops with range", type: "video" },
          { title: "List, Tuple, Set & Dictionary essentials", type: "live" },
        ],
        practice: "Creating a mini To-Do List or Grocery List app",
        outcome:
          "Students can implement logic and manage collections of data efficiently.",
      },
      {
        id: "03",
        title: "Functions & Logic Building",
        meta: "Week 3",
        lessons: [
          {
            title: "Defining functions, parameters, and return values",
            type: "video",
          },
          { title: "Lambda functions & recursion basics", type: "live" },
          { title: "Scope, local vs global variables", type: "video" },
        ],
        practice: "Building a functional 'Rock, Paper, Scissors' game",
        outcome:
          "Students can write reusable, modular code and break down complex problems.",
      },
      {
        id: "04",
        title: "File Handling & Error Handling",
        meta: "Week 4",
        lessons: [
          { title: "Reading/Writing text and CSV files", type: "live" },
          { title: "With-statement context managers", type: "video" },
          { title: "Try-Except blocks and debugging basics", type: "live" },
        ],
        practice: "Building a password manager that saves to a file",
        outcome:
          "Students can work with external data and build error-resistant programs.",
      },
      {
        id: "05",
        title: "Advanced Python & Algorithms",
        meta: "Week 5",
        lessons: [
          { title: "List comprehensions and generators", type: "video" },
          { title: "Built-in modules: Math, Random, Datetime", type: "live" },
          {
            title: "Intro to basic sorting and searching algorithms",
            type: "video",
          },
        ],
        practice: "Solving logic puzzles using advanced Python features",
        outcome:
          "Students can write highly optimized and performance-oriented code.",
      },
      {
        id: "06",
        title: "OOPs & Git Version Control",
        meta: "Week 6",
        lessons: [
          { title: "Classes, Objects, and __init__ method", type: "live" },
          {
            title: "Git basics: GitHub repos, commits, push workflow",
            type: "video",
          },
          { title: "Inheritance and portfolio hygiene", type: "live" },
        ],
        practice: "Student record class and publishing to GitHub",
        outcome:
          "Students can build class-based programs and publish work professionally.",
      },
      {
        id: "07",
        title: "APIs, SQL & AI Basics",
        meta: "Week 7",
        lessons: [
          { title: "API basics with requests & JSON", type: "video" },
          { title: "SQL basics & data querying", type: "live" },
          { title: "Prompt Engineering & intro to LLM APIs", type: "video" },
        ],
        practice: "Weather app and prompt design practice",
        outcome:
          "Students gain exposure to data querying, APIs, and AI workflow concepts.",
      },
      {
        id: "08",
        title: "Capstone & Job Readiness",
        meta: "Week 8",
        lessons: [
          { title: "Capstone planning and development", type: "live" },
          { title: "Testing, debugging, and cleanup", type: "video" },
          { title: "Resume, LinkedIn & GitHub polish", type: "live" },
        ],
        practice: "Final capstone, README, and mock interview",
        outcome:
          "Students finish with a portfolio-ready project and fresher job readiness.",
        isOpen: true,
      },
    ],
    features: [
      "Step-by-step structure designed for absolute beginners",
      "Focus on understanding concepts, not memorizing syntax",
      "Hands-on learning through guided exercises and projects",
      "Clean teaching approach without unnecessary complexity",
      "Helps build confidence to write programs independently",
    ],
    testimonials: [
      {
        name: "ALEX M.",
        role: "STUDENT (UK)",
        text: "I had no coding background before starting this course. The way concepts are explained made it very easy to follow. I was able to build small programs on my own within a few weeks.",
      },
      {
        name: "FATIMA K.",
        role: "UNIVERSITY STUDENT (DUBAI)",
        text: "This course helped me understand Python in a simple and practical way. The projects made a big difference because I could actually apply what I learned.",
      },
      {
        name: "DANIEL R.",
        role: "WORKING PROFESSIONAL (USA)",
        text: "I tried learning Python before but got confused. This course made things clear step by step. It’s perfect if you want a strong foundation without feeling overwhelmed.",
      },
    ],
  },
];
