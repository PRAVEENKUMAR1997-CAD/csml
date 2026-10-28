export const aboutFeatures = [
  {
    icon: "⬡",
    label: "Integrated Value Chain",
    description:
      "From geological survey and mineral block acquisition to beneficiation, refining, and domestic supply."
  },
  {
    icon: "◈",
    label: "Government Aligned",
    description: "Structured in compliance with MMDR Act, 2021 and India's Critical Mineral List framework."
  },
  {
    icon: "⟁",
    label: "Technology Forward",
    description: "Leveraging AI-driven geological mapping, drone surveys, and advanced processing technologies."
  }
] as const;

export const portfolioOverview = [
  { name: "Lithium", symbol: "Li · Atomic No. 3", use: "EV batteries, grid storage, pharma" },
  { name: "Cobalt", symbol: "Co · Atomic No. 27", use: "Battery cathodes, superalloys" },
  { name: "Graphite", symbol: "C · Allotrope", use: "Anodes, refractories, lubricants" },
  { name: "Vanadium", symbol: "V · Atomic No. 23", use: "Flow batteries, high-strength steel" },
  { name: "Rare Earths", symbol: "REE · 17 Elements", use: "Magnets, defence, electronics" },
  { name: "Nickel", symbol: "Ni · Atomic No. 28", use: "NMC batteries, stainless steel" }
] as const;

/** Demo narrative — verify milestones with CSM before publication. */
export const impactTimeline = [
  {
    year: "2022",
    title: "Company Incorporation",
    text:
      "Critical & Strategy Minerals Pvt. Ltd. incorporated with a mandate to develop India's domestic critical mineral ecosystem and reduce import dependency."
  },
  {
    year: "2023",
    title: "First Mineral Block Acquisitions",
    text:
      "Secured exploration licenses for lithium and graphite blocks in Rajasthan and Odisha. Initiated AI-driven geological surveys across 3 high-potential zones."
  },
  {
    year: "2024",
    title: "Strategic Partnerships & Expansion",
    text:
      "Entered bilateral MoUs with mining entities in Australia and Zimbabwe for rare earth elements and cobalt. Expanded to 8 Indian states with active geological operations."
  },
  {
    year: "2025–2026",
    title: "Processing Infrastructure",
    text:
      "Commissioning India's first dedicated critical mineral beneficiation facility. Targeting battery-grade lithium carbonate production for domestic EV manufacturers."
  }
] as const;
