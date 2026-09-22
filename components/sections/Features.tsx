"use client";

import { motion } from "motion/react";
import { CheckCircle2, Star, Calendar, Camera } from "lucide-react";

const features = [
  {
    id: "planifica",
    title: "Eventos compartidos.",
    subtitle: "Planifica en segundos.",
    description: "Se acabó el caos de los grupos de WhatsApp. Crea un evento, invita a tus amigos y que cada uno confirme su asistencia con un clic.",
    tag: "Organiza",
    tagColor: "#FF3EA5",
    icon: <Calendar className="w-5 h-5" />,
    reverse: false,
    benefits: [
      "Confirma asistencia al instante",
      "Lugar y hora siempre a mano",
      "Notificaciones automáticas antes del evento"
    ]
  },
  {
    id: "votar",
    title: "Votación al MVP.",
    subtitle: "Coronad al rey de la noche.",
    description: "Al día siguiente, todos votan anónimamente quién fue el MVP de la noche. Un ranking histórico mantendrá el pique vivo para siempre.",
    tag: "Rankings",
    tagColor: "#FFC542",
    icon: <Star className="w-5 h-5" />,
    reverse: true,
    benefits: [
      "Votaciones 100% anónimas",
      "Tabla de clasificación (Leaderboard)",
      "Medallas y logros para los mejores"
    ]
  },
  {
    id: "revivir",
    title: "Galería de la noche.",
    subtitle: "Todas las fotos en un solo lugar.",
    description: "Sube las fotos de la noche al evento. Ya no tienes que pedir 'pasad las fotos' al día siguiente. Tu álbum privado para el grupo.",
    tag: "Recuerda",
    tagColor: "#7a4db8",
    icon: <Camera className="w-5 h-5" />,
    reverse: false,
    benefits: [
      "Sube fotos sin perder calidad",
      "Álbum vinculado al evento",
      "Solo visible para los asistentes"
    ]
  }
];

export default function Features() {
  return (
    <section id="funciones" className="py-24 overflow-hidden" style={{ backgroundColor: "#0B0014" }}>
      <div className="container mx-auto px-4 md:px-6 space-y-32">
        {features.map((feature, idx) => (
          <div 
            key={feature.id} 
            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Texto (Mitad) */}
            <motion.div 
              className="flex-1 w-full space-y-6"
              initial={{ opacity: 0, x: feature.reverse ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md font-semibold text-sm mb-2"
                style={{ backgroundColor: feature.tagColor, color: "#fff" }}
              >
                {feature.icon}
                {feature.tag}
              </div>
              
              <h2 
                className="text-4xl md:text-5xl font-extrabold tracking-tight"
                style={{ color: "#C9B8E8", fontFamily: "var(--font-display)", lineHeight: 1.1 }}
              >
                {feature.title} <br />
                <span style={{ color: feature.tagColor }}>{feature.subtitle}</span>
              </h2>
              
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(201,184,232,0.8)" }}>
                {feature.description}
              </p>

              <ul className="space-y-4 pt-4">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg font-medium" style={{ color: "#C9B8E8" }}>
                    <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: feature.tagColor }} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Imagen/UI (Mitad) */}
            <motion.div 
              className="flex-1 w-full"
              initial={{ opacity: 0, x: feature.reverse ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div 
                className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                style={{ 
                  backgroundColor: "#1B0F2E", 
                  border: `1px solid rgba(255,255,255,0.05)`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
                }}
              >
                {/* Glow del color del tag detrás */}
                <div 
                  className="absolute inset-0 blur-[100px] opacity-20" 
                  style={{ backgroundColor: feature.tagColor }} 
                />
                
                {/* Elementos UI Fake */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div className="w-3/4 h-12 rounded-xl" style={{ backgroundColor: "rgba(201,184,232,0.05)" }} />
                  <div className="w-1/2 h-8 rounded-xl" style={{ backgroundColor: "rgba(201,184,232,0.1)" }} />
                  <div className="w-full h-32 rounded-xl mt-4" style={{ backgroundColor: feature.tagColor, opacity: 0.15 }} />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
