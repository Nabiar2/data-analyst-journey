"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5" : ""}`}
      >
        <div className="wrapper flex items-center justify-between py-5">
          <a href="#" className="text-sm font-semibold tracking-widest uppercase text-[#f0ede6] hover:text-[#c8ff00] transition-colors">Braian<span className="text-[#c8ff00]">.</span></a>
          <ul className="hidden md:flex gap-8">
            {links.map(l => <li key={l.href}><a href={l.href} className="text-sm text-[#888] hover:text-[#f0ede6] transition-colors duration-200 tracking-wide">{l.label}</a></li>)}
          </ul>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm font-medium border border-white/15 rounded-full px-5 py-2 hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all duration-300">Hablemos →</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Menu">
            <span className={`block w-6 h-px bg-[#f0ede6] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-px bg-[#f0ede6] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#f0ede6] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8">
            {links.map((l, i) => <motion.a key={l.href} href={l.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }} onClick={() => setMenuOpen(false)} className="text-4xl font-bold tracking-tight hover:text-[#c8ff00] transition-colors">{l.label}</motion.a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
