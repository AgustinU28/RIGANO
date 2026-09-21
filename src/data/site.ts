export const SITE = {
  nombre: "Rígano",
  rubro: "Servicio Gráfico",
  eslogan: "Calidad Continua",
  ciudad: "Bahía Blanca",
  direccion: "Don Bosco 184, Bahía Blanca",
  email: "grafica@rigano.com.ar",
  // WhatsApp (Argentina: 54 9 + área + número)
  whatsappNumero: "5492915053502",
  whatsappVisible: "291 505-3502",
  // Teléfonos (clic para llamar)
  telVisible: "291 505-3502 / 504-0752",
  telLink: "+542915053502",
  telLink2: "+542915040752",
  horario: "Lunes a Viernes de 9 a 18 hs",
  whatsappMensaje:
    "Hola Rígano, quería consultar por un trabajo de imprenta.",
  redes: {
    instagram: "https://www.instagram.com/riganoimprenta/",
  },
} as const;

/** Construye el link de WhatsApp con mensaje pre-cargado. */
export function whatsappLink(mensaje: string = SITE.whatsappMensaje): string {
  return `https://wa.me/${SITE.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
}

/** Badges de confianza del hero. */
export const BADGES = [
  { titulo: "Experiencia", detalle: "Oficio gráfico en Bahía Blanca" },
  { titulo: "Calidad Continua", detalle: "Color parejo, tirada tras tirada" },
  { titulo: "Atención personalizada", detalle: "Te asesoramos de punta a punta" },
] as const;

/** Capacidades para la banda "Producción gráfica integral". */
export const CAPACIDADES = [
  "Papelería comercial",
  "Folletos a color",
  "Etiquetas y publicaciones",
  "Fotocromía de alta fidelidad",
  "Talonarios y recetarios",
] as const;

/**
 * Servicios numerados. Para agregar uno nuevo, sumá un objeto acá:
 * el número, la grilla y el <select> del formulario se actualizan solos.
 */
export type Servicio = {
  numero: string;
  titulo: string;
  descripcion: string;
};

export const SERVICIOS: Servicio[] = [
  {
    numero: "01",
    titulo: "Papelería Comercial",
    descripcion:
      "Facturas, remitos, tarjetas, talonarios y recetarios con identidad propia.",
  },
  {
    numero: "02",
    titulo: "Folletos y Color",
    descripcion:
      "Folletos, dípticos, trípticos y flyers a todo color, con buena terminación.",
  },
  {
    numero: "03",
    titulo: "Etiquetas y Publicaciones",
    descripcion:
      "Etiquetas, rótulos, stickers y publicaciones listas para góndola y vidriera.",
  },
  {
    numero: "04",
    titulo: "Fotocromía y Catálogos",
    descripcion:
      "Reproducción de color de alta fidelidad para catálogos, revistas y publicaciones.",
  },
];

/**
 * Trabajos para la galería. `foto` es opcional: cuando esté la imagen real
 * se completa y la tarjeta la usa; mientras tanto va el placeholder.
 */
export type Trabajo = {
  titulo: string;
  categoria: "Papelería" | "Folletos" | "Etiquetas" | "Fotocromía";
  foto?: string;
};

export const TRABAJOS: Trabajo[] = [
  { titulo: "Talonarios y remitos", categoria: "Papelería" },
  { titulo: "Folletería a color", categoria: "Folletos" },
  { titulo: "Etiquetas de producto", categoria: "Etiquetas" },
  { titulo: "Catálogo institucional", categoria: "Fotocromía" },
  { titulo: "Tarjetas personales", categoria: "Papelería" },
  { titulo: "Dípticos promocionales", categoria: "Folletos" },
];
