export const magnetTypes = [
  {
    grade: "Grade N35–N55",
    name: "Neodymium Iron Boron (NdFeB)",
    description:
      "The world's strongest permanent magnet family. Essential for EV traction motors, wind turbine generators, industrial servo drives, hard disk drives, and defence actuators. Sintered and bonded NdFeB grades from N35 to N55, with heavy rare earth additions for elevated operating temperatures.",
    specs: ["Nd, Pr, Dy, Tb, Fe, B", "BHmax: 35–55 MGOe", "Tmax: 80°C–220°C"]
  },
  {
    grade: "Grade SmCo5 / Sm2Co17",
    name: "Samarium Cobalt (SmCo)",
    description:
      "Superior thermal stability and corrosion resistance at extreme temperatures. Preferred in aerospace, defence electronics, turbomachinery, and satellites where NdFeB would demagnetise.",
    specs: ["Sm, Co, Fe, Cu, Zr", "BHmax: 16–32 MGOe", "Tmax: up to 350°C"]
  },
  {
    grade: "Hard Ferrite / Ceramic",
    name: "Ferrite & AlNiCo Magnets",
    description:
      "Lower-cost, corrosion-resistant permanent magnets using iron oxide and barium/strontium. AlNiCo offers exceptional temperature stability for industrial instruments.",
    specs: ["Fe2O3, BaCO3, SrO", "Al, Ni, Co, Fe, Cu", "Tmax: up to 540°C"]
  }
] as const;

export const magnetElements = [
  {
    symbol: "Nd",
    name: "Neodymium",
    num: "Element 60 · Light Rare Earth",
    body: "The primary rare earth in NdFeB magnets — comprising ~29% by weight of each magnet. India's EV transition will require significant annual volumes.",
    apps: ["EV Traction Motors", "Wind Generators", "Industrial Servo", "MRI Machines", "Hard Drives"]
  },
  {
    symbol: "Dy",
    name: "Dysprosium",
    num: "Element 66 · Heavy Rare Earth",
    body: "Added to NdFeB in 2–6% quantities to raise Curie temperature and prevent demagnetisation in high-heat EV motors and industrial drives.",
    apps: ["High-Temp NdFeB", "Nuclear Reactors", "Data Storage", "Laser Materials"]
  },
  {
    symbol: "Pr",
    name: "Praseodymium",
    num: "Element 59 · Light Rare Earth",
    body: "Often alloyed with neodymium (as didymium, NdPr) in magnets at 20–25% substitution. Also used in high-strength aluminium alloys and ceramic pigments.",
    apps: ["NdPr Alloy Magnets", "Al-Pr Aerospace Alloys", "Ceramic Pigments", "Fibre Optics"]
  },
  {
    symbol: "Sm",
    name: "Samarium",
    num: "Element 62 · Light Rare Earth",
    body: "The key rare earth in Samarium Cobalt (SmCo) magnets — preferred for aerospace, space, and defence where temperature stability matters more than cost.",
    apps: ["Aerospace Actuators", "Satellite Systems", "Defence Electronics", "Turbomachinery"]
  },
  {
    symbol: "Tb",
    name: "Terbium",
    num: "Element 65 · Heavy Rare Earth",
    body: "Used in terfenol-D magnetostrictive alloys and as a partial Dy substitute in NdFeB magnets. Also critical in green phosphors for energy-efficient lighting.",
    apps: ["Magnetostrictive Devices", "Green Phosphors", "High-Efficiency Motors", "Sonar Transducers"]
  }
] as const;

export const magnetFlowSteps = [
  { label: "REE Mining", sub: "Bastnäsite / Monazite ore extraction in India & overseas" },
  { label: "Separation", sub: "Solvent extraction to separate Nd, Pr, Dy, Tb oxides" },
  { label: "Metal Alloy", sub: "NdPr / NdDy / NdTb alloy ingots for magnet makers" },
  { label: "Sintering", sub: "Powder metallurgy sintering at 1000–1100°C to form magnet blanks" },
  { label: "OEM Supply", sub: "Finished magnets to EV, wind, defence & industrial OEMs" }
] as const;

export const magnetMarketStats = [
  { value: "2,50,000", unit: "T", label: "Global NdFeB demand by 2030 (tonnes, industry estimate)" },
  { value: "95", unit: "%", label: "China's share of global REE magnet production (industry estimate)" },
  { value: "₹12,000", unit: "Cr", label: "India permanent magnet market by 2027 (market estimate)" },
  { value: "1", unit: "kg", label: "NdFeB needed per kW of EV motor output (rule of thumb)" }
] as const;
