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

export function getBadgeColors(badge: BadgeType): { bg: string; text: string } {
  switch (badge) {
    case "Más vendido": return { bg: "bg-[#1A1818]", text: "text-white" };
    case "Exclusivo": return { bg: "bg-[#B5956E]", text: "text-white" };
    case "Nuevo": return { bg: "bg-[#2D5A3D]", text: "text-white" };
    case "Premium": return { bg: "bg-[#4A3728]", text: "text-white" };
    case "Clásico": return { bg: "bg-[#6B7280]", text: "text-white" };
    case "Trending": return { bg: "bg-[#7C3AED]", text: "text-white" };
    case "Más pedido": return { bg: "bg-[#DC2626]", text: "text-white" };
    default: return { bg: "bg-[#1A1818]", text: "text-white" };
  }
}

const brizzantDesc =
  "La montura metálica redonda hexagonal cuenta con perfiles acuñados delgados y lentes planas de cristal de oro clásico con patillas muy delgadas. Mezcla y combina opciones de colores básicos flash para crear la combinación perfecta. Incluye graduación + antirreflejante + blue cut.";

const fridaGraduadosDesc =
  "La línea FRIDA KAHLO se caracteriza por su nivel de elegancia y sofisticación. Poseen gran durabilidad con un bonito estilo. Diseño inspirado en su arte y espíritu creativo. Incluye graduación + antirreflejante + blue cut.";

const noblemanDesc =
  "Colección Nobleman con diseño clásico y elegante. Armazones de alta calidad con acabados premium para un look sofisticado. Incluye graduación + antirreflejante + blue cut.";

const massimoDesc =
  "Colección Massimo con líneas modernas y materiales de primera calidad. Diseño contemporáneo para quienes buscan estilo y comodidad. Incluye graduación + antirreflejante + blue cut.";

