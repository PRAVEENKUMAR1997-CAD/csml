import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BatteryCharging, Cpu, Database, Magnet, TrainFront, Wind } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  CsmlMagnetsSection,
  CsmlRailwaySection,
  CsmlSectorsSection,
  CsmlTechIndustriesSection,
  CsmlTheme
} from "@/components/csml/CsmlSections";

export const metadata: Metadata = {
  title: "Industries",
  description: "Discover how critical materials are used across modern industrial sectors."
};

const industries = [
  { no: "01", icon: BatteryCharging, title: "Energy storage & electrification", description: "Battery materials and conductive metals support energy storage, electric mobility and grid infrastructure.", tags: ["Lithium", "Copper", "Nickel"] },
  { no: "02", icon: Cpu, title: "Semiconductors & electronics", description: "Specialty materials contribute to semiconductor fabrication, packaging, displays and high-performance electronics.", tags: ["Gallium", "Germanium", "Indium", "Tantalum"] },
  { no: "03", icon: Magnet, title: "Permanent magnets", description: "Rare earth elements are important inputs for high-performance motors, generators and precision systems.", tags: ["Neodymium", "Dysprosium", "Praseodymium"] },
  { no: "04", icon: TrainFront, title: "Rail & transport", description: "Industrial metals and engineered materials support rail infrastructure, rolling stock and transport equipment.", tags: ["Manganese", "Chromium", "Aluminium"] },
  { no: "05", icon: Wind, title: "Renewables", description: "Wind and solar technologies rely on diverse materials across generation, storage and electrical systems.", tags: ["Rare earths", "Copper", "Silicon"] },
  { no: "06", icon: Database, title: "Data infrastructure", description: "Power systems, network hardware and computing infrastructure depend on metals and specialist components.", tags: ["Copper", "Tantalum", "Silver"] }
];

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero page-hero-industries">
        <div className="container page-hero-inner">
          <span className="eyebrow">APPLICATIONS / 03</span>
          <h1>Materials are the<br /><em>infrastructure of progress.</em></h1>
          <p>Explore the connections between critical materials and the industrial systems shaping tomorrow.</p>
          <div className="page-hero-foot"><span>INDUSTRIAL APPLICATIONS</span><span>06 FOCUS AREAS</span></div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="CONNECTED INDUSTRIES" title="One material. Many possibilities." description="Applications vary by grade, processing, technical specifications and end-user requirements. The examples below are general industry context." />
          <div className="industry-grid">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <article className="industry-card" key={item.no}>
                  <div className="industry-card-top"><span>{item.no}</span><Icon size={26} strokeWidth={1.4} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CsmlTheme>
        <CsmlSectorsSection />
        <CsmlTechIndustriesSection />
        <CsmlMagnetsSection />
        <CsmlRailwaySection />
      </CsmlTheme>
      <section className="industry-banner">
        <div className="container industry-banner-inner"><div><span className="eyebrow">HAVE A SPECIFIC APPLICATION?</span><h2>Let&apos;s talk about the material behind your next step.</h2></div><Link href="/contact" className="button button-primary">Contact the team <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
