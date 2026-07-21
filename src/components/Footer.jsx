import React from 'react';
import { personalInfo } from '../data/portfolioData';
import LogoAP from '../assets/LogoAP.webp';
import { useLanguage } from '../context/LanguageContext';

const socialLinks = [
  {
    label: 'GitHub',
    href: personalInfo.contact.github,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    color: '#6ee7b7',
  },
  {
    label: 'LinkedIn',
    href: personalInfo.contact.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#79c0ff',
  },
  {
    label: 'Email',
    href: `mailto:${personalInfo.contact.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: '#f0883e',
  },
];

const techStack = ['React', 'Vite', 'Tailwind CSS'];

export default function Footer() {
  const { t } = useLanguage();

  const footerNav = [
    { href: '#about',    label: t('footer_nav_about') },
    { href: '#projects', label: t('footer_nav_projects') },
    { href: '#stack',    label: t('footer_nav_stack') },
    { href: '#contact',  label: t('footer_nav_contact') },
  ];

  return (
    <footer
      className="relative overflow-hidden transition-colors duration-300"
      role="contentinfo"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(var(--metal-900), 0.6) 20%, rgb(var(--metal-900)) 100%)',
        borderTop: '1px solid transparent',
        backgroundClip: 'padding-box',
      }}
    >
      {/* ── Accent top border (gradient line) ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, var(--accent) 30%, var(--accent-bright) 50%, var(--accent) 70%, transparent 100%)',
          opacity: 0.7,
        }}
      />

      {/* ── Ambient glow blob ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '200px',
          background: 'radial-gradient(ellipse at center, rgba(var(--accent-rgb), 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-[1000px] mx-auto px-5 sm:px-8 py-12 sm:py-16">

        {/* ── Back to top ── */}
        <div className="flex justify-center mb-8">
          <a
            href="#hero"
            className="group flex flex-col items-center gap-2 no-underline"
            aria-label={t('footer_back_top') ?? 'Back to top'}
          >
            <div className="w-10 h-10 rounded-full border border-metal-700/60 bg-metal-800/60 flex items-center justify-center transition-all duration-300 group-hover:border-[rgba(var(--accent-rgb),0.5)] group-hover:bg-[rgba(var(--accent-rgb),0.08)] group-hover:-translate-y-1 group-hover:shadow-[0_0_16px_rgba(var(--accent-rgb),0.25)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-metal-400 group-hover:text-[var(--accent)] transition-colors duration-300" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </div>
            <span className="font-mono text-[0.58rem] text-metal-600 group-hover:text-[var(--accent)] transition-colors duration-300 uppercase tracking-[0.14em]">
              {t('footer_back_top') ?? 'Back to top'}
            </span>
          </a>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-10">

          {/* Branding */}
          <div className="flex flex-col gap-4">
            <a
              href="#hero"
              className="inline-flex items-center gap-2.5 no-underline group w-fit"
              aria-label={t('footer_logo_aria')}
            >
              <div
                className="relative"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.0))',
                  transition: 'filter 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(var(--accent-rgb), 0.5))'}
                onMouseLeave={e => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.0))'}
              >
                <img
                  src={LogoAP}
                  alt="Logo Angel Portilla"
                  className="h-8 w-auto object-contain opacity-90"
                  width="32"
                  height="32"
                />
              </div>
              <span className="font-mono text-[0.85rem] font-semibold text-metal-200 tracking-[0.05em] group-hover:text-[var(--accent)] transition-colors duration-200">
                {personalInfo.logo}
              </span>
            </a>

            <p className="text-[0.78rem] text-metal-500 leading-relaxed max-w-[260px]">
              {t('footer_tagline')}
            </p>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(var(--accent-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.18)] w-fit">
              <span
                className="w-2 h-2 rounded-full bg-[var(--accent)]"
                style={{ animation: 'stat-dot-pulse 2.2s ease-in-out infinite' }}
                aria-hidden="true"
              />
              <span className="font-mono text-[0.62rem] text-[var(--accent)] tracking-[0.1em] uppercase font-semibold">
                {t('footer_available')}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[0.62rem] font-bold text-metal-400 uppercase tracking-[0.18em] mb-5 flex items-center gap-2">
              <span
                className="inline-block w-3 h-px"
                style={{ background: 'var(--accent)' }}
                aria-hidden="true"
              />
              {t('footer_nav_title')}
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {footerNav.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[0.8rem] text-metal-400 no-underline transition-all duration-200 hover:text-metal-100"
                  >
                    <span
                      className="inline-block w-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-4"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-[0.62rem] font-bold text-metal-400 uppercase tracking-[0.18em] mb-5 flex items-center gap-2">
              <span
                className="inline-block w-3 h-px"
                style={{ background: 'var(--accent)' }}
                aria-hidden="true"
              />
              {t('footer_social_title')}
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                  className="group inline-flex items-center gap-3 no-underline w-fit"
                  aria-label={link.label}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(var(--metal-700), 0.4)',
                      border: '1px solid rgba(var(--metal-600), 0.4)',
                      color: 'rgb(var(--metal-400))',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${link.color}18`;
                      e.currentTarget.style.border = `1px solid ${link.color}55`;
                      e.currentTarget.style.color = link.color;
                      e.currentTarget.style.boxShadow = `0 0 16px ${link.color}30`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(var(--metal-700), 0.4)';
                      e.currentTarget.style.border = '1px solid rgba(var(--metal-600), 0.4)';
                      e.currentTarget.style.color = 'rgb(var(--metal-400))';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {link.icon}
                  </div>
                  <span className="text-[0.78rem] text-metal-500 group-hover:text-metal-200 transition-colors duration-200 font-medium">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(var(--metal-600), 0.4) 20%, rgba(var(--metal-600), 0.4) 80%, transparent 100%)',
            marginBottom: '1.5rem',
          }}
        />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[0.68rem] text-metal-600 tracking-[0.05em]">
            © {new Date().getFullYear()}&nbsp;
            <span className="text-metal-400">Angel Giovany Portilla Hernandez</span>
          </p>

          {/* Tech stack pills */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span className="font-mono text-[0.58rem] text-metal-600 mr-1">{t('footer_made_with')}</span>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[0.6rem] px-2 py-0.5 rounded border transition-colors duration-200 hover:border-[rgba(var(--accent-rgb),0.4)] hover:text-[var(--accent)] cursor-default"
                style={{
                  background: 'rgba(var(--metal-800), 0.6)',
                  border: '1px solid rgba(var(--metal-700), 0.5)',
                  color: 'rgb(var(--metal-500))',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
