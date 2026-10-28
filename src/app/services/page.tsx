import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CsmlCtaBand, CsmlServicesSection, CsmlTheme } from "@/components/csml/CsmlSections";

export const metadata: Metadata = {
  title: "Services",
  description: "End-to-end critical mineral solutions from exploration through supply chain management."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">WHAT WE DO / 02</span>
          <h1>End-to-end mineral<br /><em>solutions.</em></h1>
          <p>From geological exploration and responsible extraction to processing, supply chain management, and strategic advisory.</p>
          <div className="page-hero-foot"><span>CSM SERVICES</span><span>06 CAPABILITY AREAS</span></div>
        </div>
      </section>
      <CsmlTheme>
        <CsmlServicesSection />
        <CsmlCtaBand />
      </CsmlTheme>
      <section className="simple-cta">
        <div className="container simple-cta-inner">
          <div>
            <span className="eyebrow">NEXT STEP</span>
            <h2>Discuss a requirement with our team.</h2>
          </div>
          <Link href="/contact" className="button button-primary">
            Contact CSM <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
