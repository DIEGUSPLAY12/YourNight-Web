import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Condiciones de uso de la aplicación YourNight.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Términos de uso"
      lastUpdated="22 de septiembre de 2026"
    >
      <div className="legal-content">
        <section>
          <h2>1. Qué es YourNight</h2>
          <p>
            YourNight es una herramienta de entretenimiento para grupos privados
            de amigos. Permite registrar consumiciones, competir en rankings,
            votar al mejor de cada noche y generar resúmenes automáticos de
            cada salida. No es una red social pública: no hay perfiles abiertos
            ni contenido accesible desde fuera del grupo.
          </p>
          <p>
            <strong style={{ color: "#C9B8E8" }}>Nota:</strong> Este documento
            es un borrador funcional. Conviene revisarlo con asesoría legal
            antes de un lanzamiento público amplio.
          </p>
        </section>

        <section>
          <h2>2. Requisito de edad</h2>
          <p>
            El uso de YourNight está reservado a personas mayores de 18 años.
            Al crear una cuenta confirmas que cumples este requisito. Si
            descubrimos que un usuario es menor de edad, eliminaremos su cuenta
            sin previo aviso.
          </p>
        </section>

        <section>
          <h2>3. Responsabilidad sobre la cuenta</h2>
          <p>
            Eres responsable de mantener la seguridad de tu cuenta y de todo lo
            que ocurra desde ella. No compartas tus credenciales con terceros.
            Si detectas un acceso no autorizado, contáctanos de inmediato en{" "}
            <a href="mailto:contacto@yournight.app">contacto@yournight.app</a>.
          </p>
        </section>

        <section>
          <h2>4. Registro de consumiciones y consumo responsable</h2>
          <p>
            YourNight permite registrar consumiciones dentro de un grupo con
            fines de entretenimiento y competición amistosa. La app no ofrece
            ningún tipo de consejo médico, cálculo de alcoholemia ni
            información sobre el impacto del consumo en la salud.
          </p>
          <p>
            Te recordamos que el consumo responsable es siempre la mejor opción.
            Las categorías de consumición son personalizables: puedes usarlas
            para registrar lo que tu grupo decida, no necesariamente bebidas
            alcohólicas.
          </p>
        </section>

        <section>
          <h2>5. Contenido subido por los usuarios</h2>
          <p>
            Eres responsable de todo el contenido que subes a la app (fotos,
            mensajes de chat). Queda estrictamente prohibido subir:
          </p>
          <ul>
            <li>Contenido ilegal o que infrinja derechos de terceros.</li>
            <li>
              Contenido que incite al odio, a la violencia o a la
              discriminación.
            </li>
            <li>Contenido que ponga en riesgo la seguridad o privacidad de otras personas.</li>
          </ul>
          <p>
            Dispones de herramientas dentro de la app para borrar tu propio
            contenido y reportar el contenido de otros miembros del grupo que
            consideres inapropiado.
          </p>
        </section>

        <section>
          <h2>6. Privacidad del contenido del grupo</h2>
          <p>
            El contenido de un grupo —fotos, mensajes, rankings y resultados—
            es privado y está destinado exclusivamente a sus miembros. No debes
            compartirlo fuera del grupo sin el consentimiento expreso de las
            personas implicadas.
          </p>
        </section>

        <section>
          <h2>7. Disponibilidad del servicio</h2>
          <p>
            Ofrecemos el servicio sin garantía de disponibilidad ininterrumpida.
            Podemos realizar tareas de mantenimiento o experimentar
            interrupciones técnicas. No somos responsables de daños derivados
            de la falta de disponibilidad temporal del servicio.
          </p>
        </section>

        <section>
          <h2>8. Eliminación de cuenta</h2>
          <p>
            Puedes eliminar tu cuenta en cualquier momento desde los ajustes de
            la app. La eliminación es permanente e irreversible. Consulta
            nuestra{" "}
            <Link href="/delete-account">página de eliminación de cuenta</Link> para
            conocer en detalle qué ocurre con tus datos.
          </p>
        </section>

        <section>
          <h2>9. Cambios en los términos</h2>
          <p>
            Podemos actualizar estos términos en cualquier momento. Si el cambio
            es relevante, te avisaremos dentro de la app antes de que entre en
            vigor. El uso continuado de la app implica la aceptación de los
            nuevos términos.
          </p>
        </section>

        <section>
          <h2>10. Contacto</h2>
          <p>
            Para cualquier duda sobre estos términos, escríbenos a{" "}
            <a href="mailto:contacto@yournight.app">contacto@yournight.app</a>.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
