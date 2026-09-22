"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ShieldCheck, UserCheck, Database } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Privacidad total",
    description:
      "Nada de lo que pasa dentro del grupo es visible fuera de él. No hay perfiles públicos, no hay feeds ni descubrimiento.",
  },
  {
    icon: UserCheck,
    title: "Solo mayores de 18",
    description:
      "La app está diseñada exclusivamente para adultos y promueve un uso responsable. Se confirma la mayoría de edad al registrarse.",
  },
  {
    icon: Database,
    title: "Tus datos, tu control",
    description:
      "Puedes ver, editar y eliminar tus datos desde los ajustes en cualquier momento. La eliminación de cuenta es permanente e inmediata.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
  },
};

export default function TrustPrivacy() {
  return (
    <section
      id="privacidad"
      className="section section-surface"
      aria-labelledby="trust-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Header — izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 id="trust-heading" className="text-heading mb-4">
              Diseñada con la{" "}
              <span className="text-gradient">privacidad</span>{" "}
              por delante
            </h2>
            <p className="text-subheading">
              YourNight no es una red social. Es un espacio cerrado para tus
              amigos, sin publicidad, sin análisis de comportamiento y sin
              compartir datos con terceros.
            </p>
          </motion.div>

          {/* Puntos — derecha */}
          <motion.div
            className="flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  {/* Icono */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                    style={{
                      background: "rgba(255,62,165,0.1)",
                      border: "1px solid rgba(255,62,165,0.2)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#FF3EA5" }} aria-hidden="true" />
                  </div>

                  {/* Texto */}
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{
                        color: "#C9B8E8",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {point.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(201,184,232,0.6)" }}
                    >
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Link a política de privacidad */}
            <p
              className="text-xs pt-2"
              style={{ color: "rgba(201,184,232,0.4)" }}
            >
              Más detalles en nuestra{" "}
            <Link
                href="/privacy"
                className="underline underline-offset-2 transition-colors duration-150"
                style={{ color: "rgba(255,62,165,0.7)" }}
              >
                política de privacidad
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
