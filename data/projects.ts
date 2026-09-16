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
  "https://wa.me/51971069763?text=Hola%2C%20vengo%20de%20la%20web%20de%20Ancosur.%20Estaba%20revisando%20sus%20proyectos%20entregados%20y%20quiero%20conocer%20los%20proyectos%20que%20actualmente%20tienen%20disponibilidad%20para%20vivir%20o%20invertir.";

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

    image:
      "https://images.pexels.com/photos/28405903/pexels-photo-28405903.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/28405903/pexels-photo-28405903.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/5098740/pexels-photo-5098740.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/36506462/pexels-photo-36506462.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/5098740/pexels-photo-5098740.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/5098740/pexels-photo-5098740.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/7964877/pexels-photo-7964877.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/11692851/pexels-photo-11692851.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/36603627/pexels-photo-36603627.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/36603627/pexels-photo-36603627.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/35854242/pexels-photo-35854242.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/35155685/pexels-photo-35155685.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/36506462/pexels-photo-36506462.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/36506462/pexels-photo-36506462.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/13681731/pexels-photo-13681731.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/8773901/pexels-photo-8773901.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/7964877/pexels-photo-7964877.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/7964877/pexels-photo-7964877.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/6778692/pexels-photo-6778692.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/38808615/pexels-photo-38808615.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/11692851/pexels-photo-11692851.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/11692851/pexels-photo-11692851.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/34899097/pexels-photo-34899097.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/11363634/pexels-photo-11363634.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/35854242/pexels-photo-35854242.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/35854242/pexels-photo-35854242.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/15183903/pexels-photo-15183903.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/35155685/pexels-photo-35155685.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/5505119/pexels-photo-5505119.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/5505119/pexels-photo-5505119.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/2220483/pexels-photo-2220483.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3297593/pexels-photo-3297593.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/16638589/pexels-photo-16638589.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/16638589/pexels-photo-16638589.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/2220483/pexels-photo-2220483.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/2220483/pexels-photo-2220483.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/3297593/pexels-photo-3297593.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/3297593/pexels-photo-3297593.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/161853/garden-landscape-lawn-green-161853.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/37567579/pexels-photo-37567579.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/37567579/pexels-photo-37567579.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/27806663/pexels-photo-27806663.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/13681731/pexels-photo-13681731.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/34249599/pexels-photo-34249599.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/34249599/pexels-photo-34249599.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/8773901/pexels-photo-8773901.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/6778692/pexels-photo-6778692.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/27806663/pexels-photo-27806663.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/27806663/pexels-photo-27806663.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/38808615/pexels-photo-38808615.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/28405903/pexels-photo-28405903.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/5505125/pexels-photo-5505125.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/5505125/pexels-photo-5505125.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/37244506/pexels-photo-37244506.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/37244506/pexels-photo-37244506.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/9370034/pexels-photo-9370034.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/9370034/pexels-photo-9370034.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/7121536/pexels-photo-7121536.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/7121536/pexels-photo-7121536.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/36506462/pexels-photo-36506462.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/11363634/pexels-photo-11363634.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/31851512/pexels-photo-31851512.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/31851512/pexels-photo-31851512.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/36506462/pexels-photo-36506462.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/8773901/pexels-photo-8773901.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/5505131/pexels-photo-5505131.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/5505131/pexels-photo-5505131.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    image:
      "https://images.pexels.com/photos/34043935/pexels-photo-34043935.jpeg?auto=compress&cs=tinysrgb&w=1600",

    gallery: [
      "https://images.pexels.com/photos/34043935/pexels-photo-34043935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=1600",
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