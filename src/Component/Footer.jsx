import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowUp
} from "lucide-react";
import "../Styles/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">

      <div className="container">
        <div className="row">

          {/* BRAND */}
          <div className="col-md-4 mb-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Olumide ✦
            </motion.h4>
            <p>
              Building high-performance web experiences.
            </p>
          </div>

          {/* LINKS */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-md-4 mb-4">
            <h5>Connect</h5>
            <div className="social-icons">
              <a href="https://github.com/mighty-stack" target="_blank" rel="noreferrer">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/oladeji-olumide-alabi" target="_blank" rel="noreferrer">
                <Linkedin size={22} />
              </a>
              <a href="https://x.com/i_m_olumide" target="_blank" rel="noreferrer">
                <Twitter size={22} />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom d-flex justify-content-between align-items-center mt-4">
          <p>© {new Date().getFullYear()} Olumide. All rights reserved.</p>

          <button className="scroll-top" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>

      </div>

    </footer>
  );
}

export default Footer;