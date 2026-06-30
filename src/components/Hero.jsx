import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { personalInfo } from '../data/portfolioData';
import GhostPhoto from '../assets/GhostPhoto.png';

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
            <span className="text-white">{personalInfo.name}</span>
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
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#34d399] text-[#111d27] text-[0.85rem] font-bold rounded-md tracking-[0.03em] no-underline transition-all duration-200 hover:bg-[#6ee7b7] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(52,211,153,0.4)]"
            >
              Ver proyectos
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[#34d399] border border-[#34d399]/50 text-[0.85rem] font-medium rounded-md no-underline transition-all duration-200 hover:border-[#34d399] hover:bg-[#34d399]/10 hover:text-[#6ee7b7]"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              Descargar CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-8 border-t border-[#34d399]/20 flex-wrap max-md:justify-center">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono text-[1.6rem] font-semibold text-[#34d399]">
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
          <div className="relative w-[360px] h-[420px] max-sm:w-[260px] max-sm:h-[300px]">
            {/* Glow behind */}
            <div className="absolute inset-0 rounded-2xl bg-metal-500/20 blur-2xl scale-90 translate-y-4" />
            {/* Photo card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-metal-600/50 shadow-[0_0_40px_rgba(74,92,120,0.3)]">
              <img
                src={GhostPhoto}
                alt="Angel Portilla — Developer"
                className="w-full h-full object-cover object-center grayscale contrast-110"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111d27] to-transparent" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
