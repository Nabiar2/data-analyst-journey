"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#30363D 1px, transparent 1px), linear-gradient(90deg, #30363D 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: copy */}
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-slow" />
              Clases en vivo todos los días
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-text-primary leading-[1.05] mb-6"
          >
            Aprendé inglés<br />
            con{" "}
            <span className="text-accent">profes reales</span>
            <br />
            en vivo
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-text-muted text-lg leading-relaxed max-w-md mb-8"
          >
            Clases grupales en vivo, chat de práctica y contenido multimedia.
            Tres niveles estructurados para llevarte del Beginner al Intermediate
            y más allá.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-10">
            <a
              href="#pricing"
              className="bg-accent hover:bg-accent-hover text-bg font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200 shadow-glow-accent-sm hover:shadow-glow-accent"
            >
              Empezar gratis →
            </a>
            <a
              href="#how-it-works"
              className="border border-border hover:border-accent/40 text-text-primary text-sm font-medium px-6 py-3 rounded-lg transition-all duration-200"
            >
              Cómo funciona
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((l) => (
                <div
                  key={l}
                  className="w-8 h-8 rounded-full bg-surface-2 border-2 border-bg flex items-center justify-center text-xs font-bold text-accent"
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm">
              <span className="text-text-primary font-semibold">+1.200</span>{" "}
              estudiantes activos
            </p>
          </motion.div>
        </div>

        {/* Right: live class card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Card header */}
            <div className="border-b border-border px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow" />
                <span className="text-xs font-semibold text-text-primary uppercase tracking-widest">
                  Live Classes — Hoy
                </span>
              </div>
              <span className="text-xs text-text-muted">
                {new Date().toLocaleDateString("es-AR", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </div>

            {/* Classes list */}
            <div className="divide-y divide-border">
              {liveClasses.map((cls, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-5 py-4 flex items-center gap-4 hover:bg-surface-2 transition-colors"
                >
                  <span className="text-xs font-mono text-text-muted w-12 shrink-0">
                    {cls.time}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${levelColors[cls.level]}`}
                  >
                    {cls.level}
                  </span>
                  <span className="text-sm text-text-primary truncate">
                    {cls.title}
                  </span>
                  <button className="ml-auto shrink-0 text-[10px] font-bold text-accent border border-accent/30 px-2.5 py-1 rounded-md hover:bg-accent-dim transition-colors">
                    Unirse
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="border-t border-border px-5 py-4 grid grid-cols-3 gap-4">
              {[
                { value: "3", label: "Niveles" },
                { value: "50+", label: "Clases/semana" },
                { value: "100%", label: "En vivo" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-lg font-black text-accent">{s.value}</p>
                  <p className="text-[10px] text-text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-subtle"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
      </motion.div>
    </section>
  );
}
