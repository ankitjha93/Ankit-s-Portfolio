// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import figmaLogo from './assets/tech_logo/figma.png';

// Company / Experience Logo's
import gbjbuzzLogo from './assets/company_logo/gbjbuzz_logo.png';
import bluestockLogo from './assets/company_logo/bluestock_logo.png';
import codsoftLogo from './assets/company_logo/codsoft_logo.png';

// Education Logo's
import choukseyLogo from './assets/education_logo/chouksey_logo.png';
import cgbseLogo from './assets/education_logo/cgbse_logo.png';

// Project Section Logo's
import csprepLogo from './assets/work_logo/cs_prep.png';
import popcornplayLogo from './assets/work_logo/popcornplay.png';
import nutriplateLogo from './assets/work_logo/nutriplate.png';

export const personalInfo = {
  name: "Ankit Jha",
  role: "Full Stack Developer",
  location: "Bilaspur, Chhattisgarh, India",
  phone: "+91-7587233945",
  email: "93ankitjha@gmail.com",
  linkedin: "https://linkedin.com/in/ankit-jha-93-",
  github: "https://github.com/ankitjha93",
  leetcode: "https://leetcode.com/u/ankitjha93",
  summary:
    "Full Stack Developer skilled in React.js, Next.js, and Node.js, building scalable AI-driven web applications. Experienced in REST APIs, authentication, and modern frontend architectures with a focus on performance, scalability, and user experience.",
  typingRoles: [
    "Full Stack Developer",
    "Next.js & React Specialist",
    "Node.js Backend Developer",
    "AI Web App Builder",
    "Problem Solver (300+ DSA)",
  ],
};

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", logo: reactjsLogo },
      { name: "Next.js", logo: nextjsLogo },
      { name: "Redux Toolkit", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "Firebase / Firestore", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: gbjbuzzLogo,
    role: "Full Stack Developer Intern & Team Lead",
    company: "GBJ Buzz Pvt. Ltd.",
    location: "Application Development Team",
    date: "July 2026 – Present",
    desc: "Joined as a Full Stack Developer Intern and took on Development Team Lead responsibilities for the Printable project. Developed and maintained microservices-based backend services using Node.js, TypeScript, Prisma, PostgreSQL, Redis, and Docker within an Nx monorepo. Architected secure authentication & authorization including email/mobile OTP verification, JWT access/refresh token rotation, session management, and RBAC. Designed and integrated REST APIs across Auth, User, Merchant, Order, Wallet, File Vault, Freelancer, and API Gateway services.",
    skills: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Docker",
      "Microservices",
      "JWT & RBAC",
      "REST APIs",
      "Nx Monorepo",
      "Team Leadership",
    ],
  },
  {
    id: 1,
    img: bluestockLogo,
    role: "Software Development Engineer Intern",
    company: "Bluestock Fintech",
    location: "Pune, India",
    date: "Apr 2025 – May 2025",
    desc: "Developed and optimized React.js components for a fintech dashboard, reducing page load time by 20% and improving user engagement. Integrated REST APIs with frontend components, enabling seamless data flow and supporting 100+ daily user interactions. Implemented secure authentication and enhanced UI responsiveness, increasing platform usability by 30%.",
    skills: [
      "React.js",
      "REST APIs",
      "Authentication",
      "JavaScript",
      "Tailwind CSS",
      "UI/UX Optimization",
      "Performance Tuning",
    ],
  },
  {
    id: 2,
    img: codsoftLogo,
    role: "Web Developer Intern",
    company: "CodSoft",
    location: "Kolkata, West Bengal",
    date: "Feb 2024 – Mar 2024",
    desc: "Developed a responsive landing page with optimized layout and visuals, improving UI/UX using HTML5, CSS3, and JavaScript. Built a functional calculator with interactive UI, implementing core JavaScript logic for real-time calculations. Designed and deployed a personal portfolio website, showcasing projects and skills using React.js and Tailwind CSS.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "PrepSmart AI",
    subtitle: "AI Interview & Career Preparation Platform",
    description:
      "A full-stack AI interview platform built using Next.js and Node.js, supporting 100+ sessions with real-time feedback powered by Gemini AI. Implemented secure authentication with Clerk, managing 500+ user sessions with role-based access control. Optimized database queries and indexing with Drizzle ORM, reducing API response time by 30% and improving scalability.",
    image: csprepLogo,
    year: "2024",
    tags: ["Next.js", "React.js", "Node.js", "Drizzle ORM", "Gemini AI", "Clerk", "PostgreSQL"],
    github: "https://github.com/ankitjha93/PrepSmart-AI-2.0",
    webapp: "https://github.com/ankitjha93/PrepSmart-AI-2.0",
  },
  {
    id: 1,
    title: "PopcornPlay",
    subtitle: "Movie Streaming & Subscription Platform",
    description:
      "A feature-rich movie streaming platform with Google OAuth 2.0 authentication using Firebase Authentication for 200+ users. Managed predictable global state with Redux Toolkit, reducing bugs by 15% and boosting stability. Implemented Stripe Checkout and Webhooks for secure, real-time subscription payment processing.",
    image: popcornplayLogo,
    year: "2024",
    tags: ["React.js", "Firebase Auth", "Firestore", "Redux Toolkit", "Stripe", "Tailwind CSS"],
    github: "https://github.com/ankitjha93/PopcornPlay",
    webapp: "https://playflare.netlify.app/",
  },
  {
    id: 2,
    title: "NutriPlate",
    subtitle: "Nutrition & Meal-Planning Platform",
    description:
      "Developed 'NutriPlate,' a modern, fully responsive nutrition and meal-planning website using HTML5 and CSS3 with a focus on clean layout and intuitive UX. Designed structured sections to showcase healthy meals with complete mobile responsiveness and consistent styling. Deployed on Netlify, ensuring fast loading, cross-browser compatibility, and seamless public accessibility.",
    image: nutriplateLogo,
    year: "2023",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Netlify", "UI/UX"],
    github: "https://github.com/ankitjha93/NutriPlate",
    webapp: "https://nutriplate.netlify.app/",
  },
];

