"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Elegís tu nivel",
    description:
      "Hacés una prueba de diagnóstico rápida y te ubicamos en el nivel correcto: Beginner, Elementary o Intermediate.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Te sumás a clases en vivo",
    description:
      "Accedés al calendario y reservás las clases que quieras. Más de 50 opciones por semana en distintos horarios.",
    icon: "📅",
  },
  {
    number: "03",
    title: "Practicás todos los días",
    description:
      "Combinás clases en vivo con el Chat Club y el material multimedia. La práctica constante es la clave.",
    icon: "💪",
  },
  {
    number: "04",
    title: "Avanzás de nivel",
    description:
      "Completás los capítulos, obtenés tu certificado y subís al siguiente nivel. Tu progreso es visible y medible.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4 block">
            El proceso
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Cómo funciona Skillable
          </h2>
          <p className="text-text-muted text-lg max-w-lg mx-auto">
            Cuatro pasos para empezar a hablar inglés con confianza.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Step circle */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-bg border-2 border-border rounded-full flex items-center justify-center">
                <span className="text-2xl">{step.icon}</span>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center text-[9px] font-black text-bg">
                  {i + 1}
                </span>
              </div>

              <span className="text-[10px] font-black text-text-subtle tracking-widest mb-2 block">
                PASO {step.number}
              </span>
              <h3 className="text-text-primary font-bold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
