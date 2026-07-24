import type { Project } from "../../types/project";
import {
  FaGithub,
  FaGlobe,
  FaBehance,
  FaPlayCircle,
} from "react-icons/fa";

interface ProjectLinksProps {
  project: Project;
}

const ProjectLinks = ({ project }: ProjectLinksProps) => {
  return (
    <div className="modal-buttons">

      {/* Web Projects */}
      {project.category === "web" && (
        <>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              <FaGlobe />
              <span>Live Demo</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          )}
        </>
      )}

      {/* Graphic Design */}
      {project.category === "design" && project.behance && (
        <a
          href={project.behance}
          target="_blank"
          rel="noopener noreferrer"
          className="behance-link"
        >
          <FaBehance />
          <span>View Project</span>
        </a>
      )}

      {/* Motion Graphics */}
      {project.category === "motion" && project.video && (
        <a
          href={project.video}
          target="_blank"
          rel="noopener noreferrer"
          className="video-link"
        >
          <FaPlayCircle />
          <span>Watch Showreel</span>
        </a>
      )}

    </div>
  );
};

export default ProjectLinks;