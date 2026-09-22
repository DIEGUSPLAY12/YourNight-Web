import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cómo eliminar tu cuenta",
  description:
    "Pasos para eliminar tu cuenta de YourNight y qué ocurre con tus datos.",
};

export default function DeleteAccountPage() {
  return (
    <LegalLayout
      title="Cómo eliminar tu cuenta"
      lastUpdated="22 de septiembre de 2026"
    >
      <div className="legal-content">
        <section>
          <h2>Pasos para eliminar tu cuenta desde la app</h2>
          <ol
            style={{
              paddingLeft: "1.25rem",
              listStyleType: "decimal",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <li style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "rgba(201,184,232,0.65)" }}>
              Abre YourNight e inicia sesión en tu cuenta.
            </li>
            <li style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "rgba(201,184,232,0.65)" }}>
              Ve a <strong style={{ color: "#C9B8E8" }}>Ajustes</strong> (icono de perfil o engranaje).
            </li>
            <li style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "rgba(201,184,232,0.65)" }}>
              Selecciona <strong style={{ color: "#C9B8E8" }}>Cuenta</strong>.
            </li>
            <li style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "rgba(201,184,232,0.65)" }}>
              Pulsa <strong style={{ color: "#C9B8E8" }}>Eliminar cuenta</strong>.
            </li>
            <li style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "rgba(201,184,232,0.65)" }}>
              Lee la información de confirmación y pulsa <strong style={{ color: "#C9B8E8" }}>Confirmar eliminación</strong>.
            </li>
          </ol>
          <p>
            La eliminación se procesa de forma inmediata. No puedes deshacer
            esta acción una vez confirmada.
          </p>
        </section>

        <section>
          <h2>Qué se elimina</h2>
          <ul>
            <li>Tu perfil: nombre de usuario, apodo y avatar.</li>
            <li>
              Todas las fotos que hayas subido a cualquier evento.
            </li>
            <li>Tu participación en todos los grupos (consumiciones, votos).</li>
            <li>
              El contenido de tus mensajes de chat queda vacío (el mensaje
              permanece como hueco pero sin texto ni autor identificable).
            </li>
          </ul>
        </section>

        <section>
          <h2>Qué permanece</h2>
          <p>
            Los resúmenes de eventos y meses ya publicados se mantienen para el
            resto de miembros del grupo. Tu participación en esos resúmenes
            aparece como{" "}
            <em style={{ color: "#C9B8E8" }}>usuario eliminado</em>, sin
            ningún dato que permita identificarte.
          </p>
        </section>

        <section>
          <h2>Si eras el único administrador de un grupo</h2>
          <p>
            Si el grupo tiene más miembros, el sistema transfiere automáticamente
            el rol de administrador al miembro más antiguo antes de completar la
            eliminación de tu cuenta. Si eras el único miembro del grupo, el
            grupo se elimina junto con tu cuenta.
          </p>
        </section>

        <section>
          <h2>La eliminación es permanente</h2>
          <p>
            Una vez eliminada, tu cuenta no puede recuperarse. Todos los datos
            personales asociados se borran definitivamente de nuestros
            servidores. Si en el futuro quieres volver a usar YourNight,
            deberás crear una cuenta nueva.
          </p>
        </section>

        <section>
          <h2>Alternativa: pedir la eliminación por correo</h2>
          <p>
            Si prefieres no hacerlo desde la app o tienes algún problema para
            acceder a tu cuenta, puedes solicitarnos la eliminación directamente
            escribiendo a{" "}
            <a href="mailto:contacto@yournight.app">contacto@yournight.app</a>{" "}
            desde el correo asociado a tu cuenta. Procesamos estas solicitudes
            en un plazo máximo de 30 días.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