export const products: Product[] = [
  // Graduados - Brizzant
  {
    id: "vincent-brizzant",
    model: "VINCENT",
    brand: "Brizzant",
    price: "$1,949",
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
    price: "$1,949",
    description: brizzantDesc,
    category: "Graduados",
    badge: "Clásico",
    images: [
      "/products/oftalmicos/bl2-b52145f3.jpg",
      "/products/oftalmicos/b2-48c880d5.jpg",
    ],
  },
  {
    id: "andre-azul-brizzant",
    model: "ANDRE AZUL",
    brand: "Brizzant",
    price: "$1,949",
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
    price: "$1,949",
    description: brizzantDesc,
    category: "Graduados",
    badge: "Clásico",
    images: [
      "/products/oftalmicos/bl1-80666f1f.jpg",
      "/products/oftalmicos/b1-1c21a102.jpg",
    ],
  },
  {
    id: "dali-brizzant",
    model: "DALI",
    brand: "Brizzant",
    price: "$1,949",
    description: brizzantDesc,
    category: "Graduados",
    badge: "Trending",
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
    price: "$1,949",
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
    price: "$1,949",
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
    price: "$1,949",
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
    price: "$1,949",
    description: noblemanDesc,
    category: "Graduados",
    badge: "Clásico",
    images: ["/products/oftalmicos/NOL1-541b9e74.jpg"],
  },
  {
    id: "hc05-10-c2-nobleman",
    model: "HC05-10 C2",
    brand: "Nobleman",
    price: "$1,949",
    description: noblemanDesc,
    category: "Graduados",
    badge: "Clásico",
    images: ["/products/oftalmicos/NO2-5fecad74.jpg"],
  },
  {
    id: "hc07-14-c5-nobleman",
    model: "HC07-14 C5",
    brand: "Nobleman",
    price: "$1,949",
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
    price: "$1,949",
    description: massimoDesc,
    category: "Graduados",
    badge: "Premium",
    images: ["/products/oftalmicos/MAL1-86309c0e.jpg"],
  },
  {
    id: "mm4004-c3-massimo",
    model: "MM4004 C3",
    brand: "Massimo",
    price: "$1,949",
    description: massimoDesc,
    category: "Graduados",
    badge: "Premium",
    images: ["/products/oftalmicos/MAL2-547d5921.jpg"],
  },
  {
    id: "wd1167-c1-massimo",
    model: "WD1167 C1",
    brand: "Massimo",
    price: "$1,949",
    description: massimoDesc,
    category: "Graduados",
    badge: "Premium",
    images: ["/products/oftalmicos/MAL3-43ce1ec8.jpg"],
  },

  // Graduados - Frida Kahlo Nueva Colección
  {
    id: "fk101-c08-frida-kahlo",
    model: "FK 101 C08 — Inés",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo Inés de la nueva colección Frida Kahlo. Semi-cat-eye metálico en acabado Silver Lilac, con detalles de color en las puntas para un look femenino y sofisticado. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK101-C08.jpg"],
  },
  {
    id: "fk101-c20-frida-kahlo",
    model: "FK 101 C20 — Inés",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo Inés de la nueva colección Frida Kahlo. Semi-cat-eye metálico en acabado Gold Red, detalles de color en las puntas para un look femenino y sofisticado. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK101-C20.jpg"],
  },
  {
    id: "fk102-c01-frida-kahlo",
    model: "FK 102 C01 — Bonito",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo Bonito de la nueva colección Frida Kahlo. Redondo mixto metal-acetato con detalle ondulado superior, acabado Silver Aqua. Personalidad artística en cada trazo. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK102-C01.jpg"],
  },
  {
    id: "fk102-c13-frida-kahlo",
    model: "FK 102 C13 — Bonito",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo Bonito de la nueva colección Frida Kahlo. Redondo mixto metal-acetato con detalle ondulado superior, acabado Silver Black. Personalidad artística y sofisticación. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK102-C13.jpg"],
  },
  {
    id: "fk102-c20-frida-kahlo",
    model: "FK 102 C20 — Bonito",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo Bonito de la nueva colección Frida Kahlo. Redondo mixto metal-acetato con detalle ondulado superior, acabado Gold Magenta. Personalidad artística con un toque vibrante. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK102-C20.jpg"],
  },
  {
    id: "fk104-c09-frida-kahlo",
    model: "FK 104 C09 — María",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo María de la nueva colección Frida Kahlo. Acetato oversize redondo en acabado Silver Black, un look audaz que se convierte en statement piece. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK104-C09.jpg"],
  },
  {
    id: "fk106-c16-frida-kahlo",
    model: "FK 106 C16 — Picasso",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo Picasso de la nueva colección Frida Kahlo. Cat-eye en acetato con colores vibrantes Pink Blue Purple, pura inspiración artística. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK106-C16.jpg"],
  },
  {
    id: "fk106-c21-frida-kahlo",
    model: "FK 106 C21 — Picasso",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo Picasso de la nueva colección Frida Kahlo. Cat-eye en acetato con paleta Orange Purple Black, inspiración artística en cada detalle. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK106-C21.jpg"],
  },
  {
    id: "fk107-c09-frida-kahlo",
    model: "FK 107 C09 — Casa Azul",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo Casa Azul de la nueva colección Frida Kahlo. Cat-eye en acetato negro, inspirado en la icónica casa de Coyoacán donde nació el arte de Frida. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK107-C09.jpg"],
  },
  {
    id: "fk108-c01-frida-kahlo",
    model: "FK 108 C01 — Matilde",
    brand: "Frida Kahlo",
    price: "$1,949",
    description: "Modelo Matilde de la nueva colección Frida Kahlo. Cat-eye en acetato con degradado Black Blue, sofisticación y personalidad en una sola pieza. Incluye graduación + antirreflejante + blue cut.",
    category: "Graduados",
    badge: "Nuevo",
    images: ["/products/oftalmicos/FK108-C01.jpg"],
  },

  // Sol - Frida Kahlo
  {
    id: "fk001-c19-frida-kahlo-sol",
    model: "FK 001 C19",
    brand: "Frida Kahlo",
    price: "$1,649",
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
    price: "$1,649",
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
    price: "$1,649",
    description:
      "Estilo retro y atemporal. Diseño inconfundible que ha sido históricamente la elección de los referentes intelectuales y culturales.",
    category: "Sol",
    badge: "Exclusivo",
    images: [
      "/products/solares/FKSL3-12125544.jpg",
      "/products/solares/FKS3-68ebaac2.jpg",
    ],
  },
  {
    id: "fk003-c04-frida-kahlo-sol",
    model: "FK-003 C04",
    brand: "Frida Kahlo",
    price: "$1,649",
    description:
      "Modelo icónico con lentes planas de cristal. La evolución de la forma redonda con cristal plano, manteniendo su esencia.",
    category: "Sol",
    badge: "Exclusivo",
    images: [
      "/products/solares/FKSL4-ce07cd8f.jpg",
      "/products/solares/FKS4-ea86d1ad.jpg",
    ],
  },
  {
    id: "fk003-c09-frida-kahlo-sol",
    model: "FK-003 C09",
    brand: "Frida Kahlo",
    price: "$1,649",
    description:
      "Lentes de sol con diseño novedoso y vanguardista de la colección Frida Kahlo.",
    category: "Sol",
    badge: "Exclusivo",
    images: [
      "/products/solares/FKSL5-9e669b02.jpg",
      "/products/solares/FKS5-819fa39c.jpg",
    ],
  },
  {
    id: "fk003-c16-frida-kahlo-sol",
    model: "FK-003 C16",
    brand: "Frida Kahlo",
    price: "$1,649",
    description:
      "Lentes de sol con diseño novedoso y vanguardista de la colección Frida Kahlo.",
    category: "Sol",
    badge: "Exclusivo",
    images: [
      "/products/solares/FKSL6-b1e0f8cb.jpg",
      "/products/solares/FKS6-f3f295e7.jpg",
    ],
  },

  // Sol - André Badi
  {
    id: "ab004-c29-andre-badi",
    model: "AB-004 C29",
    brand: "André Badi",
    price: "$1,649",
    description: "Diseño cosmopolita con silueta redonda clásica y lentes espejo naranja. Ultraligeros con protección UV400 polarizada para el día a día.",
    category: "Sol",
    badge: "Nuevo",
    images: ["/products/solares/AB004-C29.jpg"],
  },
  {
    id: "ab005-c13-andre-badi",
    model: "AB-005 C13",
    brand: "André Badi",
    price: "$1,649",
    description: "Inspiración urbana con línea clubmaster en negro mate y lentes espejo azul. Actitud contemporánea con protección UV400.",
    category: "Sol",
    badge: "Nuevo",
    images: ["/products/solares/AB005-C13.jpg"],
  },
  {
    id: "ab006-c10-andre-badi",
    model: "AB-006 C10",
    brand: "André Badi",
    price: "$1,649",
    description: "Diseño vanguardista cat-eye redondo en negro con lentes Revo púrpura. Estilo que destaca con protección UV400.",
    category: "Sol",
    badge: "Nuevo",
    images: ["/products/solares/AB006-C10.jpg"],
  },
  {
    id: "ab007-c29-andre-badi",
    model: "AB-007 C29",
    brand: "André Badi",
    price: "$1,649",
    description: "Elegancia urbana en línea clubmaster con lentes polarizadas azul. Para quienes viven la ciudad con estilo y protección total.",
    category: "Sol",
    badge: "Trending",
    images: ["/products/solares/AB007-C29.jpg"],
  },
  {
    id: "ab008-c04-andre-badi",
    model: "AB-008 C04",
    brand: "André Badi",
    price: "$1,649",
    description: "Silueta oversize en tortuga y beige con lentes polarizadas. Sofisticación femenina para cada momento del día.",
    category: "Sol",
    badge: "Trending",
    images: ["/products/solares/AB008-C04.jpg"],
  },
  {
    id: "ab011-c03-andre-badi",
    model: "AB-011 C03",
    brand: "André Badi",
    price: "$1,649",
    description: "Inspiración parisina en cat-eye café con acentos rose gold. Elegancia atemporal con protección UV400.",
    category: "Sol",
    badge: "Trending",
    images: ["/products/solares/AB011-C03.jpg"],
  },
  {
    id: "ab012-c04-andre-badi",
    model: "AB-012 C04",
    brand: "André Badi",
    price: "$1,649",
    description: "Cat-eye oversize en tortuga con lentes degradadas. Presencia audaz y cosmopolita con protección UV400.",
    category: "Sol",
    badge: "Exclusivo",
    images: ["/products/solares/AB012-C04.jpg"],
  },
  {
    id: "ab013-c05-andre-badi",
    model: "AB-013 C05",
    brand: "André Badi",
    price: "$1,649",
    description: "Wayfarer en cristal transparente con lentes espejo azul. Frescura y actitud moderna con protección UV400.",
    category: "Sol",
    badge: "Clásico",
    images: ["/products/solares/AB013-C05.jpg"],
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
    badge: "Clásico",
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
    badge: "Premium",
    images: ["/products/contacto/lentes12-7a23fd3e.webp"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
