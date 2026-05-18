import SkillableLogo from "./SkillableLogo";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Planes", href: "#pricing" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const platformLinks = [
  { label: "Ingresar", href: "https://app.skillable.tradecp.com.ar/login" },
  { label: "Registrarse", href: "https://app.skillable.tradecp.com.ar/login" },
  { label: "Live Classes", href: "https://app.skillable.tradecp.com.ar/home" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <SkillableLogo />
            <p className="text-text-muted text-sm leading-relaxed mt-4 max-w-xs">
              Academia de inglés online con clases en vivo, profes reales y
              comunidad activa. Tres niveles estructurados para llevarte del
              cero al inglés fluido.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">
              Plataforma
            </h4>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-subtle text-xs">
            © {new Date().getFullYear()} Skillable Academy. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-subtle hover:text-text-muted text-xs transition-colors">
              Términos y condiciones
            </a>
            <a href="#" className="text-text-subtle hover:text-text-muted text-xs transition-colors">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
