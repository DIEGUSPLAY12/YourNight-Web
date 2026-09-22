"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿La app es gratuita?",
    answer:
      "Sí, YourNight es completamente gratuita. No hay compras dentro de la app ni suscripciones. Todas las funciones están disponibles desde el primer día.",
  },
  {
    question:
      "¿Todos mis amigos necesitan tener la app instalada para participar?",
    answer:
      "Sí. Para poder registrar consumiciones, votar y ver el ranking en directo, cada participante necesita tener la app instalada y una cuenta creada. Es la única forma de garantizar que los datos sean correctos y privados.",
  },
  {
    question: "¿El contenido del grupo lo puede ver alguien externo?",
    answer:
      "No. Todo lo que ocurre dentro de un grupo —ranking, eventos, fotos, chat y resultados— es completamente privado. Solo lo ven los miembros del grupo. No hay perfiles públicos ni forma de descubrir grupos desde fuera.",
  },
  {
    question: "¿Qué pasa si no tengo conexión durante la fiesta?",
    answer:
      "El contador de consumiciones funciona sin conexión. Los datos se guardan localmente en tu dispositivo y se sincronizan automáticamente cuando recuperas la conexión. El ranking en directo y el chat sí requieren conexión para actualizarse.",
  },
  {
    question: "¿Se puede cambiar el voto al MVP mientras la votación está abierta?",
    answer:
      "No. Una vez que envías tu voto, este queda fijado. No se puede modificar ni retirar. Los resultados se revelan a todos a la vez cuando el administrador cierra la votación o cuando termina el evento.",
  },
  {
    question: "¿Qué ocurre exactamente cuando termina la hora del evento?",
    answer:
      "El evento se cierra automáticamente: se congela el registro de consumiciones y se abre la votación al MVP si no estaba ya abierta. Transcurrido el tiempo de votación (o cuando el administrador lo cierre manualmente), se publican los resultados y se genera el resumen automático del evento.",
  },
  {
    question: "¿Las fotos se conservan para siempre?",
    answer:
      "Las fotos tienen un período de retención configurable por grupo (por defecto, 30 días). Pasado ese tiempo, se eliminan de los servidores. Los resúmenes de eventos y meses se conservan mientras la cuenta esté activa.",
  },
  {
    question:
      "¿Se puede usar la app para registrar algo que no sea alcohol?",
    answer:
      "Sí. Las categorías de consumición son personalizables. Puedes renombrarlas para registrar lo que quieras: refrescos, cafés, tapas, lo que tu grupo decida. La app no asume que lo que registras es alcohol.",
  },
  {
    question: "¿Cómo se elimina la cuenta?",
    answer:
      "Desde los ajustes de la app: Ajustes → Cuenta → Eliminar cuenta → Confirmar. La acción es permanente e irreversible. También puedes pedirlo escribiéndonos directamente. Más detalles en la página de eliminación de cuenta.",
  },
  {
    question: "¿En qué sistemas operativos está disponible la app?",
    answer:
      "Actualmente YourNight está disponible para Android (descarga manual como APK). La versión para iPhone está en desarrollo. Si quieres que te avisemos cuando esté lista, puedes dejar tu correo en la sección de descarga.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const id = `faq-answer-${index}`;

  return (
    <div
      style={{ borderBottom: "1px solid rgba(201,184,232,0.08)" }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        style={{ background: "none" }}
      >
        <span
          className="text-sm font-medium leading-snug"
          style={{
            color: open ? "#C9B8E8" : "rgba(201,184,232,0.8)",
            fontFamily: "var(--font-display)",
            transition: "color 160ms",
          }}
        >
          {faq.question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
          style={{
            background: open
              ? "rgba(255,62,165,0.15)"
              : "rgba(201,184,232,0.07)",
            border: open
              ? "1px solid rgba(255,62,165,0.3)"
              : "1px solid rgba(201,184,232,0.1)",
          }}
          aria-hidden="true"
        >
          {open ? (
            <Minus size={12} style={{ color: "#FF3EA5" }} />
          ) : (
            <Plus size={12} style={{ color: "rgba(201,184,232,0.5)" }} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-5 text-sm leading-relaxed pr-8"
              style={{ color: "rgba(201,184,232,0.6)" }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="w-full flex flex-col items-center"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
      aria-labelledby="faq-heading"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 flex flex-col items-center" style={{ margin: "0 auto" }}>
        <div className="w-full max-w-2xl flex flex-col w-full" style={{ margin: "0 auto" }}>
          {/* Header */}
          <motion.div
            className="w-full"
            style={{ textAlign: "center", marginBottom: "64px" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 id="faq-heading" className="text-heading mb-4">
              Preguntas{" "}
              <span className="text-gradient">frecuentes</span>
            </h2>
            <p className="text-subheading">
              Todo lo que te puedes preguntar antes de descargar la app.
            </p>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ borderTop: "1px solid rgba(201,184,232,0.08)" }}
          >
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
