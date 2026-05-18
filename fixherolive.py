#!/usr/bin/env python3
import os, base64

BASE = os.path.expanduser("~/data-analyst-journey")

files = {}

files["app/page.tsx"] = """import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LiveClasses from "@/components/LiveClasses";
import LogoStrip from "@/components/LogoStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LiveClasses />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
"""

files["components/Hero.tsx"] = """"use client";
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
          <span className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-8">
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
            Empezar gratis
          </a>
        </motion.div>

        <motion.p {...fadeUp(0.35)} className="text-text-subtle text-sm mb-12">
          (Tu primera clase de prueba es gratis)
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
"""

files["components/LiveClasses.tsx"] = """"use client";
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
"""

for rel_path, content in files.items():
    full_path = os.path.join(BASE, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"✓ {rel_path}")

print("\n¡Listo! Ahora corré:")
print("  cd ~/data-analyst-journey")
print("  git add -A && git commit -m 'fix: centered hero + LiveClasses section' && git push origin claude/skillable-landing-page-ssgoP")
