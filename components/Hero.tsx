"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}>{text}</motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", position: "relative" }} id="hero">
      <motion.div style={{ position: "absolute", top: "25%", left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

      <motion.div style={{ y, opacity, position: "relative", zIndex: 10 }}>
        <div className="wrapper" style={{ paddingTop: 160 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "6px 16px" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c8ff00", display: "inline-block" }} className="animate-pulse" />
            <span style={{ fontSize: 11, color: "#888", letterSpacing: "0.15em", textTransform: "uppercase" }}>En formación · Google Data Analytics</span>
          </motion.div>
          <h1 style={{ fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em", marginBottom: 32, fontSize: "clamp(4rem, 11vw, 11rem)" }}>
            <span style={{ display: "block" }}><SplitText text="Braian" delay={0.1} /></span>
            <span style={{ display: "block", color: "transparent", WebkitTextStroke: "1px rgba(240,237,230,0.25)" }}><SplitText text="Nabiar" delay={0.25} /></span>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 56 }}>
            {["Data", "Analyst"].map((w, i) => <motion.span key={w} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", fontWeight: 600, color: "#c8ff00" }}>{w}</motion.span>)}
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "#444" }}>con foco en</motion.span>
            {["Finanzas", "Negocios", "Datos"].map((w, i) => <motion.span key={w} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "#555" }}>{w}{i < 2 ? " ·" : ""}</motion.span>)}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
            <a href="#projects" className="group" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#c8ff00", color: "#0a0a0a", fontWeight: 700, padding: "16px 32px", borderRadius: 999, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>Ver proyectos →</a>
            <a href="#about" style={{ fontSize: 14, color: "#555", textDecoration: "none" }}>Sobre mí ↓</a>
          </motion.div>
        </div>
      </motion.div>

      <div className="wrapper" style={{ paddingBottom: 48, position: "relative", zIndex: 10 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.15)" }} />
          <span style={{ fontSize: 11, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <motion.div style={{ width: 4, height: 4, borderRadius: "50%", background: "#444" }} animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </motion.div>
      </div>

      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} style={{ position: "absolute", bottom: 48, right: 64, fontSize: 11, color: "#2a2a2a", letterSpacing: "0.15em" }}>© 2025</motion.span>
    </section>
  );
}
