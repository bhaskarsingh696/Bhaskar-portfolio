import type { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  const nodes = Array.from({ length: project.visual === "canvas" ? 8 : 6 });
  return (
    <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
      <div className="visual-noise" />
      <div className="visual-topbar"><i /><i /><i /><span>/{project.slug}</span></div>
      {project.visual === "canvas" && <><div className="canvas-line l-one" /><div className="canvas-line l-two" /><div className="canvas-note note-one">sync()</div><div className="canvas-note note-two">&lt;idea /&gt;</div><div className="cursor-dot c-one" /><div className="cursor-dot c-two" /></>}
      {project.visual === "kanban" && <div className="kanban-columns">{[0, 1, 2].map((column) => <div className="kanban-col" key={column}><span>{["Queue", "Moving", "Done"][column]}</span>{[0, 1, 2].map((card) => <i key={card} style={{ width: `${66 + ((card + column) % 3) * 13}%` }} />)}</div>)}</div>}
      {project.visual === "marketplace" && <div className="market-orbit"><div className="market-core">RENT<br />EASE</div>{nodes.map((_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>}
      {project.visual === "invoice" && <div className="invoice-paper"><div className="invoice-mark">FF</div><span>INVOICE · 004</span><b>TIME MAKES<br />THINGS REAL.</b><div className="invoice-lines"><i /><i /><i /></div><strong>₹ 00,000</strong></div>}
      {project.visual === "pipeline" && <div className="pipeline-flow">{["Saved", "Applied", "Talk", "Offer"].map((label, index) => <div className="pipeline-stop" key={label}><span>{String(index + 1).padStart(2, "0")}</span><b>{label}</b></div>)}</div>}
      <div className="visual-foot"><span>{project.number} · SYSTEM STUDY</span><span>{project.status}</span></div>
    </div>
  );
}
