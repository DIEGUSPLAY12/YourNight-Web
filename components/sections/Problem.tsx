"use client";

import { motion } from "motion/react";
import { MessageSquareX, Trophy, ImageOff } from "lucide-react";

const painPoints = [
  {
    icon: MessageSquareX,
    title: "El contenido se pierde en el chat",
    description:
      "Las fotos, los momentos y las bromas quedan enterradas entre memes y conversaciones. Al día siguiente no encuentras nada.",
  },
  {
    icon: Trophy,
    title: "Sin forma de decidir quién ganó",
    description:
      "¿Quién fue el más loco de la noche? Cada uno tiene su versión y la discusión no lleva a ningún lado.",
  },
  {
    icon: ImageOff,
    title: "Las fotos quedan dispersas",
    description:
      "Cada uno las sube donde quiere: Stories, WhatsApp, cámara del móvil. No hay un lugar donde estén todas juntas.",
  },
];

/* Variantes de animación */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
  },
};

export default function Problem() {
  return (
    <section
      id="el-problema"
      className="w-full flex flex-col items-center"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
      aria-labelledby="problem-heading"
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
          <h2 id="problem-heading" className="text-heading mb-4">
            ¿Qué pasa después de una noche{" "}
            <span className="text-gradient">sin YourNight?</span>
          </h2>
          <p className="text-subheading">
            Las salidas con amigos son para recordarlas. Pero sin una herramienta
            pensada para eso, los recuerdos se evaporan.
          </p>
        </motion.div>

        {/* Pain points grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.article
                key={point.title}
                variants={cardVariants}
                className="flex flex-col items-center text-center p-8 md:p-10 rounded-3xl h-full hover-glow group"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  transition: "border-color 220ms, box-shadow 220ms"
                }}
              >
                {/* Icono */}
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{
                    backgroundColor: "rgba(255,62,165,0.1)",
                    color: "#FF3EA5",
                    border: "1px solid rgba(255,62,165,0.2)",
                    transition: "background 220ms, border-color 220ms",
                  }}
                >
                  <Icon
                    size={28}
                    aria-hidden="true"
                  />
                </div>

                {/* Contenido */}
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: "#C9B8E8", fontFamily: "var(--font-display)" }}
                >
                  {point.title}
                </h3>
                <p
                  className="text-base md:text-lg leading-relaxed flex-1"
                  style={{ color: "rgba(201,184,232,0.6)" }}
                >
                  {point.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
