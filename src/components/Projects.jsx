import React, { useState, useMemo } from 'react';
import {
  FolderOpenIcon,
  CogIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ArrowTopRightOnSquareIcon,
  DocumentIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    if (!searchTerm.trim()) return projectsData;
    const term = searchTerm.toLowerCase();
    return projectsData.filter(project =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.stackSummary.toLowerCase().includes(term) ||
      project.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }, [searchTerm]);

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

      {/* ── LOG CONTAINER ── */}
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
            {filteredProjects.length} de {projectsData.length} proyectos registrados
          </span>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-4 px-5 py-3 border-b border-metal-700/60 bg-[#1a2a38]">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-metal-500 pointer-events-none z-10" />
            <input
              type="text"
              className="w-full bg-[#111d27] border border-metal-700/60 rounded-md py-2.5 pl-9 pr-3 font-mono text-[0.8rem] text-metal-200 transition-all duration-200 outline-none focus:border-metal-500 focus:shadow-accent-sm placeholder:text-metal-600"
              placeholder="Buscar proyecto, tecnología o descripción en tiempo real..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Project entries */}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj, index) => (
            <div
              key={proj.id}
              className="flex gap-4 px-5 py-5 border-b border-metal-700/40 transition-colors duration-200 hover:bg-metal-500/5 last:border-0"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center gap-0 pt-1">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-metal-400 bg-[#1a2a38] flex-shrink-0" />
                {index < filteredProjects.length - 1 && <div className="entry-line" />}
              </div>

              {/* Body */}
              <div className="flex-1 min-w-0">
                {/* Meta row */}
                <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                  <span className="font-mono text-[0.7rem] text-metal-500 bg-[#111d27] px-2 py-0.5 rounded border border-metal-700/60">
                    {proj.hash}
                  </span>
                  <span className={`badge badge-${proj.badgeType}`}>{proj.badge}</span>
                  <span className="font-mono text-[0.7rem] text-metal-500 ml-auto">
                    {proj.date}
                  </span>
                </div>

                {/* Title */}
                <div className="text-base font-bold text-metal-100 mb-1 tracking-[-0.01em]">
                  {proj.title}
                </div>

                {/* Stack */}
                <div className="text-[0.78rem] text-metal-400 mb-3 flex items-center gap-1.5">
                  <CogIcon className="w-4 h-4 text-metal-500 flex-shrink-0" />
                  <span className="text-metal-500">Stack:</span>
                  <span className="font-mono text-[0.75rem] font-semibold text-metal-300">
                    {proj.stackSummary}
                  </span>
                </div>

                {/* Image */}
                <div className="w-full h-[180px] rounded-md overflow-hidden mb-3 border border-metal-700/60 bg-gradient-to-br from-metal-800 to-metal-900 flex items-center justify-center text-metal-600 font-mono text-[0.8rem]">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  ) : (
                    <span>[ Captura del proyecto: {proj.title} ]</span>
                  )}
                </div>

                {/* Payload */}
                <div className="bg-[#111d27] border border-metal-700/60 rounded-md px-4 py-3 mb-3">
                  <div className="font-mono text-[0.68rem] font-semibold text-metal-500 uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1.5">
                    <DocumentTextIcon className="w-3.5 h-3.5" />
                    DESCRIPCIÓN:
                  </div>
                  <div className="font-mono text-[0.78rem] text-metal-300 leading-[1.6]">
                    {proj.description}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[0.68rem] px-2.5 py-1 bg-[#111d27] border border-metal-700/60 rounded text-metal-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2.5">
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-3.5 py-1.5 rounded bg-metal-500 text-white no-underline transition-colors duration-150 hover:bg-metal-400"
                      target="_blank" rel="noreferrer"
                    >
                      <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                      Ver demo
                    </a>
                  )}
                  {proj.paperUrl && (
                    <a
                      href={proj.paperUrl}
                      className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-3.5 py-1.5 rounded bg-metal-500 text-white no-underline transition-colors duration-150 hover:bg-metal-400"
                      target="_blank" rel="noreferrer"
                    >
                      <DocumentIcon className="w-3.5 h-3.5" />
                      Ver paper
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-3.5 py-1.5 rounded bg-[#1e2d3b] border border-metal-600/60 text-metal-300 no-underline transition-all duration-150 hover:border-metal-400 hover:text-metal-100"
                      target="_blank" rel="noreferrer"
                    >
                      <CodeBracketIcon className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 px-4 text-center font-mono text-metal-600 text-[0.85rem]">
            No se encontraron proyectos que coincidan con &ldquo;{searchTerm}&rdquo;
          </div>
        )}
      </div>
    </section>
  );
}
