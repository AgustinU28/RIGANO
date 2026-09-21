import { ImageIcon, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TRABAJOS, whatsappLink } from "@/data/site";

export function Trabajos() {
  return (
    <section id="trabajos" className="border-y border-border bg-neutral-50 py-24">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-marca-rojo">
              Nuestros trabajos
            </p>
            <h2 className="mt-2 titulo-display text-4xl text-marca-negro sm:text-5xl">
              Trabajos
            </h2>
            <p className="mt-4 text-lg text-marca-negro/60">
              Una muestra de lo que producimos. Pronto cargamos fotos reales de
              cada proyecto.
            </p>
          </div>
          <Button asChild variant="outline">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle /> Quiero algo así
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRABAJOS.map((t) => (
            <figure
              key={t.titulo}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-neutral-200"
            >
              {t.foto ? (
                <img
                  src={t.foto}
                  alt={t.titulo}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 transition-transform duration-500 group-hover:scale-105">
                  <ImageIcon className="h-14 w-14" />
                </div>
              )}
              <span className="absolute left-3 top-3 inline-block rounded bg-marca-rojo px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                {t.categoria}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-bold text-white">{t.titulo}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
