/**
 * translations.js
 * Central i18n file — all visible UI text in ES and EN.
 * Access via useLanguage() hook → t('key')
 */

const translations = {
  es: {
    /* ── Accessibility ─────────────────────────── */
    skipNav: 'Saltar al contenido',

    /* ── Navbar ────────────────────────────────── */
    nav_about:    'Sobre mí',
    nav_projects: 'Proyectos',
    nav_stack:    'Stack',
    nav_contact:  'Contacto',
    nav_openMenu:  'Abrir menú',
    nav_closeMenu: 'Cerrar menú',
    nav_ariaLabel: 'Navegación principal',
    nav_goHome:    'Ir al inicio',
    lang_toggle_label: 'Cambiar idioma a inglés',

    /* ── Hero ──────────────────────────────────── */
    hero_section_label: 'Presentación',
    hero_eyebrow:       'Full Stack Developer & Investigador en IA',
    hero_title:         '$ developer --mode full-stack --passion innovation',
    hero_description:   'Desarrollador Full Stack en formación, estudiante de Ingeniería de Sistemas en la Universidad de Pamplona. Construyo soluciones digitales que impactan positivamente, con experiencia en desarrollo web e inteligencia artificial aplicada.',
    hero_stat_projects: 'Proyectos',
    hero_stat_tech:     'Tecnologías',
    hero_stat_research: 'Investigación',
    hero_cta_projects:  'Ver proyectos',
    hero_cta_cv:        'Descargar CV',

    /* ── About ─────────────────────────────────── */
    about_section_label:      'Sobre mí',
    about_heading:            'Sobre mí',
    about_terminal_label:     'Terminal interactiva',
    about_input_placeholder:  'escribe un comando…',
    about_input_aria:         'Ingresa un comando de terminal',
    about_hint:               '✦ Terminal interactiva — escribe',
    about_hint_help:          'help',
    about_hint_suffix:        'o usa los botones:',

    /* About — datos biográficos */
    about_profile: 'Soy un desarrollador Full Stack apasionado por transformar ideas en código funcional. Me encanta la tecnología, la educación y la innovación. Actualmente expando mis conocimientos en desarrollo web e inteligencia artificial, siempre enfocado en crear proyectos que resuelvan problemas reales y tengan un impacto positivo.',
    about_thesis:  'Participé como investigador en el grupo CICOM (Ciencias Computacionales) de la Universidad de Pamplona, contribuyendo al proyecto AlfabetIaRural: una iniciativa para fortalecer la alfabetización en IA en comunidades del nororiente colombiano mediante arquitecturas multiagente y etnografía digital.',
    about_focus:   'Actualmente busco colaborar en proyectos open source y desarrollar soluciones que combinen desarrollo Full Stack con inteligencia artificial. Abierto a nuevos retos y siempre aprendiendo 📚',

    /* Terminal script lines */
    term_welcome:       '# Bienvenido al perfil interactivo de Angel Portilla',
    term_role:          'Full Stack Developer & Investigador IA',
    term_location:      'Pamplona, Colombia 🇨🇴',
    term_university:    'Universidad de Pamplona',
    term_research_title:'██  AlfabetIaRural — Investigación CICOM',
    term_research_pub:  '✔  Publicado en grupo CICOM · Universidad de Pamplona',
    term_focus_prompt:  '→',
    term_prompt_end:    '── Escribe',
    term_prompt_help:   'help',
    term_prompt_end2:   'para ver comandos disponibles ──',

    /* Command responses */
    cmd_help_title:     'Comandos disponibles:',
    cmd_help_whoami:    '— Información del desarrollador',
    cmd_help_contact:   '— Formas de contacto',
    cmd_help_skills:    '— Habilidades técnicas',
    cmd_help_cv:        '— Ver Currículum Vitae',
    cmd_help_clear:     '— Limpiar terminal',
    cmd_help_github:    '— Abrir GitHub',
    cmd_cv_opening:     '✔ Abriendo CV...',
    cmd_github_opening: '✔ Abriendo GitHub…',
    cmd_not_found:      'command not found:',
    cmd_not_found_hint: '  — escribe',

    /* ── Projects ──────────────────────────────── */
    projects_section_label:      'Proyectos',
    projects_heading:            'Proyectos',
    projects_log_title:          'Registro de Proyectos',
    projects_counter:            'proyectos',
    projects_search_placeholder: 'Buscar proyecto...',
    projects_search_aria:        'Buscar proyectos',
    projects_prev:               'Proyecto anterior',
    projects_next:               'Proyecto siguiente',
    projects_go_to:              'Ir al proyecto',
    projects_not_found:          'No se encontraron proyectos que coincidan con',
    projects_desc_label:         'DESCRIPCIÓN:',
    projects_demo:               'Ver demo',
    projects_paper:              'Ver paper',
    proj_img_alt:                'Captura de',
    proj_img_placeholder:        'Captura:',

    /* Project badges */
    badge_fullstack:   'FULLSTACK',
    badge_in_progress: 'EN DESARROLLO',
    badge_research:    'INVESTIGACIÓN',

    /* Project descriptions */
    proj1_description: 'Plataforma para conectar desarrolladores, compartir recursos y opiniones en comunidad. Interfaz responsive con foco en la experiencia del usuario y la colaboración entre devs.',
    proj2_description: 'Sistema completo de comercio electrónico con gestión de inventario y pagos. Arquitectura Full Stack con React en el frontend y Node.js + SQLite en el backend.',
    proj3_description: 'Investigación universitaria en el grupo CICOM (Universidad de Pamplona). Arquitectura de agentes inteligentes para la caracterización de necesidades de alfabetización en IA en comunidades rurales del nororiente colombiano.',

    /* ── TechGraph ─────────────────────────────── */
    stack_section_label:  'Stack Tecnológico',
    stack_heading:        'Mi Stack Tecnológico',
    stack_graph_header:   'Grafo de Tecnologías',
    stack_graph_hint:     'Click en un nodo para explorar',
    stack_graph_hint_mob: 'Toca un nodo',
    stack_filters_label:  'Filtros:',
    stack_panel_title:    'Explorador de Skill',
    stack_panel_close:    'Cerrar panel',
    stack_panel_empty:    'Haz clic en un nodo del grafo para explorar los detalles de cada tecnología.',
    stack_skill_level:    'Nivel de dominio',
    stack_connects_to:    'Conecta con',
    stack_influenced_by:  'Influenciado por',
    stack_filter_aria:    'Filtrar',

    /* TechGraph — categorías de nodos (usadas en labels del grafo) */
    node_cat_profile:  'Perfil',
    node_cat_frontend: 'Frontend',
    node_cat_backend:  'Backend',
    node_cat_db:       'Base de Datos',
    node_cat_ia:       'IA',
    node_cat_devops:   'DevOps',
    node_cat_design:   'Diseño',

    /* TechGraph — descripciones de nodos */
    node_desc_fullstack:  'Perfil profesional principal. Desarrollo integral de aplicaciones web, desde la interfaz hasta el servidor.',
    node_desc_react:      'Librería principal para construir interfaces de usuario dinámicas y componentes reutilizables.',
    node_desc_htmlcss:    'Fundamentos de la web. Estructura semántica y estilos responsive con técnicas modernas.',
    node_desc_javascript: 'Lenguaje core del desarrollo web. ES6+, async/await, manipulación del DOM y más.',
    node_desc_angular:    'Framework de frontend con TypeScript para aplicaciones empresariales estructuradas.',
    node_desc_vite:       'Herramienta de build ultrarrápida para proyectos modernos con Hot Module Replacement.',
    node_desc_python:     'Lenguaje versátil para backend, scripting, análisis de datos e inteligencia artificial.',
    node_desc_fastapi:    'Framework Python de alto rendimiento para construir APIs REST con validación automática.',
    node_desc_nestjs:     'Framework Node.js con arquitectura modular inspirada en Angular para APIs escalables.',
    node_desc_nodejs:     'Entorno de ejecución JavaScript en el servidor para aplicaciones en tiempo real.',
    node_desc_sql:        'Lenguaje estándar para consultas y gestión de bases de datos relacionales.',
    node_desc_sqlite:     'Base de datos ligera embebida, ideal para prototipos y aplicaciones pequeñas.',
    node_desc_git:        'Control de versiones distribuido. Branching, merging y colaboración en equipo.',
    node_desc_github:     'Plataforma de desarrollo colaborativo, CI/CD y gestión de repositorios.',
    node_desc_figma:      'Herramienta de diseño UI/UX colaborativa para prototipos y sistemas de diseño.',
    node_desc_multiagent: 'Arquitecturas de sistemas multiagente inteligentes para investigación aplicada.',
    node_desc_genai:      'Modelos de lenguaje generativo e inteligencia artificial para soluciones innovadoras.',

    /* ── Contact ───────────────────────────────── */
    contact_section_label:       'Contacto',
    contact_heading:             'Hablemos',
    contact_subtitle:            '¿Tienes un proyecto en mente, una propuesta de colaboración, o simplemente quieres conectar? Me encantaría escucharte.',
    contact_label_name:          'Nombre',
    contact_label_email:         'Email',
    contact_label_message:       'Mensaje',
    contact_placeholder_name:    'Tu nombre',
    contact_placeholder_email:   'tu@email.com',
    contact_placeholder_message: 'Cuéntame sobre tu proyecto o idea...',
    contact_btn_send:            'Enviar mensaje',
    contact_btn_sent:            '¡Mensaje preparado!',
    contact_subject:             'Contacto desde portafolio —',
    contact_body_greeting:       'Hola Angel,\n\nSoy',
    contact_body_closing:        '\n\nSaludos.',

    /* ── Footer ────────────────────────────────── */
    footer_logo_aria:    'Ir al inicio',
    footer_tagline:      'Full Stack Developer & Investigador en IA. Construyendo soluciones que impactan.',
    footer_available:    'Disponible para proyectos',
    footer_nav_title:    'Navegación',
    footer_social_title: 'Conectar',
    footer_made_with:    'Hecho con',
    footer_nav_about:    'Sobre mí',
    footer_nav_projects: 'Proyectos',
    footer_nav_stack:    'Stack',
    footer_nav_contact:  'Contacto',
  },

  en: {
    /* ── Accessibility ─────────────────────────── */
    skipNav: 'Skip to content',

    /* ── Navbar ────────────────────────────────── */
    nav_about:    'About',
    nav_projects: 'Projects',
    nav_stack:    'Stack',
    nav_contact:  'Contact',
    nav_openMenu:  'Open menu',
    nav_closeMenu: 'Close menu',
    nav_ariaLabel: 'Main navigation',
    nav_goHome:    'Go to home',
    lang_toggle_label: 'Switch language to Spanish',

    /* ── Hero ──────────────────────────────────── */
    hero_section_label: 'Introduction',
    hero_eyebrow:       'Full Stack Developer & AI Researcher',
    hero_title:         '$ developer --mode full-stack --passion innovation',
    hero_description:   'Full Stack Developer in training, Systems Engineering student at Universidad de Pamplona. I build digital solutions that make a positive impact, with experience in web development and applied artificial intelligence.',
    hero_stat_projects: 'Projects',
    hero_stat_tech:     'Technologies',
    hero_stat_research: 'Research',
    hero_cta_projects:  'See projects',
    hero_cta_cv:        'Download CV',

    /* ── About ─────────────────────────────────── */
    about_section_label:      'About me',
    about_heading:            'About me',
    about_terminal_label:     'Interactive terminal',
    about_input_placeholder:  'type a command…',
    about_input_aria:         'Enter a terminal command',
    about_hint:               '✦ Interactive terminal — type',
    about_hint_help:          'help',
    about_hint_suffix:        'or use the buttons:',

    /* About — biographical data */
    about_profile: 'I am a Full Stack developer passionate about transforming ideas into functional code. I love technology, education and innovation. I am currently expanding my knowledge in web development and artificial intelligence, always focused on creating projects that solve real problems and have a positive impact.',
    about_thesis:  'I participated as a researcher in the CICOM (Computational Sciences) group at Universidad de Pamplona, contributing to the AlfabetIaRural project: an initiative to strengthen AI literacy in communities in northeastern Colombia through multi-agent architectures and digital ethnography.',
    about_focus:   'I am currently looking to collaborate on open source projects and develop solutions that combine Full Stack development with artificial intelligence. Open to new challenges and always learning 📚',

    /* Terminal script lines */
    term_welcome:       "# Welcome to Angel Portilla's interactive profile",
    term_role:          'Full Stack Developer & AI Researcher',
    term_location:      'Pamplona, Colombia 🇨🇴',
    term_university:    'Universidad de Pamplona',
    term_research_title:'██  AlfabetIaRural — CICOM Research',
    term_research_pub:  '✔  Published in CICOM group · Universidad de Pamplona',
    term_focus_prompt:  '→',
    term_prompt_end:    '── Type',
    term_prompt_help:   'help',
    term_prompt_end2:   'to see available commands ──',

    /* Command responses */
    cmd_help_title:     'Available commands:',
    cmd_help_whoami:    '— Developer info',
    cmd_help_contact:   '— Contact methods',
    cmd_help_skills:    '— Technical skills',
    cmd_help_cv:        '— View Curriculum Vitae',
    cmd_help_clear:     '— Clear terminal',
    cmd_help_github:    '— Open GitHub',
    cmd_cv_opening:     '✔ Opening CV...',
    cmd_github_opening: '✔ Opening GitHub…',
    cmd_not_found:      'command not found:',
    cmd_not_found_hint: '  — type',

    /* ── Projects ──────────────────────────────── */
    projects_section_label:      'Projects',
    projects_heading:            'Projects',
    projects_log_title:          'Project Log',
    projects_counter:            'projects',
    projects_search_placeholder: 'Search project...',
    projects_search_aria:        'Search projects',
    projects_prev:               'Previous project',
    projects_next:               'Next project',
    projects_go_to:              'Go to project',
    projects_not_found:          'No projects found matching',
    projects_desc_label:         'DESCRIPTION:',
    projects_demo:               'Live demo',
    projects_paper:              'View paper',
    proj_img_alt:                'Screenshot of',
    proj_img_placeholder:        'Screenshot:',

    /* Project badges */
    badge_fullstack:   'FULLSTACK',
    badge_in_progress: 'IN PROGRESS',
    badge_research:    'RESEARCH',

    /* Project descriptions */
    proj1_description: 'Platform to connect developers, share resources and opinions as a community. Responsive interface focused on user experience and collaboration between devs.',
    proj2_description: 'Complete e-commerce system with inventory and payment management. Full Stack architecture with React on the frontend and Node.js + SQLite on the backend.',
    proj3_description: 'University research in the CICOM group (Universidad de Pamplona). Intelligent agent architecture for characterizing AI literacy needs in rural communities in northeastern Colombia.',

    /* ── TechGraph ─────────────────────────────── */
    stack_section_label:  'Tech Stack',
    stack_heading:        'My Tech Stack',
    stack_graph_header:   'Technology Graph',
    stack_graph_hint:     'Click on a node to explore',
    stack_graph_hint_mob: 'Tap a node',
    stack_filters_label:  'Filters:',
    stack_panel_title:    'Skill Explorer',
    stack_panel_close:    'Close panel',
    stack_panel_empty:    'Click on a graph node to explore the details of each technology.',
    stack_skill_level:    'Skill level',
    stack_connects_to:    'Connects to',
    stack_influenced_by:  'Influenced by',
    stack_filter_aria:    'Filter',

    /* TechGraph — node categories */
    node_cat_profile:  'Profile',
    node_cat_frontend: 'Frontend',
    node_cat_backend:  'Backend',
    node_cat_db:       'Database',
    node_cat_ia:       'AI',
    node_cat_devops:   'DevOps',
    node_cat_design:   'Design',

    /* TechGraph — node descriptions */
    node_desc_fullstack:  'Main professional profile. Full-stack web application development, from the interface to the server.',
    node_desc_react:      'Primary library for building dynamic user interfaces and reusable components.',
    node_desc_htmlcss:    'Web fundamentals. Semantic structure and responsive styles with modern techniques.',
    node_desc_javascript: 'Core web development language. ES6+, async/await, DOM manipulation and more.',
    node_desc_angular:    'TypeScript frontend framework for structured enterprise applications.',
    node_desc_vite:       'Ultra-fast build tool for modern projects with Hot Module Replacement.',
    node_desc_python:     'Versatile language for backend, scripting, data analysis and artificial intelligence.',
    node_desc_fastapi:    'High-performance Python framework for building REST APIs with automatic validation.',
    node_desc_nestjs:     'Node.js framework with Angular-inspired modular architecture for scalable APIs.',
    node_desc_nodejs:     'JavaScript runtime environment on the server for real-time applications.',
    node_desc_sql:        'Standard language for querying and managing relational databases.',
    node_desc_sqlite:     'Lightweight embedded database, ideal for prototypes and small applications.',
    node_desc_git:        'Distributed version control. Branching, merging and team collaboration.',
    node_desc_github:     'Collaborative development platform, CI/CD and repository management.',
    node_desc_figma:      'Collaborative UI/UX design tool for prototypes and design systems.',
    node_desc_multiagent: 'Intelligent multi-agent system architectures for applied research.',
    node_desc_genai:      'Generative language models and artificial intelligence for innovative solutions.',

    /* ── Contact ───────────────────────────────── */
    contact_section_label:       'Contact',
    contact_heading:             "Let's Talk",
    contact_subtitle:            "Have a project in mind, a collaboration proposal, or just want to connect? I'd love to hear from you.",
    contact_label_name:          'Name',
    contact_label_email:         'Email',
    contact_label_message:       'Message',
    contact_placeholder_name:    'Your name',
    contact_placeholder_email:   'you@email.com',
    contact_placeholder_message: 'Tell me about your project or idea...',
    contact_btn_send:            'Send message',
    contact_btn_sent:            'Message ready!',
    contact_subject:             'Portfolio contact —',
    contact_body_greeting:       "Hi Angel,\n\nI'm",
    contact_body_closing:        '\n\nBest regards.',

    /* ── Footer ────────────────────────────────── */
    footer_logo_aria:    'Go to home',
    footer_tagline:      'Full Stack Developer & AI Researcher. Building solutions that matter.',
    footer_available:    'Available for projects',
    footer_nav_title:    'Navigation',
    footer_social_title: 'Connect',
    footer_made_with:    'Made with',
    footer_nav_about:    'About',
    footer_nav_projects: 'Projects',
    footer_nav_stack:    'Stack',
    footer_nav_contact:  'Contact',
  },
};

export default translations;
