import { MapPin, Mail, MessageCircle, Clock, Instagram } from "lucide-react";

import { SITE, whatsappLink } from "@/data/site";

const NAV = [
  ["#inicio", "Inicio"],
  ["#servicios", "Servicios"],
  ["#trabajos", "Trabajos"],
  ["#nosotros", "Nosotros"],
  ["#contacto", "Contacto"],
] as const;

export function Footer() {
  return (
    <footer className="bg-marca-negro text-white">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Marca */}
          <div className="md:col-span-2">
            <img
              src="/logo-rigano-blanco.svg"
              alt={`${SITE.nombre} — ${SITE.rubro}`}
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-xs text-white/70">
              Imprenta en {SITE.ciudad}. Trabajamos con{" "}
              <span className="font-semibold text-marca-amarillo">
                {SITE.eslogan}
              </span>
              .
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={SITE.redes.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-marca-rojo"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-marca-amarillo">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2 text-white/80">
              {NAV.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-marca-amarillo">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-marca-amarillo">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-marca-rojo" />
                {SITE.direccion}
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-marca-amarillo"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-marca-rojo" />
                  {SITE.whatsappVisible}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 hover:text-marca-amarillo"
                >
                  <Mail className="h-5 w-5 shrink-0 text-marca-rojo" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-marca-rojo" />
                {SITE.horario}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} {SITE.nombre} · {SITE.rubro} ·{" "}
          {SITE.ciudad}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
