"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { SectionLabel } from "./SectionLabel";
import { ProjectVisual } from "./ProjectVisual";

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="project-dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="detail-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close project detail">×</button>
        <div className="dialog-index"><span>{project.number}</span><span>{project.status}</span></div>
        <h2 id="detail-title">{project.title}</h2>
        <p className="dialog-intro">{project.description}</p>
        <ProjectVisual project={project} />
        <div className="dialog-grid">
          <div><p className="dialog-label">Included</p><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          <div><p className="dialog-label">Technical architecture</p><p>The technical implementation is still being documented. This space is ready for diagrams and build notes as the project evolves.</p><p className="dialog-label dialog-tech">Technologies</p><p>{project.technologies.join(" · ")}</p></div>
        </div>
        {(project.liveUrl || project.githubUrl) && <div className="dialog-links">{project.liveUrl && <a href={project.liveUrl}>Live demo ↗</a>}{project.githubUrl && <a href={project.githubUrl}>GitHub ↗</a>}</div>}
      </section>
    </div>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <section className="projects section" id="projects" aria-labelledby="projects-title">
      <SectionLabel number="01" label="Projects" detail="Selected systems" />
      <div className="projects-heading"><h2 id="projects-title">A few things<br /><i>I&apos;m building.</i></h2><p>Five product ideas, each with its own problem to untangle.</p></div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className={`project-row project-${index + 1}`} key={project.id}>
            <div className="project-meta"><span>{project.number}</span><span className={`status ${project.status === "In Progress" ? "live" : ""}`}>{project.status}</span></div>
            <button className="project-trigger" type="button" onClick={() => setActiveProject(project)} aria-label={`Open ${project.title} project detail`}>
              <div className="project-copy"><h3>{project.title}</h3><p>{project.shortTitle}</p><span>{project.technologies.join(" · ")}</span></div>
              <ProjectVisual project={project} />
              <span className="project-open">Open study <b>↗</b></span>
            </button>
          </article>
        ))}
      </div>
      {activeProject && <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}
