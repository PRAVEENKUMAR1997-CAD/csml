"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { processingJourneyStages } from "@/data/processingJourney";

export default function ProcessingJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.25"],
    layoutEffect: false
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (reduce) return;
    const node = sectionRef.current;
    if (!node) return;

    const steps = node.querySelectorAll<HTMLElement>("[data-journey-step]");
    if (!steps.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.journeyStep);
          if (!Number.isNaN(index)) setActive(index);
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <section
      className="journey-section section-pad"
      id="value-chain"
      aria-labelledby="journey-heading"
      ref={sectionRef}
    >
      <div className="container">
        <RevealBlock>
          <SectionHeading
            eyebrow="02B — VALUE CHAIN"
            title="From ore to industrial impact."
            description="A scroll-through view of how critical minerals move from resource potential to the technologies and infrastructure CSML's focus areas support."
          />
        </RevealBlock>

        <div className="journey-layout">
          <div className="journey-rail" aria-hidden="true">
            <div className="journey-rail-track">
              {reduce ? (
                <div className="journey-rail-fill" style={{ width: `${((active + 1) / processingJourneyStages.length) * 100}%` }} />
              ) : (
                <motion.div className="journey-rail-fill" style={{ width: progressWidth }} />
              )}
            </div>
            <ol className="journey-rail-dots">
              {processingJourneyStages.map((stage, index) => (
                <li key={stage.step} className={index <= active ? "is-active" : undefined}>
                  <span>{stage.step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="journey-steps">
            {processingJourneyStages.map((stage, index) => (
              <article
                className={`journey-step${index === active ? " is-active" : ""}`}
                key={stage.step}
                data-journey-step={index}
              >
                <RevealBlock delay={index * 0.06}>
                  <span className="journey-tag">{stage.tag}</span>
                  <h3 id={index === 0 ? "journey-heading" : undefined}>{stage.title}</h3>
                  <p>{stage.text}</p>
                </RevealBlock>
              </article>
            ))}
          </div>

          <div className="journey-visual" aria-hidden="true">
            {processingJourneyStages.map((stage, index) => (
              <div className={`journey-panel journey-panel-${index + 1}${index === active ? " is-active" : ""}`} key={stage.step}>
                <span className="journey-panel-label">{stage.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
