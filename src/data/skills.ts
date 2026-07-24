import {
  FaCode,
  FaServer,
  FaDatabase,
  FaWordpress,
  FaPaintBrush,
  FaTools,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPalette,
  FaPhotoVideo,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiExpress,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiVite,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export const skills = {
  title: "Skills & Technologies",

  subtitle:
    "A collection of the technologies, tools and creative software I use to build modern, scalable and visually engaging digital experiences.",

  categories: [
    {
      title: "Frontend",
      icon: FaCode,

      technologies: [
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },

    {
      title: "Backend",

      icon: FaServer,

      technologies: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "PHP", icon: SiPhp },
        { name: "REST API", icon: FaServer },
      ],
    },

    {
      title: "Database",

      icon: FaDatabase,

      technologies: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
      ],
    },

    {
      title: "CMS",

      icon: FaWordpress,

      technologies: [
        { name: "WordPress", icon: FaWordpress },
      ],
    },

    {
  title: "Design & Creative",

  icon: FaPaintBrush,

  technologies: [
    {
      name: "Figma",
      icon: FaFigma,
    },

    {
      name: "Adobe Photoshop",
      icon: FaPalette,
    },

    {
      name: "After Effects",
      icon: FaPhotoVideo,
    },

    {
      name: "Premiere Pro",
      icon: FaPhotoVideo,
    },

    {
      name: "Brand Identity",
      icon: FaPaintBrush,
    },
  ],
},

    {
      title: "Tools",

      icon: FaTools,

      technologies: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Vite", icon: SiVite },
        {
          name: "VS Code",
          icon: VscCode,
        },
      ],
    },
  ],
};