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
    <section id="how-it-works" className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-4">✦ El proceso</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight">
            Cuatro pasos para{" "}
            <span className="text-accent">hablar inglés</span>
            {" "}con confianza.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{step.icon}</span>
                <span className="text-3xl font-black text-border leading-none">{step.number}</span>
              </div>
              <h3 className="text-text-primary font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-text-muted text-base leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}