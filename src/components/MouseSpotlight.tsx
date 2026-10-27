"use client";

import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) {
      node.style.display = "none";
      return;
    }

    let x = 0;
    let y = 0;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          node.style.setProperty("--spot-x", `${x}px`);
          node.style.setProperty("--spot-y", `${y}px`);
          frame = 0;
        });
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="mouse-spotlight" aria-hidden="true" />;
}
