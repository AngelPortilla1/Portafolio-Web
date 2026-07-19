export const personalInfo = {
  name: "Angel",
  lastName: "Portilla",
  logo: "// AngelPortilla.dev",
  eyebrow: "Full Stack Developer & Investigador en IA",
  title: "$ developer --mode full-stack --passion innovation",
  description:
    "Desarrollador Full Stack en formación, estudiante de Ingeniería de Sistemas en la Universidad de Pamplona. Construyo soluciones digitales que impactan positivamente, con experiencia en desarrollo web e inteligencia artificial aplicada.",
  stats: [
    { num: "3+", label: "Proyectos" },
    { num: "10+", label: "Tecnologías" },
    { num: "1", label: "Investigación" },
  ],
  about: {
    profile:
      "Soy un desarrollador Full Stack apasionado por transformar ideas en código funcional. Me encanta la tecnología, la educación y la innovación. Actualmente expando mis conocimientos en desarrollo web e inteligencia artificial, siempre enfocado en crear proyectos que resuelvan problemas reales y tengan un impacto positivo.",
    thesis:
      "Participé como investigador en el grupo CICOM (Ciencias Computacionales) de la Universidad de Pamplona, contribuyendo al proyecto AlfabetIaRural: una iniciativa para fortalecer la alfabetización en IA en comunidades del nororiente colombiano mediante arquitecturas multiagente y etnografía digital.",
    focus:
      "Actualmente busco colaborar en proyectos open source y desarrollar soluciones que combinen desarrollo Full Stack con inteligencia artificial. Abierto a nuevos retos y siempre aprendiendo 📚",
  },
  cvPath: "/CV_AngelPortilla_Bc.pdf",  // ← Cambia solo este nombre al actualizar tu CV
  contact: {
    email: "angelportihernan019@gmail.com",
    github: "https://github.com/AngelPortilla1",
    linkedin: "https://www.linkedin.com/in/angel-portilla-18921215b/",
  },
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
    image: "/projects/devcommunity.webp",
    description:
      "Plataforma para conectar desarrolladores, compartir recursos y opiniones en comunidad. Interfaz responsive con foco en la experiencia del usuario y la colaboración entre devs.",
    tags: ["HTML5", "CSS3", "JavaScript", "Comunidad", "Frontend"],
    demoUrl: null,
    githubUrl: "https://github.com/AngelPortilla1/DevCommunity",
  },
  {
    id: "proj-2",
    hash: "b7c1e88...",
    badge: "EN DESARROLLO",
    badgeType: "orange",
    date: "2024",
    title: "Sistema Web Ecommerce",
    stackSummary: "REACT · NODE.JS · SQLITE",
    image: "/projects/ecommerce.webp",
    description:
      "Sistema completo de comercio electrónico con gestión de inventario y pagos. Arquitectura Full Stack con React en el frontend y Node.js + SQLite en el backend.",
    tags: ["React", "Node.js", "SQLite", "Ecommerce", "REST API"],
    demoUrl: null,
    githubUrl: "https://github.com/AngelPortilla1/Ecommerce_React",
  },
  {
    id: "proj-3",
    hash: "f2e4a07...",
    badge: "INVESTIGACIÓN",
    badgeType: "green",
    date: "2024",
    title: "AlfabetIaRural — Arquitectura Multiagente",
    stackSummary: "PYTHON · FASTAPI · LLMs · MULTIAGENTES",
    image: "/projects/alfabetia.webp",
    description:
      "Investigación universitaria en el grupo CICOM (Universidad de Pamplona). Arquitectura de agentes inteligentes para la caracterización de necesidades de alfabetización en IA en comunidades rurales del nororiente colombiano.",
    tags: [
      "Python",
      "FastAPI",
      "Pydantic",
      "Multi-Agent",
      "Generative AI",
      "Etnografía Digital",
    ],
    demoUrl:
      "https://alfabet-ia-rural-etnografia-aumentada-8qj4.onrender.com",
    paperUrl: null,
    githubUrl:
      "https://github.com/AngelPortilla1/Arquitectura-Multiagentes-Mediante-Etnografia-digital",
  },
];

