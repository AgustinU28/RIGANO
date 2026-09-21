import { cn } from "@/lib/utils";

const DOT_COLORS = ["bg-marca-cyan", "bg-marca-magenta", "bg-marca-amarillo"];

function Dots() {
  return (
    <span className="flex gap-1.5">
      {DOT_COLORS.map((color) => (
        <span key={color} className={cn("h-1.5 w-1.5 rounded-full", color)} />
      ))}
    </span>
  );
}

/**
 * Franja de marcas de registro CMYK. Separador de sección propio del
 * oficio gráfico, en vez del blob difuminado genérico.
 */
export function RegistrationDivider({
  label = "RÍGANO · CALIDAD CONTINUA",
}: {
  label?: string;
}) {
  return (
    <div className="flex h-10 items-center gap-3 bg-marca-negro px-6 sm:px-10">
      <Dots />
      <span className="h-px flex-1 bg-white/20" />
      <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
        {label}
      </span>
      <span className="h-px flex-1 bg-white/20" />
      <Dots />
    </div>
  );
}
