import weatherImg from "../assets/Images/Weather.webp";
import logisticsImg from "../assets/Images/Logistics.webp";
import ecommerceImg from "../assets/Images/E-commerce.webp";
import taskImg from "../assets/Images/Task.webp";
import TechAgencyImg from "../assets/Images/TechAgency.webp";
import HealthCareImg from "../assets/Images/Healthcare.webp";
import EdTechImg from "../assets/Images/EdTech.png";

const projects = [
  {
    title: "Weather Forecast App",
    description:
      "A real-time weather application with city search, 5-day forecast, and dynamic UI based on weather conditions.",
    tech: ["React", "OpenWeather API", "CSS", "Local Storage"],
    image: weatherImg,
    github: "https://github.com/mighty-stack/weather-app",
    live: "https://sky-check-jet.vercel.app",
  },

  {
    title: "Logistics Website",
    description:
      "A modern logistics website with real-time tracking, shipment management, and secure API integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: logisticsImg,
    github: "https://github.com/mighty-stack/logistics-website",
    live: "https://swiftship-qfov.vercel.app",
  },

  {
    title: "E-commerce Website",
    description:
      "A modern e-commerce platform with product filtering, cart system, and responsive UI design.",
    tech: ["React", "Redux", "REST API", "Bootstrap", "Node.js", "MongoDB", "PayStack"],
    image: ecommerceImg,
    github: "https://github.com/mighty-stack/ecommerce-site",
    live: "https://kart-mu.vercel.app",
  },

  {
    title: "Portfolio Website",
    description:
      "A sleek animated developer portfolio built with modern UI/UX principles and performance optimization.",
    tech: ["React", "Framer Motion", "CSS", "Bootstrap", "Lottie"],
    image: weatherImg,
    github: "https://github.com/mighty-stack/portfolio",
    live: "https://olu-theta.vercel.app",
  },

  {
    title: "Task Management App",
    description:
      "A productivity app for managing daily tasks with drag-and-drop features and persistent storage.",
    tech: ["HTML", "Bootstrap", "CSS", "JavaScript", "Local Storage"],
    image: taskImg,
    github: "https://github.com/mighty-stack/task-manager",
    live: "https://my-todo-gamma-three.vercel.app",
  },

  {
    title: "Tech Agency Website",
    description:
      "A modern website for a technology agency with animated elements and performance optimization.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Animate.css"],
    image: TechAgencyImg,
    github: "https://github.com/mighty-stack/tech-agency-website",
    live: "https://love-nature-omega.vercel.app",
  },

    {
    title: "healthCare Website",
    description:
      "A modern website for a technology agency with animated elements and performance optimization.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Animate.css"],
    image: HealthCareImg,
    github: "https://github.com/mighty-stack/tech-agency-website",
    live: "https://healthcare-dashboard-sandy.vercel.app",
  },

    {
    title: "Ed Tech Website",
    description:
      "A modern website for a technology agency with animated elements and performance optimization.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Animate.css"],
    image: EdTechImg,
    github: "https://github.com/mighty-stack/tech-agency-website",
    live: "https://bearilly-8cle.vercel.app",
  },
];

export default projects;