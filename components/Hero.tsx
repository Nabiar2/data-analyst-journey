"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const liveClasses = [
  { time: "10:00", level: "Beginner", title: "Chapter 1 | Hello, World!" },
  { time: "14:00", level: "Intermediate", title: "Chapter 2 | Talking about habits" },
  { time: "18:00", level: "Elementary", title: "Chapter 1 | My daily routine" },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  Elementary: "bg-violet-500/20 text-violet-400 border border-violet-500/30",
  Intermediate: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
};

export default function Hero() {
  return (
    <section id="hero" className="w-full bg-bg relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#30363D 1px, transparent 1px), linear-gradient(90deg, #30363D 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
              Clases en vivo todos los días
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-text-primary leading-[1.08] mb-8">
            Aprendé inglés<br />con{" "}
            <span className="text-accent">profes reales</span>
            <br />en vivo
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-text-muted text-lg leading-relaxed max-w-md mb-10">
            Clases grupales en vivo, chat de práctica y contenido multimedia. Tres niveles estructurados para llevarte del Beginner al Intermediate y más allá.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-12">
            <a href="#pricing" className="bg-accent hover:bg-accent-hover text-bg font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-glow-accent-sm hover:shadow-glow-accent">
              Empezar gratis →
            </a>
            <a href="#how-it-works" className="border border-border hover:border-accent/40 text-text-primary text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200">
              Cómo funciona
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {["A","B","C","D","E"].map((l) => (
                <div key={l} className="w-9 h-9 rounded-full bg-surface-2 border-2 border-bg flex items-center justify-center text-xs font-bold text-accent">{l}</div>
              ))}
            </div>
            <div>
              <p className="text-text-primary font-semibold text-sm">+1.200 estudiantes activos</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-amber-400 text-xs">★★★★★</span>
                <span className="text-text-muted text-xs">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="hidden lg:block">
          <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl">
            <div className="border-b border-border px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow" />
                <span className="text-xs font-bold text-text-primary uppercase tracking-widest">Live Classes — Hoy</span>
              </div>
              <span className="text-xs text-text-muted">
                {new Date().toLocaleDateString("es-AR", { weekday: "short", day: "numeric", month: "short" })}
              </span>
            </div>
            <div className="divide-y divide-border">
              {liveClasses.map((cls, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.12 }} className="px-6 py-4 flex items-center gap-4 hover:bg-surface-2 transition-colors">
                  <span className="text-xs font-mono text-text-muted w-12 shrink-0">{cls.time}</span>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${levelColors[cls.level]}`}>{cls.level}</span>
                  <span className="text-sm text-text-primary truncate flex-1">{cls.title}</span>
                  <button className="shrink-0 text-[10px] font-bold text-accent border border-accent/30 px-2.5 py-1 rounded-full hover:bg-accent-dim transition-colors">Unirse</button>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-border px-6 py-4 grid grid-cols-3 gap-4 text-center">
              {[{ value: "3", label: "Niveles" }, { value: "50+", label: "Clases/sem" }, { value: "100%", label: "En vivo" }].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-black text-accent">{s.value}</p>
                  <p className="text-[10px] text-text-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-subtle">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
      </motion.div>
    </section>
  );
}