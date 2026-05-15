"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="contact" ref={ref} style={{ padding: "100px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", borderTop: "1px solid var(--border)", paddingTop: 80 }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
          Contacto
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.05 }}
          style={{ fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 48 }}>
          Hablemos de<br /><span style={{ color: "var(--muted)" }}>datos</span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="mailto:nabiar2@gmail.com" style={{ display: "inline-block", padding: "16px 40px", background: "var(--accent)", color: "#0a0a0a", fontWeight: 700, fontSize: 14, textDecoration: "none", letterSpacing: "0.04em" }}>
            nabiar2@gmail.com
          </a>
          <a href="https://linkedin.com/in/braian-nabiar" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", padding: "16px 40px", border: "1px solid var(--border)", color: "var(--text)", fontWeight: 600, fontSize: 14, textDecoration: "none", letterSpacing: "0.04em" }}>
            LinkedIn ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
