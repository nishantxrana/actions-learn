import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a passionate software developer skilled in crafting innovative solutions that merge technology with practical applications. With expertise in React, Node.js, MongoDB, and more, I specialize in delivering user-centric applications like OpenPost, CloudPoint, and HelloWorld. Certified in AWS Application Development, I am eager to contribute to teams driving impactful software solutions.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable software developer passionate about creating efficient and intuitive web applications. Equipped with a Bachelor of Technology in Computer Science Engineering from Chandigarh Engineering College, I have cultivated expertise in technologies such as React, Node.js, MongoDB, and more. My portfolio includes projects like OpenPost, CloudPoint, and HelloWorld, demonstrating my ability to deliver user-friendly solutions that enhance experiences. Eager to contribute to innovative teams and continuously expand my skills in software development.`;

export const EXPERIENCES = [
  {
  "year": "Sep 2024 - Present",
  "role": "DevOps Intern",
  "company": "Grazitti Interactive",
  "description": "Gained hands-on experience in implementing and managing cloud-based solutions using Azure Cloud Services. Worked on migrating on-premises resources to Azure, ensuring seamless transition and optimal performance. Developed and optimized CI/CD pipelines for automated deployments and ensured seamless integration of code. Worked extensively with Kubernetes for container orchestration, Azure App Service, Function App, Logic App, and Azure Container Registry (ACR). Implemented Docker for containerization and facilitated scalable, reliable application deployments. Collaborated with cross-functional teams to enhance infrastructure and streamline DevOps workflows while adhering to agile methodologies.",
  "technologies": [
    "Azure Cloud Services",
    "Azure DevOps",
    "CI/CD Pipelines",
    "Kubernetes",
    "Azure App Service",
    "Function App",
    "Logic App",
    "Azure Container Registry (ACR)",
    "Docker",
    "JavaScript",
    "React"
    ]
  }
];

export const PROJECTS = [
  {
    title: "OpenPost – Full-Stack Blog Application",
    image: project1,
    description:
      "A full-stack blog application with user authentication, user roles (Admin & User), and a feature-rich admin dashboard. Features include post creation with image upload, search by title, pagination, light/dark mode, and comprehensive admin controls for managing users, comments, and posts.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    deployment: "https://github.com/nishantxrana/OpenPost",
  },

  {
    title: "HelloWorld – Real-Time Chat Application",
    image: project2,
    description:
      "A real-time chat application utilizing the MERN stack and Socket.io for instant messaging and notifications. Features include user authentication, real-time updates, and group chats, enhancing connectivity and user interaction.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    deployment: "",
  },
];

export const CONTACT = {
  email: "nishantxrana@.com",
  resume:
    "https://drive.google.com/file/d/1ma9iJRWPmRVWF3b9F4oqAHjnA1YoAWhY/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/nishantxrana/",
  twitter: "https://x.com/nishantxrajput",
  github: "https://github.com/nishantxrana/",
};
