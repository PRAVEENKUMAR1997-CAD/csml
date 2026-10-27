import { DEMO_NOTE } from "./demoPlaceholders";

/** Illustrative company timeline — demo narrative, not verified history. */
export const impactTimelineDisclaimer = DEMO_NOTE;

export const impactTimeline = [
  {
    year: "2022",
    title: "Company incorporation",
    text: "Critical & Strategy Minerals Pvt. Ltd. incorporated with a mandate to develop India's domestic critical mineral ecosystem and reduce import dependency."
  },
  {
    year: "2023",
    title: "First mineral block acquisitions",
    text: "Secured exploration licenses for lithium and graphite blocks in Rajasthan and Odisha. Initiated AI-driven geological surveys across 3 high-potential zones."
  },
  {
    year: "2024",
    title: "Strategic partnerships & expansion",
    text: "Entered bilateral MoUs with mining entities in Australia and Zimbabwe for rare earth elements and cobalt. Expanded to 8 Indian states with active geological operations."
  },
  {
    year: "2025–2026",
    title: "Processing infrastructure",
    text: "Commissioning India's first dedicated critical mineral beneficiation facility. Targeting battery-grade lithium carbonate production for domestic EV manufacturers."
  }
] as const;
