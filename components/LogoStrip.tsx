"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "+1.200", label: "Estudiantes activos" },
  { value: "50+", label: "Clases por semana" },
  { value: "3", label: "Niveles" },
  { value: "100%", label: "Clases en vivo" },
  { value: "4.9★", label: "Valoración promedio" },
];

export default function LogoStrip() {
  return (
    <section className="bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-5xl md:text-6xl font-black text-accent leading-none">{stat.value}</p>
              <p className="text-text-muted text-sm font-medium mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
