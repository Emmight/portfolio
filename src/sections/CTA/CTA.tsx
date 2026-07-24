import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { cta } from "../../data/cta";
import "./CTA.css";

const CTA = () => {
  return (
    <Container>
      <section className="cta" data-aos="zoom-in" id="cta">

        <div className="cta-glow"></div>

        <div className="cta-content">

          <h2>{cta.title}</h2>

          <p>{cta.description}</p>

          <div className="cta-buttons">

            <a href="#contact">
              <Button
                text={cta.primaryButton}
                variant="primary"
              />
            </a>

            <a
              href="/resume/Emmanuel_Ayoade_Full_Stack_Developer_Resume.pdf"
              download
            >
              <Button
                text={cta.secondaryButton}
                variant="secondary"
              />
            </a>

          </div>

        </div>

      </section>
    </Container>
  );
};

export default CTA;