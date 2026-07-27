import { useState } from "react";
import { skills } from "../../data/skills";
import Container from "../../components/Container/Container";
import "./Skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const currentCategory = skills.categories[activeTab];

  return (
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

        {/* Tabs */}

        <div
          className="skills-tabs"
          data-aos="fade-up"
        >
          {skills.categories.map((category, index) => {

            const Icon = category.icon;

            return (
              <button
                key={category.title}
                className={
                  activeTab === index
                    ? "skill-tab active"
                    : "skill-tab"
                }
                onClick={() => setActiveTab(index)}
              >
                <Icon size={18} />

                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category */}

        <article
          className="skill-card"
          data-aos="fade-up"
          key={currentCategory.title}
        >

          <div className="skill-card-header">

            <div className="skill-icon">

              <currentCategory.icon />

            </div>

            <h3>{currentCategory.title}</h3>

          </div>

          <div className="technology-list">

            {currentCategory.technologies.map((technology) => {

              const TechIcon = technology.icon;

              return (
                <div
                  className="technology-item"
                  key={technology.name}
                >

                  <TechIcon className="technology-icon" />

                  <span>{technology.name}</span>

                </div>
              );
            })}

          </div>

        </article>

      </section>
    </Container>
  );
};

export default Skills;