import Link from "next/link";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Atom, BatteryCharging,
  Factory, Globe2, Layers3, Magnet, ShieldCheck, TrainFront
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  CsmlImpactSection,
  CsmlServicesSection,
  CsmlTheme,
  CsmlTicker
} from "@/components/csml/CsmlSections";
import { MineralsSectionLink, PremiumMineralGrid } from "@/components/csml/HomePremiumSections";
import { Reveal } from "@/components/csml/motion";

const mineralItems = [
  { symbol: "Nd", name: "Neodymium", use: "Permanent magnets & EV motors", tone: "mineral-green" },
  { symbol: "Li", name: "Lithium", use: "Energy storage & batteries", tone: "mineral-sand" },
  { symbol: "Cu", name: "Copper", use: "Electrification & infrastructure", tone: "mineral-blue" },
  { symbol: "Ga", name: "Gallium", use: "Semiconductors & RF devices", tone: "mineral-gold" },
  { symbol: "Ta", name: "Tantalum", use: "Capacitors & specialist equipment", tone: "mineral-ink" },
  { symbol: "Si", name: "Silicon", use: "Semiconductors & solar", tone: "mineral-blue" }
];

const sectors = [
  { icon: BatteryCharging, number: "01", title: "Clean energy", text: "Materials used across energy storage, renewable power and electrification." },
  { icon: Atom, number: "02", title: "Semiconductors", text: "Minerals and materials supporting advanced electronics and digital infrastructure." },
  { icon: Magnet, number: "03", title: "Permanent magnets", text: "Rare earth elements for high-performance motors and precision applications." },
  { icon: TrainFront, number: "04", title: "Rail & mobility", text: "Materials supporting rail systems, transport equipment and modern mobility." }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content container">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="status-dot" /> CRITICAL MATERIALS. STRATEGIC FUTURE.</div>
            <h1>Materials that<br />move <em>nations</em><span className="hero-period">.</span></h1>
            <p className="hero-description">Connecting critical and strategic minerals with the industries building a more resilient, electrified and advanced future.</p>
            <div className="hero-actions">
              <Link href="/minerals" className="button button-primary">Explore our focus <ArrowUpRight size={17} /></Link>
              <Link href="/about" className="text-link">Discover CSM <ArrowRight size={17} /></Link>
            </div>
            <div className="hero-caption"><span className="caption-line" /> INDIA-FOCUSED. INDUSTRY-LED. FUTURE-READY.</div>
          </div>
          <div className="hero-art" aria-label="Abstract layered mineral formation illustration" role="img">
            <div className="art-label art-label-top"><span>ELEMENT /  Nd</span><span>60.08</span></div>
            <div className="crystal crystal-back" />
            <div className="crystal crystal-mid" />
            <div className="crystal crystal-front" />
            <div className="art-ring ring-a" />
            <div className="art-ring ring-b" />
            <div className="art-cross cross-a" />
            <div className="art-cross cross-b" />
            <div className="art-label art-label-bottom"><span>STRATEGIC MATERIALS</span><span>01 — 06</span></div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>01 / A MATERIALS-LED APPROACH</span>
          <a href="#about" aria-label="Scroll to about section"><ArrowDownRight size={20} /></a>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      <CsmlTheme>
        <CsmlTicker />
        <CsmlServicesSection />
      </CsmlTheme>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-grid">
          <div className="intro-side">
            <span className="eyebrow">01 — WHO WE ARE</span>
            <div className="intro-index">CSM</div>
          </div>
          <div className="intro-main">
            <h2>Building a more resilient future starts <em>beneath the surface.</em></h2>
            <div className="intro-bottom">
              <p>Critical & Strategy Minerals Private Limited (CSM) focuses on the minerals and material ecosystems that support national priorities, clean energy, advanced manufacturing and the digital economy.</p>
              <Link href="/about" className="round-link" aria-label="Read about CSM"><ArrowUpRight size={20} /></Link>
            </div>
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
          <p className="content-note">Illustrative mineral focus only. Availability, portfolio and supply capabilities must be confirmed with CSM before publication.</p>
        </div>
      </section>

      <section className="dark-section section-pad">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading light eyebrow="03 — INDUSTRY CONNECTIONS" title="Where materials meet momentum." description="Critical minerals play a role across connected industries. Explore the application areas relevant to CSM's focus." />
            <Link href="/industries" className="text-link text-link-light desktop-link">View industries <ArrowRight size={17} /></Link>
          </div>
          <div className="sector-grid">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <article className="sector-card" key={sector.number}>
                  <div className="sector-top"><span>{sector.number}</span><Icon size={23} strokeWidth={1.4} /></div>
                  <h3>{sector.title}</h3>
                  <p>{sector.text}</p>
                  <Link href="/industries" aria-label={`Explore ${sector.title}`}><ArrowUpRight size={18} /></Link>
                </article>
              );
            })}
          </div>
          <div className="mobile-link-row"><Link href="/industries" className="text-link text-link-light">View industries <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="container approach-grid">
          <div className="approach-visual">
            <div className="approach-visual-inner">
              <div className="approach-graphic"><Layers3 size={68} strokeWidth={0.8} /></div>
              <span className="visual-label visual-label-a">RESOURCE</span>
              <span className="visual-label visual-label-b">INDUSTRY</span>
              <span className="visual-label visual-label-c">FUTURE</span>
              <div className="visual-index">CSM / 03</div>
            </div>
          </div>
          <div className="approach-copy">
            <span className="eyebrow">04 — OUR APPROACH</span>
            <h2>From resource potential to <em>industrial possibility.</em></h2>
            <p>We aim to connect material knowledge, industry requirements and long-term thinking to help build resilient supply ecosystems.</p>
            <div className="approach-points">
              <div><span><Globe2 size={19} /></span><div><h3>Strategic perspective</h3><p>Understanding the role materials play in economic and industrial priorities.</p></div></div>
              <div><span><Factory size={19} /></span><div><h3>Industry-led thinking</h3><p>Focusing on end-use applications and the needs of evolving sectors.</p></div></div>
              <div><span><ShieldCheck size={19} /></span><div><h3>Responsible ambition</h3><p>Making room for transparent practices and responsible resource stewardship.</p></div></div>
            </div>
            <Link href="/about" className="button button-outline">Our company <ArrowRight size={17} /></Link>
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
            <Link href="/sustainability" className="button button-light">Sustainability at CSM <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-inner">
          <div><span className="eyebrow">LET&apos;S START A CONVERSATION</span><h2>Have a material requirement<br />or a strategic idea?</h2></div>
          <Link href="/contact" className="contact-round-cta"><span>Talk to our team</span><ArrowUpRight size={22} /></Link>
        </div>
      </section>
    </>
  );
}