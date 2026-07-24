import { useState } from "react";
import emailjs from "@emailjs/browser";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { contact } from "../../data/contact";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";

import "./Contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState("");

const [error, setError] = useState("");
  
const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  setError("");
  setSuccess("");
  
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const showError = (message: string) => {
  setError(message);

  setTimeout(() => {
    setError("");
  }, 4000);
};

const showSuccess = (message: string) => {
  setSuccess(message);

  setTimeout(() => {
    setSuccess("");
  }, 4000);
};
  
  const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setSuccess("");
  setError("");



  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.name.trim()) {
  showError("Please enter your name.");
  return;
}

if (!formData.email.trim()) {
  showError("Please enter your email.");
  return;
}

if (!emailRegex.test(formData.email)) {
  showError("Please enter a valid email address.");
  return;
}

if (!formData.subject.trim()) {
  showError("Please enter a subject.");
  return;
}

if (!formData.message.trim()) {
  showError("Please enter your message.");
  return;
}
  
  setLoading(true);

emailjs
  .send(
    "service_7kwv8mv",
    "template_8x2ifkd",
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    "-VJdmRQq4FBJkE3cJ"
  )
  .then(() => {
    showSuccess("Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  })
  .catch(() => {
    showError(
      "Something went wrong. Please try again."
    );
  })
  .finally(() => {
    setLoading(false);
  });
}
  return (
    <Container>
      <section className="contact" id="contact">
        <div className="contact-content">
          <h2 className="contact-title" data-aos="zoom-in">
            {contact.title}
          </h2>

          <p
            className="contact-description"
            data-aos="fade-up"
          >
            {contact.description}
          </p>
        </div>

        <div className="contact-wrapper">

          {/* LEFT CARD */}

          <div
            className="contact-card"
            data-aos="zoom-in"
          >
            <div className="availability">
              <span className="status-dot"></span>
              Available for Freelance Projects
            </div>

            <ul className="contact-list">

              <li className="contact-item">
                <FaEnvelope />

                <div>
                  <strong>Email</strong>

                  <a href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <FaWhatsapp />

                <div>
                  <strong>WhatsApp</strong>

                  <a href={`tel:${contact.phone}`}>
                    {contact.phone}
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <FaGithub />

                <div>
                  <strong>GitHub</strong>

                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <FaLinkedin />

                <div>
                  <strong>LinkedIn</strong>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <FaLocationDot />

                <div>
                  <strong>Location</strong>

                  <address>
                    {contact.location}
                  </address>
                </div>
              </li>

            </ul>
          </div>

          {/* RIGHT CARD */}

          <div
            className="contact-form-card"
            data-aos="zoom-in"
          >
            <h3>Send a Message</h3>

            <p>
              Have a project in mind? Fill out the form
              and I'll get back to you as soon as possible.
            </p>

            <form className="contact-form" id="contact-form" onSubmit={handleSubmit} noValidate>

            <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

              <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

          <textarea
            name="message"
            rows={6}
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
          />
  {error && (
  <p className="form-error">
  {error}
</p>
)}
{success && (
  <p className="form-success">
    {success}
  </p>
)}
              <Button
  text={loading ? "Sending..." : "Send Message"}
  variant="primary"
  type="submit"
  disabled={loading}
/>

            </form>
          </div>

        </div>
      </section>
    </Container>
  );
};

export default Contact;