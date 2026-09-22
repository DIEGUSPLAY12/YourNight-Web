import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

/* ─── Fuentes ─────────────────────────────────────────────── */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

/* ─── Metadata global ─────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "YourNight — Registra y revive tus noches con amigos",
    template: "%s | YourNight",
  },
  description:
    "La app para grupos de amigos que quieren registrar consumiciones, votar al MVP de la noche y revivir cada salida con rankings y resúmenes automáticos.",
  keywords: [
    "app salidas",
    "grupos de amigos",
    "noche",
    "ranking consumiciones",
    "MVP noche",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "YourNight",
    title: "YourNight — Registra y revive tus noches con amigos",
    description:
      "Rankings en directo, votación al MVP y resúmenes automáticos de cada salida. Solo para mayores de 18 años.",
  },
  robots: { index: true, follow: true },
};

/* ─── Layout raíz ─────────────────────────────────────────── */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
