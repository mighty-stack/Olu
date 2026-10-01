import logisticsImg from "../assets/Images/Logistics.webp";
import HealthCareImg from "../assets/Images/Healthcare.webp";
import EdTechImg from "../assets/Images/EdTech.png";
import remotehustleImg from "../assets/Images/remotehustle.png";

// Featured case studies, shown in this order.
// image: leave out (or null) to show a placeholder until you add a screenshot.
// github: leave "" to hide the Code link. codeOnRequest: true shows "Code walkthrough on request".
// visible: false keeps a project in the code but off the page.
const projects = [
  {
    title: "Remotehustle Blog CMS",
    tag: "Live · Client work",
    summary:
      "A publishing platform for a real organisation, so its team can write and manage posts without touching code.",
    built: [
      "Admin accounts with authentication, 4 admins active",
      "Categories, tags and post management",
      "~24 posts published so far",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: remotehustleImg,
    url: "remotehustle.name.ng",
    live: "https://remotehustle.name.ng",
    github: "",
    codeOnRequest: true,
  },
  {
    title: "Bearilly",
    tag: "Self-initiated build",
    summary:
      "Self-paced lessons for practical content-creation skills, with an AI tutor that retrieves from the lessons and stays inside the field.",
    built: [
      "Retrieval-augmented tutor scoped to content, video and social media",
      "Authentication and a role-based portal",
      "Payment gateway, frontend and backend built end to end",
    ],
    tech: ["React", "Node.js", "MongoDB", "RAG"],
    image: EdTechImg,
    url: "bearilly-8cle.vercel.app",
    live: "https://bearilly-8cle.vercel.app",
    github: "", // add the Bearilly repo URL here
    codeOnRequest: false,
  },
  {
    title: "SwiftShip",
    tag: "SaaS platform",
    summary:
      "A logistics platform with three portals. Customers track goods and request pickups, drivers accept jobs, admins run the operation.",
    built: [
      "Admin verifies drivers, manages users, assigns pickups",
      "Status-based shipment tracking, live tracking in development",
      "Role-based access across customer, driver and admin",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: logisticsImg,
    url: "swiftship-qfov.vercel.app",
    live: "https://swiftship-qfov.vercel.app",
    github: "https://github.com/mighty-stack/logistics-website",
    codeOnRequest: false,
  },
  {
    title: "Healthcare Dashboard",
    tag: "Data visualisation",
    summary:
      "A React dashboard that pulls patient data from an API and turns it into readable charts.",
    built: ["Chart.js visualisations of API data", "Built to make dense records scannable"],
    tech: ["React", "Chart.js", "REST API"],
    image: HealthCareImg,
    url: "healthcare-dashboard-sandy.vercel.app",
    live: "https://healthcare-dashboard-sandy.vercel.app",
    github: "",
    codeOnRequest: true,
  },
  {
    // Hidden until you decide to show it. Flip visible to true, fill in the links.
    title: "Klout Collabs",
    tag: "Brand and creator platform",
    summary:
      "A platform connecting brands and creators, built as an internship task.",
    built: [],
    tech: ["React", "Node.js", "MongoDB"],
    image: null,
    url: "",
    live: "",
    github: "",
    codeOnRequest: false,
    visible: false,
  },
];

export const more = [
  { title: "Kart", text: "E-commerce with Redux, Node, MongoDB and PayStack", href: "https://kart-mu.vercel.app" },
  { title: "Love Nature", text: "Marketing site with animated sections", href: "https://love-nature-omega.vercel.app" },
  { title: "Weather app", text: "City search and a 5-day forecast from a live API", href: "https://sky-check-jet.vercel.app" },
];

export default projects;
