"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { Download, Smartphone, Mail, CheckCircle } from "lucide-react";

export default function DownloadSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    /* Simulación — aquí conectarías con tu backend/lista de espera */
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section
      id="descarga"
      className="section"
      aria-labelledby="download-heading"
    >
      <div className="container">
        <motion.div
          className="relative rounded-3xl overflow-hidden text-center px-6 py-16 md:py-24"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          style={{
            background:
              "linear-gradient(135deg, rgba(27,15,46,0.95) 0%, rgba(11,0,20,1) 100%)",
            border: "1px solid rgba(255,62,165,0.2)",
          }}
        >
          {/* Fondo decorativo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,62,165,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-8">
            {/* Título */}
            <div>
              <h2
                id="download-heading"
                className="text-heading mb-3"
              >
                Empieza esta noche.{" "}
                <span className="text-gradient">Es gratis.</span>
              </h2>
              <p className="text-subheading">
                Descarga YourNight, crea tu grupo e invita a tus amigos. Todo
                listo en menos de dos minutos.
              </p>
            </div>

            {/* Botón descarga Android */}
            <div className="flex flex-col items-center gap-2">
              <Button
                href="#"
                variant="primary"
                size="lg"
                aria-label="Descargar YourNight APK para Android"
              >
                <Download size={20} aria-hidden="true" />
                Descargar para Android
              </Button>
              <p
                className="text-xs text-center max-w-xs"
                style={{ color: "rgba(201,184,232,0.45)" }}
              >
                <Smartphone size={11} className="inline mr-1" aria-hidden="true" />
                Instalación manual (APK). Android te pedirá permiso para
                instalar desde fuentes externas la primera vez.
              </p>
            </div>

            {/* Separador */}
            <div
              className="w-full"
              style={{ borderTop: "1px solid rgba(201,184,232,0.08)" }}
            />

            {/* Lista de espera iPhone */}
            <div className="w-full max-w-sm">
              <p
                className="text-sm font-medium mb-3 text-center"
                style={{ color: "rgba(201,184,232,0.7)" }}
              >
                ¿Tienes iPhone?
              </p>

              {!submitted ? (
                <form
                  onSubmit={handleEmailSubmit}
                  className="flex flex-col sm:flex-row gap-2"
                  aria-label="Lista de espera para iPhone"
                >
                  <label htmlFor="ios-email" className="sr-only">
                    Tu correo electrónico
                  </label>
                  <input
                    id="ios-email"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-xl px-4 py-3 text-sm outline-none"
                    style={{
                      background: "rgba(201,184,232,0.07)",
                      border: "1px solid rgba(201,184,232,0.15)",
                      color: "#C9B8E8",
                    }}
                    aria-label="Tu correo electrónico para la lista de espera de iPhone"
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="md"
                    disabled={loading}
                    aria-label="Unirme a la lista de espera para iPhone"
                  >
                    <Mail size={16} aria-hidden="true" />
                    {loading ? "Enviando…" : "Avisarme"}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl"
                  style={{
                    background: "rgba(255,197,66,0.08)",
                    border: "1px solid rgba(255,197,66,0.2)",
                  }}
                >
                  <CheckCircle size={16} style={{ color: "#FFC542" }} aria-hidden="true" />
                  <span className="text-sm" style={{ color: "#FFC542" }}>
                    ¡Apuntado! Te avisamos cuando llegue.
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
