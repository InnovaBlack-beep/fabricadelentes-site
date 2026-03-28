export type BadgeType = "Más vendido" | "Nuevo" | "Exclusivo" | "Clásico" | "Premium" | "Trending" | "Más pedido";

export type Product = {
  id: string;
  model: string;
  brand: string;
  price: string;
  description: string;
  category: "Graduados" | "Sol" | "Contacto";
  images: string[];
  badge: BadgeType;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getBadgeColors(_badge: BadgeType): { bg: string; text: string } {
  return { bg: "bg-fg", text: "text-white" };
}

const brizzantDesc =
  "La montura metálica redonda hexagonal cuenta con perfiles acuñados delgados y lentes planas de cristal de oro clásico con patillas muy delgadas. Mezcla y combina opciones de colores básicos flash para crear la combinación perfecta.";

const fridaGraduadosDesc =
  "La línea FRIDA KAHLO se caracteriza por su nivel de elegancia y sofisticación. Poseen gran durabilidad con un bonito estilo. Diseño inspirado en su arte y espíritu creativo.";

const noblemanDesc =
  "Colección Nobleman con diseño clásico y elegante. Armazones de alta calidad con acabados premium para un look sofisticado.";

const massimoDesc =
  "Colección Massimo con líneas modernas y materiales de primera calidad. Diseño contemporáneo para quienes buscan estilo y comodidad.";

export const products: Product[] = [
  // Graduados - Brizzant
  {
    id: "vincent-brizzant",
    model: "VINCENT",
    brand: "Brizzant",
    price: "$1,349",
    description: brizzantDesc,
    category: "Graduados",
    badge: "Más vendido",
    images: [
      "/products/oftalmicos/bl6-02c24b24.jpg",
      "/products/oftalmicos/b6-1364916a.jpg",
    ],
  },
  {
    id: "sydney-brizzant",
    model: "SYDNEY",
    brand: "Brizzant",
    price: "$1,349",
    description: brizzantDesc,
    category: "Graduados",
    badge: "Nuevo",
    images: [
      "/products/oftalmicos/bl2-b52145f3.jpg",
      "/products/oftalmicos/b2-48c880d5.jpg",
    ],
  },
  {
    id: "andre-azul-brizzant",
    model: "ANDRE AZUL",
    brand: "Brizzant",
    price: "$1,349",
    description: brizzantDesc,
    category: "Graduados",
    badge: "Nuevo",
    images: [
      "/products/oftalmicos/bl3-68dce26b.jpg",
      "/products/oftalmicos/b3-f148a9c7.jpg",
    ],
  },
  {
    id: "giovanni-brizzant",
    model: "GIOVANNI",
    brand: "Brizzant",
    price: "$1,349",
    description: brizzantDesc,
    category: "Graduados",
    badge: "Nuevo",
    images: [
      "/products/oftalmicos/bl1-80666f1f.jpg",
      "/products/oftalmicos/b1-1c21a102.jpg",
    ],
  },
  {
    id: "dali-brizzant",
    model: "DALI",
    brand: "Brizzant",
    price: "$1,349",
    description: brizzantDesc,
    category: "Graduados",
    badge: "Nuevo",
    images: [
      "/products/oftalmicos/bl4-29f105d4.jpg",
      "/products/oftalmicos/b4-7cb6be2f.jpg",
    ],
  },

  // Graduados - Frida Kahlo
  {
    id: "fk1001m-bl-frida-kahlo",
    model: "FK1001M-BL",
    brand: "Frida Kahlo",
    price: "$1,650",
    description: fridaGraduadosDesc,
    category: "Graduados",
    badge: "Exclusivo",
    images: [
      "/products/oftalmicos/FKL1-e4cd1228.jpg",
      "/products/oftalmicos/FK1-03eeca18.jpg",
    ],
  },
  {
    id: "fk1004a-bl-frida-kahlo",
    model: "FK1004A-BL",
    brand: "Frida Kahlo",
    price: "$1,650",
    description: fridaGraduadosDesc,
    category: "Graduados",
    badge: "Exclusivo",
    images: [
      "/products/oftalmicos/FKL2-ef116390.jpg",
      "/products/oftalmicos/FK2-21997193.jpg",
    ],
  },
  {
    id: "fk1005m-pu-frida-kahlo",
    model: "FK1005M-PU",
    brand: "Frida Kahlo",
    price: "$1,650",
    description: fridaGraduadosDesc,
    category: "Graduados",
    badge: "Exclusivo",
    images: ["/products/oftalmicos/FKL5-1d2d0c30.jpg"],
  },

  // Graduados - Nobleman
  {
    id: "hc04-08-c7-nobleman",
    model: "HC04-08 C7",
    brand: "Nobleman",
    price: "$1,499",
    description: noblemanDesc,
    category: "Graduados",
    badge: "Clásico",
    images: ["/products/oftalmicos/NOL1-541b9e74.jpg"],
  },
  {
    id: "hc05-10-c2-nobleman",
    model: "HC05-10 C2",
    brand: "Nobleman",
    price: "$1,499",
    description: noblemanDesc,
    category: "Graduados",
    badge: "Clásico",
    images: ["/products/oftalmicos/NO2-5fecad74.jpg"],
  },
  {
    id: "hc07-14-c5-nobleman",
    model: "HC07-14 C5",
    brand: "Nobleman",
    price: "$1,499",
    description: noblemanDesc,
    category: "Graduados",
    badge: "Clásico",
    images: ["/products/oftalmicos/NOL3-987ac48f.jpg"],
  },

  // Graduados - Massimo
  {
    id: "mm4004-c2-massimo",
    model: "MM4004 C2",
    brand: "Massimo",
    price: "$1,549",
    description: massimoDesc,
    category: "Graduados",
    badge: "Premium",
    images: ["/products/oftalmicos/MAL1-86309c0e.jpg"],
  },
  {
    id: "mm4004-c3-massimo",
    model: "MM4004 C3",
    brand: "Massimo",
    price: "$1,499",
    description: massimoDesc,
    category: "Graduados",
    badge: "Premium",
    images: ["/products/oftalmicos/MAL2-547d5921.jpg"],
  },
  {
    id: "wd1167-c1-massimo",
    model: "WD1167 C1",
    brand: "Massimo",
    price: "$1,499",
    description: massimoDesc,
    category: "Graduados",
    badge: "Premium",
    images: ["/products/oftalmicos/MAL3-43ce1ec8.jpg"],
  },

  // Sol - Frida Kahlo
  {
    id: "fk001-c19-frida-kahlo-sol",
    model: "FK 001 C19",
    brand: "Frida Kahlo",
    price: "$1,650",
    description:
      "La montura metálica redonda hexagonal cuenta con perfiles acuñados delgados y lentes planas de cristal de oro clásico con patillas muy delgadas.",
    category: "Sol",
    badge: "Trending",
    images: [
      "/products/solares/FKSL1-5ea420bc.jpg",
      "/products/solares/FKS1-e6812fec.jpg",
    ],
  },
  {
    id: "fk001-c13-frida-kahlo-sol",
    model: "FK 001 C13",
    brand: "Frida Kahlo",
    price: "$1,650",
    description:
      "Modelo con tratamiento totalmente metalizado, forma Pantos con puente de ojo de cerradura inconfundible y patillas de metal súper delgadas.",
    category: "Sol",
    badge: "Trending",
    images: [
      "/products/solares/FKSL2-975aa408.jpg",
      "/products/solares/FKS2-bc4658bf.jpg",
    ],
  },
  {
    id: "fk001-c11-frida-kahlo-sol",
    model: "FK 001 C11",
    brand: "Frida Kahlo",
    price: "$1,650",
    description:
      "Estilo retro y atemporal. Diseño inconfundible que ha sido históricamente la elección de los referentes intelectuales y culturales.",
    category: "Sol",
    badge: "Nuevo",
    images: [
      "/products/solares/FKSL3-12125544.jpg",
      "/products/solares/FKS3-68ebaac2.jpg",
    ],
  },
  {
    id: "fk003-c04-frida-kahlo-sol",
    model: "FK-003 C04",
    brand: "Frida Kahlo",
    price: "$1,650",
    description:
      "Modelo icónico con lentes planas de cristal. La evolución de la forma redonda con cristal plano, manteniendo su esencia.",
    category: "Sol",
    badge: "Nuevo",
    images: [
      "/products/solares/FKSL4-ce07cd8f.jpg",
      "/products/solares/FKS4-ea86d1ad.jpg",
    ],
  },
  {
    id: "fk003-c09-frida-kahlo-sol",
    model: "FK-003 C09",
    brand: "Frida Kahlo",
    price: "$1,650",
    description:
      "Lentes de sol con diseño novedoso y vanguardista de la colección Frida Kahlo.",
    category: "Sol",
    badge: "Nuevo",
    images: [
      "/products/solares/FKSL5-9e669b02.jpg",
      "/products/solares/FKS5-819fa39c.jpg",
    ],
  },
  {
    id: "fk003-c16-frida-kahlo-sol",
    model: "FK-003 C16",
    brand: "Frida Kahlo",
    price: "$1,650",
    description:
      "Lentes de sol con diseño novedoso y vanguardista de la colección Frida Kahlo.",
    category: "Sol",
    badge: "Nuevo",
    images: [
      "/products/solares/FKSL6-b1e0f8cb.jpg",
      "/products/solares/FKS6-f3f295e7.jpg",
    ],
  },

  // Contacto
  {
    id: "hydraglyde-air-optix",
    model: "Hydraglyde",
    brand: "Air Optix",
    price: "$1,120",
    description:
      "Los lentes de contacto AIR OPTIX\u2122 plus HydraGlyde\u2122 son perfectos para quienes buscan lentes reutilizables de reemplazo mensual, diseñados para ofrecer comodidad.",
    category: "Contacto",
    badge: "Más pedido",
    images: ["/products/contacto/lentes10-4ac1893a.png"],
  },
  {
    id: "alcon-frecuent",
    model: "ALCON",
    brand: "Frecuent",
    price: "$1,064",
    description:
      "Lentes de contacto de uso frecuente con tecnología avanzada para máxima comodidad durante todo el día.",
    category: "Contacto",
    badge: "Nuevo",
    images: ["/products/contacto/lentes11-9434f124.webp"],
  },
  {
    id: "total1-alcon",
    model: "Total 1",
    brand: "Alcon",
    price: "$1,200",
    description:
      "Lentes de contacto de última generación con tecnología de gradiente acuoso para una comodidad excepcional.",
    category: "Contacto",
    badge: "Nuevo",
    images: ["/products/contacto/lentes12-7a23fd3e.webp"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
