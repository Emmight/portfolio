import { useState, useEffect } from "react";
import type {
  Project,
  ProjectCategory,
} from "../../types/project";

import { projects } from "../../data/project";

import Container from "../../components/Container/Container";
import ProjectModal from "../../components/ProjectModal/ProjectModal";

import "./Project.css";

import {
  FaGlobe,
  FaPalette,
  FaVideo,
  FaThLarge,
} from "react-icons/fa";

const filters = [
  {
    label: "All",
    value: "all",
    icon: <FaThLarge />,
  },
  {
    label: "Web Apps",
    value: "web",
    icon: <FaGlobe />,
  },
  {
    label: "Design",
    value: "design",
    icon: <FaPalette />,
  },
 /* {
    label: "Motion",
    value: "motion",
    icon: <FaVideo />,
  },*/
] as const;

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({
  project,
  onClick,
}: ProjectCardProps) => (
  <article
    className="project-card"
    onClick={onClick}
    data-aos="zoom-in"
  >
    <div className="project-image">

      <img
        src={project.image}
        alt={project.title}
      />

      <span className="project-category">
        {project.category.toUpperCase()}
      </span>

      {project.featured && (
        <span className="featured-badge">
          Featured
        </span>
      )}

    </div>

    <div className="project-content">

      <h3 className="project-title">
        {project.title}
      </h3>

      <p className="project-description">
        {project.shortDescription}
      </p>

      <ul className="project-technologies">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="technology"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="project-footer">

        <span className="view-details">
          Click to view details →
        </span>

      </div>

    </div>
  </article>
);

const Projects = () => {

  const [filter, setFilter] =
    useState<"all" | ProjectCategory>("all");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [selectedProject]);
  
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter
        );

  return (
    <>
      <Container>

        <section
          className="projects"
          id="projects"
        >

          <h2 data-aos="zoom-in">
            Featured Works
          </h2>

          <p data-aos="fade-up">
            A selection of projects showcasing
            my experience in software
            development, graphic design and
            motion graphics.
          </p>

          <div
            className="project-filters"
            data-aos="fade-up"
          >
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() =>
                  setFilter(item.value)
                }
                className={
                  filter === item.value
                    ? "filter-btn active"
                    : "filter-btn"
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() =>
                  setSelectedProject(project)
                }
              />
            ))}
          </div>

        </section>

      </Container>

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </>
  );
};

export default Projects;