"use client";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Elegís tu nivel", description: "Hacés una prueba de diagnóstico rápida y te ubicamos en el nivel correcto: Beginner, Elementary o Intermediate.", icon: "🎯" },
  { number: "02", title: "Te sumás a clases en vivo", description: "Accedés al calendario y reservás las clases que quieras. Más de 50 opciones por semana en distintos horarios.", icon: "📅" },
  { number: "03", title: "Practicás todos los días", description: "Combinás clases en vivo con el Chat Club y el material multimedia. La práctica constante es la clave.", icon: "💪" },
  { number: "04", title: "Avanzás de nivel", description: "Completás los capítulos, obtenés tu certificado y subís al siguiente nivel. Tu progreso es visible y medible.", icon: "🚀" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 lg:px-10 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-6 block">
            ✦ El proceso
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-text-primary tracking-tight leading-[1.05]">
            Cuatro pasos para{" "}
            <span className="text-accent">hablar inglés</span>
            <br />con confianza.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{step.icon}</span>
                <span className="text-5xl font-black text-border">{step.number}</span>
              </div>
              <h3 className="text-text-primary font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-text-muted text-base leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
