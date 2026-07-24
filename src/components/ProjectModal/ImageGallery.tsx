import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./ImageGallery.css";
import Lightbox from "./Lightbox";

interface ImageGalleryProps {
  image: string;
  images?: string[];
  title: string;
}

const ImageGallery = ({
  image,
  images,
  title,
}: ImageGalleryProps) => {
  const gallery =
    images && images.length > 0
      ? images
      : [image];

  const [currentIndex, setCurrentIndex] = useState(0);
const [showLightbox, setShowLightbox] =
useState(false);
  
  useEffect(() => {
    setCurrentIndex(0);
  }, [image, images]);

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
    <div className="gallery-wrapper">

      <img
    src={gallery[currentIndex]}
    className="modal-image"
    onClick={() => setShowLightbox(true)}
/>

      {gallery.length > 1 && (
        <>
          <button
            className="gallery-arrow left"
            onClick={previousImage}
          >
            <FaChevronLeft />
          </button>

          <button
            className="gallery-arrow right"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>

          <div className="modal-gallery">

            {gallery.map((img, index) => (
              <img
                key={img}
                src={img}
                alt={`${title} ${index + 1}`}
                loading="lazy"
                className={
                  index === currentIndex
                    ? "gallery-thumb active"
                    : "gallery-thumb"
                }
                onClick={() => setCurrentIndex(index)}
              />
            ))}

          </div>

          <div className="gallery-dots">

            {gallery.map((_, index) => (
              <span
                key={index}
                className={
                  index === currentIndex
                    ? "gallery-dot active"
                    : "gallery-dot"
                }
              />
            ))}

          </div>

        </>
      )}

    </div>
 
    {
showLightbox && (

<Lightbox
    images={gallery}
    currentIndex={currentIndex}
    onClose={() => setShowLightbox(false)}
    onPrevious={previousImage}
    onNext={nextImage}
/>

)
  }
</>
  );
};

export default ImageGallery;