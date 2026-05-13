"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, raf: number;
    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; dot.style.left = `${mouseX}px`; dot.style.top = `${mouseY}px`; };
    const animate = () => { ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12; ring.style.left = `${ringX}px`; ring.style.top = `${ringY}px`; raf = requestAnimationFrame(animate); };
    const onEnter = () => ring.classList.add("hover");
    const onLeave = () => ring.classList.remove("hover");
    const attach = () => document.querySelectorAll("a, button, [data-cursor]").forEach(el => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });
    window.addEventListener("mousemove", onMove);
    attach();
    raf = requestAnimationFrame(animate);
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); obs.disconnect(); };
  }, []);

  return (<><div ref={dotRef} className="cursor-dot" /><div ref={ringRef} className="cursor-ring" /></>);
}
