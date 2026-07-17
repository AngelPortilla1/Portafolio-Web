import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext(undefined);

function getInitialLanguage() {
  const stored = localStorage.getItem('lang');
  if (stored === 'es' || stored === 'en') return stored;
  // Default is always Spanish — the visitor can switch to English
  return 'es';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('lang', language);
    // Update the HTML lang attribute for accessibility / SEO
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  }, []);

  /** Translate a key. Falls back to the key itself if not found. */
  const t = useCallback(
    (key) => translations[language]?.[key] ?? translations['es']?.[key] ?? key,
    [language]
  );

  const isEn = language === 'en';

  return (
    <LanguageContext.Provider value={{ language, isEn, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
