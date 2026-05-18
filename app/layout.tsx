import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skillable Academy — Aprendé inglés con profes en vivo",
  description:
    "Clases de inglés grupales en vivo, todos los días. Niveles Beginner, Elementary e Intermediate. Profes reales, horarios flexibles y comunidad activa.",
  openGraph: {
    title: "Skillable Academy",
    description: "Aprendé inglés con profes en vivo. Clases grupales diarias.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
