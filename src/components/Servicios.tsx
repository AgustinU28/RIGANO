import { FileText, Palette, Tag, Image as ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { SERVICIOS } from "@/data/site";

const ICONOS = [FileText, Palette, Tag, ImageIcon];

const BORDES_HOVER = [
  "group-hover:border-marca-rojo",
  "group-hover:border-marca-amarillo",
  "group-hover:border-marca-negro",
];

export function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-marca-rojo">
            Qué hacemos
          </p>
          <h2 className="mt-2 titulo-display text-4xl text-marca-negro sm:text-5xl">
            Servicios
          </h2>
          <p className="mt-4 text-lg text-marca-negro/60">
            Imprimimos de todo, con la terminación que tu trabajo necesita.
            Elegí un servicio y pedinos el presupuesto.
          </p>
        </div>

        <div className="mt-14 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS.map((s, i) => {
            const Icono = ICONOS[i % ICONOS.length];
            const bordeHover = BORDES_HOVER[i % BORDES_HOVER.length];
            return (
              <article key={s.numero} className="group flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-28 w-28 items-center justify-center rounded-full border-4 border-neutral-100 bg-neutral-50 transition-colors duration-300",
                    bordeHover,
                  )}
                >
                  <Icono
                    className="h-10 w-10 text-marca-negro/70"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-6 titulo-display text-lg text-marca-negro">
                  {s.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-marca-negro/60">
                  {s.descripcion}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
