import React from "react";
import { iconMapping } from "@/data/iconMapping";
import { HelpCircle } from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
}

export default function Icon({ name, className = "", size = 24 }: IconProps) {
  // If we have a mapping for it, use it
  const IconComponent = iconMapping[name.toLowerCase()];

  if (IconComponent) {
    return <IconComponent className={className} size={size} />;
  }

  // Fallback for when no mapping is found
  return <HelpCircle className={className} size={size} />;
}
