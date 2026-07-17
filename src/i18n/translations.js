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
    nav_about:   'Sobre mí',
    nav_projects: 'Proyectos',
    nav_stack:   'Stack',
    nav_contact: 'Contacto',
    nav_openMenu:  'Abrir menú',
    nav_closeMenu: 'Cerrar menú',
    nav_ariaLabel: 'Navegación principal',
    nav_goHome:    'Ir al inicio',
    lang_toggle_label: 'Cambiar idioma a inglés',

    /* ── Hero ──────────────────────────────────── */
    hero_cta_projects: 'Ver proyectos',
    hero_cta_cv:       'Descargar CV',

    /* ── About ─────────────────────────────────── */
    about_section_label: 'Sobre mí',
    about_heading:       'Sobre mí',
    about_terminal_label: 'Terminal interactiva',
    about_input_placeholder: 'escribe un comando…',
    about_input_aria:    'Ingresa un comando de terminal',
    about_hint:          '✦ Terminal interactiva — escribe',
    about_hint_help:     'help',
    about_hint_suffix:   'o usa los botones:',

    /* Terminal script lines */
    term_welcome:    '# Bienvenido al perfil interactivo de Angel Portilla',
    term_role:       'Full Stack Developer & Investigador IA',
    term_location:   'Pamplona, Colombia 🇨🇴',
    term_university: 'Universidad de Pamplona',
    term_research_title: '██  AlfabetIaRural — Investigación CICOM',
    term_research_pub:   '✔  Publicado en grupo CICOM · Universidad de Pamplona',
    term_focus_prompt:   '→',
    term_prompt_end:     '── Escribe',
    term_prompt_help:    'help',
    term_prompt_end2:    'para ver comandos disponibles ──',

    /* Command responses */
    cmd_help_title:   'Comandos disponibles:',
    cmd_help_whoami:  '— Información del desarrollador',
    cmd_help_contact: '— Formas de contacto',
    cmd_help_skills:  '— Habilidades técnicas',
    cmd_help_cv:      '— Ver Currículum Vitae',
    cmd_help_clear:   '— Limpiar terminal',
    cmd_help_github:  '— Abrir GitHub',
    cmd_cv_opening:   '✔ Abriendo CV...',
    cmd_github_opening: '✔ Abriendo GitHub…',
    cmd_not_found:    'command not found:',
    cmd_not_found_hint: '  — escribe',

    /* ── Projects ──────────────────────────────── */
    projects_section_label: 'Proyectos',
    projects_heading:    'Proyectos',
    projects_log_title:  'Registro de Proyectos',
    projects_counter:    'proyectos',
    projects_search_placeholder: 'Buscar proyecto...',
    projects_search_aria: 'Buscar proyectos',
    projects_prev:       'Proyecto anterior',
    projects_next:       'Proyecto siguiente',
    projects_go_to:      'Ir al proyecto',
    projects_not_found:  'No se encontraron proyectos que coincidan con',
    projects_desc_label: 'DESCRIPCIÓN:',
    projects_demo:       'Ver demo',
    projects_paper:      'Ver paper',
    proj_img_alt:        'Captura de',
    proj_img_placeholder:'Captura:',

    /* Project badges */
    badge_fullstack:    'FULLSTACK',
    badge_in_progress:  'EN DESARROLLO',
    badge_research:     'INVESTIGACIÓN',

    /* Project descriptions */
    proj1_description: 'Plataforma para conectar desarrolladores, compartir recursos y opiniones en comunidad. Interfaz responsive con foco en la experiencia del usuario y la colaboración entre devs.',
    proj2_description: 'Sistema completo de comercio electrónico con gestión de inventario y pagos. Arquitectura Full Stack con React en el frontend y Node.js + SQLite en el backend.',
    proj3_description: 'Investigación universitaria en el grupo CICOM (Universidad de Pamplona). Arquitectura de agentes inteligentes para la caracterización de necesidades de alfabetización en IA en comunidades rurales del nororiente colombiano.',

    /* ── TechGraph ─────────────────────────────── */
    stack_section_label: 'Stack Tecnológico',
    stack_heading:       'Stack',

    /* ── Contact ───────────────────────────────── */
    contact_section_label: 'Contacto',
    contact_heading:    'Hablemos',
    contact_subtitle:   '¿Tienes un proyecto en mente, una propuesta de colaboración, o simplemente quieres conectar? Me encantaría escucharte.',
    contact_label_name:    'Nombre',
    contact_label_email:   'Email',
    contact_label_message: 'Mensaje',
    contact_placeholder_name:    'Tu nombre',
    contact_placeholder_message: 'Cuéntame sobre tu proyecto o idea...',
    contact_btn_send:    'Enviar mensaje',
    contact_btn_sent:    '¡Mensaje preparado!',
    contact_subject:     'Contacto desde portafolio —',
    contact_body_greeting: 'Hola Angel,\n\nSoy',
    contact_body_closing: '\n\nSaludos.',

    /* ── Footer ────────────────────────────────── */
    footer_logo_aria:  'Ir al inicio',
    footer_tagline:    'Full Stack Developer & Investigador en IA. Construyendo soluciones que impactan.',
    footer_available:  'Disponible para proyectos',
    footer_nav_title:  'Navegación',
    footer_social_title: 'Conectar',
    footer_made_with:  'Hecho con',
    footer_nav_about:   'Sobre mí',
    footer_nav_projects: 'Proyectos',
    footer_nav_stack:   'Stack',
    footer_nav_contact: 'Contacto',
  },

  en: {
    /* ── Accessibility ─────────────────────────── */
    skipNav: 'Skip to content',

    /* ── Navbar ────────────────────────────────── */
    nav_about:   'About',
    nav_projects: 'Projects',
    nav_stack:   'Stack',
    nav_contact: 'Contact',
    nav_openMenu:  'Open menu',
    nav_closeMenu: 'Close menu',
    nav_ariaLabel: 'Main navigation',
    nav_goHome:    'Go to home',
    lang_toggle_label: 'Switch language to Spanish',

    /* ── Hero ──────────────────────────────────── */
    hero_cta_projects: 'See projects',
    hero_cta_cv:       'Download CV',

    /* ── About ─────────────────────────────────── */
    about_section_label: 'About me',
    about_heading:       'About me',
    about_terminal_label: 'Interactive terminal',
    about_input_placeholder: 'type a command…',
    about_input_aria:    'Enter a terminal command',
    about_hint:          '✦ Interactive terminal — type',
    about_hint_help:     'help',
    about_hint_suffix:   'or use the buttons:',

    /* Terminal script lines */
    term_welcome:    '# Welcome to Angel Portilla\'s interactive profile',
    term_role:       'Full Stack Developer & AI Researcher',
    term_location:   'Pamplona, Colombia 🇨🇴',
    term_university: 'Universidad de Pamplona',
    term_research_title: '██  AlfabetIaRural — CICOM Research',
    term_research_pub:   '✔  Published in CICOM group · Universidad de Pamplona',
    term_focus_prompt:   '→',
    term_prompt_end:     '── Type',
    term_prompt_help:    'help',
    term_prompt_end2:    'to see available commands ──',

    /* Command responses */
    cmd_help_title:   'Available commands:',
    cmd_help_whoami:  '— Developer info',
    cmd_help_contact: '— Contact methods',
    cmd_help_skills:  '— Technical skills',
    cmd_help_cv:      '— View Curriculum Vitae',
    cmd_help_clear:   '— Clear terminal',
    cmd_help_github:  '— Open GitHub',
    cmd_cv_opening:   '✔ Opening CV...',
    cmd_github_opening: '✔ Opening GitHub…',
    cmd_not_found:    'command not found:',
    cmd_not_found_hint: '  — type',

    /* ── Projects ──────────────────────────────── */
    projects_section_label: 'Projects',
    projects_heading:    'Projects',
    projects_log_title:  'Project Log',
    projects_counter:    'projects',
    projects_search_placeholder: 'Search project...',
    projects_search_aria: 'Search projects',
    projects_prev:       'Previous project',
    projects_next:       'Next project',
    projects_go_to:      'Go to project',
    projects_not_found:  'No projects found matching',
    projects_desc_label: 'DESCRIPTION:',
    projects_demo:       'Live demo',
    projects_paper:      'View paper',
    proj_img_alt:        'Screenshot of',
    proj_img_placeholder:'Screenshot:',

    /* Project badges */
    badge_fullstack:    'FULLSTACK',
    badge_in_progress:  'IN PROGRESS',
    badge_research:     'RESEARCH',

    /* Project descriptions */
    proj1_description: 'Platform to connect developers, share resources and opinions as a community. Responsive interface focused on user experience and collaboration between devs.',
    proj2_description: 'Complete e-commerce system with inventory and payment management. Full Stack architecture with React on the frontend and Node.js + SQLite on the backend.',
    proj3_description: 'University research in the CICOM group (Universidad de Pamplona). Intelligent agent architecture for characterizing AI literacy needs in rural communities in northeastern Colombia.',

    /* ── TechGraph ─────────────────────────────── */
    stack_section_label: 'Tech Stack',
    stack_heading:       'Stack',

    /* ── Contact ───────────────────────────────── */
    contact_section_label: 'Contact',
    contact_heading:    "Let's Talk",
    contact_subtitle:   'Have a project in mind, a collaboration proposal, or just want to connect? I\'d love to hear from you.',
    contact_label_name:    'Name',
    contact_label_email:   'Email',
    contact_label_message: 'Message',
    contact_placeholder_name:    'Your name',
    contact_placeholder_message: 'Tell me about your project or idea...',
    contact_btn_send:    'Send message',
    contact_btn_sent:    'Message ready!',
    contact_subject:     'Portfolio contact —',
    contact_body_greeting: 'Hi Angel,\n\nI\'m',
    contact_body_closing: '\n\nBest regards.',

    /* ── Footer ────────────────────────────────── */
    footer_logo_aria:  'Go to home',
    footer_tagline:    'Full Stack Developer & AI Researcher. Building solutions that matter.',
    footer_available:  'Available for projects',
    footer_nav_title:  'Navigation',
    footer_social_title: 'Connect',
    footer_made_with:  'Made with',
    footer_nav_about:   'About',
    footer_nav_projects: 'Projects',
    footer_nav_stack:   'Stack',
    footer_nav_contact: 'Contact',
  },
};

export default translations;
