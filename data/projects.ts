export type ProjectStatus =
  | "PRE VENTA"
  | "LANZAMIENTO"
  | "EN CONSTRUCCIÓN"
  | "ENTREGA INMEDIATA"
  | "ENTREGADO";

export type Project = {
  id: number;
  slug: string;
  name: string;
  type: "Departamento" | "Lote" | "Resort" | "Casas";
  city: string;
  address: string;
  bedrooms: string;
  area: string;
  price: string;
  status: ProjectStatus;
  image: string;
  gallery?: string[];
  logo?: string;
  href: string;
};

const deliveredWhatsapp =
  "https://wa.me/51904239657?text=Hola%2C%20vengo%20de%20la%20web%20de%20Straton.%20Estaba%20revisando%20sus%20proyectos%20entregados%20y%20quiero%20conocer%20los%20proyectos%20que%20actualmente%20tienen%20disponibilidad%20para%20vivir%20o%20invertir.";

export const projects: Project[] = [
  /*==================================================
    PROYECTOS DISPONIBLES
  ==================================================*/

  {
    id: 1,
    slug: "neo-rivera",
    name: "Neo Rivera",
    type: "Departamento",
    city: "LA RIBERA",
    address: "Jr. Dalias (Al costado del Parque La Rivera)",
    bedrooms: "2 Dorm.",
    area: "Desde 57.10 m²",
    price: "S/ 229,170",
    status: "PRE VENTA",

    image: "/images/projects/neo-rivera/fachada.webp",

    gallery: [
      "/images/projects/neo-rivera/fachada.webp",
      "/images/projects/neo-rivera/ingreso.webp",
      "/images/projects/neo-rivera/terraza-wellness.webp",
      "/images/projects/neo-rivera/sala.webp",
    ],

    logo: "/assets/images/neo-rivera.svg",
    href: "https://showroom.ancosur.com/neo-rivera",
  },

  {
    id: 2,
    slug: "neo-balto",
    name: "Neo Balto",
    type: "Departamento",
    city: "Huancayo",
    address: "Jr. San Agustín 416 (Cerca al parque Grau)",
    bedrooms: "2 Dorm.",
    area: "Desde 43 m²",
    price: "S/ 191,300",
    status: "PRE VENTA",

    image: "/images/projects/neo-balto/fachada.webp",

    gallery: [
      "/images/projects/neo-balto/fachada.webp",
      "/images/projects/neo-balto/rooftop-terraza.webp",
      "/images/projects/neo-balto/lobby.webp",
      "/images/projects/neo-balto/spa-pet-wash.webp",
    ],

    logo: "/assets/images/neo-balto.svg",
    href: "/neo-balto",
  },

  {
    id: 3,
    slug: "neo-xport",
    name: "Neo Xport",
    type: "Departamento",
    city: "Huancayo",
    address: "Av. Chorrillos (Cerca al Polideportivo Wanka)",
    bedrooms: "2 Dorm.",
    area: "Desde 67.84 m²",
    price: "S/ 228,755",
    status: "EN CONSTRUCCIÓN",

    image: "/images/projects/neo-xport/fachada.webp",

    gallery: [
      "/images/projects/neo-xport/fachada.webp",
      "/images/projects/neo-xport/fachada-noche.webp",
      "/images/projects/neo-xport/terraza.webp",
      "/images/projects/neo-xport/sala.webp",
    ],

    logo: "/assets/images/neo-xport.svg",
    href: "/neo-xport",
  },

  {
    id: 4,
    slug: "neo-eterna",
    name: "Neo Eterna",
    type: "Departamento",
    city: "Huancayo",
    address: "Av. San Carlos (Cerca a universidades)",
    bedrooms: "3 Dorm.",
    area: "Desde 76.15 m²",
    price: "S/ 314,000",
    status: "PRE VENTA",

    image: "/images/projects/neo-eterna/fachada.webp",

    gallery: [
      "/images/projects/neo-eterna/fachada.webp",
      "/images/projects/neo-eterna/fachada-detalle.webp",
      "/images/projects/neo-eterna/sky-garden.webp",
      "/images/projects/neo-eterna/lobby.webp",
    ],

    logo: "/assets/images/neo-eterna.svg",
    href: "/neo-eterna",
  },

  {
    id: 5,
    slug: "neo-origen",
    name: "Neo Origen",
    type: "Departamento",
    city: "Huancayo",
    address: "Jr. Libertad 1187 (Cerca al colegio M. Castilla)",
    bedrooms: "1, 2 y 3 Dorm.",
    area: "Desde 33 m²",
    price: "S/ 149,560",
    status: "EN CONSTRUCCIÓN",

    image: "/images/projects/neo-origen/fachada.webp",

    gallery: [
      "/images/projects/neo-origen/fachada.webp",
      "/images/projects/neo-origen/ingreso.webp",
      "/images/projects/neo-origen/zona-billar.webp",
      "/images/projects/neo-origen/mirador-telescopio.webp",
    ],

    logo: "/assets/images/neo-origen.svg",
    href: "/neo-origen",
  },

  {
    id: 6,
    slug: "distrito-san-carlos",
    name: "Distrito San Carlos",
    type: "Departamento",
    city: "Huancayo",
    address: "Jr. Chacabuco (Cerca al centro de Huancayo)",
    bedrooms: "2 y 3 Dorm.",
    area: "Desde 54.24 m²",
    price: "S/ 226,863",
    status: "PRE VENTA",

    image: "/images/projects/distrito-san-carlos/fachada.webp",

    gallery: [
      "/images/projects/distrito-san-carlos/fachada.webp",
      "/images/projects/distrito-san-carlos/fachada-noche.webp",
      "/images/projects/distrito-san-carlos/bar.webp",
      "/images/projects/distrito-san-carlos/recepcion.webp",
    ],

    logo: "/assets/images/distrito-sancarlos.svg",
    href: "/distrito-san-carlos",
  },

  {
    id: 7,
    slug: "moro-416",
    name: "Moro 416",
    type: "Departamento",
    city: "Huancayo",
    address: "Av. Giráldez (Cerca a Real Plaza y parques)",
    bedrooms: "1, 2 y 3 Dorm.",
    area: "Desde 33 m²",
    price: "Todos Vendidos",
    status: "EN CONSTRUCCIÓN",

    image: "/images/projects/moro-416/fachada.webp",

    gallery: [
      "/images/projects/moro-416/fachada.webp",
      "/images/projects/moro-416/fachada-atardecer.webp",
      "/images/projects/moro-416/roof-garden.webp",
      "/images/projects/moro-416/lobby.webp",
    ],

    logo: "/assets/images/moro416.svg",
    href: "/moro416",
  },

  {
    id: 8,
    slug: "camino-real",
    name: "Camino Real",
    type: "Lote",
    city: "El Tambo",
    address: "Cerca al Fundo Essalud e Universidades",
    bedrooms: "Lote",
    area: "Desde 108 m²",
    price: "S/ 177,720",
    status: "EN CONSTRUCCIÓN",

    image: "/images/projects/camino-real/vista-aerea.webp",

    gallery: [
      "/images/projects/camino-real/vista-aerea.webp",
      "/images/projects/camino-real/ciclovia.webp",
      "/images/projects/camino-real/gimnasio-exterior.webp",
    ],

    logo: "/assets/images/camino-real.svg",
    href: "/camino-real",
  },

  {
    id: 9,
    slug: "zagari-resort-club",
    name: "Zagari Resort Club",
    type: "Resort",
    city: "San Ramón",
    address: "Chanchamayo",
    bedrooms: "Lote",
    area: "Desde 300 m²",
    price: "S/ 82,185.54",
    status: "EN CONSTRUCCIÓN",

    image: "/images/projects/zagari-resort-club/portico-ingreso.webp",

    gallery: [
      "/images/projects/zagari-resort-club/portico-ingreso.webp",
      "/images/projects/zagari-resort-club/escultura.webp",
      "/images/projects/zagari-resort-club/cabanas-domo.webp",
      "/images/projects/zagari-resort-club/piscina-borde-infinito.webp",
    ],

    logo: "/assets/images/zagari.svg",
    href: "https://zagari.pe/",
  },

  {
    id: 10,
    slug: "las-colinas-de-moro",
    name: "Las Colinas de Moro",
    type: "Lote",
    city: "Huancayo",
    address: "Huancayo",
    bedrooms: "Lote",
    area: "Desde 90 m²",
    price: "S/ 44,144",
    status: "ENTREGA INMEDIATA",

    image: "/images/projects/las-colinas-de-moro/vista-aerea.webp",

    gallery: [
      "/images/projects/las-colinas-de-moro/vista-aerea.webp",
      "/images/projects/las-colinas-de-moro/calle.webp",
      "/images/projects/las-colinas-de-moro/parque.webp",
    ],

    logo: "/assets/images/colinas-de-moro.svg",
    href: "/colinas-de-moro",
  },

  {
    id: 11,
    slug: "las-terrazas-de-concepcion",
    name: "Las Terrazas de Concepción",
    type: "Lote",
    city: "Concepción",
    address: "Junín",
    bedrooms: "Lote",
    area: "Desde 82 m²",
    price: "S/ 18,000",
    status: "ENTREGA INMEDIATA",

    image: "/images/projects/las-terrazas-de-concepcion/vista-aerea.webp",

    gallery: [
      "/images/projects/las-terrazas-de-concepcion/vista-aerea.webp",
      "/images/projects/las-terrazas-de-concepcion/perspectiva-carretera-general.webp",
      "/images/projects/las-terrazas-de-concepcion/perspectiva-av-leopoldo-pena.webp",
    ],

    logo: "/assets/images/las-terrazas-de-concepcion.svg",
    href: "/terrazas-concepcion",
  },

  /*==================================================
    PROYECTOS ENTREGADOS
  ==================================================*/

  {
    id: 12,
    slug: "neo-emperatriz",
    name: "Neo Emperatriz",
    type: "Departamento",
    city: "Huancayo",
    address: "Av. San Carlos 1481",
    bedrooms: "2 y 3 Dorm.",
    area: "Desde 74 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/neo-emperatriz/fachada.webp",

    gallery: [
      "/images/projects/neo-emperatriz/fachada.webp",
      "/images/projects/neo-emperatriz/fachada-frontal.webp",
      "/images/projects/neo-emperatriz/sala.webp",
      "/images/projects/neo-emperatriz/zona-parrillas.webp",
    ],

    logo: "/assets/images/neo-emperatriz.svg",
    href: deliveredWhatsapp,
  },

  {
    id: 13,
    slug: "neo-18",
    name: "Neo 18",
    type: "Departamento",
    city: "Huancayo",
    address: "Proyecto entregado",
    bedrooms: "1, 2 y 3 Dorm.",
    area: "Desde 45 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/neo-18/fachada.webp",

    gallery: [
      "/images/projects/neo-18/fachada.webp",
    ],

    href: deliveredWhatsapp,
  },

  {
    id: 14,
    slug: "alta-luz",
    name: "Alta Luz",
    type: "Departamento",
    city: "Huancayo",
    address: "Proyecto entregado",
    bedrooms: "2 y 3 Dorm.",
    area: "Desde 60 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/alta-luz/fachada.webp",

    gallery: [
      "/images/projects/alta-luz/fachada.webp",
    ],

    href: deliveredWhatsapp,
  },

  {
    id: 15,
    slug: "serena",
    name: "Serena",
    type: "Departamento",
    city: "Huancayo",
    address: "Proyecto entregado",
    bedrooms: "2 y 3 Dorm.",
    area: "Desde 70 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/serena/fachada.webp",

    gallery: [
      "/images/projects/serena/fachada.webp",
    ],

    href: deliveredWhatsapp,
  },

  {
    id: 16,
    slug: "vita",
    name: "Vita",
    type: "Departamento",
    city: "Huancayo",
    address: "Proyecto entregado",
    bedrooms: "2 y 3 Dorm.",
    area: "Desde 70 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/vita/fachada.webp",

    gallery: [
      "/images/projects/vita/fachada.webp",
    ],

    href: deliveredWhatsapp,
  },

  {
    id: 17,
    slug: "zenda",
    name: "Zenda",
    type: "Departamento",
    city: "Huancayo",
    address: "Proyecto entregado",
    bedrooms: "2 y 3 Dorm.",
    area: "Desde 68 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/zenda/fachada.webp",

    gallery: [
      "/images/projects/zenda/fachada.webp",
    ],

    href: deliveredWhatsapp,
  },

  {
    id: 18,
    slug: "adamant",
    name: "Adamant",
    type: "Departamento",
    city: "Huancayo",
    address: "Proyecto entregado",
    bedrooms: "2 y 3 Dorm.",
    area: "Desde 65 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/adamant/fachada.webp",

    gallery: [
      "/images/projects/adamant/fachada.webp",
    ],

    href: deliveredWhatsapp,
  },

  {
    id: 19,
    slug: "dovle",
    name: "Dovle",
    type: "Departamento",
    city: "Huancayo",
    address: "Proyecto entregado",
    bedrooms: "2 y 3 Dorm.",
    area: "Desde 65 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/dovle/fachada.webp",

    gallery: [
      "/images/projects/dovle/fachada.webp",
    ],

    href: deliveredWhatsapp,
  },

  {
    id: 20,
    slug: "la-huerta-vista-alegre",
    name: "La Huerta Vista Alegre",
    type: "Lote",
    city: "Huancayo",
    address: "Proyecto entregado",
    bedrooms: "Lote",
    area: "120 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/la-huerta-vista-alegre/vista-aerea.webp",

    gallery: [
      "/images/projects/la-huerta-vista-alegre/vista-aerea.webp",
    ],

    logo: "/assets/images/huerta.svg",
    href: deliveredWhatsapp,
  },

  {
    id: 21,
    slug: "viviendas-unifamiliares",
    name: "+20 Viviendas Unifamiliares",
    type: "Casas",
    city: "Huancayo",
    address: "Proyecto entregado",
    bedrooms: "3 Dorm.",
    area: "Desde 90 m²",
    price: "Entregado",
    status: "ENTREGADO",

    image: "/images/projects/viviendas-unifamiliares/fachada.webp",

    gallery: [
      "/images/projects/viviendas-unifamiliares/fachada.webp",
    ],

    href: deliveredWhatsapp,
  },
];

/*==================================================
  BUSCAR PROYECTO POR SLUG
==================================================*/

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug
  );
}