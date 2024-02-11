import type { Metadata } from "next";
import './main.css'
import Navbar from "./ui/Navbar";
import FooterSection from "./components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Desusweb",
  description: "Crea tu negocio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ margin: '0px' }}>
        <Navbar />

        {children}

        <FooterSection />
      </body>
    </html>
  );
}
