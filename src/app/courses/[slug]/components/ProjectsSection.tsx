
import React from "react";
import { Project } from "@/data/courses";
import Icon from "@/components/common/Icon";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-8">
        Projects You Will Build
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
              <Icon name={project.icon} size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
