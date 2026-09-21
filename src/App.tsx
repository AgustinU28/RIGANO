import { Toaster } from "sonner";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { RegistrationDivider } from "@/components/RegistrationDivider";
import { Banda } from "@/components/Banda";
import { Servicios } from "@/components/Servicios";
import { CtaPresupuesto } from "@/components/CtaPresupuesto";
import { Trabajos } from "@/components/Trabajos";
import { Nosotros } from "@/components/Nosotros";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RegistrationDivider />
        <Banda />
        <Servicios />
        <CtaPresupuesto />
        <RegistrationDivider label="TRABAJOS · IMPRENTA DE PRECISIÓN" />
        <Trabajos />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster richColors position="top-center" />
    </>
  );
}
