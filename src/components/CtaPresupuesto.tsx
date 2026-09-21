import { MessageCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/data/site";

export function CtaPresupuesto() {
  return (
    <section className="bg-white py-12">
      <div className="container">
        <div className="relative overflow-hidden border-2 border-marca-negro bg-marca-negro px-8 py-14 text-white shadow-hard-rojo sm:px-14">
          <div className="trama-clara pointer-events-none absolute -right-6 -top-10 h-56 w-56 opacity-30" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="titulo-display text-3xl sm:text-4xl">
                ¿Tenés un trabajo en mente?
              </h2>
              <p className="mt-3 text-white/70">
                Contanos qué necesitás y te pasamos un presupuesto sin
                compromiso. Respondemos rápido.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="amarillo" size="lg">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <MessageCircle /> Pedí tu presupuesto
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-marca-negro"
              >
                <a href="#contacto">
                  Usar el formulario <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
