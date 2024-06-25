import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a passionate software developer skilled in crafting innovative solutions that merge technology with practical applications. With expertise in React, Node.js, MongoDB, and more, I specialize in delivering user-centric applications like OpenPost, CloudPoint, and HelloWorld. Certified in AWS Application Development, I am eager to contribute to teams driving impactful software solutions.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable software developer passionate about creating efficient and intuitive web applications. Equipped with a Bachelor of Technology in Computer Science Engineering from Chandigarh Engineering College, I have cultivated expertise in technologies such as React, Node.js, MongoDB, and more. My portfolio includes projects like OpenPost, CloudPoint, and HelloWorld, demonstrating my ability to deliver user-friendly solutions that enhance experiences. Eager to contribute to innovative teams and continuously expand my skills in software development.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "MERN Stack Developer Intern",
    company: "Grazitti Interactive",
    description: `Gained hands-on experience in developing full-stack applications using MongoDB, Express, React.js, and Node.js. Implemented RESTful APIs, real-time data processing with Socket.io, and state management using Redux. Collaborated with cross-functional teams to deliver software solutions and learned best practices in agile development.`,
    technologies: [
      "MongoDB",
      "Express",
      "React.js",
      "Node.js",
      "Socket.io",
      "Redux",
    ],
  },
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
