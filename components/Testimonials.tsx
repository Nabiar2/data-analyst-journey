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
    <section id="testimonials" className="py-32 px-6 lg:px-10 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-6 block">
            ✦ Testimonios
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-text-primary tracking-tight leading-[1.05]">
            Más de 1.200 personas ya<br />
            <span className="text-accent">están aprendiendo inglés.</span>
          </h2>
          <div className="flex items-center gap-2 mt-6">
            <span className="text-amber-400 text-2xl">★★★★★</span>
            <span className="text-text-muted text-base">4.9/5 — promedio de valoraciones</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-surface border border-border rounded-2xl p-8"
            >
              <div className="flex text-amber-400 text-lg mb-5">{"★".repeat(t.stars)}</div>
              <p className="text-text-muted text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold shrink-0`}>{t.avatar}</div>
                <div>
                  <p className="text-text-primary font-bold">{t.name}</p>
                  <p className="text-text-subtle text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
