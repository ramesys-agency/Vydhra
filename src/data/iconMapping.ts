import { 
  SiPython, 
  SiScikitlearn, 
  SiTensorflow, 
  SiPandas, 
  SiGit, 
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiOpenai,
  SiLangchain,
  SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { 
  TrendingUp, 
  Users, 
  Camera, 
  Calculator, 
  Gamepad2, 
  ClipboardList,
  Code2,
  Terminal,
  History,
  ArrowRight,
  Construction,
  BadgeCheck,
  Smile,
  Zap,
  LucideProps,
  Layout,
  Server,
  Database,
  ShieldCheck,
  Bot,
  Cpu,
  Layers,
  Globe,
  Monitor,
  Search,
  PenTool
} from "lucide-react";
import { IconType } from "react-icons";

export type IconComponentType = IconType | React.ComponentType<LucideProps>;

export const iconMapping: Record<string, IconComponentType> = {
  // Technology Icons
  "python": SiPython,
  "scikit-learn": SiScikitlearn,
  "tensorflow": SiTensorflow,
  "pandas": SiPandas,
  "vscode": VscVscode,
  "git": SiGit,
  "github": SiGithub,

  // UI Icons (Lucide)
  "trending_up": TrendingUp,
  "groups": Users,
  "camera_alt": Camera,
  "calculate": Calculator,
  "sports_esports": Gamepad2,
  "assignment": ClipboardList,
  "code": Code2,
  "terminal": Terminal,
  "history": History,
  "arrow_forward": ArrowRight,
  "construction": Construction,
  "verified": BadgeCheck,
  "sentiment_satisfied_alt": Smile,
  "psychology_alt": Zap,
  
  // New Course Icons
  "react": SiReact,
  "node": SiNodedotjs,
  "mongodb": SiMongodb,
  "express": SiExpress,
  "tailwind": SiTailwindcss,
  "postgresql": SiPostgresql,
  "prisma": SiPrisma,
  "openai": SiOpenai,
  "langchain": SiLangchain,
  "vercel": SiVercel,

  // UI Icons
  "layout": Layout,
  "server": Server,
  "database": Database,
  "secure": ShieldCheck,
  "bot": Bot,
  "cpu": Cpu,
  "layers": Layers,
  "globe": Globe,
  "monitor": Monitor,
  "search": Search,
  "edit": PenTool,

  // Fallbacks
  "science": SiScikitlearn,
  "psychology": SiTensorflow,
  "table_chart": SiPandas,
};
