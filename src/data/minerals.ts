export const minerals = [
  {
    symbol: "Nd",
    name: "Neodymium",
    category: "Rare earth elements",
    application: "NdFeB permanent magnets, EV motors and wind energy systems",
    image: "/minerals/neodymium.svg"
  },
  {
    symbol: "Dy",
    name: "Dysprosium",
    category: "Rare earth elements",
    application: "High-temperature permanent magnet performance",
    image: "/minerals/dysprosium.jpg"
  },
  {
    symbol: "Pr",
    name: "Praseodymium",
    category: "Rare earth elements",
    application: "Permanent magnet alloys and specialist material applications",
    image: "/minerals/praseodymium.svg"
  },
  {
    symbol: "Li",
    name: "Lithium",
    category: "Battery materials",
    application: "Rechargeable batteries and energy storage",
    image: "/minerals/lithium.jpg"
  },
  {
    symbol: "Ga",
    name: "Gallium",
    category: "Advanced electronics",
    application: "GaN semiconductors, power electronics and RF devices",
    image: "/minerals/gallium.jpg"
  },
  {
    symbol: "Ge",
    name: "Germanium",
    category: "Advanced materials",
    application: "Fibre optics, infrared optics and specialist electronics",
    image: "/minerals/germanium.jpg"
  },
  {
    symbol: "In",
    name: "Indium",
    category: "Advanced materials",
    application: "Indium tin oxide, displays and selected solar applications",
    image: "/minerals/indium.jpg"
  },
  {
    symbol: "Cu",
    name: "Copper",
    category: "Industrial metals",
    application: "Electrification, wiring, data infrastructure and PCBs",
    image: "/minerals/copper.jpg"
  },
  {
    symbol: "Ta",
    name: "Tantalum",
    category: "Specialty metals",
    application: "Capacitors and specialist electronic equipment",
    image: "/minerals/tantalum.jpg"
  },
  {
    symbol: "Mn",
    name: "Manganese",
    category: "Industrial metals",
    application: "Steelmaking, LMO batteries, rail crossings (Hadfield steel), and fertilizers",
    image: "/minerals/manganese.jpg"
  },
  {
    symbol: "Co",
    name: "Cobalt",
    category: "Battery materials",
    application: "Battery cathodes, superalloys, magnets, and defence coatings",
    image: "/minerals/lithium.jpg"
  },
  {
    symbol: "C",
    name: "Graphite",
    category: "Battery materials",
    application: "Battery anodes, refractories, lubricants, and nuclear moderators",
    image: "/minerals/manganese.jpg"
  },
  {
    symbol: "V",
    name: "Vanadium",
    category: "Industrial metals",
    application: "Flow batteries, high-strength steel, and aerospace alloys",
    image: "/minerals/copper.jpg"
  },
  {
    symbol: "Ni",
    name: "Nickel",
    category: "Battery materials",
    application: "NMC batteries, stainless steel, electroplating, and magnets",
    image: "/minerals/copper.jpg"
  },
  {
    symbol: "Ti",
    name: "Titanium",
    category: "Advanced manufacturing",
    application: "Aerospace frames, medical implants, armour, and pigments",
    image: "/minerals/tantalum.jpg"
  },
  {
    symbol: "Si",
    name: "Silicon",
    category: "Semiconductors",
    application: "Semiconductor wafers, solar cells, microchips, and MEMS devices",
    image: "/minerals/gallium.jpg"
  },
  {
    symbol: "Cr",
    name: "Chromium",
    category: "Industrial metals",
    application: "Stainless steel (SS304/316), rail coach panels, hard coatings, and refractories",
    image: "/minerals/manganese.jpg"
  },
  {
    symbol: "REE",
    name: "Rare Earths",
    category: "Rare earth elements",
    application: "Permanent magnets, defence systems, wind turbines, and electronics",
    image: "/minerals/neodymium.svg"
  }
] as const;

export type Mineral = (typeof minerals)[number];
