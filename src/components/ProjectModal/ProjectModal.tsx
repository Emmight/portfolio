import type { Project } from "../../types/project";

import ImageGallery from "./ImageGallery";
import ProjectInfo from "./ProjectInfo";
import ProjectLinks from "./ProjectLinks";

import { FaTimes } from "react-icons/fa";

import "./ProjectModal.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({
  project,
  onClose,
}: ProjectModalProps) => {

  if (!project) return null;

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-modal"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <ImageGallery
          image={project.image}
          images={project.images}
          title={project.title}
        />

        <ProjectInfo
          project={project}
        />

        <ProjectLinks
          project={project}
        />

      </div>

    </div>

  );
};

export default ProjectModal;