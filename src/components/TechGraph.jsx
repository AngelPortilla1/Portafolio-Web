import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { forceCollide } from 'd3-force-3d';
import { CircleStackIcon, XMarkIcon, FunnelIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import { graphData } from '../data/portfolioData';

// ─── Helpers ────────────────────────────────────────────────────────────────
const groupStyle = (group) => graphData.groupColors[group] ?? graphData.groupColors.frontend;

// ─── SkillMeter: barra de nivel visual ───────────────────────────────────────
function SkillMeter({ level, max = 5, color = '#34d399' }) {
  const pct = Math.round((level / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 rounded-full bg-metal-800 overflow-hidden">
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

// ─── Renderizado de nodo canvas ──────────────────────────────────────────────
function drawNode(node, ctx, globalScale, selectedId) {
  const r = node.__r ?? 14;
  const gs = groupStyle(node.group);
  const isSelected = node.id === selectedId;

  // Halo de selección
  if (isSelected) {
    ctx.beginPath();
    ctx.arc(node.x, node.y, r + 6, 0, 2 * Math.PI);
    ctx.fillStyle = gs.stroke + '44';
    ctx.fill();
  }

  // Círculo principal
  ctx.beginPath();
  ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
  ctx.fillStyle = gs.fill;
  ctx.fill();
  ctx.strokeStyle = gs.stroke;
  ctx.lineWidth = isSelected ? 2.5 : 1.2;
  ctx.stroke();

  // Anillo de skill level (arco exterior proporcional al level)
  const levelRatio = (node.level ?? 3) / 5;
  ctx.beginPath();
  ctx.arc(node.x, node.y, r + 3, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI * levelRatio);
  ctx.strokeStyle = gs.stroke + 'cc';
  ctx.lineWidth = 2.2;
  ctx.stroke();

  // Label
  const fontSize = Math.max(8, 11 / globalScale);
  ctx.font = `600 ${fontSize}px Inter, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Text color: use white for dark fills, dark for light fills
  const isDarkFill = gs.fill === '#2b3d4f' || gs.fill === '#697a9b';
  ctx.fillStyle = isDarkFill ? '#d8e4f5' : '#111d27';

  const label = node.name;
  ctx.fillText(label.length > 12 ? label.slice(0, 11) + '…' : label, node.x, node.y);
}

// ─── FilterBar ───────────────────────────────────────────────────────────────
function FilterBar({ groups, active, onToggle }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {groups.map(g => {
        const gs = groupStyle(g);
        const on = active.has(g);
        return (
          <button
            key={g}
            onClick={() => onToggle(g)}
            className={`px-3.5 py-1.5 rounded-full text-[0.68rem] font-bold uppercase tracking-[0.06em] cursor-pointer transition-all duration-200 border ${
              on
                ? 'hover:-translate-y-px shadow-sm'
                : 'bg-metal-800/60 text-metal-400 border-metal-700/50 hover:bg-metal-700/60 hover:text-metal-200'
            }`}
            style={on ? { borderColor: gs.stroke, background: gs.fill + '30', color: gs.fill } : {}}
          >
            <span
              className="inline-block w-2 h-2 rounded-full mr-1.5 align-middle"
              style={{ background: gs.fill, border: `1px solid ${gs.stroke}` }}
            />
            {gs.label ?? g}
          </button>
        );
      })}
    </div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────
function Legend({ groups }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 px-4 py-2.5 bg-[#111d27]/85 backdrop-blur-md border border-metal-700/50 rounded-xl text-[0.68rem] font-bold text-metal-200">
      {groups.map(g => {
        const gs = groupStyle(g);
        return (
          <span key={g} className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full inline-block border"
              style={{ background: gs.fill, borderColor: gs.stroke }}
            />
            {gs.label ?? g}
          </span>
        );
      })}
    </div>
  );
}

// ─── SkillPanel (panel lateral) ──────────────────────────────────────────────
function SkillPanel({ node, links, nodes, onClose }) {
  if (!node) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center opacity-50 gap-3 text-center px-4">
        <CursorArrowRaysIcon className="w-12 h-12 text-metal-500" />
        <p className="text-[0.8rem] font-medium text-metal-400 leading-relaxed">
          Haz clic en un nodo del grafo para explorar los detalles de cada tecnología.
        </p>
      </div>
    );
  }

  const gs = groupStyle(node.group);

  // Find connected nodes
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
            {node.category}
          </span>
        </div>
        <button
          onClick={onClose}
          className="bg-metal-800 hover:bg-red-900/40 hover:text-red-400 text-metal-400 rounded-full w-7 h-7 flex items-center justify-center transition-colors shrink-0"
        >
          <XMarkIcon className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Description */}
      {node.description && (
        <p className="text-[0.78rem] text-metal-300/90 leading-relaxed">
          {node.description}
        </p>
      )}

      {/* Skill Level */}
      <div className="bg-metal-800/50 p-4 rounded-xl border border-metal-700/50">
        <p className="text-[0.62rem] font-bold text-metal-400 uppercase tracking-[0.1em] mb-3 flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34d399]" />
          Nivel de dominio
        </p>
        <SkillMeter level={node.level ?? 3} color={gs.fill} />
      </div>

      {/* Connected: Outgoing */}
      {connectedOut.length > 0 && (
        <div>
          <p className="text-[0.62rem] font-bold text-metal-400 uppercase tracking-[0.1em] mb-3 flex items-center gap-1.5">
            <span className="text-[#34d399]">→</span> Conecta con
          </p>
          <div className="flex flex-col gap-2">
            {connectedOut.map(n => {
              const ngs = groupStyle(n.group);
              return (
                <div key={n.id} className="flex items-center gap-3 bg-metal-800/40 px-3 py-2.5 rounded-lg border border-metal-700/40 transition-colors hover:border-metal-600/60">
                  <span
                    className="w-3 h-3 rounded-full shrink-0 border"
                    style={{ background: ngs.fill, borderColor: ngs.stroke }}
                  />
                  <span className="text-[0.78rem] font-semibold text-metal-200">{n.name}</span>
                  <span className="ml-auto text-[0.6rem] font-mono text-metal-500">{n.category}</span>
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
            <span className="text-[#b0c4e8]">←</span> Influenciado por
          </p>
          <div className="flex flex-col gap-2">
            {connectedIn.map(n => {
              const ngs = groupStyle(n.group);
              return (
                <div key={n.id} className="flex items-center gap-3 bg-metal-800/40 px-3 py-2.5 rounded-lg border border-metal-700/40 transition-colors hover:border-metal-600/60">
                  <span
                    className="w-3 h-3 rounded-full shrink-0 border"
                    style={{ background: ngs.fill, borderColor: ngs.stroke }}
                  />
                  <span className="text-[0.78rem] font-semibold text-metal-200">{n.name}</span>
                  <span className="ml-auto text-[0.6rem] font-mono text-metal-500">{n.category}</span>
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

  const [selectedNode, setSelectedNode] = useState(null);
  const [activeGroups, setActiveGroups] = useState(new Set());
  const [dimensions, setDimensions] = useState({ w: 700, h: 500 });

  // All groups
  const allGroups = useMemo(
    () => [...new Set(graphData.nodes.map(n => n.group))],
    []
  );

  // Initialize activeGroups on mount
  useEffect(() => {
    setActiveGroups(new Set(allGroups));
  }, [allGroups]);

  // Responsive dimensions
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setDimensions({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Filtered graph data
  const filteredData = useMemo(() => {
    const filteredNodes = graphData.nodes
      .filter(n => activeGroups.size === 0 || activeGroups.has(n.group))
      .map(n => ({ ...n, __r: 10 + (n.r / 28) * 10 }));

    const nodeIds = new Set(filteredNodes.map(n => n.id));
    const filteredLinks = graphData.links
      .filter(l => nodeIds.has(l.source) && nodeIds.has(l.target))
      .map(l => ({ ...l }));

    return { nodes: filteredNodes, links: filteredLinks };
  }, [activeGroups]);

  // Forces
  useEffect(() => {
    if (!graphRef.current) return;
    graphRef.current.d3Force('charge')?.strength(-320);
    graphRef.current.d3Force('link')?.distance(l => {
      const src = typeof l.source === 'object' ? l.source : graphData.nodes.find(n => n.id === l.source);
      return (src?.id === 0) ? 120 : 80;
    });
    graphRef.current.d3Force('collide', forceCollide(node => (node.__r ?? 14) + 14));
    setTimeout(() => graphRef.current?.zoomToFit(400, 60), 600);
  }, [filteredData]);

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
    graphRef.current?.centerAt(node.x, node.y, 600);
    graphRef.current?.zoom(2.5, 600);
  }, []);

  const handleBgClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const toggleGroup = (g) => setActiveGroups(prev => {
    const next = new Set(prev);
    next.has(g) ? next.delete(g) : next.add(g);
    return next;
  });

  return (
    <section id="stack" className="py-24 px-8 max-w-[1100px] mx-auto">
      {/* Section header */}
      <div className="mb-6">
        <div className="font-mono text-[0.72rem] text-metal-400 tracking-[0.14em] uppercase mb-2">
          // TECH_GRAPH
        </div>
        <h2 className="text-[1.8rem] font-bold tracking-[-0.02em] text-metal-100">
          Mi Stack Tecnológico
        </h2>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 flex-wrap mb-4 bg-metal-800/40 px-4 py-3 rounded-xl border border-metal-700/40">
        <span className="text-[0.68rem] font-bold text-metal-400 uppercase tracking-[0.1em] flex items-center gap-1.5 shrink-0">
          <FunnelIcon className="w-3.5 h-3.5" />
          Filtros:
        </span>
        <FilterBar groups={allGroups} active={activeGroups} onToggle={toggleGroup} />
      </div>

      {/* Main layout: Canvas + Panel */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Canvas container */}
        <div
          ref={containerRef}
          className="flex-1 min-h-[450px] md:min-h-[500px] rounded-2xl border border-metal-700/50 bg-[#1a2a38]/90 backdrop-blur-sm overflow-hidden relative cursor-grab active:cursor-grabbing shadow-card"
        >
          {/* Graph header */}
          <div className="absolute top-0 inset-x-0 flex items-center justify-between px-5 py-3 border-b border-metal-700/40 bg-[#111d27]/70 backdrop-blur-md z-10">
            <div className="flex items-center gap-2.5">
              <CircleStackIcon className="w-4.5 h-4.5 text-metal-400" />
              <span className="font-mono text-[0.72rem] font-semibold text-metal-300 uppercase tracking-[0.08em]">
                Grafo de Tecnologías
              </span>
            </div>
            <span className="font-mono text-[0.65rem] text-metal-500 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
              Click en un nodo para explorar
            </span>
          </div>

          {/* Force graph */}
          <ForceGraph2D
            ref={graphRef}
            graphData={filteredData}
            width={dimensions.w}
            height={dimensions.h}
            nodeLabel={n => n.name}
            nodeColor={n => groupStyle(n.group).fill}
            nodeRelSize={1}
            nodeVal={n => (n.__r ?? 14) * (n.__r ?? 14)}
            nodeCanvasObject={(node, ctx, scale) => drawNode(node, ctx, scale, selectedNode?.id)}
            nodeCanvasObjectMode={() => 'replace'}
            linkColor={() => '#4a5c78'}
            linkWidth={1.8}
            linkDirectionalArrowLength={5}
            linkDirectionalArrowRelPos={1}
            linkDirectionalArrowColor={() => '#697a9b'}
            onNodeClick={handleNodeClick}
            onBackgroundClick={handleBgClick}
            cooldownTicks={120}
            enableZoomInteraction={true}
            enablePanInteraction={true}
          />

          {/* Legend */}
          <div className="absolute bottom-4 left-4 hidden md:block">
            <Legend groups={allGroups} />
          </div>
        </div>

        {/* Side panel */}
        <div className="w-full md:w-[300px] shrink-0 min-h-[300px] md:min-h-0 border border-metal-700/50 rounded-2xl bg-[#111d27]/90 backdrop-blur-md p-5 flex flex-col overflow-y-auto shadow-card">
          <h3 className="text-[0.72rem] font-bold text-metal-400 uppercase tracking-[0.1em] mb-5 flex items-center gap-2 pb-3 border-b border-metal-700/40">
            <CircleStackIcon className="w-4 h-4" />
            Explorador de Skill
          </h3>
          <SkillPanel
            node={selectedNode}
            links={filteredData.links}
            nodes={filteredData.nodes}
            onClose={() => setSelectedNode(null)}
          />
        </div>
      </div>
    </section>
  );
}
