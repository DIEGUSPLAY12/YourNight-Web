"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { Download, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: "#0B0014", paddingTop: "160px" }}
    >
      {/* Glow background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] pointer-events-none blur-[120px] opacity-30"
        style={{
          background: "radial-gradient(circle, #FF3EA5 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        {/* Text Content - Centered */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold mb-2"
              style={{
                backgroundColor: "rgba(255,197,66,0.1)",
                color: "#FFC542",
                border: "1px solid rgba(255,197,66,0.2)",
              }}
            >
              🚀 Beta privada abierta para grupos
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{ color: "#C9B8E8", fontFamily: "var(--font-display)" }}
          >
            Tu noche, <span style={{ color: "#FF3EA5" }}>registrada.</span>
            <br /> Revívela.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ color: "rgba(201,184,232,0.7)" }}
          >
            YourNight es la app para grupos de amigos que quieren más que un
            chat. Rankings en directo, votación al MVP y resúmenes que duran
            para siempre.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Button
              href="#descarga"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 !rounded-full"
            >
              <Download size={18} className="mr-2" />
              Descargar APK
            </Button>
            <Button
              href="#como-funciona"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto px-8 !rounded-full"
            >
              Ver cómo funciona
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </motion.div>
        </div>

        {/* Dashboard/App Mockup - Massive Centered Image */}
        <motion.div
          className="relative mt-20 md:mt-24 mx-auto w-full max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <div
            className="rounded-[2rem] md:rounded-[3rem] overflow-hidden relative"
            style={{
              backgroundColor: "#1B0F2E",
              border: "1px solid rgba(255, 62, 165, 0.2)",
              aspectRatio: "16/9",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 100px rgba(255, 62, 165, 0.1)",
            }}
          >
            {/* Top Bar for Desktop Mockup feeling */}
            <div
              className="h-10 w-full flex items-center px-6 gap-2"
              style={{ backgroundColor: "rgba(11,0,20,0.5)", borderBottom: "1px solid rgba(201,184,232,0.1)" }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(255,62,165,0.5)" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(255,197,66,0.5)" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(201,184,232,0.2)" }} />
              </div>
            </div>
            
            <div className="absolute inset-0 top-10 flex flex-col items-center justify-center p-8">
              <span className="text-6xl mb-4">🌙</span>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#C9B8E8" }}>Visualización de la App</h3>
              <p style={{ color: "rgba(201,184,232,0.5)" }}>El dashboard principal de grupos se mostrará aquí.</p>
              
              {/* Fake UI Elements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-10">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="h-32 rounded-2xl p-6 flex flex-col justify-between"
                    style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <div className="w-1/2 h-4 rounded" style={{ backgroundColor: "rgba(201,184,232,0.2)" }} />
                    <div className="w-full h-8 rounded" style={{ backgroundColor: "rgba(255,62,165,0.1)" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
