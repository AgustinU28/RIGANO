import { SectionHeading } from "@/components/SectionHeading";
import { SERVICIOS } from "@/data/site";

export function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Servicios"
          lead="Imprimimos de todo, con la terminación que tu trabajo necesita. Elegí un servicio y pedinos el presupuesto."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS.map((s) => (
            <article
              key={s.numero}
              className="group relative overflow-hidden border border-border bg-white p-6 shadow-hard-sm transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard"
            >
              <span
                aria-hidden
                className="titulo-display pointer-events-none absolute -top-3 right-3 select-none text-7xl text-marca-negro/[0.08]"
              >
                {s.numero}
              </span>
              <h3 className="relative titulo-display text-lg text-marca-negro">
                {s.titulo}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-marca-negro/60">
                {s.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
