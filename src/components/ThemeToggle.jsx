import React, { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
    toggleTheme();
    setTimeout(() => setSpinning(false), 500);
  };

  return (
    <button
      id="theme-toggle"
      onClick={handleClick}
      className="relative w-9 h-9 rounded-full border border-metal-600/50 bg-metal-800/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_12px_rgba(var(--accent-rgb),0.2)] group cursor-pointer"
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <span
        className={`inline-flex items-center justify-center transition-transform duration-500 ease-out ${
          spinning ? 'animate-[theme-spin_0.5s_ease-out]' : ''
        }`}
      >
        {isDark ? (
          <MoonIcon className="w-[18px] h-[18px] text-metal-300 group-hover:text-[var(--accent)] transition-colors duration-200" />
        ) : (
          <SunIcon className="w-[18px] h-[18px] text-metal-300 group-hover:text-[var(--accent)] transition-colors duration-200" />
        )}
      </span>
    </button>
  );
}
