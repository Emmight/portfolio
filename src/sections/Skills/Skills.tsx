import { skills } from "../../data/skills";
import Container from "../../components/Container/Container";
import "./Skills.css";

const Skills = () => (
  <Container>
    <section className="skills" id="skills">
      <h2
        className="skill-title"
        data-aos="zoom-in"
      >
        {skills.title}
      </h2>

      <p
        className="skill-subtitle"
        data-aos="fade-up"
      >
        {skills.subtitle}
      </p>

      <div className="skills-grid">

        {skills.categories.map((category) => {

          const CategoryIcon = category.icon;

          return (
            <article
              className="skill-card"
              key={category.title}
              data-aos="zoom-in"
            >

              <div className="skill-card-header">

                <div className="skill-icon">

                  <CategoryIcon />

                </div>

                <h3>{category.title}</h3>

              </div>

              <div className="technology-list">

                {category.technologies.map(
                  (technology) => {

                    const TechIcon =
                      technology.icon;

                    return (

                      <div
                        className="technology-item"
                        key={technology.name}
                        data-aos="fade-up"
                      >

    <TechIcon className="technology-icon" />

                        <span>
                          {technology.name}
                        </span>

                      </div>

                    );
                  }
                )}

              </div>

            </article>
          );
        })}

      </div>
    </section>
  </Container>
);

export default Skills;