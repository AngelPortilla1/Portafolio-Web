import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 max-w-[1000px] mx-auto px-8"
    >
      {/* Eyebrow */}
      <div className="eyebrow-line font-mono text-[0.75rem] text-metal-500 tracking-[0.12em] uppercase mb-6 flex items-center">
        {personalInfo.eyebrow}
      </div>

      {/* Name */}
      <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-metal-900 mb-2">
        {personalInfo.name}{' '}
        <span className="hero-name-gradient">{personalInfo.lastName}</span>
      </h1>

      {/* Title */}
      <p className="font-mono text-[1.1rem] font-normal text-steel-600 mb-10">
        {personalInfo.title}
      </p>

      {/* Description */}
      <p className="text-base text-steel-600 max-w-[520px] leading-[1.8] mb-12">
        {personalInfo.description}
      </p>

      {/* Actions */}
      <div className="flex gap-4 flex-wrap">
        <a
          href="#projects"
          className="inline-block px-7 py-3 bg-metal-500 text-white text-[0.85rem] font-semibold rounded-md tracking-[0.03em] no-underline transition-all duration-200 hover:bg-metal-600 hover:-translate-y-px hover:shadow-accent"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="inline-block px-7 py-3 bg-transparent text-steel-600 border border-metal-300 text-[0.85rem] font-medium rounded-md no-underline transition-all duration-200 hover:border-metal-500 hover:text-metal-500 hover:bg-metal-500/10"
        >
          Contactar
        </a>
      </div>

      {/* Stats */}
      <div className="flex gap-10 mt-16 pt-8 border-t border-steel-100 flex-wrap">
        {personalInfo.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="font-mono text-[1.6rem] font-semibold text-metal-500">
              {stat.num}
            </span>
            <span className="text-[0.75rem] text-steel-400 uppercase tracking-[0.08em] mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
