import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 max-w-[1000px] mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="font-mono text-[0.72rem] text-metal-500 tracking-[0.14em] uppercase mb-2">
          // CONTACT
        </div>
        <h2 className="text-[1.8rem] font-bold tracking-[-0.02em] text-metal-900">
          Hablemos
        </h2>
      </div>

      <div className="flex gap-4 flex-wrap">
        {/* Email */}
        <a
          className="flex-1 min-w-[200px] bg-white border border-steel-100 rounded-lg p-5 text-center shadow-card no-underline text-inherit cursor-pointer transition-all duration-200 hover:border-metal-300 hover:shadow-card-hover hover:-translate-y-0.5"
          href={`mailto:${personalInfo.contact.email}`}
        >
          <div className="text-2xl mb-2">✉️</div>
          <div className="font-mono text-[0.72rem] text-steel-400 uppercase tracking-[0.08em] mb-1">Email</div>
          <div className="text-[0.85rem] font-semibold text-metal-900">{personalInfo.contact.email}</div>
        </a>

        {/* GitHub */}
        <a
          className="flex-1 min-w-[200px] bg-white border border-steel-100 rounded-lg p-5 text-center shadow-card no-underline text-inherit cursor-pointer transition-all duration-200 hover:border-metal-300 hover:shadow-card-hover hover:-translate-y-0.5"
          href={personalInfo.contact.github}
          target="_blank" rel="noreferrer"
        >
          <div className="text-2xl mb-2">⌥</div>
          <div className="font-mono text-[0.72rem] text-steel-400 uppercase tracking-[0.08em] mb-1">GitHub</div>
          <div className="text-[0.85rem] font-semibold text-metal-900">
            {personalInfo.contact.github.replace('https://', '')}
          </div>
        </a>

        {/* Instagram */}
        <a
          className="flex-1 min-w-[200px] bg-white border border-steel-100 rounded-lg p-5 text-center shadow-card no-underline text-inherit cursor-pointer transition-all duration-200 hover:border-metal-300 hover:shadow-card-hover hover:-translate-y-0.5"
          href={personalInfo.contact.linkedin}
          target="_blank" rel="noreferrer"
        >
          <div className="text-2xl mb-2">📷</div>
          <div className="font-mono text-[0.72rem] text-steel-400 uppercase tracking-[0.08em] mb-1">Instagram</div>
          <div className="text-[0.85rem] font-semibold text-metal-900">
            {personalInfo.contact.linkedin.replace('https://www.instagram.com/', '@').replace('/', '')}
          </div>
        </a>
      </div>
    </section>
  );
}
