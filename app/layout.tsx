import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoCrédito | Hub Institucional",
  description: "Landing institucional da EcoCrédito para parceiros, empresas, ESG, LIR e impacto socioambiental."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
