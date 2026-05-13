"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} id="contact" style={{ padding: "10rem 0", position: "relative", overflow: "hidden" }}>
      <motion.div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(200,255,0,0.04) 0%, transparent 70%)", pointerEvents: "none" }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
      <div className="wrapper" style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "56rem" }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 80 }}>
          <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.1)" }} />
          <span style={{ fontSize: 11, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>04 — Contacto</span>
          <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.1)" }} />
        </motion.div>
        <h2 style={{ fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em", marginBottom: 40, fontSize: "clamp(3rem, 8vw, 8rem)" }}>
          {["Trabajemos", "juntos."].map((line, i) => (
            <span key={line} style={{ display: "block", overflow: "hidden" }}>
              <motion.span style={{ display: "block" }} initial={{ y: "110%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
                {i === 1 ? <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(240,237,230,0.15)" }}>{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto 56px" }}>
          Estoy buscando mi primera oportunidad como Data Analyst. Si tenés un proyecto o una posición, me encantaría hablar.
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.5, duration: 0.5 }} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <motion.a href="mailto:braian@email.com" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#c8ff00", color: "#0a0a0a", fontWeight: 700, padding: "20px 40px", borderRadius: 999, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
            Escribime <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </motion.a>
          <motion.a href="https://linkedin.com/in/braian-nabiar" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, padding: "20px 32px", fontSize: 14, color: "#666", textDecoration: "none" }}>
            LinkedIn
          </motion.a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 64, fontSize: 14, color: "#333" }}>
          <a href="https://github.com/nabiar2" target="_blank" rel="noopener noreferrer" style={{ color: "#333", textDecoration: "none" }}>GitHub</a>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#2a2a2a", display: "inline-block" }} />
          <a href="https://linkedin.com/in/braian-nabiar" target="_blank" rel="noopener noreferrer" style={{ color: "#333", textDecoration: "none" }}>LinkedIn</a>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#2a2a2a", display: "inline-block" }} />
          <span>Buenos Aires, Argentina</span>
        </motion.div>
      </div>
    </section>
  );
}
