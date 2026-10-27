"use client";

import { useEffect } from "react";

const observed = new WeakSet<Element>();
let sharedObserver: IntersectionObserver | null = null;

function registerAnimNodes() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = document.querySelectorAll<HTMLElement>(".csml-theme .anim");

  if (!nodes.length) return;

  if (reduced) {
    nodes.forEach((el) => el.classList.add("in-view"));
    return;
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  nodes.forEach((el) => {
    if (observed.has(el) || el.classList.contains("in-view")) return;
    observed.add(el);
    sharedObserver?.observe(el);
  });
}

export function useScrollReveal() {
  useEffect(() => {
    registerAnimNodes();
    const frame = window.requestAnimationFrame(registerAnimNodes);
    const timer = window.setTimeout(registerAnimNodes, 120);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);
}
