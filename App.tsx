import React from 'react';
//import AOS from "aos";
//import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Project";
import Skills from "./sections/Skills/Skills";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {

  {/*useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);
*/}
  return (
    <div>
      <Navbar logo="Emmight Devv." />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;