export const achievements = [
  {
    id: 0,
    title: "DSA Problem Solver",
    description: "Solved 300+ Data Structures and Algorithms problems on LeetCode, GeeksforGeeks, and takeUforward.",
    link: "https://leetcode.com/u/ankitjha93",
    platform: "LeetCode & GFG",
  },
  {
    id: 1,
    title: "Certified in C++ Programming",
    description: "Issued by GeeksforGeeks validating strong foundations in OOP, memory management, and data structures.",
    platform: "GeeksforGeeks",
  },
  {
    id: 2,
    title: "Certified in Machine Learning with Python",
    description: "Issued by IBM covering supervised and unsupervised learning, model evaluation, and Python data science stack.",
    platform: "IBM",
  },
];

export const education = [
  {
    id: 0,
    img: choukseyLogo,
    school: "Chouksey Engineering College",
    location: "Bilaspur, Chhattisgarh, India",
    date: "2021 – 2025",
    grade: "CGPA: 8.78",
    degree: "B.Tech in Computer Science and Engineering",
    desc: "Completed B.Tech in Computer Science and Engineering with an academic excellence CGPA of 8.78. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, and Computer Networks.",
  },
  {
    id: 1,
    img: cgbseLogo,
    school: "Bharat Mata English Medium Higher Secondary School",
    location: "Bilaspur, Chhattisgarh, India",
    date: "2019 – 2021",
    grade: "Percentage: 89.8% (First Division)",
    degree: "Higher Secondary Certificate (Class XII - PCM)",
    desc: "Passed with First Division (89.8%) and distinctions across all subjects, achieving a perfect 100/100 in Mathematics, 91 in Hindi, 89 in Physics, 86 in English, and 83 in Chemistry.",
  },
  {
    id: 2,
    img: cgbseLogo,
    school: "Bharat Mata English Medium Higher Secondary School",
    location: "Bilaspur, Chhattisgarh, India",
    date: "2018 – 2019",
    grade: "Percentage: 80.5% (First Division)",
    degree: "Secondary School Certificate (Class X - CGBSE)",
    desc: "Completed Class 10th with First Division (80.5%), achieving distinction marks in Sanskrit (93/100), English (84/100), Mathematics (82/100), and Science (81/100).",
  },
];