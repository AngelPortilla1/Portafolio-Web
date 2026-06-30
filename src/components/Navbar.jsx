import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-[60px] flex items-center justify-between px-8 bg-[#111d27]/90 backdrop-blur-md border-b border-metal-700/50">
      <a
        href="#hero"
        className="flex items-center gap-2 font-mono text-[0.85rem] font-semibold text-metal-200 tracking-[0.05em] no-underline"
      >
        <CodeBracketIcon className="w-4 h-4 text-metal-400" />
        {personalInfo.logo}
      </a>
      <ul className="flex gap-8 list-none">
        <li><a href="#about"    className="text-[0.8rem] font-medium text-metal-400 uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-metal-200">Sobre mí</a></li>
        <li><a href="#projects" className="text-[0.8rem] font-medium text-metal-400 uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-metal-200">Proyectos</a></li>
        <li><a href="#stack"    className="text-[0.8rem] font-medium text-metal-400 uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-metal-200">Stack</a></li>
        <li><a href="#contact"  className="text-[0.8rem] font-medium text-metal-400 uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-metal-200">Contacto</a></li>
      </ul>
    </nav>
  );
}
