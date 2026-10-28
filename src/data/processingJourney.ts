export type ProcessingJourneyStage = {
  step: string;
  tag: string;
  title: string;
  text: string;
};

/** Illustrative value-chain stages — confirm operational scope with CSM before publication. */
export const processingJourneyStages: ProcessingJourneyStage[] = [
  {
    step: "01",
    tag: "EXPLORATION",
    title: "Resource identification",
    text: "Geological assessment and early-stage work to understand deposit potential and material quality."
  },
  {
    step: "02",
    tag: "EXTRACTION",
    title: "Responsible sourcing",
    text: "Mining or strategic procurement aligned with traceability, compliance and supply security expectations."
  },
  {
    step: "03",
    tag: "PROCESSING",
    title: "Refinement & conversion",
    text: "Beneficiation, separation and processing steps that turn raw material into industry-ready inputs."
  },
  {
    step: "04",
    tag: "APPLICATION",
    title: "Industry integration",
    text: "Delivery into magnets, batteries, alloys and other components that power electrification and advanced manufacturing."
  }
];
