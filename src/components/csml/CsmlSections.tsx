"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import "@/app/csml-sections.css";
import { portfolioMinerals } from "@/data/portfolioMinerals";
import { useScrollReveal } from "./useScrollReveal";

export {
  CsmlAboutSection,
  CsmlImpactSection,
  CsmlMagnetsSection,
  CsmlRailwaySection,
  CsmlReveal,
  CsmlSectorsSection,
  CsmlServicesSection,
  CsmlSustainabilitySection,
  CsmlTechIndustriesSection,
  CsmlTicker
} from "./CsmlPageSections";

const TILE_STEP = 280 + 24;

export function CsmlTheme({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <div className="csml-theme csml-noise">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Barlow+Condensed:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
      />
      {children}
    </div>
  );
}

type MineralCarouselProps = {
  showNavLink?: boolean;
};

export function MineralCarousel({ showNavLink = true }: MineralCarouselProps) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, portfolioMinerals.length - 1);

  const move = useCallback(
    (direction: -1 | 1) => {
      setIndex((current) => Math.min(maxIndex, Math.max(0, current + direction)));
    },
    [maxIndex]
  );

  return (
    <section className="csml-minerals" id="portfolio-carousel" style={{ paddingTop: showNavLink ? undefined : "0" }}>
      {showNavLink ? (
        <div className="csml-minerals-header" style={{ padding: "0 4rem" }}>
          <div>
            <div className="section-label">Our Portfolio</div>
            <h2 className="section-title">Critical <em>Minerals</em> We Handle</h2>
          </div>
          <div className="csml-minerals-nav" aria-label="Carousel controls">
            <button type="button" className="m-nav-btn" aria-label="Previous minerals" onClick={() => move(-1)} disabled={index === 0}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M15 6 9 12l6 6" />
              </svg>
            </button>
            <button type="button" className="m-nav-btn" aria-label="Next minerals" onClick={() => move(1)} disabled={index >= maxIndex}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}

      <div className="csml-minerals-track-wrap" style={{ padding: "0 4rem 4rem" }}>
        <div className="csml-minerals-track" style={{ transform: `translateX(-${index * TILE_STEP}px)` }} aria-live="polite">
          {portfolioMinerals.map((item) => (
            <article className="mineral-tile" key={`${item.symbol}-${item.name}`}>
              <span className="mt-badge">{item.badge}</span>
              <div className="mt-element">{item.element}</div>
              <div className="mt-name">{item.name}</div>
              <div className="mt-symbol">{item.symbol}</div>
              <div className="mt-divider" />
              <p className="mt-apps">{item.apps}</p>
            </article>
          ))}
        </div>

        {!showNavLink ? (
          <div className="csml-minerals-nav" style={{ marginTop: "2rem" }} aria-label="Carousel controls">
            <button type="button" className="m-nav-btn" aria-label="Previous minerals" onClick={() => move(-1)} disabled={index === 0}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M15 6 9 12l6 6" />
              </svg>
            </button>
            <button type="button" className="m-nav-btn" aria-label="Next minerals" onClick={() => move(1)} disabled={index >= maxIndex}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
      {showNavLink ? (
        <div style={{ padding: "0 4rem 2rem", maxWidth: 1300, margin: "0 auto" }}>
          <Link href="/minerals" className="sc-link">Full material catalogue <ArrowLinkIcon /></Link>
        </div>
      ) : null}
    </section>
  );
}

function ArrowLinkIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" width="14" height="14" aria-hidden="true">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CsmlCtaBand() {
  return (
    <section className="csml-cta-band">
      <div className="section-label">Partner With Us</div>
      <h2 className="cta-h2">Ready to Secure India&apos;s <em>Mineral Future?</em></h2>
      <p className="cta-sub">
        Whether you&apos;re an industry partner, investor, government body, or technology company — let&apos;s discuss India&apos;s critical mineral ecosystem.
      </p>
      <div className="cta-actions">
        <Link href="/contact" className="btn-primary">Get in touch</Link>
        <Link href="/minerals" className="btn-outline">View mineral portfolio</Link>
      </div>
    </section>
  );
}
