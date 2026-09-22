"use client";

import { motion } from "motion/react";
import { Download, Users, Zap } from "lucide-react";

const steps = [
  {
    icon: <Download className="w-8 h-8" />,
    title: "Descarga la App",
    desc: "Instala el APK en Android (próximamente en tiendas oficiales)."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Crea tu grupo",
    desc: "Añade a tus amigos y ponle fecha a vuestra próxima noche épica."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Vive y registra",
    desc: "Vota al MVP, sube fotos y mantén el ranking del grupo actualizado."
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="w-full flex flex-col items-center" style={{ backgroundColor: "#0B0014", paddingTop: "120px", paddingBottom: "120px" }}>
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <div className="w-full" style={{ textAlign: "center", margin: "0 auto", maxWidth: "48rem", marginBottom: "80px" }}>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#C9B8E8", fontFamily: "var(--font-display)" }}
          >
            Cómo funciona
          </h2>
          <p className="text-lg md:text-xl" style={{ color: "rgba(201,184,232,0.6)" }}>
            Tres sencillos pasos para que tu grupo pase al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-8 rounded-3xl"
              style={{
                backgroundColor: "#1B0F2E",
                border: "1px solid rgba(255,255,255,0.03)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(255,62,165,0.1)", color: "#FF3EA5" }}
              >
                {step.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#C9B8E8" }}>
                {step.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed flex-1" style={{ color: "rgba(201,184,232,0.6)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
