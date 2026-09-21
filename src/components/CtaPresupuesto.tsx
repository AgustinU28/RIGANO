import { MessageCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/data/site";

export function CtaPresupuesto() {
  return (
    <section className="bg-white py-12">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-marca-negro px-8 py-14 text-white sm:px-14">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-marca-rojo/30 blur-3xl" />
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
