import { Toaster } from "sonner";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
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
        <Banda />
        <Servicios />
        <CtaPresupuesto />
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
