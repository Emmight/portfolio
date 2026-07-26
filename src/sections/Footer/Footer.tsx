import Container from "../../components/Container/Container";
import { footer } from "../../data/footer";
import { links } from "../../data/links";
import { contact } from "../../data/contact";

import { ChevronRight } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

 import "./Footer.css";

const Footer = () => (
  <section id="footer">
  <footer className="footer">
    <Container>
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <h2 data-aos="zoom-in">{footer.logo}</h2>
          <p data-aos="fade-up">{footer.description}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 data-aos="zoom-in">Quick Links</h3>

          <ul data-aos="fade-up">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <ChevronRight size={16} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-social">
          <h3 data-aos="zoom-in">Connect</h3>

          <ul>

            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </li>

            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </li>

          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{footer.copyright}</p>
        <span>{footer.builtWith}</span>
      </div>
    </Container>
  </footer>
  </section>
);

export default Footer;