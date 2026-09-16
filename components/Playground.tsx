"use client";

import { sideProjects } from "@/data/projects";
import { SectionLabel } from "./SectionLabel";

export function Playground() {
  return (
    <section className="playground section" id="playground" aria-labelledby="playground-title">
      <SectionLabel number="04" label="Playground" detail="Small experiments" />
      <div className="playground-heading"><h2 id="playground-title">Side <i>quests.</i></h2><p>Experiments made for the satisfaction of making a thing work.</p></div>
      <div className="playground-track">
        {sideProjects.map((project) => <article className="side-card" key={project.title}>
          <div className="side-card-top"><span>{project.number}</span><b>{project.glyph}</b></div><h3>{project.title}</h3><p>{project.description}</p><div className="side-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><ul>{project.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul><span className="card-arrow">↗</span>
        </article>)}
      </div>
      <p className="playground-tail">More experiments are always brewing <span>↓</span></p>
    </section>
  );
}
