"use client";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-accent/20 bg-surface-2 px-12 py-20 md:px-20 md:py-28 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-10">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
              Hay clases en vivo ahora mismo
            </span>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="text-text-primary">Tu inglés no puede</span><br />
              <span className="text-accent">esperar más.</span>
            </h2>

            <p className="text-text-muted text-xl max-w-xl mx-auto mb-12 leading-relaxed">
              Más de 1.200 estudiantes ya están aprendiendo con profes reales en vivo. El primer paso es el más difícil, después fluye solo.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-accent hover:bg-accent-hover text-bg font-bold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-glow-accent hover:scale-[1.02]"
              >
                Ver planes y precios →
              </a>
              <a
                href="https://app.skillable.tradecp.com.ar/login"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border hover:border-accent/40 text-text-primary text-base font-medium px-10 py-4 rounded-full transition-all duration-200"
              >
                Ingresar a la plataforma
              </a>
            </div>

            <p className="text-text-subtle text-sm mt-8">Sin tarjeta de crédito para empezar. Cancelás cuando querés.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
