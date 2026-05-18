"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎥",
    title: "Clases en vivo diarias",
    description:
      "Más de 50 clases grupales por semana con profes reales. Elegís el horario que mejor se adapte a vos.",
  },
  {
    icon: "📊",
    title: "3 niveles estructurados",
    description:
      "Beginner, Elementary e Intermediate. Un camino claro con capítulos progresivos y certificación al finalizar.",
  },
  {
    icon: "💬",
    title: "Chat Club",
    description:
      "Practicá inglés con otros estudiantes en debates guiados. La mejor forma de ganar fluidez y confianza.",
  },
  {
    icon: "🎬",
    title: "Contenido multimedia",
    description:
      "Videos, ejercicios y material de estudio disponibles 24/7. Reforzá lo aprendido en clase a tu ritmo.",
  },
  {
    icon: "📈",
    title: "Seguimiento de progreso",
    description:
      "Visualizá tu avance por nivel y capítulo. Sabés exactamente dónde estás y qué te falta completar.",
  },
  {
    icon: "🏆",
    title: "Certificación por nivel",
    description:
      "Al completar cada nivel obtenés un certificado. Un logro concreto para sumar a tu CV o LinkedIn.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4 block">
            Por qué Skillable
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Todo lo que necesitás<br />para aprender inglés de verdad
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            No es un curso grabado más. Es una academia viva con profes, comunidad y estructura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group bg-surface hover:bg-surface-2 border border-border hover:border-accent/30 rounded-xl p-6 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feat.icon}</div>
              <h3 className="text-text-primary font-bold text-lg mb-2">
                {feat.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
