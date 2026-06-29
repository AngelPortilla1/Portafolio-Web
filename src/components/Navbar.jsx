import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-[60px] flex items-center justify-between px-8 bg-metal-50/85 backdrop-blur-md border-b border-steel-100">
      <a
        href="#hero"
        className="font-mono text-[0.85rem] font-semibold text-metal-500 tracking-[0.05em] no-underline"
      >
        {personalInfo.logo}
      </a>
      <ul className="flex gap-8 list-none">
        <li><a href="#about"    className="text-[0.8rem] font-medium text-steel-600 uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-metal-500">Sobre mí</a></li>
        <li><a href="#projects" className="text-[0.8rem] font-medium text-steel-600 uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-metal-500">Proyectos</a></li>
        <li><a href="#stack"    className="text-[0.8rem] font-medium text-steel-600 uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-metal-500">Stack</a></li>
        <li><a href="#contact"  className="text-[0.8rem] font-medium text-steel-600 uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-metal-500">Contacto</a></li>
      </ul>
    </nav>
  );
}
