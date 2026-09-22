"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { Download, ChevronRight } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="descarga" className="w-full flex flex-col items-center px-4 md:px-6" style={{ backgroundColor: "#0B0014", paddingTop: "120px", paddingBottom: "120px" }}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <motion.div 
          className="w-full max-w-5xl rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        style={{
          backgroundColor: "#1B0F2E",
          boxShadow: "0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
          textAlign: "center"
        }}
      >
        {/* Glow Effects */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 blur-[100px] opacity-20 pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3"
          style={{ backgroundColor: "#FF3EA5" }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 blur-[100px] opacity-10 pointer-events-none rounded-full -translate-x-1/3 translate-y-1/3"
          style={{ backgroundColor: "#FFC542" }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <h2 
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
            style={{ color: "#C9B8E8", fontFamily: "var(--font-display)", marginBottom: "40px", marginTop: "60px" }}
          >
            ¿Listo para tu próxima <br/>
            <span style={{ color: "#FF3EA5" }}>noche épica?</span>
          </h2>
          
          <p 
            className="text-lg md:text-xl max-w-2xl"
            style={{ color: "rgba(201,184,232,0.7)", marginBottom: "56px" }}
          >
            Únete a cientos de grupos que ya están registrando sus noches, votando al MVP y guardando recuerdos imborrables con YourNight.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              href="#"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 !rounded-full shadow-[0_0_40px_rgba(255,62,165,0.4)]"
            >
              <Download size={18} className="mr-2" />
              Descargar APK ahora
            </Button>
            <Button
              href="#contacto"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto px-8 !rounded-full"
            >
              Hablar con soporte
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </div>
          
          <p className="text-sm font-medium" style={{ color: "rgba(201,184,232,0.4)", marginTop: "56px", marginBottom: "60px" }}>
            Versión 1.0.0 (Beta) — Android 9.0 o superior requerido.
          </p>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
