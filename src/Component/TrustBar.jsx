import "../Styles/TrustBar.css";
import reactIcon from "../assets/Icons/react.webp";
import nodeIcon from "../assets/Icons/node.webp";
import mongoIcon from "../assets/Icons/mongoDB.webp";
import jsIcon from "../assets/Icons/javascript.webp";
import bootstrapIcon from "../assets/Icons/bootstrap.webp";
import firebaseIcon from "../assets/Icons/firebase.webp";
import gitIcon from "../assets/Icons/git.webp";
import apiIcon from "../assets/Icons/restfulApi.webp";

const techStack = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "Git", icon: gitIcon },
  { name: "REST API", icon: apiIcon },
];

function TrustBar() {
  return (
    <section className="trustbar-elite">
      <div className="marquee">

        {/* FIRST ROW */}
        <div className="marquee-content">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* DUPLICATE FOR SMOOTH LOOP */}
        <div className="marquee-content">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustBar;