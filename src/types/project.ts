export type ProjectCategory =
  | "web"
  | "design"
  | "motion";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  features: string[];
  technologies: string[];
  image: string;
  images?: string[];
  video?: string;
  role: string;
  github?: string;
  live?: string;
  behance?: string;
  featured: boolean;
  year?: string;
}