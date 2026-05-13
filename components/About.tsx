"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "2+", label: "años de experiencia\nen gestión de métricas" },
  { value: "4", label: "herramientas\nen desarrollo" },
  { value: "∞", label: "curiosidad por\nlos datos" },
];

function Stat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }} className="border-t border-white/10 pt-6">
      <div className="font-extrabold tracking-tighter text-[#c8ff00] mb-2" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>{value}</div>
      <p className="text-sm text-[#555] leading-tight whitespace-pre-line">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} id="about" style={{ padding: "10rem 0" }}>
      <div className="wrapper">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="flex items-center gap-4 mb-20">
          <span className="text-xs text-[#444] tracking-widest uppercase">01 — Sobre mí</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-start">
          <div>
            <h2 className="font-extrabold leading-none tracking-tighter mb-10" style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}>
              {["Transformo", "datos en", "decisiones."].map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span className="block" initial={{ y: "110%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                    {i === 2 ? <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(240,237,230,0.2)" }}>{line}</span> : line}
                  </motion.span>
                </span>
              ))}
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-14">{stats.map((s, i) => <Stat key={s.value} {...s} delay={0.4 + i * 0.1} />)}</div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-6 text-[#666] leading-relaxed text-base md:text-lg pt-2">
            <p>Soy <span className="text-[#f0ede6] font-medium">Braian</span>, analista de datos en formación con el <span className="text-[#f0ede6] font-medium">Google Data Analytics Professional Certificate</span>. Mi background viene de la gestión de métricas en el sector gastronómico — CMV, rentabilidad, ticket promedio — donde aprendí que detrás de cada número hay una decisión de negocio.</p>
            <p>Hoy aplico esa mentalidad analítica con herramientas modernas: <span className="text-[#f0ede6]">SQL, Python, Tableau y Spreadsheets</span>. Me enfoco en finanzas y negocios porque es donde los datos realmente mueven la aguja.</p>
            <p>Busco mi primera oportunidad formal como Data Analyst para seguir creciendo y generar impacto real.</p>
            <motion.a href="#projects" whileHover={{ x: 4 }} className="inline-flex items-center gap-2 text-[#c8ff00] text-sm font-medium pt-2">Ver mis proyectos →</motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
