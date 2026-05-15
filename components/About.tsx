"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2+", label: "Años gestionando métricas de negocio" },
  { value: "4+", label: "Proyectos de análisis completados" },
  { value: "SQL", label: "PostgreSQL · BigQuery · Sheets" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="about" ref={ref} style={{ padding: "100px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
          Sobre mí
        </motion.p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 28 }}>
              Datos que<br />generan impacto
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
              Soy Braian, analista de datos en formación con base real en gestión de métricas de negocio — CMV, rentabilidad, ticket promedio y top productos en el sector gastronómico.
            </p>
            <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7 }}>
              Actualmente cursando el Google Data Analytics Professional Certificate. Mi foco está en convertir datos desordenados en insights claros que muevan decisiones reales.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} style={{ paddingTop: 8 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--border)", padding: "28px 0", display: "flex", alignItems: "baseline", gap: 20 }}>
                <span style={{ fontSize: 40, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.02em", minWidth: 80 }}>{s.value}</span>
                <span style={{ color: "var(--muted)", fontSize: 14 }}>{s.label}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
