import Container from "../../components/Container/Container";
import { testimonials } from "../../data/testimonials";
import "./Testimonials.css";
import { Star } from "lucide-react";

const Testimonials = () => (
  <Container>
    <section className="testimonials">
      <h2 className="testimonial-title" data-aos="zoom-in">Client Testimonials</h2>

      <p className="testimonial-subtitle" data-aos="fade-up">
        Feedback from clients and collaborators I've had the privilege to work
        with.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article
            className="testimonial-card"
            key={testimonial.id}
           data-aos="fade-up">
            <div className="testimonial-stars" data-aos="zoom-in">
              {
                Array.from({ length: 5 }).map((_, index) => (
  <Star
    key={index}
    className="star-icon"
  />
))
              }
            </div>

            <p className="testimonial-message" data-aos="fade-up">
              "{testimonial.message}"
            </p>

            <footer className="testimonial-footer">
              <img className="testimonial-avatar" src={testimonial.avatar} data-aos="zoom-in"/>

              <div className="testimonial-info" data-aos="fade-up">
                <h3 className="testimonial-name">
                  {testimonial.name}
                </h3>

                <p className="testimonial-role">
                  {testimonial.role}
                </p>

                <span className="testimonial-company">
                  {testimonial.company}
                </span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  </Container>
);

export default Testimonials;