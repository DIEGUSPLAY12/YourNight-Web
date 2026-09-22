"use client";

import { motion } from "motion/react";
import { FlaskConical } from "lucide-react";

export default function SocialProof() {
  return (
    <motion.aside
      id="beta"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      aria-label="Estado de la beta"
    >
      <div className="container">
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl px-6 py-5"
          style={{
            background: "rgba(255,197,66,0.06)",
            border: "1px solid rgba(255,197,66,0.2)",
          }}
        >
          {/* Icono */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(255,197,66,0.12)",
              border: "1px solid rgba(255,197,66,0.25)",
            }}
          >
            <FlaskConical size={18} style={{ color: "#FFC542" }} aria-hidden="true" />
          </div>

          {/* Texto */}
          <div>
            <p className="text-sm font-semibold mb-0.5" style={{ color: "#FFC542" }}>
              Beta activa
            </p>
            <p className="text-sm" style={{ color: "rgba(201,184,232,0.65)" }}>
              YourNight está siendo probada en grupos reducidos para validar su
              uso real y detectar errores y bugs visuales que a veces en código
              no se ven. Tu feedback en esta fase lo cambia todo.
            </p>
          </div>

          {/* Indicador animado */}
          <div className="flex-shrink-0 sm:ml-auto flex items-center gap-2" aria-hidden="true">
            <span
              className="w-2 h-2 rounded-full bg-[#FFC542]"
              style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
            />
            <span className="text-xs font-medium" style={{ color: "rgba(255,197,66,0.7)" }}>
              En curso
            </span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
