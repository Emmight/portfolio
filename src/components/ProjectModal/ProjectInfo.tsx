import type { Project } from "../../types/project";

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  return (
    <div className="modal-content">

      {/* Header */}
      <div className="modal-header">

        <span className="modal-category">
          {project.category.toUpperCase()}
        </span>

        <h2>{project.title}</h2>

        <span className="project-role">
          {project.role}
        </span>

        <p className="modal-description">
          {project.shortDescription}
        </p>

      </div>

      {/* Highlights */}
      <section className="modal-section">

        <h3>Highlights</h3>

        <ul type="none" className="modal-features">
          {project.features.map((feature) => (
            <li key={feature}>
              ✓ {feature}
            </li>
          ))}
        </ul>

      </section>

      {/* Tech Stack */}
      <section className="modal-section">

        <h3>Tech Stack</h3>

        <div className="modal-technologies">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="technology"
            >
              {tech}
            </span>
          ))}
        </div>

      </section>

    </div>
  );
};

export default ProjectInfo;