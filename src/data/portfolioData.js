export const personalInfo = {
  name: "Angel",
  lastName: "Portilla",
  logo: "// AngelPortilla.dev",
  eyebrow: "Full Stack Developer & Investigador en IA",
  title: "$ developer --mode full-stack --passion innovation",
  description: "Desarrollador Full Stack en formación, estudiante de Ingeniería de Sistemas en la Universidad de Pamplona. Construyo soluciones digitales que impactan positivamente, con experiencia en desarrollo web e inteligencia artificial aplicada.",
  stats: [
    { num: "3+", label: "Proyectos" },
    { num: "10+", label: "Tecnologías" },
    { num: "1",   label: "Investigación" }
  ],
  about: {
    profile: "Soy un desarrollador Full Stack apasionado por transformar ideas en código funcional. Me encanta la tecnología, la educación y la innovación. Actualmente expando mis conocimientos en desarrollo web e inteligencia artificial, siempre enfocado en crear proyectos que resuelvan problemas reales y tengan un impacto positivo.",
    thesis: "Participé como investigador en el grupo CICOM (Ciencias Computacionales) de la Universidad de Pamplona, contribuyendo al proyecto AlfabetIaRural: una iniciativa para fortalecer la alfabetización en IA en comunidades del nororiente colombiano mediante arquitecturas multiagente y etnografía digital.",
    focus: "Actualmente busco colaborar en proyectos open source y desarrollar soluciones que combinen desarrollo Full Stack con inteligencia artificial. Abierto a nuevos retos y siempre aprendiendo 📚"
  },
  contact: {
    email: "angelportihernan019@gmail.com",
    github: "https://github.com/AngelPortilla1",
    linkedin: "https://www.instagram.com/ag_portilla_/"
  }
};

export const projectsData = [
  {
    id: "proj-1",
    hash: "a3f9d12...",
    badge: "FULLSTACK",
    badgeType: "blue",
    date: "2024",
    title: "DevCommunity",
    stackSummary: "HTML5 · CSS3 · JAVASCRIPT",
    image: "https://github.com/AngelPortilla1/DevCommunity/blob/master/assets/Home.png?raw=true",
    description: "Plataforma para conectar desarrolladores, compartir recursos y opiniones en comunidad. Interfaz responsive con foco en la experiencia del usuario y la colaboración entre devs.",
    tags: ["HTML5", "CSS3", "JavaScript", "Comunidad", "Frontend"],
    demoUrl: null,
    githubUrl: "https://github.com/AngelPortilla1/DevCommunity"
  },
  {
    id: "proj-2",
    hash: "b7c1e88...",
    badge: "EN DESARROLLO",
    badgeType: "orange",
    date: "2024",
    title: "Sistema Web Ecommerce",
    stackSummary: "REACT · NODE.JS · SQLITE",
    image: "https://github.com/AngelPortilla1/Ecommerce_React/blob/main/src/assets/Preview_Ecommerce.png?raw=true",
    description: "Sistema completo de comercio electrónico con gestión de inventario y pagos. Arquitectura Full Stack con React en el frontend y Node.js + SQLite en el backend.",
    tags: ["React", "Node.js", "SQLite", "Ecommerce", "REST API"],
    demoUrl: null,
    githubUrl: "https://github.com/AngelPortilla1/Ecommerce_React"
  },
  {
    id: "proj-3",
    hash: "f2e4a07...",
    badge: "INVESTIGACIÓN",
    badgeType: "green",
    date: "2024",
    title: "AlfabetIaRural — Arquitectura Multiagente",
    stackSummary: "PYTHON · FASTAPI · LLMs · MULTIAGENTES",
    image: "https://github.com/AngelPortilla1/Alfabet-IA-Rural---Etnografia-Aumentada-por-IA/blob/main/fronted-alfabetia/src/assets/ChatEtnografico.png?raw=true",
    description: "Investigación universitaria en el grupo CICOM (Universidad de Pamplona). Arquitectura de agentes inteligentes para la caracterización de necesidades de alfabetización en IA en comunidades rurales del nororiente colombiano. Integra LLMs, etnografía digital y sistemas multiagente.",
    tags: ["Python", "FastAPI", "Pydantic", "Multi-Agent", "Generative AI", "Etnografía Digital"],
    paperUrl: "https://github.com/AngelPortilla1/Arquitectura-Multiagentes-Mediante-Etnografia-digital",
    githubUrl: "https://github.com/AngelPortilla1/Arquitectura-Multiagentes-Mediante-Etnografia-digital"
  }
];

