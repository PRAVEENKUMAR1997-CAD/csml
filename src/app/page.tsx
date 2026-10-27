import Link from "next/link";
import { ArrowRight, ArrowUpRight, Factory, Globe2, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CinematicHero from "@/components/csml/CinematicHero";
import {
  PremiumApproachVisual,
  PremiumIntroBlock,
  PremiumMineralGrid,
  PremiumSectorGrid,
  MineralsSectionLink
} from "@/components/csml/HomePremiumSections";
import ProcessingJourney from "@/components/csml/ProcessingJourney";
import { Reveal } from "@/components/csml/Reveal";
import {
  CsmlImpactSection,
  CsmlServicesSection,
  CsmlTheme,
  CsmlTicker
} from "@/components/csml/CsmlSections";

const mineralItems = [
  { symbol: "Nd", name: "Neodymium", use: "Permanent magnets & EV motors", tone: "mineral-green" },
  { symbol: "Li", name: "Lithium", use: "Energy storage & batteries", tone: "mineral-sand" },
  { symbol: "Cu", name: "Copper", use: "Electrification & infrastructure", tone: "mineral-blue" },
  { symbol: "Ga", name: "Gallium", use: "Semiconductors & RF devices", tone: "mineral-gold" },
  { symbol: "Ta", name: "Tantalum", use: "Capacitors & specialist equipment", tone: "mineral-ink" },
  { symbol: "Si", name: "Silicon", use: "Semiconductors & solar", tone: "mineral-blue" }
];

const sectors = [
  { iconKey: "BatteryCharging" as const, number: "01", title: "Clean energy", text: "Materials used across energy storage, renewable power and electrification." },
  { iconKey: "Atom" as const, number: "02", title: "Semiconductors", text: "Minerals and materials supporting advanced electronics and digital infrastructure." },
  { iconKey: "Magnet" as const, number: "03", title: "Permanent magnets", text: "Rare earth elements for high-performance motors and precision applications." },
  { iconKey: "TrainFront" as const, number: "04", title: "Rail & mobility", text: "Materials supporting rail systems, transport equipment and modern mobility." }
];

export default function HomePage() {
  return (
    <>
      <CinematicHero />

      <CsmlTheme>
        <CsmlTicker />
        <CsmlServicesSection />
      </CsmlTheme>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-grid">
          <Reveal className="intro-side">
            <span className="eyebrow">01 — WHO WE ARE</span>
            <div className="intro-index">CS<span>/</span>ML</div>
          </Reveal>
          <div className="intro-main">
            <Reveal>
              <h2>Building a more resilient future starts <em>beneath the surface.</em></h2>
            </Reveal>
            <PremiumIntroBlock />
          </div>
        </div>
      </section>

      <section className="mineral-section section-pad">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading eyebrow="02 — MATERIAL INTELLIGENCE" title="The elements behind progress." description="A look at materials relevant to the technologies and infrastructure transforming modern industry." />
            <Link href="/minerals" className="text-link desktop-link">Explore minerals <ArrowRight size={17} /></Link>
          </div>
          <PremiumMineralGrid items={mineralItems} />
          <MineralsSectionLink />
          <p className="content-note">Illustrative mineral focus only. Availability, portfolio and supply capabilities must be confirmed with CSML before publication.</p>
        </div>
      </section>

      <ProcessingJourney />

      <section className="dark-section section-pad">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading light eyebrow="03 — INDUSTRY CONNECTIONS" title="Where materials meet momentum." description="Critical minerals play a role across connected industries. Explore the application areas relevant to CSML's focus." />
            <Link href="/industries" className="text-link text-link-light desktop-link">View industries <ArrowRight size={17} /></Link>
          </div>
          <PremiumSectorGrid sectors={sectors} />
          <div className="mobile-link-row"><Link href="/industries" className="text-link text-link-light">View industries <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="container approach-grid">
          <PremiumApproachVisual />
          <div className="approach-copy">
            <Reveal>
              <span className="eyebrow">04 — OUR APPROACH</span>
              <h2>From resource potential to <em>industrial possibility.</em></h2>
              <p>We aim to connect material knowledge, industry requirements and long-term thinking to help build resilient supply ecosystems.</p>
            </Reveal>
            <div className="approach-points">
              <Reveal className="approach-point" delay={0.05}>
                <span><Globe2 size={19} /></span>
                <div><h3>Strategic perspective</h3><p>Understanding the role materials play in economic and industrial priorities.</p></div>
              </Reveal>
              <Reveal className="approach-point" delay={0.1}>
                <span><Factory size={19} /></span>
                <div><h3>Industry-led thinking</h3><p>Focusing on end-use applications and the needs of evolving sectors.</p></div>
              </Reveal>
              <Reveal className="approach-point" delay={0.15}>
                <span><ShieldCheck size={19} /></span>
                <div><h3>Responsible ambition</h3><p>Making room for transparent practices and responsible resource stewardship.</p></div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link href="/about" className="button button-outline">Our company <ArrowRight size={17} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CsmlTheme>
        <CsmlImpactSection />
      </CsmlTheme>

      <section className="sustain-strip">
        <div className="container sustain-strip-inner">
          <Reveal>
            <div><span className="eyebrow">05 — RESPONSIBLE PROGRESS</span><h2>Progress matters.<br /><em>How we get there matters more.</em></h2></div>
          </Reveal>
          <Reveal delay={0.08} className="sustain-strip-side">
            <p>Explore the principles, priorities and evidence that should guide a responsible materials ecosystem.</p>
            <Link href="/sustainability" className="button button-light">Sustainability at CSML <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-inner">
          <Reveal>
            <div><span className="eyebrow">LET&apos;S START A CONVERSATION</span><h2>Have a material requirement<br />or a strategic idea?</h2></div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/contact" className="contact-round-cta"><span>Talk to our team</span><ArrowUpRight size={22} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
