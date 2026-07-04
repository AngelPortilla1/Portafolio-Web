import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { personalInfo } from '../data/portfolioData';
import GhostPhoto from '../assets/GhostPhoto.png';
import ColorPhoto from '../assets/ColorPhoto.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-[60px] relative overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto px-8 w-full grid grid-cols-2 gap-12 items-center max-md:grid-cols-1 max-md:text-center">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-col">
          {/* Eyebrow */}
          <div className="eyebrow-line font-mono text-[0.72rem] text-metal-300 tracking-[0.18em] uppercase mb-6 flex items-center max-md:justify-center">
            {personalInfo.eyebrow}
          </div>

          {/* Name */}
          <h1 className="text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-4">
            <span className="text-[var(--hero-name)]">{personalInfo.name}</span>
            <br />
            <span className="hero-name-gradient">{personalInfo.lastName}</span>
          </h1>

          {/* Title */}
          <p className="font-mono text-[0.95rem] font-normal text-metal-300 mb-8">
            {personalInfo.title}
          </p>

          {/* Description */}
          <p className="text-[0.9rem] text-metal-300/80 max-w-[480px] leading-[1.8] mb-10 max-md:mx-auto">
            {personalInfo.description}
          </p>

          {/* Actions */}
          <div className="flex gap-4 flex-wrap max-md:justify-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--accent)] text-[var(--accent-on)] text-[0.85rem] font-bold rounded-md tracking-[0.03em] no-underline transition-all duration-200 hover:bg-[var(--accent-bright)] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(var(--accent-rgb),0.4)]"
            >
              Ver proyectos
            </a>
            <a
              href="/Cv_AngelPortilla.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.5)] text-[0.85rem] font-medium rounded-md no-underline transition-all duration-200 hover:border-[var(--accent)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-[var(--accent-bright)]"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              Descargar CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-8 border-t border-[rgba(var(--accent-rgb),0.2)] flex-wrap max-md:justify-center">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono text-[1.6rem] font-semibold text-[var(--accent)]">
                  {stat.num}
                </span>
                <span className="text-[0.72rem] text-metal-400 uppercase tracking-[0.08em] mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Avatar ── */}
        <div className="flex justify-center items-center max-md:order-first">
          <div className="group relative w-[360px] h-[420px] max-sm:w-[260px] max-sm:h-[300px] cursor-pointer">
            {/* Glow behind – intensifies on hover */}
            <div className="absolute inset-0 rounded-2xl bg-metal-500/20 blur-2xl scale-90 translate-y-4 transition-all duration-700 group-hover:bg-[rgba(var(--accent-rgb),0.2)] group-hover:blur-3xl group-hover:scale-95" />

            {/* Photo card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-metal-600/50 shadow-[0_0_40px_rgba(74,92,120,0.3)] transition-all duration-700 group-hover:border-[rgba(var(--accent-rgb),0.6)] group-hover:shadow-[0_0_60px_rgba(var(--accent-rgb),0.25)]">

              {/* GhostPhoto — visible por defecto, desvanece en hover */}
              <img
                src={GhostPhoto}
                alt="Angel Portilla — Developer"
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
              />

              {/* ColorPhoto — oculta por defecto, aparece en hover */}
              <img
                src={ColorPhoto}
                alt="Angel Portilla — Developer color"
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 scale-[1.03]"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--hero-grad-from)] to-transparent z-10" />
            </div>

            {/* Tooltip label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] text-[rgba(var(--accent-rgb),0.7)] tracking-[0.15em] uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 whitespace-nowrap">
              ✦ Color reveal
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