export const graphData = {
  nodes: [
    { id: 0,  name: "Full Stack",   category: "Perfil",         level: 5, group: "core",     r: 28 },
    { id: 1,  name: "React",        category: "Frontend",       level: 4, group: "frontend",  r: 20 },
    { id: 2,  name: "HTML/CSS",     category: "Frontend",       level: 5, group: "frontend",  r: 18 },
    { id: 3,  name: "JavaScript",   category: "Frontend",       level: 4, group: "frontend",  r: 20 },
    { id: 4,  name: "Angular",      category: "Frontend",       level: 3, group: "frontend",  r: 16 },
    { id: 5,  name: "Vite",         category: "Frontend",       level: 4, group: "frontend",  r: 15 },
    { id: 6,  name: "Python",       category: "Backend",        level: 4, group: "backend",   r: 20 },
    { id: 7,  name: "FastAPI",      category: "Backend",        level: 4, group: "backend",   r: 18 },
    { id: 8,  name: "NestJS",       category: "Backend",        level: 3, group: "backend",   r: 16 },
    { id: 9,  name: "Node.js",      category: "Backend",        level: 3, group: "backend",   r: 16 },
    { id: 10, name: "SQL",          category: "Base de Datos",  level: 4, group: "db",        r: 17 },
    { id: 11, name: "SQLite",       category: "Base de Datos",  level: 3, group: "db",        r: 15 },
    { id: 12, name: "Git",          category: "DevOps",         level: 5, group: "devops",    r: 18 },
    { id: 13, name: "GitHub",       category: "DevOps",         level: 5, group: "devops",    r: 18 },
    { id: 14, name: "Figma",        category: "Diseño",         level: 3, group: "devops",    r: 15 },
    { id: 15, name: "Multi-Agent",  category: "IA",             level: 4, group: "graph",     r: 20 },
    { id: 16, name: "Gen AI / LLM", category: "IA",             level: 3, group: "graph",     r: 17 },
  ],
  links: [
    { source: 0, target: 1  }, { source: 0, target: 3  }, { source: 0, target: 6  },
    { source: 0, target: 10 }, { source: 0, target: 12 }, { source: 0, target: 15 },
    { source: 1, target: 2  }, { source: 1, target: 3  }, { source: 1, target: 5  },
    { source: 3, target: 4  }, { source: 3, target: 5  },
    { source: 6, target: 7  }, { source: 7, target: 15 }, { source: 15, target: 16 },
    { source: 8, target: 9  }, { source: 9, target: 10 },
    { source: 10, target: 11},
    { source: 12, target: 13}, { source: 12, target: 14},
  ],
  groupColors: {
    core:     { fill: "#34d399", stroke: "#10b981" },  /* verde acento — nodo principal */
    frontend: { fill: "#8a9bb7", stroke: "#697a9b" },  /* color-2 / color-3 */
    backend:  { fill: "#697a9b", stroke: "#4a5c78" },  /* color-3 / color-4 */
    db:       { fill: "#b0c4e8", stroke: "#8a9bb7" },  /* color-1 / color-2 */
    graph:    { fill: "#2b3d4f", stroke: "#1e2d3b" },  /* color-5 / darker  */
    devops:   { fill: "#8a9bb7", stroke: "#4a5c78" }   /* color-2 / color-4 */
  }
};

