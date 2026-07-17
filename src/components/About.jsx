import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

/* ── Helpers ─────────────────────────────────────────────────── */
const PROMPT_EL = (
  <>
    <span className="t-prompt">angel</span>
    <span className="t-dim">@</span>
    <span className="t-cyan">portfolio</span>
    <span className="t-dim">:~$ </span>
  </>
);

function Line({ children }) {
  return (
    <div className="terminal-line terminal-line-enter">
      {children}
    </div>
  );
}

function Blank() {
  return <div style={{ height: '8px' }} />;
}

function SkillBadges({ skills }) {
  return (
    <span className="inline-flex flex-wrap gap-1">
      {skills.map(s => (
        <span key={s} className="t-skill-badge">{s}</span>
      ))}
    </span>
  );
}

/* ── Script de la terminal ───────────────────────────────────── */
function buildScript(t) {
  const { about } = personalInfo;
  return [
    { delay: 0,   node: <Line key="c0"><span className="t-dim">{t('term_welcome')}</span></Line> },
    { delay: 400, node: <Line key="c1">{PROMPT_EL}<span className="t-cmd">whoami</span></Line> },
    { delay: 900, node: <Line key="c2"><span className="t-cyan">name      </span><span className="t-dim"> · </span><span className="t-yellow">Angel Portilla</span></Line> },
    { delay: 200, node: <Line key="c3"><span className="t-cyan">role      </span><span className="t-dim"> · </span><span className="t-green">{t('term_role')}</span></Line> },
    { delay: 200, node: <Line key="c4"><span className="t-cyan">university</span><span className="t-dim"> · </span><span className="t-white">{t('term_university')}</span></Line> },
    { delay: 200, node: <Line key="c5"><span className="t-cyan">location  </span><span className="t-dim"> · </span><span className="t-white">{t('term_location')}</span></Line> },
    { delay: 200, node: <Line key="c6"><span className="t-cyan">bio       </span><span className="t-dim"> · </span><span className="t-gray">{about.profile}</span></Line> },

    { delay: 500, node: <Blank key="b1" /> },

    { delay: 0,   node: <Line key="c7">{PROMPT_EL}<span className="t-cmd">cat research.txt</span></Line> },
    { delay: 800, node: <Line key="c8"><span className="t-purple">{t('term_research_title')}</span></Line> },
    { delay: 180, node: <Line key="c9"><span className="t-dim">    {about.thesis}</span></Line> },
    { delay: 200, node: <Line key="c10"><span className="t-green">{t('term_research_pub')}</span></Line> },

    { delay: 500, node: <Blank key="b2" /> },

    { delay: 0,   node: <Line key="c11">{PROMPT_EL}<span className="t-cmd">ls skills/</span></Line> },
    { delay: 700, node: <Line key="c12"><span className="t-cyan">frontend/ </span><span className="t-dim"> ── </span><SkillBadges skills={['React', 'Angular', 'HTML/CSS', 'Vite']} /></Line> },
    { delay: 200, node: <Line key="c13"><span className="t-cyan">backend/  </span><span className="t-dim"> ── </span><SkillBadges skills={['Python', 'FastAPI', 'Node.js', 'NestJS']} /></Line> },
    { delay: 200, node: <Line key="c14"><span className="t-cyan">database/ </span><span className="t-dim"> ── </span><SkillBadges skills={['SQL', 'SQLite']} /></Line> },
    { delay: 200, node: <Line key="c15"><span className="t-cyan">devops/   </span><span className="t-dim"> ── </span><SkillBadges skills={['Git', 'GitHub', 'Figma']} /></Line> },
    { delay: 200, node: <Line key="c16"><span className="t-cyan">ai/       </span><span className="t-dim"> ── </span><SkillBadges skills={['Multi-Agent', 'LLMs', 'FastAPI']} /></Line> },

    { delay: 500, node: <Blank key="b3" /> },

    { delay: 0,   node: <Line key="c17">{PROMPT_EL}<span className="t-cmd">echo $FOCUS</span></Line> },
    { delay: 700, node: <Line key="c18"><span className="t-orange">{t('term_focus_prompt')}</span>  <span className="t-white">{about.focus}</span></Line> },

    { delay: 400, node: <Blank key="b4" /> },
    { delay: 0,   node: <Line key="c19"><span className="t-dim">{t('term_prompt_end')} <span className="t-green">{t('term_prompt_help')}</span> {t('term_prompt_end2')}</span></Line> },
  ];
}

