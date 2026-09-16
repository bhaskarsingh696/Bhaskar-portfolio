"use client";

import { useEffect, useRef, useState } from "react";
import { skillGroups, technologyMarks } from "@/data/skills";
import { SectionLabel } from "./SectionLabel";
import { TechIcon, TechMark } from "./TechMark";

type ActiveSkill = { name: string; group: string; number: string } | null;

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeSkill, setActiveSkill] = useState<ActiveSkill>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setRevealed(true);
      observer.unobserve(entry.target);
    }, { threshold: 0.14 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`skills section ${revealed ? "is-revealed" : ""}`} id="skills" aria-labelledby="skills-title">
      <SectionLabel number="03" label="What I use" detail="Tools for thinking" />
      <div className="skills-lead">
        <h2 id="skills-title">Tools for<br /><i>thinking.</i><br />Tools for <i>building.</i></h2>
        <div className="skills-aside">
          <p>Working across the stack, with a particular interest in the systems that make an experience reliable.</p>
          <aside className="skill-inspector" data-visible={Boolean(activeSkill)} aria-hidden="true">
            <span className="inspector-signal" />
            <small>{activeSkill ? `${activeSkill.number} · ${activeSkill.group}` : "Move through the collection"}</small>
            <strong>{activeSkill?.name ?? "Tools, in context."}</strong>
          </aside>
        </div>
      </div>
      <div className="skills-groups">
        {skillGroups.map((group, index) => {
          const number = String(index + 1).padStart(2, "0");
          return (
            <div className="skill-group" key={group.label} onPointerLeave={() => setActiveSkill(null)}>
              <p><span>{number}</span><b>{group.label}</b><i aria-hidden="true">↗</i></p>
              <div className="skill-items">
                {group.items.map((item) => (
                  <button className="skill-item" type="button" key={item} onPointerEnter={() => setActiveSkill({ name: item, group: group.label, number })} onFocus={() => setActiveSkill({ name: item, group: group.label, number })} onBlur={() => setActiveSkill(null)}>
                    <span className="skill-item-icon"><TechIcon name={item} /></span><span className="skill-item-name">{item}</span><i aria-hidden="true">↗</i>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="tech-marquee" aria-label={`Technologies: ${technologyMarks.join(", ")}`}><div>{technologyMarks.concat(technologyMarks).map((name, index) => <TechMark key={`${name}-${index}`} name={name} />)}</div></div>
    </section>
  );
}
