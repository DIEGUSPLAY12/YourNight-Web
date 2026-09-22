"use client";

import { motion } from "motion/react";
import { ImageOff } from "lucide-react";

/* Placeholder para 5 capturas de pantalla */
const placeholders = [
  "Contador de consumiciones",
  "Ranking en directo",
  "Votación al MVP",
  "Resumen del evento",
  "Clasificación mensual",
];

export default function Screenshots() {
  return (
    <section
      id="capturas"
      className="w-full flex flex-col items-center"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
      aria-labelledby="screenshots-heading"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        {/* Header */}
        <motion.div
          className="w-full"
          style={{ textAlign: "center", margin: "0 auto", maxWidth: "42rem", marginBottom: "80px" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 id="screenshots-heading" className="text-heading mb-3">
            La app en{" "}
            <span className="text-gradient">acción</span>
          </h2>
          <p className="text-subheading">
            Las capturas de pantalla reales estarán disponibles próximamente.
          </p>
        </motion.div>

        {/* Galería horizontal */}
        {/* TODO: Reemplazar los placeholders por capturas reales del diseño de Stitch AI */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {placeholders.map((label, i) => (
            <motion.figure
              key={label}
              className="flex-shrink-0 snap-start"
              style={{ width: "min(240px, 70vw)" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {/* Marco del teléfono */}
              <div
                className="rounded-[1.75rem] overflow-hidden mb-3 flex items-center justify-center flex-col gap-3"
                style={{
                  aspectRatio: "9/19",
                  background: "#1B0F2E",
                  border: "1px dashed rgba(201,184,232,0.2)",
                }}
                aria-label={`Captura pendiente: ${label}`}
              >
                <ImageOff
                  size={24}
                  style={{ color: "rgba(201,184,232,0.2)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs text-center px-4"
                  style={{ color: "rgba(201,184,232,0.25)" }}
                >
                  Próximamente
                </span>
              </div>
              <figcaption
                className="text-xs text-center"
                style={{ color: "rgba(201,184,232,0.45)" }}
              >
                {label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
