"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "¿Necesito tener conocimientos previos de inglés?", answer: "No. El nivel Beginner está diseñado para personas que arrancan desde cero. Al inscribirte hacés una prueba de diagnóstico rápida y te ubicamos en el nivel que te corresponde." },
  { question: "¿Qué pasa si no puedo asistir a una clase en vivo?", answer: "No hay problema. Hay más de 50 clases por semana en distintos horarios. Si te perdés una, podés sumarte a otra clase del mismo capítulo en otro momento del día o de la semana." },
  { question: "¿Cuántas horas por semana tengo que dedicarle?", answer: "Con 3 a 5 horas semanales ya vas a notar avances claros. La recomendación es 2-3 clases en vivo por semana más un poco de tiempo en el Chat Club y el material multimedia." },
  { question: "¿Puedo cambiar de plan en cualquier momento?", answer: "Sí. Podés subir o bajar de plan cuando querás. Si upgradeas a mitad del mes, el cambio se aplica de forma proporcional. Si cancelás, seguís teniendo acceso hasta el fin del período pago." },
  { question: "¿Los profes son nativos o hablan español?", answer: "Los profes son bilingües y con experiencia en enseñanza. Las clases se dictan progresivamente más en inglés a medida que avanzás de nivel, pero siempre hay soporte en español cuando lo necesitás." },
  { question: "¿Qué es el Chat Club?", answer: "El Chat Club es un espacio de práctica de conversación en inglés moderado por un profe. Se trabajan temas cotidianos, jerga, pronunciación y expresiones. Está pensado para ganar fluidez." },
  { question: "¿Las certificaciones tienen validez oficial?", answer: "Las certificaciones son emitidas por Skillable Academy. No son un examen internacional como IELTS o TOEFL, pero son un reconocimiento formal de tu nivel que podés incluir en tu CV o LinkedIn." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-8 py-6 text-left group">
        <span className="text-text-primary font-medium text-base leading-relaxed group-hover:text-accent transition-colors">{q}</span>
        <span className={`text-accent text-xl shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="text-text-muted text-base leading-relaxed pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="w-full bg-bg py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-4">✦ Preguntas frecuentes</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">¿Tenés dudas?</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-surface border border-border rounded-2xl px-8 divide-y divide-border">
          {faqs.map((faq) => <FAQItem key={faq.question} q={faq.question} a={faq.answer} />)}
        </motion.div>
      </div>
    </section>
  );
}