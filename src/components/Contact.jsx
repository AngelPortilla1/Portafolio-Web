import React from 'react';
import {
  EnvelopeIcon,
  CodeBracketSquareIcon,
  CameraIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 max-w-[1000px] mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="font-mono text-[0.72rem] text-metal-400 tracking-[0.14em] uppercase mb-2">
          // CONTACT
        </div>
        <h2 className="text-[1.8rem] font-bold tracking-[-0.02em] text-metal-100">
          Hablemos
        </h2>
      </div>

      <div className="flex gap-4 flex-wrap">
        {/* Email */}
        <a
          className="flex-1 min-w-[200px] bg-[#1e2d3b] border border-metal-700/60 rounded-lg p-5 text-center shadow-card no-underline text-inherit cursor-pointer transition-all duration-200 hover:border-metal-500/60 hover:shadow-card-hover hover:-translate-y-0.5"
          href={`mailto:${personalInfo.contact.email}`}
        >
          <div className="flex justify-center mb-2">
            <EnvelopeIcon className="w-6 h-6 text-metal-400" />
          </div>
          <div className="font-mono text-[0.72rem] text-metal-500 uppercase tracking-[0.08em] mb-1">Email</div>
          <div className="text-[0.85rem] font-semibold text-metal-200">{personalInfo.contact.email}</div>
        </a>

        {/* GitHub */}
        <a
          className="flex-1 min-w-[200px] bg-[#1e2d3b] border border-metal-700/60 rounded-lg p-5 text-center shadow-card no-underline text-inherit cursor-pointer transition-all duration-200 hover:border-metal-500/60 hover:shadow-card-hover hover:-translate-y-0.5"
          href={personalInfo.contact.github}
          target="_blank" rel="noreferrer"
        >
          <div className="flex justify-center mb-2">
            <CodeBracketSquareIcon className="w-6 h-6 text-metal-400" />
          </div>
          <div className="font-mono text-[0.72rem] text-metal-500 uppercase tracking-[0.08em] mb-1">GitHub</div>
          <div className="text-[0.85rem] font-semibold text-metal-200">
            {personalInfo.contact.github.replace('https://', '')}
          </div>
        </a>

        {/* Instagram */}
        <a
          className="flex-1 min-w-[200px] bg-[#1e2d3b] border border-metal-700/60 rounded-lg p-5 text-center shadow-card no-underline text-inherit cursor-pointer transition-all duration-200 hover:border-metal-500/60 hover:shadow-card-hover hover:-translate-y-0.5"
          href={personalInfo.contact.linkedin}
          target="_blank" rel="noreferrer"
        >
          <div className="flex justify-center mb-2">
            <CameraIcon className="w-6 h-6 text-metal-400" />
          </div>
          <div className="font-mono text-[0.72rem] text-metal-500 uppercase tracking-[0.08em] mb-1">Instagram</div>
          <div className="text-[0.85rem] font-semibold text-metal-200">
            {personalInfo.contact.linkedin.replace('https://www.instagram.com/', '@').replace('/', '')}
          </div>
        </a>
      </div>
    </section>
  );
}
