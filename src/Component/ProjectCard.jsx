import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "../Styles/Project.css";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function ProjectCard({ title, description, tech, image, github, live }) {
  return (
    <motion.div
      className="col-md-4 mb-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="project-card">
        {/* IMAGE */}
        <div className="project-image-wrapper">
          <img src={image} alt={title} className="project-image" loading="lazy" />

          {/* OVERLAY */}
          <div className="project-overlay">
            <a href={live} target="_blank" rel="noreferrer">
              <button className="btn btn-light me-2">
                <ExternalLink size={18} /> Live
              </button>
            </a>

            <a href={github} target="_blank" rel="noreferrer">
              <button className="btn btn-outline-light">
                <Github size={18} /> Code
              </button>
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <div className="project-content">
          <h5>{title}</h5>
          <p>{description}</p>

          {/* TECH STACK */}
          <div className="tech-stack">
            {tech.map((item, index) => (
              <span key={index} className="tech-badge">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
