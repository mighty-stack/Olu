import reactIcon from "../assets/Icons/react.webp";
import nodeIcon from "../assets/Icons/node.webp";
import mongoIcon from "../assets/Icons/mongoDB.webp";
import jsIcon from "../assets/Icons/javascript.webp";
import bootstrapIcon from "../assets/Icons/bootstrap.webp";
import firebaseIcon from "../assets/Icons/firebase.webp";
import gitIcon from "../assets/Icons/git.webp";
import apiIcon from "../assets/Icons/restfulApi.webp";
import expressIcon from "../assets/Icons/express.webp";
import postmanIcon from "../assets/Icons/postman.webp";
import htmlIcon from "../assets/Icons/html.webp";
import cssIcon from "../assets/Icons/css.webp";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: reactIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "MongoDB", icon: mongoIcon },
      { name: "Firebase", icon: firebaseIcon },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: gitIcon },
      { name: "REST API", icon: apiIcon },
      { name: "Postman", icon: postmanIcon },
    ],
  },
];

export default skills;