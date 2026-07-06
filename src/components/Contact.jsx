import React, { useState } from 'react';
import {
  EnvelopeIcon,
  CodeBracketSquareIcon,
  LinkIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Contacto desde portafolio — ${name}`);
    const body = encodeURIComponent(`Hola Angel,\n\nSoy ${name} (${email}).\n\n${message}\n\nSaludos.`);
    window.open(`mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactLinks = [
    {
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      icon: <EnvelopeIcon className="w-5 h-5" />,
      external: false,
    },
    {
      label: 'GitHub',
      value: personalInfo.contact.github.replace('https://', ''),
      href: personalInfo.contact.github,
      icon: <CodeBracketSquareIcon className="w-5 h-5" />,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'Angel Portilla',
      href: personalInfo.contact.linkedin,
      icon: <LinkIcon className="w-5 h-5" />,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-5 sm:px-8 max-w-[1000px] mx-auto"
      aria-label="Contacto"
    >
      {/* Header */}
      <ScrollReveal>
        <div className="mb-8 sm:mb-10">
          <div className="font-mono text-[0.72rem] text-metal-400 tracking-[0.14em] uppercase mb-2">
            // CONTACT
          </div>
          <h2 className="text-[1.6rem] sm:text-[1.8rem] font-bold tracking-[-0.02em] text-metal-100">
            Hablemos
          </h2>
          <p className="text-[0.85rem] sm:text-[0.9rem] text-metal-300/80 mt-3 max-w-[520px] leading-relaxed">
            ¿Tienes un proyecto en mente, una propuesta de colaboración, o simplemente quieres conectar? Me encantaría escucharte.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
        {/* Contact Form — spans 3 columns */}
        <ScrollReveal variant="left" className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="bg-metal-800 border border-metal-700/60 rounded-xl p-5 sm:p-6 shadow-card space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="block font-mono text-[0.68rem] text-metal-400 uppercase tracking-[0.1em] mb-2">
                Nombre
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="contact-input"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block font-mono text-[0.68rem] text-metal-400 uppercase tracking-[0.1em] mb-2">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="contact-input"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block font-mono text-[0.68rem] text-metal-400 uppercase tracking-[0.1em] mb-2">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={formState.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto o idea..."
                className="contact-input contact-textarea"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--accent-on)] text-[0.85rem] font-bold rounded-lg tracking-[0.03em] transition-all duration-200 hover:bg-[var(--accent-bright)] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(var(--accent-rgb),0.4)] cursor-pointer"
            >
              {submitted ? (
                <>
                  <CheckCircleIcon className="w-5 h-5" />
                  ¡Mensaje preparado!
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-4 h-4" />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
        </ScrollReveal>

        {/* Contact Links — spans 2 columns */}
        <div className="md:col-span-2 flex flex-col gap-3 sm:gap-4">
          {contactLinks.map((link, idx) => (
            <ScrollReveal key={link.label} variant="right" delay={idx + 1}>
              <a
                className="flex items-center gap-4 bg-metal-800 border border-metal-700/60 rounded-xl p-4 sm:p-5 shadow-card no-underline text-inherit cursor-pointer transition-all duration-200 hover:border-[rgba(var(--accent-rgb),0.4)] hover:shadow-card-hover hover:-translate-y-0.5 group"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] border border-[rgba(var(--accent-rgb),0.2)] flex items-center justify-center text-[var(--accent)] transition-all duration-300 group-hover:bg-[rgba(var(--accent-rgb),0.2)] group-hover:scale-110 shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[0.68rem] text-metal-500 uppercase tracking-[0.08em] mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-[0.8rem] sm:text-[0.85rem] font-semibold text-metal-200 truncate">
                    {link.value}
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
