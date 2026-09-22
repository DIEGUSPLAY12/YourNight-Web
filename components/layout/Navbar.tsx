"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
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
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollY } = useScroll();

  /* Reducir el header levemente al hacer scroll */
  const headerWidth = useTransform(scrollY, [0, 100], ["100%", "95%"]);
  const headerY = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    /* Intersection Observer para el ScrollSpy */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleLinkClick() {
    setMobileOpen(false);
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.header
        role="banner"
        className="pointer-events-auto flex flex-col w-full max-w-5xl"
        style={{ width: headerWidth, y: headerY }}
      >
        <div
          className="flex items-center justify-between h-[60px] px-5 md:px-8 rounded-full transition-all duration-300 ease-out"
          style={{
            background: "rgba(11, 0, 20, 0.65)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(201, 184, 232, 0.15)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-[1.05rem] shrink-0"
            style={{ fontFamily: "var(--font-display)", color: "#C9B8E8" }}
            aria-label="YourNight — Ir al inicio"
            onClick={() => setMobileOpen(false)}
          >
            <Moon size={20} style={{ color: "#FF3EA5" }} aria-hidden="true" />
            YourNight
          </Link>

          {/* Links desktop con animacion Apple */}
          <nav
            className="hidden md:flex items-center gap-2"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-out active:scale-95"
                  style={{
                    color: isActive ? "#FFF" : "rgba(201,184,232,0.65)",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(255,62,165,0.15)",
                        border: "1px solid rgba(255,62,165,0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA desktop + hamburger mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <Button
              href="#descarga"
              variant="primary"
              size="sm"
              aria-label="Descargar YourNight"
              className="hidden md:inline-flex !rounded-full"
            >
              <Download size={14} aria-hidden="true" />
              Descargar
            </Button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ease-out active:scale-95"
              style={{
                background: mobileOpen ? "rgba(255,62,165,0.15)" : "rgba(201,184,232,0.08)",
                color: mobileOpen ? "#FF3EA5" : "#C9B8E8",
                border: mobileOpen ? "1px solid rgba(255,62,165,0.3)" : "1px solid transparent",
              }}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Menú móvil flotante */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="mt-3 overflow-hidden"
            >
              <div
                className="rounded-3xl p-5 flex flex-col gap-4"
                style={{
                  background: "rgba(11, 0, 20, 0.85)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(201, 184, 232, 0.15)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                }}
              >
                <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="flex items-center px-4 py-3 rounded-2xl text-base font-medium transition-colors"
                        style={{
                          background: isActive ? "rgba(255,62,165,0.1)" : "transparent",
                          color: isActive ? "#FF3EA5" : "rgba(201,184,232,0.8)",
                        }}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </nav>
                <div className="pt-4 mt-2" style={{ borderTop: "1px solid rgba(201,184,232,0.1)" }}>
                  <Button
                    href="#descarga"
                    variant="primary"
                    size="md"
                    className="w-full !rounded-2xl"
                    aria-label="Descargar YourNight"
                    onClick={handleLinkClick}
                  >
                    <Download size={16} aria-hidden="true" />
                    Descargar APK
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
