import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ArrowDown } from "lucide-react";
import heroAnimation from "../assets/Hero.json";

import "../Styles/Hero.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.p className="hero-intro" variants={fadeUp}>
                Hi, I'm
              </motion.p>

              <motion.h1 className="hero-title" variants={fadeUp}>
                Olumide
              </motion.h1>

              <motion.h2 className="hero-subtitle" variants={fadeUp}>
                I build high-performance web applications that convert.
              </motion.h2>

              <motion.h2 className="hero-subtitle" variants={fadeUp}>
                Helping startups and businesses turn ideas into fast, scalable and user-focused products.
              </motion.h2>

              <motion.div className="hero-buttons mt-4" variants={fadeUp}>
                <a href="#projects" className="btn btn-primary me-3">
                  View Projects
                </a>

                <a href="#contact" className="btn btn-outline-light">
                  Hire Me
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (LOTTIE) */}
          <div className="col-md-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Lottie
                animationData={heroAnimation}
                loop={true}
                className="hero-lottie"
              />
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowDown size={28} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;