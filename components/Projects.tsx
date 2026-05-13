"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  { num: "01", title: "Análisis de Rentabilidad", subtitle: "Restaurante — Gestión de métricas", description: "Análisis del CMV, ticket promedio y rentabilidad por producto para optimizar la carta y reducir costos operativos.", tags: ["Excel","Análisis financiero","KPIs"], status: "Completado", year: "2024" },
  { num: "02", title: "Dashboard de Ventas", subtitle: "SQL + Tableau", description: "Pipeline de datos con SQL para limpiar y agregar ventas, visualizado en Tableau con métricas clave de rendimiento mensual.", tags: ["SQL","Tableau","Data Cleaning"], status: "En proceso", year: "2025" },
  { num: "03", title: "Análisis Exploratorio", subtitle: "Python · Pandas · Matplotlib", description: "EDA completo de un dataset financiero: detección de outliers, correlaciones y visualizaciones que guían decisiones de inversión.", tags: ["Python","Pandas","EDA"], status: "En proceso", year: "2025" },
  { num: "04", title: "Capstone Project", subtitle: "Google Data Analytics Certificate", description: "Proyecto final del certificado de Google. Análisis end-to-end con datos reales: problema de negocio, limpieza, análisis y hallazgos.", tags: ["R / Python","BigQuery","Storytelling"], status: "Próximamente", year: "2025" },
];

function Card({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="group relative border-t border-white/8 py-8 cursor-default">
      <motion.div className="absolute inset-0 bg-white/[0.02] rounded-xl pointer-events-none" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.2 }} />
      <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <span className="text-[#2a2a2a] text-sm font-mono shrink-0 w-8">{project.num}</span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-3 mb-1">
            <h3 className="text-lg md:text-xl font-bold tracking-tight group-hover:text-[#c8ff00] transition-colors duration-300">{project.title}</h3>
            <span className="text-sm text-[#444]">— {project.subtitle}</span>
          </div>
          <AnimatePresence>{hovered && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="text-[#666] text-sm leading-relaxed overflow-hidden mt-2">{project.description}</motion.p>}</AnimatePresence>
        </div>
        <div className="hidden md:flex flex-wrap gap-2 shrink-0">{project.tags.map(t => <span key={t} className="text-xs text-[#444] border border-white/8 rounded-full px-3 py-1">{t}</span>)}</div>
        <div className="flex items-center gap-4 shrink-0">
          <span className={`text-xs px-2.5 py-1 rounded-full border ${project.status==="Completado" ? "border-[#c8ff00]/30 text-[#c8ff00]" : project.status==="En proceso" ? "border-blue-500/30 text-blue-400" : "border-white/8 text-[#444]"}`}>{project.status}</span>
          <span className="text-xs text-[#2a2a2a] font-mono">{project.year}</span>
          <motion.span animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.2 }} transition={{ duration: 0.2 }} className="text-[#c8ff00]">→</motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} id="projects" style={{ padding: "10rem 0" }}>
      <div className="wrapper">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="flex items-center gap-4 mb-20">
          <span className="text-xs text-[#444] tracking-widest uppercase">03 — Proyectos</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-end mb-16">
          <h2 className="font-extrabold leading-none tracking-tighter" style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}>
            {["Trabajo", "real."].map((line, i) => <span key={line} className="block overflow-hidden"><motion.span className="block" initial={{ y: "110%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>{i===1 ? <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(240,237,230,0.2)" }}>{line}</span> : line}</motion.span></span>)}
          </h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="text-[#555] leading-relaxed text-base md:text-lg">Proyectos que resuelven problemas reales con datos. Cada uno documenta el proceso completo: pregunta, limpieza, análisis y conclusión.</motion.p>
        </div>
        <div>{projects.map((p, i) => <Card key={p.num} project={p} index={i} />)}<div className="border-t border-white/8" /></div>
      </div>
    </section>
  );
}
