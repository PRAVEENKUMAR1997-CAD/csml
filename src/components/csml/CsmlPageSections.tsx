"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { DEMO_CERTIFICATIONS, DEMO_COMPANY_STATS, DEMO_ESG_INDICATORS, DEMO_NOTE } from "@/data/demoPlaceholders";
import { impactTimeline, impactTimelineDisclaimer } from "@/data/impactTimeline";
import { magnetElements, magnetFlowSteps, magnetMarketStats, magnetTypes } from "@/data/magnetsPage";
import { portfolioMinerals } from "@/data/portfolioMinerals";
import { railwayCategories, railwayOutlookStats, railwayPrograms, railwayTableRows } from "@/data/railwayPage";
import { services } from "@/data/services";
import { strategicSectors } from "@/data/sectors";
import { techMatrix, techOutlookStats, techPillars } from "@/data/techIndustries";
import { tickerItems } from "@/data/tickerItems";
import { useScrollReveal } from "./useScrollReveal";

function DemoFlag() {
  return (
    <span className="demo-flag" title={DEMO_NOTE} aria-label="Demo placeholder">
      DEMO
    </span>
  );
}

function ArrowLink() {
  return (
    <svg viewBox="0 0 14 14" fill="none" width="14" height="14" aria-hidden="true">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CsmlReveal({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return children;
}

export function CsmlTicker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="csml-ticker" aria-hidden="true">
      <div className="csml-ticker-track">
        {items.map((item, index) => (
          <span className="csml-ticker-item" key={`${item}-${index}`}>
            <span className="csml-ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CsmlServicesSection() {
  return (
    <section className="csml-services" id="services">
      <div className="csml-services-header anim">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">End-to-End Mineral <em>Solutions</em></h2>
      </div>
      <div className="csml-services-grid">
        {services.map((service, index) => (
          <article className={`service-card anim${index % 3 ? ` anim-d${index % 3}` : ""}`} key={service.num}>
            <div className="sc-num">{service.num}</div>
            <div className="sc-icon" aria-hidden="true">
              <svg viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="18" cy="18" r="4" fill="currentColor" opacity=".4" />
              </svg>
            </div>
            <div className="sc-title">{service.title}</div>
            <p className="sc-desc">{service.description}</p>
            <Link href="/contact" className="sc-link">
              Learn more <ArrowLink />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

const aboutFeatures = [
  { icon: "⬡", label: "Integrated Value Chain", desc: "From geological survey and mineral block acquisition to beneficiation, refining, and domestic supply." },
  { icon: "◈", label: "Government Aligned", desc: "Structured in compliance with MMDR Act, 2021 and India's Critical Mineral List framework." },
  { icon: "⟁", label: "Technology Forward", desc: "Leveraging AI-driven geological mapping, drone surveys, and advanced processing technologies." }
];

export function CsmlAboutSection() {
  const portfolio = portfolioMinerals.slice(0, 6);
  return (
    <section className="csml-about" id="about-csml">
      <div className="csml-about-inner">
        <div className="csml-about-text">
          <div className="section-label anim">Who We Are</div>
          <h2 className="section-title anim anim-d1">Built for India&apos;s <em>Strategic</em> Mineral Future</h2>
          <p className="anim anim-d2">
            Critical & Strategy Minerals Private Limited (CSM) is dedicated to the exploration, development, and supply of minerals deemed critical for national security, clean energy, advanced manufacturing, and the digital economy.
          </p>
          <p className="anim anim-d2">
            Aligned with the Government of India&apos;s National Critical Mineral Mission and KABIL&apos;s strategic objectives, we bridge the gap between mineral resource endowment and industrial demand.
          </p>
          <div className="csml-about-features anim anim-d3">
            {aboutFeatures.map((feature) => (
              <div className="csml-about-feature" key={feature.label}>
                <div className="feat-icon">{feature.icon}</div>
                <div>
                  <div className="feat-label">{feature.label}</div>
                  <div className="feat-desc">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="csml-about-visual anim anim-d2">
          <div className="mineral-card">
            <div className="mc-title">Mineral Portfolio Overview</div>
            <div className="mc-grid">
              {portfolio.map((item) => (
                <div className="mc-item" key={item.symbol}>
                  <div className="mc-mineral">{item.name}</div>
                  <div className="mc-symbol">{item.symbol} · {item.element}</div>
                  <div className="mc-use">{item.apps}</div>
                </div>
              ))}
            </div>
            <p className="mc-csml-footer">
              India imports a large share of its critical mineral requirements. CSM aims to strengthen domestic supply — operational scope to be confirmed by the company. <DemoFlag />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CsmlImpactSection() {
  return (
    <section className="csml-impact" id="impact">
      <div className="csml-impact-inner">
        <div className="csml-impact-top">
          <div>
            <div className="section-label anim">Our Impact</div>
            <h2 className="section-title anim anim-d1">Numbers That <em>Define</em> Our Mission</h2>
            <p className="anim anim-d2" style={{ color: "var(--text)", marginTop: "1rem", fontSize: ".9rem" }}>
              Illustrative metrics below are demo placeholders only. <DemoFlag />
            </p>
            <div className="csml-impact-numbers" style={{ marginTop: "3rem" }}>
              {DEMO_COMPANY_STATS.map((stat, index) => (
                <div className={`csml-impact-num anim anim-d${Math.min(index + 2, 3)}`} key={stat.label}>
                  <div className="in-val">{stat.display}</div>
                  <div className="in-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="csml-impact-quote anim anim-d2">
            <div className="iq-text">&ldquo;Critical minerals are the new oil — nations that secure them today will lead the industries of tomorrow.&rdquo;</div>
            <div className="iq-source">India&apos;s National Critical Mineral Mission, 2024</div>
            <p style={{ color: "var(--text)", fontSize: ".9rem", lineHeight: 1.7, marginTop: "1.5rem" }}>
              India has identified 30 critical minerals essential for green energy, defence, high-tech manufacturing, and strategic industries.
            </p>
          </div>
        </div>
        <div style={{ maxWidth: 1300 }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300, color: "var(--white)", marginBottom: "3rem" }} className="anim">
            Our Journey & <em>Milestones</em> <DemoFlag />
          </h3>
          <p className="anim" style={{ color: "var(--text)", fontSize: ".82rem", marginBottom: "1.5rem" }} title={impactTimelineDisclaimer}>
            {impactTimelineDisclaimer}
          </p>
          <div className="csml-impact-timeline anim">
            {impactTimeline.map((item) => (
              <div className="tl-item" key={item.year}>
                <div className="tl-year">{item.year}</div>
                <div className="tl-title">{item.title}</div>
                <div className="tl-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const sectorAccentClass: Record<string, string> = {
  fab: "sector-fab",
  gold: "sector-gold",
  dc: "sector-dc",
  mag: "sector-mag",
  rail: "sector-rail"
};

export function CsmlSectorsSection() {
  return (
    <section className="csml-sectors" id="sectors">
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }} className="anim">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span style={{ display: "none" }} />
            Industries We Serve
          </div>
          <h2 className="section-title">Powering India&apos;s <em>Strategic</em> Sectors</h2>
          <p style={{ color: "var(--text)", maxWidth: 600, margin: "1.2rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            Critical minerals underpin the most vital and fastest-growing industries of the modern Indian economy.
          </p>
        </div>
        <div className="csml-sectors-grid">
          {strategicSectors.map((sector, index) => {
            const accent = "accent" in sector ? sector.accent : undefined;
            return (
            <div
              className={`sector-item anim${index % 4 ? ` anim-d${index % 4}` : ""} ${accent ? sectorAccentClass[accent] : ""}`}
              key={sector.name}
            >
              <span className="si-icon">{sector.icon}</span>
              <div className="si-name">{sector.name}</div>
              <div className="si-desc">{sector.description}</div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CsmlTechIndustriesSection() {
  return (
    <section className="csml-tech" id="technology">
      <div className="csml-tech-circuit" aria-hidden="true" />
      <div className="csml-tech-inner">
        <div className="csml-tech-intro anim">
          <div className="section-label">Technology Industries</div>
          <h2 className="section-title">Minerals at the Heart of <em>Chips, Design & the Cloud</em></h2>
          <p>
            The global semiconductor, chip design, and data centre revolution is fundamentally a minerals story — from silicon wafers to gallium nitride power devices, tantalum capacitors to copper busbars.
          </p>
        </div>
        <div className="csml-tech-pillars">
          {techPillars.map((pillar, index) => (
            <div className={`csml-tech-pillar tp-${pillar.id} anim${index ? ` anim-d${index}` : ""}`} key={pillar.id}>
              <div className="tp-accent" />
              <div className="tp-num">{pillar.num}</div>
              <div className="tp-tag">{pillar.tag}</div>
              <div className="tp-title">{pillar.title}</div>
              <p className="tp-desc">{pillar.description}</p>
              <div className="tp-minerals">
                {pillar.minerals.map((m) => (
                  <span className="tp-mineral-chip" key={m}>{m}</span>
                ))}
              </div>
              <div className="tp-features">
                {pillar.features.map((f) => (
                  <div className="tp-feature" key={f}>{f}</div>
                ))}
              </div>
              <Link href="/contact" className="tp-link">
                {pillar.linkLabel} <ArrowLink />
              </Link>
            </div>
          ))}
        </div>
        <div className="csml-tech-matrix anim">
          <div className="tm-title">Critical Mineral — Technology Application Matrix</div>
          <div className="tm-grid">
            {techMatrix.map((cell) => (
              <div className={`tm-cell ${cell.cell}`} key={cell.el}>
                <div className="tm-el">{cell.el}</div>
                <div className="tm-name">{cell.name}</div>
                <div className="tm-use">{cell.use}</div>
              </div>
            ))}
          </div>
          <div className="tm-legend">
            <div className="tm-leg-item"><div className="tm-leg-dot" style={{ background: "#6366F1" }} />Semiconductor Fabrication</div>
            <div className="tm-leg-item"><div className="tm-leg-dot" style={{ background: "var(--gold)" }} />Chip Design & Packaging</div>
            <div className="tm-leg-item"><div className="tm-leg-dot" style={{ background: "#0EA5E9" }} />Data Centre Infrastructure</div>
            <div className="tm-leg-item"><div className="tm-leg-dot" style={{ background: "#A78BFA" }} />Shared / Cross-Industry</div>
          </div>
        </div>
        <div className="csml-tech-stats anim">
          {techOutlookStats.map((stat) => (
            <div className="csml-tech-stat" key={stat.label}>
              <div className="csml-tech-stat-val" style={{ color: stat.color }}>
                {stat.value}<span>{stat.unit}</span>
              </div>
              <div className="csml-tech-stat-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CsmlMagnetsSection() {
  return (
    <section className="csml-magnets" id="permanent-magnets">
      <div className="mag-inner">
        <div className="mag-intro anim">
          <div className="section-label" style={{ color: "#E83939" }}>
            <span style={{ display: "block", width: 30, height: 1, background: "#E83939", flexShrink: 0 }} />
            Permanent Magnets
          </div>
          <h2 className="section-title">Rare Earth <em>Permanent Magnets</em> — The Invisible Engine</h2>
          <p>
            Permanent magnets are silent workhorses behind every EV motor, wind turbine generator, industrial servo, MRI machine, and defence guidance system.
          </p>
        </div>
        <div className="mag-split">
          <div>
            <div className="mag-subhead anim">Types of Permanent Magnets We Supply</div>
            <div className="mag-types anim anim-d1">
              {magnetTypes.map((type) => (
                <div className="mag-type" key={type.name}>
                  <div className="mt-grade">{type.grade}</div>
                  <div className="mt-magname">{type.name}</div>
                  <p className="mt-desc">{type.description}</p>
                  <div className="mt-specs">
                    {type.specs.map((spec) => (
                      <span className="mt-spec" key={spec}>{spec}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mag-visual">
            <div className="mag-subhead anim">Key Magnet Minerals We Source</div>
            {magnetElements.map((el, index) => (
              <div className={`mag-el-card anim${index ? ` anim-d${Math.min(index, 3)}` : ""}`} key={el.symbol}>
                <div className="mec-header">
                  <div className="mec-symbol">{el.symbol}</div>
                  <div>
                    <div className="mec-name">{el.name}</div>
                    <div className="mec-num">{el.num}</div>
                  </div>
                </div>
                <p className="mec-body">{el.body}</p>
                <div className="mec-apps">
                  {el.apps.map((app) => (
                    <span className="mec-app" key={app}>{app}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mag-flow anim">
          <div className="mf-title">NdFeB Permanent Magnet — Value Chain</div>
          <div className="mf-steps">
            {magnetFlowSteps.map((step, index) => (
              <div className="mf-step" key={step.label}>
                <div className="mf-dot">{String(index + 1).padStart(2, "0")}</div>
                <div className="mf-label">{step.label}</div>
                <div className="mf-sub">{step.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mag-stats anim">
          {magnetMarketStats.map((stat) => (
            <div className="mag-stat" key={stat.label}>
              <div className="ms-val">
                {stat.value}<span className="ms-unit">{stat.unit}</span>
              </div>
              <div className="ms-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CsmlRailwaySection() {
  return (
    <section className="csml-railway" id="railway">
      <div className="rail-inner">
        <div className="rail-intro anim">
          <div className="section-label" style={{ color: "#FB923C" }}>
            <span style={{ display: "block", width: 30, height: 1, background: "#FB923C", flexShrink: 0 }} />
            Railway Coach Manufacturing
          </div>
          <h2 className="section-title">Powering India&apos;s <em>Rail Revolution</em> — Material by Material</h2>
          <p>
            India&apos;s railway modernisation — Vande Bharat Express, metro rail expansion, dedicated freight corridors, Kavach safety systems, and stainless steel coaches — demands speciality steels, aluminium alloys, copper, and critical minerals across the coach manufacturing value chain.
          </p>
        </div>
        <div className="rail-categories">
          {railwayCategories.map((cat, index) => (
            <div className={`rail-cat anim${index ? ` anim-d${index}` : ""}`} key={cat.title}>
              <div className="rc-icon" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none"><rect x="4" y="28" width="32" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" /></svg>
              </div>
              <div className="rc-cat-label">{cat.label}</div>
              <div className="rc-title">{cat.title}</div>
              <p className="rc-desc">{cat.description}</p>
              <div className="rc-minerals">
                {cat.minerals.map((m) => (
                  <span className="rc-min" key={m}>{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rail-table anim">
          <div className="rail-table-head">
            <span>Material Specification Matrix — Indian Railway Coach Manufacturing</span>
          </div>
          <div className="rt-header">
            <div className="rt-col-head">Component</div>
            <div className="rt-col-head">Key Minerals / Alloys</div>
            <div className="rt-col-head">Specification</div>
            <div className="rt-col-head">Grade</div>
          </div>
          {railwayTableRows.map((row) => (
            <div className="rt-row" key={row.component}>
              <div className="rt-component">{row.component}</div>
              <div className="rt-mineral">{row.mineral}</div>
              <div className="rt-spec">{row.spec}</div>
              <div><span className="rt-grade">{row.grade}</span></div>
            </div>
          ))}
        </div>
        <div className="rail-bottom">
          <div>
            <div className="rail-subhead anim">Key Railway Programmes — CSM Alignment</div>
            <div className="rail-programs anim anim-d1">
              {railwayPrograms.map((program) => (
                <div className="rp-item" key={program.title}>
                  <div className="rp-scheme">{program.scheme}</div>
                  <div className="rp-title">{program.title}</div>
                  <p className="rp-desc">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rail-subhead anim">Railway Sector — Demand Outlook</div>
            <div className="rail-stats-grid anim anim-d1">
              {railwayOutlookStats.map((stat) => (
                <div className="rs-stat" key={stat.label}>
                  <div className="rss-val">{stat.value}</div>
                  <div className="rss-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CsmlSustainabilitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fills = section.querySelectorAll<HTMLElement>(".esg-fill");
    if (reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          fills.forEach((bar) => {
            const target = bar.dataset.width ?? "0";
            bar.style.width = "0";
            window.setTimeout(() => {
              bar.style.width = `${target}%`;
            }, 200);
          });
          observer.disconnect();
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    { icon: "🌿", title: "Environmental", desc: "Zero-waste processing targets, mine reclamation plans, water recycling, and carbon-neutral operations by 2035 (aspirational — confirm with CSM)." },
    { icon: "👥", title: "Social", desc: "Community development, local employment priority, tribal land rights compliance, and inclusive growth initiatives." },
    { icon: "⚖", title: "Governance", desc: "Transparent operations, regulatory compliance, ethical sourcing, and full traceability from mine to market." },
    { icon: "🔬", title: "Innovation", desc: "R&D investment in green extraction technologies, bioleaching, and low-impact mineral processing methods." }
  ];

  return (
    <section className="csml-sustain" id="sustainability-esg" ref={sectionRef}>
      <div className="csml-sustain-inner">
        <div>
          <div className="section-label anim">Responsibility</div>
          <h2 className="section-title anim anim-d1">Mining for a <em>Sustainable</em> Future</h2>
          <p style={{ color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.8, fontSize: "1rem" }} className="anim anim-d2">
            Minerals that power the green transition should themselves be produced responsibly. ESG commitments and performance data below are demo placeholders until verified. <DemoFlag />
          </p>
          <div className="csml-sustain-pillars anim anim-d3">
            {pillars.map((pillar) => (
              <div className="pillar" key={pillar.title}>
                <span className="pillar-icon">{pillar.icon}</span>
                <div className="pillar-title">{pillar.title}</div>
                <div className="pillar-desc">{pillar.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="csml-sustain-right anim anim-d2">
          <div className="esg-meter">
            <div className="esg-title">ESG Performance Indicators <DemoFlag /></div>
            <div className="esg-bars">
              {DEMO_ESG_INDICATORS.map((item) => (
                <div className="esg-bar-item" key={item.name}>
                  <div className="esg-bar-label">
                    <span className="esg-bar-name">{item.name}</span>
                    <span className="esg-bar-val">{item.percent}%</span>
                  </div>
                  <div className="esg-track">
                    <div className="esg-fill" data-width={item.percent} style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="esg-cert-block">
              <div className="esg-cert-title">Certifications & Standards <DemoFlag /></div>
              <p>{DEMO_CERTIFICATIONS}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
