import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/about.json";
import "../Styles/About.css";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

function About() {
  return (
    <section id="about" className="about-section d-flex align-items-center">
      <div className="container">

        <div className="row align-items-center">

          {/* TEXT SIDE */}
          <motion.div
            className="col-md-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>About Me</h2>

            <p className="about-text">
              I'm a fullstack developer focused on building high-performance web applications
              that solve real-world problems. I enjoy turning ideas into scalable digital products
              with clean code and intuitive user experiences.
            </p>

            <p className="about-text">
              I specialize in modern JavaScript technologies and love working on projects
              that challenge me to grow and deliver real value.
            </p>

            <p>I don't just build websites, I build solutions that deliver results.</p>

            {/* STATS */}
            <div className="about-stats">
              <div>
                <h3>10+</h3>
                <p>Projects Built</p>
              </div>
              <div>
                <h3>2+</h3>
                <p>Years Learning</p>
              </div>
              <div>
                <h3>100%</h3>
                <p>Commitment</p>
              </div>
            </div>
          </motion.div>

          {/* ANIMATION SIDE */}
          <motion.div
            className="col-md-6 text-center"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Lottie
              animationData={aboutAnimation}
              loop={true}
              className="about-lottie"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;