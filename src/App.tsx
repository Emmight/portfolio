import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Project";
import Process from "./sections/Process/Process";
import Skills from "./sections/Skills/Skills";
import Testimonials from "./sections/Testimonials/Testimonials";
import CTA from "./sections/CTA/CTA";
import Contact from "./sections/Contact/Contact";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Preloader from "./components/Preloader/Preloader";



function App() {
const [loading, setLoading] = useState(true);
useEffect(() => {

  const timer = setTimeout(() => {

    setLoading(false);

  },800);

  return () => clearTimeout(timer);

},[]);
  
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  if (loading) {
  return <Preloader />;
  }
  
  return (
    <div>
      <Navbar logo="Emmight" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;