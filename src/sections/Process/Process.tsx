import Container from "../../components/Container/Container";
import { process } from "../../data/process";
import "./Process.css";

const Process = () => {
  return (
    <Container>
      <section className="process" id="process">

        <h2
          className="process-title"
          data-aos="zoom-in"
        >
          {process.title}
        </h2>

        <p
          className="process-subtitle"
          data-aos="fade-up"
        >
          {process.subtitle}
        </p>

        <div className="process-grid">

          {process.steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <article
                key={step.number}
                className="process-card"
                data-aos="zoom-in"
data-aos-delay={index * 100}
              >

                <span className="process-number">
                  {step.number}
                </span>

                <div className="process-icon">
                  <Icon size={26} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </article>

            );
          })}

        </div>

      </section>
    </Container>
  );
};

export default Process;