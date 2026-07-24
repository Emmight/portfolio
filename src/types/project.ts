export type ProjectCategory =
  | "web"
  | "design"
  | "motion";

export interface Project {
  id: number;

  title: string;

  category: ProjectCategory;

  shortDescription: string;

  description: string;

  challenge: string;

  solution: string;

  features: string[];

  technologies: string[];

  image: string;

  images?: string[];

  video?: string;

  client: string;

  role: string;

  duration: string;

  year: string;

  status: "Completed" | "In Progress";

  results?: string[];

  github?: string;

  live?: string;

  behance?: string;

  featured: boolean;
}