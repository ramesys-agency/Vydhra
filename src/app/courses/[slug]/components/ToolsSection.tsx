
import React from "react";
import { Tool } from "@/data/courses";
import Icon from "@/components/common/Icon";

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
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center border border-border group-hover:border-primary transition-colors duration-300">
              <Icon 
                name={tool.icon} 
                className="text-3xl text-gray-400 group-hover:text-primary transition-colors duration-300"
                size={32}
              />
            </div>
            <span className="font-medium text-sm text-foreground">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
