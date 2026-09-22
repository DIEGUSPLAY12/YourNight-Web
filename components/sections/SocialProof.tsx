"use client";

import { motion } from "motion/react";

export default function SocialProof() {
  return (
    <section 
      className="py-12 border-b"
      style={{ backgroundColor: "#0B0014", borderColor: "rgba(201,184,232,0.1)" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <p 
            className="text-sm md:text-base font-semibold text-center uppercase tracking-widest"
            style={{ color: "rgba(201,184,232,0.5)" }}
          >
            Usado por cientos de grupos para sus noches épicas
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Fake Logos for now, using text as placeholders */}
            {["LA BANDA", "LOS DE SIEMPRE", "VIERNES VIP", "NOCHES DE VERANO", "EL CARTEL"].map((group, index) => (
              <div 
                key={index}
                className="text-xl md:text-2xl font-black tracking-tighter"
                style={{ fontFamily: "var(--font-display)", color: "#C9B8E8" }}
              >
                {group}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
