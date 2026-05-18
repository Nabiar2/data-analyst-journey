"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillableLogo from "./SkillableLogo";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Planes", href: "#pricing" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="site-wrap">
        <nav className="h-16 flex items-center justify-between">
          <a href="#hero"><SkillableLogo /></a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-text-muted hover:text-text-primary text-sm font-medium transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://app.skillable.tradecp.com.ar/login" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors">
              Iniciar sesión
            </a>
            <a href="#pricing" className="bg-accent hover:bg-accent-hover text-bg text-sm font-bold px-5 py-2.5 rounded-full transition-colors duration-200">
              Empezar gratis
            </a>
          </div>

          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-surface border-b border-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-5">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-text-muted hover:text-text-primary text-sm font-medium transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="border-t border-border pt-5 flex flex-col gap-3">
                <a href="https://app.skillable.tradecp.com.ar/login" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted text-center">Iniciar sesión</a>
                <a href="#pricing" onClick={() => setMenuOpen(false)} className="bg-accent text-bg text-sm font-bold px-5 py-3 rounded-full text-center">Empezar gratis</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}