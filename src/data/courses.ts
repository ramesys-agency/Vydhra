import { Course } from "@/types/course";
import mlJobReady from "./courses/ml-job-ready.json";
import pythonAi from "./courses/python-ai.json";
import mernStackAi from "./courses/mern-stack-ai.json";
import sqlJobReady from "./courses/sql-job-ready.json";
import aiAgentsEngineering from "./courses/ai-agents-engineering.json";

export const courses: Course[] = [
  mlJobReady as Course,
  pythonAi as Course,
  mernStackAi as Course,
  sqlJobReady as Course,
  aiAgentsEngineering as Course,
];
