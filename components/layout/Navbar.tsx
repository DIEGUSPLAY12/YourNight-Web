"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "motion/react";
import Button from "@/components/ui/Button";
import { Download, Menu, X, Moon } from "lucide-react";

const navLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Funciones", href: "#funciones" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  /* Detectar scroll para cambiar estilo del nav */
  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 40));
    return () => unsub();
  }, [scrollY]);

  /* Cerrar menú móvil al hacer click en un enlace */
  function handleLinkClick() {
    setMobileOpen(false);
  }

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? "rgba(11,0,20,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(201,184,232,0.08)"
          : "1px solid transparent",
        transitionProperty: "background, border-color, backdrop-filter",
        transitionDuration: "300ms",
        transitionTimingFunction: "ease",
      }}
    >
      <div className="container">
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg"
            style={{ fontFamily: "var(--font-display)", color: "#C9B8E8" }}
            aria-label="YourNight — Ir al inicio"
          >
            <Moon size={20} style={{ color: "#FF3EA5" }} aria-hidden="true" />
            YourNight
          </Link>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(201,184,232,0.65)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop + hamburger mobile */}
          <div className="flex items-center gap-3">
            <Button
              href="#descarga"
              variant="primary"
              size="sm"
              aria-label="Descargar YourNight"
              className="hidden md:inline-flex"
            >
              <Download size={14} aria-hidden="true" />
              Descargar
            </Button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-150"
              style={{
                background: "rgba(201,184,232,0.07)",
                color: "#C9B8E8",
              }}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Menú móvil */}
      <motion.div
        id="mobile-nav"
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        style={{ overflow: "hidden" }}
        aria-hidden={!mobileOpen}
      >
        <div
          className="container pb-6 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(201,184,232,0.08)" }}
        >
          <ul className="flex flex-col gap-1 pt-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-2 text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(201,184,232,0.7)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href="#descarga"
            variant="primary"
            size="md"
            aria-label="Descargar YourNight"
          >
            <Download size={15} aria-hidden="true" />
            Descargar APK
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
