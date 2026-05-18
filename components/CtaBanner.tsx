"use client";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-accent/20 bg-bg px-10 py-20 md:px-16 md:py-24 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-slow" />
              Hay clases en vivo ahora mismo
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight mb-5">
              Tu inglés no puede esperar.<br />
              <span className="text-accent">Empezá hoy.</span>
            </h2>

            <p className="text-text-muted text-lg leading-relaxed max-w-sm mx-auto mb-10">
              Más de 1.200 estudiantes ya están aprendiendo con profes reales en vivo.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#pricing" className="bg-accent hover:bg-accent-hover text-bg font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-glow-accent">
                Ver planes y precios →
              </a>
              <a href="https://app.skillable.tradecp.com.ar/login" target="_blank" rel="noopener noreferrer"
                className="border border-border hover:border-accent/40 text-text-primary text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200">
                Ingresar a la plataforma
              </a>
            </div>

            <p className="text-text-subtle text-xs mt-8">Sin tarjeta de crédito. Cancelás cuando querés.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}