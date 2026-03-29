import { motion } from "framer-motion";
import "../Styles/CTA.css";

function CTA() {
  return (
    <section className="cta-section d-flex align-items-center">
      <div className="container text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">
            Have an Idea? Let's Bring it to Life.
          </h2>

          <p className="cta-subtext">
            I'm available to help you design and build modern web application that stand out and perform.
          </p>

          <div className="cta-buttons mt-4">
            <a href="#contact" className="btn btn-primary me-3">
              Get In Touch
            </a>

            <a href="#projects" className="btn btn-outline-light">
              View My Work
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default CTA;