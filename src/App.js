import { useEffect, useState } from "react";
import AOS from "aos";
import "./App.scss";
import GalaxyBackground from "./components/GalaxyBackground";
import FloatingPlanets from "./components/FloatingPlanets";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 400, 1);
  const opacity = 1 - progress;
  const scale = 1 - progress * 0.15;
  const translateY = progress * -80;
  const blur = progress * 6;
  const nebula = "/images/nebula.png";

  return (
      <div className="App">
        <GalaxyBackground />
        <FloatingPlanets />

        <section id="home" className="intro">
          <div
            className="intro_txt"
            style={{
              opacity,
              transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`,
              filter: `blur(${blur}px)`,
            }}
          >
            <p className="intro_name">SUN WOO RIN</p>
            <span className="intro_role">Front-End Developer & Web Publisher</span>
          </div>

          <img src={process.env.PUBLIC_URL + nebula} className="nebula" alt="은하수이미지" />
        </section>

        <main className="main_section">
          <section id="about" className="page_section">
            <About />
          </section>

          <section id="skills" className="page_section">
            <Skills />
          </section>

          <section id="project" className="page_section">
            <Project />
          </section>

          <section id="contact" className="page_section">
            <Contact />
          </section>
        </main>
      </div>
  );
}

export default App;