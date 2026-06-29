import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-[1000px] mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="font-mono text-[0.72rem] text-metal-500 tracking-[0.14em] uppercase mb-2">
          // ABOUT_ME
        </div>
        <h2 className="text-[1.8rem] font-bold tracking-[-0.02em] text-metal-900">
          Sobre mí
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        {/* Main profile card – full width */}
        <div className="col-span-2 bg-white border border-steel-100 rounded-lg p-5 shadow-card max-sm:col-span-1">
          <div className="card-label-line font-mono text-[0.68rem] text-metal-500 uppercase tracking-[0.1em] mb-3 flex items-center">
            Perfil
          </div>
          <p className="text-[0.9rem] text-steel-600 leading-[1.75]">{personalInfo.about.profile}</p>
        </div>

        <div className="bg-white border border-steel-100 rounded-lg p-5 shadow-card">
          <div className="card-label-line font-mono text-[0.68rem] text-metal-500 uppercase tracking-[0.1em] mb-3 flex items-center">
            Trabajo de Grado
          </div>
          <p className="text-[0.9rem] text-steel-600 leading-[1.75]">{personalInfo.about.thesis}</p>
        </div>

        <div className="bg-white border border-steel-100 rounded-lg p-5 shadow-card">
          <div className="card-label-line font-mono text-[0.68rem] text-metal-500 uppercase tracking-[0.1em] mb-3 flex items-center">
            Enfoque actual
          </div>
          <p className="text-[0.9rem] text-steel-600 leading-[1.75]">{personalInfo.about.focus}</p>
        </div>
      </div>
    </section>
  );
}
