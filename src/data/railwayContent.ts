export const railCategories = [
  {
    label: "Structural Materials",
    title: "Coach Body & Underframe",
    description:
      "The carbody shell, underframe, floor structure, and roof panels of modern rail coaches demand high-tensile stainless steel (austenitic SS304/SS316L) and Corten weathering steel for corrosion resistance, impact strength, and fatigue life over 35+ year service lives. Lightweight aluminium extrusions are used in metro coaches for reduced tare weight.",
    minerals: ["Chromium (Cr)", "Nickel (Ni)", "Manganese (Mn)", "Silicon (Si)", "Molybdenum (Mo)", "Aluminium (Al)", "Vanadium (V)", "Carbon Steel"]
  },
  {
    label: "Propulsion & Electrical",
    title: "Traction Motors & Electrics",
    description:
      "Electric Multiple Units (EMUs), Vande Bharat, and metro coaches use 3-phase asynchronous or permanent magnet synchronous traction motors. PMSM traction motors require NdFeB magnets for higher efficiency. Copper windings, silicon steel laminations, and rare earth magnets form the core of every rail traction system. Lithium-ion hotel load batteries are increasingly used for power backup.",
    minerals: ["Copper (Cu)", "Neodymium (Nd)", "Dysprosium (Dy)", "Silicon Steel", "Lithium (Li)", "Cobalt (Co)", "Iron (Fe)", "Rare Earths"]
  },
  {
    label: "Bogies, Wheels & Track",
    title: "Running Gear & Infrastructure",
    description:
      "Bogies are safety-critical components subject to fatigue, impact, and thermal cycling. Rail wheels and axles use premium medium-carbon manganese steel. Crossings and points use Hadfield manganese steel (11–14% Mn). Track rails use high-strength alloy steels with chromium and vanadium additions.",
    minerals: ["Manganese (Mn)", "Chromium (Cr)", "Vanadium (V)", "Boron (B)", "Molybdenum (Mo)", "Nickel (Ni)", "High-C Steel", "Alloy Steel"]
  }
] as const;

export const railwaySpecRows = [
  { component: "Carbody Shell (LHB/Vande Bharat)", mineral: "SS304 / SS316L (Cr 18%, Ni 8%)", spec: "EN 10088 / IS 6911 Austenitic SS", grade: "Critical" },
  { component: "Metro Coach Carbody", mineral: "Aluminium 6005A-T6 / 6082-T6", spec: "EN 755 Extruded Al Alloy Profile", grade: "Critical" },
  { component: "Traction Motor Windings", mineral: "ETP Copper (Cu 99.9%+)", spec: "IS 191 / IEC 60228 Class 5", grade: "Critical" },
  { component: "PMSM Traction Motor Magnets", mineral: "NdFeB (Nd, Pr, Dy, Fe, B)", spec: "N40H–N45SH Grade, Coated", grade: "Strategic" },
  { component: "Motor Laminations (Stator/Rotor)", mineral: "Silicon Steel (Fe-Si 3.2%)", spec: "M250-50A (IEC 60404-8-4)", grade: "Critical" },
  { component: "Rail Wheels & Axles", mineral: "Mn-Cr-Mo Steel (0.55–0.65% C)", spec: "RDSO Spec. WD-01-HLS-2005", grade: "Critical" },
  { component: "Bogie Frame", mineral: "IS 2062 HT E350 Steel (V, Mn)", spec: "RDSO Spec. WD-12-Bogie-2018", grade: "Critical" },
  { component: "Rail Track (Head-Hardened)", mineral: "900A / 1100HT Rail Steel (Cr-V)", spec: "IRS T-12 / EN 13674-1", grade: "Strategic" },
  { component: "Manganese Crossings (Points)", mineral: "Hadfield Mn Steel (11–14% Mn)", spec: "IRS T-52 / RDSO Drawing", grade: "Strategic" },
  { component: "Hotel Load Battery (EMU/Vande)", mineral: "LiFePO4 (Li, Fe, P, graphite)", spec: "IEC 62619 Railway Battery", grade: "Critical" },
  { component: "Pantograph & OHE Fittings", mineral: "Cu-Cr-Zr Contact Wire (Cu 99%+)", spec: "IS 8084 / IEC 60888 Category 2", grade: "Critical" },
  { component: "Brake Discs (Disc Braking System)", mineral: "Alloy Grey / Ductile Iron (Cr, Mo)", spec: "EN 16482 Railway Brake Discs", grade: "Standard" }
] as const;

export const railPrograms = [
  {
    scheme: "Flagship Programme",
    title: "Vande Bharat Express (Train 18)",
    description:
      "India's semi-high-speed fully stainless steel EMU. CSML supplies SS304 coils, copper conductors, NdFeB magnets, and silicon steel laminations for ICF Chennai and BEML Bangalore manufacturing lines."
  },
  {
    scheme: "Metro Rail Expansion",
    title: "National Metro Rail Policy — 27 Cities",
    description:
      "India's metro boom requires aluminium carbody profiles, stainless steel fasteners, copper OHE wire, and lithium batteries across 27 cities. CSML provides certified material traceability from mine to metro."
  },
  {
    scheme: "Dedicated Freight Corridor",
    title: "DFCCIL Eastern & Western DFC",
    description:
      "Head-hardened 900A/1100HT rail steel, Hadfield manganese crossings, and high-tensile bogie steel for India's 3,360 km dedicated freight rail network."
  },
  {
    scheme: "Safety System",
    title: "Kavach Anti-Collision System",
    description:
      "Kavach OBUs and trackside units use rare earth magnets, copper RF assemblies, tantalum capacitors, and gallium nitride power devices."
  },
  {
    scheme: "Make in India",
    title: "Rail Coach Factory (RCF) & ICF Modernisation",
    description:
      "CSML supports India's coach production factories — ICF Chennai, RCF Kapurthala, MCF Raebareli, and BEML Bangalore — with domestic and certified-import critical material supply under MII procurement norms."
  }
] as const;

export const railwayOutlookStats = [
  { value: "5,000", unit: "+", label: "Vande Bharat Coaches Ordered by 2026" },
  { value: "₹2.4L", unit: "Cr", label: "Indian Railways Capital Expenditure FY25" },
  { value: "3,360", unit: "km", label: "Dedicated Freight Corridor Network Length" },
  { value: "27", unit: "+", label: "Cities with Active Metro Rail Projects" },
  { value: "1,000", unit: "T", label: "Copper Wire Needed Per 1,000 Rail Coaches" },
  { value: "100", unit: "%", label: "Stainless Steel Target for LHB Coaches" }
] as const;
