import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { hero } from "../../data/hero";
import "./Hero.css";

import {
  Code2,
  Globe,
  Clapperboard,
  Palette,
} from "lucide-react";

const typingSequence = hero.title.flatMap((title) => [
  title,
  2000,
]);
const Hero = ()=> (
  
  <Container>
    <section className="hero" id="home"> 

    <div className="hero-content">
        <p className="hero-greeting" data-aos="fade-down"> {hero.greeting} </p>
    <h1 data-aos="zoom-in"> {hero.name} </h1>
      <div className="hero-title">
    <TypeAnimation
  sequence={typingSequence}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  cursor={true}
/>
      </div>
    <p data-aos="fade-up"> {hero.description} </p>

     <div className="hero-buttons" data-aos="fade-up">
   <a id="" href="#contact-form"> <Button text={hero.primaryButton} variant="primary" />
   </a>
    <a
  href={hero.resume}
  download
  className="resume-button"
>
  <FaDownload /> {hero.secondaryButton}
</a>
          </div> 
           </div>
    <div className="hero-image" data-aos="zoom-in">
      <img className="image" src={hero.image} alt={hero.name} width="100" height="100" />

<div className="floating-badge badge-1">
  <Code2 size={18} />
  <span>Full-Stack</span>
</div>

<div className="floating-badge badge-2">
  <Globe size={18} />
  <span>WordPress</span>
</div>

<div className="floating-badge badge-3">
  <Palette size={18} />
  <span>Graphic Designer</span>
</div>
      
<div className="floating-badge badge-4">
  <Clapperboard size={18} />
  <span>Motion Graphics</span>
</div>
      
    </div>
          </section>
      </Container>
)

export default Hero;