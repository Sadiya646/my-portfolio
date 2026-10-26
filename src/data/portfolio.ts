export const profile = {
  name: "Sadiya Tasnim",
  shortName: "Sadiya",
  designation: "Aspiring Full Stack Developer",
  education: "B.Sc. in CSE — Expected March 2028",
  intro:
    "Hi, I'm Sadiya, a Computer Science student learning to build modern web applications. I enjoy turning ideas into real products using clean code, modern technologies, and creative problem solving.",
  // TODO: replace these placeholders with real links / email
  email: "sadiya@example.com",
  github: "https://github.com/sadiyatasnim",
  linkedin: "https://linkedin.com/in/sadiyatasnim",
};

export type WorkedWith = { icon: string; alt: string };

export type SkillCategory = "frontend" | "backend" | "languages" | "tools";

export type Skill = {
  name: string;
  category: SkillCategory;
  mark: string; // shown in the icon tile
  markColor: string; // tailwind classes for the tile
};

export const skillCategories: { id: "all" | SkillCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "languages", label: "Languages" },
  { id: "tools", label: "Tools" },
];

export const skills: Skill[] = [
  { name: "HTML5", category: "frontend", mark: "5", markColor: "bg-orange-500/15 text-orange-400" },
  { name: "CSS3", category: "frontend", mark: "3", markColor: "bg-sky-500/15 text-sky-400" },
  { name: "JavaScript", category: "languages", mark: "JS", markColor: "bg-yellow-400/15 text-yellow-300" },
  { name: "TypeScript", category: "languages", mark: "TS", markColor: "bg-blue-500/15 text-blue-400" },
  { name: "React", category: "frontend", mark: "Re", markColor: "bg-cyan-500/15 text-cyan-300" },
  { name: "Next.js", category: "frontend", mark: "N", markColor: "bg-navy-100/10 text-navy-100" },
  { name: "Tailwind CSS", category: "frontend", mark: "Tw", markColor: "bg-teal-500/15 text-teal-300" },
  { name: "Node.js", category: "backend", mark: "No", markColor: "bg-green-500/15 text-green-400" },
  { name: "Express.js", category: "backend", mark: "Ex", markColor: "bg-navy-300/15 text-navy-300" },
  { name: "MongoDB", category: "backend", mark: "Mo", markColor: "bg-green-500/15 text-green-400" },
  { name: "REST API", category: "backend", mark: "API", markColor: "bg-cyan-500/15 text-cyan-300" },
  { name: "Authentication", category: "backend", mark: "Auth", markColor: "bg-navy-400/20 text-navy-300" },
  { name: "Java", category: "languages", mark: "Jv", markColor: "bg-orange-400/15 text-orange-300" },
  { name: "C", category: "languages", mark: "C", markColor: "bg-blue-400/15 text-blue-300" },
  { name: "Dart", category: "languages", mark: "D", markColor: "bg-sky-400/15 text-sky-300" },
  { name: "Git", category: "tools", mark: "Git", markColor: "bg-red-500/15 text-red-400" },
  { name: "GitHub", category: "tools", mark: "Gb", markColor: "bg-navy-100/10 text-navy-100" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string; // TODO: real deploy link
  github: string; // TODO: real client repo link
  challenges: string[];
  improvements: string[];
};


export const projects: Project[] = [
  {
    slug: "fitlog",
    title: "FitLog",
    description:
      "A modern fitness tracking web app that helps users discover workouts, create personalized plans, save exercises, and track completed workouts.",
    image: "/projects/fitlog.svg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "YOUR_FITLOG_LIVE_LINK",
    github: "YOUR_FITLOG_GITHUB_LINK",
    challenges: [
      "Managing workout plans and completed exercises with localStorage",
      "Creating a smooth and responsive workout browsing experience",
      "Managing shared state between workout library and My Plan",
    ],
    improvements: [
      "Add user accounts and cloud-based workout synchronization",
      "Add progress charts and workout analytics",
      "Add personalized workout recommendations",
    ],
  },

  {
    slug: "bloom-routine",
    title: "Bloom Routine",
    description:
      "A productivity and self-care web application that helps users organize daily routines, track habits, stay focused, and monitor personal progress.",
    image: "/images/Bloom.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://bloom-routine-ruby.vercel.app/",
    github: "https://github.com/Sadiya646/bloom-routine",
    challenges: [
      "Designing a clean interface for multiple productivity features",
      "Managing routine and habit tracking states across the application",
      "Keeping the dashboard responsive across different screen sizes",
    ],
    improvements: [
      "Add user authentication and cloud synchronization",
      "Add more detailed productivity analytics",
      "Add customizable reminders and notifications",
    ],
  },

  {
    slug: "bazardor",
    title: "BazarDor",
    description:
      "A responsive web app for exploring, tracking, and comparing essential product prices across different markets in Bangladesh.",
    image: "/images/bazardor.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
      "REST API",
    ],
    live: "https://bazardor-blush.vercel.app/",
    github: "https://github.com/Sadiya646/bazardor",
    challenges: [
      "Managing and displaying product price data from different markets",
      "Implementing category filtering, sorting, and price comparison",
      "Integrating secure authentication with email, Google, and GitHub",
    ],
    improvements: [
      "Add more markets and product categories",
      "Add price history charts and advanced analytics",
      "Add price alerts and personalized notifications",
    ],
  },
];


export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
