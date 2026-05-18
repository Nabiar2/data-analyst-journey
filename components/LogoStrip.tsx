"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "+1.200", label: "Estudiantes activos" },
  { value: "50+", label: "Clases por semana" },
  { value: "3", label: "Niveles estructurados" },
  { value: "100%", label: "Clases en vivo" },
  { value: "4.9★", label: "Valoración promedio" },
];

export default function LogoStrip() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-2xl font-black text-accent">{stat.value}</p>
              <p className="text-xs text-text-muted mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
