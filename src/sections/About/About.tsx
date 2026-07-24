import Container from "../../components/Container/Container";
import { about } from "../../data/about"
import "./About.css"

const About = ()=> {
  return (
    <Container>
  <section className="about" id="about" data-aos="fade-up">

    <div className="about-content">
      <h2 className="about-title" data-aos="zoom-in"> {about.title} </h2>
      <p className="about-subtitle" data-aos="fade-up"> {about.subtitle} </p>      
      <p className="about-description" data-aos="fade-up"> {about.description} </p> 
    </div>

<ul className="about-highlights">

  {about.highlights.map((highlight, index) => {

    const Icon = highlight.icon;

    return (

      <li
        key={highlight.text}
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >

        <Icon
          size={18}
          className="highlight-icon"
        />

        <span>{highlight.text}</span>

      </li>

    );

  })}

</ul>

  </section>
</Container>
  )
}

export default About;