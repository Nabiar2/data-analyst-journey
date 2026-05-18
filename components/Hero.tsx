"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="hero" className="w-full bg-bg relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#30363D 1px, transparent 1px), linear-gradient(90deg, #30363D 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.07] blur-[140px] pointer-events-none" />

      <div className="site-wrap w-full py-24 md:py-36 flex flex-col items-center text-center">
        <motion.div {...fadeUp(0)}>
          {/* Fíjate que aquí abajo cambié px-4 por px-6 👇 */}
          <span className="inline-flex items-center gap-1 bg-accent-dim border border-accent/20 text-accent text-xs font-semibold w-72 justify-center py-4 rounded-full mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
            Clases en vivo todos los días
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-text-primary leading-[1.08] mb-6 max-w-3xl">
          Aprendé inglés con<br />
          <span className="text-accent">profes reales</span> en vivo
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-text-muted text-lg leading-relaxed max-w-xl mb-10">
          Clases grupales en vivo, chat de práctica y contenido multimedia. Tres niveles estructurados para llevarte del Beginner al Intermediate y más allá.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="w-full max-w-xs mb-3">
          <a
            href="#pricing"
            className="block w-full bg-accent hover:bg-accent-hover text-bg font-black text-base uppercase tracking-wider py-4 rounded-2xl transition-all duration-200 shadow-glow-accent-sm hover:shadow-glow-accent hover:scale-[1.02]"
          >
            Empezar ahora
          </a>
        </motion.div>

        <motion.p {...fadeUp(0.35)} className="text-text-subtle text-sm mb-12">
          Tu carrera comienza aquí
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex items-center gap-4 mb-10">
          <div className="flex -space-x-3">
            {["A","B","C","D","E"].map((l) => (
              <div key={l} className="w-10 h-10 rounded-full bg-surface-2 border-2 border-bg flex items-center justify-center text-xs font-bold text-accent">{l}</div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-text-primary font-bold text-sm">+1.200 estudiantes activos</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-amber-400 text-sm">★★★★★</span>
              <span className="text-text-muted text-xs">4.9/5</span>
            </div>
          </div>
        </motion.div>

        <motion.a {...fadeUp(0.45)} href="#how-it-works" className="text-text-muted hover:text-text-primary text-sm underline underline-offset-4 transition-colors">
          Cómo funciona
        </motion.a>
      </div>
    </section>
  );
}
