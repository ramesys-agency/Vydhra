import { 
  SiPython, 
  SiScikitlearn, 
  SiTensorflow, 
  SiPandas, 
  SiGit, 
  SiGithub 
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
  LucideProps
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
  
  // Fallbacks for current material-icons names or aliases
  "science": SiScikitlearn,
  "psychology": SiTensorflow,
  "table_chart": SiPandas,
};
