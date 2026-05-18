"use client";
import { motion } from "framer-motion";

// TODO: Reemplazar precios y features con los planes reales
const plans = [
  {
    name: "Starter",
    price: "XX",
    period: "/ mes",
    description: "Para empezar a tu ritmo con material de estudio.",
    badge: null,
    features: [
      "Acceso a contenido multimedia",
      "Material de estudio por nivel",
      "Comunidad de estudiantes",
      "1 clase en vivo por semana",
      "Seguimiento de progreso",
    ],
    excluded: ["Chat Club", "Clases ilimitadas", "Certificaciones"],
    cta: "Empezar ahora",
    highlighted: false,
  },
  {
    name: "Live",
    price: "XX",
    period: "/ mes",
    description: "El plan más completo para progresar rápido.",
    badge: "Más popular",
    features: [
      "Todo lo de Starter",
      "Clases en vivo ilimitadas",
      "Todos los niveles (B/E/I)",
      "Chat Club incluido",
      "Certificación por nivel",
      "Acceso prioritario a horarios",
    ],
    excluded: [],
    cta: "Empezar con Live",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "XX",
    period: "/ mes",
    description: "Para los que quieren resultados acelerados.",
    badge: null,
    features: [
      "Todo lo de Live",
      "Sesiones 1 a 1 con profe",
      "Feedback personalizado",
      "Acceso anticipado a nuevos niveles",
      "Soporte prioritario",
    ],
    excluded: [],
    cta: "Hablar con ventas",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4 block">
            Planes
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Elegí el plan que se adapta<br />a tus objetivos
          </h2>
          <p className="text-text-muted text-lg max-w-lg mx-auto">
            Sin contratos. Cancelás cuando querés. Todos los planes incluyen acceso inmediato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 border ${
                plan.highlighted
                  ? "bg-surface-2 border-accent shadow-glow-accent"
                  : "bg-surface border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-bg text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-text-primary font-black text-xl mb-1">{plan.name}</h3>
                <p className="text-text-muted text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-text-subtle text-sm font-medium">$</span>
                  <span className="text-4xl font-black text-text-primary">{plan.price}</span>
                  <span className="text-text-muted text-sm mb-1">{plan.period}</span>
                </div>
              </div>

              <a
                href="https://app.skillable.tradecp.com.ar/login"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center text-sm font-bold py-3 rounded-lg mb-6 transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-accent hover:bg-accent-hover text-bg shadow-glow-accent-sm"
                    : "bg-surface-2 hover:bg-border text-text-primary border border-border"
                }`}
              >
                {plan.cta}
              </a>

              <div className="space-y-2.5">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <span className="text-accent mt-0.5 text-sm shrink-0">✓</span>
                    <span className="text-text-muted text-sm">{feat}</span>
                  </div>
                ))}
                {plan.excluded.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <span className="text-text-subtle mt-0.5 text-sm shrink-0">✕</span>
                    <span className="text-text-subtle text-sm line-through">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-subtle text-xs mt-8"
        >
          ¿Tenés dudas sobre qué plan elegir?{" "}
          <a href="#faq" className="text-accent hover:underline">
            Chequeá el FAQ
          </a>{" "}
          o contactanos.
        </motion.p>
      </div>
    </section>
  );
}