export const graphData = {
  nodes: [
    { id: 0,  name: "Full Stack",   catKey: "node_cat_profile",  descKey: "node_desc_fullstack",  level: 5, group: "core",     r: 28 },
    { id: 1,  name: "React",        catKey: "node_cat_frontend", descKey: "node_desc_react",       level: 4, group: "frontend", r: 20 },
    { id: 2,  name: "HTML/CSS",     catKey: "node_cat_frontend", descKey: "node_desc_htmlcss",     level: 5, group: "frontend", r: 18 },
    { id: 3,  name: "JavaScript",   catKey: "node_cat_frontend", descKey: "node_desc_javascript",  level: 4, group: "frontend", r: 20 },
    { id: 4,  name: "Angular",      catKey: "node_cat_frontend", descKey: "node_desc_angular",     level: 3, group: "frontend", r: 16 },
    { id: 5,  name: "Vite",         catKey: "node_cat_frontend", descKey: "node_desc_vite",        level: 4, group: "frontend", r: 15 },
    { id: 6,  name: "Python",       catKey: "node_cat_backend",  descKey: "node_desc_python",      level: 4, group: "backend",  r: 20 },
    { id: 7,  name: "FastAPI",      catKey: "node_cat_backend",  descKey: "node_desc_fastapi",     level: 4, group: "backend",  r: 18 },
    { id: 8,  name: "NestJS",       catKey: "node_cat_backend",  descKey: "node_desc_nestjs",      level: 3, group: "backend",  r: 16 },
    { id: 9,  name: "Node.js",      catKey: "node_cat_backend",  descKey: "node_desc_nodejs",      level: 3, group: "backend",  r: 16 },
    { id: 10, name: "SQL",          catKey: "node_cat_db",       descKey: "node_desc_sql",         level: 4, group: "db",       r: 17 },
    { id: 11, name: "SQLite",       catKey: "node_cat_db",       descKey: "node_desc_sqlite",      level: 3, group: "db",       r: 15 },
    { id: 12, name: "Git",          catKey: "node_cat_devops",   descKey: "node_desc_git",         level: 5, group: "devops",   r: 18 },
    { id: 13, name: "GitHub",       catKey: "node_cat_devops",   descKey: "node_desc_github",      level: 5, group: "devops",   r: 18 },
    { id: 14, name: "Figma",        catKey: "node_cat_design",   descKey: "node_desc_figma",       level: 3, group: "design",   r: 15 },
    { id: 15, name: "Multi-Agent",  catKey: "node_cat_ia",       descKey: "node_desc_multiagent",  level: 4, group: "graph",    r: 20 },
    { id: 16, name: "Gen AI / LLM", catKey: "node_cat_ia",       descKey: "node_desc_genai",       level: 3, group: "graph",    r: 17 },
  ],
  links: [
    { source: 0, target: 1 }, { source: 0, target: 2 }, { source: 0, target: 3 },
    { source: 0, target: 6 }, { source: 0, target: 9 }, { source: 0, target: 10 },
    { source: 0, target: 12 }, { source: 0, target: 15 },
    { source: 1, target: 2 }, { source: 1, target: 3 }, { source: 1, target: 5 },
    { source: 3, target: 4 }, { source: 3, target: 5 },
    { source: 6, target: 7 }, { source: 7, target: 15 }, { source: 15, target: 16 },
    { source: 8, target: 9 }, { source: 9, target: 10 },
    { source: 10, target: 11 },
    { source: 12, target: 13 }, { source: 14, target: 1 },
  ],
  groupColorsDark: {
    core: { fill: "#34d399", stroke: "#10b981", label: "Perfil" },
    frontend: { fill: "#60a5fa", stroke: "#3b82f6", label: "Frontend" },
    backend: { fill: "#a78bfa", stroke: "#7c3aed", label: "Backend" },
    db: { fill: "#67e8f9", stroke: "#22d3ee", label: "Base de Datos" },
    graph: { fill: "#fb7185", stroke: "#f43f5e", label: "IA" },
    devops: { fill: "#fbbf24", stroke: "#f59e0b", label: "DevOps" },
    design: { fill: "#f472b6", stroke: "#ec4899", label: "Diseño" },
  },
  groupColorsLight: {
    core: { fill: "#059669", stroke: "#047857", label: "Perfil" },
    frontend: { fill: "#3b82f6", stroke: "#2563eb", label: "Frontend" },
    backend: { fill: "#8b5cf6", stroke: "#7c3aed", label: "Backend" },
    db: { fill: "#06b6d4", stroke: "#0891b2", label: "Base de Datos" },
    graph: { fill: "#f43f5e", stroke: "#e11d48", label: "IA" },
    devops: { fill: "#f59e0b", stroke: "#d97706", label: "DevOps" },
    design: { fill: "#ec4899", stroke: "#db2777", label: "Diseño" },
  },
};
