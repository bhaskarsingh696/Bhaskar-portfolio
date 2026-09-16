"use client";

import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor");
    const move = (event: PointerEvent) => { if (cursor) { cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`; } };
    const enter = () => cursor?.classList.add("is-active");
    const leave = () => cursor?.classList.remove("is-active");
    window.addEventListener("pointermove", move);
    const targets = document.querySelectorAll("a, button");
    targets.forEach((target) => { target.addEventListener("pointerenter", enter); target.addEventListener("pointerleave", leave); });
    return () => { window.removeEventListener("pointermove", move); targets.forEach((target) => { target.removeEventListener("pointerenter", enter); target.removeEventListener("pointerleave", leave); }); };
  }, []);
  return <div className="cursor" aria-hidden="true"><span /></div>;
}
