
import React from "react";
import { Tool } from "@/data/courses";

interface ToolsSectionProps {
  tools: Tool[];
}

export default function ToolsSection({ tools }: ToolsSectionProps) {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-8">
        Tools You Will Master
      </h2>
      <div className="flex flex-wrap gap-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 bg-gray-50 dark:bg-card-dark rounded-full flex items-center justify-center border border-gray-100 dark:border-border-dark group-hover:border-primary transition-colors duration-300">
              <span className="material-icons text-3xl text-gray-400 group-hover:text-primary transition-colors duration-300">
                {tool.icon}
              </span>
            </div>
            <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
