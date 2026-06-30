import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-metal-700/50 py-8 text-center font-mono text-[0.72rem] text-metal-600 tracking-[0.05em]">
      // construido con intención · <span>{new Date().getFullYear()}</span> · {personalInfo.logo.replace('// ', '')}
    </footer>
  );
}
