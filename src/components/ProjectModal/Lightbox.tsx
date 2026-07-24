import React, { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Lightbox.css";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) => {
  useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {

    switch (event.key) {

      case "Escape":
        onClose();
        break;

      case "ArrowLeft":
        onPrevious();
        break;

      case "ArrowRight":
        onNext();
        break;

      default:
        break;
    }

  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };

}, [onClose, onPrevious, onNext]);
  
  return (
    <div className="lightbox-overlay" onClick={onClose}>

      <div
        className="lightbox"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="lightbox-close"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <button
          className="lightbox-arrow left"
          onClick={onPrevious}
        >
          <FaChevronLeft />
        </button>

        <img
          src={images[currentIndex]}
          className="lightbox-image"
        />

        <button
          className="lightbox-arrow right"
          onClick={onNext}
        >
          <FaChevronRight />
        </button>

      </div>

    </div>
  );
};

export default Lightbox;