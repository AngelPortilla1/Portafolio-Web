import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownTrayIcon, CodeBracketIcon, CpuChipIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { personalInfo } from '../data/portfolioData';
import ColorPhoto from '../assets/ColorPhoto.webp';
import ScrollReveal from './ScrollReveal';

/* ── Animated counter hook ── */
function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0);
  const triggered = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

/* ── Icon map for stats ── */
const statIcons = [
  <CodeBracketIcon className="w-5 h-5" />,
  <CpuChipIcon className="w-5 h-5" />,
  <BeakerIcon className="w-5 h-5" />,
];

/* ── Single stat card ── */
function StatCard({ stat, index }) {
  const numericValue = parseInt(stat.num, 10) || 0;
  const suffix = stat.num.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericValue, 1800 + index * 300);

  return (
    <div
      ref={ref}
      className="stat-card group/stat relative flex flex-col items-center gap-3 px-5 py-4 sm:px-6 sm:py-5 rounded-xl cursor-default transition-all duration-500 flex-1 min-w-[100px]"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Glow ring on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-rgb),0.12)_0%,transparent_70%)]" />

      {/* Icon circle */}
      <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(var(--accent-rgb),0.1)] border border-[rgba(var(--accent-rgb),0.2)] text-[var(--accent)] transition-all duration-500 group-hover/stat:bg-[rgba(var(--accent-rgb),0.2)] group-hover/stat:border-[rgba(var(--accent-rgb),0.5)] group-hover/stat:shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] group-hover/stat:scale-110">
        {statIcons[index] || statIcons[0]}
      </div>

      {/* Number */}
      <span className="relative z-10 font-mono text-[1.6rem] sm:text-[2rem] font-bold tracking-tight leading-none stat-number-gradient">
        {count}{suffix}
      </span>

      {/* Label */}
      <span className="relative z-10 text-[0.65rem] sm:text-[0.7rem] text-metal-400 uppercase tracking-[0.14em] font-medium">
        {stat.label}
      </span>

      {/* Active dot */}
      <div className="absolute top-3 right-3 w-[6px] h-[6px] rounded-full bg-[var(--accent)] opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 stat-pulse-dot" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-[60px] relative overflow-hidden"
      aria-label="Presentación"
    >
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-0">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-col text-center md:text-left order-2 md:order-1">
          {/* Eyebrow */}
          <ScrollReveal delay={1}>
            <div className="eyebrow-line font-mono text-[0.72rem] text-metal-300 tracking-[0.18em] uppercase mb-6 flex items-center justify-center md:justify-start">
              {personalInfo.eyebrow}
            </div>
          </ScrollReveal>

          {/* Name */}
          <ScrollReveal delay={2}>
            <h1 className="text-[clamp(2.2rem,6.5vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-4">
              <span className="text-[var(--hero-name)]">{personalInfo.name}</span>
              <br />
              <span className="hero-name-gradient">{personalInfo.lastName}</span>
            </h1>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal delay={3}>
            <p className="font-mono text-[0.85rem] sm:text-[0.95rem] font-normal text-metal-300 mb-8">
              {personalInfo.title}
            </p>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={4}>
            <p className="text-[0.85rem] sm:text-[0.9rem] text-metal-300/80 max-w-[480px] leading-[1.8] mb-10 mx-auto md:mx-0">
              {personalInfo.description}
            </p>
          </ScrollReveal>

          {/* Actions */}
          <ScrollReveal delay={5}>
            <div className="flex gap-3 sm:gap-4 flex-col sm:flex-row items-center md:items-start justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[var(--accent)] text-[var(--accent-on)] text-[0.85rem] font-bold rounded-md tracking-[0.03em] no-underline transition-all duration-200 hover:bg-[var(--accent-bright)] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(var(--accent-rgb),0.4)] w-full sm:w-auto"
              >
                Ver proyectos
              </a>
              <a
                href="/Cv_AngelPortilla.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-transparent text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.5)] text-[0.85rem] font-medium rounded-md no-underline transition-all duration-200 hover:border-[var(--accent)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-[var(--accent-bright)] w-full sm:w-auto"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                Descargar CV
              </a>
            </div>
          </ScrollReveal>

          {/* ── Stats ── */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-10 sm:mt-14">
            {personalInfo.stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} index={idx} />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Avatar ── */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <ScrollReveal variant="scale">
            <div className="group relative w-[260px] h-[300px] sm:w-[300px] sm:h-[360px] md:w-[360px] md:h-[420px] cursor-pointer">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-2xl bg-metal-500/20 blur-2xl scale-90 translate-y-4 transition-all duration-700 group-hover:bg-[rgba(var(--accent-rgb),0.2)] group-hover:blur-3xl group-hover:scale-95" />

              {/* Photo card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-metal-600/50 shadow-[0_0_40px_rgba(74,92,120,0.3)] transition-all duration-700 group-hover:border-[rgba(var(--accent-rgb),0.6)] group-hover:shadow-[0_0_60px_rgba(var(--accent-rgb),0.25)]">
                {/* Photo — CSS Filter Reveal */}
                <img
                  src={ColorPhoto}
                  alt="Angel Portilla — Developer"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.03]"
                  loading="eager"
                  width="360"
                  height="420"
                />

                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--hero-grad-from)] to-transparent z-10" />
              </div>

              {/* Tooltip label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] text-[rgba(var(--accent-rgb),0.7)] tracking-[0.15em] uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 whitespace-nowrap">
                ✦ Color reveal
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
