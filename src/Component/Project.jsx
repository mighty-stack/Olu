import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import projects from "../Data/Project";
import "../Styles/Project.css";

function Projects() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[index];

  return (
    <section id="projects" className="projects-section d-flex align-items-center">
      <div className="container text-center">

        <h2 className="mb-5">Featured Projects</h2>
        <h2 className="mb-5">
                        A selection of projects showcasing my ability to build scalable, high-performance web applications.
        </h2>

        <div className="slider-container position-relative">

          {/* SLIDE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="project-slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              <div className="row align-items-center">

                {/* IMAGE */}
                <div className="col-md-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid project-slide-image"
                    loading="lazy"
                  />
                </div>

                {/* CONTENT */}
                <div className="col-md-6 text-start">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* TECH */}
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge me-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary me-3"
                    >
                      <ExternalLink size={18} /> Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light"
                    >
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAV BUTTONS */}
          <button className="nav-btn left" onClick={prevSlide}>
            <ChevronLeft size={30} />
          </button>

          <button className="nav-btn right" onClick={nextSlide}>
            <ChevronRight size={30} />
          </button>

        </div>

        {/* DOT INDICATORS */}
        <div className="dots mt-4">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;