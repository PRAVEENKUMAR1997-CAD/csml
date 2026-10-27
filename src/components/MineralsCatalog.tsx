"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MineralViewer3D from "@/components/csml/MineralViewer3D";
import {
  Atom,
  BatteryCharging,
  Cpu,
  LayoutGrid,
  LayoutList,
  Magnet,
  Sun,
  TrainFront,
  Zap,
  type LucideIcon
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { minerals, type Mineral } from "@/data/minerals";

const mineralIcons: Partial<Record<Mineral["symbol"], LucideIcon>> = {
  Nd: Magnet,
  Dy: Zap,
  Pr: Magnet,
  Li: BatteryCharging,
  Ga: Cpu,
  Ge: Sun,
  In: Cpu,
  Cu: Zap,
  Ta: Cpu,
  Mn: TrainFront,
  Co: BatteryCharging,
  C: Atom,
  V: Zap,
  Ni: BatteryCharging,
  Ti: Atom,
  Si: Cpu,
  Cr: TrainFront,
  REE: Magnet
};

const views = [
  { id: "list", label: "List view", icon: LayoutList },
  { id: "grid", label: "Grid view", icon: LayoutGrid }
] as const;

type MaterialView = (typeof views)[number]["id"];

const fallbackTones: Record<Mineral["symbol"], string> = {
  Nd: "#c8c2b4",
  Dy: "#ddd9d1",
  Pr: "#c9c79a",
  Li: "#d8c2d6",
  Ga: "#d7dbdf",
  Ge: "#bdb8b2",
  In: "#e4d6b4",
  Cu: "#c9844d",
  Ta: "#93a9b8",
  Mn: "#7a7672",
  Co: "#8fa4c4",
  C: "#4a4a4a",
  V: "#9a8b7a",
  Ni: "#a8b5a0",
  Ti: "#b8c0c8",
  Si: "#c5ccd4",
  Cr: "#9aa3ad",
  REE: "#c2a66b"
};

export default function MineralsCatalog() {
  const reduceMotion = useReducedMotion();
  const [view, setView] = useState<MaterialView>("list");
  const [selectedSymbol, setSelectedSymbol] = useState<Mineral["symbol"] | null>(null);
  const [brokenImages, setBrokenImages] = useState<Partial<Record<Mineral["symbol"], boolean>>>({});
  const skipScroll = useRef(true);
  const previousView = useRef<MaterialView>(view);
  const selectedIndex = minerals.findIndex((item) => item.symbol === selectedSymbol);
  const selected = selectedIndex >= 0 ? minerals[selectedIndex] : null;

  useEffect(() => {
    if (skipScroll.current) {
      skipScroll.current = false;
      previousView.current = view;
      return;
    }

    const viewChanged = previousView.current !== view;
    previousView.current = view;

    if (!viewChanged && view === "grid" && selectedSymbol) {
      document.getElementById("material-details")?.scrollIntoView({ block: "nearest" });
    }

    if (viewChanged && view === "list" && selectedSymbol) {
      document.getElementById(`mineral-${selectedSymbol}`)?.scrollIntoView({ block: "nearest" });
    }
  }, [view, selectedSymbol]);

  function changeView(next: MaterialView) {
    setView(next);
  }

  function onSwitchKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const index = views.findIndex((item) => item.id === view);
    let next = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % views.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + views.length) % views.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = views.length - 1;
    else return;

    event.preventDefault();
    const nextView = views[next].id;
    changeView(nextView);
    event.currentTarget.querySelector<HTMLButtonElement>(`[data-view="${nextView}"]`)?.focus();
  }

  return (
    <>
      <div className="section-head-row">
        <SectionHeading
          eyebrow="A MATERIALS LANDSCAPE"
          title="Small elements. System-level impact."
          description="The following is an educational overview of selected minerals and common applications. It is not a representation of confirmed CSML inventory, sourcing rights or supply commitments."
        />
        <div
          className="materials-view-switch"
          role="radiogroup"
          aria-label="Materials view"
          onKeyDown={onSwitchKeyDown}
        >
          {views.map((item) => {
            const Icon = item.icon;
            const checked = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                data-view={item.id}
                aria-checked={checked}
                tabIndex={checked ? 0 : -1}
                onClick={() => changeView(item.id)}
              >
                <Icon size={15} strokeWidth={1.6} aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div
            key={selected.symbol}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <MineralDetail mineral={selected} index={selectedIndex} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {view === "list" ? (
        <div className="minerals-list">
          {minerals.map((item, index) => {
            const Icon = mineralIcons[item.symbol] ?? Atom;
            const isSelected = item.symbol === selectedSymbol;
            return (
              <motion.article
                className={`mineral-list-row${isSelected ? " is-selected" : ""}`}
                key={item.symbol}
                id={`mineral-${item.symbol}`}
                initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.24) }}
              >
                <span className="row-index"> {String(index + 1).padStart(2, "0")} </span>
                <span className="row-symbol">{item.symbol}</span>
                <div className="row-name"><span>{item.category}</span><h3>{item.name}</h3></div>
                <p>{item.application}</p>
                <Icon className="row-icon" size={22} strokeWidth={1.3} />
                <button
                  type="button"
                  className="mineral-row-hit"
                  aria-pressed={isSelected}
                  aria-controls="material-details"
                  aria-label={`Open ${item.name} details`}
                  onClick={() => setSelectedSymbol(item.symbol)}
                />
              </motion.article>
            );
          })}
        </div>
      ) : (
        <ul className="materials-grid">
          {minerals.map((item, index) => {
            const isSelected = item.symbol === selectedSymbol;
            return (
              <motion.li
                key={item.symbol}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.2) }}
              >
                <button
                  type="button"
                  className="material-grid-card"
                  aria-pressed={isSelected}
                  aria-controls="material-details"
                  onClick={() => setSelectedSymbol(item.symbol)}
                >
                  <MineralPhoto
                    mineral={item}
                    broken={Boolean(brokenImages[item.symbol])}
                    onError={() => {
                      setBrokenImages((current) => (
                        current[item.symbol] ? current : { ...current, [item.symbol]: true }
                      ));
                    }}
                  />
                  <span className="material-grid-name">{item.name}</span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      )}
    </>
  );
}

function MineralPhoto({
  mineral,
  broken,
  onError
}: {
  mineral: Mineral;
  broken: boolean;
  onError: () => void;
}) {
  return (
    <span
      className="material-grid-photo"
      style={{ "--fallback": fallbackTones[mineral.symbol] } as React.CSSProperties}
    >
      {broken ? (
        <span className="material-photo-fallback" aria-hidden="true"><span /></span>
      ) : (
        <img
          src={mineral.image}
          alt=""
          width={800}
          height={600}
          decoding="async"
          draggable={false}
          onError={onError}
        />
      )}
    </span>
  );
}

function MineralDetail({ mineral, index }: { mineral: Mineral; index: number }) {
  const Icon = mineralIcons[mineral.symbol] ?? Atom;

  return (
    <article className="material-detail material-detail-premium" id="material-details" aria-labelledby="material-details-title" tabIndex={-1}>
      <span className="eyebrow">Material details</span>
      <MineralViewer3D mineral={mineral} fallbackTone={fallbackTones[mineral.symbol]} />
      <span className="row-index"> {String(index + 1).padStart(2, "0")} </span>
      <span className="row-symbol">{mineral.symbol}</span>
      <div className="row-name">
        <span>{mineral.category}</span>
        <h3 id="material-details-title">{mineral.name}</h3>
      </div>
      <p>{mineral.application}</p>
      <Icon className="row-icon" size={22} strokeWidth={1.3} />
    </article>
  );
}
