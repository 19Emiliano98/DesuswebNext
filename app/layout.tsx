import type { Metadata } from "next";
import './main.css'
import Navbar from "./ui/Navbar";
import FooterSection from "./components/footer/FooterSection";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata: Metadata = {
  title: "Desusweb",
  description: "Crea tu negocio"
};

// const key:string = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; //? Key de testeo para modo local
const key:string = '6Lcw160oAAAAAH7HApHJB23VB6xeIY5NTjoDrvEj';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ margin: '0px' }}>
        <ReCaptchaProvider reCaptchaKey={ key }>
          <Navbar />

          {children}

          <FooterSection />
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
