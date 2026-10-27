"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BatteryCharging,
  Layers3,
  Magnet,
  TrainFront,
  type LucideIcon
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/csml/motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

function GridMotionCard({
  className,
  children,
  delay = 0
}: {
  className: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <article className={className}>{children}</article>;
  }
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.article>
  );
}

export type HomeMineralItem = {
  symbol: string;
  name: string;
  use: string;
  tone: string;
};

export type HomeSectorIconKey = "BatteryCharging" | "Atom" | "Magnet" | "TrainFront";

export type HomeSectorItem = {
  iconKey: HomeSectorIconKey;
  number: string;
  title: string;
  text: string;
};

const sectorIcons: Record<HomeSectorIconKey, LucideIcon> = {
  BatteryCharging,
  Atom,
  Magnet,
  TrainFront
};

export function PremiumMineralGrid({ items }: { items: HomeMineralItem[] }) {
  return (
    <div className="mineral-grid">
      {items.map((item, index) => (
        <GridMotionCard key={item.symbol} className={`mineral-card premium-mineral-card ${item.tone}`} delay={index * 0.05}>
          <div className="mineral-card-top"><span>0{index + 1}</span><span className="mineral-dot" /></div>
          <div className="element-symbol">{item.symbol}</div>
          <div className="element-rule" />
          <h3>{item.name}</h3>
          <p>{item.use}</p>
          <span className="element-watermark">{item.symbol}</span>
          <span className="mineral-card-shine" aria-hidden="true" />
        </GridMotionCard>
      ))}
    </div>
  );
}

export function PremiumSectorGrid({ sectors }: { sectors: HomeSectorItem[] }) {
  return (
    <div className="sector-grid">
      {sectors.map((sector, index) => {
        const Icon = sectorIcons[sector.iconKey];
        return (
          <GridMotionCard key={sector.number} className="sector-card premium-sector-card" delay={index * 0.06}>
            <div className="sector-top"><span>{sector.number}</span><Icon size={23} strokeWidth={1.4} /></div>
            <h3>{sector.title}</h3>
            <p>{sector.text}</p>
            <Link href="/industries" aria-label={`Explore ${sector.title}`}>
              <ArrowUpRight size={18} />
            </Link>
          </GridMotionCard>
        );
      })}
    </div>
  );
}

export function PremiumIntroBlock() {
  return (
    <Reveal>
      <div className="intro-bottom">
        <p>
          Critical & Strategy Minerals Private Limited (CSML) focuses on the minerals and material ecosystems that support national priorities, clean energy, advanced manufacturing and the digital economy.
        </p>
        <Link href="/about" className="round-link" aria-label="Read about CSML">
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </Reveal>
  );
}

export function PremiumApproachVisual() {
  return (
    <Reveal className="approach-visual">
      <div className="approach-visual-inner approach-visual-premium">
        <div className="approach-graphic"><Layers3 size={68} strokeWidth={0.8} /></div>
        <span className="visual-label visual-label-a">RESOURCE</span>
        <span className="visual-label visual-label-b">INDUSTRY</span>
        <span className="visual-label visual-label-c">FUTURE</span>
        <div className="visual-index">CSML / 03</div>
        <div className="approach-pulse" aria-hidden="true" />
      </div>
    </Reveal>
  );
}

export function MineralsSectionLink() {
  return (
    <Reveal>
      <div className="mobile-link-row">
        <Link href="/minerals" className="text-link">
          Explore minerals <ArrowRight size={17} />
        </Link>
      </div>
    </Reveal>
  );
}
