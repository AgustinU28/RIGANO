import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

/**
 * Indica si las credenciales de Supabase están configuradas.
 * El formulario lo usa para avisar en vez de fallar silenciosamente.
 */
export const supabaseConfigurado = Boolean(supabaseUrl && supabaseAnonKey);

if (!supabaseConfigurado) {
  console.warn(
    "[Supabase] Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en .env. " +
      "El formulario de presupuesto no podrá guardar pedidos hasta configurarlas.",
  );
}

export const supabase = createClient(
  supabaseUrl ?? "https://placeholder.supabase.co",
  supabaseAnonKey ?? "placeholder-anon-key",
);

/** Forma de un registro en la tabla `presupuestos`. */
export interface PresupuestoInput {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}
