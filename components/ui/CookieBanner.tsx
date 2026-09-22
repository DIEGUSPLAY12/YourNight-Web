"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const COOKIE_KEY = "yn-cookies-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(COOKIE_KEY);
      if (!accepted) setVisible(true);
    } catch {
      /* localStorage no disponible (modo privado estricto) */
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(COOKIE_KEY, "true");
    } catch {
      /* silencia el error */
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-label="Aviso de cookies"
          aria-live="polite"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50"
        >
          <div
            className="rounded-2xl p-5 flex flex-col gap-4"
            style={{
              background: "rgba(27,15,46,0.96)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(201,184,232,0.12)",
              boxShadow: "0 16px 48px rgba(11,0,20,0.6)",
            }}
          >
            {/* Texto */}
            <div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "#C9B8E8", fontFamily: "var(--font-display)" }}
              >
                Sobre las cookies
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(201,184,232,0.55)" }}>
                Esta web no usa cookies de terceros ni herramientas de
                seguimiento. Solo usamos cookies técnicas necesarias para que
                la web funcione correctamente. Más información en nuestra{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 transition-colors duration-150"
                  style={{ color: "rgba(255,62,165,0.8)" }}
                >
                  política de privacidad
                </Link>
                .
              </p>
            </div>

            {/* Botón */}
            <button
              type="button"
              onClick={accept}
              className="w-full py-2.5 rounded-xl text-sm font-semibold active:scale-[0.97]"
              style={{
                background: "#FF3EA5",
                color: "white",
                transition: "opacity 150ms ease, transform 150ms ease",
              }}
              aria-label="Aceptar el uso de cookies técnicas"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
