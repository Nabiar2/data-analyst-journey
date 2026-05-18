"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Sofía M.", role: "Estudiante Elementary", avatar: "S", color: "bg-violet-500", quote: "Empecé sin saber nada y en tres meses ya puedo mantener una conversación básica. Las clases en vivo marcan la diferencia, tenés que hablar sí o sí.", stars: 5 },
  { name: "Lucas R.", role: "Estudiante Intermediate", avatar: "L", color: "bg-emerald-500", quote: "Lo que más me gustó es la cantidad de clases disponibles. Si te perdés una, tenés 10 más en el día. Y los profes son buenísimos, te corrigen con cariño.", stars: 5 },
  { name: "Valentina G.", role: "Estudiante Beginner", avatar: "V", color: "bg-amber-500", quote: "Intenté aprender inglés mil veces con apps y no llegué a ningún lado. Acá con el Chat Club y las clases grupales finalmente siento que avanzo de verdad.", stars: 5 },
  { name: "Martín F.", role: "Estudiante Elementary", avatar: "M", color: "bg-sky-500", quote: "La estructura por capítulos es genial porque siempre sabés qué viene después. Y poder ver tu porcentaje de avance te da un montón de motivación.", stars: 5 },
  { name: "Camila T.", role: "Estudiante Intermediate", avatar: "C", color: "bg-rose-500", quote: "Trabajo full time y el hecho de que haya clases desde la mañana hasta la noche me permitió encajar Skillable en mi rutina sin problemas.", stars: 5 },
  { name: "Agustín P.", role: "Estudiante Beginner", avatar: "A", color: "bg-indigo-500", quote: "La inversión vale completamente. Pagás por tener acceso a profes reales y una comunidad. No es un YouTube glorificado, es una academia de verdad.", stars: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-4">✦ Testimonios</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight">
            Más de 1.200 personas ya{" "}
            <span className="text-accent">están aprendiendo inglés.</span>
          </h2>
          <div className="flex items-center gap-3 mt-5">
            <span className="text-amber-400 text-lg">★★★★★</span>
            <span className="text-text-muted text-sm">4.9/5 — promedio de valoraciones</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="bg-bg border border-border rounded-2xl p-8">
              <div className="flex text-amber-400 text-base mb-5">{"★".repeat(t.stars)}</div>
              <p className="text-text-muted text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>{t.avatar}</div>
                <div>
                  <p className="text-text-primary font-semibold text-sm">{t.name}</p>
                  <p className="text-text-subtle text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}