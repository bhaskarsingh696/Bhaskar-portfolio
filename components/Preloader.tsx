"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timeout = window.setTimeout(() => setDone(true), 1150);
    return () => window.clearTimeout(timeout);
  }, []);
  return (
    <div className={`preloader ${done ? "is-done" : ""}`} aria-hidden={done}>
      <div className="preloader-grid" />
      <p>Building useful systems</p>
      <h1><span>BHASKAR</span><span>SINGH</span></h1>
      <i>Loading <b>01—01</b></i>
    </div>
  );
}
