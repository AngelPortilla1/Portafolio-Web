import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  FolderOpenIcon,
  CogIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ArrowTopRightOnSquareIcon,
  DocumentIcon,
  CodeBracketIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { projectsData } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  /* Map project descriptions and badges via translation keys */
  const descriptionKeys = ['proj1_description', 'proj2_description', 'proj3_description'];
  const badgeKeys = {
    'FULLSTACK':      'badge_fullstack',
    'EN DESARROLLO':  'badge_in_progress',
    'INVESTIGACIÓN':  'badge_research',
  };

  /* Enrich projectsData with translated text at render time */
  const localizedProjects = projectsData.map((p, i) => ({
    ...p,
    description: t(descriptionKeys[i]) ?? p.description,
    badge: t(badgeKeys[p.badge]) ?? p.badge,
  }));

  const filtered = searchTerm.trim()
    ? localizedProjects.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.stackSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : localizedProjects;

  const goTo = useCallback(
    (idx, dir) => {
      if (animating || idx === current) return;
      setDirection(dir);
      setAnimating(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 320);
    },
    [animating, current]
  );

  const prev = () => {
    const idx = (current - 1 + filtered.length) % filtered.length;
    goTo(idx, "left");
  };
  const next = () => {
    const idx = (current + 1) % filtered.length;
    goTo(idx, "right");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrent(0);
  };

  const sectionRef = useRef(null);

  /* ── Keyboard navigation (arrow keys) ── */
  useEffect(() => {
    const handleKey = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }); // sin deps para usar siempre los prev/next actualizados

  const proj = filtered[current] ?? null;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 sm:py-24 px-5 sm:px-8 max-w-[1000px] mx-auto"
      aria-label={t('projects_section_label')}
    >
      {/* Section header */}
      <ScrollReveal>
        <div className="mb-8 sm:mb-10">
          <div className="font-mono text-[0.72rem] text-metal-400 tracking-[0.14em] uppercase mb-2">
            // PROJECT_LOG
          </div>
          <h2 className="text-[1.6rem] sm:text-[1.8rem] font-bold tracking-[-0.02em] text-metal-100">
            {t('projects_heading')}
          </h2>
        </div>
      </ScrollReveal>

      {/* LOG CONTAINER */}
      <ScrollReveal variant="scale">
        <div className="bg-metal-800 border border-metal-700/60 rounded-xl overflow-hidden shadow-card transition-colors duration-300">
          {/* Log header */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 bg-metal-800 border-b border-metal-700/60">
            <div className="flex items-center gap-2 sm:gap-3">
              <FolderOpenIcon className="w-5 h-5 text-metal-400" />
              <span className="font-mono text-[0.72rem] sm:text-[0.8rem] font-semibold text-metal-200 uppercase tracking-[0.08em]">
                {t('projects_log_title')}
              </span>
            </div>
            <span className="font-mono text-[0.68rem] sm:text-[0.72rem] text-metal-500">
              {filtered.length > 0 ? `${current + 1} / ${filtered.length}` : "0 / 0"}&nbsp;&nbsp;{t('projects_counter')}
            </span>
          </div>

          {/* Search + nav bar */}
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 border-b border-metal-700/60 bg-metal-800">
            <div className="flex-1 relative min-w-0">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-metal-500 pointer-events-none z-10" />
              <input
                type="text"
                className="w-full bg-metal-900 border border-metal-700/60 rounded-md py-2 sm:py-2.5 pl-9 pr-3 font-mono text-[0.75rem] sm:text-[0.8rem] text-metal-200 transition-all duration-200 outline-none focus:border-metal-500 placeholder:text-metal-600"
                placeholder={t('projects_search_placeholder')}
                value={searchTerm}
                onChange={handleSearch}
                aria-label={t('projects_search_aria')}
              />
            </div>
            <button
              onClick={prev}
              disabled={filtered.length <= 1}
              className="flex items-center justify-center w-9 h-9 rounded-md bg-metal-900 border border-metal-700/60 text-metal-400 transition-all duration-150 hover:border-[rgba(var(--accent-rgb),0.5)] hover:text-[var(--accent)] disabled:opacity-30 disabled:cursor-not-allowed shrink-0 cursor-pointer"
              aria-label={t('projects_prev')}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={filtered.length <= 1}
              className="flex items-center justify-center w-9 h-9 rounded-md bg-metal-900 border border-metal-700/60 text-metal-400 transition-all duration-150 hover:border-[rgba(var(--accent-rgb),0.5)] hover:text-[var(--accent)] disabled:opacity-30 disabled:cursor-not-allowed shrink-0 cursor-pointer"
              aria-label={t('projects_next')}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
            {/* Keyboard hint */}
            <span className="hidden sm:flex items-center gap-1 font-mono text-[0.58rem] text-metal-600 ml-1 select-none" title="Use arrow keys to navigate">
              <span className="px-1 py-0.5 rounded border border-metal-700/50 bg-metal-900 leading-none">←</span>
              <span className="px-1 py-0.5 rounded border border-metal-700/50 bg-metal-900 leading-none">→</span>
            </span>
          </div>

          {/* Slide area */}
          <div className="relative overflow-hidden min-h-[420px] sm:min-h-[520px]">
            {filtered.length === 0 ? (
              <div className="py-16 text-center font-mono text-metal-600 text-[0.85rem]">
                {t('projects_not_found')} &ldquo;{searchTerm}&rdquo;
              </div>
            ) : proj ? (
              <div
                key={proj.id}
                style={{
                  animation: animating
                    ? direction === "right"
                      ? "slideOutLeft 0.32s ease forwards"
                      : "slideOutRight 0.32s ease forwards"
                    : direction === "right"
                    ? "slideInRight 0.32s ease forwards"
                    : direction === "left"
                    ? "slideInLeft 0.32s ease forwards"
                    : "none",
                }}
                className="px-4 sm:px-5 py-4 sm:py-5"
              >
                {/* Entry header */}
                <div className="flex items-center gap-2 sm:gap-2.5 mb-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[var(--accent)] bg-[rgba(var(--accent-rgb),0.2)] flex-shrink-0" />
                    <span className="font-mono text-[0.65rem] sm:text-[0.7rem] text-metal-500 bg-metal-900 px-2 py-0.5 rounded border border-metal-700/60">
                      {proj.hash}
                    </span>
                  </div>
                  <span className={`badge badge-${proj.badgeType}`}>{proj.badge}</span>
                  <span className="font-mono text-[0.65rem] sm:text-[0.7rem] text-metal-500 ml-auto">{proj.date}</span>
                </div>

                {/* Title */}
                <div className="text-[1rem] sm:text-[1.15rem] font-bold text-metal-100 mb-1 tracking-[-0.01em]">
                  {proj.title}
                </div>

                {/* Stack */}
                <div className="text-[0.72rem] sm:text-[0.78rem] text-metal-400 mb-4 flex items-center gap-1.5 flex-wrap">
                  <CogIcon className="w-4 h-4 text-metal-500 flex-shrink-0" />
                  <span className="text-metal-500">Stack:</span>
                  <span className="font-mono text-[0.7rem] sm:text-[0.75rem] font-semibold text-metal-300">
                    {proj.stackSummary}
                  </span>
                </div>

                {/* Two-column body (stacks on mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Image */}
                  <div className="w-full h-[180px] sm:h-[220px] rounded-md overflow-hidden border border-metal-700/60 bg-gradient-to-br from-metal-800 to-metal-900 flex items-center justify-center text-metal-600 font-mono text-[0.8rem]">
                    {proj.image ? (
                      <img
                        src={proj.image}
                        alt={`${t('proj_img_alt')} ${proj.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span>[ {t('proj_img_placeholder')} {proj.title} ]</span>
                    )}
                  </div>

                  {/* Right panel */}
                  <div className="flex flex-col gap-3">
                    <div className="bg-metal-900 border border-metal-700/60 rounded-md px-3 sm:px-4 py-3 flex-1">
                      <div className="font-mono text-[0.65rem] sm:text-[0.68rem] font-semibold text-metal-500 uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1.5">
                        <DocumentTextIcon className="w-3.5 h-3.5" />
                        {t('projects_desc_label')}
                      </div>
                      <div className="font-mono text-[0.72rem] sm:text-[0.78rem] text-metal-300 leading-[1.6]">
                        {proj.description}
                      </div>
                    </div>

                    <div className="flex gap-1.5 flex-wrap">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[0.62rem] sm:text-[0.68rem] px-2 sm:px-2.5 py-0.5 sm:py-1 bg-metal-900 border border-metal-700/60 rounded text-metal-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 sm:gap-2.5 flex-wrap">
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          className="inline-flex items-center gap-1.5 text-[0.72rem] sm:text-[0.75rem] font-semibold px-3 sm:px-3.5 py-1.5 rounded bg-[var(--accent)] text-[var(--accent-on)] no-underline transition-all duration-150 hover:bg-[var(--accent-bright)] hover:shadow-[0_0_12px_rgba(var(--accent-rgb),0.45)]"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 stroke-[2.5px]" />
                          {t('projects_demo')}
                        </a>
                      )}
                      {proj.paperUrl && (
                        <a
                          href={proj.paperUrl}
                          className="inline-flex items-center gap-1.5 text-[0.72rem] sm:text-[0.75rem] font-medium px-3 sm:px-3.5 py-1.5 rounded bg-metal-500 text-metal-900 no-underline transition-colors duration-150 hover:bg-metal-400"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <DocumentIcon className="w-3.5 h-3.5" />
                          {t('projects_paper')}
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          className="inline-flex items-center gap-1.5 text-[0.72rem] sm:text-[0.75rem] font-medium px-3 sm:px-3.5 py-1.5 rounded bg-metal-800 border border-metal-600/60 text-metal-300 no-underline transition-all duration-150 hover:border-metal-400 hover:text-metal-100"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CodeBracketIcon className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Dot navigation */}
          {filtered.length > 1 && (
            <div className="flex items-center justify-center gap-2 py-4 border-t border-metal-700/60">
              {filtered.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx, idx > current ? "right" : "left")}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === current
                      ? "w-6 h-2 bg-[var(--accent)]"
                      : "w-2 h-2 bg-metal-600 hover:bg-metal-400"
                  }`}
                  aria-label={`${t('projects_go_to')} ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
