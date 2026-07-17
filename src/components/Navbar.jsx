import React, { useState, useEffect, useCallback } from 'react';
import LogoAP from '../assets/LogoAP.webp';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const NAV_LINKS = [
    { href: '#about',    labelKey: 'nav_about' },
    { href: '#projects', labelKey: 'nav_projects' },
    { href: '#stack',    labelKey: 'nav_stack' },
    { href: '#contact',  labelKey: 'nav_contact' },
  ];

  /* ── Scroll effects: shrink + active section detection ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // Detect active section
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
    let current = '';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
    }
    setActiveSection(current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* ── Close mobile menu on link click ── */
  const handleNavClick = () => {
    setMobileOpen(false);
  };

  /* ── Close mobile menu on Escape ── */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  /* ── Prevent body scroll when mobile menu is open ── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : ''
      }`}
      role="navigation"
      aria-label={t('nav_ariaLabel')}
    >
      <div className="h-[60px] flex items-center justify-between px-6 sm:px-8 bg-metal-900/90 backdrop-blur-md border-b border-metal-700/50 transition-colors duration-300">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono text-[0.85rem] font-semibold text-metal-200 tracking-[0.05em] no-underline"
          aria-label={t('nav_goHome')}
        >
          <img
            src={LogoAP}
            alt="Logo Angel Portilla"
            className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            width="32"
            height="32"
          />
          <span className="hidden sm:inline">{personalInfo.logo}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 list-none" role="menubar">
            {NAV_LINKS.map(link => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  aria-current={activeSection === link.href.replace('#', '') ? 'true' : undefined}
                  className={`relative text-[0.8rem] font-medium uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-metal-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'nav-link-active'
                      : 'text-metal-400'
                  }`}
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: language toggle + theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className={`w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg border border-metal-600/50 bg-metal-800/60 transition-colors cursor-pointer ${
              mobileOpen ? 'hamburger-open' : ''
            }`}
            aria-label={mobileOpen ? t('nav_closeMenu') : t('nav_openMenu')}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        className={`mobile-menu md:hidden bg-metal-900/98 backdrop-blur-xl border-b border-metal-700/50 ${
          mobileOpen ? 'open' : ''
        }`}
        role="menu"
      >
        <ul className="flex flex-col py-4 px-6 gap-1 list-none">
          {NAV_LINKS.map(link => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                onClick={handleNavClick}
                className={`block py-3 px-4 rounded-lg text-[0.85rem] font-medium uppercase tracking-[0.06em] no-underline transition-all duration-200 hover:bg-metal-800 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[var(--accent)] bg-metal-800/60'
                    : 'text-metal-300'
                }`}
              >
                {t(link.labelKey)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-[-1]"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
