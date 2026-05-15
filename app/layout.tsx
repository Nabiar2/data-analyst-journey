import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Braian Nabiar — Data Analyst",
  description: "Portfolio personal de Braian Nabiar, Data Analyst en formación.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
