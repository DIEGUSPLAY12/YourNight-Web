import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre cómo YourNight gestiona y protege tus datos personales.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Política de privacidad"
      lastUpdated="22 de septiembre de 2026"
    >
      <div className="legal-content">
        <section>
          <h2>1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos recogidos a través de
            YourNight y de esta web es el desarrollador de la aplicación. Puedes
            contactar con nosotros en{" "}
            <a href="mailto:contacto@yournight.app">contacto@yournight.app</a>{" "}
            para cualquier consulta relacionada con tus datos.
          </p>
          <p>
            <strong style={{ color: "#C9B8E8" }}>Nota:</strong> Este documento
            es un borrador funcional para permitir la publicación de la web.
            Conviene revisarlo con asesoría legal antes de un lanzamiento
            público amplio y ajustarlo si el funcionamiento real de la app
            difiere de lo aquí descrito.
          </p>
        </section>

        <section>
          <h2>2. Datos que recogemos</h2>
          <p>YourNight recoge únicamente los datos necesarios para su funcionamiento:</p>
          <ul>
            <li>
              <strong style={{ color: "#C9B8E8" }}>Datos de la cuenta:</strong>{" "}
              dirección de correo electrónico, apodo visible en el grupo, avatar
              opcional y confirmación de mayoría de edad.
            </li>
            <li>
              <strong style={{ color: "#C9B8E8" }}>Datos de uso:</strong> grupos
              en los que participas, eventos creados o a los que asistes,
              consumiciones registradas, votos emitidos y mensajes de chat.
            </li>
            <li>
              <strong style={{ color: "#C9B8E8" }}>Fotos:</strong> las imágenes
              que subes voluntariamente a los eventos.
            </li>
            <li>
              <strong style={{ color: "#C9B8E8" }}>Datos técnicos:</strong>{" "}
              token de dispositivo necesario para el envío de notificaciones push.
            </li>
          </ul>
          <p>
            <strong style={{ color: "#C9B8E8" }}>No recogemos tu ubicación.</strong>{" "}
            El campo de lugar de un evento es texto libre que escribe el propio
            usuario. La app no accede al GPS ni a los servicios de localización
            del dispositivo.
          </p>
        </section>

        <section>
          <h2>3. Para qué usamos tus datos</h2>
          <p>
            Usamos tus datos exclusivamente para que la app funcione: mostrar
            grupos y eventos, calcular rankings y puntos, generar resúmenes
            automáticos, enviar notificaciones y proporcionar el chat del grupo.
          </p>
          <p>
            <strong style={{ color: "#C9B8E8" }}>No usamos tus datos con fines
            publicitarios ni los cedemos a terceros con ese fin.</strong>
          </p>
        </section>

        <section>
          <h2>4. Con quién compartimos tus datos</h2>
          <p>
            Dentro de la app, tus datos de participación (apodo, consumiciones,
            votos y fotos) son visibles solo para los miembros del mismo grupo.
          </p>
          <p>
            Para el funcionamiento técnico, utilizamos proveedores externos de
            confianza (alojamiento de datos, almacenamiento de fotos y envío de
            notificaciones push). Estos proveedores tratan los datos únicamente
            para prestarnos el servicio técnico y están sujetos a acuerdos de
            confidencialidad.
          </p>
        </section>

        <section>
          <h2>5. Cuánto tiempo conservamos tus datos</h2>
          <ul>
            <li>
              Tu cuenta y los resúmenes de eventos y meses: mientras la cuenta
              esté activa.
            </li>
            <li>
              Fotos subidas a los eventos: un período limitado (por defecto 30
              días desde el evento; cada grupo puede ajustar este período).
            </li>
            <li>Mensajes de chat: un máximo de 90 días desde su envío.</li>
            <li>
              Cuando eliminas tu cuenta, todos tus datos personales se borran de
              forma permanente e inmediata.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies y esta web</h2>
          <p>
            Esta web no utiliza cookies de terceros, herramientas de análisis de
            comportamiento (como Google Analytics) ni ningún tipo de seguimiento
            publicitario.
          </p>
          <p>
            Solo utilizamos una cookie técnica propia para recordar que has
            aceptado este aviso de cookies. No contiene información personal.
          </p>
        </section>

        <section>
          <h2>7. Tus derechos</h2>
          <p>
            Puedes ejercer en cualquier momento los derechos de acceso,
            rectificación, supresión, oposición y portabilidad de tus datos.
            Para ello:
          </p>
          <ul>
            <li>
              Desde la app: <em>Ajustes → Cuenta → Gestionar mis datos</em>.
            </li>
            <li>
              Por correo:{" "}
              <a href="mailto:contacto@yournight.app">contacto@yournight.app</a>
              .
            </li>
          </ul>
          <p>
            Respondemos a todas las solicitudes en un plazo máximo de 30 días.
          </p>
        </section>

        <section>
          <h2>8. Menores de edad</h2>
          <p>
            YourNight está diseñada exclusivamente para personas mayores de 18
            años. No recogemos deliberadamente datos de menores. Si detectamos
            que un usuario es menor de edad, eliminamos su cuenta sin previo
            aviso.
          </p>
        </section>

        <section>
          <h2>9. Cambios en esta política</h2>
          <p>
            Si realizamos cambios relevantes en esta política, te avisaremos
            dentro de la app antes de que entren en vigor. El uso continuado de
            la app tras ese aviso implica la aceptación de los cambios.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
