"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "20px 48px", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s ease",
    }}>
      <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.05em" }}>
        BN<span style={{ color: "var(--accent)" }}>.</span>
      </span>
      <nav style={{ display: "flex", gap: 36 }}>
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{
            fontSize: 13, color: "var(--muted)", textDecoration: "none",
            letterSpacing: "0.04em", transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
