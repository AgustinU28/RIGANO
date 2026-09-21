import { useState, type FormEvent } from "react";
import {
  MapPin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Loader2,
  Clock,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase, supabaseConfigurado } from "@/lib/supabase";
import { SITE, SERVICIOS, whatsappLink } from "@/data/site";

const ESTADO_INICIAL = {
  nombre: "",
  email: "",
  servicio: "",
  mensaje: "",
};

export function Contacto() {
  const [form, setForm] = useState(ESTADO_INICIAL);
  const [enviando, setEnviando] = useState(false);

  const actualizar =
    (campo: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [campo]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!supabaseConfigurado) {
      toast.error("El formulario no está configurado", {
        description:
          "Faltan las credenciales de Supabase. Escribinos por WhatsApp mientras tanto.",
      });
      return;
    }

    setEnviando(true);
    const { error } = await supabase.from("presupuestos").insert({
      nombre: form.nombre.trim(),
      email: form.email.trim(),
      servicio: form.servicio,
      mensaje: form.mensaje.trim(),
    });
    setEnviando(false);

    if (error) {
      console.error("[Supabase] insert presupuestos:", error);
      toast.error("No pudimos enviar tu pedido", {
        description: "Probá de nuevo o escribinos directo por WhatsApp.",
      });
      return;
    }

    toast.success("¡Pedido enviado!", {
      description: "Te respondemos a la brevedad. Gracias por elegir Rígano.",
    });
    setForm(ESTADO_INICIAL);
  }

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-marca-rojo">
            Hablemos
          </p>
          <h2 className="mt-2 titulo-display text-4xl text-marca-negro sm:text-5xl">
            Pedí tu presupuesto
          </h2>
          <p className="mt-4 text-lg text-marca-negro/70">
            Contanos qué necesitás y te pasamos un presupuesto sin compromiso.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Datos de contacto */}
          <div className="space-y-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border-2 border-marca-rojo bg-marca-rojo p-5 text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-7 w-7 shrink-0" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
                  WhatsApp directo
                </p>
                <p className="text-lg font-bold">{SITE.whatsappVisible}</p>
              </div>
            </a>

            <a
              href={`tel:${SITE.telLink}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-neutral-50 p-5 transition-colors hover:border-marca-rojo"
            >
              <Phone className="h-6 w-6 shrink-0 text-marca-rojo" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-marca-negro/60">
                  Teléfono
                </p>
                <p className="font-bold text-marca-negro">{SITE.telVisible}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-neutral-50 p-5">
              <MapPin className="h-6 w-6 shrink-0 text-marca-rojo" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-marca-negro/60">
                  Dirección
                </p>
                <p className="font-bold text-marca-negro">{SITE.direccion}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-neutral-50 p-5">
              <Clock className="h-6 w-6 shrink-0 text-marca-rojo" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-marca-negro/60">
                  Horario
                </p>
                <p className="font-bold text-marca-negro">{SITE.horario}</p>
              </div>
            </div>

            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-neutral-50 p-5 transition-colors hover:border-marca-rojo"
            >
              <Mail className="h-6 w-6 shrink-0 text-marca-rojo" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-marca-negro/60">
                  Email
                </p>
                <p className="font-bold text-marca-negro">{SITE.email}</p>
              </div>
            </a>
          </div>

          {/* Formulario */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border-2 border-marca-negro bg-neutral-50 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  required
                  value={form.nombre}
                  onChange={actualizar("nombre")}
                  placeholder="Tu nombre o comercio"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={actualizar("email")}
                  placeholder="vos@email.com"
                />
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="servicio">Servicio</Label>
              <select
                id="servicio"
                required
                value={form.servicio}
                onChange={actualizar("servicio")}
                className="flex h-11 w-full rounded-md border-2 border-input bg-white px-3 text-base text-marca-negro focus-visible:border-marca-rojo focus-visible:outline-none"
              >
                <option value="" disabled>
                  Elegí un servicio…
                </option>
                {SERVICIOS.map((s) => (
                  <option key={s.numero} value={s.titulo}>
                    {s.titulo}
                  </option>
                ))}
                <option value="Otro">Otro / Consulta general</option>
              </select>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea
                id="mensaje"
                required
                value={form.mensaje}
                onChange={actualizar("mensaje")}
                placeholder="Contanos cantidades, medidas, fechas o lo que tengas en mente…"
              />
            </div>

            <Button
              type="submit"
              variant="rojo"
              size="lg"
              className="mt-6 w-full"
              disabled={enviando}
            >
              {enviando ? (
                <>
                  <Loader2 className="animate-spin" /> Enviando…
                </>
              ) : (
                <>
                  <Send /> Enviar pedido
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Mapa */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Mapa - Rígano, Don Bosco 184, Bahía Blanca"
            src="https://www.google.com/maps?q=Don+Bosco+184,+Bah%C3%ADa+Blanca&output=embed"
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
