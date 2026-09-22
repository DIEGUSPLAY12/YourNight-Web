"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { Download, ChevronDown, Smartphone } from "lucide-react";

/* Variantes de animación — stagger en los elementos del hero */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Fondo decorativo: gradiente radial desde el acento */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 65% 40%, rgba(255,62,165,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Ruido sutil en el fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-0">
          {/* ── Copy ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 max-w-xl"
          >
            {/* Badge 18+ */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,197,66,0.12)",
                  border: "1px solid rgba(255,197,66,0.3)",
                  color: "#FFC542",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#FFC542] animate-pulse"
                  aria-hidden="true"
                />
                Solo para mayores de 18 años
              </span>
            </motion.div>

            {/* Titular */}
            <motion.h1 variants={itemVariants} className="text-display">
              Tu noche,{" "}
              <span className="text-gradient">registrada.</span>
              <br />
              Revívela.
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="text-subheading"
              style={{ maxWidth: "50ch" }}
            >
              YourNight es la app para grupos de amigos que quieren más que un
              chat. Rankings en directo, votación al MVP y resúmenes que duran
              para siempre.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-start gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <Button
                  href="#descarga"
                  variant="primary"
                  size="lg"
                  aria-label="Descargar YourNight APK"
                >
                  <Download size={18} aria-hidden="true" />
                  Descargar APK
                </Button>
                <p
                  className="text-xs pl-1"
                  style={{ color: "rgba(201,184,232,0.5)" }}
                >
                  <Smartphone
                    size={11}
                    className="inline mr-1"
                    aria-hidden="true"
                  />
                  Android — instalación manual. Te pedirá permiso la primera
                  vez.
                </p>
              </div>

              <Button
                href="#como-funciona"
                variant="ghost"
                size="lg"
                aria-label="Ver cómo funciona YourNight"
              >
                Cómo funciona
                <ChevronDown size={16} aria-hidden="true" />
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Visual placeholder ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex justify-center lg:justify-end"
            aria-label="Vista previa de la app (próximamente)"
          >
            {/* Marco del teléfono */}
            <div
              className="relative"
              style={{ width: "min(340px, 100%)" }}
            >
              {/* Glow detrás */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[2.5rem] blur-3xl"
                style={{ background: "rgba(255,62,165,0.2)" }}
              />

              {/* Cuerpo del teléfono */}
              <div
                className="relative rounded-[2.5rem] overflow-hidden"
                style={{
                  border: "1px solid rgba(255,62,165,0.3)",
                  background: "#1B0F2E",
                  aspectRatio: "9/19",
                  boxShadow:
                    "0 32px 80px rgba(11,0,20,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* Pantalla placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(255,62,165,0.15)" }}
                  >
                    <span
                      className="text-3xl"
                      role="img"
                      aria-label="Luna"
                    >
                      🌙
                    </span>
                  </div>
                  <div className="text-center space-y-2">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#C9B8E8" }}
                    >
                      YourNight
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(201,184,232,0.4)" }}
                    >
                      Capturas próximamente
                    </p>
                  </div>
                  {/* Barras decorativas de ranking */}
                  <div className="w-full space-y-2 mt-4">
                    {[85, 62, 48, 31].map((width, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                      >
                        <span
                          className="text-xs font-mono w-4 text-right"
                          style={{ color: "rgba(201,184,232,0.5)" }}
                        >
                          {i + 1}
                        </span>
                        <div
                          className="h-5 rounded-md"
                          style={{
                            width: `${width}%`,
                            background:
                              i === 0
                                ? "linear-gradient(90deg, #FF3EA5, #ff69b9)"
                                : "rgba(201,184,232,0.1)",
                            border:
                              i === 0
                                ? "none"
                                : "1px solid rgba(201,184,232,0.08)",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Notch */}
                <div
                  aria-hidden="true"
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full"
                  style={{ background: "#0B0014" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown
            size={20}
            style={{ color: "rgba(201,184,232,0.3)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
