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

import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';

// Company / Experience Logo's
import gbjbuzzLogo from './assets/company_logo/gbjbuzz_logo.png';
import bluestockLogo from './assets/company_logo/bluestock_logo.png';
import codsoftLogo from './assets/company_logo/codsoft_logo.png';

// Education Logo's
import choukseyLogo from './assets/education_logo/chouksey_logo.png';
import bharatmataLogo from './assets/education_logo/bharatmata_logo.svg';

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
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Modern, responsive, component-driven user interfaces",
    skills: [
      { name: "React.js", logo: reactjsLogo, level: "Advanced" },
      { name: "Next.js", logo: nextjsLogo, level: "Advanced" },
      { name: "TypeScript", logo: typescriptLogo, level: "Advanced" },
      { name: "JavaScript", logo: javascriptLogo, level: "Advanced" },
      { name: "Redux Toolkit", logo: reduxLogo, level: "Proficient" },
      { name: "Tailwind CSS", logo: tailwindcssLogo, level: "Advanced" },
      { name: "HTML5", logo: htmlLogo, level: "Advanced" },
      { name: "CSS3", logo: cssLogo, level: "Advanced" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    subtitle: "Scalable microservices, REST APIs, and database engineering",
    skills: [
      { name: "Node.js", logo: nodejsLogo, level: "Advanced" },
      { name: "Express.js", logo: expressjsLogo, level: "Advanced" },
      { name: "PostgreSQL", logo: postgreLogo, level: "Advanced" },
      { name: "MongoDB", logo: mongodbLogo, level: "Proficient" },
      { name: "Redis", iconName: "SiRedis", iconColor: "#DC382D", level: "Proficient" },
      { name: "Prisma ORM", iconName: "SiPrisma", iconColor: "#818cf8", level: "Advanced" },
      { name: "Firebase", logo: firebaseLogo, level: "Proficient" },
      { name: "MySQL", logo: mysqlLogo, level: "Proficient" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Object-oriented, functional & algorithmic problem solving",
    skills: [
      { name: "C++", logo: cppLogo, level: "Advanced (DSA)" },
      { name: "Python", logo: pythonLogo, level: "Proficient" },
      { name: "JavaScript", logo: javascriptLogo, level: "Advanced" },
      { name: "TypeScript", logo: typescriptLogo, level: "Advanced" },
      { name: "Java", logo: javaLogo, level: "Proficient" },
      { name: "C", logo: cLogo, level: "Proficient" },
    ],
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    subtitle: "Containerization, monorepos, version control & developer workflow",
    skills: [
      { name: "Docker", iconName: "SiDocker", iconColor: "#2496ED", level: "Proficient" },
      { name: "Nx Monorepo", iconName: "SiNx", iconColor: "#38bdf8", level: "Proficient" },
      { name: "Git", logo: gitLogo, level: "Advanced" },
      { name: "GitHub", logo: githubLogo, level: "Advanced" },
      { name: "Postman", logo: postmanLogo, level: "Advanced" },
      { name: "VS Code", logo: vscodeLogo, level: "Advanced" },
      { name: "Vercel", logo: vercelLogo, level: "Proficient" },
      { name: "Netlify", logo: netlifyLogo, level: "Proficient" },
      { name: "Figma", logo: figmaLogo, level: "Proficient" },
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
    isCurrent: true,
    badge: "Current Role • Team Lead",
    desc: "Joined as a Full Stack Developer Intern and took on Development Team Lead responsibilities for the Printable project. Developed and maintained microservices-based backend services using Node.js, TypeScript, Prisma, PostgreSQL, Redis, and Docker within an Nx monorepo. Architected secure authentication & authorization including email/mobile OTP verification, JWT access/refresh token rotation, session management, and RBAC. Designed and integrated REST APIs across Auth, User, Merchant, Order, Wallet, File Vault, Freelancer, and API Gateway services.",
    bullets: [
      "Promoted to Development Team Lead coordinating sprint tasks, code reviews, and structured Git PR workflows.",
      "Engineered microservices backend architecture using Node.js, TypeScript, Prisma, PostgreSQL, Redis, and Docker in an Nx monorepo.",
      "Architected auth workflows with cryptographic OTP generation, bcrypt hashing, Redis TTL, JWT token rotation, and RBAC.",
      "Designed and integrated REST APIs across Auth, User, Merchant, Order, Wallet, File Vault, Freelancer, and API Gateway.",
    ],
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
    isCurrent: false,
    badge: "Fintech Engineering",
    desc: "Developed and optimized React.js components for a fintech dashboard, reducing page load time by 20% and improving user engagement. Integrated REST APIs with frontend components, enabling seamless data flow and supporting 100+ daily user interactions. Implemented secure authentication and enhanced UI responsiveness, increasing platform usability by 30%.",
    bullets: [
      "Developed high-performance React.js components for a fintech analytics dashboard, cutting load time by 20%.",
      "Integrated secure REST APIs supporting 100+ daily user transactions with seamless state synchronization.",
      "Implemented secure authentication and responsive interfaces, boosting platform usability by 30%.",
    ],
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
    isCurrent: false,
    badge: "Web Development",
    desc: "Developed a responsive landing page with optimized layout and visuals, improving UI/UX using HTML5, CSS3, and JavaScript. Built a functional calculator with interactive UI, implementing core JavaScript logic for real-time calculations. Designed and deployed a personal portfolio website, showcasing projects and skills using React.js and Tailwind CSS.",
    bullets: [
      "Developed responsive landing pages with optimized visuals and layout using HTML5, CSS3, and modern JavaScript.",
      "Built interactive web applications including a computational tool implementing custom JavaScript logic.",
      "Designed and deployed responsive web solutions with cross-browser compatibility using React.js & Tailwind CSS.",
    ],
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
    category: "ai",
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
    category: "fullstack",
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
    category: "frontend",
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
    specialHighlight: "Academic Excellence • First Class with Distinction",
    scores: [
      { subject: "CGPA", score: "8.78", highlight: true },
      { subject: "Core CS", score: "DSA & OOP" },
      { subject: "Specialization", score: "Full Stack Web" },
    ],
  },
  {
    id: 1,
    img: bharatmataLogo,
    school: "Bharat Mata English Medium Higher Secondary School",
    location: "Bilaspur, Chhattisgarh, India",
    date: "2019 – 2021",
    grade: "Percentage: 89.8% (First Division)",
    degree: "Higher Secondary Certificate (Class XII - Science PCM)",
    desc: "Achieved First Division (89.8%) with distinctions across all 5 subjects, highlighted by a flawless 100/100 perfect score in Mathematics.",
    specialHighlight: "💯 Perfect 100/100 in Mathematics • All-Subject Distinctions",
    scores: [
      { subject: "Mathematics", score: "100/100", highlight: true },
      { subject: "Hindi", score: "91/100" },
      { subject: "Physics", score: "89/100" },
      { subject: "English", score: "86/100" },
      { subject: "Chemistry", score: "83/100" },
    ],
  },
  {
    id: 2,
    img: bharatmataLogo,
    school: "Bharat Mata English Medium Higher Secondary School",
    location: "Bilaspur, Chhattisgarh, India",
    date: "2018 – 2019",
    grade: "Percentage: 80.5% (First Division)",
    degree: "Secondary School Certificate (Class X - CGBSE)",
    desc: "Passed Class 10th in First Division (80.5%), earning 4 subject distinctions in Sanskrit, English, Mathematics, and Science.",
    specialHighlight: "4 Subject Distinctions • Top Marks in Sanskrit & English",
    scores: [
      { subject: "Sanskrit", score: "93/100", highlight: true },
      { subject: "English", score: "84/100" },
      { subject: "Mathematics", score: "82/100" },
      { subject: "Science", score: "81/100" },
      { subject: "Hindi", score: "73/100" },
      { subject: "Social Sci", score: "70/100" },
    ],
  },
];