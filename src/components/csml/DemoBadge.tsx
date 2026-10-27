import { DEMO_NOTE } from "@/data/demoPlaceholders";

export function DemoBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span className="demo-badge" title={DEMO_NOTE}>
      {compact ? "Demo" : "Demo placeholder"}
    </span>
  );
}
