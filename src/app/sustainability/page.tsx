import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, Users, Scale, FileCheck2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { CsmlSustainabilitySection, CsmlTheme } from "@/components/csml/CsmlSections";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Explore the environmental, social and governance principles relevant to responsible mineral value chains."
};

const pillars = [
  { icon: Leaf, no: "E", title: "Environment", text: "Resource efficiency, environmental safeguards, responsible waste management and transparent measurement of impacts." },
  { icon: Users, no: "S", title: "Social", text: "Worker health and safety, community engagement, human rights and respect for people across the value chain." },
  { icon: Scale, no: "G", title: "Governance", text: "Clear accountability, ethical business conduct, due diligence and accurate disclosure." }
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="page-hero page-hero-sustainability">
        <div className="container page-hero-inner">
          <span className="eyebrow">RESPONSIBLE PROGRESS / 04</span>
          <h1>Long-term value<br />requires <em>responsible choices.</em></h1>
          <p>A credible materials ecosystem must consider environmental impact, people, governance and the evidence behind every commitment.</p>
          <div className="page-hero-foot"><span>ENVIRONMENT / SOCIAL / GOVERNANCE</span><span>MEASURE. DISCLOSE. IMPROVE.</span></div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="A FRAMEWORK FOR RESPONSIBILITY" title="Responsibility should be measurable." description="These pillars provide a starting framework for sustainability content. They do not claim that specific policies, certifications, targets or performance results are already in place at CSM." />
          <div className="esg-grid">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <article className="esg-card" key={item.no}>
                  <div className="esg-card-top"><span>{item.no}</span><Icon size={26} strokeWidth={1.4} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="esg-card-bottom">PRINCIPLE / {item.no}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CsmlTheme>
        <CsmlSustainabilitySection />
      </CsmlTheme>
      <section className="sustain-proof section-pad">
        <div className="container sustain-proof-grid">
          <div><span className="eyebrow">TRANSPARENCY BY DESIGN</span><h2>Claims need context.<br /><em>Commitments need proof.</em></h2></div>
          <div className="proof-list">
            <div><FileCheck2 size={21} /><p><strong>Publish verified data</strong><span>Use clear definitions, dates, reporting boundaries and sources.</span></p></div>
            <div><FileCheck2 size={21} /><p><strong>Separate goals from results</strong><span>Label future targets clearly and show progress only when measured.</span></p></div>
            <div><FileCheck2 size={21} /><p><strong>Keep documents accessible</strong><span>Link to approved policies, reports and disclosures when available.</span></p></div>
          </div>
        </div>
      </section>
      <section className="simple-cta"><div className="container simple-cta-inner"><div><span className="eyebrow">CONTINUE THE CONVERSATION</span><h2>Have a question about our approach?</h2></div><Link href="/contact" className="button button-primary">Get in touch <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
