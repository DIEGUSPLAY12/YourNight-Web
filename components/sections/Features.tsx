"use client";

import { motion } from "motion/react";
import {
  Lock,
  Clock,
  Zap,
  TrendingUp,
  Star,
  Award,
  Camera,
  FileText,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Grupos privados",
    description: "Solo entran los que tú invitas. Sin registros públicos ni perfiles visibles.",
    size: "normal",
    accent: false,
  },
  {
    icon: Clock,
    title: "Eventos con horario",
    description: "El evento se abre y se cierra solo según el horario. Sin gestiones manuales.",
    size: "normal",
    accent: false,
  },
  {
    icon: Zap,
    title: "Contador con un toque",
    description: "Registra consumiciones al instante, incluso sin conexión. Los datos se sincronizan cuando vuelves a tener red.",
    size: "wide",
    accent: true,
  },
  {
    icon: TrendingUp,
    title: "Ranking en directo",
    description: "Todos ven la clasificación actualizada en tiempo real durante el evento.",
    size: "normal",
    accent: false,
  },
  {
    icon: Star,
    title: "Votación secreta al MVP",
    description: "Cada uno vota en privado. Los resultados se revelan a la vez al cerrar el evento.",
    size: "normal",
    accent: false,
  },
  {
    icon: Award,
    title: "Clasificación mensual",
    description: "Los puntos de cada evento se acumulan. Al cerrar el mes, se publica el rey del mes.",
    size: "tall",
    accent: false,
  },
  {
    icon: Camera,
    title: "Fotos del evento",
    description: "Sube y comparte las fotos de la noche, todas en un solo lugar.",
    size: "normal",
    accent: false,
  },
  {
    icon: FileText,
    title: "Resúmenes automáticos",
    description: "Al terminar el evento y el mes, la app genera un resumen completo sin que hagas nada.",
    size: "normal",
    accent: false,
  },
  {
    icon: MessageCircle,
    title: "Chat de grupo",
    description: "Comunícate con tu grupo directamente dentro de la app.",
    size: "normal",
    accent: false,
  },
];

/* Variantes */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
  },
};

export default function Features() {
  return (
    <section
      id="funciones"
      className="section"
      aria-labelledby="features-heading"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 id="features-heading" className="text-heading mb-4">
            Todo lo que incluye{" "}
            <span className="text-gradient">la app</span>
          </h2>
          <p className="text-subheading">
            Cada función está pensada para una noche real con amigos reales.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isAccent = feature.accent;
            const isWide = feature.size === "wide";

            return (
              <motion.article
                key={feature.title}
                variants={cardVariants}
                className={`group relative rounded-2xl p-6 overflow-hidden transition-all duration-[220ms] ${
                  isWide ? "sm:col-span-2" : ""
                }`}
                style={{
                  background: isAccent
                    ? "linear-gradient(135deg, rgba(255,62,165,0.15) 0%, rgba(255,197,66,0.08) 100%)"
                    : i % 4 === 0
                    ? "rgba(37, 22, 69, 0.6)"
                    : "rgba(27,15,46,0.8)",
                  border: isAccent
                    ? "1px solid rgba(255,62,165,0.3)"
                    : "1px solid rgba(201,184,232,0.07)",
                  cursor: "default",
                }}
              >
                {/* Glow hover — solo en desktop */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: isAccent
                      ? "radial-gradient(circle at 50% 0%, rgba(255,62,165,0.12), transparent 70%)"
                      : "radial-gradient(circle at 50% 0%, rgba(201,184,232,0.04), transparent 70%)",
                  }}
                />

                {/* Icono */}
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                  style={{
                    background: isAccent
                      ? "rgba(255,62,165,0.2)"
                      : "rgba(201,184,232,0.07)",
                    border: isAccent
                      ? "1px solid rgba(255,62,165,0.3)"
                      : "1px solid rgba(201,184,232,0.1)",
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: isAccent ? "#FF3EA5" : "#FFC542" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Contenido */}
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{
                    color: "#C9B8E8",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(201,184,232,0.55)" }}
                >
                  {feature.description}
                </p>

                {/* Etiqueta "Destacado" en la card acento */}
                {isAccent && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(255,62,165,0.15)",
                      border: "1px solid rgba(255,62,165,0.3)",
                      color: "#FF3EA5",
                    }}
                  >
                    Clave
                  </span>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
