"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useCallback, useRef } from "react";

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const onHeroMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (reduce) return;
      const glow = glowRef.current;
      const bounds = sectionRef.current?.getBoundingClientRect();
      if (!glow || !bounds) return;
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      glow.style.setProperty("--hero-glow-x", `${x}px`);
      glow.style.setProperty("--hero-glow-y", `${y}px`);
    },
    [reduce]
  );

  return (
    <section
      className="hero hero-cinematic"
      ref={sectionRef}
      style={{ position: "relative" }}
      onPointerMove={onHeroMove}
    >
      <motion.div className="hero-cinematic-bg" style={reduce ? undefined : { y: bgY }} aria-hidden="true">
        <div className="hero-cinematic-photo hero-cinematic-photo-a" />
        <div className="hero-cinematic-photo hero-cinematic-photo-b" />
        <div className="hero-cinematic-veil" />
      </motion.div>
      <div ref={glowRef} className="hero-mouse-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="hero-content container">
        <motion.div className="hero-copy" style={reduce ? undefined : { y: copyY }}>
          <motion.div
            className="hero-kicker"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="status-dot" /> CRITICAL MATERIALS. STRATEGIC FUTURE.
          </motion.div>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            Materials that<br />move <em>nations</em><span className="hero-period">.</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
          >
            Connecting critical and strategic minerals with the industries building a more resilient, electrified and advanced future.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            <Link href="/minerals" className="button button-primary">
              Explore our focus <ArrowUpRight size={17} />
            </Link>
            <Link href="/about" className="text-link">
              Discover CSM <ArrowRight size={17} />
            </Link>
          </motion.div>
          <motion.div
            className="hero-caption"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <span className="caption-line" /> INDIA-FOCUSED. INDUSTRY-LED. FUTURE-READY.
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-art hero-art-cinematic"
          aria-label="Abstract layered mineral formation illustration"
          role="img"
          style={reduce ? undefined : { y: artY }}
        >
          <div className="art-label art-label-top"><span>ELEMENT / Nd</span><span>60.08</span></div>
          <div className="crystal crystal-back" />
          <div className="crystal crystal-mid" />
          <div className="crystal crystal-front" />
          <div className="art-ring ring-a" />
          <div className="art-ring ring-b" />
          <div className="art-cross cross-a" />
          <div className="art-cross cross-b" />
          <div className="hero-art-scan" aria-hidden="true" />
          <div className="art-label art-label-bottom"><span>STRATEGIC MATERIALS</span><span>01 — 06</span></div>
        </motion.div>
      </div>
      <div className="hero-bottom container">
        <span>01 / A MATERIALS-LED APPROACH</span>
        <a href="#about" aria-label="Scroll to about section"><ArrowDownRight size={20} /></a>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
