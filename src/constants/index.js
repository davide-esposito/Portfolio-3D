import {
  agile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  restapi,
  expressjs,
  threejs,
  bmw,
  neuefische,
  ihk,
  losteria,
  vivaVenture,
  budgetTracker,
  iPhone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, interactive user interfaces using React, JavaScript, and modern CSS frameworks such as Tailwind CSS.",
    icon: web,
  },
  {
    title: "UI Optimization & API Integration",
    description:
      "Enhancing user experiences by optimizing interface performance and responsiveness while gaining experience in integrating frontend applications with RESTful APIs to ensure seamless data flow.",
    icon: backend,
  },

  {
    title: "Agile Team Collaboration",
    description:
      "Skilled in working within agile teams, utilizing Git and Scrum methodologies to deliver high-quality, maintainable solutions.",
    icon: agile,
  },
  {
    title: "Technical Solutions & Problem Solving",
    description:
      "Leveraging my technical expertise to identify and implement efficient solutions, focusing on quality delivery and scalability.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  { name: "REST APIs", icon: restapi },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Hospitality Professional",
    company_name: "L'Osteria",
    icon: losteria,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Provided excellent customer service in a fast-paced, high-volume hospitality environment.",
      "Managed multiple tasks, including handling orders, payments, and ensuring seamless operations.",
      "Collaborated effectively with team members to maintain a positive and efficient workplace.",
      "Resolved customer inquiries and conflicts with a solution-oriented mindset.",
      "Honed time management and multitasking skills, transferable to project-driven roles in tech.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Employed",
    icon: creator,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Developing and maintaining web applications using React, Node.js, and related technologies.",
      "Building custom APIs and implementing dynamic features in applications.",
      "Ensuring responsive design and cross-browser compatibility.",
      "Collaborating with clients to identify and implement solutions that meet their business needs.",
    ],
  },
  {
    title: "Web Development Bootcamp",
    company_name: "neuefische GmbH",
    icon: neuefische,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Completed an intensive web development bootcamp focusing on HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      "Developed a capstone project ('Viva Venture') showcasing full-stack development skills.",
      "Collaborated in an agile environment to build and test responsive web applications.",
    ],
  },
  {
    title: "Technical Specialist",
    company_name: "Technischer Fachwirt (IHK)",
    icon: ihk,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Completed advanced training in technical management and business administration.",
      "Gained skills in project management, operations, and leadership in technical environments.",
      "Developed an understanding of business processes and technical operations integration.",
    ],
  },
  {
    title: "Production Associate (Body Manufacturing)",
    company_name: "BMW AG",
    icon: bmw,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Optimized and structured work processes in a fast-paced production environment.",
      "Implemented quality checks and solutions for material issues.",
      "Brought in improvements for efficiency and production workflows.",
    ],
  },
  {
    title: "Manufacturing Mechanic",
    company_name: "BMW AG",
    icon: bmw,
    iconBg: "#383E56",
    date: "2016 - 2019",
    points: [
      "Completed an apprenticeship focused on precision mechanics and production processes.",
      "Gained hands-on experience in technical and structured work environments.",
      "Developed a solution-oriented approach to problem-solving in production settings.",
    ],
  },
];

const projects = [
  {
    name: "vivaVenture",
    description:
      "A web-based platform for discovering and managing events and activities. Users can create profiles, search for events, and create or share their own. Includes an interactive map, filtering options, and responsive design with light/dark modes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "styled-components",
        color: "orange-text-gradient",
      },
    ],
    image: vivaVenture,
    source_code_link: "https://github.com/davide-esposito/vivaVenture",
    live_demo_link: "https://viva-venture.vercel.app",
  },
  {
    name: "Budget Tracker",
    description:
      "A financial management tool for tracking income and expenses, organizing categories, and viewing detailed summaries. Features responsive design, dark/light modes, and seamless integration with modern web technologies.",
    tags: [
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: budgetTracker,
    source_code_link: "https://github.com/davide-esposito/budget-tracker",
    live_demo_link: "https://budget-tracker-wheat-phi.vercel.app",
  },
  {
    name: "Apple Website",
    description:
      "An immersive web experience showcasing the iPhone 15 Pro models with interactive 3D visuals, smooth animations, and video highlights. Features responsive design and modern technologies for a captivating user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "yellow-text-gradient",
      },
    ],
    image: iPhone,
    source_code_link: "https://github.com/davide-esposito/apple-website",
    live_demo_link: "https://apple-website-coral-seven.vercel.app",
  },
];

export { services, technologies, experiences, projects };
