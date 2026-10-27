import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Target, Handshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { CsmlAboutSection, CsmlImpactSection, CsmlTheme } from "@/components/csml/CsmlSections";

export const metadata: Metadata = {
  title: "About CSML",
  description: "Learn about Critical & Strategy Minerals Private Limited and its materials-led focus."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">THE COMPANY / 01</span>
          <h1>A strategic view<br />of <em>critical materials.</em></h1>
          <p>Critical & Strategy Minerals Private Limited (CSML) is focused on the materials that underpin national priorities, clean energy, advanced manufacturing and the digital economy.</p>
          <div className="page-hero-foot"><span>ABOUT CSML</span><span>01 — 04</span></div>
        </div>
      </section>
      <CsmlTheme>
        <CsmlAboutSection />
        <CsmlImpactSection />
      </CsmlTheme>
      <section className="section-pad">
        <div className="container about-statement">
          <span className="eyebrow">OUR PERSPECTIVE</span>
          <div>
            <h2>Materials are more than commodities. They are <em>enablers of progress.</em></h2>
            <p>Our starting point is the connection between resource potential and real industrial needs. We aim to build a clear understanding of material applications, supply ecosystems and the changing priorities of the sectors that depend on them.</p>
            <p>The company profile, active projects, partnerships and operational capabilities should be confirmed by CSML before this page is published as an official corporate statement.</p>
          </div>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="OUR FOUNDATIONS" title="A long-term view. A practical approach." description="The principles below are a proposed communication framework and should be aligned with approved company policy." />
          <div className="values-grid">
            <article><span><Compass /></span><span className="eyebrow">01 / DIRECTION</span><h3>Strategic thinking</h3><p>Connect material opportunities to wider industrial and economic priorities.</p></article>
            <article><span><Target /></span><span className="eyebrow">02 / PURPOSE</span><h3>Industry relevance</h3><p>Keep real applications and customer requirements at the centre of the conversation.</p></article>
            <article><span><Handshake /></span><span className="eyebrow">03 / PARTNERSHIP</span><h3>Long-term relationships</h3><p>Build transparent, dependable relationships across the materials value chain.</p></article>
          </div>
        </div>
      </section>
      <section className="simple-cta"><div className="container simple-cta-inner"><div><span className="eyebrow">NEXT STEP</span><h2>Let&apos;s explore where our interests align.</h2></div><Link href="/contact" className="button button-primary">Contact CSML <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