/* ── Respuestas a comandos del usuario ───────────────────────── */
function getCommandResponse(cmd, ts, t) {
  const c = cmd.trim().toLowerCase();
  const k = (id) => `${ts}-${id}`;

  if (c === 'help') return [
    <Line key={k('h0')}><span className="t-cyan">{t('cmd_help_title')}</span></Line>,
    <Line key={k('h1')}>  <span className="t-green">whoami</span>   <span className="t-dim">{t('cmd_help_whoami')}</span></Line>,
    <Line key={k('h2')}>  <span className="t-green">contact</span>  <span className="t-dim">{t('cmd_help_contact')}</span></Line>,
    <Line key={k('h3')}>  <span className="t-green">skills</span>   <span className="t-dim">{t('cmd_help_skills')}</span></Line>,
    <Line key={k('h4')}>  <span className="t-green">cv</span>       <span className="t-dim">{t('cmd_help_cv')}</span></Line>,
    <Line key={k('h5')}>  <span className="t-green">clear</span>    <span className="t-dim">{t('cmd_help_clear')}</span></Line>,
    <Line key={k('h6')}>  <span className="t-green">github</span>   <span className="t-dim">{t('cmd_help_github')}</span></Line>,
  ];

  if (c === 'contact') return [
    <Line key={k('c0')}><span className="t-cyan">email   </span><span className="t-dim"> · </span><span className="t-yellow">{personalInfo.contact.email}</span></Line>,
    <Line key={k('c1')}><span className="t-cyan">github  </span><span className="t-dim"> · </span><a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="t-green underline">github.com/AngelPortilla1</a></Line>,
    <Line key={k('c2')}><span className="t-cyan">linkedin</span><span className="t-dim"> · </span><a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="t-purple underline">LinkedIn Profile</a></Line>,
  ];

  if (c === 'skills') return [
    <Line key={k('s0')}><SkillBadges skills={['React','Angular','HTML/CSS','Vite','Python','FastAPI','Node.js','NestJS','SQL','Git','GitHub','Figma','Multi-Agent','LLMs']} /></Line>,
  ];

  if (c === 'cv' || c === 'resume') {
    window.open('/Cv_AngelPortilla_current.pdf', '_blank');
    return [<Line key={k('cv0')}><span className="t-green">{t('cmd_cv_opening')}</span></Line>];
  }

  if (c === 'github') {
    window.open(personalInfo.contact.github, '_blank');
    return [<Line key={k('g0')}><span className="t-green">{t('cmd_github_opening')}</span></Line>];
  }

  if (c === 'whoami') return [
    <Line key={k('w0')}><span className="t-cyan">name </span><span className="t-dim"> · </span><span className="t-yellow">Angel Portilla</span></Line>,
    <Line key={k('w1')}><span className="t-cyan">role </span><span className="t-dim"> · </span><span className="t-green">{t('term_role')}</span></Line>,
  ];

  if (c === '') return [];

  return [
    <Line key={k('e0')}><span className="t-dim">{t('cmd_not_found')} </span><span className="t-orange">{cmd}</span><span className="t-dim">{t('cmd_not_found_hint')} <span className="t-green">help</span></span></Line>,
  ];
}

