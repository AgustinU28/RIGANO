import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE, whatsappLink } from "@/data/site";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparente sobre el hero; fondo blanco sólido al hacer scroll.
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#inicio" aria-label={`${SITE.nombre} — ${SITE.rubro}`}>
          <img
            src="/logo-rigano.svg"
            alt={`${SITE.nombre} — ${SITE.rubro}`}
            className="h-11 w-auto sm:h-12"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-marca-negro/80 transition-colors hover:text-marca-rojo"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="rojo" size="sm">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle /> Pedí presupuesto
            </a>
          </Button>
        </div>

        <button
          className="text-marca-negro md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-marca-negro hover:text-marca-rojo"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="rojo">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <MessageCircle /> Pedí presupuesto
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
