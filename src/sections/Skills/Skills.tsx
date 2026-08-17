import { useState } from "react";
import { skills } from "../../data/skills";
import Container from "../../components/Container/Container";
import "./Skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const visibleCategories =
    activeTab === "All"
      ? skills.categories
      : skills.categories.filter(
          (category) => category.title === activeTab
        );

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

          {/* All */}

          <button
            className={
              activeTab === "All"
                ? "skill-tab active"
                : "skill-tab"
            }
            onClick={() => setActiveTab("All")}
          >
            All
          </button>

          {/* Categories */}

          {skills.categories.map((category) => {

            const Icon = category.icon;

            return (
              <button
                key={category.title}
                className={
                  activeTab === category.title
                    ? "skill-tab active"
                    : "skill-tab"
                }
                onClick={() =>
                  setActiveTab(category.title)
                }
              >
                <Icon size={18} />

                <span>{category.title}</span>
              </button>
            );
          })}

        </div>

        {/* Skills */}

        <div className="skills-grid">

          {visibleCategories.map((category) => {

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
                        >

                          <TechIcon
                            className="technology-icon"
                          />

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
};

export default Skills;