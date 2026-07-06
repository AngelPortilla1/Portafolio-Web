import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — Componente reutilizable para animaciones de scroll
 * Envuelve cualquier contenido y lo anima cuando entra al viewport.
 *
 * @param {string} variant - 'up' | 'left' | 'right' | 'scale' (default: 'up')
 * @param {number} delay - Delay class index (1-5, maps to 100ms-500ms)
 * @param {number} threshold - IntersectionObserver threshold (default: 0.1)
 * @param {string} className - Additional classes
 * @param {string} as - HTML tag to render (default: 'div')
 */
export default function ScrollReveal({
  children,
  variant = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const variantClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[variant] || 'reveal';

  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 5)}` : '';

  return (
    <Tag
      ref={ref}
      className={`${variantClass} ${delayClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
