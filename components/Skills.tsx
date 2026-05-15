"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "SQL", level: 72 },
  { name: "Google Sheets / Excel", level: 85 },
  { name: "Python (Pandas · NumPy)", level: 55 },
  { name: "Tableau / Power BI", level: 60 },
  { name: "Análisis de métricas de negocio", level: 90 },
  { name: "BigQuery", level: 50 },
];
const tags = ["SQL","Python","Pandas","NumPy","Tableau","Power BI","Google Sheets","BigQuery","Data Cleaning","EDA","Visualización","KPIs","Finanzas","Excel"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="skills" ref={ref} style={{ padding: "100px 0" }}>
      <div style={{ padding: "0 48px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
          Skills
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.05 }}
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 56 }}>
          Herramientas y tecnologías
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 60px", marginBottom: 80 }}>
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>{s.level}%</span>
              </div>
              <div style={{ height: 3, background: "var(--border)", borderRadius: 2, overflow: "hidden" }}>
                <motion.div initial={{ width: 0 }} animate={inView ? { width: `${s.level}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.07, ease: "easeOut" }}
                  style={{ height: "100%", background: "var(--accent)", borderRadius: 2 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div style={{ overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "20px 0" }}>
        <div className="marquee-track">
          {[...tags, ...tags].map((tag, i) => (
            <span key={i} style={{ padding: "6px 20px", marginRight: 8, border: "1px solid var(--border)", fontSize: 13, color: "var(--muted)", whiteSpace: "nowrap" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
