import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    toggleLanguage();
    setTimeout(() => setAnimating(false), 400);
  };

  const isEn = language === 'en';

  return (
    <button
      id="language-toggle"
      onClick={handleClick}
      aria-label={t('lang_toggle_label')}
      className={`
        relative h-9 flex items-center rounded-full border border-metal-600/50
        bg-metal-800/60 backdrop-blur-sm overflow-hidden
        transition-all duration-300
        hover:border-[var(--accent)]/50
        hover:shadow-[0_0_12px_rgba(var(--accent-rgb),0.2)]
        cursor-pointer
        ${animating ? 'scale-95' : 'scale-100'}
      `}
      style={{ minWidth: '64px', padding: '0 2px' }}
    >
      {/* Sliding pill indicator */}
      <span
        aria-hidden="true"
        className="absolute h-[28px] w-[28px] rounded-full bg-[rgba(var(--accent-rgb),0.15)] border border-[rgba(var(--accent-rgb),0.35)] transition-all duration-300 ease-out"
        style={{
          left: isEn ? 'calc(100% - 30px)' : '2px',
        }}
      />

      {/* ES label */}
      <span
        className={`relative z-10 font-mono text-[0.65rem] font-bold tracking-[0.06em] w-[30px] text-center transition-colors duration-300 ${
          !isEn
            ? 'text-[var(--accent)]'
            : 'text-metal-600'
        }`}
      >
        ES
      </span>

      {/* EN label */}
      <span
        className={`relative z-10 font-mono text-[0.65rem] font-bold tracking-[0.06em] w-[30px] text-center transition-colors duration-300 ${
          isEn
            ? 'text-[var(--accent)]'
            : 'text-metal-600'
        }`}
      >
        EN
      </span>
    </button>
  );
}
