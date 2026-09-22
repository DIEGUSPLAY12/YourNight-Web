"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  CalendarPlus,
  GlassWater,
  Vote,
  ScrollText,
  BarChart2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Crea el grupo",
    description:
      "Añade a tus amigos por invitación. El grupo es privado: solo entran los que tú invitas.",
  },
  {
    number: "02",
    icon: CalendarPlus,
    title: "Crea el evento",
    description:
      "Define la hora, el lugar y la descripción. Cada miembro confirma si va o no.",
  },
  {
    number: "03",
    icon: GlassWater,
    title: "Registra en directo",
    description:
      "Durante la noche, cada uno registra sus consumiciones con un toque. El ranking se actualiza al instante.",
  },
  {
    number: "04",
    icon: Vote,
    title: "Vota al MVP",
    description:
      "Al terminar, cada uno vota en secreto a quien ha sido el mejor de la noche. Los votos se revelan a la vez.",
  },
  {
    number: "05",
    icon: ScrollText,
    title: "Recibe el resumen",
    description:
      "La app genera automáticamente el resumen del evento: ganador, ranking final y fotos de la noche.",
  },
  {
    number: "06",
    icon: BarChart2,
    title: "Clasificación mensual",
    description:
      "Al cerrar el mes, se publica la clasificación general. Los puntos acumulados deciden quién ha sido el rey del mes.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      /* Animar la línea conectora al hacer scroll */
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      /* Cada paso entra desde la izquierda con stagger */
      const stepEls = gsap.utils.toArray<HTMLElement>(".how-step");
      stepEls.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -24 : 24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="section section-surface"
      aria-labelledby="how-heading"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 id="how-heading" className="text-heading mb-4">
            Cómo funciona{" "}
            <span className="text-gradient">YourNight</span>
          </h2>
          <p className="text-subheading">
            De la creación del grupo al resumen del mes, todo sigue un ciclo
            pensado para que no tengas que hacer nada manual.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Línea central vertical */}
          <div
            className="absolute left-[39px] top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{ background: "rgba(201,184,232,0.08)" }}
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, #FF3EA5, rgba(255,197,66,0.6))",
              }}
            />
          </div>

          {/* Pasos */}
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 !== 0;

              return (
                <div
                  key={step.number}
                  className={`how-step relative flex items-start gap-6 md:gap-0 ${
                    isRight ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Nodo central */}
                  <div
                    className="relative z-10 flex-shrink-0 w-[80px] flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2"
                  >
                    <div
                      className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
                      style={{
                        background: "#0B0014",
                        border: "2px solid #FF3EA5",
                        boxShadow: "0 0 16px rgba(255,62,165,0.35)",
                      }}
                    >
                      <Icon size={18} style={{ color: "#FF3EA5" }} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Tarjeta de contenido */}
                  <div
                    className={`flex-1 md:w-[calc(50%-52px)] ${
                      isRight ? "md:mr-auto md:ml-4 md:pr-8" : "md:ml-auto md:mr-4 md:pl-8"
                    }`}
                  >
                    <div
                      className="rounded-2xl p-5"
                      style={{
                        background: "rgba(11,0,20,0.6)",
                        border: "1px solid rgba(201,184,232,0.08)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-xs font-mono font-bold"
                          style={{ color: "#FF3EA5" }}
                        >
                          {step.number}
                        </span>
                        <h3
                          className="text-sm font-semibold"
                          style={{
                            color: "#C9B8E8",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(201,184,232,0.6)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
