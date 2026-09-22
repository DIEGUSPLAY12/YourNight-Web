import Link from "next/link";
import { Moon, ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
}

export default function LegalLayout({
  children,
  title,
  lastUpdated,
}: LegalLayoutProps) {
  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      {/* Nav mínimo */}
      <header
        style={{ borderBottom: "1px solid rgba(201,184,232,0.08)" }}
        className="glass"
      >
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#C9B8E8" }}
              aria-label="Volver a YourNight"
            >
              <Moon size={16} style={{ color: "#FF3EA5" }} aria-hidden="true" />
              YourNight
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm transition-colors duration-150 hover:text-white"
              style={{ color: "rgba(201,184,232,0.55)" }}
              aria-label="Volver al inicio"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido legal */}
      <main className="flex-1" id="main-content">
        <div className="container py-16">
          <div className="max-w-2xl mx-auto">
            {/* Cabecera */}
            <div className="mb-10">
              <h1
                className="text-heading mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h1>
              <p
                className="text-sm"
                style={{ color: "rgba(201,184,232,0.4)" }}
              >
                Última actualización: {lastUpdated}
              </p>
            </div>

            {/* Cuerpo */}
            <div
              className="legal-content"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Footer mínimo */}
      <footer
        className="py-6"
        style={{ borderTop: "1px solid rgba(201,184,232,0.08)" }}
        role="contentinfo"
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p
              className="text-xs"
              style={{ color: "rgba(201,184,232,0.3)" }}
            >
              &copy; {new Date().getFullYear()} YourNight. Todos los derechos reservados.
            </p>
            <nav aria-label="Navegación legal">
              <ul className="flex flex-wrap gap-4">
                <li>
                  <Link
                    href="/privacy"
                    className="text-xs transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(201,184,232,0.35)" }}
                  >
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-xs transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(201,184,232,0.35)" }}
                  >
                    Términos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/delete-account"
                    className="text-xs transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(201,184,232,0.35)" }}
                  >
                    Eliminar cuenta
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>

      {/* Estilos para el contenido legal en prosa */}
      <style>{`
        .legal-content h2 {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: #C9B8E8;
          margin-bottom: 0.5rem;
        }
        .legal-content p,
        .legal-content li {
          font-size: 0.9rem;
          line-height: 1.75;
          color: rgba(201, 184, 232, 0.65);
        }
        .legal-content ul {
          padding-left: 1.25rem;
          list-style: disc;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .legal-content a {
          color: rgba(255, 62, 165, 0.8);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .legal-content a:hover {
          color: #FF3EA5;
        }
        .legal-content section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(201, 184, 232, 0.07);
        }
        .legal-content section:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
}
