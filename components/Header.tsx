"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["01", "Projects", "#projects"],
  ["02", "About", "#about"],
  ["03", "What I build", "#skills"],
  ["04", "Playground", "#playground"],
  ["05", "Contact", "#contact"],
] as const;

const previewLabels = {
  "#projects": "Selected systems",
  "#about": "Learning in layers",
  "#skills": "Tools for thinking",
  "#playground": "Small experiments",
  "#contact": "Open channel",
} as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<keyof typeof previewLabels>("#projects");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !open) return;
      setOpen(false);
      requestAnimationFrame(() => toggleRef.current?.focus());
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`site-header ${open ? "menu-is-open" : ""}`}>
      <a className="wordmark" href="#top" aria-label="Bhaskar Singh, back to top">
        <span>BS</span><i>©</i>
      </a>
      <p className="header-status"><span className="pulse" /> Currently learning in Greater Noida</p>
      <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
        <span className="toggle-label" aria-hidden="true"><i>Index</i><i>Close</i></span>
        <b className="toggle-icon" aria-hidden="true"><i /><i /></b>
      </button>
      <nav className={`menu-panel ${open ? "is-open" : ""}`} id="site-menu" aria-label="Primary navigation">
        <p className="menu-kicker">Navigate slowly</p>
        <div className="menu-preview" data-preview={preview} aria-hidden="true">
          <span className="preview-orbit preview-orbit-one" /><span className="preview-orbit preview-orbit-two" /><span className="preview-node preview-node-one" /><span className="preview-node preview-node-two" />
          <small>{previewLabels[preview]}</small>
        </div>
        <div className="menu-links">
          {links.map(([number, label, href]) => (
            <a href={href} key={href} onPointerEnter={() => setPreview(href)} onFocus={() => setPreview(href)} onClick={() => setOpen(false)}>
              <small>{number}</small><span>{label}</span><i>↘</i>
            </a>
          ))}
        </div>
        <a className="menu-mail" href="mailto:bhaskar.singh.0024@gmail.com">bhaskar.singh.0024@gmail.com ↗</a>
      </nav>
    </header>
  );
}
