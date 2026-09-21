import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-marca-rojo">
        {eyebrow}
      </p>
      <h2 className="mt-2 titulo-display text-4xl text-marca-negro sm:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg text-marca-negro/60">{lead}</p>}
    </div>
  );
}
