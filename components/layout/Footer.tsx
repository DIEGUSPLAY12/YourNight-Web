import Link from "next/link";
import { Download, Moon } from "lucide-react";
import Button from "@/components/ui/Button";

const sectionLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Funciones", href: "#funciones" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const legalLinks = [
  { label: "Política de privacidad", href: "/privacy" },
  { label: "Términos de uso", href: "/terms" },
  { label: "Eliminar cuenta", href: "/delete-account" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{ borderTop: "1px solid rgba(201,184,232,0.08)" }}
      className="section-surface"
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg w-fit"
              style={{ fontFamily: "var(--font-display)", color: "#C9B8E8" }}
              aria-label="YourNight — Inicio"
            >
              <Moon size={18} style={{ color: "#FF3EA5" }} aria-hidden="true" />
              YourNight
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(201,184,232,0.5)" }}
            >
              La app para grupos de amigos que quieren registrar, competir y
              revivir sus noches.
            </p>
            <Button
              href="#descarga"
              variant="primary"
              size="sm"
              className="w-fit mt-2"
              aria-label="Descargar YourNight"
            >
              <Download size={13} aria-hidden="true" />
              Descargar
            </Button>
          </div>

          {/* Secciones */}
          <nav aria-label="Navegación por secciones">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "rgba(201,184,232,0.35)" }}
            >
              App
            </p>
            <ul className="flex flex-col gap-2.5">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(201,184,232,0.55)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Navegación legal">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "rgba(201,184,232,0.35)" }}
            >
              Legal
            </p>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(201,184,232,0.55)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(201,184,232,0.06)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(201,184,232,0.3)" }}
          >
            &copy; {year} YourNight. Todos los derechos reservados.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(201,184,232,0.25)" }}
          >
            Solo para mayores de 18 años.
          </p>
        </div>
      </div>
    </footer>
  );
}
