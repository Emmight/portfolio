import type { IconType } from "react-icons";

export interface Technology {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  icon: IconType;
  technologies: Technology[];
}

export interface Skill {
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}