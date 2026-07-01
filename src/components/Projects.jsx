import React, { useState, useRef, useCallback } from "react";
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

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const filtered = searchTerm.trim()
    ? projectsData.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.stackSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : projectsData;

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

  const proj = filtered[current] ?? null;

  return (
    <section id="projects" className="py-24 px-8 max-w-[1000px] mx-auto">
      {/* Section header */}
      <div className="mb-10">
        <div className="font-mono text-[0.72rem] text-metal-400 tracking-[0.14em] uppercase mb-2">
          // PROJECT_LOG
        </div>
        <h2 className="text-[1.8rem] font-bold tracking-[-0.02em] text-metal-100">
          Proyectos
        </h2>
      </div>

      {/* LOG CONTAINER */}
      <div className="bg-[#1a2a38] border border-metal-700/60 rounded-xl overflow-hidden shadow-card">

        {/* Log header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#1e2d3b] border-b border-metal-700/60">
          <div className="flex items-center gap-3">
            <FolderOpenIcon className="w-5 h-5 text-metal-400" />
            <span className="font-mono text-[0.8rem] font-semibold text-metal-200 uppercase tracking-[0.08em]">
              Registro de Proyectos
            </span>
          </div>
          <span className="font-mono text-[0.72rem] text-metal-500">
            {filtered.length > 0 ? `${current + 1} / ${filtered.length}` : "0 / 0"}&nbsp;&nbsp;proyectos
          </span>
        </div>

        {/* Search + nav bar */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-metal-700/60 bg-[#1a2a38]">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-metal-500 pointer-events-none z-10" />
            <input
              type="text"
              className="w-full bg-[#111d27] border border-metal-700/60 rounded-md py-2.5 pl-9 pr-3 font-mono text-[0.8rem] text-metal-200 transition-all duration-200 outline-none focus:border-metal-500 placeholder:text-metal-600"
              placeholder="Buscar proyecto, tecnologia..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button
            onClick={prev}
            disabled={filtered.length <= 1}
            className="flex items-center justify-center w-9 h-9 rounded-md bg-[#111d27] border border-metal-700/60 text-metal-400 transition-all duration-150 hover:border-[#34d399]/50 hover:text-[#34d399] disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            disabled={filtered.length <= 1}
            className="flex items-center justify-center w-9 h-9 rounded-md bg-[#111d27] border border-metal-700/60 text-metal-400 transition-all duration-150 hover:border-[#34d399]/50 hover:text-[#34d399] disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Slide area */}
        <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
          {filtered.length === 0 ? (
            <div className="py-16 text-center font-mono text-metal-600 text-[0.85rem]">
              No se encontraron proyectos que coincidan con &ldquo;{searchTerm}&rdquo;
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
              className="px-5 py-5"
            >
              {/* Entry header */}
              <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-[#34d399] bg-[#34d399]/20 flex-shrink-0" />
                  <span className="font-mono text-[0.7rem] text-metal-500 bg-[#111d27] px-2 py-0.5 rounded border border-metal-700/60">
                    {proj.hash}
                  </span>
                </div>
                <span className={`badge badge-${proj.badgeType}`}>{proj.badge}</span>
                <span className="font-mono text-[0.7rem] text-metal-500 ml-auto">{proj.date}</span>
              </div>

              {/* Title */}
              <div className="text-[1.15rem] font-bold text-metal-100 mb-1 tracking-[-0.01em]">
                {proj.title}
              </div>

              {/* Stack */}
              <div className="text-[0.78rem] text-metal-400 mb-4 flex items-center gap-1.5">
                <CogIcon className="w-4 h-4 text-metal-500 flex-shrink-0" />
                <span className="text-metal-500">Stack:</span>
                <span className="font-mono text-[0.75rem] font-semibold text-metal-300">
                  {proj.stackSummary}
                </span>
              </div>

              {/* Two-column body */}
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {/* Image */}
                <div className="w-full h-[220px] rounded-md overflow-hidden border border-metal-700/60 bg-gradient-to-br from-metal-800 to-metal-900 flex items-center justify-center text-metal-600 font-mono text-[0.8rem]">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  ) : (
                    <span>[ Captura: {proj.title} ]</span>
                  )}
                </div>

                {/* Right panel */}
                <div className="flex flex-col gap-3">
                  <div className="bg-[#111d27] border border-metal-700/60 rounded-md px-4 py-3 flex-1">
                    <div className="font-mono text-[0.68rem] font-semibold text-metal-500 uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1.5">
                      <DocumentTextIcon className="w-3.5 h-3.5" />
                      DESCRIPCION:
                    </div>
                    <div className="font-mono text-[0.78rem] text-metal-300 leading-[1.6]">
                      {proj.description}
                    </div>
                  </div>

                  <div className="flex gap-1.5 flex-wrap">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[0.68rem] px-2.5 py-1 bg-[#111d27] border border-metal-700/60 rounded text-metal-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2.5 flex-wrap">
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-3.5 py-1.5 rounded bg-metal-500 text-white no-underline transition-colors duration-150 hover:bg-metal-400"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                        Ver demo
                      </a>
                    )}
                    {proj.paperUrl && (
                      <a
                        href={proj.paperUrl}
                        className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-3.5 py-1.5 rounded bg-metal-500 text-white no-underline transition-colors duration-150 hover:bg-metal-400"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <DocumentIcon className="w-3.5 h-3.5" />
                        Ver paper
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-3.5 py-1.5 rounded bg-[#1e2d3b] border border-metal-600/60 text-metal-300 no-underline transition-all duration-150 hover:border-metal-400 hover:text-metal-100"
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
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? "w-6 h-2 bg-[#34d399]"
                    : "w-2 h-2 bg-metal-600 hover:bg-metal-400"
                }`}
                aria-label={`Ir al proyecto ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight  { from { opacity:0; transform:translateX(60px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInLeft   { from { opacity:0; transform:translateX(-60px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideOutLeft  { from { opacity:1; transform:translateX(0); }  to { opacity:0; transform:translateX(-60px); } }
        @keyframes slideOutRight { from { opacity:1; transform:translateX(0); }  to { opacity:0; transform:translateX(60px);  } }
      `}</style>
    </section>
  );
}
