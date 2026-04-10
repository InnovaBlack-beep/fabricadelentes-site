export interface Product {
  id: string;
  name: string;
  model: string;
  brand: string;
  price: number;
  priceFormatted: string;
  image: string;
  category: "oftalmicos" | "solares" | "contacto";
  description?: string;
}

export const oftalmicos: Product[] = [
  // Brizzant
  { id: "bl-vincent", name: "Vincent", model: "VINCENT", brand: "Brizzant", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/bl6-02c24b24.jpg", category: "oftalmicos", description: "Montura metálica redonda hexagonal con perfiles acuñados delgados y lentes planas de cristal de oro clásico." },
  { id: "bl-sydney", name: "Sydney", model: "SYDNEY", brand: "Brizzant", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/bl2-b52145f3.jpg", category: "oftalmicos", description: "Montura metálica redonda hexagonal con perfiles acuñados delgados." },
  { id: "bl-andre-azul", name: "Andre Azul", model: "ANDRE AZUL", brand: "Brizzant", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/bl3-68dce26b.jpg", category: "oftalmicos" },
  { id: "bl-andre-cafe", name: "Andre Café", model: "ANDRE CAFE", brand: "Brizzant", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/bl8-11a4e5f8.jpg", category: "oftalmicos" },
  { id: "bl-giovanni", name: "Giovanni", model: "GIOVANNI", brand: "Brizzant", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/bl1-80666f1f.jpg", category: "oftalmicos" },
  { id: "bl-dali", name: "Dalí", model: "DALI", brand: "Brizzant", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/bl4-29f105d4.jpg", category: "oftalmicos" },
  // Frida Kahlo
  { id: "fkl-1001m-bl", name: "FK1001M-BL", model: "FK1001M-BL", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FKL1-e4cd1228.jpg", category: "oftalmicos" },
  { id: "fkl-1004a-bl", name: "FK1004A-BL", model: "FK1004A-BL", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FKL2-ef116390.jpg", category: "oftalmicos" },
  { id: "fkl-1001m-bu", name: "FK1001M-BU", model: "FK1001M-BU", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FKL3-5eb6a330.jpg", category: "oftalmicos" },
  { id: "fkl-1004a-bu", name: "FK1004A-BU", model: "FK1004A-BU", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FKL4-ac86fdf3.jpg", category: "oftalmicos" },
  { id: "fkl-1005m-pu", name: "FK1005M-PU", model: "FK1005M-PU", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FKL5-1d2d0c30.jpg", category: "oftalmicos" },
  { id: "fkl-1006a-bl", name: "FK1006A-BL", model: "FK1006A-BL", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FKL6-eff4151a.jpg", category: "oftalmicos" },
  { id: "fkl-1007m-pi", name: "FK1007M-PI", model: "FK1007M-PI", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FKL7-7f961a7e.jpg", category: "oftalmicos" },
  { id: "fkl-1009m-bu", name: "FK1009M-BU", model: "FK1009M-BU", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FKL8-d10cc3de.jpg", category: "oftalmicos" },
  { id: "fkl-1013m-pu", name: "FK1013M-PU", model: "FK1013M-PU", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FKL9-ca4a0420.jpg", category: "oftalmicos" },
  // Frida Kahlo — Nueva colección
  { id: "fkl-101-c08", name: "Inés", model: "FK 101 C08", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK101-C08.jpg", category: "oftalmicos" },
  { id: "fkl-101-c20", name: "Inés", model: "FK 101 C20", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK101-C20.jpg", category: "oftalmicos" },
  { id: "fkl-102-c01", name: "Bonito", model: "FK 102 C01", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK102-C01.jpg", category: "oftalmicos" },
  { id: "fkl-102-c13", name: "Bonito", model: "FK 102 C13", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK102-C13.jpg", category: "oftalmicos" },
  { id: "fkl-102-c20", name: "Bonito", model: "FK 102 C20", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK102-C20.jpg", category: "oftalmicos" },
  { id: "fkl-104-c09", name: "María", model: "FK 104 C09", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK104-C09.jpg", category: "oftalmicos" },
  { id: "fkl-106-c16", name: "Picasso", model: "FK 106 C16", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK106-C16.jpg", category: "oftalmicos" },
  { id: "fkl-106-c21", name: "Picasso", model: "FK 106 C21", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK106-C21.jpg", category: "oftalmicos" },
  { id: "fkl-107-c09", name: "Casa Azul", model: "FK 107 C09", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK107-C09.jpg", category: "oftalmicos" },
  { id: "fkl-108-c01", name: "Matilde", model: "FK 108 C01", brand: "Frida Kahlo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/FK108-C01.jpg", category: "oftalmicos" },
  // Nobleman
  { id: "nol-hc04-08-c7", name: "HC04-08 C7", model: "HC04-08 C7", brand: "Nobleman", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/NOL1-541b9e74.jpg", category: "oftalmicos" },
  { id: "nol-hc05-10-c2", name: "HC05-10 C2", model: "HC05-10 C2", brand: "Nobleman", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/NO2-5fecad74.jpg", category: "oftalmicos" },
  { id: "nol-hc07-14-c5", name: "HC07-14 C5", model: "HC07-14 C5", brand: "Nobleman", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/NOL3-987ac48f.jpg", category: "oftalmicos" },
  { id: "nol-hc07-14-c2", name: "HC07-14 C2", model: "HC07-14 C2", brand: "Nobleman", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/NOL4-92943180.jpg", category: "oftalmicos" },
  { id: "nol-mf02-03-c2", name: "MF02-03 C2", model: "MF02-03 C2", brand: "Nobleman", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/NOL5-00eccef1.jpg", category: "oftalmicos" },
  { id: "nol-mf02-04-c10", name: "MF02-04 C10", model: "MF02-04 C10", brand: "Nobleman", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/NOL6-2b494ac3.jpg", category: "oftalmicos" },
  { id: "nol-mf03-05-c1", name: "MF03-05 C1", model: "MF03-05 C1", brand: "Nobleman", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/NOL7-4907a672.jpg", category: "oftalmicos" },
  { id: "nol-mm1027-c2", name: "MM1027 C2", model: "MM1027 C2", brand: "Nobleman", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/NOL8-77158d54.jpg", category: "oftalmicos" },
  { id: "nol-mm0011-c2", name: "MM0011 C2", model: "MM0011 C2", brand: "Nobleman", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/NOL9-75640a1d.jpg", category: "oftalmicos" },
  // Massimo
  { id: "mal-mm4004-c2", name: "MM4004 C2", model: "MM4004 C2", brand: "Massimo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/MAL1-86309c0e.jpg", category: "oftalmicos" },
  { id: "mal-mm4004-c3", name: "MM4004 C3", model: "MM4004 C3", brand: "Massimo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/MAL2-547d5921.jpg", category: "oftalmicos" },
  { id: "mal-wd1167-c1", name: "WD1167 C1", model: "WD1167 C1", brand: "Massimo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/MAL3-43ce1ec8.jpg", category: "oftalmicos" },
  { id: "mal-mr071-c09", name: "MR 071 C09", model: "MR 071 C09", brand: "Massimo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/MAL4-03621066.jpg", category: "oftalmicos" },
  { id: "mal-mr086-c13", name: "MR 086 C13", model: "MR 086 C13", brand: "Massimo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/MAL5-7bc3d53a.jpg", category: "oftalmicos" },
  { id: "mal-mr090-c09", name: "MR 090 C09", model: "MR 090 C09", brand: "Massimo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/MAL6-3170f4b3.jpg", category: "oftalmicos" },
  { id: "mal-mr098-c09", name: "MR 098 C09", model: "MR 098 C09", brand: "Massimo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/MAL7-46fcf064.jpg", category: "oftalmicos" },
  { id: "mal-mr100-c29", name: "MR 100 C29", model: "MR 100 C29", brand: "Massimo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/MAL8-d1f76825.jpg", category: "oftalmicos" },
  { id: "mal-mr101-c09", name: "MR 101 C09", model: "MR 101 C09", brand: "Massimo", price: 1949, priceFormatted: "$1,949", image: "/products/oftalmicos/MAL9-c2ee203b.jpg", category: "oftalmicos" },
];

export const solares: Product[] = [
  { id: "fks-001-c19", name: "FK 001 C19", model: "FK 001 C19", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL1-5ea420bc.jpg", category: "solares" },
  { id: "fks-001-c13", name: "FK 001 C13", model: "FK 001 C13", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL2-975aa408.jpg", category: "solares" },
  { id: "fks-001-c11", name: "FK 001 C11", model: "FK 001 C11", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL3-12125544.jpg", category: "solares" },
  { id: "fks-003-c04", name: "FK-003 C04", model: "FK-003 C04", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL4-ce07cd8f.jpg", category: "solares" },
  { id: "fks-003-c09", name: "FK-003 C09", model: "FK-003 C09", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL5-9e669b02.jpg", category: "solares" },
  { id: "fks-003-c16", name: "FK-003 C16", model: "FK-003 C16", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL6-b1e0f8cb.jpg", category: "solares" },
  { id: "fks-004-c09", name: "FK-004 C09", model: "FK-004 C09", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL7-f29fd241.jpg", category: "solares" },
  { id: "fks-004-c19", name: "FK-004 C19", model: "FK-004 C19", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL8-5c6791bf.jpg", category: "solares" },
  { id: "fks-005-c07", name: "FK-005 C07", model: "FK-005 C07", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL9-30fd373d.jpg", category: "solares" },
  { id: "fks-005-c16", name: "FK-005 C16", model: "FK-005 C16", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL10-dd8eb04a.jpg", category: "solares" },
  { id: "fks-006-c09", name: "FK-006 C09", model: "FK-006 C09", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL11-b9756cf2.jpg", category: "solares" },
  { id: "fks-006-c11", name: "FK-006 C11", model: "FK-006 C11", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL12-dd2607d7.jpg", category: "solares" },
  { id: "fks-007-c05", name: "FK-007 C05", model: "FK-007 C05", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL13-c580f4c5.jpg", category: "solares" },
  { id: "fks-007-c09", name: "FK-007 C09", model: "FK-007 C09", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL14-6481cecd.jpg", category: "solares" },
  { id: "fks-007-c19", name: "FK-007 C19", model: "FK-007 C19", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL15-cc812cc9.jpg", category: "solares" },
  { id: "fks-010-c01", name: "FK-010 C01", model: "FK-010 C01", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL16-ba9839a6.jpg", category: "solares" },
  { id: "fks-011-c04", name: "FK-011 C04", model: "FK-011 C04", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL17-59191938.jpg", category: "solares" },
  { id: "fks-011-c19", name: "FK-011 C19", model: "FK-011 C19", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL18-07df05bd.jpg", category: "solares" },
  { id: "fks-012-c09", name: "FK-012 C09", model: "FK-012 C09", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL19-d74582b9.jpg", category: "solares" },
  { id: "fks-013-c09", name: "FK-013 C09", model: "FK-013 C09", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL20-5f4afdc3.jpg", category: "solares" },
  { id: "fks-013-c13", name: "FK-013 C13", model: "FK-013 C13", brand: "Frida Kahlo", price: 1649, priceFormatted: "$1,649", image: "/products/solares/FKSL21-60df5e9c.jpg", category: "solares" },
  // André Badi
  { id: "ab-004-c29", name: "AB-004 C29", model: "AB-004 C29", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB004-C29.jpg", category: "solares", description: "Armazón TR90 con micas polarizadas. Diseño redondo clásico con lentes espejo naranja." },
  { id: "ab-005-c13", name: "AB-005 C13", model: "AB-005 C13", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB005-C13.jpg", category: "solares", description: "Armazón TR90 clubmaster con micas UV400 espejo azul." },
  { id: "ab-006-c10", name: "AB-006 C10", model: "AB-006 C10", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB006-C10.jpg", category: "solares", description: "Armazón TR90 redondo cat-eye con micas Revo UV400 púrpura." },
  { id: "ab-007-c29", name: "AB-007 C29", model: "AB-007 C29", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB007-C29.jpg", category: "solares", description: "Armazón TR90 clubmaster con micas polarizadas azul." },
  { id: "ab-007-c10", name: "AB-007 C10", model: "AB-007 C10", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB007-C10.jpg", category: "solares", description: "Armazón TR90 clubmaster con micas polarizadas verde." },
  { id: "ab-008-c04", name: "AB-008 C04", model: "AB-008 C04", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB008-C04.jpg", category: "solares", description: "Armazón TR90 redondo oversize con micas polarizadas. Acabado tortuga/beige." },
  { id: "ab-008-c10", name: "AB-008 C10", model: "AB-008 C10", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB008-C10.jpg", category: "solares", description: "Armazón TR90 redondo oversize con micas polarizadas. Acabado negro." },
  { id: "ab-011-c03", name: "AB-011 C03", model: "AB-011 C03", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB011-C03.jpg", category: "solares", description: "Armazón TR90 cat-eye con micas UV400. Acabado café/rose gold." },
  { id: "ab-011-c09", name: "AB-011 C09", model: "AB-011 C09", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB011-C09.jpg", category: "solares", description: "Armazón TR90 cat-eye con micas UV400. Acabado negro/plata." },
  { id: "ab-011-c19", name: "AB-011 C19", model: "AB-011 C19", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB011-C19.jpg", category: "solares", description: "Armazón TR90 cat-eye con micas UV400. Acabado rosa/rose gold." },
  { id: "ab-012-c04", name: "AB-012 C04", model: "AB-012 C04", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB012-C04.jpg", category: "solares", description: "Armazón TR90 cat-eye oversize con micas UV400. Acabado tortuga." },
  { id: "ab-012-c09", name: "AB-012 C09", model: "AB-012 C09", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB012-C09.jpg", category: "solares", description: "Armazón TR90 cat-eye oversize con micas UV400. Acabado negro." },
  { id: "ab-012-c07", name: "AB-012 C07", model: "AB-012 C07", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB012-C07.jpg", category: "solares", description: "Armazón TR90 cat-eye oversize con micas UV400. Acabado vino." },
  { id: "ab-013-c05", name: "AB-013 C05", model: "AB-013 C05", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB013-C05.jpg", category: "solares", description: "Armazón TR90 wayfarer con micas UV400. Acabado cristal/azul." },
  { id: "ab-013-c04", name: "AB-013 C04", model: "AB-013 C04", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB013-C04.jpg", category: "solares", description: "Armazón TR90 wayfarer con micas UV400. Acabado tortuga mate." },
  { id: "ab-013-c10", name: "AB-013 C10", model: "AB-013 C10", brand: "André Badi", price: 1649, priceFormatted: "$1,649", image: "/products/solares/AB013-C10.jpg", category: "solares", description: "Armazón TR90 wayfarer con micas UV400. Acabado negro mate." },
];

export const contacto: Product[] = [
  { id: "ct-hydraglyde", name: "Hydraglyde", model: "Hydraglyde", brand: "Air Optix", price: 1120, priceFormatted: "$1,120", image: "/products/contacto/lentes10-4ac1893a.png", category: "contacto", description: "Los lentes de contacto AIR OPTIX plus HydraGlyde son perfectos para uso diario con máxima comodidad." },
  { id: "ct-alcon", name: "Alcon Frecuent", model: "ALCON", brand: "Frecuent", price: 1064, priceFormatted: "$1,064", image: "/products/contacto/lentes11-9434f124.webp", category: "contacto" },
  { id: "ct-total1", name: "Total 1", model: "Total 1", brand: "Alcon", price: 1200, priceFormatted: "$1,200", image: "/products/contacto/lentes12-7a23fd3e.webp", category: "contacto" },
];

export const allProducts = [...oftalmicos, ...solares, ...contacto];

export const brands = {
  oftalmicos: ["Brizzant", "Frida Kahlo", "Nobleman", "Massimo"],
  solares: ["Frida Kahlo", "André Badi"],
  contacto: ["Air Optix", "Frecuent", "Alcon"],
};

// Map data/products IDs → lib/products slugs (for /producto/[id] pages)
const slugMap: Record<string, string> = {
  "bl-vincent": "vincent-brizzant",
  "bl-sydney": "sydney-brizzant",
  "bl-andre-azul": "andre-azul-brizzant",
  "bl-andre-cafe": "andre-azul-brizzant",
  "bl-giovanni": "giovanni-brizzant",
  "bl-dali": "dali-brizzant",
  "fkl-1001m-bl": "fk1001m-bl-frida-kahlo",
  "fkl-1004a-bl": "fk1004a-bl-frida-kahlo",
  "fkl-1001m-bu": "fk1001m-bl-frida-kahlo",
  "fkl-1004a-bu": "fk1004a-bl-frida-kahlo",
  "fkl-1005m-pu": "fk1005m-pu-frida-kahlo",
  "fkl-1006a-bl": "fk1001m-bl-frida-kahlo",
  "fkl-1007m-pi": "fk1005m-pu-frida-kahlo",
  "fkl-1009m-bu": "fk1001m-bl-frida-kahlo",
  "fkl-1013m-pu": "fk1005m-pu-frida-kahlo",
  "nol-hc04-08-c7": "hc04-08-c7-nobleman",
  "nol-hc05-10-c2": "hc05-10-c2-nobleman",
  "nol-hc07-14-c5": "hc07-14-c5-nobleman",
  "nol-hc07-14-c2": "hc04-08-c7-nobleman",
  "nol-mf02-03-c2": "hc04-08-c7-nobleman",
  "nol-mf02-04-c10": "hc05-10-c2-nobleman",
  "nol-mf03-05-c1": "hc07-14-c5-nobleman",
  "nol-mm1027-c2": "hc04-08-c7-nobleman",
  "nol-mm0011-c2": "hc05-10-c2-nobleman",
  "mal-mm4004-c2": "mm4004-c2-massimo",
  "mal-mm4004-c3": "mm4004-c3-massimo",
  "mal-wd1167-c1": "wd1167-c1-massimo",
  "mal-mr071-c09": "mm4004-c2-massimo",
  "mal-mr086-c13": "mm4004-c3-massimo",
  "mal-mr090-c09": "wd1167-c1-massimo",
  "mal-mr098-c09": "mm4004-c2-massimo",
  "mal-mr100-c29": "mm4004-c3-massimo",
  "mal-mr101-c09": "wd1167-c1-massimo",
  "fks-001-c19": "fk001-c19-frida-kahlo-sol",
  "fks-001-c13": "fk001-c13-frida-kahlo-sol",
  "fks-001-c11": "fk001-c11-frida-kahlo-sol",
  "fks-003-c04": "fk003-c04-frida-kahlo-sol",
  "fks-003-c09": "fk003-c09-frida-kahlo-sol",
  "fks-003-c16": "fk003-c16-frida-kahlo-sol",
  "fks-004-c09": "fk003-c04-frida-kahlo-sol",
  "fks-004-c19": "fk001-c19-frida-kahlo-sol",
  "fks-005-c07": "fk003-c09-frida-kahlo-sol",
  "fks-005-c16": "fk003-c16-frida-kahlo-sol",
  "fks-006-c09": "fk001-c13-frida-kahlo-sol",
  "fks-006-c11": "fk001-c11-frida-kahlo-sol",
  "fks-007-c05": "fk003-c04-frida-kahlo-sol",
  "fks-007-c09": "fk003-c09-frida-kahlo-sol",
  "fks-007-c19": "fk001-c19-frida-kahlo-sol",
  "fks-010-c01": "fk001-c13-frida-kahlo-sol",
  "fks-011-c04": "fk003-c04-frida-kahlo-sol",
  "fks-011-c19": "fk001-c19-frida-kahlo-sol",
  "fks-012-c09": "fk003-c09-frida-kahlo-sol",
  "fks-013-c09": "fk003-c16-frida-kahlo-sol",
  "fks-013-c13": "fk001-c13-frida-kahlo-sol",
  // FK nueva colección oftálmico
  "fkl-101-c08": "fk101-c08-frida-kahlo",
  "fkl-101-c20": "fk101-c20-frida-kahlo",
  "fkl-102-c01": "fk102-c01-frida-kahlo",
  "fkl-102-c13": "fk102-c13-frida-kahlo",
  "fkl-102-c20": "fk102-c20-frida-kahlo",
  "fkl-104-c09": "fk104-c09-frida-kahlo",
  "fkl-106-c16": "fk106-c16-frida-kahlo",
  "fkl-106-c21": "fk106-c21-frida-kahlo",
  "fkl-107-c09": "fk107-c09-frida-kahlo",
  "fkl-108-c01": "fk108-c01-frida-kahlo",
  // André Badi solar
  "ab-004-c29": "ab004-c29-andre-badi",
  "ab-005-c13": "ab005-c13-andre-badi",
  "ab-006-c10": "ab006-c10-andre-badi",
  "ab-007-c29": "ab007-c29-andre-badi",
  "ab-007-c10": "ab007-c29-andre-badi",
  "ab-008-c04": "ab008-c04-andre-badi",
  "ab-008-c10": "ab008-c04-andre-badi",
  "ab-011-c03": "ab011-c03-andre-badi",
  "ab-011-c09": "ab011-c03-andre-badi",
  "ab-011-c19": "ab011-c03-andre-badi",
  "ab-012-c04": "ab012-c04-andre-badi",
  "ab-012-c09": "ab012-c04-andre-badi",
  "ab-012-c07": "ab012-c04-andre-badi",
  "ab-013-c05": "ab013-c05-andre-badi",
  "ab-013-c04": "ab013-c05-andre-badi",
  "ab-013-c10": "ab013-c05-andre-badi",
  // Contacto
  "ct-hydraglyde": "hydraglyde-air-optix",
  "ct-alcon": "alcon-frecuent",
  "ct-total1": "total1-alcon",
};

export function getDetailUrl(productId: string): string {
  const slug = slugMap[productId];
  return slug ? `/producto/${slug}` : `/producto/${productId}`;
}
