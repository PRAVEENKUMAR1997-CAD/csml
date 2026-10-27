export const techPillars = [
  {
    id: "fab",
    num: "01",
    tag: "Semiconductor Fabrication",
    title: "Chip Manufacturing Supply",
    description:
      "Semiconductor fabrication facilities (fabs) depend on an uninterrupted supply of ultra-pure minerals. From silicon wafers to process gases derived from germanium and gallium, fab-grade mineral inputs meeting SEMI standards support India's emerging fab ecosystem under the Semiconductor Mission.",
    minerals: ["Silicon (Si)", "Gallium (Ga)", "Germanium (Ge)", "Arsenic (As)", "Phosphorus (P)", "Boron (B)", "Tungsten (W)", "Cobalt (Co)"],
    features: [
      "Electronic-grade silicon (9N+ purity) for 300mm wafer production",
      "Gallium arsenide (GaAs) & GaN substrates for compound semiconductors",
      "Germanium tetrachloride for epitaxial deposition processes",
      "Cobalt, tungsten for contact metallisation in advanced nodes",
      "Supply chain designed for India Semiconductor Mission (ISM) partners"
    ],
    linkLabel: "Explore fab minerals"
  },
  {
    id: "design",
    num: "02",
    tag: "Chip Design & IP",
    title: "Design Ecosystem Minerals",
    description:
      "India's chip design industry — from fabless semiconductor companies to VLSI research — relies on minerals for EDA workstations, HPC clusters, advanced PCB prototyping, and next-generation packaging.",
    minerals: ["Indium (In)", "Tantalum (Ta)", "Copper (Cu)", "Gold (Au)", "Silver (Ag)", "Palladium (Pd)", "Tin (Sn)", "Rare Earths"],
    features: [
      "Indium tin oxide (ITO) for high-resolution design displays and monitors",
      "Tantalum capacitors for noise-sensitive analog design test equipment",
      "Copper & gold for advanced IC packaging — flip-chip, fan-out, chiplets",
      "Rare earth magnets for precision motor drives in semiconductor test jigs",
      "Palladium, silver for multi-layer ceramic capacitors (MLCCs) in PCBs"
    ],
    linkLabel: "Explore design minerals"
  },
  {
    id: "dc",
    num: "03",
    tag: "Data Centres & Cloud",
    title: "Hyperscale Infrastructure Minerals",
    description:
      "India's data centre capacity is projected to grow rapidly, demanding critical minerals for servers, power systems, cooling infrastructure, and high-speed networking.",
    minerals: ["Copper (Cu)", "Lithium (Li)", "Cobalt (Co)", "Nickel (Ni)", "Silicon (Si)", "Indium (In)", "Aluminium (Al)", "Rare Earths"],
    features: [
      "Copper busbars, busways & cables for high-density power distribution (40–100kW/rack)",
      "Lithium-ion UPS battery systems for tier-III/IV data centre uptime guarantees",
      "Rare earth materials for precision server cooling fans & magnetic bearings",
      "Indium, gallium for optical transceivers in 400G/800G spine-leaf networks",
      "Silicon carbide (SiC) for next-gen power supply units & AI GPU power delivery"
    ],
    linkLabel: "Explore DC minerals"
  }
] as const;

export const techMatrix = [
  { el: "Si", name: "Silicon", use: "Wafers, MEMS", cell: "fab" },
  { el: "Ga", name: "Gallium", use: "GaN, GaAs chips", cell: "fab" },
  { el: "Ge", name: "Germanium", use: "Epi layers, SiGe", cell: "fab" },
  { el: "In", name: "Indium", use: "ITO, optical TX", cell: "design" },
  { el: "Ta", name: "Tantalum", use: "Capacitors, PCBs", cell: "design" },
  { el: "Cu", name: "Copper", use: "Interconnects, DC", cell: "shared" },
  { el: "Li", name: "Lithium", use: "UPS batteries", cell: "dc" },
  { el: "Co", name: "Cobalt", use: "Batteries, metallisation", cell: "shared" },
  { el: "Ni", name: "Nickel", use: "NMC batteries, plating", cell: "dc" },
  { el: "W", name: "Tungsten", use: "Via fill, contacts", cell: "fab" },
  { el: "Au", name: "Gold", use: "Bonding wires, IC pkg", cell: "design" },
  { el: "REE", name: "Rare Earths", use: "Magnets, lasers, optics", cell: "shared" }
] as const;

/** Public policy / industry outlook figures — cite official programmes where applicable. */
export const techOutlookStats = [
  { value: "₹76,000", unit: "Cr", label: "India Semiconductor Mission budget (public programme)", color: "#6366F1" },
  { value: "3×", unit: "", label: "India DC capacity growth by 2028 (industry projection)", color: "var(--gold-light)" },
  { value: "₹1.7L", unit: "Cr", label: "Projected data centre investment (industry estimate)", color: "#0EA5E9" },
  { value: "28", unit: "nm→2nm", label: "India's fab technology roadmap (policy context)", color: "#A78BFA" }
] as const;
