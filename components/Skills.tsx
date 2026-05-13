"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "SQL", level: 60, category: "Data" },
  { name: "Python", level: 45, category: "Data" },
  { name: "Google Sheets / Excel", level: 80, category: "Analysis" },
  { name: "Tableau / Power BI", level: 50, category: "Viz" },
  { name: "Análisis financiero", level: 75, category: "Business" },
  { name: "Storytelling con datos", level: 65, category: "Comm" },
];

const tags = ["SQL","Python","Pandas","Tableau","Power BI","Excel","Google Sheets","BigQuery","Data Cleaning","EDA","Visualización","KPIs","Finanzas","SQL","Python","Pandas","Tableau","Power BI","Excel","Google Sheets","BigQuery","Data Cleaning","EDA","Visualización","KPIs","Finanzas"];

function Bar({ name, level, category, delay }: { name: string; level: number; category: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
      <div className="flex justify-between items-baseline mb-3">
        <div className="flex items-center gap-3"><span className="text-[10px] text-[#444] border border-white/10 rounded-full px-2 py-0.5">{category}</span><span className="text-base font-medium text-[#f0ede6]">{name}</span></div>
        <span className="text-sm text-[#444]">{level}%</span>
      </div>
      <div className="h-px bg-white/8 relative overflow-hidden">
        <motion.div className="absolute inset-y-0 left-0 bg-[#c8ff00]" initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ transformOrigin: "left", width: `${level}%` }} />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} id="skills" style={{ padding: "10rem 0" }}>
      <div className="wrapper">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="flex items-center gap-4 mb-20">
          <span className="text-xs text-[#444] tracking-widest uppercase">02 — Skills</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-end mb-24">
          <h2 className="font-extrabold leading-none tracking-tighter" style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}>
            {["Herramientas", "que uso."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span className="block" initial={{ y: "110%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                  {i === 1 ? <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(240,237,230,0.2)" }}>{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="text-[#555] leading-relaxed text-base md:text-lg">En constante aprendizaje. Cada proyecto es una oportunidad para profundizar en el stack de un analista moderno.</motion.p>
        </div>
        <div className="space-y-10 mb-24">{skills.map((s, i) => <Bar key={s.name} {...s} delay={0.1 + i * 0.08} />)}</div>
      </div>
      <div className="overflow-hidden border-t border-b border-white/8 py-5">
        <div className="marquee-inner">{tags.map((tag, i) => <span key={i} className={`text-sm mr-10 tracking-wide flex-shrink-0 ${i % 4 === 0 ? "text-[#c8ff00]" : "text-[#2a2a2a]"}`}>{tag}</span>)}</div>
      </div>
    </section>
  );
}
