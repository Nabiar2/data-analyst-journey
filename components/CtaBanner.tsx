"use client";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-accent/20 bg-surface-2 p-12 text-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-slow" />
              Hay clases en vivo ahora mismo
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
              Tu inglés no puede esperar<br />más. Empezá hoy.
            </h2>

            <p className="text-text-muted text-lg max-w-lg mx-auto mb-8">
              Más de 1.200 estudiantes ya están aprendiendo con profes reales en
              vivo. El primer paso es el más difícil, después fluye solo.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#pricing"
                className="bg-accent hover:bg-accent-hover text-bg font-bold px-8 py-3.5 rounded-lg text-sm transition-all duration-200 shadow-glow-accent"
              >
                Ver planes y precios →
              </a>
              <a
                href="https://app.skillable.tradecp.com.ar/login"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border hover:border-accent/40 text-text-primary text-sm font-medium px-8 py-3.5 rounded-lg transition-all duration-200"
              >
                Ingresar a la plataforma
              </a>
            </div>

            <p className="text-text-subtle text-xs mt-6">
              Sin tarjeta de crédito para empezar. Cancelás cuando querés.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
