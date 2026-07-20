import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { forceCollide } from 'd3-force-3d';
import { CircleStackIcon, XMarkIcon, FunnelIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import { graphData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

// ─── Helpers ────────────────────────────────────────────────────────────────

function isColorDark(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 0.299 + g * 0.587 + b * 0.114) < 140;
}

// ─── SkillMeter ──────────────────────────────────────────────────────────────
function SkillMeter({ level, max = 5, color = '#34d399' }) {
  const pct = Math.round((level / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 rounded-full bg-metal-800/60 dark:bg-metal-800 overflow-hidden">
        <div
          style={{ width: `${pct}%`, background: color }}
          className="h-full rounded-full transition-all duration-500"
        />
      </div>
      <span className="font-mono text-[0.7rem] font-bold text-metal-300 min-w-[28px] text-right">
        {level}/{max}
      </span>
    </div>
  );
}

// ─── Node canvas rendering ───────────────────────────────────────────────────
function drawNode(node, ctx, globalScale, selectedId, colors) {
  const r = node.__r ?? 14;
  const gs = colors[node.group] ?? colors.frontend;
  const isSelected = node.id === selectedId;

  if (isSelected) {
    ctx.beginPath();
    ctx.arc(node.x, node.y, r + 6, 0, 2 * Math.PI);
    ctx.fillStyle = gs.stroke + '44';
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
  ctx.fillStyle = gs.fill;
  ctx.fill();
  ctx.strokeStyle = gs.stroke;
  ctx.lineWidth = isSelected ? 2.5 : 1.2;
  ctx.stroke();

  const levelRatio = (node.level ?? 3) / 5;
  ctx.beginPath();
  ctx.arc(node.x, node.y, r + 3, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI * levelRatio);
  ctx.strokeStyle = gs.stroke + 'cc';
  ctx.lineWidth = 2.2;
  ctx.stroke();

  const fontSize = Math.max(8, 11 / globalScale);
  ctx.font = `600 ${fontSize}px Inter, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = isColorDark(gs.fill) ? '#e8edf5' : '#1a1a2e';

  // Adaptive truncation based on intrinsic node radius
  const maxChars = Math.max(12, Math.floor(r * 0.8));
  const label = node.name;
  const displayLabel = label.length > maxChars ? label.slice(0, maxChars - 1) + '…' : label;
  ctx.fillText(displayLabel, node.x, node.y);
}

// ─── FilterBar ───────────────────────────────────────────────────────────────
function FilterBar({ groups, active, onToggle, colors, t }) {
  return (
    <div className="flex gap-1.5 sm:gap-2">
      {groups.map(g => {
        const gs = colors[g] ?? colors.frontend;
        const on = active.has(g);
        return (
          <button
            key={g}
            onClick={() => onToggle(g)}
            className={`shrink-0 whitespace-nowrap px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[0.6rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.06em] cursor-pointer transition-all duration-200 border ${
              on
                ? 'hover:-translate-y-px shadow-sm'
                : 'bg-metal-800/60 text-metal-400 border-metal-700/50 hover:bg-metal-700/60 hover:text-metal-200'
            }`}
            style={on ? { borderColor: gs.stroke, background: gs.fill + '30', color: gs.fill } : {}}
            aria-pressed={on}
            aria-label={`${t('stack_filter_aria')} ${gs.label ?? g}`}
          >
            <span
              className="inline-block w-2 h-2 rounded-full mr-1 sm:mr-1.5 align-middle"
              style={{ background: gs.fill, border: `1px solid ${gs.stroke}` }}
              aria-hidden="true"
            />
            {gs.label ?? g}
          </button>
        );
      })}
    </div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────
function Legend({ groups, colors }) {
  return (
    <div className="flex flex-wrap gap-x-2.5 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 px-2.5 sm:px-4 py-2 sm:py-2.5 bg-metal-900/85 backdrop-blur-md border border-metal-700/50 rounded-lg sm:rounded-xl text-[0.55rem] sm:text-[0.68rem] font-bold text-metal-200 max-w-[calc(100%-1rem)]">
      {groups.map(g => {
        const gs = colors[g] ?? colors.frontend;
        return (
          <span key={g} className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <span
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full inline-block border shrink-0"
              style={{ background: gs.fill, borderColor: gs.stroke }}
              aria-hidden="true"
            />
            {gs.label ?? g}
          </span>
        );
      })}
    </div>
  );
}

// ─── SkillPanel ──────────────────────────────────────────────────────────────
function SkillPanel({ node, links, nodes, onClose, colors, t }) {
  if (!node) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center opacity-50 gap-3 text-center px-4">
        <CursorArrowRaysIcon className="w-12 h-12 text-metal-500" />
        <p className="text-[0.8rem] font-medium text-metal-400 leading-relaxed">
          {t('stack_panel_empty')}
        </p>
      </div>
    );
  }

  const gs = colors[node.group] ?? colors.frontend;

  const connectedOut = links
    .filter(l => (l.source?.id ?? l.source) === node.id)
    .map(l => nodes.find(n => n.id === (l.target?.id ?? l.target)))
    .filter(Boolean);
  const connectedIn = links
    .filter(l => (l.target?.id ?? l.target) === node.id)
    .map(l => nodes.find(n => n.id === (l.source?.id ?? l.source)))
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-5 overflow-y-auto pb-4 pr-1 tech-panel-enter">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div
          className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center border-2"
          style={{ background: gs.fill + '25', borderColor: gs.stroke, color: gs.fill }}
        >
          <span className="font-bold text-base">{node.name.slice(0, 2).toUpperCase()}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[1rem] font-bold text-metal-100 leading-tight mb-1">{node.name}</p>
          <span
            className="inline-block px-2.5 py-0.5 rounded-full text-[0.62rem] font-bold uppercase tracking-[0.08em] border"
            style={{ background: gs.fill + '20', borderColor: gs.stroke + '60', color: gs.fill }}
          >
            {t(node.catKey) ?? node.catKey}
          </span>
        </div>
        <button
          onClick={onClose}
          className="bg-metal-800 hover:bg-red-900/40 hover:text-red-400 text-metal-400 rounded-full w-7 h-7 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
          aria-label={t('stack_panel_close')}
        >
          <XMarkIcon className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Description */}
      {node.descKey && (
        <p className="text-[0.78rem] text-metal-300/90 leading-relaxed">
          {t(node.descKey)}
        </p>
      )}

      {/* Skill Level */}
      <div className="bg-metal-800/50 p-4 rounded-xl border border-metal-700/50">
        <p className="text-[0.62rem] font-bold text-metal-400 uppercase tracking-[0.1em] mb-3 flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          {t('stack_skill_level')}
        </p>
        <SkillMeter level={node.level ?? 3} color={gs.fill} />
      </div>

      {/* Connected: Outgoing */}
      {connectedOut.length > 0 && (
        <div>
          <p className="text-[0.62rem] font-bold text-metal-400 uppercase tracking-[0.1em] mb-3 flex items-center gap-1.5">
            <span className="text-[var(--accent)]">→</span> {t('stack_connects_to')}
          </p>
          <div className="flex flex-col gap-2">
            {connectedOut.map(n => {
              const ngs = colors[n.group] ?? colors.frontend;
              return (
                <div key={n.id} className="flex items-center gap-3 bg-metal-800/40 px-3 py-2.5 rounded-lg border border-metal-700/40 transition-colors hover:border-metal-600/60">
                  <span
                    className="w-3 h-3 rounded-full shrink-0 border"
                    style={{ background: ngs.fill, borderColor: ngs.stroke }}
                    aria-hidden="true"
                  />
                  <span className="text-[0.78rem] font-semibold text-metal-200">{n.name}</span>
                  <span className="ml-auto text-[0.6rem] font-mono text-metal-500">{t(n.catKey) ?? n.catKey}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Connected: Incoming */}
      {connectedIn.length > 0 && (
        <div>
          <p className="text-[0.62rem] font-bold text-metal-400 uppercase tracking-[0.1em] mb-3 flex items-center gap-1.5">
            <span style={{ color: colors.db?.fill ?? '#b0c4e8' }}>←</span> {t('stack_influenced_by')}
          </p>
          <div className="flex flex-col gap-2">
            {connectedIn.map(n => {
              const ngs = colors[n.group] ?? colors.frontend;
              return (
                <div key={n.id} className="flex items-center gap-3 bg-metal-800/40 px-3 py-2.5 rounded-lg border border-metal-700/40 transition-colors hover:border-metal-600/60">
                  <span
                    className="w-3 h-3 rounded-full shrink-0 border"
                    style={{ background: ngs.fill, borderColor: ngs.stroke }}
                    aria-hidden="true"
                  />
                  <span className="text-[0.78rem] font-semibold text-metal-200">{n.name}</span>
                  <span className="ml-auto text-[0.6rem] font-mono text-metal-500">{t(n.catKey) ?? n.catKey}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Componente principal ────────────────────────────────────────────────────
export default function TechGraph() {
  const graphRef = useRef();
  const containerRef = useRef();
  const nodeClickRef = useRef(false); // flag to prevent bg-click from firing with node-click
  const { isDark } = useTheme();
  const { t, language } = useLanguage();

  const [selectedNode, setSelectedNode] = useState(null);
  const [activeGroups, setActiveGroups] = useState(new Set());
  const [dimensions, setDimensions] = useState({ w: 700, h: 500 });

  const colors = isDark ? graphData.groupColorsDark : graphData.groupColorsLight;
  /* Localise the group labels at render time */
  const localizedColors = useMemo(() => {
    const catMap = {
      core:     t('node_cat_profile'),
      frontend: t('node_cat_frontend'),
      backend:  t('node_cat_backend'),
      db:       t('node_cat_db'),
      graph:    t('node_cat_ia'),
      devops:   t('node_cat_devops'),
      design:   t('node_cat_design'),
    };
    const base = isDark ? graphData.groupColorsDark : graphData.groupColorsLight;
    return Object.fromEntries(
      Object.entries(base).map(([key, val]) => [key, { ...val, label: catMap[key] ?? val.label }])
    );
  }, [isDark, language]); // eslint-disable-line react-hooks/exhaustive-deps
  const linkColor = isDark ? '#4a5c78' : '#cbd5e1';
  const arrowColor = isDark ? '#697a9b' : '#94a3b8';

  const allGroups = useMemo(
    () => [...new Set(graphData.nodes.map(n => n.group))],
    []
  );

  useEffect(() => {
    setActiveGroups(new Set(allGroups));
  }, [allGroups]);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setDimensions({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const filteredData = useMemo(() => {
    const filteredNodes = graphData.nodes
      .filter(n => activeGroups.size === 0 || activeGroups.has(n.group))
      .map(n => ({ ...n, __r: 8 + (n.r / 28) * 16 }));

    const nodeIds = new Set(filteredNodes.map(n => n.id));
    const filteredLinks = graphData.links
      .filter(l => {
        const srcId = typeof l.source === 'object' ? l.source.id : l.source;
        const tgtId = typeof l.target === 'object' ? l.target.id : l.target;
        return nodeIds.has(srcId) && nodeIds.has(tgtId);
      })
      .map(l => ({
        source: typeof l.source === 'object' ? l.source.id : l.source,
        target: typeof l.target === 'object' ? l.target.id : l.target,
      }));

    return { nodes: filteredNodes, links: filteredLinks };
  }, [activeGroups]);

  useEffect(() => {
    if (!graphRef.current) return;
    graphRef.current.d3Force('charge')?.strength(-320);
    graphRef.current.d3Force('link')?.distance(l => {
      const src = typeof l.source === 'object' ? l.source : graphData.nodes.find(n => n.id === l.source);
      return (src?.id === 0) ? 120 : 80;
    });
    graphRef.current.d3Force('collide', forceCollide(node => (node.__r ?? 14) + 14));
    setTimeout(() => graphRef.current?.zoomToFit(500, 80), 800);
  }, [filteredData]);

  const handleNodeClick = useCallback((node) => {
    nodeClickRef.current = true;
    setSelectedNode(node);
    graphRef.current?.centerAt(node.x, node.y, 400);
    // Reset flag after a short delay so bg-click doesn't steal the event
    setTimeout(() => { nodeClickRef.current = false; }, 300);
  }, []);

  const handleBgClick = useCallback(() => {
    if (nodeClickRef.current) return; // ignore bg-click fired together with node-click
    setSelectedNode(null);
  }, []);

  const toggleGroup = (g) => setActiveGroups(prev => {
    const next = new Set(prev);
    next.has(g) ? next.delete(g) : next.add(g);
    return next;
  });

  return (
    <section
      id="stack"
      className="py-16 sm:py-24 px-5 sm:px-8 max-w-[1100px] mx-auto"
      aria-label={t('stack_section_label')}
    >
      {/* Section header */}
      <ScrollReveal>
        <div className="mb-6">
          <div className="font-mono text-[0.72rem] text-metal-400 tracking-[0.14em] uppercase mb-2">
            // TECH_GRAPH
          </div>
          <h2 className="text-[1.6rem] sm:text-[1.8rem] font-bold tracking-[-0.02em] text-metal-100">
            {t('stack_heading')}
          </h2>
        </div>
      </ScrollReveal>

      {/* Filters */}
      <ScrollReveal delay={1}>
        <div className="flex items-center gap-3 sm:gap-4 mb-4 bg-metal-800/40 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-metal-700/40 overflow-x-auto">
          <span className="text-[0.62rem] sm:text-[0.68rem] font-bold text-metal-400 uppercase tracking-[0.1em] flex items-center gap-1.5 shrink-0">
            <FunnelIcon className="w-3.5 h-3.5" />
            {t('stack_filters_label')}
          </span>
          <FilterBar groups={allGroups} active={activeGroups} onToggle={toggleGroup} colors={localizedColors} t={t} />
        </div>
      </ScrollReveal>

      {/* Main layout: Canvas + Panel */}
      <ScrollReveal variant="scale">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Canvas container */}
          <div
            ref={containerRef}
            className="flex-1 min-h-[350px] sm:min-h-[450px] md:min-h-[500px] rounded-2xl border border-metal-700/50 bg-metal-800/90 backdrop-blur-sm overflow-hidden relative cursor-grab active:cursor-grabbing shadow-card transition-colors duration-300"
          >
            {/* Graph header */}
            <div className="absolute top-0 inset-x-0 flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-metal-700/40 bg-metal-900/70 backdrop-blur-md z-10">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <CircleStackIcon className="w-4 h-4 text-metal-400" />
                <span className="font-mono text-[0.65rem] sm:text-[0.72rem] font-semibold text-metal-300 uppercase tracking-[0.08em]">
                  {t('stack_graph_header')}
                </span>
              </div>
              <span className="font-mono text-[0.58rem] sm:text-[0.65rem] text-metal-500 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden="true" />
                <span className="hidden sm:inline">{t('stack_graph_hint')}</span>
                <span className="sm:hidden">{t('stack_graph_hint_mob')}</span>
              </span>
            </div>

            {/* Force graph */}
            <ForceGraph2D
              ref={graphRef}
              graphData={filteredData}
              width={dimensions.w}
              height={dimensions.h}
              nodeLabel={(n) => `${n.name} — ${t(n.catKey) ?? n.group}`}
              nodeColor={n => (colors[n.group] ?? colors.frontend).fill}
              nodeRelSize={1}
              nodeVal={n => (n.__r ?? 14) * (n.__r ?? 14)}
              nodeCanvasObject={(node, ctx, scale) => drawNode(node, ctx, scale, selectedNode?.id, colors)}
              nodeCanvasObjectMode={() => 'replace'}
              linkColor={() => linkColor}
              linkWidth={1.8}
              linkDirectionalArrowLength={5}
              linkDirectionalArrowRelPos={1}
              linkDirectionalArrowColor={() => arrowColor}
              onNodeClick={handleNodeClick}
              onBackgroundClick={handleBgClick}
              onNodeHover={(node) => {
                // Change canvas cursor on hover
                const canvas = graphRef.current?.renderer()?.domElement;
                if (canvas) canvas.style.cursor = node ? 'pointer' : 'grab';
              }}
              cooldownTicks={120}
              enableZoomInteraction={true}
              enablePanInteraction={true}
            />

            {/* Legend */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
              <Legend groups={allGroups} colors={localizedColors} />
            </div>
          </div>

          {/* Side panel */}
          <div
            className="w-full md:w-[300px] shrink-0 min-h-[250px] sm:min-h-[300px] md:min-h-0 border border-metal-700/50 rounded-2xl bg-metal-900/90 backdrop-blur-md p-4 sm:p-5 flex flex-col overflow-y-auto shadow-card transition-colors duration-300"
            aria-live="polite"
            aria-atomic="true"
          >
            <h3 className="text-[0.72rem] font-bold text-metal-400 uppercase tracking-[0.1em] mb-5 flex items-center gap-2 pb-3 border-b border-metal-700/40">
              <CircleStackIcon className="w-4 h-4" />
              {t('stack_panel_title')}
            </h3>
            <SkillPanel
              node={selectedNode}
              links={filteredData.links}
              nodes={filteredData.nodes}
              onClose={() => setSelectedNode(null)}
              colors={localizedColors}
              t={t}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
