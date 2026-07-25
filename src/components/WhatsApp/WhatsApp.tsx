import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2349113960286?text=Hi%20Emmanuel,%20I%20came%20across%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;