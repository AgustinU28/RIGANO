import { cn } from "@/lib/utils";

type TagProps = {
  tone?: "rojo" | "negro";
  pill?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Tag({ tone = "rojo", pill = false, className, children }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-0.5 text-xs font-bold uppercase tracking-wide",
        pill ? "rounded-full" : "rounded-sm",
        tone === "rojo"
          ? "bg-marca-rojo text-white"
          : "bg-marca-negro text-marca-amarillo",
        className,
      )}
    >
      {children}
    </span>
  );
}
