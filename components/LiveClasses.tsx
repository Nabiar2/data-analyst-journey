"use client";
import { motion } from "framer-motion";

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

export default function LiveClasses() {
  return (
    <section className="w-full bg-surface border-y border-border py-16 md:py-20">
      <div className="site-wrap">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-center text-text-muted text-sm font-semibold uppercase tracking-widest mb-6">
            Explorá nuestras clases en vivo de hoy
          </p>

          <div className="bg-bg border border-border rounded-2xl overflow-hidden shadow-xl">
            <div className="border-b border-border px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow" />
                <span className="text-sm font-bold text-text-primary uppercase tracking-widest">Live Classes — Hoy</span>
              </div>
              <span className="text-xs text-text-muted bg-surface-2 px-3 py-1 rounded-full">
                {new Date().toLocaleDateString("es-AR", { weekday: "short", day: "numeric", month: "short" })}
              </span>
            </div>

            <div className="divide-y divide-border">
              {liveClasses.map((cls, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="px-6 py-4 flex items-center gap-4 hover:bg-surface-2 transition-colors"
                >
                  <span className="text-sm font-mono text-text-muted w-14 shrink-0">{cls.time}</span>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${levelColors[cls.level]}`}>{cls.level}</span>
                  <span className="text-sm text-text-primary truncate flex-1">{cls.title}</span>
                  <button className="shrink-0 text-xs font-bold text-accent border border-accent/30 px-3 py-1.5 rounded-full hover:bg-accent-dim transition-colors">
                    Unirse
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border px-6 py-5 grid grid-cols-3 gap-4">
              {[
                { value: "3", label: "Niveles" },
                { value: "50+", label: "Clases/semana" },
                { value: "100%", label: "En vivo" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-black text-accent">{s.value}</p>
                  <p className="text-xs text-text-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
