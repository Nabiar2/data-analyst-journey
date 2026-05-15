"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  { num: "01", title: "Análisis de Rentabilidad — Restaurante", tags: ["Google Sheets","KPIs","Finanzas"], description: "Dashboard de métricas operativas reales: CMV, ticket promedio, top 10 productos y margen neto por período. Reducción del CMV en 4 puntos porcentuales mediante identificación de desperdicios.", year: "2023" },
  { num: "02", title: "Cyclistic Bike Share — Capstone Google", tags: ["R","ggplot2","Data Cleaning"], description: "Análisis completo del comportamiento de usuarios anuales vs casuales. Más de 5M de viajes procesados con R. Recomendaciones accionables para campaña de conversión de miembros.", year: "2024" },
  { num: "03", title: "Dashboard de Ventas — SQL + Tableau", tags: ["SQL","Tableau","EDA"], description: "Pipeline completo: extracción con SQL desde PostgreSQL, transformación y limpieza, visualización en Tableau con filtros dinámicos por región, categoría y período temporal.", year: "2024" },
  { num: "04", title: "Análisis Exploratorio — Dataset Financiero", tags: ["Python","Pandas","Matplotlib"], description: "EDA sobre dataset de transacciones financieras. Detección de outliers, correlaciones y patrones estacionales usando Pandas y visualizaciones con Matplotlib/Seaborn.", year: "2025" },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section id="projects" ref={ref} style={{ padding: "100px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
          Proyectos
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.05 }}
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 56 }}>
          Trabajo selecto
        </motion.h2>
        <div>
          {projects.map((p, i) => (
            <motion.div key={p.num} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}>
              <div onClick={() => setExpanded(expanded === p.num ? null : p.num)} data-hover
                style={{ borderTop: "1px solid var(--border)", padding: "28px 0", display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 24, alignItems: "center", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{p.num}</span>
                <div>
                  <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em" }}>{p.title}</span>
                  <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{ fontSize: 11, color: "var(--muted)", border: "1px solid var(--border)", padding: "2px 10px", letterSpacing: "0.04em" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>{p.year}</span>
                  <span style={{ fontSize: 20, color: "var(--muted)", transform: expanded === p.num ? "rotate(45deg)" : "none", transition: "transform 0.25s", display: "inline-block" }}>+</span>
                </div>
              </div>
              <AnimatePresence>
                {expanded === p.num && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                    <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, paddingBottom: 28, paddingLeft: 84, maxWidth: 640 }}>{p.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
