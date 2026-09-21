import { MessageCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE, BADGES, whatsappLink } from "@/data/site";

const ACENTOS_BADGE = ["border-marca-rojo", "border-marca-amarillo", "border-marca-negro"];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      {/* Trama de semitono, acento sutil propio de la imprenta */}
      <div className="trama-oscura pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] opacity-40 [mask-image:radial-gradient(circle,black,transparent_70%)]" />

      <div className="container relative z-10 py-32">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-marca-rojo">
            Imprenta en {SITE.ciudad}
          </span>

          <h1 className="mt-6 titulo-display text-4xl leading-[1.02] text-marca-negro sm:text-6xl lg:text-7xl">
            Papelería, folletos, etiquetas,{" "}
            <span className="text-marca-rojo">fotocromía</span> y diseño
            gráfico.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-marca-negro/60 sm:text-xl">
            Servicio gráfico integral en {SITE.ciudad}. De la papelería de tu
            comercio a tiradas de color exigentes, con{" "}
            <span className="font-semibold text-marca-negro">
              {SITE.eslogan}
            </span>
            .
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="rojo" size="lg">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <MessageCircle /> Pedí tu presupuesto
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#servicios">
                Ver servicios <ArrowRight />
              </a>
            </Button>
          </div>

          {/* Badges de confianza */}
          <div className="mt-14 grid max-w-2xl gap-4 sm:grid-cols-3">
            {BADGES.map((b, i) => (
              <div
                key={b.titulo}
                className={cn(
                  "border-l-2 pl-4",
                  ACENTOS_BADGE[i % ACENTOS_BADGE.length],
                )}
              >
                <p className="titulo-display text-base text-marca-negro">
                  {b.titulo}
                </p>
                <p className="mt-1 text-sm text-marca-negro/55">{b.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
