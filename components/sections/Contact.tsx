"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "TU_ACCESS_KEY_WEB3FORMS", // ← Reemplaza con tu key
          subject: `Mensaje desde YourNight Web — ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputBase = {
    background: "rgba(201,184,232,0.05)",
    border: "1px solid rgba(201,184,232,0.12)",
    color: "#C9B8E8",
    borderRadius: "10px",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    fontFamily: "var(--font-body)",
    transition: "border-color 160ms, box-shadow 160ms",
  } as React.CSSProperties;

  return (
    <section
      id="contacto"
      className="section section-surface"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 id="contact-heading" className="text-heading mb-3">
              ¿Tienes alguna{" "}
              <span className="text-gradient">duda?</span>
            </h2>
            <p className="text-subheading">
              Escríbenos y te respondemos lo antes posible. También puedes
              enviarnos un correo directamente a{" "}
              <a
                href="mailto:contacto@yournight.app"
                className="underline underline-offset-2 transition-colors duration-150"
                style={{ color: "rgba(255,62,165,0.8)" }}
              >
                contacto@yournight.app
              </a>
              .
            </p>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="rounded-2xl p-10 text-center"
                  style={{
                    background: "rgba(255,197,66,0.06)",
                    border: "1px solid rgba(255,197,66,0.2)",
                  }}
                >
                  <CheckCircle
                    size={36}
                    className="mx-auto mb-4"
                    style={{ color: "#FFC542" }}
                    aria-hidden="true"
                  />
                  <p className="font-semibold mb-1" style={{ color: "#C9B8E8", fontFamily: "var(--font-display)" }}>
                    Mensaje recibido
                  </p>
                  <p className="text-sm" style={{ color: "rgba(201,184,232,0.55)" }}>
                    Te responderemos en breve. ¡Gracias!
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  aria-label="Formulario de contacto"
                >
                  {/* Honeypot anti-spam */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    aria-hidden="true"
                    tabIndex={-1}
                    defaultChecked={false}
                  />

                  {/* Nombre */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-medium"
                      style={{ color: "rgba(201,184,232,0.6)" }}
                    >
                      Nombre
                    </label>
                    <div className="relative">
                      <User
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ color: "rgba(201,184,232,0.3)" }}
                        aria-hidden="true"
                      />
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={handleChange}
                        style={{ ...inputBase, paddingLeft: "2.25rem" }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(255,62,165,0.5)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(255,62,165,0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(201,184,232,0.12)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-medium"
                      style={{ color: "rgba(201,184,232,0.6)" }}
                    >
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <Mail
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ color: "rgba(201,184,232,0.3)" }}
                        aria-hidden="true"
                      />
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        value={form.email}
                        onChange={handleChange}
                        style={{ ...inputBase, paddingLeft: "2.25rem" }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(255,62,165,0.5)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(255,62,165,0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(201,184,232,0.12)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-medium"
                      style={{ color: "rgba(201,184,232,0.6)" }}
                    >
                      Mensaje
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={14}
                        className="absolute left-3 top-3.5 pointer-events-none"
                        style={{ color: "rgba(201,184,232,0.3)" }}
                        aria-hidden="true"
                      />
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Escribe tu mensaje aquí…"
                        value={form.message}
                        onChange={handleChange}
                        style={{
                          ...inputBase,
                          paddingLeft: "2.25rem",
                          resize: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(255,62,165,0.5)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(255,62,165,0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(201,184,232,0.12)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  {/* Error */}
                  {state === "error" && (
                    <div
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: "rgba(255,62,165,0.08)",
                        border: "1px solid rgba(255,62,165,0.2)",
                        color: "#FF3EA5",
                      }}
                      role="alert"
                    >
                      <AlertCircle size={14} aria-hidden="true" />
                      Hubo un problema al enviar. Inténtalo de nuevo o
                      escríbenos directamente por correo.
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={state === "loading"}
                    aria-label="Enviar mensaje de contacto"
                  >
                    <Send size={16} aria-hidden="true" />
                    {state === "loading" ? "Enviando…" : "Enviar mensaje"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