/* ══════════════════════════════════════════════════════════════
   COMPONENTE PRINCIPAL
══════════════════════════════════════════════════════════════ */
export default function About() {
  const { t, language } = useLanguage();

  const sectionRef  = useRef(null);
  const bodyRef     = useRef(null);
  const inputRef    = useRef(null);
  const timersRef   = useRef([]);
  const startedRef  = useRef(false);

  const [lines, setLines]         = useState([]);
  const [inputVal, setInputVal]   = useState('');
  const [showInput, setShowInput] = useState(false);

  /* ── Auto-scroll ── */
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines, showInput]);

  /* ── Focus input when shown ── */
  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  /* ── Reset terminal on language change ── */
  useEffect(() => {
    // Clear and restart the sequence
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setLines([]);
    setShowInput(false);
    startedRef.current = false;

    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      setTimeout(() => runSequence(), 300);
    }
  }, [language]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Typewriter sequence ── */
  const runSequence = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    const script = buildScript(t);
    let cumulative = 0;

    script.forEach((item) => {
      cumulative += item.delay;
      const id = setTimeout(() => {
        setLines(prev => [...prev, item.node]);
      }, cumulative);
      timersRef.current.push(id);
    });

    const tid = setTimeout(() => setShowInput(true), cumulative + 700);
    timersRef.current.push(tid);
  };

  /* ── Intersection Observer ── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) runSequence(); },
      { threshold: 0.10 }
    );
    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(runSequence, 400);
    }

    return () => {
      observer.disconnect();
      timersRef.current.forEach(clearTimeout);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Handle user command ── */
  const executeCommand = (cmdString) => {
    const cmd = cmdString.trim();

    if (cmd.toLowerCase() === 'clear') {
      setLines([]);
      return;
    }

    const ts = Date.now();
    const cmdLine = (
      <Line key={`usr-${ts}`}>
        {PROMPT_EL}<span className="t-cmd">{cmd || ' '}</span>
      </Line>
    );

    if (cmd === '') {
      setLines(prev => [...prev, cmdLine]);
      return;
    }

    const response = getCommandResponse(cmd, ts, t);
    setLines(prev => [...prev, cmdLine, ...response, <Blank key={`b-${ts}`} />]);
  };

  const handleCommand = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
    setInputVal('');
  };

  const handleQuickCommand = (cmd) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-5 sm:px-8 max-w-[1000px] mx-auto"
      ref={sectionRef}
      aria-label={t('about_section_label')}
    >
      {/* Header */}
      <ScrollReveal>
        <div className="mb-8 sm:mb-10">
          <div className="font-mono text-[0.72rem] text-metal-400 tracking-[0.14em] uppercase mb-2">
            // ABOUT_ME
          </div>
          <h2 className="text-[1.6rem] sm:text-[1.8rem] font-bold tracking-[-0.02em] text-metal-100">
            {t('about_heading')}
          </h2>
        </div>
      </ScrollReveal>

      {/* Terminal */}
      <ScrollReveal variant="scale">
        <div
          className="terminal-window"
          onClick={() => inputRef.current?.focus()}
          role="application"
          aria-label={t('about_terminal_label')}
        >
          {/* Chrome */}
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot-red" aria-hidden="true" />
            <span className="terminal-dot terminal-dot-yellow" aria-hidden="true" />
            <span className="terminal-dot terminal-dot-green" aria-hidden="true" />
            <span className="terminal-title hidden sm:block">angel@portfolio — bash — 80×24</span>
          </div>

          {/* Body */}
          <div className="terminal-body" ref={bodyRef}>
            {lines}

            {/* Blinking cursor during animation */}
            {!showInput && (
              <div className="terminal-line" style={{ position: 'relative', zIndex: 1, marginTop: '2px' }}>
                <span className="terminal-cursor" />
              </div>
            )}

            {/* User input */}
            {showInput && (
              <form
                className="terminal-input-row"
                onSubmit={handleCommand}
                onClick={(e) => e.stopPropagation()}
              >
                {PROMPT_EL}
                <input
                  ref={inputRef}
                  className="terminal-input"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={t('about_input_placeholder')}
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  aria-label={t('about_input_aria')}
                />
                <span className="terminal-cursor" style={{ flexShrink: 0 }} aria-hidden="true" />
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Hint & Quick Commands */}
      <div className="mt-6 flex flex-col items-center gap-4">
        <p className="font-mono text-[0.6rem] sm:text-[0.65rem] text-metal-600 text-center tracking-[0.08em] uppercase">
          {t('about_hint')} <span className="text-[rgba(var(--accent-rgb),0.6)]">{t('about_hint_help')}</span> {t('about_hint_suffix')}
        </p>

        {showInput && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 terminal-line-enter">
            {['whoami', 'cv', 'contact', 'skills', 'help', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleQuickCommand(cmd)}
                className="px-3 py-1.5 text-[0.7rem] font-mono bg-metal-900/40 text-metal-300 border border-metal-800 rounded-md hover:bg-metal-800 hover:text-white hover:border-metal-600 transition-all flex items-center gap-1.5"
                title={`Run ${cmd}`}
              >
                <span className="text-[rgba(var(--accent-rgb),0.8)]">❯</span> {cmd}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
