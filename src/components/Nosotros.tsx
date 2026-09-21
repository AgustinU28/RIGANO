import { ImageIcon } from "lucide-react";

import { Tag } from "@/components/ui/tag";
import { SITE } from "@/data/site";

export function Nosotros() {
  return (
    <section id="nosotros" className="bg-white py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* Foto del local (placeholder) */}
        <div className="relative aspect-[4/3] overflow-hidden border border-border bg-neutral-100 shadow-hard-sm">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-neutral-400">
            <ImageIcon className="h-14 w-14" />
            <span className="text-sm font-semibold">Foto del local</span>
          </div>
          <span className="absolute bottom-4 left-4">
            <Tag tone="rojo">{SITE.direccion}</Tag>
          </span>
        </div>

        {/* Texto */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-marca-rojo">
            ¿Quiénes somos?
          </p>
          <h2 className="mt-2 titulo-display text-4xl text-marca-negro sm:text-5xl">
            Oficio gráfico,
            <br />
            <span className="text-marca-rojo">Calidad Continua</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-marca-negro/70">
            <p>
              Somos una imprenta de {SITE.ciudad} dedicada al servicio gráfico
              integral, con producción propia. Trabajamos para comercios, marcas
              y emprendimientos que necesitan imprimir bien y a tiempo.
            </p>
            <p>
              Años de oficio nos enseñaron que la diferencia está en los
              detalles: cuidamos el color y la terminación en cada etapa, de la
              preprensa a la entrega.
            </p>
            <p>
              Nuestro nombre es una promesa:{" "}
              <span className="font-semibold text-marca-negro">
                {SITE.eslogan}
              </span>
              . La primera y la última hoja de tu tirada salen idénticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
