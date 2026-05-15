"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "0 48px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px", opacity: 0.4, pointerEvents: "none",
      }} />
      <div style={{ position: "relative", maxWidth: 900 }}>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ fontSize: 13, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
          Data Analyst en formación
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: "clamp(52px, 8vw, 112px)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 32 }}>
          Braian<br /><span style={{ color: "var(--muted)" }}>Nabiar</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 17, color: "var(--muted)", maxWidth: 480, lineHeight: 1.65, marginBottom: 48 }}>
          Convierto datos en decisiones. Especializado en análisis financiero, SQL y visualización de datos para negocios reales.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", gap: 16 }}>
          <a href="#projects" style={{
            display: "inline-block", padding: "14px 32px",
            background: "var(--accent)", color: "#0a0a0a",
            fontWeight: 700, fontSize: 14, textDecoration: "none", letterSpacing: "0.04em",
          }}>Ver proyectos</a>
          <a href="#contact" style={{
            display: "inline-block", padding: "14px 32px",
            border: "1px solid var(--border)", color: "var(--text)",
            fontWeight: 600, fontSize: 14, textDecoration: "none", letterSpacing: "0.04em",
          }}>Contacto</a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: "absolute", bottom: 40, left: 48, display: "flex", alignItems: "center", gap: 12, color: "var(--muted)", fontSize: 12, letterSpacing: "0.08em" }}>
        <div style={{ width: 40, height: 1, background: "var(--border)" }} />
        SCROLL
      </motion.div>
    </section>
  );
}
