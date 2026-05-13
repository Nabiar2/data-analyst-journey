"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="wrapper py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[#2a2a2a] tracking-widest">© 2025 Braian Nabiar — Data Analyst</span>
        <motion.a href="#hero" whileHover={{ y: -2 }} className="text-xs text-[#2a2a2a] hover:text-[#c8ff00] transition-colors tracking-wide">↑ Volver arriba</motion.a>
      </div>
    </footer>
  );
}
