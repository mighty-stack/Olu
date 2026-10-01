import { useEffect } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  // Scroll reveal for every element marked with the "rv" class
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Project />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
