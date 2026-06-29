import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { graphData } from '../data/portfolioData';

export default function TechGraph() {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const W = container.clientWidth || 900;
    const H = 450;
    svg.attr("viewBox", `0 0 ${W} ${H}`);

    // Deep copy nodes and links to prevent mutating original data on simulation re-runs
    const nodes_copy = graphData.nodes.map(d => ({ ...d }));
    const links_copy = graphData.links.map(d => ({ ...d }));

    // Defs: metallic radial gradients
    const defs = svg.append("defs");
    nodes_copy.forEach(n => {
      const grad = defs.append("radialGradient")
        .attr("id", `react-grad-${n.id}`)
        .attr("cx", "35%").attr("cy", "35%");
      const c = graphData.groupColors[n.group];
      grad.append("stop").attr("offset", "0%").attr("stop-color", "#D4E4F4");
      grad.append("stop").attr("offset", "40%").attr("stop-color", c.fill);
      grad.append("stop").attr("offset", "100%").attr("stop-color", c.stroke);
    });

    const simulation = d3.forceSimulation(nodes_copy)
      .force("link", d3.forceLink(links_copy).id(d => d.id).distance(d => {
        if (d.source.id === 0 || d.target.id === 0) return 110;
        return 70;
      }).strength(0.6))
      .force("charge", d3.forceManyBody().strength(-280))
      .force("center", d3.forceCenter(W / 2, H / 2))
      .force("collision", d3.forceCollide().radius(d => d.r + 10));

    const linkEl = svg.append("g")
      .selectAll("line")
      .data(links_copy)
      .join("line")
      .attr("stroke", "#C4D4E8")
      .attr("stroke-width", 1.5)
      .attr("stroke-opacity", 0.7);

    const nodeG = svg.append("g")
      .selectAll("g")
      .data(nodes_copy)
      .join("g")
      .style("cursor", "pointer")
      .call(d3.drag()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on("drag", (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        })
      );

    nodeG.append("circle")
      .attr("r", d => d.r)
      .attr("fill", d => `url(#react-grad-${d.id})`)
      .attr("stroke", d => graphData.groupColors[d.group].stroke)
      .attr("stroke-width", 1.5);

    nodeG.append("text")
      .text(d => d.name)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("font-family", "'JetBrains Mono', monospace")
      .attr("font-size", d => d.id === 0 ? "9px" : "7.5px")
      .attr("font-weight", d => d.id === 0 ? "600" : "500")
      .attr("fill", "#fff")
      .style("pointer-events", "none");

    const tooltip = tooltipRef.current;

    nodeG
      .on("mouseenter", (event, d) => {
        if (!tooltip) return;
        const tipName  = tooltip.querySelector("#tip-name");
        const tipCat   = tooltip.querySelector("#tip-cat");
        const tipLevel = tooltip.querySelector("#tip-level");

        if (tipName)  tipName.textContent  = d.name;
        if (tipCat)   tipCat.textContent   = d.category;
        if (tipLevel) {
          tipLevel.innerHTML = Array.from({ length: 5 }, (_, i) =>
            `<div class="level-dot ${i < d.level ? 'filled' : 'empty'}"></div>`
          ).join('');
        }

        const rect = container.getBoundingClientRect();
        tooltip.style.left    = (event.clientX - rect.left + 12) + "px";
        tooltip.style.top     = (event.clientY - rect.top  - 10) + "px";
        tooltip.style.opacity = "1";

        d3.select(event.currentTarget).select("circle")
          .attr("stroke-width", 3)
          .attr("stroke", "#4A7FC1");
      })
      .on("mousemove", (event) => {
        if (!tooltip) return;
        const rect = container.getBoundingClientRect();
        tooltip.style.left = (event.clientX - rect.left + 12) + "px";
        tooltip.style.top  = (event.clientY - rect.top  - 10) + "px";
      })
      .on("mouseleave", (event, d) => {
        if (!tooltip) return;
        tooltip.style.opacity = "0";
        d3.select(event.currentTarget).select("circle")
          .attr("stroke-width", 1.5)
          .attr("stroke", graphData.groupColors[d.group].stroke);
      });

    simulation.on("tick", () => {
      linkEl
        .attr("x1", d => d.source.x).attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
      nodeG.attr("transform", d =>
        `translate(${Math.max(d.r, Math.min(W - d.r, d.x))},${Math.max(d.r, Math.min(H - d.r, d.y))})`
      );
    });

    return () => { simulation.stop(); };
  }, []);

  return (
    <section id="stack" className="py-24 px-8 max-w-[1000px] mx-auto">
      {/* Section header */}
      <div className="mb-10">
        <div className="font-mono text-[0.72rem] text-metal-500 tracking-[0.14em] uppercase mb-2">
          // TECH_GRAPH
        </div>
        <h2 className="text-[1.8rem] font-bold tracking-[-0.02em] text-metal-900">
          Mi Stack Tecnológico
        </h2>
      </div>

      {/* Graph container */}
      <div className="bg-white border border-steel-100 rounded-xl overflow-hidden shadow-card relative" ref={containerRef}>
        {/* Graph header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-steel-100 bg-metal-50">
          <div className="flex items-center gap-3">
            <span className="text-base">🔗</span>
            <span className="font-mono text-[0.8rem] font-semibold text-metal-900 uppercase tracking-[0.08em]">
              Grafo de Tecnologías
            </span>
          </div>
          <span className="font-mono text-[0.72rem] text-steel-400">
            Hover sobre un nodo para ver detalles
          </span>
        </div>

        <svg className="graph-canvas" ref={svgRef} />

        {/* Tooltip */}
        <div
          className="absolute bg-white border border-metal-300 rounded-lg px-4 py-3 shadow-card-hover pointer-events-none opacity-0 transition-opacity duration-150 z-10 min-w-[150px]"
          ref={tooltipRef}
        >
          <div className="font-mono text-[0.82rem] font-semibold text-metal-900 mb-1" id="tip-name" />
          <div className="text-[0.7rem] text-steel-400 uppercase tracking-[0.08em] mb-1" id="tip-cat" />
          <div className="flex gap-1 mt-1" id="tip-level" />
        </div>
      </div>
    </section>
  );
}
