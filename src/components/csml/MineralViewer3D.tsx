"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import type { Mineral } from "@/data/minerals";

type MineralViewer3DProps = {
  mineral: Mineral;
  fallbackTone?: string;
};

function useStaticViewer() {
  return useSyncExternalStore(
    () => () => {},
    () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches,
    () => true
  );
}

export default function MineralViewer3D({ mineral, fallbackTone = "#c2a66b" }: MineralViewer3DProps) {
  const staticMode = useStaticViewer();
  const [broken, setBroken] = useState(false);
  const rotRef = useRef({ x: -12, y: 24 });
  const sceneRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  const applyRotation = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.style.setProperty("--rx", `${rotRef.current.x}deg`);
    scene.style.setProperty("--ry", `${rotRef.current.y}deg`);
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    if (staticMode) return;
    dragging.current = true;
    last.current = { x: event.clientX, y: event.clientY };
    (event.target as HTMLElement).setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging.current || staticMode) return;
    const dx = event.clientX - last.current.x;
    const dy = event.clientY - last.current.y;
    last.current = { x: event.clientX, y: event.clientY };
    rotRef.current = {
      x: Math.max(-28, Math.min(28, rotRef.current.x - dy * 0.35)),
      y: rotRef.current.y + dx * 0.45
    };
    applyRotation();
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onWheel = (event: React.WheelEvent) => {
    if (staticMode) return;
    event.preventDefault();
    const scene = sceneRef.current;
    if (!scene) return;
    const scale = Math.max(0.85, Math.min(1.15, 1 - event.deltaY * 0.001));
    scene.style.setProperty("--scale", String(scale));
  };

  return (
    <div className="mineral-viewer-wrap">
      <p className="mineral-viewer-hint">
        {staticMode ? "Specimen preview" : "Drag to rotate · scroll to zoom"}
      </p>
      <div
        className={`mineral-viewer${staticMode ? " is-static" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onWheel={onWheel}
        role="img"
        aria-label={`${mineral.name} specimen viewer`}
      >
        <div className="mineral-viewer-scene" ref={sceneRef}>
          <div className="mineral-viewer-crystal" style={{ "--fallback": fallbackTone } as React.CSSProperties}>
            {!broken ? (
              <img
                src={mineral.image}
                alt=""
                width={400}
                height={400}
                draggable={false}
                onError={() => setBroken(true)}
              />
            ) : (
              <span className="material-photo-fallback" aria-hidden="true"><span /></span>
            )}
          </div>
          <div className="mineral-viewer-floor" />
        </div>
      </div>
    </div>
  );
}
