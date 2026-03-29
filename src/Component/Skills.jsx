import { motion } from "framer-motion";
import skills from "../Data/Skills";
import "../Styles/Skills.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Skills() {
  return (
    <section id="skills" className="skills-section d-flex align-items-center">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-5">Skills and Technologies</h2>
          <h3>Tools and technology I use to build fast, scalable and modern web applications.</h3>

          <div className="row">
            {skills.map((group, index) => (
              <motion.div
                key={index}
                className="col-md-4 mb-4"
                variants={itemAnim}
              >
                <div className="skill-card">
                  <h5>{group.category}</h5>

                  <div className="skill-items">
                    {group.items.map((skill, i) => (
                      <div key={i} className="skill-item">
                        <img src={skill.icon} alt={skill.name} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
