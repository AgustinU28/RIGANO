import { Check } from "lucide-react";

import { CAPACIDADES } from "@/data/site";

export function Banda() {
  return (
    <section className="bg-marca-rojo py-16 text-white">
      <div className="container grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="titulo-display text-3xl sm:text-4xl">
            Producción gráfica integral
          </h2>
          <p className="mt-3 max-w-md text-white/85">
            Todo lo que tu marca necesita imprimir, bajo un mismo techo y con
            control de color en cada etapa.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {CAPACIDADES.map((c) => (
            <li key={c} className="flex items-center gap-3 font-semibold">
              <Check className="h-5 w-5 shrink-0 text-marca-amarillo" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
